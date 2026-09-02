"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewCard, ReviewsSummary } from "@/components/marketing/ReviewsList";
import { businessCategories } from "@/lib/content";
import { fetchReviews, type ReviewsResponse } from "@/lib/reviews";

export function ReviewsBand() {
  const [data, setData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetchReviews(ctrl.signal).then(setData);
    return () => ctrl.abort();
  }, []);

  const hasReviews = data && data.reviews.length > 0;

  return (
    <Section className="border-t border-line bg-ink-soft">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Reviews"
          title={hasReviews ? "What Mara businesses say." : "Built for Mara businesses."}
        />
        <Link
          href="/reviews"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-sand"
        >
          {hasReviews ? "Read all reviews" : "Leave a review"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {hasReviews ? (
        <div className="mt-8 space-y-6">
          <ReviewsSummary data={data} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.reviews.slice(0, 3).map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} {...r} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm">
            {businessCategories.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-clay/60" aria-hidden />
                )}
                <span className="text-fg/80">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-lg text-sm text-muted">
            We&apos;re a new service and we won&apos;t publish reviews we
            haven&apos;t earned. If we&apos;ve delivered for you, yours can be the
            first.
          </p>
          <ButtonLink href="/reviews" variant="outline" className="mt-6">
            Leave a review
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}
