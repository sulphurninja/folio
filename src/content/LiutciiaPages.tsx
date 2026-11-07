/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. XIII · No. 13
 * Liutciia Berkutova, Founder of WorldZen.
 *
 * Closed `lb-*` system. Midnight #0a1a3a, eagle gold #c9a24a, desert sand,
 * WorldZen blue. Prata / Crimson Pro / Raleway. Motifs: the golden eagle
 * (berkut), passports and boarding passes, map linework. Her essay is printed
 * in her own words, in her order, under her own year heads. The record page
 * is a visa page of stamps, 1990 to 2026. Every frame matches its photograph.
 */

const IMG = "/issues/liutciia";

/* ------------------------------------------------------------------ parts */

function Folio({ n, section }: { n: string; section: string }) {
  return (
    <p className="lb-folio">
      <span>PrimeCrest · November 2026</span>
      <span>{section}</span>
      <b>{n}</b>
    </p>
  );
}

/** Her year heads, set like a luggage tag: the year punched, the title hers. */
function YearHead({ year, title, place }: { year: string; title: ReactNode; place?: string }) {
  return (
    <div className="lb-yhead">
      <span className="lb-ytag">
        <i />
        {year}
      </span>
      <div>
        {place ? <small>{place}</small> : null}
        <h3>{title}</h3>
      </div>
    </div>
  );
}

/** Heraldic golden eagle, wings spread. Pure ornament. */
function Eagle({ className, style }: { className?: string; style?: CSSProperties }) {
  const wing = Array.from({ length: 8 }, (_, i) => {
    const a = -86 + i * 10.5;
    const l = 150 - i * 9;
    const w = 15 - i * 0.6;
    return { a, l, w };
  });
  const feather = (l: number, w: number) =>
    `M0 0 C ${w} ${-l * 0.28} ${w * 0.7} ${-l * 0.82} 0 ${-l} C ${-w * 0.7} ${-l * 0.82} ${-w} ${-l * 0.28} 0 0Z`;
  return (
    <svg className={className} style={style} viewBox="-200 -170 400 330" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        {wing.map(({ a, l, w }, i) => (
          <g key={`l${i}`}>
            <path transform={`translate(-22 -10) rotate(${a})`} d={feather(l, w)} />
            <path transform={`translate(22 -10) scale(-1 1) rotate(${a})`} d={feather(l, w)} />
          </g>
        ))}
        {[-14, 0, 14].map((a) => (
          <path key={a} transform={`translate(0 52) rotate(${180 + a})`} d={feather(-92, 14)} />
        ))}
        <path d="M-24 -20 C -30 20 -18 60 0 74 C 18 60 30 20 24 -20 C 14 -34 -14 -34 -24 -20Z" />
        <path d="M-12 -30 C -14 -52 -2 -64 10 -60 C 20 -58 26 -50 30 -42 L 18 -40 C 14 -36 8 -34 4 -30Z" />
        <circle cx="10" cy="-50" r="2.4" fill="currentColor" />
        <path d="M-10 74 l-8 18 M10 74 l8 18" />
      </g>
    </svg>
  );
}

/** Map linework: a graticule and a dotted great-circle arc. */
function Graticule({ className, arcs = true }: { className?: string; arcs?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 840 1120" preserveAspectRatio="none" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        {Array.from({ length: 11 }, (_, i) => (
          <ellipse key={`m${i}`} cx="420" cy="560" rx={40 + i * 44} ry="700" />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <path key={`p${i}`} d={`M-40 ${80 + i * 80} Q 420 ${40 + i * 80 + (i - 6) * 14} 880 ${80 + i * 80}`} />
        ))}
      </g>
      {arcs ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round">
          <path d="M60 980 C 260 620 520 520 780 200" />
          <path d="M120 300 C 360 160 560 420 780 760" />
        </g>
      ) : null}
    </svg>
  );
}

/** A passport stamp. Shapes vary the way real ones do. */
function Stamp({
  id,
  shape,
  top,
  mid,
  bot,
  ink,
  rotate = 0,
  style,
}: {
  id: string;
  shape: "circle" | "rect" | "oval" | "oct" | "tri";
  top: string;
  mid: string;
  bot: string;
  ink: "gold" | "blue" | "red" | "mid";
  rotate?: number;
  style?: CSSProperties;
}) {
  const t = { transform: `rotate(${rotate}deg)`, ...style };
  const room = shape === "circle" ? 120 : shape === "tri" ? 120 : 200;
  const ms = { fontSize: Math.min(shape === "tri" ? 30 : 46, Math.round(room / (mid.length * 0.62))) };
  const sm = (txt: string) => ({
    fontSize: Math.min(13, +((shape === "tri" ? 130 : shape === "oct" ? 175 : shape === "oval" ? 185 : 225) / (txt.length * 0.82)).toFixed(1)),
  });
  const arc = (txt: string, len: number) => ({ fontSize: Math.min(15, +(len / (txt.length * 0.86)).toFixed(1)) });
  if (shape === "circle") {
    return (
      <svg className={`lb-stamp is-${ink}`} viewBox="0 0 200 200" style={t} aria-label={`${top} ${mid} ${bot}`}>
        <defs>
          <path id={`${id}-a`} d="M 28 100 A 72 72 0 0 1 172 100" />
          <path id={`${id}-b`} d="M 22 100 A 78 78 0 0 0 178 100" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <text className="lb-stamp-arc" style={arc(top, 226)}>
          <textPath href={`#${id}-a`} startOffset="50%" textAnchor="middle">
            {top}
          </textPath>
        </text>
        <text className="lb-stamp-arc" style={arc(bot, 245)}>
          <textPath href={`#${id}-b`} startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
            {bot}
          </textPath>
        </text>
        <text x="100" y="114" textAnchor="middle" className="lb-stamp-mid" style={ms}>
          {mid}
        </text>
        <text x="30" y="106" textAnchor="middle" className="lb-stamp-star">★</text>
        <text x="170" y="106" textAnchor="middle" className="lb-stamp-star">★</text>
      </svg>
    );
  }
  if (shape === "oval") {
    return (
      <svg className={`lb-stamp is-${ink}`} viewBox="0 0 260 170" style={t} aria-label={`${top} ${mid} ${bot}`}>
        <ellipse cx="130" cy="85" rx="126" ry="81" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="130" cy="85" rx="114" ry="70" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="130" y="52" textAnchor="middle" className="lb-stamp-small" style={sm(top)}>{top}</text>
        <text x="130" y="100" textAnchor="middle" className="lb-stamp-mid" style={ms}>{mid}</text>
        <text x="130" y="128" textAnchor="middle" className="lb-stamp-small" style={sm(bot)}>{bot}</text>
      </svg>
    );
  }
  if (shape === "oct") {
    return (
      <svg className={`lb-stamp is-${ink}`} viewBox="0 0 220 180" style={t} aria-label={`${top} ${mid} ${bot}`}>
        <path d="M40 4 H180 L216 40 V140 L180 176 H40 L4 140 V40Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M46 16 H174 L204 46 V134 L174 164 H46 L16 134 V46Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="110" y="56" textAnchor="middle" className="lb-stamp-small" style={sm(top)}>{top}</text>
        <text x="110" y="106" textAnchor="middle" className="lb-stamp-mid" style={ms}>{mid}</text>
        <text x="110" y="138" textAnchor="middle" className="lb-stamp-small" style={sm(bot)}>{bot}</text>
      </svg>
    );
  }
  if (shape === "tri") {
    return (
      <svg className={`lb-stamp is-${ink}`} viewBox="0 0 230 190" style={t} aria-label={`${top} ${mid} ${bot}`}>
        <path d="M115 6 L224 184 H6Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M115 30 L204 172 H26Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <text x="115" y="104" textAnchor="middle" className="lb-stamp-small" style={sm(top)}>{top}</text>
        <text x="115" y="140" textAnchor="middle" className="lb-stamp-mid" style={ms}>{mid}</text>
        <text x="115" y="162" textAnchor="middle" className="lb-stamp-small" style={sm(bot)}>{bot}</text>
      </svg>
    );
  }
  return (
    <svg className={`lb-stamp is-${ink}`} viewBox="0 0 260 150" style={t} aria-label={`${top} ${mid} ${bot}`}>
      <rect x="3" y="3" width="254" height="144" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="12" y="12" width="236" height="126" rx="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="46" x2="248" y2="46" stroke="currentColor" strokeWidth="1.2" />
      <text x="130" y="36" textAnchor="middle" className="lb-stamp-small" style={sm(top)}>{top}</text>
      <text x="130" y="96" textAnchor="middle" className="lb-stamp-mid" style={ms}>{mid}</text>
      <text x="130" y="126" textAnchor="middle" className="lb-stamp-small" style={sm(bot)}>{bot}</text>
    </svg>
  );
}

