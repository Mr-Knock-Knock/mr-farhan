import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { LevelCard } from "@/components/sections/LevelCard";
import type { LevelsContent } from "@/content/landing";

function LevelLink({ index }: { index: number }) {
  const forward = `level-forward-${index}`;
  const backward = `level-backward-${index}`;

  return (
    <div aria-hidden="true" className="grid h-16 place-items-center lg:h-auto">
      <svg viewBox="0 0 64 56" className="h-14 w-16 rotate-90 overflow-visible lg:rotate-0">
        <path id={forward} d="M6 18 H56" fill="none" stroke="var(--color-stone-ink)" strokeWidth="1.5" />
        <path d="M51 13 L57 18 L51 23" fill="none" stroke="var(--color-stone-ink)" strokeWidth="1.5" />
        <path
          id={backward}
          d="M58 38 H8"
          fill="none"
          stroke="var(--color-stone-ink)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <path d="M13 33 L7 38 L13 43" fill="none" stroke="var(--color-stone-ink)" strokeWidth="1.5" opacity="0.6" />
        <circle r="3.5" fill="var(--color-stone-ink)" className="motion-reduce:hidden">
          <animateMotion dur="2.6s" repeatCount="indefinite">
            <mpath href={`#${forward}`} />
          </animateMotion>
        </circle>
        <circle r="3" fill="var(--color-stone-ink)" opacity="0.6" className="motion-reduce:hidden">
          <animateMotion dur="3.4s" repeatCount="indefinite">
            <mpath href={`#${backward}`} />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

function OuterLink() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-[calc((100%_-_128px)/6)] mt-3.5 hidden h-11 rounded-b-[18px] border-[1.5px] border-t-0 border-dashed border-stone-ink before:absolute before:-top-2 before:-left-[6.5px] before:border-x-[5.5px] before:border-b-8 before:border-x-transparent before:border-b-stone-ink before:content-[''] after:absolute after:-top-2 after:-right-[6.5px] after:border-x-[5.5px] after:border-b-8 after:border-x-transparent after:border-b-stone-ink after:content-[''] lg:block"
    >
      <span className="absolute inset-x-0 -bottom-[5px] h-[9px] animate-shuttle before:absolute before:top-0 before:left-0 before:size-[9px] before:rounded-full before:bg-stone-ink before:content-[''] motion-reduce:animate-none" />
    </div>
  );
}

export function Levels({ content }: { content: LevelsContent }) {
  const { eyebrow, heading, intro, levels, loopLabel, legend, cta } = content;

  return (
    <section id="levels" className="overflow-x-hidden bg-lime py-20 text-stone-ink sm:py-28">
      <Container>
        <SectionHead eyebrow={eyebrow} heading={heading} intro={intro} tone="ink" />

        <div className="mx-auto grid max-w-[520px] lg:max-w-none lg:grid-cols-[1fr_64px_1fr_64px_1fr]">
          {levels.map((level, i) => (
            <Fragment key={level.number}>
                {i > 0 && <LevelLink index={i} />}
              <LevelCard level={level} />
            </Fragment>
          ))}
        </div>
        <OuterLink />
        <p className="mt-6 text-center font-mono text-[13px]">{loopLabel}</p>
        <div aria-hidden="true" className="mt-2.5 flex justify-center gap-5 font-mono text-xs text-stone-ink/70">
          <span className="inline-flex items-center gap-2">
            <i className="inline-block w-[22px] border-t-[1.5px] border-stone-ink" />
            {legend.forward}
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="inline-block w-[22px] border-t-[1.5px] border-dashed border-stone-ink" />
            {legend.backward}
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center font-medium sm:flex-row sm:gap-6">
          <span>{cta.text}</span>
          <Button href={cta.button.href} variant="dark">
            {cta.button.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}