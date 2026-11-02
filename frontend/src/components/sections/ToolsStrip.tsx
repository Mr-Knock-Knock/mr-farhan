function ToolRow({ tools, duplicate = false }: { tools: string[]; duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-9 px-[18px] py-[18px] font-head text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold whitespace-nowrap motion-reduce:flex-wrap motion-reduce:justify-center ${
        duplicate ? "motion-reduce:hidden" : ""
      }`}
    >
      {tools.map((tool) => (
        <li key={tool} className="flex items-center gap-9">
          {tool}
          <span aria-hidden="true" className="text-[0.7em] opacity-55">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ToolsStrip({ tools }: { tools: string[] }) {
  return (
    <section aria-label="Tools I work with" className="group overflow-hidden border-y border-lime-ink bg-lime text-lime-ink">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none">
        <ToolRow tools={tools} />
        <ToolRow tools={tools} duplicate />
      </div>
    </section>
  );
}