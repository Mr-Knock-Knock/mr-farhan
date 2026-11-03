import { Fragment } from "react";
import type { Level, LevelMini } from "@/content/landing";

function MiniHead({ title }: { title: string }) {
  return (
    <div className="flex justify-between font-mono text-[11px] tracking-[0.08em] text-stone-muted uppercase">
      <span>{title}</span>
      <span>Illustrative</span>
    </div>
  );
}

function MiniUI({ mini }: { mini: LevelMini }) {
  switch (mini.kind) {
    case "checklist":
      return (
        <>
          <MiniHead title={mini.title} />
          {mini.items.map((item, i) => (
            <div
              key={item}
              className={`grid grid-cols-[1fr_auto] items-center overflow-hidden rounded-md border border-stone-ink ${i === 0 ? "bg-lime" : ""}`}
            >
              <span className="px-2.5 py-1.5">{item}</span>
              <span className="grid w-8 place-items-center self-stretch bg-stone-ink text-lime">✓</span>
            </div>
          ))}
        </>
      );

    case "sync":
      return (
        <>
          <MiniHead title={mini.title} />
          <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-1.5 py-2.5">
            {mini.nodes.map((node, i) => (
              <Fragment key={node}>
                {i > 0 && (
                  <span className="relative h-[1.5px] bg-stone-ink before:absolute before:-top-[3px] before:left-0 before:size-[7px] before:rounded-full before:border before:border-stone-ink before:bg-lime before:content-['']" />
                )}
                <span className="rounded-md border border-stone-ink bg-stone px-[7px] py-1.5 font-mono text-[11px] whitespace-nowrap">
                  {node}
                </span>
              </Fragment>
            ))}
          </div>
          <div className="flex justify-between text-xs text-stone-muted">
            <span>{mini.status}</span>
            <span>{mini.errors}</span>
          </div>
        </>
      );

    case "chart":
      return (
        <>
          <MiniHead title={mini.title} />
          <svg viewBox="0 0 220 84" role="img" aria-label="A line trending upward, no figures" className="block h-auto w-full">
            <line x1="0" y1="83" x2="220" y2="83" stroke="var(--color-stone-muted)" strokeWidth="1" />
            <line x1="0" y1="42" x2="220" y2="42" stroke="var(--color-stone-muted)" strokeWidth="0.5" strokeDasharray="3 4" />
            <polygon points="0,68 44,62 88,52 132,55 176,34 220,18 220,83 0,83" fill="var(--color-lime)" />
            <polyline points="0,68 44,62 88,52 132,55 176,34 220,18" fill="none" stroke="var(--color-stone-ink)" strokeWidth="1.75" />
            <circle cx="220" cy="18" r="3.5" fill="var(--color-stone-ink)" />
          </svg>
        </>
      );
  }
}

export function LevelCard({ level }: { level: Level }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border-[1.5px] border-stone-ink bg-stone text-stone-ink transition duration-450 ease-calm hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-24px_var(--color-stone-ink)] motion-reduce:transition-none">
      <div className="flex items-center justify-between bg-stone-ink px-[22px] py-4 text-stone">
        <span className="font-mono text-[26px] tracking-[0.04em]">{level.number}</span>
        <span className="font-mono text-xs tracking-[0.1em] text-lime uppercase">{level.tag}</span>
      </div>
      <div className="grid gap-[18px] px-[22px] py-6">
        <h3 className="text-[1.6rem] font-bold">{level.title}</h3>
        <p className="text-[15px] leading-normal font-medium">{level.situation}</p>
        <div className="grid gap-2 rounded-xl border-[1.5px] border-stone-ink bg-paper p-3.5 text-[13px]">
          <MiniUI mini={level.mini} />
        </div>
        <p className="text-sm leading-relaxed text-stone-muted">{level.outcome}</p>
      </div>
    </article>
  );
}