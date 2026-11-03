import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/automation" />
      <main className="grid min-h-[60vh] place-items-center">
        <a href="/automation" className="text-lime underline">
          Continue to the site
        </a>
      </main>
    </>
  );
}