import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AboutContent } from "@/content/landing";

export function About({ content }: { content: AboutContent }) {
  const { eyebrow, photo, memo, paragraphs, signOff, signature, name } = content;

  return (
    <section id="about" className="pb-20 sm:pb-28">
      <Container className="grid items-stretch gap-x-14 gap-y-5 lg:grid-cols-[340px_1fr] lg:grid-rows-[auto_1fr]">
        <Eyebrow className="self-start lg:col-start-1 lg:row-start-1">{eyebrow}</Eyebrow>

        <Image
          src={photo.src}
          alt={photo.alt}
          width={960}
          height={1200}
          className="aspect-4/5 h-auto w-[220px] rounded-3xl border border-line bg-surface object-cover object-[50%_30%] lg:col-start-1 lg:row-start-2 lg:aspect-auto lg:h-full lg:w-full"
        />

        <article
          aria-label={`A note from ${memo.from}`}
          className="min-w-0 overflow-hidden rounded-[20px] border border-line bg-surface lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 border-b border-line px-5 py-5 font-mono text-sm sm:px-7">
            <dt className="text-muted">To</dt>
            <dd>{memo.to}</dd>
            <dt className="text-muted">From</dt>
            <dd>{memo.from}</dd>
            <dt className="text-muted">Subject</dt>
            <dd>{memo.subject}</dd>
          </dl>

          <div className="grid gap-4 px-5 pt-6 pb-2 sm:px-7">
            {paragraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`leading-[1.75] lg:text-justify lg:hyphens-auto ${i === 0 ? "text-fg" : "text-muted"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid justify-items-start gap-1.5 px-5 pt-3.5 pb-7 sm:px-7">
            <span className="text-muted">{signOff}</span>
            <Image src={signature.src} alt={signature.alt} width={1021} height={1268} className="h-[88px] w-auto sm:h-[104px]" />
            <span className="font-medium">{name}</span>
          </div>
        </article>
      </Container>
    </section>
  );
}