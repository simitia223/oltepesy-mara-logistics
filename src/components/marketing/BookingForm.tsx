"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";

type Form = {
  name: string;
  business: string;
  phone: string;
  destination: string;
  supplier: string;
  serviceType: string;
  readyWhen: string;
  details: string;
};

const empty: Form = {
  name: "",
  business: "",
  phone: "",
  destination: "",
  supplier: "",
  serviceType: "Scheduled run",
  readyWhen: "",
  details: "",
};

const serviceTypes = [
  "Scheduled run",
  "Bulk delivery",
  "Express (urgent)",
  "Business account enquiry",
  "Not sure — advise me",
];

const inputCls =
  "w-full rounded-xl border border-line-strong bg-ink/60 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-clay/60";

export function BookingForm() {
  const [form, setForm] = useState<Form>(empty);
  const [reference, setReference] = useState<string | null>(null);
  const sent = reference !== null;

  const set =
    (k: keyof Form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = `Delivery request — ${reference ?? ""}

Name: ${form.name || "—"}
Business: ${form.business || "—"}
Phone: ${form.phone || "—"}

Service: ${form.serviceType}
Collect from (Narok supplier): ${form.supplier || "—"}
Deliver to (Mara): ${form.destination || "—"}
Order ready: ${form.readyWhen || "—"}

Details:
${form.details || "—"}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display-only reference — a real booking id must be issued server-side.
    const year = new Date().getFullYear();
    const n = Math.floor(1000 + Math.random() * 9000);
    setReference(`OLP-${year}-${n}`);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-clay/40 bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-clay">
          Request prepared
        </p>
        <p className="mt-2 font-display text-xl font-semibold text-fg">
          Reference {reference}
        </p>
        <p className="mt-2 text-sm text-muted">
          Nothing is booked yet. Send the request to us to confirm — WhatsApp is
          fastest. We&apos;ll reply with availability, the arrangement and a price.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(summary)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-medium text-[#1c1108] transition-colors hover:bg-clay-soft"
          >
            Send on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              `Delivery request ${reference}`,
            )}&body=${encodeURIComponent(summary)}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-clay/60"
          >
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setReference(null)}
          className="mt-4 text-xs text-muted underline underline-offset-4 hover:text-fg"
        >
          Edit the request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-surface/50 p-7 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required>
          <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Wanjiru" />
        </Field>
        <Field label="Business / property">
          <input value={form.business} onChange={set("business")} className={inputCls} placeholder="Acacia Camp" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" required>
          <input required inputMode="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+254 7XX XXX XXX" />
        </Field>
        <Field label="Service type">
          <select value={form.serviceType} onChange={set("serviceType")} className={inputCls}>
            {serviceTypes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Collect from — Narok supplier" required>
          <input required value={form.supplier} onChange={set("supplier")} className={inputCls} placeholder="Naivas Narok / wholesaler name" />
        </Field>
        <Field label="Deliver to — Mara property" required>
          <input required value={form.destination} onChange={set("destination")} className={inputCls} placeholder="Camp / lodge name & area" />
        </Field>
      </div>

      <Field label="When is the order ready?">
        <input value={form.readyWhen} onChange={set("readyWhen")} className={inputCls} placeholder="e.g. tomorrow morning / every Tuesday" />
      </Field>

      <Field label="Order details">
        <textarea
          value={form.details}
          onChange={set("details")}
          rows={4}
          className={inputCls}
          placeholder="Roughly what's in the order, how many cartons, anything fragile or chilled…"
        />
      </Field>

      <Button type="submit" size="lg" className="w-full">
        Prepare my request
      </Button>
      <p className="text-xs text-muted">
        This builds a request with a reference number. Nothing is booked until you
        send it and we confirm. Attachments and photos can follow on WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
        {label}
        {required ? <span className="text-clay"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
