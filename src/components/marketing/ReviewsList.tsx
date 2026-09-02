"use client";

import { useEffect, useState } from "react";
import { ReviewStars } from "./ReviewStars";
import {
  fetchReviews,
  formatReviewDate,
  type ReviewsResponse,
} from "@/lib/reviews";

export function ReviewsSummary({ data }: { data: ReviewsResponse }) {
  if (data.stats.count === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ReviewStars rating={data.stats.average} size="h-5 w-5" />
      <span className="font-display text-lg font-semibold text-fg">
        {data.stats.average.toFixed(1)}
      </span>
      <span className="text-sm text-muted">
        from {data.stats.count} {data.stats.count === 1 ? "review" : "reviews"}
      </span>
    </div>
  );
}

export function ReviewCard({
  name,
  business,
  rating,
  text,
  createdAt,
}: ReviewsResponse["reviews"][number]) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6">
      <ReviewStars rating={rating} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-fg/85">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 border-t border-line pt-3 text-sm">
        <span className="font-medium text-fg">{name}</span>
        {business ? <span className="text-muted"> · {business}</span> : null}
        {createdAt ? (
          <span className="mt-0.5 block text-xs text-muted/70">
            {formatReviewDate(createdAt)}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function ReviewsList({ limit }: { limit?: number }) {
  const [data, setData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetchReviews(ctrl.signal).then(setData);
    return () => ctrl.abort();
  }, []);

  if (!data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: limit ?? 3 }).map((_, i) => (
          <div
            key={i}
            className="h-44 animate-pulse rounded-2xl border border-line bg-surface/40"
          />
        ))}
      </div>
    );
  }

  if (data.reviews.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-surface/50 p-8 text-center">
        <p className="font-display text-lg font-semibold text-fg">
          No reviews yet.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          We&apos;re a new service and we won&apos;t publish reviews we
          haven&apos;t earned. If we&apos;ve delivered for you, yours can be the
          first.
        </p>
      </div>
    );
  }

  const shown = limit ? data.reviews.slice(0, limit) : data.reviews;

  return (
    <div className="space-y-6">
      <ReviewsSummary data={data} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} {...r} />
        ))}
      </div>
    </div>
  );
}
