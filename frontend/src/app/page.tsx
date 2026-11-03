import { Hero } from "@/components/sections/Hero";
import { ToolsStrip } from "@/components/sections/ToolsStrip";
import { Levels } from "@/components/sections/Levels";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { getLanding } from "@/lib/data";

export default async function Home() {
  const landing = await getLanding();

  return (
    <main>
      <Hero content={landing.hero} />
      <ToolsStrip tools={landing.tools} />
      <Levels content={landing.levels} />
      <Services content={landing.services} />
      <Process content={landing.process} />
      <About content={landing.about} />
      <Faq content={landing.faq} />
      <Cta content={landing.cta} />
    </main>
  );
}