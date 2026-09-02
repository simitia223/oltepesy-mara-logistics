import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  problems,
  services,
  steps,
  categories,
  restrictionNote,
  segments,
  businessBenefits,
  faqs,
} from "@/lib/content";
import { site } from "@/lib/site";

export function ModelStrip() {
  const items = [
    { k: "They buy", v: "You order and pay your own supplier in Narok Town. Full control of price and choice." },
    { k: "We collect", v: "Our driver picks up the ready order and checks it against your list." },
    { k: "We deliver", v: "Consolidated onto the run and handed over safely at your property in the Mara." },
  ];
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            key={it.k}
            delay={i * 80}
            className="rounded-2xl border border-line bg-surface/50 p-6"
          >
            <span className="font-display text-sm text-clay">0{i + 1}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-fg">
              {it.k}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{it.v}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Problem() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <SectionHeading
        eyebrow="The problem"
        title="Getting supplies to the Mara shouldn't be a daily headache."
        intro="Businesses in the reserve need supplies from Narok constantly — but arranging transport for every single order is slow, unreliable and expensive."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 4) * 70}
            className="h-full rounded-2xl border border-line bg-surface/50 p-6"
          >
            <h3 className="font-display text-base font-semibold text-fg">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 rounded-2xl border border-clay/30 bg-clay-dim p-8 text-center sm:p-10">
        <p className="font-display text-2xl font-semibold text-fg sm:text-3xl">
          That&apos;s the job we take on.
        </p>
        <p className="mt-2 text-lg text-sand">You buy. We collect. We deliver.</p>
      </Reveal>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Five ways we move your supplies"
        intro="From a standing weekly run to a one-off urgent trip — all on the same Narok → Mara route."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={(i % 3) * 70}
            className="group flex flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-clay/40"
          >
            <span className="text-2xl">{s.icon}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-fg">
              {s.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {s.blurb}
            </p>
            <Link
              href={`/services#${s.slug}`}
              className="mt-4 text-sm font-medium text-clay transition-colors group-hover:text-sand"
            >
              Learn more →
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-line bg-ink-soft">
      <SectionHeading
        eyebrow="How it works"
        title="Simple, from pickup to delivery."
      />
      <ol className="mt-12 space-y-3">
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.n}
            delay={i * 60}
            className="flex flex-col gap-3 rounded-2xl border border-line bg-surface/50 p-6 sm:flex-row sm:items-start sm:gap-8"
          >
            <span className="font-display text-2xl font-semibold text-clay sm:w-16">
              {s.n}
            </span>
            <div className="sm:flex-1">
              <h3 className="font-display text-lg font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              {s.detail ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.detail.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-fg/70"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-8">
        <ButtonLink href="/how-it-works" variant="outline">
          See the full process
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

export function WhatWeMove() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we move"
        title="The supplies your property runs on"
        intro="If it's a legitimate business good, ready for collection at a Narok supplier, we can move it."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 4) * 70}
            className="h-full rounded-2xl border border-line bg-surface/60 p-6"
          >
            <span className="text-2xl">{c.icon}</span>
            <h3 className="mt-3 font-display text-base font-semibold text-fg">
              {c.title}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {c.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-clay" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
        {restrictionNote}
      </p>
    </Section>
  );
}

export function Coverage() {
  return (
    <Section id="coverage" className="border-t border-line bg-ink-soft">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Coverage"
          title="One route. Done properly."
          intro={`Our focus is a single, well-run corridor: ${site.route}. We know the road, the suppliers and the properties along it — and we'll expand from there as demand grows.`}
        />
        <Reveal className="rounded-2xl border border-line bg-surface/60 p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Collect
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-fg">
                {site.collectionPoint}
              </p>
            </div>
            <span className="text-clay">———→</span>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Deliver
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-fg">
                {site.destination}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Not sure your property is on the route? Send us the location and
            we&apos;ll confirm before you book. Arrival windows are given per
            delivery — we don&apos;t quote an exact hour.
          </p>
          <ButtonLink href="/coverage" variant="outline" className="mt-6">
            More on coverage
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
}

export function ForBusinesses() {
  return (
    <Section id="for-businesses">
      <SectionHeading
        eyebrow="For businesses"
        title="Your regular Mara logistics partner."
        intro="If you resupply from Narok every week, a business account turns delivery from a scramble into a scheduled, invoiced service."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <Reveal className="mt-8">
        <ButtonLink href="/for-businesses" size="lg">
          Open a business account
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

export function Segments() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <SectionHeading eyebrow="Who we serve" title="Built around Mara operations." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 70}
            className="rounded-2xl border border-line bg-surface/60 p-6"
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
  );
}

export function FaqPreview() {
  return (
    <Section>
      <SectionHeading eyebrow="Questions" title="The things people ask first." />
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.slice(0, 5).map((f, i) => (
          <Reveal
            key={f.q}
            delay={(i % 3) * 50}
            className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10"
          >
            <h3 className="font-display text-lg font-medium text-fg">{f.q}</h3>
            <p className="text-sm leading-relaxed text-muted">{f.a}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
