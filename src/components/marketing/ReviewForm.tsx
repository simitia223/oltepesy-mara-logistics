"use client";

import { useState } from "react";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const inputCls =
  "w-full rounded-xl border border-line-strong bg-ink/60 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-clay/60";

export function ReviewForm() {
  const [form, setForm] = useState({ name: "", business: "", text: "", company: "" });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (rating < 1) return setError("Please choose a rating.");
    if (form.text.trim().length < 10)
      return setError("Please write a little more (at least 10 characters).");

    setState("sending");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, rating }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setState("idle");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setState("done");
    } catch {
      setState("idle");
      setError("Couldn't reach the server. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-acacia/40 bg-surface p-8">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-acacia text-[#10160c]">
          <Check className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-fg">
          Thank you — review received.
        </h3>
        <p className="mt-2 text-sm text-muted">
          We check each review against our delivery records before it goes live,
          so it may take a day or two to appear.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-surface/50 p-7 sm:p-8"
    >
      <div>
        <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted">
          Your rating *
        </span>
        <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(n)}
              onClick={() => setRating(n)}
              className="p-0.5"
            >
              <Star
                className={`h-7 w-7 transition-colors ${
                  n <= (hover || rating) ? "text-clay" : "text-line-strong"
                }`}
                fill={n <= (hover || rating) ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
            Your name *
          </span>
          <input
            required
            value={form.name}
            onChange={set("name")}
            className={inputCls}
            placeholder="Jane Wanjiru"
            maxLength={60}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
            Business / property
          </span>
          <input
            value={form.business}
            onChange={set("business")}
            className={inputCls}
            placeholder="Acacia Camp"
            maxLength={80}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
          Your review *
        </span>
        <textarea
          required
          value={form.text}
          onChange={set("text")}
          rows={4}
          maxLength={1000}
          className={inputCls}
          placeholder="How did the delivery go? What was helpful?"
        />
        <span className="mt-1 block text-right text-xs text-muted/70">
          {form.text.length}/1000
        </span>
      </label>

      {/* Honeypot — hidden from people, filled by bots */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={set("company")}
          />
        </label>
      </div>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Submit Review"}
      </Button>
      <p className="text-xs text-muted">
        Reviews are checked against our delivery records before they&apos;re
        published. We don&apos;t edit or filter genuine feedback.
      </p>
    </form>
  );
}
