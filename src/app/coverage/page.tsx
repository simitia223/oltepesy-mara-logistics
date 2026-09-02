import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RouteVisual } from "@/components/marketing/RouteVisual";
import { CtaBand } from "@/components/marketing/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "Oltepesy Mara Logistics runs the Narok Town to Maasai Mara corridor — collection points, delivery zones and how to check your location.",
};

export default function CoveragePage() {
  return (
    <>
      <PageHeader
        eyebrow="Coverage"
        title="One route. Done properly."
        intro={`We run a single corridor — ${site.route} — and we run it well. Focus keeps deliveries reliable and prices fair.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <Reveal className="rounded-2xl border border-line bg-surface/50 p-7">
              <h2 className="font-display text-lg font-semibold text-fg">
                Collection — {site.collectionPoint}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We collect from any legitimate supplier in and around Narok Town —
                supermarkets, wholesalers, butcheries, farmers and hardware
                suppliers. Tell us the supplier name and location once your order
                is paid for and ready.
              </p>
            </Reveal>

            <Reveal delay={80} className="rounded-2xl border border-line bg-surface/50 p-7">
              <h2 className="font-display text-lg font-semibold text-fg">
                Delivery — {site.destination}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We deliver to camps, lodges, hotels and businesses in and around
                the Maasai Mara. Some properties sit well off the main road — send
                us the exact location and we&apos;ll confirm access and the arrival
                window before you book.
              </p>
            </Reveal>

            <Reveal delay={160} className="rounded-2xl border border-clay/30 bg-clay-dim p-7">
              <h2 className="font-display text-lg font-semibold text-fg">
                Beyond the Mara
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg/80">
                As demand grows we&apos;ll extend the service to other hospitality
                destinations. If you operate elsewhere and want deliveries from
                Narok, tell us — early interest shapes where we go next.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <RouteVisual />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-2xl font-semibold text-fg">
          On timing
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          We give an arrival window with each booking, based on the route and
          conditions on the day. We don&apos;t promise an exact hour — the Mara
          road doesn&apos;t allow it honestly — but scheduled customers always
          know their day, and we update you if anything shifts.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
