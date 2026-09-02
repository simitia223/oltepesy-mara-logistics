/// <reference types="@cloudflare/workers-types" />

import type { Review } from "./reviews";

interface Env {
  REVIEWS: KVNamespace;
  ADMIN_TOKEN: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

function authed(request: Request, env: Env) {
  const url = new URL(request.url);
  const token = (
    url.searchParams.get("token") ||
    request.headers.get("x-admin-token") ||
    ""
  ).trim();
  const expected = (env.ADMIN_TOKEN ?? "").trim();
  return expected.length > 0 && token === expected;
}

async function allReviews(env: Env) {
  const list = await env.REVIEWS.list({ prefix: "review:" });
  const items = await Promise.all(
    list.keys.map((k) => env.REVIEWS.get<Review>(k.name, "json")),
  );
  return (items.filter(Boolean) as Review[]).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

/** List every review (pending + approved). Token required. */
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!authed(request, env)) return json({ error: "Unauthorized" }, 401);
  const reviews = await allReviews(env);
  return json({
    pending: reviews.filter((r) => r.status === "pending"),
    approved: reviews.filter((r) => r.status === "approved"),
  });
};

/** { id, action: "approve" | "reject" }. Token required. */
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!authed(request, env)) return json({ error: "Unauthorized" }, 401);

  let body: { id?: string; action?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const key = `review:${body.id ?? ""}`;
  const review = await env.REVIEWS.get<Review>(key, "json");
  if (!review) return json({ error: "Not found." }, 404);

  if (body.action === "approve") {
    review.status = "approved";
    await env.REVIEWS.put(key, JSON.stringify(review));
    return json({ ok: true, status: "approved" });
  }
  if (body.action === "reject") {
    await env.REVIEWS.delete(key);
    return json({ ok: true, status: "deleted" });
  }
  return json({ error: "Unknown action." }, 400);
};
