export type TwoToneHeading = {
  lead: string;
  highlight: string;
};

export type LinkButton = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  sub: string;
  primaryCta: LinkButton;
  secondaryCta: LinkButton;
  video?: { embedUrl: string; title: string };
};

export type LevelMini =
  | { kind: "checklist"; title: string; items: string[] }
  | { kind: "sync"; title: string; nodes: [string, string, string]; status: string; errors: string }
  | { kind: "chart"; title: string };

export type Level = {
  number: string;
  tag: string;
  title: string;
  situation: string;
  mini: LevelMini;
  outcome: string;
};

export type LevelsContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  intro: string;
  levels: [Level, Level, Level];
  loopLabel: string;
  legend: { forward: string; backward: string };
  cta: { text: string; button: LinkButton };
};

export type LandingContent = {
  hero: HeroContent;
  tools: string[];
  levels: LevelsContent;
};

export const landing: LandingContent = {
  hero: {
    eyebrow: "Automation & CRM specialist",
    heading: {
      lead: "Whatever your systems need:",
      highlight: "built, fixed or figured out.",
    },
    sub: "Whether you're starting from scratch, fixing something that stopped working, or not yet sure what you need, you get someone who maps the process, builds it properly and keeps it running.",
    primaryCta: { label: "Book a call", href: "#book" },
    secondaryCta: { label: "See examples", href: "#work" },
  },

  tools: [
    "GoHighLevel",
    "n8n",
    "Make",
    "Zapier",
    "Keap",
    "Close CRM",
    "ClickFunnels",
    "Twilio",
    "Python",
  ],

  levels: {
    eyebrow: "Where you are now",
    heading: { lead: "Find your level.", highlight: "Start there." },
    intro:
      "Most businesses sit at different levels in different places: leads might be fully automated while invoicing is still done by hand. Start with the part that costs you the most time.",
    levels: [
      {
        number: "/00",
        tag: "Level 0",
        title: "Capture & follow up",
        situation: "Nothing is set up yet. Every lead depends on someone remembering.",
        mini: {
          kind: "checklist",
          title: "New lead",
          items: ["Lead captured", "Tagged", "SMS sent", "Email · day 1"],
        },
        outcome: "Leads are captured, sorted and followed up automatically, so nothing slips through.",
      },
      {
        number: "/01",
        tag: "Level 1",
        title: "Connect & sync",
        situation: "You have the tools. They just don't talk to each other.",
        mini: {
          kind: "sync",
          title: "Sync status",
          nodes: ["CRM", "Sheets", "Payments"],
          status: "Synced",
          errors: "0 errors",
        },
        outcome: "Data moves between your tools on its own, stays consistent, and you're alerted when something breaks.",
      },
      {
        number: "/02",
        tag: "Level 2",
        title: "See & decide",
        situation: "It all runs, but you can't see what's working.",
        mini: { kind: "chart", title: "Performance" },
        outcome: "With your data connected, you can see what's performing and where to focus next.",
      },
    ],
    loopLabel: "↻ A new tool or a new insight? That part starts again at Level 0.",
    legend: { forward: "Next step", backward: "Back a level" },
    cta: {
      text: "Not sure where you are? Let's work it out on a call.",
      button: { label: "Book a call", href: "#book" },
    },
  },
};