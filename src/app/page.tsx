/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "@/components/site/Wordmark";
import { ISSUE_REGISTRY } from "@/content/registry";
import { getPublishedMagazines } from "@/lib/queries";

export const revalidate = 60;

type IssueCard = {
  href: string;
  src: string;
  kicker: string;
  title: string;
  meta: string;
  remote?: boolean;
};

const HOME_ORDER = [
  "espey",
  "judy",
  "bethany",
  "kohila",
  "pallavi",
  "joan",
  "foskaris",
  "vineet",
  "saj",
];

const STATIC_ISSUES: IssueCard[] = HOME_ORDER.filter((slug) => ISSUE_REGISTRY[slug]).map((slug) => {
  const issue = ISSUE_REGISTRY[slug];
  return {
    href: `/m/${issue.slug}`,
    src: `/issues/${issue.slug}/cover.jpg`,
    kicker: issue.kicker,
    title: issue.title,
    meta: "16 pages",
  };
});

async function getIssues(): Promise<IssueCard[]> {
  const staticSlugs = new Set(STATIC_ISSUES.map((i) => i.href.split("/").pop()));
  const db = await getPublishedMagazines().catch(() => []);
  const dbCards: IssueCard[] = db
    .filter((m) => !staticSlugs.has(m.slug) && m.coverImage)
    .map((m) => ({
      href: `/m/${m.slug}`,
      src: m.coverImage,
      kicker: m.issueLabel,
      title: m.title,
      meta: m.kind === "html" ? `${m.pagesHtml?.length ?? 0} pages` : `${m.pages?.length ?? 0} pages`,
      remote: true,
    }));
  return [...dbCards, ...STATIC_ISSUES];
}

export default async function HomePage() {
  const issues = await getIssues();
  return (
    <div className="min-h-dvh bg-stage">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1200px] items-center px-5 py-5 lg:px-8">
          <Wordmark className="text-[1.7rem] text-paper" />
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8">
        <p className="kicker">The reading room</p>
        <h1 className="headline mt-3 max-w-xl text-[2.6rem] text-paper sm:text-[3.2rem]">
          Magazines, as they were meant to be held.
        </h1>
        <p className="mt-4 max-w-lg font-sans text-[1rem] leading-relaxed text-fog">
          Open an issue. Turn the pages. Zoom in. This is print, without the paper.
        </p>

        <ul className="stagger mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <li key={issue.href}>
              <Link href={issue.href} className="group block no-underline">
                <div className="cover-card relative aspect-[3/4] overflow-hidden bg-stage-3">
                  {issue.remote ? (
                    <img
                      src={issue.src}
                      alt={issue.title}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Image
                      priority
                      src={issue.src}
                      alt={issue.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 360px, 90vw"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                    <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {issue.kicker}
                    </p>
                    <h2 className="headline mt-1 text-[1.45rem] text-paper">{issue.title}</h2>
                  </div>
                </div>
                <p className="mt-3 font-sans text-[0.8rem] text-fog-dim">{issue.meta}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-line py-8">
        <p className="text-center font-serif text-[0.85rem] italic text-fog-dim">
          Turn the page. Stay a while.
        </p>
        <p className="mt-3 text-center font-sans text-[0.7rem] tracking-[0.08em] text-fog-dim">
          Published by{" "}
          <a
            href="https://thefortiora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog no-underline transition-colors hover:text-paper"
          >
            Fortiora Group LLC
          </a>{" "}
          · 30 N Gould St Ste R, Sheridan, WY 82801 · Hello@thefortiora.com
        </p>
      </footer>
    </div>
  );
}
