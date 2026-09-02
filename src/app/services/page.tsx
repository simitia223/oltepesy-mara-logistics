import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { services } from "@/lib/content";
import { primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scheduled runs, bulk, express, business and return logistics between Narok Town and the Maasai Mara.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Five ways we move your supplies."
        intro="Every service runs the same Narok → Mara route. What changes is the rhythm, the load and the urgency — and the price follows."
      >
        <ButtonLink href={primaryCta.href} size="lg">
          {primaryCta.label}
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="space-y-4">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              id={s.slug}
              delay={(i % 2) * 60}
              className="scroll-mt-24 rounded-2xl border border-line bg-surface/50 p-7 sm:p-9"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-10">
                <div>
                  <span className="text-3xl">{s.icon}</span>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-fg">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                </div>
                <ul className="grid gap-3 self-center sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 rounded-xl border border-line bg-ink/40 px-4 py-3 text-sm text-fg/85"
                    >
                      <span className="text-clay">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
