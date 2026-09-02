import { Icon } from "@/components/ui/Icon";
import { deliveryStatus } from "@/lib/content";

/**
 * Presentational delivery-status timeline. There is no live tracking yet — this
 * shows the stages every delivery moves through. Structured so a real status
 * feed can drive an `activeIndex` later.
 */
export function StatusTimeline({ activeIndex }: { activeIndex?: number }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {deliveryStatus.map((s, i) => {
        const done = activeIndex !== undefined && i <= activeIndex;
        return (
          <li
            key={s.label}
            className={`relative flex items-center gap-3 rounded-xl border p-4 ${
              done
                ? "border-acacia/40 bg-acacia-dim"
                : "border-line bg-surface/50"
            }`}
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border ${
                done
                  ? "border-acacia/50 text-acacia"
                  : "border-line-strong text-clay"
              }`}
            >
              <Icon name={s.icon} className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Step {i + 1}
              </span>
              <span className="block text-sm font-medium text-fg">{s.label}</span>
            </span>
            {i < deliveryStatus.length - 1 && (
              <span
                className="pointer-events-none absolute right-[-0.5rem] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-line lg:block"
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
