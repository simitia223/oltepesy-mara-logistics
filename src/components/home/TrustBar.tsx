import { Container } from "@/components/ui/Container";
import { businessCategories } from "@/lib/content";

const tags = [
  "Safari camps",
  "Lodges",
  "Hotels",
  "Restaurants",
  "Tour operators",
  "Airbnbs",
  "Guesthouses",
  "Event caterers",
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-ink-soft py-9">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted">
          Built for the businesses that keep the Mara running
        </p>
      </Container>
      <div className="relative mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-fg/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-soft to-transparent" />
      </div>
    </section>
  );
}

/** Business-category strip — shown in place of testimonials until real ones exist. */
export function BusinessCategoryBand() {
  return (
    <section className="border-y border-line bg-ink-soft py-14">
      <Container className="text-center">
        <p className="font-display text-xl font-semibold text-fg sm:text-2xl">
          Built for Mara businesses
        </p>
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm">
          {businessCategories.map((c, i) => (
            <li key={c} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-clay/60" aria-hidden />}
              <span className="text-fg/80">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-lg text-sm text-muted">
          Real customer stories will appear here as the service grows. We don&apos;t
          publish testimonials we haven&apos;t earned.
        </p>
      </Container>
    </section>
  );
}
