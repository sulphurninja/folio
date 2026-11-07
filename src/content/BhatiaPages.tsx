/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. IX · No. 09
 * Dr. Rabiaah Bhatia, Professor of Practice (Amity University), Board of
 * Advisor (Rise Institute), HR Business Partner (BRK Cart Pvt Ltd).
 *
 * The November Issue. Closed `bh-*` system: ivory paper, deep plum stage,
 * marigold light, one magenta spark. Yeseva One / Lora / Manrope.
 * Signature motif: stage-light beams falling from the top of the leaf,
 * arch frames, and ribbon citations for honours. Event photographs are
 * small, so they stay small: framed prints and walls, each at its own ratio.
 */

const IMG = "/issues/bhatia";

/** natural width / height of every photograph used, so frames never crop */
const R = {
  portrait: 544 / 725,
  tall: 544 / 842,
  podium: 504 / 337,
  sdg: 302 / 282,
  rise: 295 / 365,
  bigfm: 371 / 424,
  podcast: 504 / 285,
  awardStage: 504 / 341,
  certificate: 504 / 543,
  banquet: 504 / 672,
  conclave: 504 / 672,
  trio: 504 / 672,
  crown: 504 / 506,
  shawl: 504 / 336,
  creators: 481 / 641,
  marwah: 481 / 641,
  lookbook: 474 / 641,
  laughing: 504 / 579,
  eveningTrio: 504 / 337,
  pair: 504 / 505,
};

export const BHATIA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "From the Editors" },
  { page: 5, label: "The Cover Story" },
  { page: 8, label: "The Circuit" },
  { page: 9, label: "Fortiora People" },
  { page: 11, label: "The Interview" },
  { page: 15, label: "In Her Words" },
  { page: 16, label: "The Citations" },
  { page: 17, label: "The Record" },
  { page: 18, label: "Fortiora Learn" },
  { page: 19, label: "Seen and Heard" },
  { page: 20, label: "Be Featured" },
  { page: 21, label: "PrimeCrest" },
];

/* ------------------------------------------------------------------ parts */

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="bh-folio">
      <span>PrimeCrest · November 2026</span>
      <span>{section}</span>
      <b>{page}</b>
    </p>
  );
}

function Kicker({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="bh-kicker" style={style}>
      {children}
    </p>
  );
}

/** Stage light: soft beams falling from rigs above the leaf. */
function Beams({ id, from = [0.22, 0.78], spread = 1, width = 840 }: { id: string; from?: number[]; spread?: number; width?: number }) {
  return (
    <svg className="bh-beams" viewBox={`0 0 ${width} 1120`} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6c64f" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#e3a21a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#e3a21a" stopOpacity="0" />
        </linearGradient>
      </defs>
      {from.map((f, i) => {
        const x = f * width;
        const lean = (i % 2 ? -1 : 1) * 70 * spread;
        return (
          <g key={i}>
            <polygon
              points={`${x - 14},0 ${x + 14},0 ${x + lean + 230 * spread},1120 ${x + lean - 230 * spread},1120`}
              fill={`url(#${id}-g)`}
            />
            <ellipse cx={x} cy={0} rx={34} ry={10} fill="#f6c64f" fillOpacity="0.8" />
          </g>
        );
      })}
    </svg>
  );
}

/** Rosette ribbon for a citation. */
function Ribbon({ n }: { n: string }) {
  return (
    <svg className="bh-ribbon" viewBox="0 0 92 128" aria-hidden>
      <path d="M26 66 14 124 32 112 42 128 50 72Z" fill="#3b1236" />
      <path d="M66 66 78 124 60 112 50 128 42 72Z" fill="#d1236a" />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        return (
          <circle key={i} cx={46 + Math.cos(a) * 33} cy={46 + Math.sin(a) * 33} r={9} fill="#e3a21a" />
        );
      })}
      <circle cx="46" cy="46" r="34" fill="#e3a21a" />
      <circle cx="46" cy="46" r="27" fill="none" stroke="#3b1236" strokeWidth="1.4" />
      <text
        x="46"
        y="54"
        textAnchor="middle"
        fill="#3b1236"
        style={{ font: "400 24px var(--font-yeseva), Georgia, serif" }}
      >
        {n}
      </text>
    </svg>
  );
}

/** A small event photograph shown as a framed print, at its own ratio. */
function Print({
  src,
  alt,
  ratio,
  width,
  cap,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: number;
  width: number | string;
  cap?: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`bh-print ${className}`} style={{ width }}>
      <img src={src} alt={alt} style={{ aspectRatio: ratio }} />
      {cap ? <figcaption>{cap}</figcaption> : null}
    </figure>
  );
}

