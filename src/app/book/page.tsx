import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";
import { Section } from "@/components/ui/Section";
import { BookingForm } from "@/components/marketing/BookingForm";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Delivery",
  description:
    "Request a delivery from Narok Town to your property in the Maasai Mara. Tell us the supplier, the destination and what's moving.",
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

          <aside className="space-y-4">
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
