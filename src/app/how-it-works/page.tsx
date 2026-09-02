import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";
import { steps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four steps from your supplier in Narok Town to your property in the Maasai Mara. You buy, we collect, we deliver.",
};

const statuses = [
  "Request received",
  "Collection scheduled",
  "Collected in Narok",
  "On the road",
  "Delivered",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From your supplier to your door."
        intro="You stay in control of what you buy and who you buy it from. We take on everything from the moment the order is paid for and ready."
      />

      <Section>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface/50 p-7 sm:p-9"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <span className="font-display text-3xl font-semibold text-clay">
                  {s.n}
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-fg">
                    {s.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {s.text}
                  </p>
                  {s.detail ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.detail.map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-line px-3 py-1 text-xs text-fg/70"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-3xl font-semibold text-fg">
          Where your delivery is
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Every booking moves through the same stages. You get an update from us
          as it progresses — by WhatsApp, on the number you booked with.
        </p>
        <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {statuses.map((st, i) => (
            <Reveal
              as="li"
              key={st}
              delay={i * 50}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface/50 px-4 py-3 text-sm text-fg/85"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-dim text-xs font-semibold text-clay">
                {i + 1}
              </span>
              {st}
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 text-xs text-muted">
          A self-service tracking portal is on the roadmap. For now, updates come
          from your point of contact.
        </p>
      </Section>

      <CtaBand
        title={`Move your next order on the ${site.route} route`}
      />
    </>
  );
}
