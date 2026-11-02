import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { HeroContent } from "@/content/landing";

export function Hero({ content }: { content: HeroContent }) {
  const { eyebrow, heading, sub, primaryCta, secondaryCta, video } = content;

  return (
    <section className="py-12 sm:py-20 lg:pb-24">
      <Container className={`grid items-center gap-14 ${video ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div className="grid min-w-0 gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-[20ch] text-[clamp(2.5rem,5.4vw,4.4rem)] font-extrabold">
            {heading.lead} <span className="text-lime">{heading.highlight}</span>
          </h1>
          <p className="max-w-[46ch] text-lg text-muted">{sub}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href} className="max-sm:flex-1 max-sm:justify-between">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="ghost" className="max-sm:flex-1 max-sm:justify-center">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {video && (
          <div className="aspect-video overflow-hidden rounded-3xl border border-line bg-surface">
            <iframe
              src={video.embedUrl}
              title={video.title}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          </div>
        )}
      </Container>
    </section>
  );
}