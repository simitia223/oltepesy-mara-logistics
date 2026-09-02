import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "OLTEPESY Mara Logistics makes the movement of supplies from Nairobi and Narok Town to the Maasai Mara simpler, more reliable and better organised for hospitality businesses.",
};

const values = [
  {
    title: "Reliability over promises",
    text: "We'd rather give you an honest arrival window and hit it than quote an exact hour and miss it.",
  },
  {
    title: "You stay in control",
    text: "You choose your suppliers and pay them directly. We move goods — we don't get between you and your buying.",
  },
  {
    title: "One job, done well",
    text: "Focus on the run into the Mara from Nairobi and Narok is what keeps deliveries dependable and pricing fair.",
  },
  {
    title: "Within the rules",
    text: "We operate under Kenyan transport law and a clear policy on what we will and won't carry.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built for the businesses that keep the Mara moving."
        intro="OLTEPESY Mara Logistics exists to take one recurring job off hospitality teams: getting paid-for supplies from a Nairobi or Narok counter to a property in the reserve."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Every camp, lodge and hotel in the Mara depends on a steady flow of
              supplies from Nairobi and Narok Town — fresh food, water, beverages,
              cleaning and housekeeping stock, kitchen equipment and spare parts.
              Getting those supplies from a supplier&apos;s counter to a property
              in the reserve is its own job, and it usually lands on staff who
              already have plenty to do.
            </p>
            <p>
              We take that job on. Customers keep full control of what they buy
              and who they buy it from. Once an order is paid for and ready, we
              collect it in Nairobi or Narok, consolidate it with other
              deliveries heading the same way, and transport it safely to the
              property.
            </p>
            <p>
              The model is deliberately simple:{" "}
              <span className="font-semibold text-fg">
                they buy, we collect, we deliver.
              </span>{" "}
              We&apos;re a logistics company — we don&apos;t buy goods for
              customers, and we don&apos;t carry restricted or prohibited items.
            </p>
            <p>
              We&apos;re focused on one job and doing it well: moving supplies
              into the Mara from Nairobi and Narok. As demand grows we&apos;ll
              extend to more hospitality destinations — but the priority stays the
              same: reliable, organised delivery that businesses can plan around.
            </p>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-line bg-surface/50 p-7 text-sm">
            <h2 className="font-display text-base font-semibold text-fg">
              At a glance
            </h2>
            <dl className="mt-4 space-y-3 text-muted">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em]">Route</dt>
                <dd className="mt-0.5 text-fg">{site.route}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em]">Model</dt>
                <dd className="mt-0.5 text-fg">B2B delivery &amp; consolidation</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em]">Serves</dt>
                <dd className="mt-0.5 text-fg">
                  Camps, lodges, hotels, restaurants, operators, Airbnbs
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em]">Base</dt>
                <dd className="mt-0.5 text-fg">{site.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-3xl font-semibold text-fg">
          How we want to be judged
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={(i % 2) * 80}
              className="rounded-2xl border border-line bg-surface/50 p-7"
            >
              <h3 className="font-display text-lg font-semibold text-fg">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
