import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Mark: a black acacia tree against a Mara sunset, inside the badge.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-lg border border-line-strong bg-surface ${className}`}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="oltepesy-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dc8a54" />
            <stop offset="0.55" stopColor="#cf7a4a" />
            <stop offset="1" stopColor="#7a3f22" />
          </linearGradient>
          <clipPath id="oltepesy-badge">
            <rect width="40" height="40" rx="9" />
          </clipPath>
        </defs>
        <g clipPath="url(#oltepesy-badge)">
          <rect width="40" height="40" fill="#0b0a09" />
          {/* sunset */}
          <circle cx="20" cy="25" r="15.5" fill="url(#oltepesy-sky)" opacity="0.95" />
          <circle cx="20" cy="23.5" r="6.5" fill="#f4c986" />
          {/* ground */}
          <rect x="0" y="30.5" width="40" height="9.5" fill="#0b0a09" />
          {/* acacia — solid flat-topped silhouette */}
          <g fill="#0b0a09">
            <path d="M17.6 31 L19 14 h2 l1.4 17 z" />
            <path d="M20 6.6c-8 0-14 3.4-14 7.6 0 0.9 0.3 1.7 0.8 2.5 1-1 2.6-1.6 4-1.8 2.4-2 5.6-2.4 9.2-2.4s6.8 0.4 9.2 2.4c1.4 0.2 3 0.8 4 1.8 0.5-0.8 0.8-1.6 0.8-2.5 0-4.2-6-7.6-14-7.6z" />
          </g>
        </g>
      </svg>
    </span>
  );
}

export function Logo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-[0.14em] text-fg">
          OLTEPESY
        </span>
        <span className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.26em] text-muted">
          Mara Logistics
        </span>
      </span>
    </Link>
  );
}
