import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { RouteVisual } from "@/components/marketing/RouteVisual";
import { primaryCta, site, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[32rem] w-[46rem] -translate-x-1/2 glow-clay blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {site.route} · B2B logistics
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Narok to the Mara.</span>
              <br />
              Delivered.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Reliable deliveries for hotels, lodges, camps and businesses in the
              Maasai Mara. You buy from your supplier in Narok — we collect the
              ready order and bring it to your door.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="outline" size="lg" external>
                Chat on WhatsApp
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {[
                ["They buy", "From their supplier"],
                ["We collect", "In Narok Town"],
                ["We deliver", "To your property"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-base font-semibold text-sand">
                    {v}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pl-4">
            <RouteVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
