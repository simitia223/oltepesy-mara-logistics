"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";

const cargoOptions = [
  "Food supplies",
  "Beverages",
  "Housekeeping supplies",
  "Equipment",
  "General goods",
  "Other",
] as const;

const loadSizes = ["Small", "Medium", "Large", "Very Large"] as const;
const urgencyOptions = ["Scheduled", "Standard", "Express"] as const;

type Form = {
  name: string;
  phone: string;
  email: string;
  supplier: string;
  supplierLocation: string;
  readyDate: string;
  collectTime: string;
  cargo: string[];
  loadSize: string;
  destinationName: string;
  destinationLocation: string;
  deliveryDate: string;
  urgency: string;
  notes: string;
};

const empty: Form = {
  name: "",
  phone: "",
  email: "",
  supplier: "",
  supplierLocation: "",
  readyDate: "",
  collectTime: "",
  cargo: [],
  loadSize: "",
  destinationName: "",
  destinationLocation: "",
  deliveryDate: "",
  urgency: "Standard",
  notes: "",
};

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

  const toggleCargo = (v: string) =>
    setForm((f) => ({
      ...f,
      cargo: f.cargo.includes(v)
        ? f.cargo.filter((x) => x !== v)
        : [...f.cargo, v],
    }));

  const summary = `Delivery quote request — ${reference ?? ""}

CUSTOMER
Name: ${form.name || "—"}
Phone / WhatsApp: ${form.phone || "—"}
Email: ${form.email || "—"}

PICKUP
Supplier: ${form.supplier || "—"}
Supplier location: ${form.supplierLocation || "—"}
Order ready: ${form.readyDate || "—"} ${form.collectTime || ""}

ORDER
Contents: ${form.cargo.join(", ") || "—"}
Approx load: ${form.loadSize || "—"}

DELIVERY
Property: ${form.destinationName || "—"}
Location: ${form.destinationLocation || "—"}
Preferred date: ${form.deliveryDate || "—"}
Urgency: ${form.urgency}

Notes:
${form.notes || "—"}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display-only reference — a real booking id must be issued server-side.
    const year = new Date().getFullYear();
    const n = Math.floor(1000 + Math.random() * 9000);
    setReference(`OLP-${year}-${n}`);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-acacia/40 bg-surface p-8 sm:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-acacia text-[#10160c]">
          <Check className="h-6 w-6" aria-hidden />
        </span>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-clay">
          Request prepared
        </p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-fg">
          Reference {reference}
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Nothing is booked yet. Send the request to us to confirm — WhatsApp is
          fastest. We&apos;ll reply with availability, the arrangement and a clear
          price before anything is collected.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
              `Delivery quote request ${reference}`,
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
      className="space-y-8 rounded-2xl border border-line bg-surface/50 p-7 sm:p-9"
    >
      <FormGroup step="01" title="Customer">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" required>
            <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Wanjiru" />
          </Field>
          <Field label="Phone / WhatsApp" required>
            <input required inputMode="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+254 7XX XXX XXX" />
          </Field>
        </div>
        <Field label="Email (optional)">
          <input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" />
        </Field>
      </FormGroup>

      <FormGroup step="02" title="Pickup">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Supplier name" required>
            <input required value={form.supplier} onChange={set("supplier")} className={inputCls} placeholder="Naivas / wholesaler name" />
          </Field>
          <Field label="Supplier location">
            <input value={form.supplierLocation} onChange={set("supplierLocation")} className={inputCls} placeholder="Nairobi or Narok — area / street" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Order ready date" required>
            <input required type="date" value={form.readyDate} onChange={set("readyDate")} className={inputCls} />
          </Field>
          <Field label="Preferred collection time">
            <input type="time" value={form.collectTime} onChange={set("collectTime")} className={inputCls} />
          </Field>
        </div>
      </FormGroup>

      <FormGroup step="03" title="Order">
        <Field label="What are you collecting?" required>
          <div className="flex flex-wrap gap-2">
            {cargoOptions.map((c) => {
              const on = form.cargo.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => toggleCargo(c)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                    on
                      ? "border-clay/70 bg-clay-dim text-fg"
                      : "border-line-strong text-muted hover:text-fg"
                  }`}
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-[5px] border text-[10px] ${
                      on ? "border-clay bg-clay text-[#1c1108]" : "border-line-strong"
                    }`}
                  >
                    {on ? "✓" : ""}
                  </span>
                  {c}
                </button>
              );
            })}
          </div>
        </Field>
        <Field label="Approximate load">
          <div className="flex flex-wrap gap-2">
            {loadSizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setForm((f) => ({ ...f, loadSize: s }))}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  form.loadSize === s
                    ? "border-clay/70 bg-clay-dim text-fg"
                    : "border-line-strong text-muted hover:text-fg"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </Field>
      </FormGroup>

      <FormGroup step="04" title="Delivery">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Camp / lodge / hotel / business" required>
            <input required value={form.destinationName} onChange={set("destinationName")} className={inputCls} placeholder="Acacia Camp" />
          </Field>
          <Field label="Destination / location" required>
            <input required value={form.destinationLocation} onChange={set("destinationLocation")} className={inputCls} placeholder="Sekenani area, Maasai Mara" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred delivery date">
            <input type="date" value={form.deliveryDate} onChange={set("deliveryDate")} className={inputCls} />
          </Field>
          <Field label="Delivery urgency">
            <div className="flex flex-wrap gap-2">
              {urgencyOptions.map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, urgency: u }))}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    form.urgency === u
                      ? "border-clay/70 bg-clay-dim text-fg"
                      : "border-line-strong text-muted hover:text-fg"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </Field>
        </div>
        <Field label="Additional notes">
          <textarea
            value={form.notes}
            onChange={set("notes")}
            rows={3}
            className={inputCls}
            placeholder="Multiple suppliers, anything fragile or chilled, access notes for the property…"
          />
        </Field>
      </FormGroup>

      <div>
        <Button type="submit" size="lg" className="w-full">
          Request Delivery Quote
        </Button>
        <p className="mt-3 text-xs text-muted">
          This builds a request with a reference number. Nothing is booked until
          you send it and we confirm availability and price. Photos and packing
          lists can follow on WhatsApp.
        </p>
      </div>
    </form>
  );
}

function FormGroup({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="flex items-center gap-2.5">
        <span className="font-display text-xs font-bold text-clay">{step}</span>
        <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-fg">
          {title}
        </span>
      </legend>
      {children}
    </fieldset>
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
