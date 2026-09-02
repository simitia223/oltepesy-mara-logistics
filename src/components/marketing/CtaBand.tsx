import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { primaryCta, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Ready to move your next order to the Mara?",
  text = "Send your order details and destination. We'll confirm availability, the arrangement and a clear price before anything is collected.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-line-strong bg-ink-soft px-6 py-14 text-center sm:px-16 sm:py-20">
          <div
            className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 glow-clay blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              {text}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="outline" size="lg" external>
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
