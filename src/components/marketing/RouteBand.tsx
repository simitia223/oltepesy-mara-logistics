import { Icon } from "@/components/ui/Icon";

const stops = [
  { icon: "package-search", label: "SUPPLIER", sub: "You buy & pay" },
  { icon: "pin", label: "NAIROBI / NAROK", sub: "Order ready" },
  { icon: "truck", label: "OLTEPESY", sub: "Collect & consolidate" },
  { icon: "compass", label: "THE MARA", sub: "Delivered" },
];

export function RouteBand() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-soft p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-[28rem] -translate-x-1/2 glow-clay blur-3xl"
        aria-hidden
      />
      <ol className="relative grid gap-6 sm:grid-cols-4 sm:gap-3">
        {stops.map((s, i) => (
          <li
            key={s.label}
            className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center"
          >
            {i < stops.length - 1 && (
              <span
                className="absolute left-[19px] top-11 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-clay/60 to-line sm:left-auto sm:right-[-0.5rem] sm:top-[19px] sm:h-px sm:w-[calc(100%-2.5rem)] sm:bg-gradient-to-r"
                aria-hidden
              />
            )}
            <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-surface text-clay">
              <Icon name={s.icon} className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold tracking-wide text-fg">
                {s.label}
              </span>
              <span className="mt-1 block text-xs text-muted">{s.sub}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
