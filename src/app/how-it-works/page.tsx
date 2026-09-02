import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { RouteBand } from "@/components/marketing/RouteBand";
import { StatusTimeline } from "@/components/marketing/StatusTimeline";
import { CtaBand } from "@/components/marketing/CtaBand";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four steps from your supplier in Nairobi or Narok Town to your property in the Maasai Mara. You buy, we collect, we deliver.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From your supplier to your door."
        intro="You stay in control of what you buy and who you buy it from. We take on everything from the moment the order is paid for and ready."
      />

      <Section>
        <RouteBand />
        <ol className="mt-6 space-y-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface/50 p-7 sm:p-9"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <span className="font-display text-3xl font-bold text-clay sm:w-16">
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
        <Reveal className="mt-6 flex items-start gap-3 rounded-2xl border border-clay/25 bg-clay-dim p-6">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
          <p className="text-sm text-fg/85 sm:text-base">
            <span className="font-semibold text-fg">
              OLTEPESY does not purchase your goods.
            </span>{" "}
            You buy from your chosen supplier and pay them directly. We handle
            collection, transport and delivery.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <h2 className="font-display text-3xl font-semibold text-fg">
          Know where your delivery stands.
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Every booking moves through the same stages. You get an update from us
          as it progresses — by WhatsApp, on the number you booked with.
        </p>
        <div className="mt-8">
          <StatusTimeline />
        </div>
        <p className="mt-6 text-xs text-muted">
          A self-service tracking portal is on the roadmap. For now, updates come
          from your point of contact.
        </p>
      </Section>

      <CtaBand title="Move your next order into the Mara" />
    </>
  );
}
