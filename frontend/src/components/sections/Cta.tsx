import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CopyEmail } from "@/components/ui/CopyEmail";
import type { CtaContent } from "@/content/landing";

export function Cta({ content }: { content: CtaContent }) {
  const { heading, text, button, email } = content;

  return (
    <section id="book" className="border-y border-line bg-surface">
      <Container className="grid items-center gap-10 py-[72px] sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-bold">
            {heading.lead} <span className="text-lime">{heading.highlight}</span>
          </h2>
          <p className="mt-4 max-w-[48ch] text-muted">{text}</p>
        </div>
        <div className="grid justify-items-start gap-3.5">
          <Button href={button.href}>{button.label}</Button>
          <CopyEmail email={email} />
        </div>
      </Container>
    </section>
  );
}