/** Decorative barcode bars for tickets. */
function Bars({ n = 34, seed = 1 }: { n?: number; seed?: number }) {
  return (
    <span className="lb-bars" aria-hidden>
      {Array.from({ length: n }, (_, i) => (
        <i key={i} style={{ width: 1 + (Math.round(Math.abs(Math.sin(i * 1.7 + seed)) * 3) % 3) }} />
      ))}
    </span>
  );
}

/** Contents row, cut like a boarding pass. */
function Ticket({ n, k, title, text }: { n: string; k: string; title: ReactNode; text: ReactNode }) {
  return (
    <li className="lb-ticket">
      <div className="lb-ticket-stub">
        <small>Page</small>
        <b>{n}</b>
      </div>
      <div className="lb-ticket-main">
        <small>{k}</small>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="lb-ticket-end">
        <Bars seed={Number(n)} n={22} />
      </div>
    </li>
  );
}

/** Body copy block; size and leading are tuned per leaf to fill it. */
function Flow({
  size,
  lead,
  cols = 2,
  drop = false,
  className = "",
  style,
  children,
}: {
  size: number;
  lead: number;
  cols?: 1 | 2;
  drop?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`lb-flow${cols === 1 ? " is-one" : ""}${drop ? " lb-drop" : ""} ${className}`}
      style={{ fontSize: size, lineHeight: lead, ...style }}
    >
      {children}
    </div>
  );
}

export const LIUTCIIA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "From the Editors" },
  { page: 5, label: "The Feature, in her words" },
  { page: 9, label: "Saudi Arabia, 2019" },
  { page: 11, label: "2022 · 2024 · 2026" },
  { page: 13, label: "Africa" },
  { page: 14, label: "Makkah" },
  { page: 15, label: "Fortiora Voyage" },
  { page: 17, label: "WorldZen" },
  { page: 19, label: "The Legacy" },
  { page: 20, label: "The Stamps, 1990–2026" },
  { page: 21, label: "Fortiora Atlas" },
  { page: 22, label: "Be Featured" },
  { page: 23, label: "PrimeCrest" },
];

