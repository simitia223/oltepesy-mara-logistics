"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-line-strong bg-ink/60 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-clay/60";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = `Enquiry — ${site.name}

Name: ${form.name || "—"}
Contact: ${form.contact || "—"}

${form.message || "—"}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry — ${form.name || "Website"}`,
    )}&body=${encodeURIComponent(summary)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-clay/40 bg-surface p-8">
        <p className="font-display text-lg font-semibold text-fg">
          Your email app should have opened.
        </p>
        <p className="mt-2 text-sm text-muted">
          If it didn&apos;t, reach us at{" "}
          <a href={`mailto:${site.email}`} className="text-clay">
            {site.email}
          </a>{" "}
          or on WhatsApp.
        </p>
        <a
          href={whatsappLink(summary)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-[#1c1108]"
        >
          Send on WhatsApp instead
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-surface/50 p-7 sm:p-8"
    >
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
          Name
        </span>
        <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Wanjiru" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
          Phone or email
        </span>
        <input required value={form.contact} onChange={set("contact")} className={inputCls} placeholder="+254 7XX XXX XXX / you@example.com" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
          Message
        </span>
        <textarea value={form.message} onChange={set("message")} rows={4} className={inputCls} placeholder="Tell us about your property and how often you resupply from Nairobi or Narok…" />
      </label>
      <Button type="submit" size="lg" className="w-full">
        Send message
      </Button>
      <p className="text-xs text-muted">
        Opens your email app with the details filled in. Prefer WhatsApp? Use the
        button alongside.
      </p>
    </form>
  );
}
