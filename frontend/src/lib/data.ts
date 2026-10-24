import { site, type SiteContent } from "@/content/site";

export async function getSiteContent(): Promise<SiteContent> {
  return site;
}