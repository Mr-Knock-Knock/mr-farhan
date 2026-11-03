"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      setLabel("Select it");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5 font-mono text-sm text-muted">
      Or email
      <a href={`mailto:${email}`} className="text-fg select-all hover:text-lime">
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-line px-3 py-1 text-xs text-fg hover:border-lime"
      >
        {label}
      </button>
    </div>
  );
}