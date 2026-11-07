/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. XII · No. 12
 * Jon Eric McPike, Senior Healthcare Consultant, Remarkable Unlimited.
 *
 * Closed `je-*` system: fight-bill navy, gold and crimson over a boardroom
 * serif. Anton for the bill, Merriweather for the read, Barlow Condensed for
 * the labels. The 3 · 2 · 1 numerals are structural throughout: cover
 * teasers, the method spread, the round numbers on the card. The interview
 * is printed whole, eight questions in the order asked, one per leaf.
 */

const IMG = "/issues/joneric";

const CREDITS = novemberCredits("Jon Eric McPike");

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="je-folio">
      <span>PrimeCrest · November 2026</span>
      <span>{section}</span>
      <b>{page}</b>
    </p>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="je-kicker">{children}</p>;
}

/** One interview leaf: numeral, the question as asked, the answer whole. */
function QA({
  n,
  section,
  q,
  page,
  tone = "paper",
  size = 14.5,
  lead = 1.58,
  pull,
  extra,
  children,
}: {
  n: string;
  section: string;
  q: ReactNode;
  page: string;
  tone?: "paper" | "navy";
  size?: number;
  lead?: number;
  pull?: ReactNode;
  extra?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className={`mag-page je je-${tone}`}>
      <div className="je-well">
        <header className="je-qhead">
          <b className="je-qnum">{n}</b>
          <div>
            <p className="je-kicker">
              {section} · {n} of 08
            </p>
            <h3 className="je-q">{q}</h3>
          </div>
        </header>
        <div className="je-qa" style={{ "--je-size": `${size}px`, "--je-lead": lead } as CSSProperties}>
          {children}
        </div>
        {extra}
        {pull ? <p className="je-qpull">{pull}</p> : null}
        <Folio page={page} section="The Interview" />
      </div>
    </article>
  );
}

/** A small console window used by the Fortiora house ads. */
function Win({ title, tag, children }: { title: string; tag?: string; children: ReactNode }) {
  return (
    <div className="je-win">
      <div className="je-win-bar">
        <i />
        <i />
        <i />
        <span>{title}</span>
        {tag ? <em>{tag}</em> : null}
      </div>
      <div className="je-win-body">{children}</div>
    </div>
  );
}

function AdFoot({ product }: { product: string }) {
  return (
    <div className="je-adfoot">
      <img className="je-adfoot-logo" src="/brand/logo-fortiora.png" alt="Fortiora" />
      <p>
        <b>{product}</b> is built by Fortiora Group LLC
        <br />
        Hello@thefortiora.com · thefortiora.com
      </p>
      <img className="je-adfoot-qr" src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
    </div>
  );
}

export const JONERIC_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "Fortiora Pulse" },
  { page: 5, label: "Worst to First" },
  { page: 9, label: "Three. Two. One." },
  { page: 11, label: "The Interview" },
  { page: 13, label: "Fortiora Ops" },
  { page: 21, label: "The Card" },
  { page: 22, label: "Be Featured" },
  { page: 23, label: "PrimeCrest" },
];

