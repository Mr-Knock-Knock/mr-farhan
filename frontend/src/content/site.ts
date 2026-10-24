export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  headline: string;
  intro: string[];
  businessNote: string;
  email: string;
  bookingUrl: string;
  socials: SocialLink[];
};

export const site: SiteContent = {
  name: "Muhammad Farhan Ahmad",
  headline: "TODO: one-line headline",
  intro: [
    "TODO: 2–3 sentences on what you do and who you help.",
  ],
  businessNote: "Projects delivered through Byte Mosaic LLP.",
  email: "TODO@example.com",
  bookingUrl: "#",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/im-muhammad-farhan-ahmad" },
    { label: "GitHub", href: "https://github.com/Mr-Knock-Knock" },
  ],
};