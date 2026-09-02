import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { IconTile, FeatureCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { RouteBand } from "@/components/marketing/RouteBand";
import { StatusTimeline } from "@/components/marketing/StatusTimeline";
import {
  problems,
  services,
  steps,
  categories,
  restrictionNote,
  segments,
  businessBenefits,
  trustPoints,
  proofPoints,
  faqs,
} from "@/lib/content";
import { site } from "@/lib/site";

export function ModelStrip() {
  const items = [
    { k: "They buy", v: "You order and pay your own supplier in Nairobi or Narok Town. Full control of price and choice." },
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
      <Reveal className="mt-4 flex items-center gap-3 rounded-2xl border border-clay/25 bg-clay-dim px-6 py-4">
        <Icon name="shield" className="h-5 w-5 shrink-0 text-clay" />
        <p className="text-sm text-fg/85">
          <span className="font-semibold text-fg">OLTEPESY does not purchase your goods.</span>{" "}
          You buy from your chosen supplier — we handle collection, transport and
          delivery.
        </p>
      </Reveal>
    </Section>
  );
}

export function Problem() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="The problem"
            title="Getting supplies to the Mara shouldn't be a daily headache."
            intro="Businesses operating in the Maasai Mara buy supplies from Nairobi and Narok Town — but getting those supplies from the supplier to the property is slow, unpredictable and hard to coordinate."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 80}
                className="h-full rounded-2xl border border-line bg-surface/50 p-5"
              >
                <IconTile name={p.icon} />
                <h3 className="mt-3 font-display text-sm font-semibold text-fg">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120}>
          <Photo
            src="/photos/supplies-loading.svg"
            alt="Cartons, crates and water being loaded outside a supermarket in Nairobi or Narok for the trip to the Maasai Mara"
            brief="Supplies — cartons, crates, water — being loaded outside a supermarket in Nairobi or Narok."
            className="aspect-[3/2] rounded-2xl border border-line"
          />
        </Reveal>
      </div>
      <Reveal className="mt-10 rounded-2xl border border-clay/30 bg-clay-dim p-8 text-center sm:p-10">
        <p className="font-display text-2xl font-semibold text-fg sm:text-3xl">
          OLTEPESY takes care of that final logistics journey.
        </p>
        <p className="mt-2 text-lg text-sand">You buy. We collect. We deliver.</p>
      </Reveal>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="Simple, from pickup to delivery."
        intro="You stay in control of what you buy and who you buy it from. We take over the moment the order is paid for and ready."
      />
      <div className="mt-10">
        <RouteBand />
      </div>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.n}
            delay={i * 70}
            className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6"
          >
            <span className="font-display text-2xl font-bold text-clay">{s.n}</span>
            <h3 className="mt-3 font-display text-base font-semibold text-fg">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
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

export function Services() {
  return (
    <Section id="services" className="border-t border-line bg-ink-soft">
      <SectionHeading
        eyebrow="Services"
        title="Logistics built around your operation."
        intro="From a standing weekly run to a one-off urgent trip — all delivering into the Mara from Nairobi and Narok."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={(i % 3) * 70}
            className="group flex flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-clay/40"
          >
            <IconTile name={s.icon} />
            <h3 className="mt-4 font-display text-lg font-semibold text-fg">
              {s.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {s.blurb}
            </p>
            <Link
              href={`/services#${s.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors group-hover:text-sand"
            >
              Learn more <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function WhatWeMove() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we move"
        title="The supplies your property runs on"
        intro="If it's a legitimate business good, ready for collection at a supplier in Nairobi or Narok, we can move it."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 4) * 70}
            className="h-full rounded-2xl border border-line bg-surface/60 p-6"
          >
            <IconTile name={c.icon} />
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

export function Tracking() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <SectionHeading
        eyebrow="Delivery updates"
        title="Know where your delivery stands."
        intro="Every booking moves through the same stages. You get an update from us as it progresses — by WhatsApp, on the number you booked with."
      />
      <div className="mt-10">
        <StatusTimeline />
      </div>
      <p className="mt-6 text-xs text-muted">
        A self-service tracking portal is on the roadmap. The section is built so
        real status updates can drive it later — for now, updates come from your
        point of contact.
      </p>
    </Section>
  );
}

export function Proof() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <Reveal>
          <Photo
            src="/photos/delivery-handover.svg"
            alt="A camp manager receiving and checking a delivery in the Maasai Mara"
            brief="A manager signing for a delivery at a camp gate; crates on the vehicle behind."
            className="aspect-[3/2] rounded-2xl border border-line"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Proof of delivery"
            title="Delivered. Confirmed."
            intro="When your goods reach the property, you get a clear record of the handover — useful for lodge and camp managers reconciling stock and cost."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface/50 px-4 py-3 text-sm text-fg/85"
              >
                <Icon name={p.icon} className="h-4 w-4 shrink-0 text-acacia" />
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Coverage() {
  return (
    <Section id="coverage" className="border-t border-line bg-ink-soft">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Coverage"
          title="From Nairobi & Narok to the Mara."
          intro="We collect from suppliers in Nairobi and Narok Town and deliver to camps, lodges, hotels and businesses across the Maasai Mara. We know the road, the suppliers and the properties along it."
        />
        <Reveal className="rounded-2xl border border-line bg-surface/60 p-7">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Collect</p>
              <p className="mt-1 font-display text-lg font-semibold text-fg">
                {site.collectionPoint}
              </p>
            </div>
            <Icon name="arrow-right" className="h-5 w-5 text-clay" />
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Deliver</p>
              <p className="mt-1 font-display text-lg font-semibold text-fg">
                {site.destination}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Delivery destinations include camps, lodges, hotels and businesses
            throughout the service area. Not sure your property is on the route?
            Send the location and we&apos;ll confirm before you book.
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
      <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-ink-soft p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 glow-clay blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-clay">
            <span className="h-px w-6 bg-clay/60" />
            Business accounts
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
            Your logistics partner in the Mara.
          </h2>
          <p className="mt-3 max-w-xl text-base text-sand">
            For businesses that need more than a one-off delivery.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            If you resupply from Nairobi or Narok every week, a business account
            turns delivery from a scramble into a scheduled, invoiced service —
            with one point of contact who knows your property.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={(i % 4) * 60}
                className="rounded-2xl border border-line bg-surface/60 p-5"
              >
                <IconTile name={b.icon} />
                <h3 className="mt-3 font-display text-sm font-semibold text-fg">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <ButtonLink href="/for-businesses" size="lg">
              Request a Business Account
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function TrustGrid() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <SectionHeading
        eyebrow="Why OLTEPESY"
        title="Built for businesses that can't afford supply delays."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((t, i) => (
          <Reveal key={t.title} delay={(i % 3) * 70}>
            <FeatureCard icon={t.icon} title={t.title} tone={i === 0 ? "acacia" : "clay"}>
              {t.text}
            </FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Segments() {
  return (
    <Section>
      <SectionHeading eyebrow="Who we serve" title="Built around Mara operations." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 70}
            className="rounded-2xl border border-line bg-surface/60 p-6"
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
  );
}

export function FaqPreview() {
  return (
    <Section className="border-t border-line bg-ink-soft">
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
      <Reveal className="mt-8">
        <ButtonLink href="/faq" variant="outline">
          All questions
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