/** One interview question with its answer printed whole. */
function QA({
  n,
  q,
  cols = 2,
  size = 15.5,
  lead = 1.56,
  children,
}: {
  n: string;
  q: ReactNode;
  cols?: number;
  size?: number;
  lead?: number;
  children: ReactNode;
}) {
  return (
    <section className="bh-qa">
      <header>
        <b>{n}</b>
        <h3>{q}</h3>
      </header>
      <div className="bh-ans" style={{ columnCount: cols, fontSize: size, lineHeight: lead }}>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ issue */

export function BhatiaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page bh bh-cover" data-density="hard">
        <div className="bh-cover-ground" />
        <svg className="bh-cover-disc" viewBox="0 0 700 700" aria-hidden>
          <defs>
            <radialGradient id="bhDisc" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#f7c440" />
              <stop offset="62%" stopColor="#e3a21a" />
              <stop offset="100%" stopColor="#b0700a" />
            </radialGradient>
          </defs>
          <circle cx="350" cy="350" r="348" fill="none" stroke="#e3a21a" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="322" fill="none" stroke="#d1236a" strokeOpacity="0.55" strokeWidth="2" />
          <circle cx="350" cy="350" r="300" fill="url(#bhDisc)" />
        </svg>
        <svg className="bh-cover-grain" aria-hidden>
          <filter id="bhGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#bhGrain)" />
        </svg>

        <header className="bh-cover-mast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
        </header>

        <img
          className="bh-cover-cut"
          src={`${IMG}/cutout-rise.png`}
          alt="Dr. Rabiaah Bhatia"
          fetchPriority="high"
        />
        <div className="bh-cover-floor" />

        <div className="bh-cover-col">
          <div className="bh-cover-dateline">
            <span>November 2026 · Vol. IX · No. 09</span>
            <span>The November Issue</span>
          </div>
          <h2 className="bh-cover-title">
            The Woman <em>Shaping</em> India <span>Startup &amp; Leadership Ecosystem</span>
          </h2>

          <div className="bh-cover-teasers">
            <div>
              <em>p. 11</em>
              <b>Listen first, then speak</b>
              <span>Eight answers on speaking for an organization, printed whole</span>
            </div>
            <div>
              <em>p. 16</em>
              <b>The citations</b>
              <span>Global SDG Ambassador, the G20 stage, 92.7 BIG FM</span>
            </div>
          </div>
        </div>

        <div className="bh-cover-name">
          <span className="bh-cn-first">Dr. Rabiaah</span>
          <span className="bh-cn-last">BHATIA</span>
        </div>

        <div className="bh-cover-foot">
          <div className="bh-cover-plate">
            <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
          </div>
          <p className="bh-cn-role">Professor of Practice, Amity University · HR Business Partner · Global SDG Ambassador</p>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS (LEFT) */}
      <article className="mag-page bh bh-plum">
        <Beams id="bh1" from={[0.5]} spread={1.2} />
        <div className="bh-well bh-cl">
          <p className="bh-cl-word">Contents</p>
          <p className="bh-cl-sub">The November Issue · Vol. IX · No. 09</p>
          <figure className="bh-cl-print">
            <img
              src={`${IMG}/podium.jpg`}
              alt="Dr. Rabiaah Bhatia at the lectern of an awareness conference on diabetes"
              style={{ aspectRatio: R.podium }}
            />
            <figcaption>At the lectern of &ldquo;Illness to Wellness&rdquo;, an awareness conference on diabetes.</figcaption>
          </figure>
          <div className="bh-cl-lead">
            <b>05</b>
            <div>
              <Kicker>The Cover Story</Kicker>
              <h2>Listen first. Then speak.</h2>
              <p>
                Eighteen years in industry, two years away, and a classroom in 2015. Dr. Rabiaah
                Bhatia on the slow work of being believed.
              </p>
            </div>
          </div>
          <div className="bh-cl-also">
            <span>
              <b>11</b> The Interview, printed whole
            </span>
            <span>
              <b>16</b> The Citations
            </span>
            <span>
              <b>17</b> The Record
            </span>
          </div>
          <Folio page="01" section="Contents" />
        </div>
      </article>

      {/* ============================================== 02 · CONTENTS (RIGHT) */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well">
          <Kicker>In this issue</Kicker>
          <ol className="bh-index">
            <li>
              <b>03</b>
              <div>
                <h4>Credits</h4>
                <p>Who made the issue, and where to find the publisher.</p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>From the Editors</h4>
                <p>The spokesperson who checks first.</p>
              </div>
            </li>
            <li>
              <b>05</b>
              <div>
                <h4>The Cover Story</h4>
                <p>A pause after eighteen years, a classroom in 2015, a channel of her own in 2017.</p>
              </div>
            </li>
            <li>
              <b>07</b>
              <div>
                <h4>Four Desks</h4>
                <p>Amity University, Rise Institute, BRK Cart and the Atal Innovation Mission.</p>
              </div>
            </li>
            <li>
              <b>08</b>
              <div>
                <h4>The Circuit</h4>
                <p>Award nights, conclaves and convocations, as she was photographed at them.</p>
              </div>
            </li>
            <li>
              <b>11</b>
              <div>
                <h4>The Interview</h4>
                <p>Eight answers on influence, media and crisis, printed in full and in order.</p>
              </div>
            </li>
            <li>
              <b>15</b>
              <div>
                <h4>In Her Words</h4>
                <p>The motto, set large.</p>
              </div>
            </li>
            <li>
              <b>16</b>
              <div>
                <h4>The Citations</h4>
                <p>Global SDG Ambassador, the G20 stage, 92.7 BIG FM, NITI Aayog.</p>
              </div>
            </li>
            <li>
              <b>17</b>
              <div>
                <h4>The Record</h4>
                <p>The years, the roles, and the four kinds of work she takes on.</p>
              </div>
            </li>
            <li>
              <b>19</b>
              <div>
                <h4>Seen and Heard</h4>
                <p>Podcasts, panels and the press wall.</p>
              </div>
            </li>
            <li>
              <b>20</b>
              <div>
                <h4>Be Featured</h4>
                <p>The next issue is open.</p>
              </div>
            </li>
          </ol>
          <div className="bh-index-ads">
            <span>
              <b>09</b> Fortiora People · AI HR agents
            </span>
            <span>
              <b>18</b> Fortiora Learn · Learning &amp; development
            </span>
          </div>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS */}
      <article className="mag-page bh bh-plum">
        <Beams id="bh3" from={[0.82]} spread={0.8} />
        <div className="bh-well bh-credits">
          <Kicker>The Masthead</Kicker>
          <h2 className="bh-credits-head">Credits.</h2>
          <ul className="bh-credits-list">
            {novemberCredits("Dr. Rabiaah Bhatia").map(([role, name]) => (
              <li key={role}>
                <span>{role}</span>
                <b>{name}</b>
              </li>
            ))}
          </ul>
          <div className="bh-imprint">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <p>
              <b>Fortiora Group LLC</b>
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · thefortiora.com
            </p>
            <img className="bh-imprint-qr" src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
          </div>
          <p className="bh-rights">
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
          <Folio page="03" section="Credits" />
        </div>
      </article>

      {/* ============================================== 04 · EDITORS */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well">
          <Kicker>From the Editors</Kicker>
          <h2 className="bh-head" style={{ fontSize: 50 }}>
            The spokesperson who checks first.
          </h2>
          <div className="bh-body bh-drop" style={{ columnCount: 2, fontSize: 17.8, lineHeight: 1.62, marginTop: 22 }}>
            <p>
              Dr. Rabiaah Bhatia answered our eight questions in the order we asked them, and on
              almost every one she came back to the same point. Say what you know. Say what you
              do not. Say it once the facts are clear.
            </p>
            <p>
              That is an unfashionable position for someone with a microphone, and she has held a
              good many microphones: keynote and panel sessions at G20 initiatives, guest spots on
              92.7 BIG FM, her own podcasts and executive interviews on eD WebStudio Channel, the
              venture she founded in 2017.
            </p>
            <p>
              The route there was not straight. Eighteen years across industry domains and roles.
              Milestones, and then a need for more purpose than the milestones gave her. Two years
              off. In 2015 she walked into education with one aim, to help young people grow into
              leaders, and she has not really left.
            </p>
            <p>
              Today she is a Professor of Practice at Amity University, sits on the Board of
              Advisors at Rise Institute, works as HR Business Partner at BRK Cart Pvt Ltd, and
              coaches young innovators as a Mentor of Change under NITI Aayog&apos;s Atal
              Innovation Mission.
            </p>
            <p>
              The title on her questionnaire was Spokesperson. Her answers read like a working
              manual for one. All eight are printed from page eleven. One sentence from them is
              on our cover. She calls it her motto.
            </p>
          </div>
          <div className="bh-nums">
            <div>
              <b>25+</b>
              <span>Years of multi-sector leadership</span>
            </div>
            <div>
              <b>2015</b>
              <span>The year she joined the education sector</span>
            </div>
            <div>
              <b>2017</b>
              <span>eD WebStudio Channel begins</span>
            </div>
          </div>
          <p className="bh-pull">
            I would rather take the time to confirm a detail than risk sharing something
            inaccurate.
          </p>
          <div className="bh-sign">
            <b>The Editors</b>
            <i />
            <span>PrimeCrest · The November Issue</span>
          </div>
          <Folio page="04" section="From the Editors" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER PHOTO */}
      <article className="mag-page bh bh-plate">
        <img className="bh-plate-img" src={`${IMG}/portrait.jpg`} alt="Dr. Rabiaah Bhatia, microphone in hand" />
        <div className="bh-plate-grade" />
        <p className="bh-plate-spine">The Cover Story</p>
        <div className="bh-plate-cap">
          <b>05</b>
          <p>
            Dr. Rabiaah Bhatia, speaker, mentor and HR leader. Professor of Practice at Amity
            University and a Global SDG Ambassador.
          </p>
        </div>
      </article>

      {/* ============================================== 06 · OPENER TEXT */}
      <article className="mag-page bh bh-ivory">
        <svg className="bh-ghost" viewBox="0 0 640 420" aria-hidden>
          <text x="640" y="420" textAnchor="end" fill="#e3a21a" fillOpacity="0.1" style={{ font: "400 520px var(--font-yeseva), Georgia, serif" }}>
            RB
          </text>
        </svg>
        <div className="bh-well">
          <Kicker>The Cover Story</Kicker>
          <h1 className="bh-head" style={{ fontSize: 76, lineHeight: 0.98 }}>
            Listen first.
            <br />
            <em>Then speak.</em>
          </h1>
          <p className="bh-dek">
            Twenty-five years across offices, classrooms, studios and stages. Dr. Rabiaah Bhatia
            on the slow work of being believed.
          </p>
          <div className="bh-rule" />
          <div className="bh-body bh-drop" style={{ columnCount: 2, fontSize: 16.4, lineHeight: 1.6 }}>
            <p>
              For eighteen years she moved between industry domains and roles, learning people,
              teams and organizations from the inside. The milestones came. So did a question she
              could not put down, about purpose, and about what the work was for.
            </p>
            <p>
              She stopped. Two years. When she came back, in 2015, it was to the education sector,
              with a plain mission: nurture young people and help develop future leaders.
            </p>
            <p>
              In 2017 she started a business of her own. eD WebStudio Channel began as a venture
              promoting eco-friendliness and sustainability. It now carries her executive
              interviews, leadership podcasts and webinars for international audiences, and she
              runs it as founder, director and host.
            </p>
            <p>
              Along the way she has been an author, a public speaker, a mentor, and an advocate for
              youth development and for women&apos;s empowerment. Each role taught her the same
              thing, and she says it without ornament. Communication is not simply speaking. It is
              connecting people with a purpose, building trust, and moving them to act.
            </p>
            <p>
              That is the spokesperson&apos;s whole job, as she sees it. The rest of this issue is
              what it looks like in practice.
            </p>
          </div>
          <div className="bh-open-foot">
            <Print
              src={`${IMG}/sdg-award.jpg`}
              alt="Dr. Rabiaah Bhatia receiving a certificate at an outdoor ceremony"
              ratio={R.sdg}
              width={236}
            />
            <p className="bh-pull is-left">
              Communication is not simply about speaking; it is about connecting people with a
              purpose.
            </p>
          </div>
          <Folio page="06" section="The Cover Story" />
        </div>
      </article>

      {/* ============================================== 07 · FOUR DESKS */}
      <article className="mag-page bh bh-ivory bh-tint">
        <div className="bh-well">
          <Kicker>The Cover Story · continued</Kicker>
          <h2 className="bh-head" style={{ fontSize: 54 }}>
            Four desks.
          </h2>
          <div className="bh-desks">
            <div>
              <span>Amity University</span>
              <b>Professor of Practice</b>
              <p>
                Corporate experience brought into the lecture hall. She mentors students, gives
                specialised lectures and pulls the course closer to what industry needs.
              </p>
            </div>
            <div>
              <span>Rise Institute</span>
              <b>Board of Advisor</b>
              <p>
                Governance and institutional vision for an institute built on educational access
                and skill development.
              </p>
            </div>
            <div>
              <span>BRK Cart Pvt Ltd</span>
              <b>HR Business Partner</b>
              <p>
                Workforce management, engagement, talent acquisition and organizational
                development, kept in step with the business as it grows.
              </p>
            </div>
            <div>
              <span>NITI Aayog · Atal Innovation Mission</span>
              <b>Mentor of Change</b>
              <p>
                Young innovators across India, coached in design thinking, creative problem-solving
                and the habits of an entrepreneur.
              </p>
            </div>
          </div>
          <div className="bh-body" style={{ columnCount: 2, fontSize: 16, lineHeight: 1.58, marginTop: 18 }}>
            <p>
              Then there is the stage. She has spoken as a keynote speaker and panellist at G20
              initiatives, on humanistic leadership, youth empowerment and sustainable growth. 92.7
              BIG FM has had her in as an invited expert on personal growth, corporate agility,
              women&apos;s leadership and careers.
            </p>
            <p>
              Shri Gajendra Singh Shekhawat, Union Cabinet Minister, conferred on her the Global SDG
              Ambassador Award for her contributions to the Sustainable Development Goals and to
              social impact. She is a British Council certified trainer as well.
            </p>
            <p>
              None of it changes how she prepares. Listen to the room. Find out what it needs.
              Then say the thing plainly, and make sure what she does afterwards agrees with it.
            </p>
          </div>
          <div className="bh-desk-prints">
            <Print
              src={`${IMG}/bigfm.jpg`}
              alt="A 92.7 BIG FM programme card featuring Dr. Rabiaah Bhatia"
              ratio={R.bigfm}
              width={232}
              cap="On 92.7 BIG FM"
            />
            <Print
              src={`${IMG}/award-stage.jpg`}
              alt="Dr. Rabiaah Bhatia on stage receiving an award with fellow honourees"
              ratio={R.awardStage}
              width={396}
              cap="An award on stage, among fellow honourees"
            />
          </div>
          <Folio page="07" section="The Cover Story" />
        </div>
      </article>

      {/* ============================================== 08 · THE CIRCUIT */}
      <article className="mag-page bh bh-plum">
        <div className="bh-well bh-wall">
          <div className="bh-wall-head">
            <Kicker>The Circuit</Kicker>
            <h2>Rooms she has stood in.</h2>
          </div>
          <p className="bh-wall-dek">
            Conclaves, award evenings, a convocation, a banquet hall with a camera at the back.
            Her own photographs, printed at the size they came.
          </p>
          <div className="bh-row">
            <figure style={{ flex: R.banquet }}>
              <img src={`${IMG}/banquet.jpg`} alt="Dr. Rabiaah Bhatia with a guest in a banquet hall" style={{ aspectRatio: R.banquet }} />
              <i>1</i>
            </figure>
            <figure style={{ flex: R.conclave }}>
              <img src={`${IMG}/conclave.jpg`} alt="Dr. Rabiaah Bhatia with a guest at a conclave" style={{ aspectRatio: R.conclave }} />
              <i>2</i>
            </figure>
            <figure style={{ flex: R.trio }}>
              <img src={`${IMG}/trio.jpg`} alt="Dr. Rabiaah Bhatia with two women at an event" style={{ aspectRatio: R.trio }} />
              <i>3</i>
            </figure>
          </div>
          <div className="bh-row">
            <figure style={{ flex: R.certificate }}>
              <img src={`${IMG}/certificate.jpg`} alt="Dr. Rabiaah Bhatia receiving a framed certificate from a man in ceremonial robes" style={{ aspectRatio: R.certificate }} />
              <i>4</i>
            </figure>
            <figure style={{ flex: R.shawl }}>
              <img src={`${IMG}/shawl-award.jpg`} alt="Dr. Rabiaah Bhatia honoured with a shawl at an awards event" style={{ aspectRatio: R.shawl }} />
              <i>5</i>
            </figure>
          </div>
          <ol className="bh-wall-caps">
            <li>
              <b>1</b> A banquet hall, cameras set up at the back.
            </li>
            <li>
              <b>2</b> A conclave evening, stole over one shoulder.
            </li>
            <li>
              <b>3</b> Between sessions, with fellow guests.
            </li>
            <li>
              <b>4</b> A framed certificate, presented in full academic dress.
            </li>
            <li>
              <b>5</b> Honoured with a shawl at an awards evening.
            </li>
            <li className="bh-wall-q">
              &ldquo;Every difficulty can become a learning opportunity when we meet it with
              courage and humility.&rdquo;
            </li>
          </ol>
          <Folio page="08" section="The Circuit" />
        </div>
      </article>

      {/* ============================================== 09 · FORTIORA PEOPLE (LEFT) */}
      <article className="mag-page bh bh-ad">
        <Beams id="bh9" from={[0.3, 0.9]} spread={1} />
        <div className="bh-well">
          <p className="bh-ad-k">Fortiora Group · Advertisement</p>
          <div className="bh-ad-brand">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <div>
              <b>Fortiora People</b>
              <span>AI agents for HR</span>
            </div>
          </div>
          <h2 className="bh-ad-head">
            The first read of every file. <em>The final call stays human.</em>
          </h2>
          <p className="bh-ad-dek">
            Four agents for the work that fills an HR inbox. They read, sort, answer and
            report, and they show their working, so your people team spends its day on people.
          </p>
          <ul className="bh-ad-list">
            <li>
              <b>01</b>
              <div>
                <h4>Candidate screening</h4>
                <p>
                  Reads each application against the role you wrote, ranks the shortlist and
                  states its reasons beside every name. Nothing is rejected without a reviewer.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Onboarding journeys</h4>
                <p>
                  Builds each new hire&apos;s first weeks in order: documents, accounts,
                  introductions, check-ins. Nudges the right person when a step is waiting.
                </p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>Policy answers</h4>
                <p>
                  Employees ask about leave, benefits or travel in their own words and get a
                  plain answer, with the clause it came from. Unclear cases go to HR.
                </p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Workforce insights</h4>
                <p>
                  Headcount, hiring pipeline, attrition signals and engagement themes, written up
                  each week as a short brief for leadership.
                </p>
              </div>
            </li>
          </ul>
          <Folio page="09" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 10 · FORTIORA PEOPLE (RIGHT) */}
      <article className="mag-page bh bh-ad">
        <Beams id="bh10" from={[0.1, 0.7]} spread={1} />
        <div className="bh-well">
          <div className="bh-ui">
            <div className="bh-ui-bar">
              <i />
              <i />
              <i />
              <span>Fortiora People · Agent console</span>
            </div>
            <div className="bh-ui-body">
              <nav className="bh-ui-nav">
                <span className="is-on">Screening</span>
                <span>Onboarding</span>
                <span>Policy desk</span>
                <span>Insights</span>
                <span>Audit log</span>
              </nav>
              <div className="bh-ui-main">
                <p className="bh-ui-t">Screening queue · Product Designer</p>
                <table className="bh-ui-table">
                  <tbody>
                    {[
                      ["Candidate A-104", 92, "Shortlist"],
                      ["Candidate A-117", 84, "Shortlist"],
                      ["Candidate A-121", 71, "Review"],
                      ["Candidate A-126", 58, "Review"],
                      ["Candidate A-133", 46, "Hold"],
                    ].map(([n, v, s]) => (
                      <tr key={n as string}>
                        <td>{n}</td>
                        <td>
                          <span className="bh-ui-meter">
                            <span style={{ width: `${v}%` }} />
                          </span>
                        </td>
                        <td>
                          <em className={`is-${String(s).toLowerCase()}`}>{s}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="bh-ui-why">
                  <b>Why A-104:</b> portfolio covers research and systems work named in the role;
                  two of three must-haves shown in shipped projects.
                </p>
              </div>
            </div>
          </div>

          <div className="bh-ui-pair">
            <div className="bh-ui-card">
              <p className="bh-ui-t">Policy desk</p>
              <p className="bh-chat is-me">Can I carry unused leave into next year?</p>
              <p className="bh-chat">
                Yes, up to the limit in your leave policy, section 3.4. The rest lapses at year
                end. Want me to show your balance?
              </p>
              <p className="bh-chat-src">Source · Leave Policy § 3.4</p>
            </div>
            <div className="bh-ui-card">
              <p className="bh-ui-t">Onboarding · new joiner</p>
              <ol className="bh-steps">
                <li className="is-done">Offer signed</li>
                <li className="is-done">Documents verified</li>
                <li className="is-now">Laptop &amp; accounts</li>
                <li>Team introductions</li>
                <li>Day-30 check-in</li>
              </ol>
            </div>
          </div>

          <div className="bh-ui-card bh-ui-ins">
            <div>
              <p className="bh-ui-t">Insights · weekly brief for leadership</p>
              <p>
                Hiring is moving fastest in operations. Two teams show early attrition signals;
                exit themes point to workload. Suggested: a manager check-in before month end.
              </p>
            </div>
            <div className="bh-ui-bars" aria-hidden>
              {[38, 52, 46, 64, 58, 72, 66, 80, 74].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="bh-ad-close">
            <p className="bh-ad-tag">
              Fortiora People.
              <br />
              <em>HR that answers.</em>
            </p>
            <div className="bh-ad-contact">
              <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
              <p>
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com
                <br />
                Fortiora Group LLC · Sheridan, Wyoming
              </p>
            </div>
          </div>
          <Folio page="10" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 11 · INTERVIEW I */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well">
          <div className="bh-iv-head">
            <Kicker>The Interview · I</Kicker>
            <h2>In her own words.</h2>
          </div>
          <QA n="01" q="The professional journey" size={15.6} lead={1.54}>
            <p>
              My professional journey has been shaped by perseverance, learning and a desire to
              create meaningful impact. Over 18 years, I worked across different industry domains
              and roles, gaining experience with people, teams and organizations. Although I
              achieved professional milestones, I eventually felt the need for greater purpose and
              inner satisfaction. After taking a two-year break, I joined the education sector in
              2015 with a mission to nurture young people and help develop future leaders. I began
              my entrepreneurial journey in 2017 and built eD WebStudio Channel, a venture that
              promotes eco-friendliness and sustainability. Along the way, I have worked as an
              entrepreneur, Founder-Director, author, public speaker, mentor and advocate for youth
              development and women&apos;s empowerment. These experiences taught me that
              communication is not simply about speaking; it is about connecting people with a
              purpose, building trust and inspiring action. They continue to shape the way I
              approach the role of a spokesperson.
            </p>
          </QA>
          <div className="bh-iv-band">
            <Print
              src={`${IMG}/podium.jpg`}
              alt="Dr. Rabiaah Bhatia speaking at a lectern"
              ratio={R.podium}
              width={290}
            />
            <p className="bh-pull is-left">Listening first, understanding their perspective and then communicating with clarity, empathy and confidence.</p>
          </div>
          <QA n="02" q="Communication and influence" size={15.6} lead={1.54}>
            <p>
              To me, effective communication means making a message clear, meaningful and relevant
              to the person receiving it. Different audiences have different needs, so I believe in
              listening first, understanding their perspective and then communicating with
              clarity, empathy and confidence. My experience across sectors, education,
              entrepreneurship, writing and public speaking has taught me to adapt my language and
              approach without compromising the core message. I also believe that our actions must
              support our words. Authenticity, consistency and respect are essential if
              communication is to create genuine influence.
            </p>
          </QA>
          <Folio page="11" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 12 · INTERVIEW II */}
      <article className="mag-page bh bh-ivory bh-tint">
        <div className="bh-well">
          <Kicker>The Interview · II</Kicker>
          <QA n="03" q="Representing an organization" size={16.2} lead={1.58}>
            <p>
              Representing an organization is a responsibility that requires both loyalty and
              integrity. A spokesperson should communicate the organization&apos;s position
              accurately while remaining mindful of the public&apos;s right to clear and
              responsible information. I believe credibility is built by being truthful, avoiding
              exaggerated claims, acknowledging concerns and not making statements beyond verified
              facts or one&apos;s authority. Transparency does not mean sharing information that is
              confidential; it means being honest about what can be shared and what requires
              further confirmation. For me, trust is earned through consistency between what we
              say, what we do and the values we demonstrate.
            </p>
          </QA>
          <div className="bh-iv-band is-flip">
            <p className="bh-pull is-left">
              Trust is earned through consistency between what we say, what we do and the values
              we demonstrate.
            </p>
            <Print
              src={`${IMG}/rise-portrait.jpg`}
              alt="Dr. Rabiaah Bhatia in a portrait for Rise Institute"
              ratio={R.rise}
              width={214}
            />
          </div>
          <QA n="04" q="Handling challenges" size={16.6} lead={1.62}>
            <p>
              My journey has included difficult personal and professional phases, changes in
              direction and moments that required me to pause, reflect and rebuild. Working across
              different industry domains for 18 years taught me adaptability, while my decision to
              take a break and move into education helped me reconnect with my purpose. Building an
              entrepreneurial venture also required persistence and a willingness to learn from
              setbacks. I approach challenges by staying calm, understanding the facts, listening
              to different perspectives and focusing on constructive next steps. I do not believe
              every challenge needs an immediate answer; sometimes the responsible response is to
              verify information, seek advice and communicate once the facts are clear. Every
              difficulty can become a learning opportunity when we meet it with courage and
              humility.
            </p>
          </QA>
          <Folio page="12" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 13 · INTERVIEW III */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well">
          <Kicker>The Interview · III</Kicker>
          <QA n="05" q="Media relations" size={17.9} lead={1.66}>
            <p>
              Productive media relationships are built on mutual respect, responsiveness and
              accuracy. I believe in understanding a journalist&apos;s question, providing clear and
              relevant information, respecting deadlines and being transparent when something needs
              verification. It is important to distinguish confirmed facts from personal views or
              information that is still being checked. I would rather take the time to confirm a
              detail than risk sharing something inaccurate. Long-term credibility comes from being
              accessible, consistent and professional—not just when the news is positive, but also
              when questions are difficult.
            </p>
          </QA>
          <div className="bh-iv-band">
            <Print
              src={`${IMG}/shawl-award.jpg`}
              alt="Dr. Rabiaah Bhatia at an awards event"
              ratio={R.shawl}
              width={340}
            />
            <p className="bh-pull is-left is-big">
              In a crisis, the objective is not merely to protect an image; it is to protect trust.
            </p>
          </div>
          <QA n="06" q="Crisis communication" size={17.9} lead={1.66}>
            <p>
              In sensitive or unexpected situations, my guiding principles are calmness, empathy,
              accuracy and accountability. First, understand what is known and what remains
              uncertain; then verify the facts, coordinate with the appropriate people and
              communicate promptly without speculation. People need to feel that their concerns are
              being heard, even when every answer is not immediately available. I would avoid blame,
              assumptions and promises that cannot be guaranteed. If new facts emerge, I believe it
              is important to update the message clearly. In a crisis, the objective is not merely
              to protect an image; it is to protect trust by communicating responsibly and putting
              people and facts first.
            </p>
          </QA>
          <Folio page="13" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 14 · INTERVIEW IV */}
      <article className="mag-page bh bh-ivory bh-tint">
        <div className="bh-well">
          <Kicker>The Interview · IV</Kicker>
          <QA n="07" q="When a message travels in minutes" size={16.9} lead={1.62}>
            <p>
              Social media and digital platforms have made communication faster, more direct and
              more accessible. They allow a spokesperson to reach diverse audiences quickly, but
              they also increase the responsibility to check facts before sharing them. A message
              can travel widely within minutes, so clarity, context and consistency matter more
              than ever. My work as an entrepreneur, public speaker, writer and digital-platform
              founder has helped me understand the value of adapting to changing formats and
              audience expectations. I believe in using digital platforms to educate, connect and
              empower—not simply to attract attention. The most effective approach combines timely
              communication with thoughtful listening, responsible content and a human touch.
            </p>
          </QA>
          <div className="bh-iv-band is-flip">
            <p className="bh-pull is-left">Never sacrifice accuracy for attention.</p>
            <Print
              src={`${IMG}/podcast.jpg`}
              alt="Artwork for the podcast series Unity for Growth, hosted by Dr. Rabiaah Bhatia"
              ratio={R.podcast}
              width={360}
            />
          </div>
          <QA n="08" q="Advice for those who come next" size={16.9} lead={1.62}>
            <p>
              My advice to aspiring spokespersons and communication professionals is to build
              character before building a public profile. Learn to listen, research thoroughly,
              speak clearly and admit when you do not know something. Protect your credibility by
              never sacrificing accuracy for attention. Develop empathy, emotional resilience and
              the ability to communicate with people from different backgrounds. Keep learning,
              welcome feedback and treat every experience—success or failure—as an opportunity to
              grow. Above all, be guided by a purpose larger than personal recognition. My motto
              is, &ldquo;Be the change to bring the change.&rdquo; I believe that when we work with
              focus, gratitude and perseverance, we can use our voices to empower others and create
              positive change.
            </p>
          </QA>
          <Folio page="14" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 15 · IN HER WORDS */}
      <article className="mag-page bh bh-plum">
        <Beams id="bh15" from={[0.18, 0.5, 0.82]} spread={0.8} />
        <div className="bh-well bh-motto">
          <Kicker>In Her Words</Kicker>
          <p className="bh-motto-q">&ldquo;</p>
          <h2 className="bh-motto-line">
            Be the change
            <br />
            <em>to bring</em>
            <br />
            the change.
          </h2>
          <p className="bh-motto-by">Dr. Rabiaah Bhatia · her motto</p>
          <div className="bh-motto-rules">
            <div>
              <b>Build</b>
              <span>character before building a public profile.</span>
            </div>
            <div>
              <b>Admit</b>
              <span>when you do not know something.</span>
            </div>
            <div>
              <b>Protect</b>
              <span>your credibility. Never sacrifice accuracy for attention.</span>
            </div>
            <div>
              <b>Be guided</b>
              <span>by a purpose larger than personal recognition.</span>
            </div>
          </div>
          <Folio page="15" section="In Her Words" />
        </div>
      </article>

      {/* ============================================== 16 · THE CITATIONS */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well">
          <Kicker>The Citations</Kicker>
          <h2 className="bh-head" style={{ fontSize: 50 }}>
            Ribbons, and what they were for.
          </h2>
          <ul className="bh-cites">
            <li>
              <Ribbon n="I" />
              <div>
                <h4>Global SDG Ambassador Award</h4>
                <p>
                  Conferred by Shri Gajendra Singh Shekhawat ji, Hon&apos;ble Union Cabinet
                  Minister, Government of India, for outstanding contributions to the Sustainable
                  Development Goals and social impact.
                </p>
              </div>
            </li>
            <li>
              <Ribbon n="II" />
              <div>
                <h4>G20 Forum Speaker</h4>
                <p>
                  Keynote speaker and panellist at G20 initiatives, addressing global audiences on
                  humanistic leadership, youth empowerment and sustainable growth.
                </p>
              </div>
            </li>
            <li>
              <Ribbon n="III" />
              <div>
                <h4>92.7 BIG FM · Speaker &amp; Guest</h4>
                <p>
                  Invited expert on personal growth, corporate agility, women&apos;s leadership and
                  career development.
                </p>
              </div>
            </li>
            <li>
              <Ribbon n="IV" />
              <div>
                <h4>NITI Aayog · Mentor of Change</h4>
                <p>
                  A recognised mentor under the Atal Innovation Mission, working with grassroots
                  innovation, youth entrepreneurship and problem-solving for the future.
                </p>
              </div>
            </li>
            <li>
              <Ribbon n="V" />
              <div>
                <h4>British Council Certified Trainer</h4>
                <p>Certified to train, and still in the classroom at Amity University.</p>
              </div>
            </li>
          </ul>
          <div className="bh-cite-prints">
            <Print
              src={`${IMG}/crown-award.jpg`}
              alt="Dr. Rabiaah Bhatia holding a certificate and trophy at an awards night"
              ratio={R.crown}
              width={206}
              cap="An awards night, certificate in hand."
            />
            <Print
              src={`${IMG}/pair.jpg`}
              alt="Dr. Rabiaah Bhatia with a guest at an evening event"
              ratio={R.pair}
              width={206}
              cap="An evening among guests."
            />
            <blockquote className="bh-cite-note">
              <p>
                &ldquo;Dedicated to inspiring personal and professional growth, nurturing
                humanistic leadership, and empowering individuals and organizations to define
                success on their own terms.&rdquo;
              </p>
              <cite>From her executive portfolio</cite>
            </blockquote>
          </div>
          <Folio page="16" section="The Citations" />
        </div>
      </article>

      {/* ============================================== 17 · THE RECORD */}
      <article className="mag-page bh bh-ivory bh-tint">
        <div className="bh-well">
          <Kicker>The Record</Kicker>
          <h2 className="bh-head" style={{ fontSize: 50 }}>
            The years, in order.
          </h2>
          <ol className="bh-time">
            <li>
              <b>18 yrs</b>
              <p>Across industry domains and roles, with people, teams and organizations.</p>
            </li>
            <li>
              <b>2 yrs</b>
              <p>A break, taken in search of greater purpose and inner satisfaction.</p>
            </li>
            <li>
              <b>2015</b>
              <p>Joins the education sector, to nurture young people and develop future leaders.</p>
            </li>
            <li>
              <b>2017</b>
              <p>Founds eD WebStudio Channel. Founder, Director and Podcast Host.</p>
            </li>
            <li>
              <b>Now</b>
              <p>
                Professor of Practice, Amity University · Board of Advisor, Rise Institute · HR
                Business Partner, BRK Cart Pvt Ltd · Mentor of Change, Atal Innovation Mission,
                NITI Aayog.
              </p>
            </li>
          </ol>
          <div className="bh-work">
            <p className="bh-work-k">Work with Dr. Rabiaah Bhatia</p>
            <div className="bh-work-grid">
              <div>
                <b>Executive &amp; Personal Brand Strategy</b>
                <p>For C-suite leaders, EduLeaders and public figures: identity, media PR and thought leadership positioning.</p>
              </div>
              <div>
                <b>Advisory &amp; Board Governance</b>
                <p>Institutional advisory, curriculum alignment, growth planning and board-level consulting.</p>
              </div>
              <div>
                <b>HR Business Partnership &amp; Talent</b>
                <p>Workforce alignment, performance management, talent acquisition and culture building.</p>
              </div>
              <div>
                <b>Keynote Speaking &amp; Moderation</b>
                <p>Global forums, educational conferences, corporate seminars and executive webinars.</p>
              </div>
            </div>
            <p className="bh-work-note">
              Available for global keynotes, board advisory, HR consulting, academic engagements
              and media hosting · linkedin.com/in/rabiaah-bhatia-0190905b
            </p>
          </div>
          <Folio page="17" section="The Record" />
        </div>
      </article>

      {/* ============================================== 18 · FORTIORA LEARN */}
      <article className="mag-page bh bh-learn">
        <div className="bh-well">
          <p className="bh-ad-k is-dark">Fortiora Group · Advertisement</p>
          <div className="bh-ad-brand is-dark">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <div>
              <b>Fortiora Learn</b>
              <span>Learning &amp; development, in one place</span>
            </div>
          </div>
          <h2 className="bh-learn-head">
            Teach the skill.
            <br />
            <em>Then the next one.</em>
          </h2>

          <div className="bh-path">
            <p className="bh-ui-t">Skills path · First-time manager</p>
            <ol>
              <li className="is-done">
                <i />
                <span>Running a one-to-one</span>
              </li>
              <li className="is-done">
                <i />
                <span>Giving feedback</span>
              </li>
              <li className="is-now">
                <i />
                <span>Hiring well</span>
              </li>
              <li>
                <i />
                <span>Leading a review</span>
              </li>
            </ol>
          </div>

          <div className="bh-learn-grid">
            <div>
              <h4>Skills paths</h4>
              <p>Role-based routes from where someone is to where the job needs them, one module at a time.</p>
            </div>
            <div>
              <h4>Cohort programs</h4>
              <p>Groups that start together, meet on a schedule and finish together, with live sessions built in.</p>
            </div>
            <div>
              <h4>Mentor matching</h4>
              <p>Pairs each learner with a colleague who has done the work, by skill, goal and availability.</p>
            </div>
          </div>

          <div className="bh-match">
            <span className="bh-match-a">Learner</span>
            <span className="bh-match-line" />
            <span className="bh-match-b">Mentor</span>
            <p>Matched on: hiring, team leadership · fortnightly, 45 minutes</p>
          </div>

          <div className="bh-learn-foot">
            <div className="bh-ad-contact is-dark">
              <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
              <p>
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Fortiora Group LLC
              </p>
            </div>
            <p className="bh-learn-tag">
              Fortiora Learn.
              <br />
              <em>Skills that stay.</em>
            </p>
          </div>
          <Folio page="18" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 19 · SEEN AND HEARD */}
      <article className="mag-page bh bh-plum">
        <div className="bh-well bh-wall">
          <div className="bh-wall-head">
            <Kicker>Seen and Heard</Kicker>
            <h2>The press wall.</h2>
          </div>
          <p className="bh-wall-dek">
            Screens, stages, certificates and the odd selfie. A speaker&apos;s year leaves a paper
            trail, and hers is pinned up here as it came to us.
          </p>
          <div className="bh-row">
            <figure style={{ flex: R.creators }}>
              <img src={`${IMG}/creators.jpg`} alt="A collage from a national creators event featuring Dr. Rabiaah Bhatia" style={{ aspectRatio: R.creators }} />
              <i>1</i>
            </figure>
            <figure style={{ flex: R.marwah }}>
              <img src={`${IMG}/marwah.jpg`} alt="A collage of Dr. Rabiaah Bhatia receiving certificates on stage" style={{ aspectRatio: R.marwah }} />
              <i>2</i>
            </figure>
            <figure style={{ flex: R.lookbook }}>
              <img src={`${IMG}/lookbook.jpg`} alt="A collage from an evening event with Dr. Rabiaah Bhatia on screen and on the floor" style={{ aspectRatio: R.lookbook }} />
              <i>3</i>
            </figure>
          </div>
          <div className="bh-row">
            <figure style={{ flex: R.laughing }}>
              <img src={`${IMG}/laughing.jpg`} alt="Dr. Rabiaah Bhatia laughing with a guest" style={{ aspectRatio: R.laughing }} />
              <i>4</i>
            </figure>
            <figure style={{ flex: R.eveningTrio }}>
              <img src={`${IMG}/evening-trio.jpg`} alt="Dr. Rabiaah Bhatia with two guests at an evening event" style={{ aspectRatio: R.eveningTrio }} />
              <i>5</i>
            </figure>
          </div>
          <ol className="bh-wall-caps">
            <li>
              <b>1</b> A creators&apos; event: the hall, the selfies, the certificate.
            </li>
            <li>
              <b>2</b> Two stages, two certificates.
            </li>
            <li>
              <b>3</b> Her name on the big screen, then the floor.
            </li>
            <li>
              <b>4</b> Off duty, briefly.
            </li>
            <li>
              <b>5</b> An evening among friends.
            </li>
            <li className="bh-wall-q" style={{ gridColumn: "1 / -1" }}>
              &ldquo;Long-term credibility comes from being accessible, consistent and
              professional.&rdquo;
            </li>
          </ol>
          <Folio page="19" section="Seen and Heard" />
        </div>
      </article>

      {/* ============================================== 20 · BE FEATURED */}
      <article className="mag-page bh bh-ivory">
        <div className="bh-well bh-feat">
          <div className="bh-feat-mast">
            <PrimeCrestMast tone="light" tagline={false} />
          </div>
          <Kicker style={{ marginTop: 22 }}>The November Issue · Be Featured</Kicker>
          <h2 className="bh-head" style={{ fontSize: 66, lineHeight: 1 }}>
            Your legacy,
            <br />
            <em>featured.</em>
          </h2>
          <p className="bh-dek">
            The next edition of PrimeCrest is being put together now. If you lead something worth
            reading about, write to the desk.
          </p>
          <ol className="bh-feat-steps">
            <li>
              <b>01</b>
              <div>
                <h4>Put your name forward</h4>
                <p>Tell the desk who you are, what you built and why the year mattered.</p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Answer in your own words</h4>
                <p>A written interview, printed whole and in the order asked.</p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>Take the cover</h4>
                <p>An issue of your own, designed around your photographs and your record.</p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Pass it on</h4>
                <p>A digital edition with its own address, ready for your board, your clients and your family.</p>
              </div>
            </li>
          </ol>
          <div className="bh-feat-foot">
            <div>
              <p className="bh-feat-url">theprimecrest.com</p>
              <p className="bh-feat-mail">Hello@thefortiora.com</p>
            </div>
            <div className="bh-feat-qr">
              <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
            </div>
          </div>
          <Folio page="20" section="Be Featured" />
        </div>
      </article>

      {/* ============================================== 21 · BACK COVER */}
      <NovemberBack scope="bh" vol="IX" />
    </>
  );
}
