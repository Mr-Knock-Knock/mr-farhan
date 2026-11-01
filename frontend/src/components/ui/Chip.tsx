import type { ReactNode } from "react";

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-fg ${className}`}>
      {children}
    </span>
  );
}