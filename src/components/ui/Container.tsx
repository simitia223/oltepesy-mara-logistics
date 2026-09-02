import type { ElementType, ReactNode } from "react";

export function Container({
  as: As = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </As>
  );
}
