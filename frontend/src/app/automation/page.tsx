import { Hero } from "@/components/sections/Hero";
import { ToolsStrip } from "@/components/sections/ToolsStrip";
import { Levels } from "@/components/sections/Levels";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Work } from "@/components/sections/Work";
import { getFeaturedProjects, getLanding } from "@/lib/data";

export default async function Home() {
  const landing = await getLanding();
  const projects = await getFeaturedProjects();
  return (
    <main>
      <Hero content={landing.hero} />
      <ToolsStrip tools={landing.tools} />
      <Levels content={landing.levels} />
      <Services content={landing.services} />
      <Work content={landing.work} projects={projects} />
      <Process content={landing.process} />
      <About content={landing.about} />
      <Faq content={landing.faq} />
      <Cta content={landing.cta} />
      
    </main>
  );
}