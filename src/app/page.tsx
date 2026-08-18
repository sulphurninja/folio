import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "@/components/site/Wordmark";

export const revalidate = 60;

const ISSUES = [
  {
    href: "/m/saj",
    src: "/issues/saj/cover.jpg",
    kicker: "Vol. I · The Caribbean Issue",
    title: "Master of the Deal",
    meta: "16 pages",
  },
];

export default function HomePage() {
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
          {ISSUES.map((issue) => (
            <li key={issue.href}>
              <Link href={issue.href} className="group block no-underline">
                <div className="cover-card relative aspect-[3/4] overflow-hidden bg-stage-3">
                  <Image
                    priority
                    src={issue.src}
                    alt={issue.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 360px, 90vw"
                  />
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
      </footer>
    </div>
  );
}
