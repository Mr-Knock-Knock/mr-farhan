export type DiagramNode = {
  label: string;
  kind: "tool" | "step" | "output";
  note?: string;
};

export type DiagramStep = DiagramNode | { branch: DiagramNode[] };

export type Project = {
  slug: string;
  verb?: "Built" | "Fixed" | "Figured out";
  featured: boolean;
  title: string;
  summary: string;
  tags: string[];
  situation: string;
  problem: string;
  approach: string;
  result: string;
  diagram: DiagramStep[];
};

export const projects: Project[] = [
  {
    slug: "keap-tagged-export",
    verb: "Figured out",
    featured: true,
    title: "Tagged contact export from Keap",
    summary: "Pulled the full tagged contact list from the Keap API, which the CRM couldn't export on its own.",
    tags: ["Keap", "Python", "API"],
    situation: "A client needed a segmented contact list, with every tag each contact carried, to use outside the CRM.",
    problem: "Keap's built-in export couldn't include the full tag data for a segmented list.",
    approach:
      "Went to the Keap API instead. A Python script pulled contacts and tags from three endpoints, mapped tag IDs to tag names, and joined everything into one table.",
    result: "A clean Excel file with the complete tagged list, delivered in about one business day.",
    diagram: [
      { label: "Keap API", kind: "tool", note: "Three endpoints: contacts, tags, tag categories" },
      {
        branch: [
          { label: "Contacts", kind: "step" },
          { label: "Tag IDs → names", kind: "step" },
        ],
      },
      { label: "Python join", kind: "step", note: "One row per contact, all tags attached" },
      { label: "Excel file", kind: "output" },
    ],
  },
  {
    slug: "bulk-coupon-update",
    verb: "Fixed",
    featured: true,
    title: "Bulk coupon update",
    summary: "Updated tens of thousands of store coupons with one targeted database change, after the plugin kept erroring.",
    tags: ["WordPress", "SQL", "Debugging"],
    situation: "A store had tens of thousands of coupon records across four files that all needed the same change.",
    problem: "The import plugin took 2–5 hours per file and then errored before finishing.",
    approach:
      "Got database access, worked out how the coupons were stored across tables, and wrote one targeted SQL update.",
    result: "Every record updated in a single run, instead of hours per file through the plugin.",
    diagram: [
      { label: "4 coupon files", kind: "tool" },
      { label: "Database access", kind: "step" },
      { label: "Map coupon tables", kind: "step", note: "Found where each coupon field actually lives" },
      { label: "One SQL update", kind: "output" },
    ],
  },
];