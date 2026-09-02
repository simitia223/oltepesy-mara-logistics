import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 glow-clay blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
