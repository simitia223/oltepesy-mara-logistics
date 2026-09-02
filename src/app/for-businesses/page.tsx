import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { businessBenefits, segments } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Business accounts for camps, lodges, hotels and operators that resupply from Narok every week — scheduled runs, one contact, monthly invoicing.",
};

export default function ForBusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For businesses"
        title="Turn resupply into a scheduled service."
        intro="A business account is for properties that move supplies from Narok regularly. Instead of arranging every trip, you get a fixed schedule, one point of contact and a single monthly invoice."
      >
        <ButtonLink
          href={whatsappLink(
            "Hi Oltepesy, I'd like to open a business account for regular Narok to Mara deliveries.",
          )}
          size="lg"
          external
        >
          Open a business account
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessBenefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={(i % 3) * 70}
              className="rounded-2xl border border-line bg-surface/60 p-6"
            >
              <span className="text-xl">{b.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-fg">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-3xl font-semibold text-fg">
          Who it suits
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <span className="text-xl">{s.icon}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-fg">
          Getting set up
        </h2>
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
        title="Set up your delivery schedule"
        text="Tell us your suppliers, your frequency and your property. We'll propose a schedule and rates for your regular runs."
      />
    </>
  );
}
