import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "lime" | "ink";
  className?: string;
};

export function Eyebrow({ children, tone = "lime", className = "" }: EyebrowProps) {
  const toneStyles =
    tone === "lime"
      ? "border-line text-lime before:bg-lime"
      : "border-stone-ink/25 text-stone-ink before:bg-stone-ink";

  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border py-1 pr-3 pl-2.5 font-mono text-[13px] uppercase tracking-[0.08em] before:size-[7px] before:rounded-full before:content-[''] ${toneStyles} ${className}`}
    >
      {children}
    </span>
  );
}