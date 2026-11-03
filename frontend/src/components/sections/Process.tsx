import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import type { ProcessContent } from "@/content/landing";

export function Process({ content }: { content: ProcessContent }) {
  const { eyebrow, heading, steps, note } = content;

  return (
    <section id="process" className="pb-20 sm:pb-28">
      <Container>
        <SectionHead eyebrow={eyebrow} heading={heading} />

        <ol className="relative grid gap-7 before:absolute before:top-[22px] before:bottom-[22px] before:left-[22px] before:w-[1.5px] before:bg-line before:content-[''] lg:grid-cols-5 lg:gap-4 lg:before:right-[22px] lg:before:bottom-auto lg:before:h-[1.5px] lg:before:w-auto">
          <li aria-hidden="true" className="absolute inset-x-[22px] top-[18px] hidden h-2.5 overflow-hidden motion-reduce:hidden lg:block">
            <span className="block h-full animate-run before:absolute before:top-0 before:left-0 before:size-2.5 before:rounded-full before:bg-lime before:content-['']" />
          </li>
          {steps.map((step, i) => (
            <li key={step.title} className="relative grid content-start grid-cols-[44px_1fr] gap-x-[18px] gap-y-2.5 lg:grid-cols-1">
              <span className="row-span-2 grid size-11 place-items-center rounded-full border-[1.5px] border-lime bg-bg font-mono text-[13px] text-lime lg:row-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.15rem] font-bold lg:mt-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 flex items-center gap-3 border-t border-line pt-6 text-sm text-muted">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="flex-none text-lime">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          {note}
        </p>
      </Container>
    </section>
  );
}