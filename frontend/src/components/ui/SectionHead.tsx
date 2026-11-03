import type { TwoToneHeading } from "@/content/landing";
import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadProps = {
  eyebrow: string;
  heading: TwoToneHeading;
  intro?: string;
  tone?: "lime" | "ink";
  className?: string;
};

export function SectionHead({ eyebrow, heading, intro, tone = "lime", className = "" }: SectionHeadProps) {
  const onLime = tone === "ink";

  return (
    <div className={`mb-14 grid max-w-[640px] gap-4 ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-bold">
        {heading.lead}{" "}
        <span className={onLime ? "underline decoration-[0.08em] underline-offset-[0.12em]" : "text-lime"}>
          {heading.highlight}
        </span>
      </h2>
      {intro && <p className={`max-w-[58ch] ${onLime ? "text-stone-ink/75" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}