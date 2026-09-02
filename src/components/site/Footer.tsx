import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="py-16 pb-28 lg:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Reliable supply transport from Nairobi and Narok to the Maasai Mara.
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
              {footerNav.map((l) => (
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
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                >
                  <MessageCircle className="h-4 w-4 text-acacia" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                >
                  <Phone className="h-4 w-4 text-clay" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                >
                  <Mail className="h-4 w-4 text-clay" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OLTEPESY Mara Logistics. All rights reserved.</p>
          <p className="text-xs">
            Transport and delivery only. Customers buy their own goods from their
            own suppliers.
          </p>
        </div>
      </Container>
    </footer>
  );
}
