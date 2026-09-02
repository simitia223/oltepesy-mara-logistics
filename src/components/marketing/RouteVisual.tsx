import { site } from "@/lib/site";

export function RouteVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 glow-clay opacity-70 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            Delivery route
          </span>
          <span className="flex items-center gap-1.5 text-[0.65rem] text-acacia">
            <span className="h-1.5 w-1.5 rounded-full bg-acacia" />
            active
          </span>
        </div>

        <div className="p-5">
          <svg viewBox="0 0 320 190" className="w-full" role="img" aria-label="Route from Narok Town to the Maasai Mara">
            <path
              d="M40 150 C 110 150, 120 60, 200 55 S 285 45, 285 40"
              fill="none"
              stroke="var(--color-line-strong)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              className="route-flow"
              d="M40 150 C 110 150, 120 60, 200 55 S 285 45, 285 40"
              fill="none"
              stroke="var(--color-clay)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <g>
              <circle cx="40" cy="150" r="6" fill="var(--color-clay)" />
              <circle cx="40" cy="150" r="12" fill="none" stroke="var(--color-clay)" strokeOpacity="0.35" strokeWidth="2" />
            </g>
            <g>
              <circle cx="285" cy="40" r="6" fill="none" stroke="var(--color-sand)" strokeWidth="2.5" />
            </g>

            <text x="40" y="176" fill="var(--color-fg)" fontSize="11" fontWeight="600" textAnchor="middle">
              Narok Town
            </text>
            <text x="285" y="22" fill="var(--color-fg)" fontSize="11" fontWeight="600" textAnchor="middle">
              Maasai Mara
            </text>
          </svg>

          <ol className="mt-4 space-y-2.5">
            {[
              ["Collect", `Ready order picked up in ${site.collectionPoint}`],
              ["Consolidate", "Combined with other stops on the run"],
              ["Deliver", "Handed over at your property in the Mara"],
            ].map(([k, v], i) => (
              <li key={k} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-clay-dim text-[0.7rem] font-semibold text-clay">
                  {i + 1}
                </span>
                <span className="text-sm text-fg/85">
                  <span className="font-medium text-fg">{k}.</span> {v}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-line bg-line text-center">
          {[
            ["They buy", "Own supplier"],
            ["We collect", "In Narok"],
            ["We deliver", "To the Mara"],
          ].map(([v, l]) => (
            <div key={l} className="bg-surface px-3 py-3">
              <p className="font-display text-sm font-semibold text-sand">{v}</p>
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
