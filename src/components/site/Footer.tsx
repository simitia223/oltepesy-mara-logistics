import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { nav, primaryCta, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const links = [...nav.slice(1), primaryCta];
  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Reliable B2B deliveries on the {site.route} route for camps, lodges,
              hotels and businesses in the Maasai Mara.
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-sand">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-fg"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-fg">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-fg"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}.
          </p>
          <p className="text-xs">
            Transport and delivery only. Customers buy their own goods.
          </p>
        </div>
      </Container>
    </footer>
  );
}
