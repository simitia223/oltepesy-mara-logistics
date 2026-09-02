import { Container } from "@/components/ui/Container";

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
