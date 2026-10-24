import { getSiteContent } from "@/lib/data";

export default async function Home() {
  const site = await getSiteContent();

  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>

      <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">{site.headline}</p>

      <div className="mt-8 space-y-4 text-lg leading-relaxed">
        {site.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-6 text-sm text-neutral-500">{site.businessNote}</p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={site.bookingUrl}
          className="rounded-lg bg-neutral-900 px-5 py-3 font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Book a call
        </a>

        <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:no-underline">
          Email
        </a>

        {site.socials.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
}