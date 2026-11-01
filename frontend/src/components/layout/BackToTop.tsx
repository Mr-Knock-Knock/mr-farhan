"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

const isPastHero = () => window.scrollY > window.innerHeight * 0.8;
const onServer = () => false;

export function BackToTop() {
  const show = useSyncExternalStore(subscribe, isPastHero, onServer);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed right-[calc(max(16px,env(safe-area-inset-right))+8px)] bottom-[calc(env(safe-area-inset-bottom)+24px)] z-15 grid size-12 place-items-center rounded-full border border-line bg-surface-2 text-lime shadow-[0_12px_30px_-12px_#000] transition duration-350 ease-calm hover:border-lime hover:bg-lime hover:text-lime-ink motion-reduce:transition-none ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}