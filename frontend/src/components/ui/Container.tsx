import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`mx-auto w-full max-w-site pr-[max(16px,env(safe-area-inset-right))] pl-[max(16px,env(safe-area-inset-left))] ${className}`}
    >
      {children}
    </div>
  );
}