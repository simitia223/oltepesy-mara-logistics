import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl font-semibold text-clay">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-fg">
        This page took a wrong turn off the Mara road.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The link may be old or mistyped. Let&apos;s get you back on route.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
