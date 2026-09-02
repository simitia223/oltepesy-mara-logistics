import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-line-strong bg-surface">
        <span className="absolute inset-0 glow-clay opacity-50 blur-[6px] transition-opacity group-hover:opacity-90" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="none" aria-hidden>
          <circle cx="5.5" cy="18.5" r="2.2" fill="var(--color-clay)" />
          <circle
            cx="18.5"
            cy="5.5"
            r="2.2"
            stroke="var(--color-sand)"
            strokeWidth="1.8"
          />
          <path
            d="M5.5 18.5 C 6 11, 18 13, 18.5 5.5"
            stroke="var(--color-sand)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="2.5 3"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-[0.12em] text-fg">
          OLTEPESY
        </span>
        <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.24em] text-muted">
          {site.descriptor}
        </span>
      </span>
    </Link>
  );
}
