import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkGrid } from "@/components/sections/WorkGrid";
import type { WorkContent } from "@/content/landing";
import type { Project } from "@/content/projects";

export function Work({ content, projects }: { content: WorkContent; projects: Project[] }) {
  return (
    <section id="work" className="pb-20 sm:pb-28">
      <Container>
        <SectionHead eyebrow={content.eyebrow} heading={content.heading} intro={content.intro} />
        <WorkGrid projects={projects} showMoreLabel={content.showMore} openLabel={content.openLabel} />
      </Container>
    </section>
  );
}