import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import type { ServicesContent } from "@/content/landing";

export function Services({ content }: { content: ServicesContent }) {
  const { eyebrow, heading, intro, items } = content;

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHead eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              className="relative grid min-w-0 content-start gap-4 rounded-[20px] border border-line bg-surface px-7 py-8 transition duration-400 ease-calm hover:-translate-y-1 hover:border-lime/50 motion-reduce:transition-none"
            >
              <span aria-hidden="true" className="absolute top-[18px] right-6 font-mono text-[52px] leading-none text-line">
                {item.number}
              </span>
              <h3 className="box-content max-w-[14ch] pr-16 text-[1.45rem] font-bold">{item.title}</h3>
              <p className="text-[15px] font-medium text-lime">{item.promise}</p>
              <ul className="grid gap-2.5 text-[14.5px] text-muted">
                {item.points.map((point) => (
                  <li key={point} className="grid grid-cols-[14px_1fr] gap-2.5 before:text-lime before:content-['→']">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <Chip key={tool}>{tool}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}