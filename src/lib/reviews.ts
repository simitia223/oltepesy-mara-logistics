export type PublicReview = {
  name: string;
  business: string;
  rating: number;
  text: string;
  createdAt: string;
};

export type ReviewsResponse = {
  reviews: PublicReview[];
  stats: { count: number; average: number };
};

/**
 * Fetches approved reviews from the Cloudflare Pages Function at /api/reviews.
 * Returns an empty set on any failure (e.g. running the static build with no
 * functions layer, or a network error) so the UI degrades cleanly.
 */
export async function fetchReviews(signal?: AbortSignal): Promise<ReviewsResponse> {
  try {
    const res = await fetch("/api/reviews", { signal });
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as ReviewsResponse;
    if (!Array.isArray(data.reviews)) throw new Error("bad shape");
    return data;
  } catch {
    return { reviews: [], stats: { count: 0, average: 0 } };
  }
}

export function formatReviewDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-KE", { month: "long", year: "numeric" });
}
