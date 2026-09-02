import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const stops = [
  { icon: "package-search", k: "Your supplier", v: "You order and pay directly" },
  { icon: "pin", k: "Nairobi / Narok", v: "Your order is ready for pickup" },
  { icon: "truck", k: "OLTEPESY", v: "We collect and consolidate" },
  { icon: "compass", k: "The Mara", v: "Delivered to your property" },
];

export function RouteVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 glow-clay opacity-60 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            Delivery route
          </span>
          <span className="flex items-center gap-1.5 text-[0.65rem] text-acacia">
            <span className="h-1.5 w-1.5 rounded-full bg-acacia" />
            {site.routeShort}
          </span>
        </div>

        <div className="px-5 pt-5">
          <svg
            viewBox="0 0 320 120"
            className="w-full"
            role="img"
            aria-label="Route from suppliers in Nairobi and Narok Town to a property in the Maasai Mara"
          >
            <path
              d="M20 92 C 90 92, 100 30, 165 28 S 285 34, 300 20"
              fill="none"
              stroke="var(--color-line-strong)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              className="route-flow"
              d="M20 92 C 90 92, 100 30, 165 28 S 285 34, 300 20"
              fill="none"
              stroke="var(--color-clay)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="20" cy="92" r="5.5" fill="var(--color-clay)" />
            <circle cx="20" cy="92" r="11" fill="none" stroke="var(--color-clay)" strokeOpacity="0.35" strokeWidth="2" />
            <circle cx="300" cy="20" r="5.5" fill="none" stroke="var(--color-sand)" strokeWidth="2.5" />
          </svg>
        </div>

        <ol className="space-y-px bg-line">
          {stops.map((s, i) => (
            <li key={s.k} className="flex items-center gap-3 bg-surface px-5 py-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line-strong bg-ink/60 text-clay">
                <Icon name={s.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-semibold text-fg">
                  {s.k}
                </span>
                <span className="block text-xs text-muted">{s.v}</span>
              </span>
              <span className="font-display text-xs text-muted">0{i + 1}</span>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-3 gap-px border-t border-line bg-line text-center">
          {[
            ["You buy", "Own supplier"],
            ["We collect", "Nairobi / Narok"],
            ["We deliver", "To the Mara"],
          ].map(([v, l]) => (
            <div key={l} className="bg-surface px-3 py-3">
              <p className="font-display text-xs font-semibold text-sand">{v}</p>
              <p className="text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
