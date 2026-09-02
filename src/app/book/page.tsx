import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { BookingForm } from "@/components/marketing/BookingForm";
import { steps } from "@/lib/content";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Delivery",
  description:
    "Request a delivery from Nairobi or Narok Town to your property in the Maasai Mara. Tell us the supplier, the destination and what's moving.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a delivery"
        title="Tell us what's moving."
        intro="Fill in what you know. We'll build a request with a reference number, then you send it to us to confirm availability and price. Nothing is booked until we reply."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <BookingForm />

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-clay/30 bg-clay-dim p-6">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-5 w-5 text-clay" aria-hidden />
                <h2 className="font-display text-base font-semibold text-fg">
                  Rather just message us?
                </h2>
              </div>
              <p className="mt-2 text-sm text-fg/80">
                Send your order details straight to us — the quickest route to a
                quote.
              </p>
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-medium text-[#1c1108] transition-colors hover:bg-clay-soft"
              >
                WhatsApp OLTEPESY
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-surface/50 p-6">
              <h2 className="font-display text-base font-semibold text-fg">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-3">
                    <span className="font-display text-xs font-semibold text-clay">
                      {s.n}
                    </span>
                    {s.title}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-line bg-surface/50 p-6 text-sm text-muted">
              <p className="font-medium text-fg">Before you submit</p>
              <ul className="mt-3 space-y-2">
                <li>· Your order should be paid for and ready for collection.</li>
                <li>· Have the supplier name and location to hand.</li>
                <li>· Photos and packing lists can follow on WhatsApp.</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
