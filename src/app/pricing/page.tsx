import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { priceFactors, priceTiers, faqs } from "@/lib/content";
import { primaryCta, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Delivery pricing that fits your load. Each delivery into the Mara from Nairobi or Narok is quoted on size, weight, destination, schedule and urgency — request a quote.",
};

const pricingFaqs = faqs.filter((f) =>
  [
    "How is delivery pricing calculated?",
    "Do you buy the goods for us?",
    "Can you collect from multiple suppliers?",
    "How do I book?",
  ].includes(f.q),
);

function tierHref(cta: string) {
  if (cta === "Talk to us") return "/for-businesses";
  if (cta === "Priority quotation")
    return whatsappLink("Hello OLTEPESY, I need an express delivery into the Mara.");
  return "/contact";
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Delivery pricing that fits your load."
        intro="We're not secretive about pricing — but we don't force fixed prices, because delivery costs genuinely vary. Tell us what's moving and where, and you get a clear quote before anything is collected."
      >
        <ButtonLink href={primaryCta.href} size="lg">
          Get a Delivery Quote
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
          Choose the delivery that fits
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Four ways to move an order. Each one is quoted for your specific load —
          you always see the price before the delivery is confirmed.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priceTiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 4) * 60}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6"
            >
              <IconTile name={t.icon} />
              <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                {t.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-clay">{t.forWho}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t.examples}
              </p>
              <ButtonLink
                href={tierHref(t.cta)}
                variant="outline"
                size="md"
                className="mt-5 w-full"
                external={t.cta === "Priority quotation"}
              >
                {t.cta}
              </ButtonLink>
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
        title="Get a delivery quote"
        text="Send your order details and destination. We'll come back with a price and a delivery arrangement — no obligation, and nothing is confirmed until you accept."
      />
    </>
  );
}