export function LiutciiaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page lb lb-cover" data-density="hard">
        <div className="lb-cover-sky" />
        <Graticule className="lb-cover-grat" />
        <svg className="lb-cover-ring" viewBox="0 0 700 700" aria-hidden>
          <circle cx="350" cy="350" r="340" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="350" cy="350" r="322" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
        </svg>
        <img
          className="lb-cover-img"
          src={`${IMG}/cover-hood.webp`}
          alt="Liutciia Berkutova, Founder of WorldZen, in a black hood and a gold top"
          fetchPriority="high"
        />
        <div className="lb-cover-grade" />
        <Eagle className="lb-cover-eagle" />

        <header className="lb-mast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
          <div className="lb-mast-row">
            <span>November 2026 · Vol. XIII · No. 13</span>
            <span className="lb-mast-dots" />
            <span>Where Vision Meets Voice</span>
          </div>
        </header>

        <div className="lb-series">
          <p className="lb-series-k">Cover story</p>
          <h2 className="lb-series-title">
            <span>Journeys Meet</span>
            <b>Opportunity:</b>
          </h2>
          <p className="lb-series-sub">Navigating Life Across Borders</p>
          <Bars n={30} seed={13} />
        </div>

        <p className="lb-cover-spine">Berkut · the golden eagle · Izhevsk, 1990</p>

        <div className="lb-teasers">
          <div className="lb-teaser">
            <em>p. 09</em>
            <b>The flight she did not board</b>
            <span>Stranded in Saudi Arabia, she stayed and built a business.</span>
          </div>
          <div className="lb-teaser">
            <em>p. 14</em>
            <b>Makkah, 12 June</b>
            <span>Gratitude, humility, and the people who helped.</span>
          </div>
          <div className="lb-teaser">
            <em>p. 20</em>
            <b>Every stamp, 1990 to 2026</b>
            <span>Izhevsk to Makkah to Chongqing, in ink.</span>
          </div>
        </div>

        <svg className="lb-roundel" viewBox="0 0 200 200" aria-label="WorldZen. Explore, relocate, belong.">
          <defs>
            <path id="lbr-a" d="M 26 100 A 74 74 0 0 1 174 100" />
            <path id="lbr-b" d="M 20 100 A 80 80 0 0 0 180 100" />
          </defs>
          <circle cx="100" cy="100" r="96" fill="rgba(10,26,58,0.55)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text className="lb-stamp-arc" style={{ fontSize: 15 }}>
            <textPath href="#lbr-a" startOffset="50%" textAnchor="middle">
              Beyond borders
            </textPath>
          </text>
          <text className="lb-stamp-arc" style={{ fontSize: 12.5 }}>
            <textPath href="#lbr-b" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
              Founder · WorldZen
            </textPath>
          </text>
          <text x="100" y="98" textAnchor="middle" className="lb-roundel-k">
            In her
          </text>
          <text x="100" y="124" textAnchor="middle" className="lb-roundel-b">
            words
          </text>
        </svg>

        <div className="lb-cover-name">
          <p className="lb-cover-role">Founder · WorldZen</p>
          <p className="lb-cover-line">
            From a girl in Izhevsk to the founder of an international company without borders.
          </p>
          <span className="lb-name-first">Liutciia</span>
          <span className="lb-name-last">Berkutova</span>
        </div>

        <div className="lb-cover-plate">
          <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS PHOTO */}
      <article className="mag-page lb lb-mid">
        <div className="lb-cphoto">
          <img
            src={`${IMG}/dubai-lounge.jpg`}
            alt="Liutciia Berkutova in a lounge at night, a cheetah at her feet and the Dubai skyline behind"
            style={{ aspectRatio: "1122 / 1402" }}
          />
          <div className="lb-cphoto-bar">
            <h2>Contents.</h2>
            <p>
              Dubai, by night, with company. She marked five years of life in the Emirates in
              2026.
            </p>
            <b>01 · 02</b>
          </div>
        </div>
      </article>

      {/* ============================================== 02 · CONTENTS INDEX */}
      <article className="mag-page lb lb-mid">
        <Graticule className="lb-grat" arcs={false} />
        <div className="lb-well">
          <p className="lb-kicker">The November Issue · Vol. XIII · No. 13</p>
          <h2 className="lb-head is-light" style={{ fontSize: 50 }}>
            Inside, by gate.
          </h2>
          <ol className="lb-tickets">
            <Ticket
              n="04"
              k="From the Editors"
              title="Born with the name of an eagle."
              text="An evacuation flight she let leave, and a company registered in Russky Vozhoy."
            />
            <Ticket
              n="06"
              k="The Feature · In her words"
              title="From a girl in Izhevsk to the founder of an international company without borders"
              text="Eighteen years, written by her, year by year."
            />
            <Ticket
              n="09"
              k="Saudi Arabia · 2019"
              title="A country opens, then the world closes."
              text="Twenty people, a small aircraft, a desert picnic. Then GulfDzen."
            />
            <Ticket
              n="11"
              k="2022 · 2024 · 2026"
              title="Losing almost everything."
              text="From the outside it still looked beautiful. Then Sindalah, and a choice about a marriage proposal."
            />
            <Ticket
              n="13"
              k="Africa · 2026"
              title="The holiday that became another beginning."
              text="Surfing, great white sharks, a first bungee jump, AfrikaBurn."
            />
            <Ticket
              n="14"
              k="Makkah · 12 June 2026"
              title="What faith means to me."
              text="Russia Day, the anniversary of Izhevsk, and a pilgrimage."
            />
            <Ticket
              n="17"
              k="WorldZen"
              title="From Izhevsk to a company without borders."
              text="Visas, relocation and international travel, registered in Russky Vozhoy."
            />
            <Ticket
              n="20"
              k="The Stamps"
              title="1990 to 2026, in ink."
              text="Izhevsk, Phuket, Cyprus, AlUla, Maldives, Sindalah, Cape Town, Makkah, Chongqing."
            />
          </ol>
          <div className="lb-house-row">
            <span>
              <b>15</b> Fortiora Voyage
            </span>
            <span>
              <b>19</b> The Legacy
            </span>
            <span>
              <b>21</b> Fortiora Atlas
            </span>
            <span>
              <b>22</b> Be Featured
            </span>
          </div>
          <Folio n="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS */}
      <article className="mag-page lb lb-mid">
        <Graticule className="lb-grat" arcs={false} />
        <div className="lb-well">
          <p className="lb-kicker">Masthead · Data page</p>
          <h2 className="lb-credits-h">Credits.</h2>

          <div className="lb-datapage">
            <div className="lb-datapage-photo">
              <img
                src={`${IMG}/map-portrait.jpg`}
                alt="Liutciia Berkutova in a black leather jacket in front of a world map"
                style={{ aspectRatio: "1284 / 1584" }}
              />
            </div>
            <dl>
              <div>
                <dt>Type / Issue</dt>
                <dd>The November Issue · Vol. XIII</dd>
              </div>
              <div>
                <dt>Surname</dt>
                <dd>Berkutova</dd>
              </div>
              <div>
                <dt>Given name</dt>
                <dd>Liutciia</dd>
              </div>
              <div>
                <dt>Born</dt>
                <dd>1990 · Izhevsk, Udmurtia</dd>
              </div>
              <div>
                <dt>Occupation</dt>
                <dd>Founder, WorldZen</dd>
              </div>
              <div>
                <dt>Date of issue</dt>
                <dd>November 2026</dd>
              </div>
            </dl>
          </div>

          <ul className="lb-credits">
            {novemberCredits("Liutciia Berkutova").map(([role, name]) => (
              <li key={role}>
                <span>{role}</span>
                <b>{name}</b>
              </li>
            ))}
          </ul>

          <div className="lb-imprint">
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <p>
              <b>Fortiora Group LLC</b>
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · thefortiora.com
            </p>
          </div>
          <p className="lb-rights">
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
          <p className="lb-mrz">
            P&lt;PCXIII&lt;BERKUTOVA&lt;&lt;LIUTCIIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            <br />
            WORLDZEN&lt;&lt;NOV2026&lt;&lt;FORTIORA&lt;GROUP&lt;LLC&lt;&lt;&lt;&lt;&lt;&lt;13
          </p>
        </div>
      </article>

      {/* ============================================== 04 · FROM THE EDITORS */}
      <article className="mag-page lb lb-sand">
        <Eagle className="lb-ghost-eagle" />
        <div className="lb-well">
          <p className="lb-kicker">From the Editors</p>
          <h2 className="lb-head" style={{ fontSize: 56 }}>
            Born with the name of an eagle.
          </h2>
          <div className="lb-ed-pull">
            <p>I could have passed along a phone number. Instead, I organized an event.</p>
            <small>Liutciia Berkutova, on the desert outing that became GulfDzen</small>
          </div>
          <Flow size={19} lead={1.56} drop style={{ marginTop: 20 }}>
            <p>
              In July 2020 the Russian Embassy announced an evacuation flight out of Saudi Arabia.
              Liutciia Berkutova had a way home. She did not board. Twenty people had come to the
              first desert gathering she organized around a local pilot&apos;s small aircraft, and
              the business that grew out of it, GulfDzen, had added desert picnics, barbecues and
              transport for groups. She stayed at her own risk and kept building.
            </p>
            <p>
              That decision is the hinge of the essay that follows. It is not the whole of it. She
              was born in Izhevsk in 1990, a year before the Soviet Union ceased to exist, and
              grew up there. She worked a year as an
              economist. Then a season with Coral Travel in Phuket, then about a year and a half
              as a croupier in Cyprus. February 2022 brought serious investment losses, and she
              stopped operating GulfDzen. In October 2024 she was back in the Kingdom on a
              business visa, working the opening of Sindalah.
            </p>
            <p>
              This year she reached Makkah on June 12, the anniversary of her hometown&apos;s
              founding. Then came WorldZen, which helps people with visas, relocation and
              international travel. She registered it in Russky Vozhoy, the Udmurt village she moved to after returning from Saudi Arabia.
            </p>
            <p>
              We asked her to tell it herself. She wrote it year by year, and we have printed it
              that way, from page six, under her own headings and in her own order. Her surname
              comes from berkut, the Russian name for the golden eagle. She mentions it once.
            </p>
          </Flow>
          <div className="lb-figs">
            <div>
              <b>1990</b>
              <span>Born in Izhevsk, Udmurtia</span>
            </div>
            <div>
              <b>2008</b>
              <span>First work in tourism, while studying</span>
            </div>
            <div>
              <b>July 2020</b>
              <span>The evacuation flight she let leave</span>
            </div>
            <div>
              <b>2026</b>
              <span>WorldZen, registered in Russky Vozhoy</span>
            </div>
          </div>
          <Folio n="04" section="From the Editors" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER PHOTO */}
      <article className="mag-page lb lb-mid">
        <div className="lb-opener-photo">
          <img
            src={`${IMG}/gold-mask.jpg`}
            alt="Liutciia Berkutova with gold leaf painted across her eyes"
            style={{ aspectRatio: "1127 / 1396" }}
          />
          <div className="lb-opener-bar">
            <span>The Feature</span>
            <p>Gold leaf across the eyes. Liutciia Berkutova, Founder of WorldZen.</p>
            <b>05</b>
          </div>
        </div>
      </article>

      {/* ============================================== 06 · OPENER TYPE */}
      <article className="mag-page lb lb-sand">
        <Graticule className="lb-grat is-ink" />
        <div className="lb-well">
          <p className="lb-kicker">The Feature · In her own words</p>
          <h1 className="lb-opener-h">
            From a girl in Izhevsk to the founder of an <em>international company</em> without
            borders
          </h1>
          <p className="lb-dek">
            Eighteen years. A world of reinvention. One belief: freedom begins with an idea in your
            mind.
          </p>
          <p className="lb-byline">
            <span>By Liutciia Berkutova</span>
            <i />
            <span>Founder of WorldZen</span>
          </p>
          <p className="lb-lede">
            I once missed an evacuation flight on purpose. I built an aviation-adventure business
            while stranded in Saudi Arabia, lost it, and began again. But the most unlikely part of
            my story is not what happened in the desert. It is where the journey began: Izhevsk,
            in Russia.
          </p>
          <YearHead year="1990" title="The Girl Who Believed in Miracles" place="Izhevsk · Udmurtia" />
          <Flow size={18.8} lead={1.54} drop style={{ marginTop: 18 }}>
            <p>
              I was born in 1990 in Izhevsk, the capital of Udmurtia, Russia, in the final years of
              the Soviet Union. Izhevsk – city known worldwide for its connection to Mikhail
              Kalashnikov, the designer of the AK-47. A year later, the Soviet Union would cease to
              exist. In the Chinese zodiac, 1990 was the Year of the Metal Horse. Looking back, I
              like its symbolism: movement, independence, and the determination to keep going.
            </p>
            <p>
              Izhevsk is known as Russia&apos;s arms capital, yet it still has no major
              international airport. I grew up in Izhevsk.
              International capitals and distant oceans seemed like places from another universe.
            </p>
            <p>
              I did not grow up with influential connections or an inherited business. What I had
              was curiosity. Even as a girl, I sensed that the world was much larger than the one
              immediately around me. I wanted to know how other people lived, what opportunities
              existed beyond familiar borders, and whether the place where you were born really
              had to determine your future.
            </p>
          </Flow>
          <Folio n="06" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 07 · 1990 · 2008 · 2015 */}
      <article className="mag-page lb lb-paper">
        <p className="lb-ghost-word">Berkut</p>
        <div className="lb-well">
          <div className="lb-eagle-pull">
            <Eagle className="lb-eagle-sm" />
            <p>
              I was born with the name of an eagle, and I grew up determined to find my own
              wings.
            </p>
          </div>
          <Flow size={20.2} lead={1.62}>
            <p>
              My nationality is Tatar. My surname, Berkutova, carries a symbolism that feels almost
              destined. “Berkut” is the Russian name for the golden eagle — one of the world’s
              largest and most powerful birds of prey, known for its strength, extraordinary
              vision, and ability to soar high above the mountains. To me, the golden eagle
              represents freedom, courage, and independence. Perhaps it is no coincidence that I
              have spent my life refusing to let borders define how far I can go. I was born with
              the name of an eagle, and I grew up determined to find my own wings.
            </p>
            <YearHead year="2008" title="My First Passport to Possibility" />
            <p>
              My first professional experiences in tourism began in 2008, while I was studying. I
              learned about package holidays and booking systems, helped my family arrange
              international passports, and began organizing trips.
            </p>
            <p>
              One of my proudest early experiences was organizing my sister&apos;s wedding in Sri
              Lanka. It wasn&apos;t simply a destination celebration. For me, it was proof that a
              young woman from Udmurtia could turn a distant dream into a real family memory.
            </p>
            <YearHead year="2015" title="I Chose the World Over the Office" />
            <p>
              After university, I worked for a year as an economist, including work on tenders. It
              was a sensible career, but ten hours at a computer made me wonder whether this was
              really the life I wanted.
            </p>
            <p>
              In 2015, I moved to Phuket, Thailand, to work in tourism with Coral Travel. After a
              season, I moved to Cyprus, trained as a croupier, and spent about a year and a half
              working in a casino.
            </p>
            <p>
              Cyprus was beautiful, but the irony wasn&apos;t lost on me: I had moved somewhere
              sunny and still spent my working life indoors. I didn&apos;t want to spend my days
              watching a clock, whether at an office desk or a casino table.
            </p>
          </Flow>
          <Folio n="07" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 08 · RED COAT */}
      <article className="mag-page lb lb-mid">
        <div className="lb-side">
          <img
            className="lb-side-img"
            src={`${IMG}/red-coat.jpg`}
            alt="Liutciia Berkutova in a red coat with a fur collar and a red handbag"
            style={{ aspectRatio: "941 / 1672" }}
          />
          <div className="lb-side-panel">
            <p className="lb-kicker">2015 · Phuket → Cyprus</p>
            <q className="lb-side-q">
              I didn&apos;t want to spend my days watching a clock, whether at an office desk or
              a casino table.
            </q>
            <div className="lb-pass">
              <div>
                <small>From</small>
                <b>Desk</b>
              </div>
              <span>✈</span>
              <div>
                <small>To</small>
                <b>World</b>
              </div>
              <p>A year as an economist, a season in Phuket, a year and a half in Cyprus.</p>
              <Bars n={20} seed={8} />
            </div>
            <Stamp id="s0" shape="circle" top="Phuket · Coral Travel" mid="2015" bot="then Cyprus · croupier" ink="gold" rotate={-9} />
            <p className="lb-side-cap">In red, with fur at the collar.</p>
            <p className="lb-side-folio">
              PrimeCrest · 08
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 09 · 2019 SAUDI ARABIA */}
      <article className="mag-page lb lb-mid">
        <Graticule className="lb-grat" />
        <div className="lb-well">
          <YearHead
            year="2019"
            title="Saudi Arabia: A Country Opens, Then the World Closes"
            place="Riyadh · AlUla · Dammam"
          />
          <Flow size={16.6} lead={1.5} drop className="is-light" style={{ marginTop: 18 }}>
            <p>
              In 2019, Saudi Arabia opened a new chapter in international tourism. I wanted to see
              this rapidly changing country for myself. I worked on tourism and entertainment
              projects connected with Riyadh Season and Winter at Tantora in AlUla, then continued
              exploring.
            </p>
            <p>
              Then came the pandemic. Borders closed and I found myself stranded in Saudi Arabia. I
              contacted the Russian Embassy, which helped me with accommodation and food. I also
              assisted with administrative tasks involving documents and visa applications for
              people pursuing education or business opportunities in the Kingdom.
            </p>
            <p>
              Without realizing it, I was already doing the kind of practical cross-border work
              that would eventually inspire WorldZen.
            </p>
            <p>
              During this period, a local pilot I encountered through Couchsurfing invited me to
              try flying in a small recreational aircraft. I went, filmed the experience, and
              shared it on Instagram. People immediately began asking where they could book the
              same adventure.
            </p>
            <p>I could have passed along a phone number. Instead, I organized an event.</p>
            <p>
              Twenty people came to the first gathering. I bought water, snacks, and picnic mats,
              and created a desert outing around the flights. What happened that day felt magical:
              aircraft overhead, excited guests, strangers becoming friends, and an experience that
              people couldn&apos;t wait to tell others about.
            </p>
            <p>That was the beginning of GulfDzen.</p>
            <p>
              I created a logo, launched an Instagram presence, and promoted the experiences
              through Facebook groups and messaging communities. Customers recommended us to
              friends. A local Saudi entrepreneur offered a booking website and a way to operate
              through his licensed business in exchange for commission on ticket sales. We added
              desert picnics, live cooking, barbecues, parties, and transport for groups.
            </p>
            <p>A single Instagram story had become a real tourism operation.</p>
            <p>
              In July 2020, the embassy announced an evacuation flight to Russia. I was expected to
              leave, and the temporary support I had received could not continue indefinitely. I
              had a way home.
            </p>
          </Flow>
          <div className="lb-bigpull">
            <span>“</span>
            <p>I did not board the flight.</p>
            <small>July 2020 · the evacuation flight to Russia</small>
          </div>
          <Flow size={16.6} lead={1.5} className="is-light">
            <p>
              I decided to remain in Saudi Arabia at my own risk and continue building the
              business. I expanded our activities, including aviation experiences around Dammam
              and the Arabian Gulf. Within roughly a year, I had earned enough to purchase an
              apartment, buy my first iPhone and a drone, and begin investing in cryptocurrency.
            </p>
          </Flow>
          <Folio n="09" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 10 · HORSE + 2021 */}
      <article className="mag-page lb lb-sand">
        <div className="lb-topphoto">
          <img
            src={`${IMG}/white-horse.jpg`}
            alt="Liutciia Berkutova in a long red dress on a white horse in the desert"
            style={{ aspectRatio: "948 / 700" }}
          />
          <p className="lb-topphoto-cap">Red dress, white horse, open sand.</p>
        </div>
        <div className="lb-well is-under">
          <YearHead year="2021" title="Maldives, Turkey, and the Road to Dubai" />
          <Flow size={19.2} lead={1.54} style={{ marginTop: 14 }}>
            <p>
              When Saudi Arabia began allowing stranded visitors to depart, I traveled to the
              Maldives, one of the destinations open during the pandemic. My team remained in Saudi
              Arabia and I continued managing the business remotely.
            </p>
            <p>
              I spent three months learning to dive, flying my drone, and creating content above
              and below the water. The absence of long commutes and constant distractions gave me
              time to work and learn.
            </p>
            <p>
              When my stay ended, I traveled to Dubai, hoping I would soon be able to return to
              Saudi Arabia. That proved difficult. I went back to Russia for the summer and
              continued working remotely.
            </p>
            <p>
              In August 2021, I traveled with my mother to Ölüdeniz, Turkey, where I went
              paragliding. News that Saudi Arabia was reopening gave me hope, but the
              vaccination-entry requirements were an obstacle: I had received Sputnik V.
            </p>
          </Flow>
          <Folio n="10" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 11 · 2022 · 2024 · 2026 */}
      <article className="mag-page lb lb-paper">
        <div className="lb-well">
          <YearHead year="2022" title="Losing Almost Everything" />
          <Flow size={15.6} lead={1.5} drop style={{ marginTop: 12 }}>
            <p>
              At around thirty, I seemed to have achieved the life I once dreamed of. I had bought
              property, invested in cryptocurrency and the US stock market, had some passive
              income, and still had my Saudi tourism business.
            </p>
            <p>Then, in February 2022, everything changed.</p>
            <p>
              I suffered serious investment losses, including money tied up in schemes that failed.
              Meanwhile, my long absence from Saudi Arabia had exposed my business to problems of
              trust and financial misconduct within the team. Eventually I made the painful
              decision to stop operating GulfDzen.
            </p>
            <p>From the outside, my life still looked beautiful. Inside, I was starting again.</p>
            <p>
              I became a freelancer and content creator, working on international exhibitions,
              conferences, and events in Dubai and Abu Dhabi. I discovered that specialized
              assignments could sometimes pay more than conventional full-time work while giving
              me greater freedom over my schedule.
            </p>
            <p>
              I also built a wider international network. Through friends, I gained access to
              discounted staff-travel opportunities with airlines and continued exploring the
              world: Mauritius, Seychelles, Sri Lanka, Kenya, Tanzania, Lebanon, Turkey, and more.
            </p>
          </Flow>
          <div className="lb-split-pull">
            <p>From the outside, my life still looked beautiful. Inside, I was starting again.</p>
          </div>
          <div className="lb-two">
            <div>
              <YearHead year="2024" title="Saudi Arabia, the Second Time" place="Sindalah · NEOM" />
              <Flow size={16.2} lead={1.56} cols={1} style={{ marginTop: 10 }}>
                <p>
                  In October 2024, I returned to Saudi Arabia, this time on a business visa to work
                  at the opening of Sindalah, NEOM&apos;s luxury island destination.
                </p>
                <p>
                  The contrast was extraordinary. During the pandemic I had been stranded in the
                  Kingdom, organizing small-aircraft adventures. Now I was working on a major
                  international destination opening. Our travel and accommodation were arranged,
                  including a camp with facilities such as a pool and yoga space.
                </p>
                <p>
                  My assignment was short and involved welcoming guests and supporting the event
                  atmosphere. In approximately a week I earned more than $5,000. I hoped to remain
                  involved longer, but the assignment ended.
                </p>
              </Flow>
              <div className="lb-stub">
                <div>
                  <small>Destination</small>
                  <b>Sindalah</b>
                </div>
                <div>
                  <small>Date</small>
                  <b>Oct 2024</b>
                </div>
                <div>
                  <small>Visa</small>
                  <b>Business</b>
                </div>
                <div>
                  <small>Welcoming</small>
                  <b>Guests</b>
                </div>
              </div>
            </div>
            <div>
              <YearHead year="2026" title="The Question of Freedom" place="Dubai" />
              <Flow size={15.6} lead={1.5} cols={1} style={{ marginTop: 10 }}>
                <p>
                  In 2026, the Year of the Fire Horse, I marked five years of life in the Emirates
                  and invited my parents to Dubai to celebrate.
                </p>
                <p>
                  My personal life also presented a choice. I had a relationship and received a
                  marriage proposal, but the expectations attached to that future did not align
                  with my values. I was being asked to withdraw from social media, limit my
                  independence, and accept a domestic role I had not chosen.
                </p>
                <p>
                  I respect women who freely choose that life. But after everything I had built, I
                  could not give up the right to decide how to live my own.
                </p>
                <p>
                  I realized that even a powerful passport or a comfortable home means little if
                  the person holding it cannot make her own decisions.
                </p>
              </Flow>
              <div className="lb-stub">
                <div>
                  <small>Place</small>
                  <b>Dubai</b>
                </div>
                <div>
                  <small>Year</small>
                  <b>Fire Horse</b>
                </div>
                <div>
                  <small>Marked</small>
                  <b>Five years</b>
                </div>
                <div>
                  <small>Invited</small>
                  <b>Parents</b>
                </div>
              </div>
            </div>
          </div>
          <Folio n="11" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 12 · SURF */}
      <article className="mag-page lb lb-bleed">
        <img
          className="lb-bleed-img"
          src={`${IMG}/surf.jpg`}
          alt="Liutciia Berkutova in a wetsuit with a surfboard on a beach"
        />
        <div className="lb-bleed-scrim" />
        <div className="lb-bleed-cap">
          <p className="lb-kicker">South Africa · 2026</p>
          <q>I stayed in Africa. I learned to surf.</q>
          <p>
            The Gulf events calendar was quiet at the start of Ramadan, and flights were being
            cancelled. She stayed.
          </p>
          <b>12</b>
        </div>
      </article>

      {/* ============================================== 13 · AFRICA */}
      <article className="mag-page lb lb-sand">
        <div className="lb-well">
          <YearHead year="2026" title="Africa: The Holiday That Became Another Beginning" place="Cape Town · Namibia" />
          <div className="lb-dates">
            <span>
              <b>18 Feb</b> Flew to South Africa
            </span>
            <span>
              <b>23 Feb</b> Flight above Cape Town
            </span>
            <span>
              <b>28 Feb</b> Black Coffee, flights cancelled
            </span>
          </div>
          <figure className="lb-fig">
            <img
              src={`${IMG}/bungee.jpg`}
              alt="Liutciia Berkutova in a harness leaping from a platform over a forested gorge"
              style={{ aspectRatio: "1448 / 1086" }}
            />
            <figcaption>A first bungee jump. Arms out.</figcaption>
          </figure>
          <Flow size={14.4} lead={1.48} drop>
            <p>
              On February 18, 2026, at the beginning of Ramadan, I flew to South Africa. The Gulf
              events calendar was quieter, and I wanted to use the time to explore.
            </p>
            <p>
              On February 23, Russia&apos;s Defender of the Fatherland Day, I took a small-aircraft
              sightseeing flight above Cape Town. On February 28, while attending a performance by
              Black Coffee, escalating instability in the Middle East complicated travel and led to
              flight cancellations.
            </p>
            <p>
              I had previously seen Black Coffee perform at the Sindalah opening while working.
              This time I was there as a guest. It felt like one of those strange moments when
              different chapters of life suddenly meet.
            </p>
            <p>
              I stayed in Africa. I learned to surf, went cage diving with great white sharks, swam
              with seals, completed my first bungee jump, and traveled to Namibia to study
              kitesurfing. I also volunteered in a surf-related community setting.
            </p>
            <p>
              I returned to South Africa and attended AfrikaBurn. Its spirit of participation, art,
              and community left me with new ideas about what people can create together.
            </p>
          </Flow>
          <Folio n="13" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 14 · MAKKAH */}
      <article className="mag-page lb lb-mid">
        <Graticule className="lb-grat" arcs={false} />
        <div className="lb-well">
          <YearHead year="2026" title="Makkah: What Faith Means to Me" place="Friday, June 12" />
          <div className="lb-makkah">
            <Flow size={16.4} lead={1.54} cols={1} drop className="is-light">
              <p>
                When I returned to Dubai, work was still limited. Then an Indian Muslim
                acquaintance who had once joined my aviation events in Saudi Arabia offered to help
                me make a pilgrimage. He supported the organization of my journey.
              </p>
              <p>
                On Friday, June 12, 2026 — Russia Day and the anniversary of the founding of my
                hometown, Izhevsk — I reached Makkah.
              </p>
              <p>
                I had crossed oceans and visited spectacular destinations, but this journey was
                different. It was about gratitude, humility, and the people who had helped me when
                I needed it most.
              </p>
              <p>
                For me, Islam has never been defined by clothing, food, or drink. It is not simply
                about outward appearances or restrictions. It is about supporting people,
                especially in their hardest moments, and helping others from a pure heart, with
                good intentions and without expecting anything in return. Faith, to me, is measured
                by compassion and the good we bring into the lives of others.
              </p>
              <p>
                After my pilgrimage, I made another deeply personal decision: I got a tattoo on my
                neck as a symbol of freedom. For me, it was never simply about appearance. It
                became a reminder that my life belongs to me, that faith is something I carry in my
                heart, and that true freedom begins within. I had traveled across continents
                searching for opportunities, experiences, and meaning. But perhaps the most
                important freedom I discovered was the freedom to be myself.
              </p>
            </Flow>
            <div className="lb-makkah-side">
              <img
                src={`${IMG}/makkah.jpg`}
                alt="Liutciia Berkutova in a black abaya and headscarf at the Grand Mosque in Makkah"
                style={{ aspectRatio: "927 / 1236" }}
              />
              <p className="lb-makkah-cap">The Grand Mosque, Makkah.</p>
              <q className="lb-makkah-q">
                Faith, to me, is measured by compassion and the good we bring into the lives of
                others.
              </q>
            </div>
          </div>
          <Folio n="14" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 15 · VOYAGE AD · LEFT */}
      <article className="mag-page lb lb-ad">
        <VoyageArt shift={0} />
        <div className="lb-well">
          <p className="lb-ad-k">Fortiora Group · Advertisement</p>
          <div className="lb-ad-lock">
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora</b>
              <span>Voyage</span>
            </div>
          </div>
          <h2 className="lb-ad-h">
            The trip changes. <em>The desk has already moved.</em>
          </h2>
          <p className="lb-ad-dek">
            AI travel-desk agents for companies. They plan the itinerary, rebook when a flight
            falls through, remind travellers about visas and documents while there is still time to
            act, and capture the expense while the receipt is still in hand.
          </p>
          <ol className="lb-ad-caps">
            <li>
              <b>01</b>
              <div>
                <h4>Itinerary planning</h4>
                <p>
                  Flights, hotels and ground transport assembled against your travel policy and
                  sent to the traveller as one plan.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Rebooking on disruption</h4>
                <p>
                  A cancellation or a missed connection starts a rebooking run straight away, with
                  options laid out for the traveller to approve.
                </p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>Visa and document reminders</h4>
                <p>
                  Entry rules, passport validity and permits checked against each trip, with
                  reminders sent while there is time to do something about them.
                </p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Expense capture</h4>
                <p>
                  Receipts photographed or forwarded, read, categorised and filed against the trip
                  they belong to.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </article>

      {/* ============================================== 16 · VOYAGE AD · RIGHT */}
      <article className="mag-page lb lb-ad">
        <VoyageArt shift={-840} />
        <div className="lb-well">
          <div className="lb-console">
            <div className="lb-console-bar">
              <i />
              <i />
              <i />
              <span>Voyage · Travel desk</span>
              <em>Agent online</em>
            </div>
            <div className="lb-console-body">
              <nav>
                <b>Desk</b>
                <span className="is-on">Trips</span>
                <span>Disruptions</span>
                <span>Documents</span>
                <span>Expenses</span>
                <span>Policy</span>
                <span>Run log</span>
              </nav>
              <div className="lb-console-main">
                <div className="lb-trip">
                  <small>Trip · Traveller 01</small>
                  <h5>DXB → JNB → WDH</h5>
                  <ol>
                    <li>
                      <b>Mon 08:40</b>
                      <span>Flight DXB → JNB · seat held</span>
                    </li>
                    <li>
                      <b>Mon 16:10</b>
                      <span>Car to hotel · confirmed</span>
                    </li>
                    <li>
                      <b>Wed 09:00</b>
                      <span>Client meeting · calendar synced</span>
                    </li>
                    <li>
                      <b>Thu 07:15</b>
                      <span>Flight JNB → WDH</span>
                    </li>
                  </ol>
                </div>
                <div className="lb-alert">
                  <small>Disruption · Thu 07:15 cancelled</small>
                  <h5>Rebooking run started</h5>
                  <div className="lb-opts">
                    <span>
                      <b>A</b> Thu 11:05 · direct
                    </span>
                    <span>
                      <b>B</b> Thu 14:30 · via CPT
                    </span>
                    <span>
                      <b>C</b> Fri 07:15 · hotel extended
                    </span>
                  </div>
                  <em>Awaiting traveller approval</em>
                </div>
                <div className="lb-row2">
                  <div className="lb-docs">
                    <small>Documents</small>
                    <p>
                      <i className="ok" />
                      Passport · validity checked
                    </p>
                    <p>
                      <i className="due" />
                      Entry visa · reminder sent
                    </p>
                    <p>
                      <i className="ok" />
                      Insurance letter · attached
                    </p>
                  </div>
                  <div className="lb-exp">
                    <small>Expenses</small>
                    <p>
                      Taxi receipt <b>captured</b>
                    </p>
                    <p>
                      Hotel folio <b>filed to trip</b>
                    </p>
                    <p>
                      Meal receipt <b>categorised</b>
                    </p>
                  </div>
                </div>
                <div className="lb-log">
                  <p>
                    <b>agent</b> itinerary built against policy
                  </p>
                  <p>
                    <b>agent</b> cancellation detected · 3 options found
                  </p>
                  <p>
                    <b>agent</b> visa reminder sent to traveller
                  </p>
                  <p>
                    <b>agent</b> receipt read · filed to trip
                  </p>
                  <p>
                    <b>agent</b> hotel night added · policy check passed
                  </p>
                  <p>
                    <b>agent</b> calendar updated · meeting kept
                  </p>
                  <p>
                    <b>agent</b> passport expiry checked against return date
                  </p>
                  <p>
                    <b>desk</b> traveller approved option A
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lb-ad-foot">
            <div>
              <h3>Put an agent on the travel desk.</h3>
              <p>
                <b>Fortiora Voyage</b> · from Fortiora Group
                <br />
                Hello@thefortiora.com · thefortiora.com
              </p>
            </div>
            <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
          </div>
        </div>
      </article>

      {/* ============================================== 17 · CHINA · HOME · WORLDZEN */}
      <article className="mag-page lb lb-paper">
        <div className="lb-well">
          <div className="lb-china">
            <figure className="lb-fig is-side">
              <img
                src={`${IMG}/chongqing-neon.jpg`}
                alt="Liutciia Berkutova with an illuminated neon braid against a city at night"
                style={{ aspectRatio: "1053 / 1404" }}
              />
              <figcaption>The neon braid, and a city at night.</figcaption>
            </figure>
            <div>
              <YearHead year="2026" title="China, a Neon Braid, and the Return Home" place="Chongqing · Udmurtia" />
              <Flow size={17.6} lead={1.53} cols={1} style={{ marginTop: 10 }}>
                <p>
                  After the pilgrimage, another Muslim friend gave me the opportunity to visit
                  China. In Chongqing, I attended a major entertainment and networking activity
                  and, on July 14, attracted attention with a dramatic illuminated neon braid.
                </p>
                <p>
                  I have always loved creativity and style. To me, self-expression is another form
                  of freedom.
                </p>
                <p>
                  Then I returned to Russia to visit my family and look after my health, as I often
                  do in summer. This time I experienced air-raid alerts and drone-related security
                  warnings at home. Transport disruptions and the need to consider safety made me
                  think about the people trying to find stability for themselves and their
                  families.
                </p>
              </Flow>
            </div>
          </div>
          <YearHead year="2026" title="WorldZen: From Izhevsk to a Company Without Borders" />
          <Flow size={17.6} lead={1.53} drop style={{ marginTop: 12 }}>
            <p>
              That idea became WorldZen. The name brings together “World” and “Zen”: global
              possibilities and inner peace. To me, it means the freedom to explore the world,
              choose where you belong and feel at home within yourself, wherever life takes you.
            </p>
            <p>
              I wanted to help people navigate visas, relocation, and international travel with
              less stress, wasted time, and unnecessary expense. Some clients needed a holiday.
              Others wanted to move for work, establish residency, or start a new chapter. Others
              wanted to discover Russia.
            </p>
            <p>
              I registered my entrepreneurial activity in Russky Vozhoy, Udmurtia, the village
              I moved to after returning from Saudi Arabia. I wanted to build an international
              business from Udmurtia, where my story began. Potential regional tax incentives for qualifying new
              entrepreneurs were another consideration, subject to the applicable rules.
            </p>
            <p>
              Within months, I was helping travelers, people preparing for relocation, and clients
              considering new countries. I also began developing a broader technological vision: a
              digital platform that could help people understand mobility pathways, organize
              documentation, and make better-informed decisions.
            </p>
            <p>I wasn&apos;t beginning from zero. I was beginning with eighteen years of experience.</p>
          </Flow>
          <Folio n="17" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 18 · TENNIS · WHAT PHOTOGRAPHS DO NOT SHOW */}
      <article className="mag-page lb lb-mid">
        <div className="lb-tennis">
          <p className="lb-tennis-spine">People · Real opportunities · Beyond borders</p>
          <img
            className="lb-tennis-img"
            src={`${IMG}/tennis.jpg`}
            alt="Liutciia Berkutova in a white tennis outfit, visor and yellow trainers, one arm raised"
            style={{ aspectRatio: "1025 / 1535" }}
          />
          <div className="lb-tennis-card">
            <div className="lb-wz">
              <img src={`${IMG}/worldzen-logo.jpg`} alt="WorldZen. People. Real opportunities. Beyond borders." style={{ aspectRatio: "887 / 443" }} />
            </div>
            <p className="lb-kicker">What the photographs leave out</p>
            <p className="lb-tennis-q">
              People sometimes see my photographs — beaches, airplanes, fashion, Dubai — and
              assume someone wealthy must be financing the lifestyle. I know those stereotypes. I
              have heard them directed at me.
            </p>
            <p className="lb-tennis-q is-b">
              What photographs do not show are the long working hours, the lost investments, the
              risks, the setbacks, and the personal work behind my health, appearance, knowledge,
              and independence.
            </p>
            <p className="lb-tennis-folio">PrimeCrest · 18</p>
          </div>
        </div>
      </article>

      {/* ============================================== 19 · THE LEGACY */}
      <article className="mag-page lb lb-sand">
        <div className="lb-well">
          <p className="lb-kicker">The close</p>
          <h2 className="lb-head" style={{ fontSize: 44 }}>
            The Legacy I Dream of Leaving
          </h2>
          <div className="lb-legacy">
            <Flow size={17} lead={1.5} cols={1} drop>
              <p>
                One day, I want to establish a charitable foundation for women who have survived
                abuse — women who need safety, practical support, dignity, and the opportunity to
                rebuild independent lives. I want them to know that their past does not have to
                determine their future.
              </p>
              <p>
                I also dream of building a mosque in the Middle East. Islam and the kindness of
                people I met along the way have supported me through some of the hardest chapters
                of my life. I want this mosque to be an enduring expression of gratitude, faith,
                and service to others — not a monument to personal success.
              </p>
              <p>
                I dream of creating BerkutZen, my own international airline, with affordable
                flights that connect countries and people — including direct international routes
                from Izhevsk, the city where I was born. I want children from places like mine to
                grow up knowing that the world is within their reach, not reserved for those born
                in wealthy capitals.
              </p>
              <p>
                And I want to create the WorldZen mobile visa and relocation application: a
                practical digital tool that helps people discover suitable visa pathways, prepare
                documents, understand requirements, and reduce the stress, time, and financial
                resources consumed by international mobility. I want accessible products that give
                people more freedom to choose where they live, work, and build their futures.
              </p>
              <p>
                If I could speak to the little girl from Udmurtia who believed in miracles, I would
                tell her this: you will cross oceans, lose things you thought were secure, trust
                the wrong people, meet strangers who become friends, and begin again more than
                once.
              </p>
              <p>
                I want to be remembered as a little girl from Izhevsk who believed in
                miracles, found the courage to make one happen, and then helped others believe that
                the impossible is possible.
              </p>
            </Flow>
            <div className="lb-legacy-side">
              <img
                src={`${IMG}/gold-dress.jpg`}
                alt="Liutciia Berkutova in a gold dress, long gloves and a white hat"
                style={{ aspectRatio: "1025 / 1535" }}
              />
              <div className="lb-closer">
                <Eagle className="lb-eagle-xs" />
                <p>Freedom begins with an idea in your mind.</p>
                <small>WorldZen — Explore. Relocate. Belong</small>
              </div>
              <ol className="lb-plans">
                <li>
                  <b>A foundation</b> for women who have survived abuse
                </li>
                <li>
                  <b>A mosque</b> in the Middle East
                </li>
                <li>
                  <b>BerkutZen</b>, an airline with routes from Izhevsk
                </li>
                <li>
                  <b>The WorldZen app</b> for visas and relocation
                </li>
              </ol>
            </div>
          </div>
          <Folio n="19" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 20 · THE STAMPS */}
      <article className="mag-page lb lb-visa">
        <Graticule className="lb-grat is-ink" />
        <div className="lb-well">
          <div className="lb-visa-head">
            <div>
              <p className="lb-kicker">The Record · Visas</p>
              <h2 className="lb-head" style={{ fontSize: 46 }}>
                1990 to 2026, in ink.
              </h2>
            </div>
            <p>
              Every date and place here is from her essay. Where she gave only a year, the stamp
              gives only a year.
            </p>
          </div>
          <div className="lb-stamps">
            <div className="lb-st">
              <Stamp id="s1" shape="circle" top="Izhevsk · Udmurtia" mid="1990" bot="Year of the Metal Horse" ink="mid" rotate={-8} />
              <p>Born in the final years of the Soviet Union.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s2" shape="rect" top="Tourism · while studying" mid="2008" bot="Sri Lanka · a sister's wedding" ink="blue" rotate={4} />
              <p>Package holidays, booking systems, family passports.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s3" shape="oval" top="Phuket · Coral Travel" mid="2015" bot="then Cyprus · croupier" ink="gold" rotate={-5} />
              <p>A season in Thailand, about a year and a half in Cyprus.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s4" shape="oct" top="Riyadh Season · AlUla" mid="2019" bot="Saudi Arabia" ink="gold" rotate={6} />
              <p>Winter at Tantora. Then the borders closed.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s5" shape="rect" top="Evacuation flight" mid="NOT BOARDED" bot="July 2020 · GulfDzen" ink="red" rotate={-10} />
              <p>She stayed at her own risk and kept building.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s6" shape="circle" top="Maldives · Dubai" mid="2021" bot="Ölüdeniz · August" ink="blue" rotate={9} />
              <p>Three months of diving, then paragliding in Turkey.</p>
            </div>
            <div className="lb-st-strip">
              <span>Residence</span>
              <b>Russky Vozhoy · Udmurtia</b>
              <em>Moved to the village after returning from Saudi Arabia</em>
            </div>
            <div className="lb-st">
              <Stamp id="s7" shape="tri" top="February" mid="2022" bot="Starting again" ink="mid" rotate={-4} />
              <p>Investment losses. GulfDzen closed. Freelance in Dubai and Abu Dhabi.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s8" shape="oval" top="Sindalah · NEOM" mid="OCT 2024" bot="Business visa" ink="gold" rotate={5} />
              <p>The opening of the island, a week of work.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s9" shape="circle" top="South Africa · Cape Town" mid="18.02.26" bot="Namibia · AfrikaBurn" ink="red" rotate={-6} />
              <p>Surf, sharks, seals, a first bungee jump.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s10" shape="oct" top="Makkah" mid="12.06.26" bot="Russia Day · Friday" ink="mid" rotate={7} />
              <p>The anniversary of the founding of Izhevsk.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s11" shape="rect" top="Chongqing · China" mid="14.07.26" bot="The neon braid" ink="blue" rotate={-3} />
              <p>An entertainment and networking night.</p>
            </div>
            <div className="lb-st">
              <Stamp id="s12" shape="circle" top="Russky Vozhoy · Udmurtia" mid="WorldZen" bot="Registered · 2026" ink="gold" rotate={4} />
              <p>An international business, registered in Udmurtia.</p>
            </div>
          </div>
          <Folio n="20" section="The Record" />
        </div>
      </article>

      {/* ============================================== 21 · ATLAS AD */}
      <article className="mag-page lb lb-atlas">
        <div className="lb-well">
          <p className="lb-ad-k is-ink">Fortiora Group · Advertisement</p>
          <div className="lb-ad-lock is-ink">
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora</b>
              <span>Atlas</span>
            </div>
          </div>
          <h2 className="lb-atlas-h">
            Ask in your language. <em>Find it in all of them.</em>
          </h2>
          <p className="lb-atlas-dek">
            Enterprise knowledge search that reads across languages. A question asked in one comes
            back with answers drawn from documents written in others, each with the passage it
            came from.
          </p>
          <div className="lb-search">
            <div className="lb-search-bar">
              <span className="lb-search-ico" />
              <p>Which documents does a new hire need before their first trip abroad?</p>
              <em>EN</em>
            </div>
            <div className="lb-results">
              <div className="lb-res">
                <span className="lb-lang">AR</span>
                <div>
                  <h5>Travel policy · regional office</h5>
                  <p>
                    <mark>Passport valid for six months</mark> beyond the return date, and the
                    entry permit requested through the travel desk.
                  </p>
                  <small>Translated from Arabic · source passage linked</small>
                </div>
              </div>
              <div className="lb-res">
                <span className="lb-lang">RU</span>
                <div>
                  <h5>Onboarding checklist · operations</h5>
                  <p>
                    New staff complete the <mark>document checklist</mark> with HR before any
                    booking is made.
                  </p>
                  <small>Translated from Russian · source passage linked</small>
                </div>
              </div>
              <div className="lb-res">
                <span className="lb-lang">ZH</span>
                <div>
                  <h5>Supplier visit guide</h5>
                  <p>
                    An <mark>invitation letter</mark> is issued by the host team and attached to
                    the visa application.
                  </p>
                  <small>Translated from Chinese · source passage linked</small>
                </div>
              </div>
            </div>
          </div>
          <div className="lb-atlas-caps">
            <div>
              <b>Across languages</b>
              <span>One question, every language your documents are written in.</span>
            </div>
            <div>
              <b>Cited answers</b>
              <span>Every answer points to the passage it came from.</span>
            </div>
            <div>
              <b>Permission-aware</b>
              <span>People see only what they are already allowed to open.</span>
            </div>
            <div>
              <b>Connected</b>
              <span>Drives, wikis, tickets and shared folders, searched together.</span>
            </div>
          </div>
          <div className="lb-ad-foot is-ink">
            <div>
              <h3>Fortiora Atlas</h3>
              <p>
                Enterprise knowledge search, in every language your company writes in.
                <br />
                Hello@thefortiora.com · thefortiora.com
              </p>
            </div>
            <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" />
          </div>
        </div>
      </article>

      {/* ============================================== 22 · BE FEATURED */}
      <article className="mag-page lb lb-mid">
        <Graticule className="lb-grat" />
        <Eagle className="lb-ghost-eagle is-light" />
        <div className="lb-well">
          <div className="lb-feat-logo">
            <PrimeCrestMast tone="dark" tagline={false} />
          </div>
          <p className="lb-kicker">Be Featured · The next edition</p>
          <h2 className="lb-head is-light" style={{ fontSize: 64 }}>
            Your story, <em>on the record.</em>
          </h2>
          <p className="lb-feat-dek">
            PrimeCrest profiles founders and leaders in their own words: the year it turned, the
            decision nobody saw, the work behind the photograph. Nominate yourself or someone you
            know for an upcoming edition.
          </p>
          <div className="lb-boarding">
            <div className="lb-boarding-main">
              <p className="lb-boarding-k">Boarding pass · PrimeCrest</p>
              <div className="lb-boarding-grid">
                <div>
                  <small>Passenger</small>
                  <b>You</b>
                </div>
                <div>
                  <small>Destination</small>
                  <b>The next edition</b>
                </div>
                <div>
                  <small>Gate</small>
                  <b>theprimecrest.com</b>
                </div>
                <div>
                  <small>Class</small>
                  <b>Leaders</b>
                </div>
              </div>
              <ol className="lb-boarding-steps">
                <li>
                  <b>01</b> Nominate. Tell the desk who, and why this year.
                </li>
                <li>
                  <b>02</b> Sit for the interview. Written or spoken, answered in full.
                </li>
                <li>
                  <b>03</b> Read it in print and on the page, with your photographs whole.
                </li>
              </ol>
            </div>
            <div className="lb-boarding-stub">
              <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
              <small>Scan to be featured</small>
            </div>
          </div>
          <div className="lb-feat-stamps">
            <Stamp id="f1" shape="circle" top="PrimeCrest · Interview" mid="In full" bot="Your own words" ink="gold" rotate={-8} />
            <Stamp id="f2" shape="rect" top="Portrait plate" mid="WHOLE" bot="Never cropped" ink="gold" rotate={4} />
            <Stamp id="f3" shape="oval" top="The record" mid="2026" bot="Dates and places kept" ink="gold" rotate={-4} />
          </div>
          <p className="lb-feat-foot">theprimecrest.com · Hello@thefortiora.com</p>
          <Folio n="22" section="Be Featured" />
        </div>
      </article>

      {/* ============================================== 23 · BACK */}
      <NovemberBack scope="lb" vol="XIII" />
    </>
  );
}

