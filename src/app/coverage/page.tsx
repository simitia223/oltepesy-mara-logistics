import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RouteBand } from "@/components/marketing/RouteBand";
import { CtaBand } from "@/components/marketing/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "OLTEPESY Mara Logistics collects from Nairobi and Narok Town and delivers to camps, lodges, hotels and businesses across the Maasai Mara.",
};

export default function CoveragePage() {
  return (
    <>
      <PageHeader
        eyebrow="Coverage"
        title="From Nairobi & Narok to the Mara."
        intro="We collect from suppliers in Nairobi and Narok Town and deliver into the Maasai Mara. Focus on this one movement is what keeps deliveries reliable and prices fair."
      />

      <Section>
        <RouteBand />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-2xl border border-line bg-surface/50 p-7">
            <h2 className="font-display text-lg font-semibold text-fg">
              Collection — Nairobi
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For bulk shops, better selection and better prices. We collect from
              supermarkets, wholesalers, distributors and specialist suppliers
              across the city.
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-line bg-surface/50 p-7">
            <h2 className="font-display text-lg font-semibold text-fg">
              Collection — Narok Town
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For top-ups, fresh produce and anything needed quickly. Naivas,
              Quickmart, markets, butcheries and hardware suppliers in and around
              town.
            </p>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-line bg-surface/50 p-7">
            <h2 className="font-display text-lg font-semibold text-fg">
              Delivery — {site.destination}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Camps, lodges, hotels and businesses in and around the reserve. Some
              properties sit well off the main road — send the exact location and
              we&apos;ll confirm access before you book.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-6 rounded-2xl border border-clay/30 bg-clay-dim p-7">
          <h2 className="font-display text-lg font-semibold text-fg">
            Beyond the Mara
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/80">
            As demand grows we&apos;ll extend the service to other hospitality
            destinations. If you operate elsewhere and want deliveries from
            Nairobi or Narok, tell us — early interest shapes where we go next.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-2xl font-semibold text-fg">On timing</h2>
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
