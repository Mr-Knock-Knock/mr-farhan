import { Hero } from "@/components/sections/Hero";
import { ToolsStrip } from "@/components/sections/ToolsStrip";
import { getLanding } from "@/lib/data";

export default async function Home() {
  const landing = await getLanding();

  return (
    <main>
      <Hero content={landing.hero} />
      <ToolsStrip tools={landing.tools} />
    </main>
  );
}