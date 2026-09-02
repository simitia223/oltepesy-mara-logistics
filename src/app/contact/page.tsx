import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/marketing/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { site, whatsappLink, primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Oltepesy Mara Logistics by WhatsApp, phone or email. Based in Narok Town, Narok County, Kenya.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to Oltepesy."
        intro="The fastest way to reach us is WhatsApp. For a fuller enquiry or a business account, send a message and we'll get back to you."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div className="space-y-4">
            <div className="rounded-2xl border border-line bg-surface/50 p-7">
              <h2 className="font-display text-lg font-semibold text-fg">
                WhatsApp
              </h2>
              <p className="mt-2 text-sm text-muted">
                Enquiries, quick questions and delivery updates.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-medium text-[#1c1108] transition-colors hover:bg-clay-soft"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-surface/50 p-7 text-sm">
              <h2 className="font-display text-lg font-semibold text-fg">Direct</h2>
              <ul className="mt-4 space-y-2.5 text-muted">
                <li>
                  <a href={site.phoneHref} className="hover:text-fg">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-fg">
                    {site.email}
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
              <p className="mt-4 text-xs text-muted/70">
                Contact details are placeholders until the business number and
                inbox are confirmed.
              </p>
            </div>

            <div className="rounded-2xl border border-clay/30 bg-clay-dim p-7">
              <h2 className="font-display text-lg font-semibold text-fg">
                Need a delivery?
              </h2>
              <p className="mt-2 text-sm text-fg/80">
                Skip the back-and-forth and start a booking request.
              </p>
              <ButtonLink href={primaryCta.href} className="mt-4 w-full">
                {primaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
