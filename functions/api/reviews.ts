/// <reference types="@cloudflare/workers-types" />

interface Env {
  REVIEWS: KVNamespace;
}

export interface Review {
  id: string;
  name: string;
  business: string;
  rating: number;
  text: string;
  createdAt: string;
  status: "pending" | "approved";
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

async function listReviews(env: Env, status?: Review["status"]) {
  const list = await env.REVIEWS.list({ prefix: "review:" });
  const items = await Promise.all(
    list.keys.map((k) => env.REVIEWS.get<Review>(k.name, "json")),
  );
  return (items.filter(Boolean) as Review[])
    .filter((r) => (status ? r.status === status : true))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Public: approved reviews + aggregate rating. */
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const reviews = await listReviews(env, "approved");
  const count = reviews.length;
  const average =
    count === 0
      ? 0
      : Math.round(
          (reviews.reduce((s, r) => s + r.rating, 0) / count) * 10,
        ) / 10;
  return json({
    reviews: reviews.map(({ name, business, rating, text, createdAt }) => ({
      name,
      business,
      rating,
      text,
      createdAt,
    })),
    stats: { count, average },
  });
};

/** Public: submit a review. Stored as pending until approved. */
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot — bots fill hidden fields.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ ok: true }); // pretend success, drop silently
  }

  const name = String(body.name ?? "").trim();
  const business = String(body.business ?? "").trim();
  const rating = Number(body.rating);
  const text = String(body.text ?? "").trim();

  if (name.length < 2 || name.length > 60)
    return json({ error: "Please enter your name." }, 400);
  if (business.length > 80)
    return json({ error: "Business name is too long." }, 400);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return json({ error: "Please choose a rating from 1 to 5." }, 400);
  if (text.length < 10 || text.length > 1000)
    return json({ error: "Please write a review between 10 and 1000 characters." }, 400);

  // Basic per-IP cooldown (10 minutes).
  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const rlKey = `ratelimit:${ip}`;
  if (await env.REVIEWS.get(rlKey)) {
    return json({ error: "You've just submitted a review — thank you. Please try again later." }, 429);
  }

  // Cap pending queue so KV can't be flooded.
  const pending = await listReviews(env, "pending");
  if (pending.length >= 100) {
    return json({ error: "We're catching up on reviews right now. Please try again soon." }, 503);
  }

  const createdAt = new Date().toISOString();
  const id = `${createdAt}-${crypto.randomUUID().slice(0, 8)}`;
  const review: Review = {
    id,
    name,
    business,
    rating,
    text,
    createdAt,
    status: "pending",
  };

  await env.REVIEWS.put(`review:${id}`, JSON.stringify(review));
  await env.REVIEWS.put(rlKey, "1", { expirationTtl: 600 });

  return json({ ok: true });
};
