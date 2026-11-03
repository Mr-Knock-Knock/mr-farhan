import { site } from "@/content/site";
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

export type Service = {
  number: string;
  title: string;
  promise: string;
  points: string[];
  tools: string[];
};

export type ServicesContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  intro: string;
  items: Service[];
};

export type ProcessContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  steps: { title: string; text: string }[];
  note: string;
};

export type AboutContent = {
  eyebrow: string;
  photo: { src: string; alt: string };
  memo: { to: string; from: string; subject: string };
  paragraphs: string[];
  signOff: string;
  signature: { src: string; alt: string };
  name: string;
};

export type FaqContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  intro: string;
  items: { question: string; answer: string }[];
};

export type CtaContent = {
  heading: TwoToneHeading;
  text: string;
  button: LinkButton;
  email: string;
};

export type WorkContent = {
  eyebrow: string;
  heading: TwoToneHeading;
  intro: string;
  showMore: string;
  openLabel: string;
};

export type LandingContent = {
  hero: HeroContent;
  tools: string[];
  levels: LevelsContent;
  work: WorkContent;
  services: ServicesContent;
  process: ProcessContent;
  about: AboutContent;
  faq: FaqContent;
  cta: CtaContent;
};

export const landing: LandingContent = {
  hero: {
    eyebrow: "Automation & CRM specialist",
    heading: {
      lead: "Whatever your systems need:",
      highlight: "built, fixed or figured out.",
    },
    sub: "Whether you're starting from scratch, fixing something that stopped working, or not yet sure what you need, you get someone who maps the process, builds it properly and keeps it running.",
    primaryCta: { label: "Book a call", href: site.bookingUrl },
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
      button: { label: "Book a call", href: site.bookingUrl },
    },
  },
    services: {
    eyebrow: "What I build",
    heading: { lead: "Systems that run", highlight: "without you." },
    intro: "If you already have a stack, I work with it. If it needs building from scratch, I build it.",
    items: [
      {
        number: "01",
        title: "CRM setup & automation",
        promise: "Your CRM should work harder than your sales team.",
        points: [
          "Pipelines, tags and custom fields built around your process",
          "Automated follow-ups: SMS, email, voicemail drops",
          "Lead routing and stage triggers",
          "Migrations between CRMs, tags and workflows included",
        ],
        tools: ["GoHighLevel", "Close", "Keap"],
      },
      {
        number: "02",
        title: "Funnels & workflow automation",
        promise: "Capture leads, qualify them and move them to close.",
        points: [
          "Funnel builds, with custom HTML and CSS where the builder runs out",
          "Multi-step workflows with conditional branching",
          "Webhooks across forms, calendars and payments",
          "Re-engagement and win-back sequences",
        ],
        tools: ["n8n", "Make", "Zapier", "ClickFunnels"],
      },
      {
        number: "03",
        title: "Custom integrations",
        promise: "When the no-code tool hits a wall, I write the fix.",
        points: [
          "API integrations where no connector exists",
          "Python scripts for syncing and file processing",
          "Scraping and structured data extraction",
          "Scheduled jobs that run on their own",
        ],
        tools: ["Python", "REST APIs", "SQL"],
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    heading: { lead: "When the tool says no,", highlight: "I find another way." },
    intro: "Client names are kept private. The diagrams show the shape of each fix, not the client's system.",
    showMore: "Show more",
    openLabel: "View the approach →",
  },
  process: {
    eyebrow: "How I work",
    heading: { lead: "No chasing. No guessing.", highlight: "No surprises." },
    steps: [
      { title: "Talk it through", text: "A free call about your setup: what's working and what isn't. No pitch, no invoice." },
      { title: "Scope and flag", text: "I map the process and point out anything in the brief that doesn't add up, before building." },
      { title: "Build in the open", text: "A message, a Loom, a doc or a flow diagram, whichever the moment needs." },
      { title: "Hand over", text: "Documentation and walkthroughs so your team can run it without me." },
      { title: "Own it", text: "I own the systems I build. If something breaks, I want to know." },
    ],
    note: "Client work stays confidential: no screenshots of your backend, no workflow recordings, ever.",
  },

  about: {
    eyebrow: "Who you'll work with",
    photo: { src: "/images/farhan-about.webp", alt: "Muhammad Farhan Ahmad" },
    memo: { to: "You", from: "Muhammad Farhan Ahmad", subject: "Before you book a call" },
    paragraphs: [
      "You're probably here because something in your systems isn't working the way it should. Leads go quiet, two tools disagree about the same customer, or you know things could run better and aren't sure where to start.",
      "Most people who get in touch have nothing set up yet, have something that stopped working, or aren't sure what they need. All three start the same way: questions about how your business actually runs.",
      "From there I map the process, flag anything that doesn't add up, and build it properly. You get updates without chasing, and documentation your team can use without me.",
      "Bring the messy version to the call. That's usually where the useful part is.",
    ],
    signOff: "Regards,",
    signature: { src: "/images/signature.svg", alt: "Signature: Farhan" },
    name: "Muhammad Farhan Ahmad",
  },

  faq: {
    eyebrow: "Questions",
    heading: { lead: "Straight", highlight: "answers." },
    intro: "Something else on your mind? Ask it on the call.",
    items: [
      {
        question: "Which tool do I need: GHL, n8n, Make or Zapier?",
        answer: "It depends on your process, your volume and what you already pay for. I'll recommend the simplest tool that does the job and say why, including when the answer is \"keep what you have\".",
      },
      {
        question: "Can you work with my existing setup?",
        answer: "Yes. Most work starts inside a stack that's already there. I map what exists first, then fix, connect or extend it rather than rebuilding for the sake of it.",
      },
      {
        question: "What happens if something breaks later?",
        answer: "You'll have documentation for everything I build, and I stay reachable for fixes. Ongoing maintenance is available as a retainer if you'd rather not think about it.",
      },
      {
        question: "How is pricing done?",
        answer: "One-time projects are scoped and priced before work starts. Ongoing work runs as a retainer. Either way, you know the cost before I build anything.",
      },
    ],
  },

  cta: {
    heading: { lead: "Tell me what you're doing", highlight: "manually." },
    text: "I'll show you what can be automated. No pitch, no invoice, just a straight conversation about your setup.",
    button: { label: "Book a 30-minute call", href: site.bookingUrl },
    email: "farhanahmad634@gmail.com",
  },
};