/** Night-flight art for the Voyage spread: graticule, arcs, runway lights. */
function VoyageArt({ shift }: { shift: number }) {
  return (
    <div className="lb-ad-art" aria-hidden>
      <svg viewBox="0 0 1680 1120" width={1680} height={1120} style={{ left: shift }}>
        <defs>
          <radialGradient id="lbvGlow" cx="50%" cy="62%" r="60%">
            <stop offset="0%" stopColor="#1f63b0" stopOpacity="0.42" />
            <stop offset="60%" stopColor="#0f2350" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a1a3a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1680" height="1120" fill="#0a1a3a" />
        <rect width="1680" height="1120" fill="url(#lbvGlow)" />
        <g fill="none" stroke="#c9a24a" strokeOpacity="0.12" strokeWidth="1">
          {Array.from({ length: 16 }, (_, i) => (
            <ellipse key={`m${i}`} cx="840" cy="700" rx={50 + i * 56} ry="900" />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <path key={`p${i}`} d={`M-40 ${120 + i * 90} Q 840 ${60 + i * 90 + (i - 6) * 18} 1720 ${120 + i * 90}`} />
          ))}
        </g>
        <g fill="none" stroke="#e3c57e" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round">
          <path d="M120 1040 C 520 520 1100 420 1600 140" />
          <path d="M260 1080 C 700 760 1180 760 1640 560" />
        </g>
        {[
          [120, 1040],
          [1600, 140],
          [1640, 560],
          [940, 520],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="none" stroke="#e3c57e" strokeOpacity="0.7" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3.5" fill="#e3c57e" />
          </g>
        ))}
        <text
          x="40"
          y="1090"
          fill="#c9a24a"
          fillOpacity="0.08"
          style={{ font: "400 230px var(--font-prata), Prata, serif", letterSpacing: "10px" }}
        >
          VOYAGE
        </text>
      </svg>
    </div>
  );
}
