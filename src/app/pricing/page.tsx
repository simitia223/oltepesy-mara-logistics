import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { priceFactors, priceBands, faqs } from "@/lib/content";
import { primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Delivery pricing that fits your load. Each Narok to Mara delivery is quoted on size, weight, destination, schedule and urgency — request a quote.",
};

const pricingFaqs = faqs.filter((f) =>
  ["How is pricing worked out?", "Do you buy the goods for me?", "How do I book?"].includes(
    f.q,
  ),
);

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pricing that fits the load."
        intro="We don't publish flat rates because no two deliveries are the same. Tell us what's moving and where, and you get a clear price before anything is collected."
      >
        <ButtonLink href={primaryCta.href} size="lg">
          Request a quote
        </ButtonLink>
      </PageHeader>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-fg">
          What every quote is built from
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceFactors.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <h3 className="font-display text-base font-semibold text-fg">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-2xl font-semibold text-fg">
          Where your delivery is likely to sit
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Indicative categories only — not prices. Your quote is confirmed for
          your specific order.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priceBands.map((b, i) => (
            <Reveal
              key={b.name}
              delay={(i % 4) * 60}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-fg">
                {b.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-clay">{b.forWho}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {b.examples}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Business-account customers get agreed rates for their regular runs and
          one consolidated invoice each month.
        </p>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-fg">
          Pricing questions
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {pricingFaqs.map((f, i) => (
            <Reveal
              key={f.q}
              delay={i * 50}
              className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10"
            >
              <h3 className="font-display text-lg font-medium text-fg">{f.q}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Request a delivery quote"
        text="Send your order details and destination. We'll come back with a price and a delivery arrangement — no obligation."
      />
    </>
  );
}
