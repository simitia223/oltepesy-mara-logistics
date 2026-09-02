import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/marketing/CtaBand";
import { services } from "@/lib/content";
import { primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scheduled runs, bulk, express, business and return logistics from Nairobi and Narok Town to the Maasai Mara.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Logistics built around your operation."
        intro="Every service delivers into the Mara from Nairobi and Narok. What changes is the rhythm, the load and the urgency — and the price follows."
      >
        <ButtonLink href={primaryCta.href} size="lg">
          Book a Delivery
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
                  <IconTile name={s.icon} />
                  <h2 className="mt-4 font-display text-2xl font-semibold text-fg">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink href={primaryCta.href} size="md">
                      Book a Delivery
                    </ButtonLink>
                    <ButtonLink href="/pricing" variant="outline" size="md">
                      Get a Quote
                    </ButtonLink>
                  </div>
                </div>
                <ul className="grid gap-3 self-center sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-ink/40 px-4 py-3 text-sm text-fg/85"
                    >
                      <Icon name="badge-check" className="mt-0.5 h-4 w-4 shrink-0 text-acacia" />
                      {p}
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
