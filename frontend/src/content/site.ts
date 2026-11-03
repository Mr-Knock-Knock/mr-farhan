export type SiteContent = {
  name: string;
  logo: string;
  title: string;
  description: string;
  bookingUrl: string;
  booking: { calLink: string; namespace: string };
  copyright: string;
};

export const site: SiteContent = {
  name: "Muhammad Farhan Ahmad",
  logo: "Mr-Farhan",
  title: "Muhammad Farhan Ahmad · Automation & CRM specialist",
  description:
    "GoHighLevel, n8n, Make and Zapier systems for businesses and agencies: built, fixed or figured out.",
    bookingUrl: "https://cal.com/farhan-ahmad-wosqc9/30min-automation-consultation",
  booking: {
    calLink: "farhan-ahmad-wosqc9/30min-automation-consultation",
    namespace: "30min-automation-consultation",
  },
  copyright: "© 2026 Muhammad Farhan Ahmad · Projects delivered through Byte Mosaic LLP",
};