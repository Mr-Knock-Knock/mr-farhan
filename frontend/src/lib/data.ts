import { site, type SiteContent } from "@/content/site";
import { landing, type LandingContent } from "@/content/landing";

export async function getSiteContent(): Promise<SiteContent> {
  return site;
}
export async function getLanding(): Promise<LandingContent> {
  return landing;
}