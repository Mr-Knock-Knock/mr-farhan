"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Diagram } from "@/components/sections/Diagram";
import type { Project } from "@/content/projects";

const PHONE_QUERY = "(max-width: 767px)";

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}
const readHash = () => window.location.hash;
const noHash = () => "";

function subscribePhone(onChange: () => void) {
  const query = window.matchMedia(PHONE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const isPhone = () => window.matchMedia(PHONE_QUERY).matches;
const notPhone = () => false;

type WorkGridProps = {
  projects: Project[];
  showMoreLabel: string;
  openLabel: string;
};

export function WorkGrid({ projects, showMoreLabel, openLabel }: WorkGridProps) {
  const hash = useSyncExternalStore(subscribeHash, readHash, noHash);
  const phone = useSyncExternalStore(subscribePhone, isPhone, notPhone);
  const [extra, setExtra] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = (phone ? 3 : 6) + extra;
  const slug = hash.startsWith("#case-") ? hash.slice("#case-".length) : null;
  const active = projects.find((project) => project.slug === slug) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

    const openCase = (caseSlug: string) => {
    history.pushState(null, "", `#case-${caseSlug}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const clearCaseHash = () => {
    if (!window.location.hash.startsWith("#case-")) return;
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visible).map((project) => (
          <button
            key={project.slug}
            type="button"
            aria-haspopup="dialog"
            onClick={() => openCase(project.slug)}
            className="group flex min-w-0 cursor-pointer flex-col gap-3.5 rounded-[20px] border border-line bg-surface px-6 pt-[26px] pb-[22px] text-left transition duration-400 ease-calm hover:-translate-y-1 hover:border-lime/50 motion-reduce:transition-none"
          >
            {project.verb && (
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-lime uppercase before:size-[7px] before:rounded-full before:bg-lime before:content-['']">
                {project.verb}
              </span>
            )}
            <h3 className="text-[1.3rem] font-bold">{project.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-muted">{project.summary}</p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            )}
            <span className="mt-auto pt-1.5 text-sm font-medium transition-colors group-hover:text-lime">{openLabel}</span>
          </button>
        ))}
      </div>

      {visible < projects.length && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExtra((count) => count + 3)}
            className="cursor-pointer rounded-full border border-line px-[22px] py-[13px] text-[15px] font-medium hover:border-muted"
          >
            {showMoreLabel}
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="case-title"
        onClose={clearCaseHash}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto max-h-[calc(100%-48px)] w-full max-w-[min(1040px,calc(100%-32px))] overflow-auto rounded-3xl border border-line bg-surface p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-[3px] max-md:h-full max-md:max-h-full max-md:max-w-full max-md:rounded-none max-md:border-0"
      >
        {active && (
          <div>
            <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface px-4 pt-[max(20px,env(safe-area-inset-top))] pb-5 md:static md:px-7 md:pt-6">
              <div>
                {active.verb && <Eyebrow>{active.verb}</Eyebrow>}
                <h3 id="case-title" className="mt-2 text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold">
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close case"
                onClick={() => dialogRef.current?.close()}
                className="grid size-10 flex-none cursor-pointer place-items-center rounded-full border border-line text-xl hover:border-lime hover:text-lime"
              >
                ×
              </button>
            </header>

            <div className="grid md:grid-cols-[2fr_3fr]">
              <div className="grid min-w-0 content-start gap-[18px] px-4 pt-6 pb-7 md:px-7">
                <dl className="grid gap-4">
                  {[
                    ["Situation", active.situation],
                    ["What was wrong", active.problem],
                    ["What I did", active.approach],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="font-mono text-xs tracking-[0.08em] text-lime uppercase">{label}</dt>
                      <dd className="mt-1 text-[15px] text-muted">{text}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-xs tracking-[0.08em] text-lime uppercase">Result</dt>
                    <dd className="mt-1 text-[15px] font-medium text-fg">{active.result}</dd>
                  </div>
                </dl>
                {active.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {active.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid min-w-0 content-center gap-[18px] border-t border-line bg-bg px-4 pt-6 pb-[max(24px,env(safe-area-inset-bottom))] md:border-t-0 md:border-l md:px-6 md:pb-5">
                <span className="font-mono text-xs text-muted">Illustrative · the approach, not the client&apos;s system</span>
                <Diagram steps={active.diagram} />
                <div aria-hidden="true" className="flex flex-wrap gap-3.5 font-mono text-[11.5px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="size-3 rounded border border-line bg-surface-2" />
                    Tool
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="size-3 rounded border border-lime" />
                    Step
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="size-3 rounded border border-lime bg-lime" />
                    Output
                  </span>
                  <span className="max-md:hidden">ⓘ Hover for detail</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}