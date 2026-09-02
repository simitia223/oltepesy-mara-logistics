import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { CtaBand } from "@/components/marketing/CtaBand";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about OLTEPESY Mara Logistics — what we do, where we collect and deliver, how pricing works and how to book a delivery into the Maasai Mara.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        intro="If your question isn't here, send it on WhatsApp — the quickest way to get a straight answer."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBand
        title="Still have a question?"
        text="Message us on WhatsApp with your property, your suppliers and roughly what you move — we'll tell you exactly how it would work."
      />
    </>
  );
}
