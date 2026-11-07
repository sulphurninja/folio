/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. X · No. 10
 * Erica Lanka Borba (Erica Lanka): travel & lifestyle content creator,
 * musical artist, social media personality.
 *
 * Closed `er-*` system: bright white paper, ocean blue, sun yellow,
 * tropical green and hibiscus pink. Abril Fatface / Karla / Space Grotesk.
 * Signature motif: airmail. Perforated postage stamps, cancellation
 * postmarks, the striped airmail edge, a boarding-pass contents and a
 * luggage tag. The white studio photographs are cut out as die-cut
 * stickers and stood on colour fields; every frame keeps its own ratio.
 */

const IMG = "/issues/erica";

/** natural pixel sizes of the die-cut stickers (PIL crops) */
const CUT = {
  lotusSeated: { src: `${IMG}/lotus-seated-cut.webp`, r: 679 / 1335 },
  lotusGown: { src: `${IMG}/lotus-gown-cut.webp`, r: 398 / 1318 },
  whiteFull: { src: `${IMG}/white-full-cut.webp`, r: 422 / 1125 },
  white: { src: `${IMG}/white-cut.webp`, r: 710 / 1295 },
  mint: { src: `${IMG}/mint-cut.webp`, r: 464 / 1294 },
  cap: { src: `${IMG}/cap-cut.webp`, r: 484 / 1289 },
  heart: { src: `${IMG}/heart-cut.webp`, r: 894 / 1281 },
  blueGown: { src: `${IMG}/blue-gown-cut.webp`, r: 532 / 1250 },
  blueGown2: { src: `${IMG}/blue-gown-2-cut.webp`, r: 484 / 1228 },
  saree: { src: `${IMG}/saree-cut.webp`, r: 774 / 1306 },
} as const;

const PHOTO_R = 953 / 1430;

type Hue = "blue" | "sun" | "green" | "pink" | "navy";

function Kicker({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="er-kicker" style={style}>
      {children}
    </p>
  );
}

function Folio({ page, section, light = false }: { page: string; section: string; light?: boolean }) {
  return (
    <p className={`er-folio${light ? " is-light" : ""}`}>
      <span>PrimeCrest · November 2026</span>
      <span>{section}</span>
      <b>{page}</b>
    </p>
  );
}

