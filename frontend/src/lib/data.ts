import { site, type SiteContent } from "@/content/site";
import { landing, type LandingContent } from "@/content/landing";
import { projects, type Project } from "@/content/projects";

export async function getSiteContent(): Promise<SiteContent> {
  return site;
}
export async function getLanding(): Promise<LandingContent> {
  return landing;
}
export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured);
}