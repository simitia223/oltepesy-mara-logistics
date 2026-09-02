import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { RouteVisual } from "@/components/marketing/RouteVisual";
import { heroBadges } from "@/lib/content";
import { primaryCta, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dune">
      {/* Background photo slot — heavy overlay keeps text readable */}
      <Photo
        variant="background"
        alt="A delivery vehicle on the road to the Maasai Mara, loaded with hospitality supplies"
        brief="Wide shot: a loaded delivery vehicle on the Narok–Mara road at golden hour."
        priority
        sizes="100vw"
        className="absolute inset-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[32rem] w-[46rem] -translate-x-1/2 glow-clay blur-3xl"
        aria-hidden
      />

      <Container className="relative py-12 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-acacia" />
              Nairobi &amp; Narok → Maasai Mara · B2B logistics
            </span>

            <h1 className="mt-6 font-display text-[2.1rem] font-bold uppercase leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              <span className="text-gradient">Nairobi &amp; Narok</span>
              <br />
              to Maasai Mara.
              <br />
              Delivered.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/90">
              Reliable supply transport for camps, lodges, hotels and businesses
              operating in the Maasai Mara — collected from your suppliers in
              Nairobi and Narok.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href} size="lg">
                Book a Delivery
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="outline" size="lg" external>
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp Us
              </ButtonLink>
            </div>

            {/* Core message */}
            <p className="mt-8 font-display text-lg font-semibold text-sand">
              You buy. We collect. We deliver.
            </p>

            {/* Service badges */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <li key={b.label}>
                  <Link
                    href={b.href}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-fg/80 transition-colors hover:border-clay/50 hover:text-fg"
                  >
                    <Icon name={b.icon} className="h-3.5 w-3.5 text-clay" />
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <RouteVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