/** A cancellation postmark: double ring, lettering on the ring, wavy bars. */
function Postmark({
  id,
  top,
  bottom,
  mid,
  sub,
  size = 150,
  waves = true,
  color = "currentColor",
  style,
}: {
  id: string;
  top: string;
  bottom: string;
  mid: string;
  sub: string;
  size?: number;
  waves?: boolean;
  color?: string;
  style?: CSSProperties;
}) {
  const w = waves ? 320 : 130;
  return (
    <svg
      className="er-postmark"
      viewBox={`0 0 ${w} 130`}
      width={(size * w) / 130}
      height={size}
      style={{ color, ...style }}
      aria-hidden
    >
      <defs>
        <path id={`${id}-t`} d="M 22 65 A 43 43 0 0 1 108 65" />
        <path id={`${id}-b`} d="M 18 65 A 47 47 0 0 0 112 65" />
      </defs>
      <circle cx="65" cy="65" r="60" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="65" cy="65" r="34" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text className="er-pm-ring">
        <textPath href={`#${id}-t`} startOffset="50%" textAnchor="middle">
          {top}
        </textPath>
      </text>
      <text className="er-pm-ring">
        <textPath href={`#${id}-b`} startOffset="50%" textAnchor="middle">
          {bottom}
        </textPath>
      </text>
      <text x="65" y="63" textAnchor="middle" className="er-pm-mid">
        {mid}
      </text>
      <text x="65" y="80" textAnchor="middle" className="er-pm-sub">
        {sub}
      </text>
      {waves
        ? [0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M 132 ${29 + i * 18} q 23 -10 46 0 t 46 0 t 46 0 t 46 0`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))
        : null}
    </svg>
  );
}

/** A perforated postage stamp around a photograph kept at its own ratio. */
function Stamp({
  src,
  alt,
  ratio,
  width,
  country,
  note,
  style,
  tilt = 0,
}: {
  src: string;
  alt: string;
  ratio: number;
  width: number;
  country: string;
  note: string;
  style?: CSSProperties;
  tilt?: number;
}) {
  return (
    <div className="er-stamp-wrap" style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined, ...style }}>
      <div className="er-stamp">
        <img src={src} alt={alt} style={{ width, aspectRatio: ratio }} />
        <div className="er-stamp-cap">
          <b>{country}</b>
          <span>{note}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * One interview leaf: a full-height colour stage on one side with the
 * die-cut sticker standing in it, the question and the answer whole on the other.
 */
function Interview({
  n,
  q,
  page,
  hue,
  cut,
  h,
  side = "left",
  stage,
  size = 16,
  lead = 1.58,
  pull,
  tag,
  children,
}: {
  n: string;
  q: ReactNode;
  page: string;
  hue: Hue;
  cut: { src: string; r: number };
  /** rendered height of the sticker, px */
  h: number;
  side?: "left" | "right";
  /** stage column width, px */
  stage: number;
  size?: number;
  lead?: number;
  pull?: ReactNode;
  tag: string;
  children: ReactNode;
}) {
  return (
    <article className="mag-page er er-white">
      <div className={`er-iv is-${side}`}>
        <div className={`er-stage er-hue-${hue}`} style={{ width: stage }}>
          <div className="er-stage-field" />
          <p className="er-stage-n">{n}</p>
          <p className="er-stage-tag">{tag}</p>
          <img
            className="er-cut"
            src={cut.src}
            alt={`Erica Lanka Borba · ${tag}`}
            style={{ height: h, width: Math.round(h * cut.r) }}
          />
        </div>
        <div className="er-iv-text">
          <Kicker>The Interview · In her words · {n} of 08</Kicker>
          <h3 className="er-q">{q}</h3>
          <div className="er-answer er-drop" style={{ fontSize: size, lineHeight: lead }}>
            {children}
          </div>
          {pull ? <p className="er-pull">{pull}</p> : null}
          <Folio page={page} section="The Interview" />
        </div>
      </div>
    </article>
  );
}

/** Fortiora Studio console art for the two-page house ad. */
function StudioConsole() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chips: [number, number, string, Hue][] = [
    [0, 0, "Reel", "sun"],
    [1, 1, "Long video", "pink"],
    [2, 0, "Story", "green"],
    [3, 2, "Live", "sun"],
    [4, 1, "Reel", "pink"],
    [5, 0, "Carousel", "green"],
    [6, 2, "Story", "sun"],
    [2, 2, "Brand brief", "blue"],
    [0, 2, "Edit notes", "blue"],
  ];
  return (
    <div className="er-console">
      <div className="er-console-bar">
        <i />
        <i />
        <i />
        <span>Fortiora Studio · Agent desk</span>
        <em>Week view</em>
      </div>
      <div className="er-console-body">
        <aside className="er-console-agents">
          <p>Agents</p>
          {[
            ["Calendar", "Running", "sun"],
            ["Captions", "3 drafts", "pink"],
            ["Edit notes", "Ready", "green"],
            ["Partnerships", "Needs you", "blue"],
            ["Audience", "Brief ready", "green"],
          ].map(([a, s, c]) => (
            <div key={a} className="er-agent">
              <b className={`er-dot er-hue-${c}`} />
              <span>{a}</span>
              <em>{s}</em>
            </div>
          ))}
        </aside>
        <div className="er-console-main">
          <div className="er-cal">
            {days.map((d) => (
              <span key={d} className="er-cal-d">
                {d}
              </span>
            ))}
            {Array.from({ length: 21 }, (_, i) => (
              <span
                key={i}
                className="er-cal-cell"
                style={{ gridColumn: (i % 7) + 1, gridRow: Math.floor(i / 7) + 2 }}
              />
            ))}
            {chips.map(([c, r, t, hue], i) => (
              <span
                key={i}
                className={`er-cal-chip er-hue-${hue}`}
                style={{ gridColumn: c + 1, gridRow: r + 2 }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="er-console-row">
            <div className="er-card">
              <p className="er-card-k">Caption agent · draft 2 of 3</p>
              <p className="er-card-q">
                Sunrise from the ridge, before the first bus. Bring a jacket. Leave the drone.
              </p>
              <div className="er-card-btns">
                <span>Approve</span>
                <span>Shorter</span>
                <span>Your voice</span>
              </div>
            </div>
            <div className="er-card">
              <p className="er-card-k">Audience agent · this week</p>
              <svg viewBox="0 0 200 64" className="er-spark" aria-hidden>
                {[22, 30, 26, 38, 34, 46, 52, 44, 58, 50, 60, 56].map((v, i) => (
                  <rect key={i} x={i * 17} y={64 - v} width="11" height={v} rx="2" />
                ))}
              </svg>
              <p className="er-card-s">Most asked in comments: where the morning walk starts.</p>
            </div>
          </div>
          <div className="er-log">
            <p className="er-card-k">Run log</p>
            {[
              ["Calendar", "Moved Thursday's live to Friday; shoot slipped a day."],
              ["Edit notes", "Cut list written against the river footage, 14 marks."],
              ["Partnerships", "New brand enquiry logged. Reply drafted, held for you."],
              ["Captions", "Three lengths drafted for Saturday's carousel."],
              ["Audience", "Weekly brief ready: questions, saves, where viewers dropped off."],
            ].map(([a, t]) => (
              <p key={a} className="er-log-line">
                <b>{a}</b>
                <span>{t}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ERICA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "From the Editors" },
  { page: 5, label: "Beyond Borders" },
  { page: 7, label: "The Story" },
  { page: 10, label: "The Record" },
  { page: 11, label: "Fortiora Studio" },
  { page: 13, label: "The Interview" },
  { page: 21, label: "Fortiora Translate" },
  { page: 22, label: "Be Featured" },
  { page: 23, label: "PrimeCrest" },
];

export function EricaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page er er-cover" data-density="hard">
        <div className="er-cover-sun" />
        <div className="er-cover-rings" />
        <img
          className="er-cover-cut"
          src={CUT.lotusSeated.src}
          alt="Erica Lanka Borba"
          fetchPriority="high"
        />

        <div className="er-cover-band" aria-hidden />
        <header className="er-cover-mast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
          <div className="er-cover-date">
            <span>November 2026 · Vol. X · No. 10</span>
            <span>The November Issue</span>
          </div>
        </header>

        <div className="er-cover-head">
          <h1>
            Beyond
            <br />
            Borders:
          </h1>
          <p>The Creative Journey of Erica Lanka</p>
        </div>

        <div className="er-cover-teasers">
          <div className="er-teaser">
            <b>Lotus Tower – Feeling the Power</b>
            <span>The song she wrote for a building. p.16</span>
          </div>
          <div className="er-teaser">
            <b>Four songs, from the heart</b>
            <span>&ldquo;Music gives those feelings a voice.&rdquo; p.10</span>
          </div>
        </div>

        <div className="er-cover-line">
          <p className="er-cover-line-k">Cover story</p>
          <p>Celebrating Sri Lanka through music, travel, culture and human connection.</p>
          <div className="er-teaser is-right">
            <b>A prince named Sri Lanka</b>
            <span>Her island fairy tale. p.20</span>
          </div>
        </div>

        <div className="er-cover-name">
          <p className="er-cover-role">Travel &amp; Lifestyle Creator · Musical Artist</p>
          <em>Erica</em>
          <strong>Lanka Borba</strong>
        </div>

        <div className="er-cover-plate">
          <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS (LEFT) */}
      <article className="mag-page er er-green">
        <svg className="er-cl-ghost" viewBox="0 0 180 820" aria-hidden>
          <text x="0" y="0" transform="translate(150 812) rotate(-90)">
            LANKA
          </text>
        </svg>
        <p className="er-cl-word">Contents</p>
        <div className="er-cl-disc" />
        <img
          className="er-cl-cut"
          src={CUT.saree.src}
          alt="Erica Lanka Borba in a saree, palms together"
          style={{ height: 916, width: Math.round(916 * CUT.saree.r) }}
        />
        <div className="er-cl-top">
          <Kicker style={{ color: "var(--er-sun)" }}>The November Issue · Vol. X</Kicker>
          <p className="er-cl-dek">
            A Brazilian creator, an island with a bad press, four songs and a tower that
            lights up at night.
          </p>
        </div>
        <div className="er-tag er-cl-tag">
          <i className="er-tag-hole" />
          <p className="er-tag-k">On this page</p>
          <p className="er-tag-t">
            Erica Lanka Borba, palms together, in a saree of pink and blue, in a white
            studio.
          </p>
        </div>
        <Postmark
          id="pm-cl"
          top="VOL. X ✦ NO. 10"
          bottom="THE NOVEMBER ISSUE"
          mid="P.01"
          sub="2026"
          size={104}
          color="rgba(255,255,255,0.85)"
          style={{ position: "absolute", right: 40, top: 56, zIndex: 4 }}
        />
      </article>

      {/* ============================================== 02 · CONTENTS (RIGHT) · BOARDING PASS */}
      <article className="mag-page er er-white">
        <div className="er-well" style={{ paddingTop: 52 }}>
          <div className="er-pass">
            <div className="er-pass-head">
              <span>PrimeCrest Airmail · Boarding Pass</span>
              <span>Vol. X · No. 10</span>
            </div>
            <div className="er-pass-route">
              <div>
                <small>From</small>
                <b>RIO</b>
                <span>Brasil</span>
              </div>
              <svg viewBox="0 0 120 30" className="er-pass-plane" aria-hidden>
                <path d="M2 15 H96" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" />
                <path d="M96 6 L118 15 L96 24 L101 15 Z" fill="currentColor" />
              </svg>
              <div style={{ textAlign: "right" }}>
                <small>To</small>
                <b>CMB</b>
                <span>Colombo</span>
              </div>
            </div>
            <p className="er-pass-note">
              Route after the song &ldquo;From Rio to Colombo&rdquo; by Erica Lanka.
            </p>
          </div>

          <div className="er-lead">
            <b>05</b>
            <div>
              <p className="er-lead-k">Cover story</p>
              <h3>Erica Lanka Borba. Beyond Borders.</h3>
              <p>
                She came as a doubtful tourist. Three years on she sings about a tower and
                argues, kindly, with the island&apos;s reputation.
              </p>
            </div>
          </div>

          <ol className="er-index">
            <li>
              <b>03</b>
              <div>
                <h4>Credits</h4>
                <p>Who made this issue.</p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>From the Editors</h4>
                <p>A doubtful tourist, and a family back home that would not believe her.</p>
              </div>
            </li>
            <li>
              <b>07</b>
              <div>
                <h4>The Story</h4>
                <p>The country she was warned about, and the song she wrote for a building.</p>
              </div>
            </li>
            <li>
              <b>10</b>
              <div>
                <h4>The Record</h4>
                <p>Four songs, as she names them, written from love.</p>
              </div>
            </li>
            <li>
              <b>13</b>
              <div>
                <h4>The Interview</h4>
                <p>Eight answers, printed in her words.</p>
              </div>
            </li>
            <li className="is-house">
              <b>11</b>
              <div>
                <h4>Fortiora Studio</h4>
                <p>Advertisement.</p>
              </div>
            </li>
            <li className="is-house">
              <b>21</b>
              <div>
                <h4>Fortiora Translate</h4>
                <p>Advertisement.</p>
              </div>
            </li>
            <li className="is-house">
              <b>22</b>
              <div>
                <h4>Be Featured</h4>
                <p>The desk is open for the next edition.</p>
              </div>
            </li>
          </ol>
          <div className="er-strip">
            {[
              ["lotus-gown", "P.16", "Q.04"],
              ["white-full", "P.13", "Q.01"],
              ["heart", "P.06", "Feature"],
              ["blue-gown", "P.17", "Q.05"],
              ["cap", "P.18", "Q.06"],
            ].map(([f, pg, q]) => (
              <Stamp
                key={f}
                src={`${IMG}/${f}.jpg`}
                alt="Erica Lanka Borba"
                ratio={PHOTO_R}
                width={98}
                country={pg}
                note={q}
              />
            ))}
          </div>
          <div className="er-pass-stub">
            <div>
              <small>Seat</small>
              <b>10A</b>
            </div>
            <div>
              <small>Gate</small>
              <b>X</b>
            </div>
            <div>
              <small>Boarding</small>
              <b>Nov 2026</b>
            </div>
            <svg viewBox="0 0 160 40" className="er-pass-bars" aria-hidden>
              {Array.from({ length: 40 }, (_, i) => (
                <rect key={i} x={i * 4} y="0" width={i % 3 === 0 ? 2.6 : 1.2} height="40" />
              ))}
            </svg>
          </div>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS */}
      <article className="mag-page er er-navy">
        <Postmark
          id="pm-cr"
          top="FORTIORA GROUP ✦ LLC"
          bottom="SHERIDAN · WYOMING"
          mid="WY"
          sub="82801"
          size={300}
          color="rgba(244,196,48,0.1)"
          style={{ position: "absolute", right: -260, top: 120 }}
        />
        <div className="er-well">
          <Kicker style={{ color: "var(--er-sun)" }}>PrimeCrest · The November Issue · Vol. X</Kicker>
          <h2 className="er-credits-h">Credits.</h2>
          <dl className="er-credits">
            {novemberCredits("Erica Lanka Borba").map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="er-credits-mid">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" className="er-credits-logo" />
            <div className="er-imprint">
              <p className="er-imprint-k">Corporate office</p>
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
            <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" className="er-credits-qr" />
          </div>
          <p className="er-rights">
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
          <Folio page="03" section="Credits" light />
        </div>
      </article>

      {/* ============================================== 04 · FROM THE EDITORS (AIRMAIL LETTER) */}
      <article className="mag-page er er-white">
        <div className="er-envelope" aria-hidden />
        <div className="er-well" style={{ padding: "60px 64px 40px" }}>
          <div className="er-letter-top">
            <div>
              <Kicker>From the Editors</Kicker>
              <h2 className="er-head" style={{ fontSize: 52, marginTop: 10 }}>
                She came as a tourist.
              </h2>
              <p className="er-letter-dek">
                Three years, four songs, a tower that lights up at night, and a family back
                home that needed convincing. A note on the woman on our cover.
              </p>
            </div>
            <div className="er-letter-stamp">
              <Stamp
                src={`${IMG}/portrait.jpg`}
                alt="Erica Lanka Borba"
                ratio={PHOTO_R}
                width={128}
                country="SRI LANKA"
                note="Vol. X"
              />
              <Postmark
                id="pm-letter"
                top="PRIMECREST ✦ AIRMAIL"
                bottom="THE EDITORS"
                mid="NOV"
                sub="2026"
                size={96}
                color="rgba(31,79,214,0.72)"
                style={{ position: "absolute", left: -66, top: 168 }}
              />
            </div>
          </div>
          <div className="er-letter er-drop" style={{ fontSize: 20, lineHeight: 1.68 }}>
            <p>
              Erica Lanka Borba first came to Sri Lanka three years ago, as a tourist, and a
              doubtful one. She says so herself. What she knew of the island had come from
              outside it: the reports, the warnings, the general fog of reputation that settles
              over a country nobody you know has visited.
            </p>
            <p>
              The fog turned out to be wrong. The heat felt like Brazil. So did the green. The
              people were something else again, and she still talks about them before she gets
              anywhere near the beaches.
            </p>
            <p>
              Then she did the small thing that turned out to be the large thing. She opened a
              social media account so her friends and family back home could see what she was
              seeing, because they did not believe her either. The media now call her a viral
              phenomenon. She finds the phrase hard to say with a straight face.
            </p>
            <p>
              There are four songs. One of them is about a tower. None of what she posts about
              Sri Lanka comes from a paid agreement, she tells us, and she intends to keep it
              that way.
            </p>
            <p>
              Her eight answers begin on page thirteen and run as she wrote them, exclamation
              marks included. She uses a lot of them. We left every one in place. They are how
              she talks, and the way she talks is most of the story.
            </p>
          </div>
          <div className="er-sign">
            <b>The Editors</b>
            <span>PrimeCrest · The November Issue</span>
          </div>
          <Folio page="04" section="From the Editors" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER (LEFT) */}
      <article className="mag-page er er-blue">
        <svg className="er-op-ghost" viewBox="0 0 640 260" aria-hidden>
          <text x="640" y="250" textAnchor="end">
            RIO
          </text>
        </svg>
        <div className="er-well">
          <Kicker style={{ color: "var(--er-sun)" }}>The Feature · Travel, Culture, Music</Kicker>
          <h1 className="er-op-title">
            <span>Beyond</span>
            <span>Borders.</span>
          </h1>
          <p className="er-op-dek">
            Erica Lanka Borba arrived in Sri Lanka three years ago as a doubtful tourist. She
            opened an account for her family back home, wrote four songs, and found herself
            arguing, gently and in public, with the island&apos;s reputation.
          </p>
          <div className="er-op-foot">
            <Stamp
              src={`${IMG}/portrait.jpg`}
              alt="Erica Lanka Borba, close portrait"
              ratio={PHOTO_R}
              width={300}
              country="BRASIL"
              note="Erica Lanka"
            />
            <div className="er-op-facts">
              <p className="er-op-q">
                &ldquo;I discovered a completely different Sri Lanka from the one I had
                imagined.&rdquo;
              </p>
              <p className="er-op-facts-k">Profile</p>
              <p>Brazilian travel &amp; lifestyle content creator</p>
              <p>Musical artist</p>
              <p>Social media personality</p>
              <Postmark
                id="pm-op"
                top="RIO ✦ COLOMBO"
                bottom="BEYOND BORDERS"
                mid="P.05"
                sub="2026"
                size={92}
                color="rgba(244,196,48,0.95)"
                waves
                style={{ marginTop: 18 }}
              />
            </div>
          </div>
          <Folio page="05" section="The Feature" light />
        </div>
      </article>

      {/* ============================================== 06 · OPENER (RIGHT) */}
      <article className="mag-page er er-sun">
        <div className="er-op-disc" />
        <img
          className="er-op-cut"
          src={CUT.heart.src}
          alt="Erica Lanka Borba in a Sri Lanka jersey, making a heart with her hands around a small flag"
          style={{ height: 1020, width: Math.round(1020 * CUT.heart.r) }}
        />
        <div className="er-op-r">
          <Kicker style={{ color: "var(--er-ink)" }}>Erica Lanka Borba</Kicker>
          <p className="er-op-r-q">
            &ldquo;The people are Sri Lanka&apos;s greatest superpower!&rdquo;
          </p>
        </div>
        <div className="er-tag er-op-tag">
          <i className="er-tag-hole" />
          <p className="er-tag-k">Carry-on</p>
          <p className="er-tag-t">A Sri Lanka jersey, a small flag, both hands making a heart.</p>
        </div>
      </article>

      {/* ============================================== 07 · THE STORY I */}
      <article className="mag-page er er-white">
        <div className="er-well">
          <Kicker>The Story · I</Kicker>
          <h2 className="er-head" style={{ fontSize: 58 }}>
            The country she was warned about.
          </h2>
          <div className="er-cols er-drop" style={{ fontSize: 17.8, lineHeight: 1.62 }}>
            <p>
              Three years ago Erica Lanka Borba came to Sri Lanka for the first time, as a
              tourist, and a sceptical one. Her picture of the place had been drawn by people
              who had not been there: international reports, travel advisories, the version of
              the island that travels abroad without it. She admits she believed some of it.
            </p>
            <p>
              The surprise came early. The climate was tropical and familiar, and the scenery
              reminded her of Brazil. She felt comfortable from the first days, which is not
              what she had packed for.
            </p>
            <p>
              What kept her was the people. Ask her about the island and she will get to the
              beaches eventually, but she starts with a kindness that, in her words, comes from
              within, from people who help without expecting something back. She has been to a
              great many holiday destinations. She says this is the difference.
            </p>
            <p>
              The account came next, and it was not a strategy. Back home, friends and family
              were still doubtful, even after hearing about her trip. So she opened a social
              media account to show them what Sri Lanka was really like. That was the whole
              plan. The audience that arrived afterwards was nobody&apos;s plan, least of all
              hers. When the media began calling her &ldquo;Erica Lanka, the viral
              phenomenon&rdquo;, she found it, her word, unbelievable. She still does.
            </p>
            <p>
              She has a rule about money. The content she makes about Sri Lanka is not paid
              for. It comes, she says, from her own passion and conviction, and she means to
              keep it that way, because nobody paying her gets to decide what she says, what
              she shows or how she feels. It is an unusual line for a creator to draw. She
              draws it without fuss.
            </p>
          </div>
          <div className="er-quote-band">
            <span className="er-qmark">&ldquo;</span>
            <p>
              I never want someone telling me what I should say, what I should show, or how I
              should feel just because they&apos;re paying me.
            </p>
          </div>
          <Folio page="07" section="The Story" />
        </div>
      </article>

      {/* ============================================== 08 · THE PLATE */}
      <article className="mag-page er er-pink">
        <div className="er-plate">
          <Stamp
            src={`${IMG}/portrait.jpg`}
            alt="Erica Lanka Borba, hand to her cheek, smiling"
            ratio={PHOTO_R}
            width={560}
            country="SRI LANKA ✦ BRASIL"
            note="PrimeCrest · Vol. X · No. 10"
          />
          <Postmark
            id="pm-plate"
            top="PRIMECREST ✦ AIRMAIL"
            bottom="FIRST DAY OF ISSUE"
            mid="NOV"
            sub="2026"
            size={132}
            color="rgba(16,26,72,0.62)"
            style={{ position: "absolute", left: 52, bottom: 168, zIndex: 4 }}
          />
        </div>
        <div className="er-plate-cap">
          <p>
            <b>First day of issue.</b> Erica Lanka Borba, photographed against a white studio backdrop.
            &ldquo;Sometimes, the heart understands what words cannot express.&rdquo;
          </p>
          <span>08</span>
        </div>
      </article>

      {/* ============================================== 09 · THE STORY II */}
      <article className="mag-page er er-white">
        <div className="er-s2">
          <div className="er-s2-stage er-hue-green">
            <div className="er-stage-field" style={{ height: "64%" }} />
            <Postmark
              id="pm-s2"
              top="PRIMECREST ✦ AIRMAIL"
              bottom="THE STORY · II"
              mid="P.09"
              sub="2026"
              size={140}
              waves={false}
              color="rgba(27,138,90,0.7)"
              style={{ position: "absolute", left: 95, top: 40 }}
            />
            <img
              className="er-cut"
              src={CUT.mint.src}
              alt="Erica Lanka Borba in a mint dress"
              style={{ height: 860, width: Math.round(860 * CUT.mint.r) }}
            />
            <p className="er-stage-tag" style={{ color: "#fff" }}>
              Mint, belted
            </p>
          </div>
          <div className="er-s2-text">
            <Kicker>The Story · II</Kicker>
            <h2 className="er-head" style={{ fontSize: 50 }}>
              A song for a tower.
            </h2>
            <div className="er-col1 er-drop" style={{ fontSize: 16.4, lineHeight: 1.6 }}>
              <p>
                The music started the way the account did. She had feelings too big to keep to
                herself and needed somewhere to put them. She is firm that she is not a music
                star and has no wish to become one. There are four songs so far: &ldquo;Hari
                Hari Sri Lanka&rdquo;, &ldquo;Lotus Tower – Feeling the Power&rdquo;,
                &ldquo;From Rio to Colombo&rdquo; and &ldquo;Patricia Lanka&rdquo;.
              </p>
              <p>
                The Lotus Tower song is the one people ask about. She fell for the building the
                way she fell for the country, without meaning to. Plenty of listeners abroad have
                never heard of it, and they ask her what it is. She likes that. Every question
                is one more person who might come and see it lit up at night, which is when she
                likes it best.
              </p>
              <p>
                There is a harder conversation too. A media article once asked how far Erica
                Lanka could actually go. Her answer is about context. On a Sri Lankan beach she
                wears a bikini, partly to show that tourists can; some people abroad still think
                they have to cover up. At a Buddhist or Hindu temple she reads up on the customs
                and dresses for them. At a gala dinner she dresses for a gala dinner.
              </p>
              <p>
                Ask about the future and she has no plan to offer. None of this was planned, she
                points out. She wants quality tourism for the island, not mass tourism, and she
                worries out loud about what happens to the warmth of its people if the numbers
                ever swamp them. Her ambition is smaller and harder: that a few people see the
                videos, hear the songs, and come to find out for themselves.
              </p>
            </div>
            <p className="er-pull is-small">
              &ldquo;Respecting another culture doesn&apos;t mean you have to give up your own
              identity.&rdquo;
            </p>
            <Folio page="09" section="The Story" />
          </div>
        </div>
      </article>

      {/* ============================================== 10 · THE RECORD */}
      <article className="mag-page er er-sun">
        <div className="er-well">
          <Kicker style={{ color: "var(--er-ink)" }}>The Record</Kicker>
          <h2 className="er-head" style={{ fontSize: 52 }}>
            Four songs, written from love.
          </h2>
          <div className="er-rec">
            <div className="er-rec-sleeve">
              <svg viewBox="0 0 400 400" className="er-rec-disc" aria-hidden>
                <circle cx="200" cy="200" r="198" fill="#0d0f1a" />
                {Array.from({ length: 22 }, (_, i) => (
                  <circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={190 - i * 6.4}
                    fill="none"
                    stroke="#2a2f4a"
                    strokeWidth="0.9"
                  />
                ))}
                <circle cx="200" cy="200" r="58" fill="#e2457a" />
                <circle cx="200" cy="200" r="5" fill="#0d0f1a" />
                <text x="200" y="186" textAnchor="middle" className="er-rec-label">
                  ERICA LANKA
                </text>
                <text x="200" y="224" textAnchor="middle" className="er-rec-label-s">
                  4 SONGS
                </text>
              </svg>
              <div className="er-rec-cover">
                <p className="er-rec-cover-k">The songs</p>
                <p className="er-rec-cover-t">
                  Erica
                  <br />
                  Lanka
                </p>
                <p className="er-rec-cover-s">Four songs · written from love</p>
              </div>
            </div>
            <div className="er-tracks">
              <p className="er-tracks-k">The songs, in the order she names them</p>
              <ol>
              {[
                "Hari Hari Sri Lanka",
                "Lotus Tower – Feeling the Power",
                "From Rio to Colombo",
                "Patricia Lanka",
              ].map((t, i) => (
                <li key={t}>
                  <b>0{i + 1}</b>
                  <span>{t}</span>
                </li>
              ))}
              </ol>
            </div>
          </div>
          <dl className="er-facts">
            {[
              ["From", "Brazil"],
              ["First visit to Sri Lanka", "Three years ago, as a tourist"],
              ["Work", "Travel & lifestyle content creator · musical artist · social media personality"],
              ["Why the first account", "“To share my experiences in Sri Lanka with my friends and family”"],
              ["Why she writes", "“Music gives those feelings a voice.”"],
              ["As the media put it", "“Erica Lanka, the viral phenomenon”"],
              ["What she wants for the island", "“Quality tourism. Thoughtful, respectful tourism”"],
              ["The plan", "“I genuinely have no idea!”"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <Folio page="10" section="The Record" />
        </div>
      </article>

      {/* ============================================== 11 · FORTIORA STUDIO (AD, LEFT) */}
      <article className="mag-page er er-ad">
        <div className="er-ad-grid" aria-hidden />
        <div className="er-well">
          <p className="er-ad-k">Advertisement · Fortiora Group</p>
          <div className="er-ad-brand">
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora</b>
              <span>Studio</span>
            </div>
          </div>
          <h2 className="er-ad-h">
            The desk
            <br />
            behind <em>the&nbsp;feed.</em>
          </h2>
          <p className="er-ad-dek">
            Fortiora Studio puts AI agents to work beside creator and media teams. They keep the
            calendar, draft the captions and the edit notes, run the partnership inbox and read
            the audience. Every draft comes back to a person before anything goes out.
          </p>
          <div className="er-ad-caps">
            {[
              [
                "01",
                "Content calendar",
                "Plans the week across every channel, moves a post when the shoot moves, and flags a gap before it becomes a quiet Tuesday.",
              ],
              [
                "02",
                "Captions & edit drafts",
                "Captions in your voice and in several lengths. Cut notes written against the footage, so the editor starts from a list, not a blank timeline.",
              ],
              [
                "03",
                "Partnership pipeline",
                "Logs every brand enquiry, drafts the reply, tracks the brief and the deliverables, and keeps your rules on what you will and will not promote attached to each one.",
              ],
              [
                "04",
                "Audience insights",
                "Reads comments and performance across platforms and tells you, in plain sentences, what your audience asked for this week.",
              ],
            ].map(([n, h, t]) => (
              <div key={n} className="er-ad-cap">
                <b>{n}</b>
                <h4>{h}</h4>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <Folio page="11" section="Advertisement" light />
        </div>
      </article>

      {/* ============================================== 12 · FORTIORA STUDIO (AD, RIGHT) */}
      <article className="mag-page er er-ad">
        <div className="er-ad-grid" aria-hidden />
        <div className="er-well">
          <p className="er-ad-k" style={{ textAlign: "right" }}>
            Fortiora Studio · AI agents for creator &amp; media teams
          </p>
          <StudioConsole />
          <div className="er-ad-close">
            <h3>
              Make the work.
              <br />
              <em>Let the agents keep the desk.</em>
            </h3>
            <div className="er-ad-cta">
              <div>
                <p className="er-ad-cta-k">Talk to the studio</p>
                <p className="er-ad-cta-t">
                  <b>Hello@thefortiora.com</b>
                  <br />
                  thefortiora.com
                  <br />
                  <span>An advertisement by the publisher of PrimeCrest</span>
                </p>
              </div>
              <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
            </div>
          </div>
          <Folio page="12" section="Advertisement" light />
        </div>
      </article>

      {/* ============================================== 13 · Q1 */}
      <Interview
        n="01"
        q="Your journey to Sri Lanka"
        page="13"
        hue="blue"
        cut={CUT.whiteFull}
        h={900}
        stage={330}
        side="left"
        tag="White knit, white skirt"
        size={22}
        lead={1.6}
        pull={<>&ldquo;I discovered a completely different Sri Lanka from the one I had imagined.&rdquo;</>}
      >
        <p>
          Three years ago, I came to Sri Lanka for the very first time, simply as a tourist. And
          I have to admit something: I was a little skeptical myself! Like so many people around
          the world, my perception of Sri Lanka had been shaped by what the outside world tells
          us about this country. But the moment I arrived, I was surprised! I discovered a
          completely different Sri Lanka from the one I had imagined.
        </p>
        <p>
          From the very beginning, I felt comfortable here. The tropical climate and
          breathtaking landscapes reminded me so much of my home country, Brazil. And somewhere
          along the way, I felt the desire to share this beautiful Sri Lanka with people who had
          only ever heard stories about it.
        </p>
      </Interview>

      {/* ============================================== 14 · Q2 */}
      <Interview
        n="02"
        q="Building a global digital community"
        page="14"
        hue="pink"
        cut={CUT.white}
        h={720}
        stage={400}
        side="right"
        tag="Hands on hips"
        size={20.6}
        lead={1.6}
        pull={<>&ldquo;I never actually set out to reach a huge audience in the first place.&rdquo;</>}
      >
        <p>
          The truth is, I don&apos;t really know the answer myself! These days, I sometimes see
          the media describing me as &ldquo;Erica Lanka, the viral phenomenon,&rdquo; and I
          still find that a little unbelievable! Maybe the secret is that I never actually set
          out to reach a huge audience in the first place.
        </p>
        <p>
          When I opened my very first social media account, all I wanted was to share my
          experiences in Sri Lanka with my friends and family. I simply wanted to show them what
          Sri Lanka was really like! Because even after I had experienced this beautiful country
          for myself, many of my friends and family members were still skeptical about Sri
          Lanka. And that was really how everything began.
        </p>
      </Interview>

      {/* ============================================== 15 · Q3 */}
      <Interview
        n="03"
        q="Discovering Sri Lanka beyond tourism"
        page="15"
        hue="sun"
        cut={CUT.blueGown2}
        h={900}
        stage={340}
        side="left"
        tag="Cobalt, split hem"
        size={20.8}
        lead={1.6}
        pull={<>&ldquo;It comes from within. From the heart. From love.&rdquo;</>}
      >
        <p>
          Without a doubt, the people of Sri Lanka! They are the ones who truly captured my
          heart! There is something so incredibly special about their warmth, their kindness,
          and that beautiful, genuine innocence I continue to experience here. People are always
          willing to help. And what touches me most is that you can actually feel where that
          kindness comes from.
        </p>
        <p>
          It comes from within. From the heart. From love. Not because they expect something in
          return.
        </p>
        <p>
          I&apos;ve been fortunate enough to visit many beautiful places around the world. And
          of course, Sri Lanka is a breathtaking country, with its spectacular landscapes,
          tropical nature, and gorgeous beaches. But do you know what makes the real difference
          for me? The people! They are what makes Sri Lanka so wonderfully unique!
        </p>
      </Interview>

      {/* ============================================== 16 · Q4 */}
      <Interview
        n="04"
        q={<>The story behind &ldquo;Lotus Tower – Feeling the Power&rdquo;</>}
        page="16"
        hue="blue"
        cut={CUT.lotusGown}
        h={930}
        stage={300}
        side="right"
        tag="Lotus petals, green sequins"
        size={17.4}
        lead={1.56}
      >
        <p>
          Love! It was simply love! Everything I create here in Sri Lanka comes from love. The
          content I share to promote this beautiful country comes from my own passion and
          personal conviction, not from paid advertising agreements. And that&apos;s exactly how
          I want to keep it! Because being authentic means everything to me. I never want
          someone telling me what I should say, what I should show, or how I should feel just
          because they&apos;re paying me. I want to remain free to express what genuinely comes
          from my heart.
        </p>
        <p>
          I fell in love with Sri Lanka, especially its wonderful people. And then, something
          very similar happened with the Lotus Tower! You know, love is something you simply
          cannot control! It arrives when it arrives, and sometimes it leaves when it leaves. You
          cannot force it, schedule it, or tell it what to do. And it was exactly that feeling of
          love that inspired me to dedicate a song to this magnificent landmark of Sri Lanka.
        </p>
        <p>
          I wanted to share my fascination with people all around the world, because so many
          have never even heard of this incredible building! Sometimes people actually ask me,
          &ldquo;What is that? What exactly is the Lotus Tower?&rdquo; And I think that&apos;s
          wonderful! Because discovering the Lotus Tower is yet another beautiful reason to come
          and experience Sri Lanka. Especially at night, when it lights up in all those
          magnificent colors! Oh my goodness, it&apos;s absolutely breathtaking! And just
          talking about it makes my heart beat a little faster all over again!
        </p>
      </Interview>

      {/* ============================================== 17 · Q5 */}
      <Interview
        n="05"
        q="The power of music and cultural connection"
        page="17"
        hue="green"
        cut={CUT.blueGown}
        h={880}
        stage={350}
        side="left"
        tag="Cobalt, gold clasps"
        size={18.4}
        lead={1.58}
        pull={<>&ldquo;Music gives those feelings a voice.&rdquo;</>}
      >
        <p>
          I started writing music because I wanted to give my feelings and my love another way to
          express themselves. I&apos;m not some big music star, and I certainly don&apos;t dream
          of becoming one! Every song I&apos;ve created, whether it&apos;s &ldquo;Hari Hari Sri
          Lanka,&rdquo; &ldquo;Lotus Tower – Feeling the Power,&rdquo; &ldquo;From Rio to
          Colombo,&rdquo; or &ldquo;Patricia Lanka,&rdquo; was born from genuine emotions and a
          whole lot of love.
        </p>
        <p>
          I don&apos;t create music because I want to become famous or collect millions of
          views. I create it because sometimes the feelings inside my heart are simply too big
          to keep to myself. Music gives those feelings a voice. It&apos;s my way of sharing my
          personal experiences, my emotions, and the things that touch my soul.
        </p>
        <p>
          And do you know what I find so beautiful about music? It has this incredible power to
          connect people from completely different countries and cultures, even when they
          don&apos;t speak the same language. Because sometimes, the heart understands what words
          cannot express. And that is what I love most about music!
        </p>
      </Interview>

      {/* ============================================== 18 · Q6 */}
      <Interview
        n="06"
        q="Authentic storytelling and local connections"
        page="18"
        hue="pink"
        cut={CUT.cap}
        h={860}
        stage={300}
        side="right"
        tag="Jersey and cap"
        size={17.4}
        lead={1.54}
      >
        <p>
          Always with the deepest respect! There was once a media article asking, &ldquo;How far
          can Erica Lanka actually go?&rdquo; And I think there&apos;s something very important
          we need to understand. Respecting another culture doesn&apos;t mean you have to give up
          your own identity.
        </p>
        <p>
          When I wear a bikini on a beach in Sri Lanka, I&apos;m not trying to provoke anyone.
          Quite the opposite! I want to show people around the world that Sri Lanka is a
          beautiful, welcoming holiday destination where tourists can enjoy the beach just as
          they would in other popular tropical destinations. Because believe it or not, there
          are still people out there who think you have to cover yourself up even when
          you&apos;re on the beach in Sri Lanka! And that&apos;s exactly the kind of
          misconception I want to help change.
        </p>
        <p>
          But respect goes both ways! Whenever I visit a Buddhist or Hindu temple, I fully
          respect its religious traditions. I take the time to learn about the customs, and I
          make sure I&apos;m dressed appropriately. If I&apos;m invited to a gala dinner, I dress
          elegantly and respectfully for the occasion. And if I feel like being a little sexy?
          Well, then I choose the right place for that too!
        </p>
        <p>
          For me, it&apos;s really quite simple. Every place, every culture, and every occasion
          deserve its own kind of respect. And that&apos;s another thing I love so much about Sri
          Lanka. People here cherish their own traditions while also welcoming visitors from
          different cultures with warmth and openness. You can stay true to who you are while
          showing genuine, heartfelt respect for someone else&apos;s culture.
        </p>
      </Interview>

      {/* ============================================== 19 · Q7 */}
      <article className="mag-page er er-white">
        <div className="er-well">
          <Kicker>The Interview · In her words · 07 of 08</Kicker>
          <div className="er-q-row">
            <b className="er-q-n">07</b>
            <h3 className="er-q">Turning digital success into new opportunities</h3>
          </div>
          <div className="er-cols er-drop" style={{ fontSize: 18, lineHeight: 1.62 }}>
            <p>
              You know what? I don&apos;t actually have any big plans for the future! None of
              this digital success was planned! It just happened! And now I&apos;m doing my best
              to grow into this unexpected new world as the creative, passionate woman I&apos;ve
              always been.
            </p>
            <p>
              I don&apos;t have decades of experience doing what I&apos;m doing today. So much of
              it is still new to me. Sometimes it&apos;s unbelievable, sometimes a little
              overwhelming, and sometimes I just stop and think, &ldquo;Oh my goodness, is this
              really happening to me?&rdquo; But it&apos;s beautiful, and I&apos;m truly grateful
              for everything that has happened.
            </p>
            <p>
              I&apos;m simply trying to embrace this journey and live up to the opportunities it
              brings, without ever losing sight of who I really am. I&apos;m not here to sell Sri
              Lanka. I&apos;m here to show people the Sri Lanka that I, Erica Lanka, see, feel, and
              love.
            </p>
            <p>
              And you know something? If my music and videos inspire even just a few people to
              visit this beautiful country and discover it for themselves, then my dream has
              already come true!
            </p>
            <p>
              As for what the future holds? I genuinely have no idea! I&apos;m right here, in the
              middle of this incredible journey, simply continuing to do what I&apos;ve done from
              the very beginning. I&apos;m following my heart.
            </p>
          </div>
          <div className="er-postcard">
            <div className="er-postcard-l">
              <span className="er-qmark">&ldquo;</span>
              <p>I&apos;m not here to sell Sri Lanka.</p>
              <small>Erica Lanka Borba</small>
            </div>
            <div className="er-postcard-r">
              <Stamp
                src={`${IMG}/heart.jpg`}
                alt="Erica Lanka Borba making a heart with her hands"
                ratio={PHOTO_R}
                width={96}
                country="SRI LANKA"
                note="07"
                tilt={3}
              />
              <Postmark
                id="pm-pc"
                top="PRIMECREST ✦ AIRMAIL"
                bottom="IN HER WORDS"
                mid="07"
                sub="of 08"
                size={86}
                waves={false}
                color="rgba(31,79,214,0.7)"
                style={{ position: "absolute", right: 104, top: 44 }}
              />
              <div className="er-postcard-lines">
                <span>To: everyone who has only heard stories</span>
                <span>About: Sri Lanka</span>
                <span>From: Erica Lanka</span>
              </div>
            </div>
          </div>
          <Folio page="19" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 20 · Q8 */}
      <article className="mag-page er er-white">
        <div className="er-well" style={{ paddingTop: 44 }}>
          <Kicker>The Interview · In her words · 08 of 08</Kicker>
          <div className="er-q-row">
            <b className="er-q-n">08</b>
            <h3 className="er-q">Your vision for Sri Lanka&apos;s global story</h3>
          </div>
          <div className="er-cols er-drop" style={{ fontSize: 14.7, lineHeight: 1.52 }}>
            <p>
              I&apos;ve traveled a great deal throughout my life, and I&apos;ve been fortunate
              enough to experience many beautiful holiday destinations around the world. And do
              you know what I truly believe? Sri Lanka has extraordinary potential! I genuinely
              believe this country deserves to step out of the shadow of the negative
              perceptions, travel advisories, and international reports that have influenced how
              so many people around the world see it.
            </p>
            <p>
              Not because Sri Lanka needs to change! Quite the opposite! Sri Lanka doesn&apos;t
              need to change who it is. What needs to change is the way the outside world sees
              Sri Lanka!
            </p>
            <p>
              And when I talk about tourism, I&apos;m certainly not talking about mass tourism
              that could one day overwhelm or damage this beautiful island. I&apos;m talking
              about quality tourism. Thoughtful, respectful tourism that appreciates and protects
              what makes this country so special.
            </p>
            <p>
              Sri Lanka has everything! Breathtaking tropical beaches, a wonderful climate,
              magnificent mountains, fascinating cultures, and different religions living
              peacefully alongside one another. But do you know what this island&apos;s greatest
              treasure really is? Its people! Their honesty, their warmth, their open hearts, and
              that wonderful ability to welcome others with genuine love, without constantly
              expecting something in return. That, to me, is what sets Sri Lanka apart from so
              many other destinations around the world. The people are Sri Lanka&apos;s greatest
              superpower!
            </p>
            <p>
              But this is also where my biggest concern lies. What happens if tourism grows
              dramatically one day, and the very people who make Sri Lanka so special begin to
              change because of it? What happens if that natural warmth and kindness slowly give
              way to purely commercial thinking? Then the very thing that makes Sri Lanka so
              extraordinary could collapse like a beautiful house of cards. And that would be
              heartbreaking!
            </p>
            <p>
              Perhaps that is why, at this moment in my life, I feel as though I&apos;ve
              discovered something very special here. A purpose. With my honesty, my openness, my
              creativity, and most importantly, my love, I want to help the world discover Sri
              Lanka as it truly is. Because I often say that far too many people around the world
              have such an unfair, negative image of this beautiful country without ever having
              experienced it for themselves.
            </p>
            <p>
              And you know what? Maybe my story is actually a little fairy tale! Maybe I&apos;m
              the princess who discovers a beautiful island that has been misunderstood by the
              world for far too long. And perhaps, with one little kiss, the spell is finally
              broken. Suddenly, what the world once misunderstood transforms into a handsome
              prince! A prince named Sri Lanka!
            </p>
            <p>
              And if my music, my creativity, and my love can help the world discover that prince
              and see him through the same loving eyes that I do ... Then that would be the most
              beautiful happily-ever-after I could ever wish for.
            </p>
          </div>
          <div className="er-end">
            <p>
              &ldquo;Sri Lanka doesn&apos;t need to change who it is. What needs to change is the
              way the outside world sees Sri Lanka!&rdquo;
            </p>
          </div>
          <Folio page="20" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 21 · FORTIORA TRANSLATE (AD) */}
      <article className="mag-page er er-tr">
        <div className="er-well">
          <p className="er-ad-k" style={{ color: "var(--er-green)" }}>
            Advertisement · Fortiora Group
          </p>
          <div className="er-ad-brand is-dark">
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora</b>
              <span>Translate</span>
            </div>
          </div>
          <h2 className="er-tr-h">
            Say it once.
            <br />
            <em>Be understood in the next language over.</em>
          </h2>
          <div className="er-tr-player">
            <svg viewBox="0 0 744 330" className="er-tr-scene" aria-hidden>
              <defs>
                <linearGradient id="erTrSky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1f4fd6" />
                  <stop offset="0.62" stopColor="#7fa6f2" />
                  <stop offset="1" stopColor="#f4c430" />
                </linearGradient>
              </defs>
              <rect width="744" height="330" fill="url(#erTrSky)" />
              <circle cx="560" cy="250" r="70" fill="#f4c430" />
              <path d="M0 250 Q180 200 360 245 T744 236 V330 H0 Z" fill="#1b8a5a" />
              <path d="M0 286 Q200 262 400 290 T744 280 V330 H0 Z" fill="#0f5c3b" />
              <g fill="#0f2a7a" opacity="0.85">
                <rect x="96" y="150" width="10" height="110" />
                <path d="M101 120 L116 150 H86 Z" />
              </g>
            </svg>
            <span className="er-tr-live">● Live</span>
            <div className="er-tr-subs">
              <p>
                <b>EN</b> We start at the old lighthouse, just before sunrise.
              </p>
              <p>
                <b>PT</b> Começamos no velho farol, logo antes do nascer do sol.
              </p>
              <p>
                <b>ES</b> Empezamos en el viejo faro, justo antes del amanecer.
              </p>
            </div>
          </div>
          <div className="er-tr-voice">
            <span className="er-tr-voice-k">Voice track</span>
            <svg viewBox="0 0 420 36" className="er-tr-wave" aria-hidden>
              {Array.from({ length: 70 }, (_, i) => {
                const v = 4 + Math.round(Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.19)) * 28);
                return <rect key={i} x={i * 6} y={18 - v / 2} width="3" height={v} rx="1.5" />;
              })}
            </svg>
            <span className="er-tr-chips">
              <i>English</i>
              <i>Português</i>
              <i>Español</i>
              <i>Français</i>
              <i>Deutsch</i>
            </span>
          </div>
          <div className="er-tr-caps">
            {[
              ["Live subtitles", "Captions appear while you speak, on streams and premieres, in the languages you switch on."],
              ["Multilingual captions", "Every post goes out with captions written for each audience, ready to check and publish."],
              ["Voice", "A voice track in the viewer's language, timed to the cut, for the videos that need more than text."],
            ].map(([h, t]) => (
              <div key={h}>
                <h4>{h}</h4>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="er-tr-foot">
            <p>
              <b>Hello@thefortiora.com</b> · thefortiora.com
              <br />
              <span>Real-time localisation from Fortiora Group, the publisher of PrimeCrest.</span>
            </p>
            <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
          </div>
          <Folio page="21" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 22 · BE FEATURED */}
      <article className="mag-page er er-blue">
        <Postmark
          id="pm-bf"
          top="THEPRIMECREST.COM ✦"
          bottom="NEXT EDITION"
          mid="2026"
          sub="PRIMECREST"
          size={240}
          color="rgba(255,255,255,0.1)"
          style={{ position: "absolute", left: -40, top: 40 }}
        />
        <div className="er-well">
          <div className="er-bf-mast">
            <PrimeCrestMast tone="dark" tagline={false} />
          </div>
          <Kicker style={{ color: "var(--er-sun)", marginTop: 16 }}>Be Featured · The November Issue</Kicker>
          <h2 className="er-bf-h">
            Your story,
            <br />
            <em>featured.</em>
          </h2>
          <div className="er-luggage">
            <div className="er-luggage-strap" aria-hidden />
            <div className="er-luggage-tag">
              <i className="er-tag-hole is-big" />
              <p className="er-luggage-k">Destination · The next edition of PrimeCrest</p>
              <div className="er-luggage-rows">
                <div>
                  <small>01 · Nominate</small>
                  <p>
                    Tell us who you are and what you have built: a company, a practice, a
                    classroom, a following. Send the years and the people involved.
                  </p>
                </div>
                <div>
                  <small>02 · The interview</small>
                  <p>
                    Answer our questions in your own words. We print the answers as they are
                    given, and we keep the facts to what you tell us.
                  </p>
                </div>
                <div>
                  <small>03 · The issue</small>
                  <p>
                    Your profile, designed and published in a digital edition of PrimeCrest, ready
                    to send to anyone.
                  </p>
                </div>
              </div>
              <div className="er-luggage-foot">
                <div>
                  <p className="er-luggage-url">theprimecrest.com</p>
                  <p className="er-luggage-mail">Hello@thefortiora.com</p>
                </div>
                <img src="/brand/qr-primecrest.png" alt="Scan to be featured in PrimeCrest" />
              </div>
            </div>
          </div>
          <Folio page="22" section="Be Featured" light />
        </div>
      </article>

      {/* ============================================== 23 · BACK COVER */}
      <NovemberBack scope="er" vol="X" />
    </>
  );
}
