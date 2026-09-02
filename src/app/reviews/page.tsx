import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { ReviewsList } from "@/components/marketing/ReviewsList";
import { ReviewForm } from "@/components/marketing/ReviewForm";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What businesses in the Maasai Mara say about OLTEPESY deliveries from Nairobi and Narok. Leave your own review.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What Mara businesses say."
        intro="Reviews are submitted by customers and checked against our delivery records before they're published — we don't write them, edit them or filter genuine feedback."
      />

      <Section>
        <ReviewsList />
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Leave a review
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Have we delivered for your camp, lodge, hotel or business? Tell
              other Mara operators how it went. It helps them, and it helps us
              improve.
            </p>
          </div>
          <ReviewForm />
        </div>
      </Section>
    </>
  );
}
