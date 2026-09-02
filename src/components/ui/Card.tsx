import type { ReactNode } from "react";
import { Icon } from "./Icon";

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-line-strong ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({
  name,
  tone = "clay",
}: {
  name: string;
  tone?: "clay" | "acacia";
}) {
  const toneCls =
    tone === "acacia"
      ? "border-acacia/30 bg-acacia-dim text-acacia"
      : "border-line-strong bg-ink/60 text-clay";
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${toneCls}`}
    >
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  tone,
}: {
  icon: string;
  title: string;
  children: ReactNode;
  tone?: "clay" | "acacia";
}) {
  return (
    <Card className="h-full">
      <IconTile name={icon} tone={tone} />
      <h3 className="mt-4 font-display text-base font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </Card>
  );
}
