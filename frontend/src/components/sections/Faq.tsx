import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import type { FaqContent } from "@/content/landing";

export function Faq({ content }: { content: FaqContent }) {
  const { eyebrow, heading, intro, items } = content;

  return (
    <section id="faq" className="pb-20 sm:pb-28">
      <Container className="grid items-start lg:grid-cols-[1fr_1.4fr] lg:gap-14">
        <SectionHead eyebrow={eyebrow} heading={heading} intro={intro} className="lg:mb-0" />
        <div className="border-t border-line">
          {items.map((item, i) => (
            <details key={item.question} open={i === 0} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-1 py-[22px] font-head text-[1.15rem] font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative size-8 flex-none rounded-full border border-line transition duration-350 ease-calm group-open:rotate-45 group-hover:border-lime before:absolute before:top-1/2 before:left-1/2 before:h-[1.5px] before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-sm before:bg-lime before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-[1.5px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-lime after:content-[''] motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-[62ch] px-1 pb-[22px] text-[15px] text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}