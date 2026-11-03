import type { Metadata } from "next";
import { Ubuntu_Sans, Poppins, Ubuntu_Sans_Mono } from "next/font/google";
import { getSiteContent } from "@/lib/data";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntuMono = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteContent();
  return {
    title: site.title,
    description: site.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const site = await getSiteContent();

  return (
    <html
      lang="en"
      className={`${ubuntuSans.variable} ${poppins.variable} ${ubuntuMono.variable}`}
    >
      <body id="top">
        <Header logo={site.logo} bookingUrl={site.bookingUrl} />
        {children}
        <Footer text={site.copyright} />
        <BackToTop />
      </body>
    </html>
  );
}