export function JonEricPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page je je-cover" data-density="hard">
        <svg className="je-cground" viewBox="0 0 840 1120" aria-hidden>
          <defs>
            <radialGradient id="jeBase" cx="50%" cy="40%" r="75%">
              <stop offset="0%" stopColor="#1e3672" />
              <stop offset="45%" stopColor="#0f1c3e" />
              <stop offset="100%" stopColor="#04070e" />
            </radialGradient>
            <radialGradient id="jeSpot" cx="420" cy="560" r="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f7c94a" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#f2b705" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#f2b705" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="jeHaze" cx="420" cy="790" r="470" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d99a1a" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#8a5a10" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8a5a10" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="jeCone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff1c2" stopOpacity="0.34" />
              <stop offset="70%" stopColor="#f2b705" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f2b705" stopOpacity="0" />
            </linearGradient>
            <filter id="jeSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="jeBokeh" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter id="jeGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0" />
            </filter>
          </defs>
          <rect width="840" height="1120" fill="url(#jeBase)" />
          <polygon points="372,0 468,0 700,820 140,820" fill="url(#jeCone)" filter="url(#jeSoft)" />
          <rect width="840" height="1120" fill="url(#jeSpot)" />
          <rect width="840" height="1120" fill="url(#jeHaze)" />
          <ellipse cx="420" cy="760" rx="420" ry="120" fill="#f2d48a" opacity="0.07" filter="url(#jeSoft)" />
          <g filter="url(#jeBokeh)">
            {[
              [70, 960, 16, 0.32],
              [150, 1010, 10, 0.24],
              [236, 948, 7, 0.2],
              [612, 970, 9, 0.22],
              [700, 930, 14, 0.3],
              [780, 1000, 11, 0.26],
              [110, 880, 6, 0.16],
              [740, 860, 6, 0.16],
            ].map(([x, y, r, o]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#f7c94a" opacity={o * 1.8} />
            ))}
          </g>
          <rect width="840" height="1120" filter="url(#jeGrain)" opacity="0.09" />
        </svg>

        <img
          className="je-cover-cut"
          src={`${IMG}/cutout.png`}
          alt="Jon Eric McPike, Senior Healthcare Consultant at Remarkable Unlimited"
          fetchPriority="high"
        />
        <div className="je-cover-floor" />

        <header className="je-cmast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
          <p>
            <span>November 2026 · Vol. XII · No. 12</span>
            <span>Where Vision Meets Voice</span>
          </p>
        </header>

        <h2 className="je-ctitle">
          <span>From Gratitude to Growth:</span>
          <em>The 3.2.1. Way</em>
        </h2>
        <p className="je-cdek">Creator of The Leadership Superpower Matrix™ · Author &amp; Keynote Speaker</p>

        <div className="je-cteasers">
          <p className="je-cteaser">
            <b>p.05 · The cover story</b>
            <span>Worst to first. He kept the team.</span>
          </p>
          <p className="je-cteaser">
            <b>p.09 · The book</b>
            <span>Failure isn&apos;t the opposite of success.</span>
          </p>
          <p className="je-cteaser">
            <b>p.11 · The interview</b>
            <span>Eight questions, printed whole.</span>
          </p>
        </div>

        <div className="je-croundel" aria-label="3 Gratitudes, 2 Intentions, 1 Bold Action">
          <span>
            <b>3</b> Gratitudes
          </span>
          <span>
            <b>2</b> Intentions
          </span>
          <span>
            <b>1</b> Bold Action
          </span>
        </div>

        <p className="je-crole">Senior Healthcare Consultant · Remarkable Unlimited</p>

        <div className="je-cplate">
          <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
        </div>

        <div className="je-cname">
          <span className="je-cname-first">Jon Eric</span>
          <span className="je-cname-last">McPIKE</span>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS (LEFT) */}
      <article className="mag-page je je-navy je-cphoto">
        <img
          className="je-cphoto-img"
          src={`${IMG}/desk.jpg`}
          alt="Jon Eric McPike at his desk with a book open and a pen in hand"
        />
        <div className="je-cphoto-band">
          <p className="je-cword">Contents</p>
          <div className="je-cphoto-meta">
            <p>
              The November Issue
              <br />
              Vol. XII · No. 12
            </p>
            <p className="je-cphoto-cap">At the desk, pen in hand. The idea behind 3.2.1. was first typed on a phone.</p>
          </div>
        </div>
      </article>

      {/* ============================================== 02 · CONTENTS (RIGHT) */}
      <article className="mag-page je je-paper">
        <div className="je-well">
          <Kicker>On the card this month</Kicker>
          <div className="je-ilead">
            <b>05</b>
            <div>
              <p className="je-ilead-k">The Cover Story</p>
              <h2>Worst to first, and then the fall.</h2>
              <p>
                Jon Eric McPike spent nearly four decades in healthcare. He turned a failing
                hospital around, built companies with his wife, and lost them. What he did next
                fits in three numbers.
              </p>
            </div>
          </div>
          <ol className="je-index">
            <li>
              <b>03</b>
              <div>
                <p className="je-ilead-k">The masthead</p>
                <h4>Credits</h4>
                <p>Who made this issue, and where to find them.</p>
              </div>
            </li>
            <li>
              <b>09</b>
              <div>
                <p className="je-ilead-k">The method</p>
                <h4>Three. Two. One.</h4>
                <p>Solitaire, a U-Haul, and the mantra that turned into a book.</p>
              </div>
            </li>
            <li>
              <b>11</b>
              <div>
                <p className="je-ilead-k">In his words</p>
                <h4>The Interview</h4>
                <p>Eight questions, answered in full and printed in the order we asked them.</p>
              </div>
            </li>
            <li>
              <b>21</b>
              <div>
                <p className="je-ilead-k">The record</p>
                <h4>The Card</h4>
                <p>From the first job out of high school to The Middle Rounds.</p>
              </div>
            </li>
            <li>
              <b>22</b>
              <div>
                <p className="je-ilead-k">The desk</p>
                <h4>Be Featured</h4>
                <p>Put your story on the record in PrimeCrest.</p>
              </div>
            </li>
          </ol>
          <div className="je-ifoot">
            <span>
              <b>04</b> Fortiora Pulse
            </span>
            <span>
              <b>13</b> Fortiora Ops
            </span>
            <span>
              <b>23</b> The November Issue
            </span>
          </div>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS (LEFT) */}
      <article className="mag-page je je-navy">
        <div className="je-well je-credits">
          <div className="je-credits-mast">
            <PrimeCrestMast tone="dark" tagline={false} />
          </div>
          <p className="je-credits-issue">The November Issue · Vol. XII · No. 12 · 2026</p>
          <h2 className="je-credits-h">Credits.</h2>
          <dl className="je-credits-list">
            {CREDITS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="je-imprint">
            <div>
              <p className="je-kicker">Corporate Office</p>
              <p>
                <b>Fortiora Group LLC</b>
                <br />
                30 N Gould St Ste R
                <br />
                Sheridan, WY 82801
                <br />
                United States
              </p>
              <p>
                Hello@thefortiora.com
                <br />
                thefortiora.com
              </p>
            </div>
            <div className="je-imprint-marks">
              <img className="je-imprint-logo" src="/brand/logo-fortiora.png" alt="Fortiora" />
              <img className="je-imprint-qr" src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
            </div>
          </div>
          <p className="je-rights">
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
          <Folio page="03" section="Credits" />
        </div>
      </article>

      {/* ============================================== 04 · FORTIORA PULSE (RIGHT, single ad) */}
      <article className="mag-page je je-gold je-pulse">
        <div className="je-well">
          <p className="je-adk">Fortiora Pulse · Employee engagement</p>
          <h2 className="je-pulse-h">
            Ask. Listen. <span>Act.</span>
          </h2>
          <p className="je-pulse-dek">
            Short pulse surveys your people will actually answer, sentiment you can read week to
            week, and an action plan on every manager&apos;s desk before the next one goes out.
          </p>

          <div className="je-pulse-grid">
            <Win title="Pulse · This week" tag="Open">
              <p className="je-ui-q">How supported did you feel by your manager this week?</p>
              <div className="je-ui-scale">
                {["1", "2", "3", "4", "5"].map((s) => (
                  <span key={s} className={s === "4" ? "is-on" : undefined}>
                    {s}
                  </span>
                ))}
              </div>
              <p className="je-ui-q">What is one thing that would make next week easier?</p>
              <div className="je-ui-input">Type an answer, or skip</div>
              <div className="je-ui-row">
                <span>Anonymous by default</span>
                <b>Send</b>
              </div>
            </Win>

            <Win title="Sentiment · By team">
              <svg viewBox="0 0 300 130" className="je-ui-chart" aria-hidden>
                {[26, 58, 90].map((y) => (
                  <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#0f1c3e" strokeOpacity="0.12" />
                ))}
                <polyline
                  points="0,92 30,88 60,96 90,80 120,84 150,70 180,66 210,72 240,54 270,48 300,40"
                  fill="none"
                  stroke="#0f1c3e"
                  strokeWidth="3"
                />
                <polyline
                  points="0,60 30,66 60,62 90,74 120,70 150,82 180,86 210,80 240,92 270,96 300,94"
                  fill="none"
                  stroke="#b3122e"
                  strokeWidth="3"
                  strokeDasharray="6 5"
                />
              </svg>
              <div className="je-ui-legend">
                <span>
                  <i style={{ background: "#0f1c3e" }} /> Nursing, days
                </span>
                <span>
                  <i style={{ background: "#b3122e" }} /> Front office
                </span>
              </div>
              <p className="je-ui-note">Theme rising: &ldquo;handoffs at shift change&rdquo;</p>
            </Win>

            <Win title="Action plan · Front office" tag="Manager">
              <ul className="je-ui-check">
                <li className="is-done">Share this week&apos;s themes at huddle</li>
                <li className="is-done">Pick one thing to change</li>
                <li>Owner and date agreed with the team</li>
                <li>Check back in the next pulse</li>
              </ul>
            </Win>
          </div>

          <ul className="je-pulse-feats">
            <li>
              <b>Pulse surveys</b>
              <span>Two or three questions, on your schedule, on any phone.</span>
            </li>
            <li>
              <b>Sentiment trends</b>
              <span>By team, by site, by theme, read in a minute.</span>
            </li>
            <li>
              <b>Manager action plans</b>
              <span>From what people said to what happens next.</span>
            </li>
          </ul>
          <AdFoot product="Fortiora Pulse" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER (LEFT) */}
      <article className="mag-page je je-navy je-open">
        <div className="je-open-top">
          <Kicker>The Cover Story · Jon Eric McPike</Kicker>
          <h1 className="je-open-h">
            <span>Worst</span>
            <span>to first.</span>
          </h1>
        </div>
        <img
          className="je-open-img"
          src={`${IMG}/portrait.jpg`}
          alt="Jon Eric McPike in a navy suit and tie"
        />
        <p className="je-open-cap">
          <b>Jon Eric McPike</b> Senior Healthcare Consultant, Remarkable Unlimited. Creator of The
          Leadership Superpower Matrix™.
        </p>
      </article>

      {/* ============================================== 06 · STORY 1 (RIGHT) */}
      <article className="mag-page je je-paper">
        <div className="je-well">
          <p className="je-stand">
            Nearly four decades in healthcare. A failing hospital turned into the best in its
            system, companies built and then lost. Out of the loss came a phrase typed on a phone
            in the cab of a <span style={{ whiteSpace: "nowrap" }}>U-Haul</span>: three gratitudes, two intentions, one bold action.
          </p>
          <div className="je-rule3" aria-hidden>
            <i />
            <i />
            <i />
          </div>
          <div className="je-flow je-drop" style={{ "--je-size": "17.9px", "--je-lead": 1.74 } as CSSProperties}>
            <p>
              He was put in charge days after he finished high school. Young, short on experience,
              and by his own account lucky twice over: in his mentors, and in the caregivers he
              was sent to lead. Doing the job well opened the next door, and the one after that.
              Individual facilities. Regional roles. Hospital leadership. Eventually, businesses
              of his own.
            </p>
            <p>
              The bad days came with it. One Saturday morning his phone rang with the news that a
              patient had killed another patient, using the drawer from his bedside table. There
              is no manual for that call, he says. He drove in. He and the Director of Nursing
              sat down, looked at what they had, and within minutes there was a plan. The
              regulatory, clinical, operational and safety work started at once.
            </p>
            <p>
              Then he did the thing he still talks about. He walked the building and stopped at
              every employee, one at a time. Do you feel safe. Are you okay. What do you need
              right now. Some were frightened. Others were simply overwhelmed. All of them were
              watching him for a sign that someone had a plan.
            </p>
            <p>
              &ldquo;Before you can stabilize the organization,&rdquo; he says, &ldquo;you have to
              help stabilize the people.&rdquo;
            </p>
            <p>
              The crises changed over the years. Natural disasters, regulators, money, turnarounds
              and, in time, a pandemic. His habits for them did not. Tell people what you know and
              what you don&apos;t. Set the first priorities. Give them the next eight hours, even
              when nobody can promise them the next six months.
            </p>
          </div>
          <blockquote className="je-pull">
            <p>There is no leadership manual that prepares you for a moment like that.</p>
            <cite>Jon Eric McPike, on the Saturday morning call</cite>
          </blockquote>
          <Folio page="06" section="The Cover Story" />
        </div>
      </article>

      {/* ============================================== 07 · STORY 2 (LEFT) */}
      <article className="mag-page je je-paper">
        <div className="je-well">
          <Kicker>The Cover Story · The hospital</Kicker>
          <h2 className="je-h">He kept the team.</h2>
          <div className="je-flow" style={{ "--je-size": "18.1px", "--je-lead": 1.74 } as CSSProperties}>
            <p>
              The hospital came later. He agreed to become chief executive of what was considered
              the worst-performing rehabilitation hospital in a national system, and he did not do
              what new chiefs usually do. He brought in nobody. He kept the leadership team that
              was already there, because he believed in it.
            </p>
            <p>
              The building went from worst to first. It became the top performer on virtually
              every major measure the system kept: patient satisfaction, employee satisfaction,
              volume, financial performance and regulatory outcomes, including the best licensure
              survey in the company. Ask him about it and the scorecard is not what he brings up.
              He talks about people who had given years to the place beginning to believe in
              themselves again, and realizing their own decisions had done it.
            </p>
            <p>
              With his wife he then built healthcare businesses of their own, and they grew to $27
              million in annual revenue. Again, he says, the revenue was not the accomplishment.
              The people and the culture were. COVID put that to the test. Their facilities became
              COVID treatment centers, and their caregivers walked into the most frightening
              clinical conditions of their working lives. Among the COVID patients they treated,
              the recovery rate was 96 percent.
            </p>
            <p>
              Then the companies were gone. There was bankruptcy, and litigation, and a long fight
              to keep what they had built against organizations with far deeper pockets. They lost
              anyway. Sometimes in business, he says, determination alone isn&apos;t enough.
              Losing something that had consumed so much of their lives was, in his words, a
              tremendous blow, both professionally and personally.
            </p>
          </div>
          <blockquote className="je-pull">
            <p>
              Success taught me how to lead. Crisis taught me how to remain calm and make
              decisions. Failure and loss taught me humility.
            </p>
            <cite>Jon Eric McPike</cite>
          </blockquote>
          <Folio page="07" section="The Cover Story" />
        </div>
      </article>

      {/* ============================================== 08 · STORY 3 (RIGHT) */}
      <article className="mag-page je je-paper je-story3">
        <img
          className="je-story3-img"
          src={`${IMG}/family.jpg`}
          alt="Jon Eric McPike with family on driftwood at the water's edge"
        />
        <p className="je-capbar">
          <b>Family, on the driftwood.</b> &ldquo;I define it by the people I had the privilege to
          lead.&rdquo;
        </p>
        <div className="je-well je-story3-well">
          <div className="je-flow" style={{ "--je-size": "16.6px", "--je-lead": 1.66 } as CSSProperties}>
            <p>
              The loss took more than a business. It took years of work, a great deal of money,
              and a piece of who he understood himself to be. He was full of self-doubt, and one
              question ran on a loop. What do I do now?
            </p>
            <p>
              The way out began with a question that sounded backwards. He had been telling the
              story to himself one way only: I lost my companies, I failed. What if it was also an
              education? Few people, he reasoned, had built companies, led them through success,
              fought through bankruptcy and litigation, carried them through COVID and still lost
              them. He could not change any of it. He could change what he did with it.
            </p>
            <p>
              &ldquo;Maybe I didn&apos;t go through all of this just to get through it,&rdquo; he
              says. &ldquo;Maybe I went through it so I could help someone else get through
              theirs.&rdquo;
            </p>
            <p>
              He does not measure the career by the companies, the revenue or the scorecards. He
              measures it by the people he led, the patients whose lives touched his, and the teams
              that did things they had not believed they could.
            </p>
          </div>
          <Folio page="08" section="The Cover Story" />
        </div>
      </article>

      {/* ============================================== 09 · 3.2.1 (LEFT) · the poster */}
      <article className="mag-page je je-navy je-poster">
        <img
          className="je-poster-img"
          src={`${IMG}/getbackup.jpg`}
          alt="Poster for The 3.2.1. Experience: Failure isn't the opposite of success. It's a part of it. Get back up."
        />
        <div className="je-poster-band">
          <div className="je-poster-words">
            <p className="je-kicker">The 3.2.1. Experience™ · The book</p>
            <p className="je-poster-lines">
              Every setback teaches.
              <br />
              Every challenge builds.
              <br />
              Every failure is feedback that moves you forward.
            </p>
            <p className="je-poster-mantra">
              <b>3</b> Gratitudes. <b>2</b> Intentions. <b>1</b> Bold Action.
            </p>
          </div>
          <div className="je-poster-scene">
            <p>
              It began with a game of Solitaire he could not finish for nearly a month, and a
              moment in a U-Haul in South Texas when he knew what 3, 2 and 1 meant. He typed it as
              fast as he could.
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 10 · 3.2.1 (RIGHT) */}
      <article className="mag-page je je-navy je-nums">
        <div className="je-well">
          <Kicker>The method</Kicker>
          <h2 className="je-nums-h">Three. Two. One.</h2>
          <ol className="je-nums-list">
            <li>
              <b>3</b>
              <div>
                <h3>Gratitudes</h3>
                <p className="je-nums-k">Changing focus through gratitude</p>
                <p>&ldquo;Change what you focus on today.&rdquo;</p>
              </div>
            </li>
            <li>
              <b>2</b>
              <div>
                <h3>Intentions</h3>
                <p className="je-nums-k">Creating direction through intentionality</p>
                <p>&ldquo;You can become intentional about where you&apos;re going.&rdquo;</p>
              </div>
            </li>
            <li>
              <b>1</b>
              <div>
                <h3>Bold Action</h3>
                <p className="je-nums-k">Changing behavior through bold action</p>
                <p>&ldquo;And you can take one bold action that moves you forward every day.&rdquo;</p>
              </div>
            </li>
          </ol>
          <p className="je-nums-foot">
            He read his way into the neuroscience of gratitude, neuroplasticity and habit
            formation, not to write a book but to find his own way forward. The book came after.
            So did the keynotes, the Leadership Superpower Matrix™ and the consulting he now does
            as Senior Healthcare Consultant at Remarkable Unlimited.
          </p>
          <Folio page="10" section="Three. Two. One." />
        </div>
      </article>

      {/* ============================================== 11 · Q1 (LEFT) */}
      <QA
        n="01"
        section="Leadership and business"
        page="11"
        size={13.6}
        lead={1.5}
        q="Could you share your professional journey across leadership, entrepreneurship, and organizational transformation? Which experiences have shaped your approach the most?"
      >
        <p>
          I was thrust into leadership days after graduating from high school. I was young,
          inexperienced, and had a lot to learn, but I was fortunate to have great mentors and the
          opportunity to work alongside extraordinary teams of caregivers.
        </p>
        <p>
          As my career progressed, success opened doors to increasingly larger leadership
          opportunities, from individual facilities to regional roles, hospital leadership, and
          eventually entrepreneurship. Along the way, I met remarkable patients who shared
          incredible life stories with me, and I also experienced crises I never could have
          imagined, including the tragedy of one patient murdering another patient.
        </p>
        <p>
          One of the defining opportunities of my career came when I agreed to become CEO of what
          was considered the worst-performing rehabilitation hospital in a national system. What
          makes that story especially meaningful to me is that I didn&apos;t come in and replace
          the leadership team. I believed in the people who were already there.
        </p>
        <p>Together, we went from worst to first.</p>
        <p>
          We became the top performer across virtually every major metric: patient satisfaction,
          employee satisfaction, volume, financial performance, and regulatory outcomes, including
          the best licensure survey in the company. But the numbers aren&apos;t what I remember
          most. I remember watching employees who had dedicated years of their lives to that
          hospital begin to believe in themselves again. They developed a sense of pride in what
          they were accomplishing and realized that their own decisions and bold actions had
          created something remarkable. That experience profoundly shaped the way I think about
          leadership today.
        </p>
        <p>
          Later, as an entrepreneur, my wife and I built healthcare businesses that grew to $27
          million in annual revenue. Once again, however, the greatest accomplishment wasn&apos;t
          the revenue. It was the people and the culture we built.
        </p>
        <p>
          That became especially evident during COVID. Our facilities became COVID treatment
          centers, and our caregivers willingly stepped into one of the most frightening
          healthcare environments of our lifetime. Together, we achieved extraordinary clinical
          outcomes, including a 96% recovery rate among the COVID patients we treated. I witnessed
          courage, compassion, sacrifice, and leadership at every level of the organization.
        </p>
        <p>Then came one of the most difficult chapters of my professional life.</p>
        <p>
          Despite everything we had built and fought to preserve, we ultimately lost our
          companies. Sometimes in business, particularly when you&apos;re facing organizations with
          significantly deeper financial resources, determination alone isn&apos;t enough. Losing
          something that had consumed so much of our lives was a tremendous blow, both
          professionally and personally.
        </p>
        <p>But it also changed me.</p>
        <p>
          Success taught me how to lead. Crisis taught me how to remain calm and make decisions.
          Failure and loss taught me humility, resilience, perspective, and the importance of
          separating who you are from what you own or the title you hold.
        </p>
        <p>
          Looking back over nearly four decades in healthcare, I don&apos;t define my career solely
          by the organizations we built, the revenue we generated, or the performance metrics we
          achieved. I define it by the people I had the privilege to lead, the patients whose lives
          touched mine, the teams that accomplished things they didn&apos;t initially believe were
          possible, and the lessons I carried forward from both winning and losing.
        </p>
        <p>
          Those experiences ultimately shaped the leadership philosophy I have today: remarkable
          change rarely happens because of one enormous decision. It happens when people begin
          making small, intentional choices consistently and then find the courage to take the
          bold action that moves them forward.
        </p>
        <p>
          My favorite quote is: &ldquo;In everyone&apos;s life comes one undeniable moment of
          change that never stops mattering.&rdquo; Terry Kay
        </p>
      </QA>

      {/* ============================================== 12 · Q2 (RIGHT) */}
      <QA
        n="02"
        section="Transforming healthcare organizations"
        page="12"
        tone="navy"
        size={16.5}
        lead={1.66}
        q="As a Senior Healthcare Consultant at Remarkable Unlimited, how do you help healthcare organizations overcome operational, financial, and leadership challenges?"
        extra={
          <div className="je-eq" aria-label="Better systems plus engaged people">
            <div>
              <b>Better</b>
              <span>systems</span>
            </div>
            <i>+</i>
            <div>
              <b>Engaged</b>
              <span>people</span>
            </div>
          </div>
        }
      >
        <p>
          My approach always begins with understanding before changing. Before I recommend a
          solution, I want to understand the organization&apos;s culture, its people, its
          processes, and where leadership believes the barriers to success exist.
        </p>
        <p>
          From there, I conduct a deep dive into the financial and operational results. I have
          always believed that data tells a story. Financial performance can reveal much more than
          whether an organization is making or losing money. It can point us toward operational
          inefficiencies, breakdowns in systems, missed opportunities, and areas where execution
          isn&apos;t aligned with strategy. The numbers tell us where to look; then we work with the
          people closest to the operation to understand why it is happening.
        </p>
        <p>My goal is twofold.</p>
        <p>
          First, we identify operational inefficiencies and system failures and turn them into
          specific, measurable action plans. I don&apos;t want to simply tell an organization what
          is wrong. I want to help its leaders build scalable systems, establish accountability,
          identify the right performance indicators, and create a roadmap their team can actually
          execute long after the consulting engagement ends.
        </p>
        <p>
          Second, and equally important, is creating momentum within the workforce. You can fix a
          process on paper, but if your people aren&apos;t engaged in the solution, sustainable
          change is difficult to achieve. That&apos;s where I incorporate principles from The
          3.2.1. Experience into the organization&apos;s leadership and culture. We work on
          changing focus through gratitude, creating direction through intentionality, and
          changing behavior through bold action.
        </p>
        <p>
          Ultimately, I believe successful transformation requires both sides of the equation:
          better systems and engaged people. When you improve the operation while helping
          employees believe they have the ability to influence its success, accountability begins
          to feel less like something being imposed on them and more like something they own.
        </p>
      </QA>

      {/* ============================================== 13 · FORTIORA OPS (LEFT) */}
      <article className="mag-page je je-ops je-ops-l">
        <div className="je-ops-grid" aria-hidden />
        <div className="je-well">
          <p className="je-adk">Fortiora Ops · AI agents for healthcare operations</p>
          <h2 className="je-ops-h">
            The shift
            <br />
            is covered
            <br />
            <span>before the</span>
            <br />
            <span>phone rings.</span>
          </h2>
          <p className="je-ops-dek">
            Fortiora Ops puts AI agents on the operational work that eats a charge nurse&apos;s
            day. They watch the schedule, write the handoff, keep the census current and send the
            hard calls to the right person. Your leaders stay on the floor.
          </p>
          <ol className="je-ops-feats">
            <li>
              <b>01</b>
              <div>
                <h4>Staffing &amp; shift coverage</h4>
                <p>Spots the open shift, works the float pool and call-out list, and asks a human to approve.</p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Handoff summaries</h4>
                <p>A clean, structured summary waiting at every shift change.</p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>Census &amp; throughput</h4>
                <p>Admissions, discharges and transfers on one live board.</p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Escalation routing</h4>
                <p>The right issue to the right leader, with the context attached.</p>
              </div>
            </li>
          </ol>
        </div>
      </article>

      {/* ============================================== 14 · FORTIORA OPS (RIGHT) */}
      <article className="mag-page je je-ops je-ops-r">
        <div className="je-ops-grid" aria-hidden />
        <div className="je-well">
          <div className="je-console">
            <div className="je-console-bar">
              <img src="/brand/logo-fortiora.png" alt="" />
              <b>Fortiora Ops</b>
              <span>Operations console</span>
              <em>Agents on</em>
            </div>
            <div className="je-console-body">
              <aside className="je-console-nav">
                <span className="is-on">Coverage</span>
                <span>Handoffs</span>
                <span>Census</span>
                <span>Escalations</span>
                <span>Agent log</span>
              </aside>
              <div className="je-console-main">
                <div className="je-panel">
                  <p className="je-panel-h">
                    Shift coverage · Tonight <em>Needs approval</em>
                  </p>
                  <table className="je-ui-table">
                    <tbody>
                      <tr>
                        <td>4 West · Med-Surg</td>
                        <td>RN · 19:00</td>
                        <td>
                          <span className="je-chip is-gold">Offer sent</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Rehab 2</td>
                        <td>CNA · 23:00</td>
                        <td>
                          <span className="je-chip is-red">Open</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Rehab 1</td>
                        <td>LVN · 19:00</td>
                        <td>
                          <span className="je-chip is-gold">Swap pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>ED</td>
                        <td>RN · 07:00</td>
                        <td>
                          <span className="je-chip">Covered</span>
                        </td>
                      </tr>
                      <tr>
                        <td>ICU</td>
                        <td>RN · 19:00</td>
                        <td>
                          <span className="je-chip">Covered</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="je-panel-row">
                  <div className="je-panel">
                    <p className="je-panel-h">Handoff summary · 4 West</p>
                    <ul className="je-ui-lines">
                      <li>
                        <b>Watch</b> Fall-risk flags reviewed with night charge
                      </li>
                      <li>
                        <b>Pending</b> Two discharges waiting on transport
                      </li>
                      <li>
                        <b>Family</b> Call-back requested before 20:00
                      </li>
                    </ul>
                  </div>
                  <div className="je-panel">
                    <p className="je-panel-h">Census &amp; throughput</p>
                    <div className="je-ui-bars">
                      {[62, 74, 58, 80, 70, 86, 77].map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <p className="je-ui-axis">
                      <span>Adm</span>
                      <span>Dis</span>
                      <span>Xfer</span>
                    </p>
                  </div>
                </div>
                <div className="je-panel">
                  <p className="je-panel-h">Escalation routing · Agent log</p>
                  <ul className="je-ui-log">
                    <li>
                      <time>18:42</time> Open CNA shift, Rehab 2. Float pool exhausted. Routed to
                      staffing office.
                    </li>
                    <li>
                      <time>18:47</time> Bed request from ED. Routed to house supervisor with census
                      view attached.
                    </li>
                    <li>
                      <time>18:51</time> Call-out logged for Rehab 1. Swap offered to a day-shift
                      volunteer. Waiting on manager approval.
                    </li>
                    <li>
                      <time>18:55</time> Handoff summary drafted for 4 West. Waiting for charge RN
                      sign-off.
                    </li>
                    <li>
                      <time>19:02</time> Family call-back request routed to 4 West charge RN with
                      the room and a summary.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="je-ops-sign">
            Agents do the legwork. <span>People make the call.</span>
          </p>
          <AdFoot product="Fortiora Ops" />
        </div>
      </article>

      {/* ============================================== 15 · Q3 (LEFT) */}
      <QA
        n="03"
        section="Leading through crisis"
        page="15"
        tone="navy"
        size={14.9}
        lead={1.6}
        q="What have you learned from leading organizations through difficult situations? How do you help teams navigate uncertainty?"
        pull={
          <>
            Calm creates confidence. <span>Clarity creates direction.</span> Compassion keeps people
            together.
          </>
        }
      >
        <p>
          Crisis comes in all sizes and shapes, but I can remember my first major crisis as if it
          happened yesterday. It was a Saturday morning when I received a call that one patient had
          killed another patient using the drawer from his bedside table.
        </p>
        <p>There is no leadership manual that prepares you for a moment like that.</p>
        <p>
          I immediately went into action. When I arrived at the facility, the Director of Nursing
          and I met, assessed the situation, and within minutes established a plan of action. Of
          course, there were regulatory, clinical, operational, and safety issues that had to be
          addressed immediately. But I also realized something that has stayed with me throughout
          my career: before you can stabilize the organization, you have to help stabilize the
          people.
        </p>
        <p>
          I began walking through the facility and checking on every employee individually. I
          wanted to know: Do you feel safe? Are you okay? What do you need right now? Some were
          frightened. Others were overwhelmed. Everyone was looking to me for reassurance that
          there was a plan and that we were going to get through this together.
        </p>
        <p>That experience fundamentally changed the way I lead through uncertainty.</p>
        <p>
          Over the years, the crises changed (natural disasters, regulatory challenges, financial
          pressures, organizational turnarounds, and eventually a global pandemic) but the
          leadership principles remained remarkably consistent.
        </p>
        <p>
          I&apos;ve learned that calm and clarity are contagious. Unfortunately, so are panic and
          confusion. When people don&apos;t know what is happening, they naturally fill that
          information vacuum with fear and speculation. My responsibility is to create clarity and
          purpose through intention.
        </p>
        <p>
          That means meeting people where they are, communicating honestly about what we know and
          what we don&apos;t know, establishing immediate priorities, and giving people confidence
          in the next step. We have to have everyone on the same train going the same direction
          understanding exactly what the expected outcomes are. You don&apos;t have to know exactly
          what the next six months will look like. Sometimes people simply need to know what
          we&apos;re going to do in the next eight hours.
        </p>
        <p>
          Ultimately, I&apos;ve learned that leading through crisis isn&apos;t about being
          fearless. It&apos;s about being present, calm, making thoughtful decisions, and
          demonstrating compassion for the people experiencing the crisis alongside you.
        </p>
        <p>
          Calm creates confidence. Clarity creates direction. Compassion keeps people together.
          Those three principles have guided me through some of the most difficult moments of my
          career.
        </p>
      </QA>

      {/* ============================================== 16 · Q4 (RIGHT) */}
      <QA
        n="04"
        section="From gratitude to growth"
        page="16"
        size={15}
        lead={1.54}
        q="What inspired you to create The 3.2.1. Experience™? What key message do you hope readers take away from it?"
      >
        <p>The 3.2.1. Experience™ was born during one of the darkest periods of my life.</p>
        <p>
          I tell what I call &ldquo;The Remarkable Story&rdquo; in the book, but after losing our
          companies, I was devastated. I wasn&apos;t simply dealing with the loss of a business. I
          was dealing with the loss of something we had spent years building, tremendous financial
          loss, and a profound sense that a part of my identity had disappeared with it. I was
          filled with self-doubt and fear, constantly asking myself, &ldquo;What do I do
          now?&rdquo;
        </p>
        <p>
          During that period, I started playing Solitaire on my phone as a way to quiet my
          thoughts. And this sounds crazy, but for nearly a month I couldn&apos;t seem to get the
          3, 2, and Ace I needed to finish a game. I am extremely competitive, so I started
          repeating this little mantra in my head: &ldquo;I need the 3.2.1. Experience! Come
          on, give me the 3.2.1. Experience!&rdquo;
        </p>
        <p>
          Then one day I was sitting in a U-Haul truck, preparing to move our office in South
          Texas, when it hit me.
        </p>
        <p>I knew what 3.2.1. meant.</p>
        <p>I grabbed my phone and started typing as fast as I could:</p>
        <p className="je-qa-mantra">
          <b>3</b> Gratitude. <b>2</b> Intentions. <b>1</b> Bold Action.
        </p>
        <p>
          That moment started a much larger journey. I began researching the neuroscience of
          gratitude, neuroplasticity, habit formation, intentionality, and how our brains can
          develop new patterns of thinking and behavior. I wasn&apos;t researching those things
          because I planned to write a book. I was searching because I needed to find my own way
          forward.
        </p>
        <p>And then I began living it.</p>
        <p>
          One of the most powerful concepts I discovered was reframing. I had been looking at what
          happened to us exclusively through the lens of failure: I lost my companies. I failed.
        </p>
        <p>
          Eventually, I began asking a different question: What if what I went through
          wasn&apos;t only a loss? What if it was also an education?
        </p>
        <p>That changed everything.</p>
        <p>
          There aren&apos;t many people who have experienced some of the things we experienced:
          building companies, leading through extraordinary success, navigating bankruptcy and
          litigation, fighting to preserve what we built, leading healthcare organizations through
          COVID, and ultimately losing the businesses anyway. I couldn&apos;t change what had
          happened, but I could change what I did with the experience.
        </p>
        <p>
          I began to realize: Maybe I didn&apos;t go through all of this just to get through it.
          Maybe I went through it so I could help someone else get through theirs.
        </p>
        <p>That&apos;s the message I hope readers take away from The 3.2.1. Experience™.</p>
        <p>
          HOPE. You can achieve your dreams and be the person you were born to be. Change what you
          focus on today. You can become intentional about where you&apos;re going. And you can take
          one bold action that moves you forward every day.
        </p>
        <p>That&apos;s 3.2.1.</p>
        <p>
          It started as something I desperately needed for myself. Today, my hope is that it
          becomes a framework someone else can use to discover the person they were meant to be.
        </p>
      </QA>

      {/* ============================================== 17 · Q5 (LEFT) */}
      <QA
        n="05"
        section="The Leadership Superpower Matrix™"
        page="17"
        size={15}
        lead={1.62}
        q="How does your Leadership Superpower Matrix™ help leaders recognize strengths, build stronger teams, and improve performance?"
        extra={
          <ol className="je-matrix" aria-label="Lead yourself, understand others, build stronger teams">
            <li>
              <b>Know</b>
              <span>your superpower.</span>
            </li>
            <li>
              <b>Understand</b>
              <span>theirs.</span>
            </li>
            <li>
              <b>Build</b>
              <span>the team around both.</span>
            </li>
          </ol>
        }
      >
        <p>
          I am incredibly excited about the Leadership Superpower Matrix™ because I have a lot of
          fun with it. But there is a serious leadership principle behind it: great leaders
          don&apos;t all look or lead the same way.
        </p>
        <p>
          I begin by challenging the traditional idea of what a leader is supposed to be.
          Leadership is shaped by personality, experience, personal growth, successes, failures,
          and the situations we&apos;ve been asked to navigate. That&apos;s why two highly
          successful leaders can approach the same challenge very differently and both be
          effective.
        </p>
        <p>
          I introduce the Leadership Superpower Matrix™, which identifies four leadership quadrants
          representing different combinations of strengths and leadership styles. Participants
          then complete a brief assessment designed to help identify their individual leadership
          superpowers.
        </p>
        <p>
          I want leaders to recognize what they naturally do exceptionally well. When you
          understand your leadership superpower, you stop trying to lead like someone else and
          begin leading with greater confidence and authenticity.
        </p>
        <p>But self-awareness is only the beginning.</p>
        <p>
          The next step is understanding the superpowers of the people around you. If I know how
          you naturally think, communicate, solve problems, and respond to challenges, I can
          communicate with you more effectively. I can also build teams more intentionally and
          assign critical responsibilities to people whose strengths are best suited for the
          challenge.
        </p>
        <p>
          At the same time, understanding your superpower helps reveal your blind spots. Every
          strength, when overused or relied upon exclusively, can create a weakness. Recognizing
          those gaps gives leaders an opportunity for intentional personal growth and helps them
          surround themselves with people whose strengths complement their own.
        </p>
        <p>
          Ultimately, the Leadership Superpower Matrix™ is about three things: lead yourself,
          understand others, and build stronger teams.
        </p>
        <p>
          When leaders understand themselves first and then learn to recognize the strengths and
          weaknesses of the people around them, they can change how they communicate, delegate,
          develop talent, and build teams. People become more confident in what they bring to the
          organization, and leaders become more intentional about putting the right people in the
          right situations.
        </p>
        <p>That&apos;s where performance begins to change.</p>
        <p>Know your superpower. Understand theirs. Build the team around both.</p>
        <p>When that happens, you don&apos;t just create better leaders. You create organizational momentum.</p>
      </QA>

      {/* ============================================== 18 · Q6 (RIGHT) */}
      <QA
        n="06"
        section="A culture of sustainable success"
        page="18"
        tone="navy"
        size={13.6}
        lead={1.52}
        q="How do communication, collaboration, and customer service contribute to stronger organizations and lasting results?"
        pull={
          <>
            Communication creates clarity. <span>Collaboration creates ownership.</span> Customer
            service creates loyalty.
          </>
        }
      >
        <p>Wow, those are the three big ones, huh?</p>
        <p>
          I think communication, collaboration, and customer service are inseparable because all
          three are ultimately about relationships and organizations succeed or fail based on the
          quality of their relationships.
        </p>
        <p>
          It starts with communication. I&apos;ve learned throughout my career that when
          communication breaks down, almost everything else eventually follows. People begin making
          assumptions. Departments create silos. Employees become frustrated. Customers feel
          ignored. And leaders sometimes wonder why execution isn&apos;t happening when, in reality,
          the team was never completely clear about the expectation in the first place.
        </p>
        <p>
          Leaders have to create an environment where people are comfortable bringing forward
          problems, ideas, and even mistakes. If I&apos;m only hearing good news, I&apos;m probably
          not hearing the whole story. If I can&apos;t hear the whole story, then I cannot fix what
          broke. I had a business office manager who failed to bill a $20k claim and the time to
          file had passed so we lost that money. We treated the patient, we paid for supplies,
          labor, meals, etc. But now, we were never going to get paid due to a mistake. The
          employee felt safe enough to come tell us. Together, we put a system in place so it would
          not happen again. She was a great employee who was great at what she does. She made a
          mistake. Let&apos;s learn from it and move on. Safe place.
        </p>
        <p>
          That leads directly to collaboration. I have worked with some incredibly talented people
          throughout my career, and one thing I know for certain is that I don&apos;t have all the
          answers. Great organizations bring different perspectives and strengths to the table and
          then create an environment where those people can solve problems together. Collaboration
          also creates ownership. People are much more likely to support a solution they helped
          create than one that was simply handed to them. Think about this, over half the US
          workforce feels disengaged from their jobs. Collaboration can move that needle.
        </p>
        <p>
          And then there is customer service. In healthcare, our &ldquo;customer&rdquo; may be a
          patient, resident, family member, physician, referral source, or even another employee.
          Every interaction communicates something about who we are as an organization.
        </p>
        <p>
          I&apos;ve always believed that exceptional customer service starts internally. If we
          don&apos;t take care of our people, it becomes very difficult to expect them to
          consistently take exceptional care of everyone else. Employees who feel heard, respected,
          supported, and connected to the mission are far more likely to create that same
          experience for the people they serve.
        </p>
        <p>
          That&apos;s why I don&apos;t view communication, collaboration, and customer service as
          three separate initiatives. They reinforce one another. Together, they create employee
          engagement.
        </p>
        <p>Communication creates clarity. Collaboration creates ownership. Customer service creates loyalty.</p>
        <p>
          When you get all three working together, you build trust. And when an organization has
          trust between leaders and employees, between departments, and between the organization
          and the people it serves, you create the foundation for stronger performance and lasting
          results.
        </p>
      </QA>

      {/* ============================================== 19 · Q7 (LEFT) */}
      <QA
        n="07"
        section="Author, keynote speaker, storyteller"
        page="19"
        size={14.3}
        lead={1.52}
        q="What inspires your work as an author and keynote speaker, including the Cowboy Kyler books created with Laurie Beth McPike? What lessons do you hope your audiences and readers remember?"
      >
        <p>
          I am surrounded by inspiration. Most of it comes from life itself: the mountaintops,
          certainly, but probably even more from the valleys.
        </p>
        <p>
          Years ago, I was going through one of those valleys. I was experiencing a divorce and
          carrying years of anger, resentment, and hurt. One day, I was sitting alone in my
          apartment reading Byron Katie when something I read caused me to see my experiences
          differently. I had an epiphany that allowed me to finally release emotions I had been
          carrying for years.
        </p>
        <p>I remember ending up on the floor of my living room, in a ball just sobbing.</p>
        <p>But what came out of that moment was forgiveness.</p>
        <p>
          For the first time in years, I felt free. And with that freedom came something even more
          powerful: hope.
        </p>
        <p>
          That experience has influenced much of what I write and speak about today. Whether
          I&apos;m talking about The 3.2.1. Experience™, leadership, resilience, or navigating the
          middle rounds of life, there is a common thread running through all of it:
        </p>
        <p className="je-qa-mantra">HOPE exists. Change is achievable.</p>
        <p>
          I believe we all carry voices from our past. Things people have said to us, failures
          we&apos;ve experienced, mistakes we&apos;ve made, or stories we&apos;ve told ourselves
          for so long that we eventually accepted them as truth. Those voices become limiting
          beliefs that convince us we aren&apos;t capable, worthy, talented, young enough, old
          enough, educated enough, or strong enough to become the person we were meant to be.
        </p>
        <p>But those voices don&apos;t have to write the rest of our story.</p>
        <p>
          Change begins when we recognize that something in our lives needs to be different. It
          doesn&apos;t matter whether the change is enormous or incredibly small. Once we recognize
          it, there is hope. We can change our focus. We can become intentional about where
          we&apos;re going. And we can take one bold action toward it every day.
        </p>
        <p>
          The Adventures of Cowboy Kyler books that Laurie Beth and I created carry that same
          message, just through the eyes and imagination of a child.
        </p>
        <p>With Cowboy Kyler, the message is really twofold.</p>
        <p>
          First, lead with kindness and compassion. That&apos;s at the heart of the Cowboy Kyler
          Kindness Challenge. We want children to understand that kindness isn&apos;t weakness. It
          takes courage to stand up for someone, include someone, forgive someone, or simply
          notice someone who needs a friend.
        </p>
        <p>
          Second, we want children to understand resilience. Mountains are going to show up in
          everyone&apos;s life. Sometimes they&apos;re small hills, and sometimes they look
          impossible to climb. But whatever adversity is standing in front of you today, you have
          the ability to keep climbing.
        </p>
        <p>That&apos;s really what connects everything Laurie Beth and I create.</p>
        <p>
          For adults, I may call it gratitude, intention, bold action, leadership, or resilience.
          For children, Cowboy Kyler may teach it through courage, kindness, friendship, and
          adventure. But underneath all of it is the same message:
        </p>
        <p>Your story isn&apos;t over because today is hard.</p>
        <p>Keep moving. Keep believing. Keep climbing the mountain.</p>
        <p>The sun always rises in the morning.</p>
      </QA>

      {/* ============================================== 20 · Q8 (RIGHT) */}
      <QA
        n="08"
        section="The vision"
        page="20"
        tone="navy"
        size={15.2}
        lead={1.58}
        q="What are your future goals for your consulting, leadership frameworks, writing, and speaking? What lasting impact would you like to make?"
        pull={
          <>
            Hope that change is possible. <span>Hope that today&apos;s circumstances don&apos;t define tomorrow.</span>
          </>
        }
      >
        <p>
          Ultimately, I want to help people close the gap between the life they&apos;re living and
          the life they know they&apos;re capable of creating.
        </p>
        <p>
          I&apos;m currently working on the follow-up to The 3.2.1. Experience™, called The 3.2.1.
          Experience: The Middle Rounds. I&apos;m incredibly excited about it because the middle is
          where so many people struggle. Starting something new can be exciting, and reaching the
          finish line is exhilarating. But somewhere between those two moments comes the middle.
          That place where progress slows, doubt creeps in, life gets difficult, and change can
          begin to feel impossible.
        </p>
        <p>
          The Middle Rounds is about what you do then. It&apos;s about developing the resilience
          to keep moving when motivation disappears and the finish line isn&apos;t yet visible. I
          believe that&apos;s where so much of real transformation happens.
        </p>
        <p>
          So professionally, I want more stages, more opportunities to teach these frameworks, and
          more opportunities to continue working with people after the presentation. I don&apos;t
          simply want someone to leave one of my talks feeling inspired. I want them to leave
          believing change is possible and knowing what they&apos;re going to do next.
        </p>
        <p>And then there&apos;s Cowboy Kyler.</p>
        <p>
          Laurie Beth and I believe there is so much more ahead for these characters. We&apos;ve
          written more than 20 Cowboy Kyler adventures, and our dream is to bring Cowboy Kyler,
          Thunder, Lily Beth, and their friends to life as an animated streaming series for
          children. We&apos;re already having conversations about what that could look like.
        </p>
        <p>
          Being named an Author of the Year Finalist for Rusty&apos;s Farewell was an incredible
          honor, but what excites us most is watching children and families connect with these
          characters and their messages of kindness, courage, compassion, and resilience.
        </p>
        <p>
          When I think about the lasting impact I would like to make, whether it&apos;s with a
          healthcare executive, someone sitting in the audience at a keynote, a person reading The
          3.2.1. Experience™ during a difficult season, or a child discovering Cowboy Kyler for the
          first time, I hope they walk away with one thing:
        </p>
        <p>Hope.</p>
        <p>
          Hope that change is possible. Hope that today&apos;s circumstances don&apos;t define
          tomorrow. Hope that they are capable of more than they may currently believe.
        </p>
        <p>
          If something Laurie Beth and I create helps someone find the courage to take one more
          step, make one bold decision, show someone kindness, climb one more mountain, or simply
          believe in themselves again, that&apos;s a legacy I would be incredibly proud of.
        </p>
      </QA>

      {/* ============================================== 21 · THE CARD (LEFT) */}
      <article className="mag-page je je-paper je-card">
        <div className="je-well">
          <div className="je-card-top">
            <div>
              <Kicker>The record</Kicker>
              <h2 className="je-card-h">The Card.</h2>
              <p className="je-card-dek">
                Nearly four decades in healthcare, round by round. No dates were given to us, so
                none are printed.
              </p>
            <div className="je-tape">
              <div>
                <b>4</b>
                <span>Decades, nearly, in healthcare</span>
              </div>
              <div>
                <b>$27M</b>
                <span>Annual revenue, built with his wife</span>
              </div>
              <div>
                <b>96%</b>
                <span>Recovery rate, COVID patients</span>
              </div>
              <div>
                <b>20+</b>
                <span>Cowboy Kyler adventures written</span>
              </div>
            </div>
            </div>
            <figure className="je-card-fig">
              <img
                src={`${IMG}/thankyou.jpg`}
                alt="Jon Eric McPike holding a YOU! sign beneath a THANK sign held overhead"
              />
              <figcaption>THANK YOU, in two halves. Jon Eric McPike holds the second.</figcaption>
              <p className="je-card-ask">
                &ldquo;What if what I went through wasn&apos;t only a loss? What if it was also an
                education?&rdquo;
              </p>
            </figure>
          </div>
          <ol className="je-rounds">
            <li>
              <b>R1</b>
              <div>
                <h4>The first job</h4>
                <p>Thrust into leadership days after graduating from high school.</p>
              </div>
            </li>
            <li>
              <b>R2</b>
              <div>
                <h4>Up the ladder</h4>
                <p>Individual facilities, regional roles, hospital leadership.</p>
              </div>
            </li>
            <li>
              <b>R3</b>
              <div>
                <h4>Worst to first</h4>
                <p>CEO of the worst-performing rehabilitation hospital in a national system. Best licensure survey in the company.</p>
              </div>
            </li>
            <li>
              <b>R4</b>
              <div>
                <h4>Owner</h4>
                <p>Healthcare businesses built with his wife, to $27 million in annual revenue.</p>
              </div>
            </li>
            <li>
              <b>R5</b>
              <div>
                <h4>COVID</h4>
                <p>Their facilities became COVID treatment centers. A 96% recovery rate.</p>
              </div>
            </li>
            <li>
              <b>R6</b>
              <div>
                <h4>The loss</h4>
                <p>Bankruptcy, litigation, and the companies lost anyway.</p>
              </div>
            </li>
            <li>
              <b>R7</b>
              <div>
                <h4>3.2.1.</h4>
                <p>A U-Haul in South Texas. The 3.2.1. Experience™ follows.</p>
              </div>
            </li>
            <li>
              <b>R8</b>
              <div>
                <h4>The work now</h4>
                <p>Senior Healthcare Consultant, Remarkable Unlimited. The Leadership Superpower Matrix™. Keynotes.</p>
              </div>
            </li>
            <li>
              <b>R9</b>
              <div>
                <h4>Cowboy Kyler</h4>
                <p>More than 20 adventures with Laurie Beth McPike. Author of the Year Finalist, Rusty&apos;s Farewell.</p>
              </div>
            </li>
            <li className="is-next">
              <b>Next</b>
              <div>
                <h4>The Middle Rounds</h4>
                <p>The follow-up to The 3.2.1. Experience™, being written now.</p>
              </div>
            </li>
          </ol>
          <p className="je-card-quote">
            &ldquo;In everyone&apos;s life comes one undeniable moment of change that never stops
            mattering.&rdquo; <span>Terry Kay · his favorite quote</span>
          </p>
          <Folio page="21" section="The Card" />
        </div>
      </article>

      {/* ============================================== 22 · BE FEATURED (RIGHT) */}
      <article className="mag-page je je-navy je-feat">
        <svg className="je-feat-num" viewBox="0 0 260 760" aria-hidden>
          {["3", "2", "1"].map((d, i) => (
            <text key={d} x="250" y={240 + i * 250} textAnchor="end">
              {d}
            </text>
          ))}
        </svg>
        <div className="je-well">
          <div className="je-feat-mast">
            <PrimeCrestMast tone="dark" />
          </div>
          <p className="je-adk">PrimeCrest · Be Featured</p>
          <h2 className="je-feat-h">
            Your story.
            <br />
            <span>On the record.</span>
          </h2>
          <p className="je-feat-dek">
            PrimeCrest profiles the people who build companies, run hospitals, write the books and
            take the stage. If you have done the work, or know someone who has, we want to hear
            the story the way you would tell it.
          </p>
          <ol className="je-feat-steps">
            <li>
              <b>3</b>
              <div>
                <h4>Tell us who</h4>
                <p>Nominate yourself or a leader you know at theprimecrest.com.</p>
              </div>
            </li>
            <li>
              <b>2</b>
              <div>
                <h4>Sit for the interview</h4>
                <p>Our questionnaire, answered in your own words.</p>
              </div>
            </li>
            <li>
              <b>1</b>
              <div>
                <h4>Read it in print</h4>
                <p>A full issue, designed around you, on the stand and online.</p>
              </div>
            </li>
          </ol>
          <div className="je-feat-foot">
            <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
            <div>
              <p className="je-feat-url">theprimecrest.com</p>
              <p>Scan to begin. PrimeCrest is published by Fortiora Group LLC · Hello@thefortiora.com</p>
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 23 · BACK COVER */}
      <NovemberBack scope="je" vol="XII" />
    </>
  );
}
