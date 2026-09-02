import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { businessBenefits, segments } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Accounts",
  description:
    "Business accounts for camps, lodges, hotels and operators that resupply from Nairobi or Narok every week — scheduled runs, one contact, proof of delivery, monthly invoicing.",
};

const accountWhatsapp = whatsappLink(
  "Hello OLTEPESY, I'd like to request a business account for regular deliveries into the Mara.",
);

export default function ForBusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business accounts"
        title="Your logistics partner in the Mara."
        intro="For businesses that need more than a one-off delivery. If you resupply from Nairobi or Narok every week, an account turns delivery from a scramble into a scheduled, invoiced service with one point of contact."
      >
        <ButtonLink href={accountWhatsapp} size="lg" external>
          Request a Business Account
        </ButtonLink>
      </PageHeader>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-fg">
          What a business account gives you
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessBenefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={(i % 4) * 60}
              className="rounded-2xl border border-line bg-surface/60 p-6"
            >
              <IconTile name={b.icon} />
              <h3 className="mt-3 font-display text-sm font-semibold text-fg">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-2xl font-semibold text-fg">Who it suits</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <IconTile name={s.icon} />
              <h3 className="mt-3 font-display text-base font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-fg">Getting set up</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Tell us your pattern", "Which suppliers, how often, roughly what volume."],
            ["Agree a schedule", "We fix collection days and an arrival window, plus rates for your regular runs."],
            ["Run it monthly", "Deliveries happen on schedule; you settle one consolidated invoice at month-end."],
          ].map(([t, d], i) => (
            <Reveal
              key={t}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <span className="font-display text-sm text-clay">0{i + 1}</span>
              <h3 className="mt-2 font-display text-base font-semibold text-fg">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Request a business account"
        text="Tell us your suppliers, your frequency and your property. We'll propose a schedule and rates for your regular runs — no commitment until you're happy with it."
      />
    </>
  );
}
