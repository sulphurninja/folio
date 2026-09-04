/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

/**
 * PrimeCrest · Vol. IX — The Evolution Issue
 * Vineet Trakroo, CEO & Chief Evolution Officer, Evolution Strategy Advisors LLP.
 *
 * Composed on the closed `pc-*` system in src/app/m/vineet/vineet.css. Facing
 * leaves are designed as one 1680-wide spread: 1|2 editorial, 3|4 credits and
 * contents, 5|6 and 7|8 the signature story, 9|10 the Fortiora house spread.
 * Every photograph is either an exact 3:4 fill or a framed plate, so nothing
 * in the supplied portfolio is cropped through a face.
 */

const IMG = "/issues/vineet";

/* -------------------------------------------------------------- fixtures */

function Label({
  children,
  teal,
  className = "",
}: {
  children: ReactNode;
  teal?: boolean;
  className?: string;
}) {
  return (
    <p className={`pc-label pc-label-dot ${teal ? "pc-label-teal" : ""} ${className}`}>{children}</p>
  );
}

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="pc-folio">
      <span>PrimeCrest · Vol. IX</span>
      <span>{section}</span>
      <span>{page}</span>
    </p>
  );
}

/** A framed plate that keeps the whole photograph — 4:3 supplied, 4:3 shown. */
function Plate({
  src,
  alt,
  w,
  h,
  pos,
  cap,
  credit,
}: {
  src: string;
  alt: string;
  w: number | string;
  h: number;
  pos?: string;
  cap?: string;
  credit?: string;
}) {
  return (
    <figure style={{ margin: 0, width: w, flex: "0 0 auto" }}>
      <div className="pc-plate" style={{ height: h }}>
        <img src={`${IMG}/${src}`} alt={alt} style={pos ? { objectPosition: pos } : undefined} />
      </div>
      {cap ? (
        <figcaption className="pc-plate-cap">
          <span>{cap}</span>
          {credit ? <span>{credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------------- house art */

/**
 * Spread-wide voice signature for the Fortiora leaves. The viewBox spans both
 * leaves (1680 × 1120); the facing page shifts it left by one page width so
 * the rings and the waveform read as a single drawn artwork across the gutter.
 */
function AdArt({ shift = 0 }: { shift?: number }) {
  const bars = Array.from({ length: 74 }, (_, i) => {
    const a = Math.abs(Math.sin(i * 0.41));
    const b = Math.abs(Math.cos(i * 0.17));
    const c = Math.abs(Math.sin(i * 0.09 + 1.2));
    return 16 + Math.round(a * 150 + b * 74 + c * 52);
  });

  return (
    <div className="pc-ad-art" aria-hidden>
      <svg
        viewBox="0 0 1680 1120"
        width={1680}
        height={1120}
        style={{ inset: "auto", left: shift, top: 0, width: 1680, height: 1120 }}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="pcGlow" cx="26%" cy="48%" r="62%">
            <stop offset="0%" stopColor="#17959a" stopOpacity="0.42" />
            <stop offset="58%" stopColor="#0c5b60" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0a1113" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pcBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5c98c" />
            <stop offset="52%" stopColor="#c39a4b" />
            <stop offset="100%" stopColor="#17959a" />
          </linearGradient>
          <linearGradient id="pcFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0a1113" stopOpacity="0.9" />
            <stop offset="34%" stopColor="#0a1113" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1680" height="1120" fill="#0a1113" />
        <rect width="1680" height="1120" fill="url(#pcGlow)" />

        {/* engraved field */}
        {Array.from({ length: 28 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 40 + 20}
            x2="1680"
            y2={i * 40 + 20}
            stroke="#ece5d8"
            strokeOpacity="0.045"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 42 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 40 + 20}
            y1="0"
            x2={i * 40 + 20}
            y2="1120"
            stroke="#ece5d8"
            strokeOpacity="0.03"
            strokeWidth="1"
          />
        ))}

        {/* concentric voice rings, struck from the panel edge */}
        {Array.from({ length: 11 }, (_, i) => (
          <circle
            key={`r${i}`}
            cx="452"
            cy="560"
            r={150 + i * 108}
            fill="none"
            stroke="#c39a4b"
            strokeOpacity={0.3 - i * 0.023}
            strokeWidth={i % 3 === 0 ? 1.6 : 0.9}
            strokeDasharray={i % 2 ? "5 12" : undefined}
          />
        ))}

        {/* the waveform: a call, drawn */}
        <g transform="translate(560 560)">
          {bars.map((v, i) => (
            <rect
              key={i}
              x={i * 14.4}
              y={-v / 2}
              width="5"
              height={v}
              rx="2.5"
              fill="url(#pcBar)"
              fillOpacity={0.34 + (i % 7) * 0.085}
            />
          ))}
        </g>
        <line x1="560" y1="560" x2="1660" y2="560" stroke="#c39a4b" strokeOpacity="0.34" strokeWidth="1" />

        {/* plate marks */}
        {[
          [1268, 250],
          [1512, 806],
          [712, 892],
          [1092, 194],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} stroke="#e5c98c" strokeOpacity="0.5" strokeWidth="1.2">
            <line x1={x - 13} y1={y} x2={x + 13} y2={y} />
            <line x1={x} y1={y - 13} x2={x} y2={y + 13} />
            <circle cx={x} cy={y} r="7" fill="none" strokeOpacity="0.3" />
          </g>
        ))}

        <rect width="560" height="1120" fill="url(#pcFade)" />
      </svg>
    </div>
  );
}

/** Yoshida's iceberg, drawn to the page rather than pasted in. */
function Iceberg() {
  const below = [
    "Dealer margin friction",
    "Scheme maths nobody can explain",
    "Stock-outs at the wrong SKU",
    "Sales productivity per call",
    "Where the buyer drops out",
    "Competency gaps in the field",
    "Service promises quietly missed",
    "Trade credit stretched thin",
  ];

  return (
    <div style={{ flex: "0 0 auto", marginTop: 18 }}>
      <svg viewBox="0 0 732 268" width="100%" height="268" role="img" aria-label="The iceberg effect">
        <defs>
          <linearGradient id="pcIceTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e5c98c" />
            <stop offset="100%" stopColor="#c39a4b" />
          </linearGradient>
          <linearGradient id="pcIceLow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#17959a" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#0c5b60" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <polygon points="366,6 408,62 324,62" fill="url(#pcIceTop)" />
        <polygon
          points="324,66 408,66 452,244 280,244"
          fill="url(#pcIceLow)"
          stroke="#17959a"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        <line x1="0" y1="64" x2="732" y2="64" stroke="#c39a4b" strokeOpacity="0.6" strokeWidth="1.2" />
        <line x1="0" y1="68" x2="732" y2="68" stroke="#c39a4b" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 7" />

        <text x="0" y="34" fill="#e5c98c" style={{ font: "600 12px var(--pc-sans)", letterSpacing: "3.4px" }}>
          WHAT REACHES THE BOARD
        </text>
        <text
          x="0"
          y="52"
          fill="#ece5d8"
          fillOpacity="0.62"
          style={{ font: "italic 400 12.5px var(--pc-serif)" }}
        >
          Under ten percent of frontline operational problems
        </text>
        <text
          x="732"
          y="90"
          textAnchor="end"
          fill="#17959a"
          style={{ font: "600 12px var(--pc-sans)", letterSpacing: "3.4px" }}
        >
          THE OTHER NINETY
        </text>

        {below.map((t, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col ? 470 : 0;
          const y = 116 + row * 34;
          return (
            <g key={t}>
              <line
                x1={x}
                y1={y - 9}
                x2={x + 262}
                y2={y - 9}
                stroke="#ece5d8"
                strokeOpacity="0.16"
                strokeWidth="1"
              />
              <text
                x={x}
                y={y + 8}
                fill="#ece5d8"
                fillOpacity="0.8"
                style={{ font: "400 13px var(--pc-serif)" }}
              >
                {t}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------- TOC */

export const VINEET_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Editorial" },
  { page: 3, label: "Credits" },
  { page: 4, label: "Contents" },
  { page: 5, label: "The Signature Story" },
  { page: 7, label: "When the Momentum Goes" },
  { page: 9, label: "Fortiora · Applied AI" },
  { page: 11, label: "Growth or Leak" },
  { page: 12, label: "The Balcony" },
  { page: 13, label: "The File" },
  { page: 14, label: "Recognition" },
  { page: 15, label: "The Iceberg Effect" },
  { page: 17, label: "Research Is Not an Offering" },
  { page: 18, label: "The Rooms" },
  { page: 19, label: "Fortiora · Revenue Desk" },
  { page: 20, label: "Through 2030" },
  { page: 21, label: "No Pure Mistakes" },
  { page: 22, label: "The Next Edition" },
  { page: 23, label: "PrimeCrest" },
];

/* ----------------------------------------------------------------- issue */

export function VineetPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page pc pc-cover" data-density="hard">
        <img
          className="pc-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Vineet Trakroo, CEO and Chief Evolution Officer of Evolution Strategy Advisors LLP"
          fetchPriority="high"
        />
        <div className="pc-cover-grade" />

        <div className="pc-cover-ui">
          <header className="pc-mast">
            <img src="/brand/logo-primecrest.png" alt="PrimeCrest" />
            <p className="pc-mast-tag">Where Vision Meets Voice</p>
            <div className="pc-mast-hair" />
          </header>

          <div className="pc-cover-date">
            <p>September</p>
            <p>Vol. IX · No. 09</p>
            <p>2026</p>
          </div>

          <div className="pc-teaser pc-teaser-a">
            <h3>
              Under the
              <br />
              Number
            </h3>
            <hr />
            <p>
              Why a short sales line is almost never a sales problem — and where the leak is
              actually sitting.
            </p>
          </div>

          <div className="pc-cover-badge">
            <span className="pc-badge-dot" />
            <h2>Evolution</h2>
            <strong>ICON</strong>
            <span>to Watch in</span>
            <em>2026</em>
          </div>

          <div className="pc-cover-role">
            <p>
              CEO &amp; Chief
              <br />
              Evolution Officer
            </p>
            <strong>
              Evolution Strategy
              <br />
              Advisors
            </strong>
          </div>

          <div className="pc-teaser pc-teaser-b">
            <h3>
              Ten and
              <br />
              Ninety
            </h3>
            <hr />
            <p>
              Strategy is a tenth of the work. The other ninety is where sound plans quietly go to
              die.
            </p>
          </div>

          <div className="pc-cover-name">
            <em>Vineet</em>
            <strong>TRAKROO</strong>
            <p>
              The strategist rebuilding the commercial engine for how people actually buy in 2026
            </p>
          </div>

          <div className="pc-cover-foot">
            <p className="pc-cover-issn">
              <b>The Evolution Issue</b> · eighteen features
              <br />
              theprimecrest.com
            </p>
            <span className="pc-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · EDITORIAL, LEFT */}
      <article className="mag-page pc pc-cream">
        <div className="pc-ghost" aria-hidden>
          <span>E</span>
        </div>
        <div className="pc-well" style={{ padding: "48px 54px 40px" }}>
          <Label>From the desk · September 2026</Label>
          <p className="pc-script" style={{ fontSize: 128, marginTop: 2 }}>
            Editorial
          </p>
          <svg className="pc-ed-arrow" viewBox="0 0 240 60" fill="none" aria-hidden>
            <path d="M2 40C60 6 132 4 224 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M224 26 206 8M224 26 200 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <p
            style={{
              margin: "26px 0 0",
              maxWidth: 640,
              fontFamily: "var(--pc-didone)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 35,
              lineHeight: 1.22,
              letterSpacing: "-0.024em",
              color: "#1b2022",
            }}
          >
            “Sales is merely the effect, the final leg of the entire commercial engine.”
          </p>
          <p className="pc-quiet" style={{ marginTop: 12, maxWidth: 560, fontSize: 13 }}>
            Vineet Trakroo, CEO &amp; Chief Evolution Officer, Evolution Strategy Advisors LLP — on
            the first page of an eleven-page conversation.
          </p>

          <div className="pc-rule pc-rule-left" style={{ width: 300, margin: "26px 0 18px" }} />
          <p className="pc-label" style={{ marginBottom: 10 }}>
            In this edition
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: "1 1 auto" }}>
            {[
              ["05", "Sales Is the Last Number You See", "The diagnosis, and why it starts upstream"],
              ["08", "When the Momentum Goes", "Commodity drift, and four moats under challenge"],
              ["11", "Growth or Leak", "A strategy problem, or a structural one"],
              ["15", "Ten Percent Reaches the Top", "Yoshida’s iceberg, priced in a quarter"],
              ["17", "Research Is Not an Offering", "From a deck to a pipeline that ships"],
              ["20", "Through 2030", "The few drivers that move an Indian B2C number"],
            ].map(([n, t, d]) => (
              <li
                key={n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "46px 1fr",
                  gap: 14,
                  alignItems: "baseline",
                  padding: "11px 0",
                  borderTop: "1px solid rgba(60,65,68,0.18)",
                }}
              >
                <b
                  style={{
                    fontFamily: "var(--pc-sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: "var(--pc-brass-dk)",
                  }}
                >
                  {n}
                </b>
                <span>
                  <b
                    style={{
                      display: "block",
                      fontFamily: "var(--pc-didone)",
                      fontWeight: 500,
                      fontSize: 20,
                      letterSpacing: "-0.02em",
                      color: "#161b1d",
                    }}
                  >
                    {t}
                  </b>
                  <em
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontFamily: "var(--pc-serif)",
                      fontSize: 12.6,
                      fontStyle: "italic",
                      color: "#5b6062",
                    }}
                  >
                    {d}
                  </em>
                </span>
              </li>
            ))}
          </ul>

          <div className="pc-hair" />
          <p className="pc-quiet" style={{ fontSize: 11.5 }}>
            Vol. IX · No. 09 · The Evolution Issue. One conversation about growth, execution,
            consumer insight and future readiness — printed in the order it was answered, with the
            working method drawn out around it.
          </p>
        </div>
      </article>

      {/* ============================================== 02 · EDITORIAL, RIGHT */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well pc-ed-r">
          <h2 className="pc-ed-title">
            A Vision That
            <br />
            Outlasts the Plan
          </h2>
          <div className="pc-rule" />
          <div className="pc-ed-body">
            <span className="pc-portrait">
              <img src={`${IMG}/brick.jpg`} alt="Vineet Trakroo" />
            </span>
            <p className="pc-drop">
              Most companies do not stall because nobody wrote a strategy. They stall because the
              strategy was the easy part. The document gets approved, the deck is circulated, the
              quarter is named — and then the organisation goes back to doing what it already knows
              how to do. That gap, between the plan on the page and the behaviour on the floor, is
              the subject of this edition.
            </p>
            <p>
              We look for leaders who work inside that gap. Vineet Trakroo has spent a career there.
              As CEO and Chief Evolution Officer of Evolution Strategy Advisors LLP, he is called in
              when a commercial number stops behaving — when a top line softens, when a category
              thins, when a sales force is visibly busy and the result is stubbornly flat. His
              diagnosis rarely begins where the alarm was raised. Sales, he says, is merely the
              effect: the final leg of a much longer engine.
            </p>
            <p>
              That single sentence reorganises a great deal of thinking. If the number is an effect,
              then arguing about the number is a wasted quarter. The work sits upstream — in
              culture, in leadership clarity, in a strategic choice made three years ago, in a
              delivery process nobody owns, in a customer experience that quietly costs more than it
              earns. Across FMCG, automobiles, pharma, consumer products and building materials, and
              more than a hundred brands, he keeps finding the same thing: the evidence was already
              in the file. Somebody simply had to look deeper.
            </p>
            <p>
              With this edition — <strong>Evolution Icon to Watch for in 2026</strong> — PrimeCrest
              publishes leaders whose method is worth copying, not only their results. Our cover
              subject makes an uncomfortable case: that strategy is ten percent of the effort and
              execution is the other ninety; that deciding what <em>not</em> to do is the most
              important call a chief executive ever makes; and that today’s revenue can be an
              illusion held up by yesterday’s distribution, a kind economy, or a weak competitor.
            </p>
            <p>
              What makes the argument worth a whole edition is that it is falsifiable. Ask any
              commercial leader when their key performance indicators were last rewritten, how much
              of the business now arrives through a digital channel, and whether those two numbers
              agree. Ask how a dealer’s complaint travels from a counter in a tier-three town to a
              slide in a quarterly review, and how much of it survives the journey. Neither question
              needs a consultant to answer. Both tend to be answered badly.
            </p>
            <p>
              We printed his answers in the order he gave them. What surrounds them here — the
              diagnostics, the ten and the ninety, the iceberg, the road to 2030 — is our reading of
              a working method, not a rewrite of it. Where he named an example, we kept it. Where he
              declined to dress a failure up as a tragedy, we kept that too, because the sentence he
              used instead is the better one: in business there are no pure mistakes, only learnings.
            </p>
            <p>
              If your own number is short this quarter, the most useful page in this issue may be
              the one that tells you where to stop looking.
            </p>
            <p className="pc-quiet" style={{ marginTop: 14 }}>
              Read it slowly. Then go and audit the ground.
            </p>
            <p className="pc-sign">The Editors</p>
            <p className="pc-sign-role">PrimeCrest Editorial Desk</p>
          </div>
        </div>
      </article>

      {/* ============================================== 03 · CREDITS */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <img className="pc-credits-bg" src="/brand/backdrop-primecrest.jpg" alt="" />
        <div className="pc-credits-veil" />
        <div className="pc-well" style={{ padding: "40px 46px 34px" }}>
          <p className="pc-script pc-script-light" style={{ fontSize: 108, lineHeight: 0.86 }}>
            Credits
          </p>
          <div className="pc-rule pc-rule-left" style={{ width: 300, marginBottom: 26 }} />

          <div className="pc-credit-rows">
            {[
              ["Editor-in-Chief", "PrimeCrest Editorial"],
              ["Managing Editor", "Fortiora Studio"],
              ["Feature Editor", "The Evolution Desk"],
              ["Art & Design Head", "Fortiora Studio"],
              ["Type & Composition", "PrimeCrest Studio"],
              ["Cover Direction", "Fortiora Studio"],
              ["Photo Editor", "Supplied portfolio, used with permission"],
              ["Interview", "Printed as answered by the subject"],
              ["Fact Desk", "References as supplied by the contributor"],
              ["Digital Production", "Fortiora Studio · flipbook and assets"],
              ["Business Development", "Fortiora Group LLC"],
              ["Subscriptions", "theprimecrest.com"],
              ["Circulation", "Digital edition · worldwide"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "contents" }}>
                <span className="pc-k">{k}</span>
                <span className="pc-v">{v}</span>
              </div>
            ))}
          </div>

          <div className="pc-hair" style={{ margin: "24px 0 20px" }} />

          <div className="pc-credits-mid">
            <p>Hello@thefortiora.com</p>
            <p style={{ color: "rgba(236,229,216,0.66)" }}>September, 2026</p>
            <h5 style={{ marginTop: 20 }}>Corporate Office</h5>
            <p className="pc-tiny">
              Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Email: Hello@thefortiora.com
              <br />
              For subscription: theprimecrest.com
            </p>
            <div className="pc-social" style={{ marginTop: 18 }}>
              <b>Read on</b>
              <span className="pc-chip">theprimecrest.com</span>
              <span className="pc-chip">LinkedIn</span>
              <span className="pc-chip">Issuu</span>
            </div>
          </div>

          <div className="pc-hair" style={{ margin: "24px 0 18px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 132px", gap: 26, alignItems: "start" }}>
            <div>
              <p className="pc-label" style={{ marginBottom: 8 }}>
                On the cover
              </p>
              <p className="pc-quiet" style={{ fontSize: 11.6, fontStyle: "normal", lineHeight: 1.62 }}>
                Vineet Trakroo, photographed at the Evolution Strategy Advisors office. Portrait
                supplied by the subject and used with permission for this edition. Cover type set in
                Bodoni Moda and Jost; text in Spectral. Composed on a 840 × 1120 digital canvas.
              </p>
            </div>
            <div>
              <p className="pc-label" style={{ marginBottom: 8 }}>
                This edition
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  ["Leaves", "Twenty-four"],
                  ["Questions", "Ten, in the order asked"],
                  ["Industries", "Five"],
                  ["Brands behind the answers", "100+"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "6px 0",
                      borderTop: "1px solid rgba(236,229,216,0.14)",
                      fontFamily: "var(--pc-sans)",
                      fontSize: 11.5,
                      color: "rgba(236,229,216,0.72)",
                    }}
                  >
                    <span>{k}</span>
                    <b style={{ color: "#f2ede3", fontWeight: 500 }}>{v}</b>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/brand/qr-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 118, height: "auto", padding: 6, background: "#f7f4ee" }}
            />
          </div>

          <div style={{ marginTop: "auto" }}>
            <div className="pc-hair" />
            <p
              className="pc-quiet"
              style={{ textAlign: "center", fontSize: 10, fontStyle: "normal", lineHeight: 1.6 }}
            >
              Vol. IX · No. 09 · The Evolution Issue · digital canvas 840 × 1120
              <br />
              Copyright © 2026 Fortiora Group LLC. All rights reserved. The content and images used
              in this magazine may not be reproduced or transmitted in any form or by any means,
              electronic, mechanical, photocopying, recording or otherwise, without prior written
              permission from the publisher. Reprint rights remain solely with PrimeCrest.
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 04 · CONTENTS */}
      <article className="mag-page pc pc-contents" data-density="hard">
        <div className="pc-contents-top">
          <img src={`${IMG}/extract_p8_i12.jpg`} alt="Vineet Trakroo" />
        </div>

        <div className="pc-contents-hd">
          <h2>Contents</h2>
        </div>

        <div className="pc-signature">
          <p className="pc-eyebrow">
            The
            <br />
            Signature
            <br />
            Story
          </p>
          <div
            className="pc-rule"
            style={{ width: 96, margin: "16px 0", background: "rgba(143,109,41,0.5)" }}
          />
          <div className="pc-name">
            <em>Vineet</em>
            <strong>TRAKROO</strong>
            <span>
              Sales is the last number you see. A diagnosis of the commercial engine — growth,
              execution, and what a chief executive should stop.
            </span>
          </div>
          <span className="pc-pagebox" style={{ marginTop: 20 }}>
            05
          </span>
        </div>

        <div className="pc-contents-bot">
          <div className="pc-band-hd">
            <span>Industry Insights</span>
          </div>
          <div className="pc-contents-grid">
            <div>
              <h4>
                Growth
                <br />
                or Leak
              </h4>
              <p>
                How to tell a strategy problem from a structural one — and why the second takes
                longer to fix
              </p>
              <span className="pc-pagebox">11</span>
            </div>
            <div>
              <h4>
                The Iceberg
                <br />
                Effect
              </h4>
              <p>
                Why under a tenth of frontline friction ever reaches the board, and what that costs
                a quarter
              </p>
              <span className="pc-pagebox">15</span>
            </div>
            <div>
              <h4>
                Through
                <br />
                2030
              </h4>
              <p>
                The few commercial drivers that move an Indian B2C number, executed with rigour
              </p>
              <span className="pc-pagebox">20</span>
            </div>
          </div>

          <div className="pc-contents-also">
            <p className="pc-label" style={{ letterSpacing: "0.3em" }}>
              Also in this edition
            </p>
            <ul>
              <li>
                <b>02 · Editorial</b>
                <span>A vision that outlasts the plan</span>
              </li>
              <li>
                <b>13 · The File</b>
                <span>The record, and the ten questions</span>
              </li>
              <li>
                <b>17 · Insight</b>
                <span>Research is not an offering</span>
              </li>
              <li>
                <b>21 · The Close</b>
                <span>No pure mistakes, only learnings</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* ============================================== 05 · FEATURE, TEXT */}
      <article className="mag-page pc pc-ink">
        <div className="pc-well">
          <Label>The signature story · one</Label>
          <h2 className="pc-head">
            Sales Is the Last
            <br />
            Number You See
          </h2>
          <p className="pc-dek">
            Vineet Trakroo on why a short top line is almost never a top-line problem — and what the
            data already knows.
          </p>
          <div className="pc-hair" style={{ margin: "16px 0 14px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                A sales figure is the most public number a company owns and the least useful place to
                begin an investigation. It is printed, circulated, compared and defended — and by
                the time it comes in short, the decisions that made it short are already months old.
                Vineet Trakroo, CEO and Chief Evolution Officer of Evolution Strategy Advisors LLP,
                treats it as the end of a chain rather than the start of one.{" "}
                <span className="pc-run">
                  “Sales is merely the effect, the final leg of the entire commercial engine.”
                </span>
              </p>
              <p>
                That framing changes what a review meeting is for. If figures fall short of targets,
                the useful response is not a marketing plan but a rigorous inquiry into underlying
                root causes. Multiple functions contribute to a commercial result, which means the
                bottleneck rarely sits inside a single department — and almost never inside the one
                holding the number.
              </p>
              <p className="pc-sub">The friction is softer than the org chart</p>
              <p>
                Underneath sluggish numbers he expects deeper organisational friction rather than a
                single broken process step: misaligned culture, leadership gaps, flawed strategic
                choices, team competency deficits. Even delivery processes and a poorly designed
                customer experience can quietly derail top-line momentum for years without ever
                appearing as a line item. Nobody signs off on losing a buyer at the third touchpoint.
                It simply happens, repeatedly, in a place where no report is generated.
              </p>
              <p className="pc-sub">The story is already in the file</p>
              <p>
                The compensation is that modern organisations generate rich departmental data, which
                makes diagnostic discovery far faster than it used to be. Operational friction shows
                itself if you go looking — whether the drag comes from supply chain inefficiency,
                customer satisfaction drop-offs, or poor sales productivity.{" "}
                <span className="pc-run">
                  “The real story is always in the data; leadership just needs to look deeper.”
                </span>
              </p>
              <p className="pc-sub">Yesterday’s metrics, today’s buyer</p>
              <p>
                The second failure is measurement. Many legacy, brick-and-mortar companies still
                evaluate their teams on key performance indicators designed for how business was
                conducted two to three decades ago. Meanwhile a great many enterprises now take
                thirty to fifty percent of their business from digital channels — and digital is
                where the incremental growth resides. When the scoreboard predates the market, effort
                concentrates in the wrong place and the shortfall reads like a motivation problem.
                It is a metrics problem. Departmental performance measures, he argues, have to be
                comprehensively revamped to reflect the commercial reality the company is actually
                operating in.
              </p>
              <p>
                It also explains a boardroom pattern that looks like impatience from the outside.
                Established brands are increasingly replacing chief executives; in his account,
                boards are not swapping personalities so much as trying to align an operating model
                with how younger demographics buy. The same logic runs in reverse for the
                digital-first challengers: excellent online, they find that pushing the same
                products through traditional offline channels introduces severe margin and
                distribution challenges that often prove unprofitable without strategic
                restructuring.
              </p>
            </div>
          </div>

          <div className="pc-skew">
            <p>
              Sales is merely the effect — the final leg of the entire commercial engine. If the
              figure is short, the work is upstream.
            </p>
          </div>
          <Folio page="05" section="The signature story" />
        </div>
      </article>

      {/* ============================================== 06 · FEATURE, PLATE */}
      <article className="mag-page pc pc-bleed pc-wedge-l" data-density="hard">
        <img
          className="pc-img"
          src={`${IMG}/feature.jpg`}
          alt="Vineet Trakroo at the window of the Evolution Strategy Advisors office"
        />
        <div className="pc-corner-tr" />
        <p className="pc-vcap">Vineet Trakroo · Evolution Strategy Advisors LLP · 2026</p>
        <div className="pc-platecard">
          <p className="pc-label">The subject</p>
          <h4>Growth, strategy, execution, future readiness.</h4>
          <p>
            Four watchwords, one brief. He has carried it across FMCG, automobiles, pharma, consumer
            products and building materials — and more than a hundred brands.
          </p>
        </div>
      </article>

      {/* ============================================== 07 · PLATE */}
      <article className="mag-page pc pc-bleed pc-wedge-r" data-density="hard">
        <img
          className="pc-img"
          src={`${IMG}/lobby.jpg`}
          alt="Vineet Trakroo"
          style={{ objectPosition: "56% 18%" }}
        />
        <div className="pc-corner-bl" />
        <p className="pc-vcap pc-vcap-l">
          “What are we selling, to whom, and has it become a commodity?”
        </p>
      </article>

      {/* ============================================== 08 · MOMENTUM */}
      <article className="mag-page pc pc-ink">
        <div className="pc-well">
          <Label teal>The signature story · two</Label>
          <h2 className="pc-head pc-head-sm">When the Momentum Goes</h2>
          <p className="pc-dek">
            The first diagnostic question is deliberately naive. The answers are rarely comfortable.
          </p>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                When a large B2C business begins losing growth momentum, the question he asks first
                is foundational rather than clever: what are we selling, to whom, and has it become
                a commodity? In most cases the honest answer is that product differentiation has
                eroded. Consumers today are highly informed. They scrutinise ingredient decks and
                verify efficacy claims, and even category-defining brands have lost significant
                market share on that shift. Entire categories — fairness creams among them — have
                faced massive corrections driven by evolving consumer and social awareness, not by a
                competitor out-advertising them.
              </p>
              <p className="pc-sub pc-sub-teal">Then the weather outside</p>
              <p>
                Beyond the product itself he evaluates the operating environment for seismic shifts.
                Rapid technological advance, even before the full impact of AI is priced in, can
                render an existing value proposition obsolete overnight. Shifting trade barriers and
                supply-chain volatility can close a core market and send a plan back to the drawing
                board. Generations X, Y, Z and Alpha consume, evaluate and purchase through entirely
                different journeys, resetting expectations of distribution speed and convenience.
                And demand generation itself — the traditional B2C machinery of advertising, media
                planning and creative messaging — is navigating its own existential crossroads.
              </p>
              <p>
                The real question for leadership, in his words, is organisational agility: has the
                business adapted to these disruptions, or is it executing a decade-old playbook? All
                four traditional Ps of marketing are being redefined at once, which is a harder
                problem than any single one of them failing.
              </p>
            </div>
          </div>

          <p className="pc-label" style={{ marginTop: 16 }}>
            Yesterday’s moats, under active challenge
          </p>
          <div className="pc-matrix">
            <div>
              <b>Product formulation</b>
              <p>
                A recipe is readable and a claim is checkable. Differentiation that used to live in
                the lab now has to survive a phone screen in the aisle.
              </p>
            </div>
            <div>
              <b>Exclusive distribution</b>
              <p>
                Shelf control matters less when the shelf is a search result and the warehouse
                belongs to somebody else’s platform.
              </p>
            </div>
            <div>
              <b>Advertising weight</b>
              <p>
                Outspending the challenger stopped being a defence when attention stopped being
                purchasable in bulk.
              </p>
            </div>
            <div>
              <b>Pricing power</b>
              <p>
                Informed buyers compare before they reach the counter. A premium now needs a reason
                that survives the comparison.
              </p>
            </div>
          </div>
          <Folio page="08" section="When the momentum goes" />
        </div>
      </article>

      {/* ============================================== 09 · HOUSE AD, LEFT */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <AdArt />
        <div className="pc-ad-panel">
          <p className="pc-ad-kick">Fortiora Group · Applied AI</p>
          <h3 className="pc-ad-hero">
            Put an AI voice on the
            <br />
            <b>revenue line.</b>
          </h3>
          <p className="pc-ad-copy">
            Your commercial engine leaks where nobody is listening — the call that rang out at 9:40
            pm, the dealer who wanted stock and got a voicemail, the quote that went cold over a
            weekend. We build the layer that answers, qualifies and books, in your brand’s voice,
            with the context intact.
          </p>
          <ul className="pc-ad-list">
            <li>
              <b>01</b>
              <span>
                Enterprise voice agents
                <em>Inbound and outbound, in your language and register. Human handoff with the whole thread.</em>
              </span>
            </li>
            <li>
              <b>02</b>
              <span>
                Always-on revenue desk
                <em>Missed calls, stalled quotes and dormant accounts worked on a schedule, not a mood.</em>
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                Channel copilots
                <em>Distributors, dealers and field teams get order status, scheme maths and stock in seconds.</em>
              </span>
            </li>
          </ul>
          <div className="pc-qr-card">
            <p>Scan the QR code</p>
            <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            <b>Book a pilot</b>
            <span className="pc-ribbon">Because every unanswered call is margin</span>
          </div>
        </div>
      </article>

      {/* ============================================== 10 · HOUSE AD, RIGHT */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <AdArt shift={-840} />
        <div className="pc-well" style={{ padding: "56px 46px 38px" }}>
          <Label teal>Built for the commercial engine</Label>
          <h3 className="pc-ad-hero" style={{ fontSize: 30, marginTop: 10 }}>
            Not a chatbot. A <b>commercial system</b> that
            <br />
            knows your channel, your SKUs, your maths.
          </h3>
          <p className="pc-ad-copy" style={{ maxWidth: 640 }}>
            Custom-built on your data, your telephony and your CRM — then measured on the only thing
            that matters: recovered revenue per rupee of spend.
          </p>
          <div className="pc-svc" style={{ marginTop: 20 }}>
            <div>
              <span className="pc-svc-n">01</span>
              <h4>AI Voice for Sales &amp; Service</h4>
              <p>
                Agents that qualify a lead, quote from live price masters, book the site visit and
                escalate cleanly. Every call transcribed, scored and filed against the account.
              </p>
              <p className="pc-svc-foot">Deployed in weeks · your numbers, your script</p>
            </div>
            <div>
              <span className="pc-svc-n">02</span>
              <h4>Channel &amp; Dealer Copilot</h4>
              <p>
                The first customer in distribution-led B2C is the trade. Give them instant answers on
                stock, schemes, credit and dispatch — in the language the counter actually speaks.
              </p>
              <p className="pc-svc-foot">WhatsApp · voice · dealer portal</p>
            </div>
            <div>
              <span className="pc-svc-n">03</span>
              <h4>Custom Copilots &amp; Automation</h4>
              <p>
                Not a generic assistant. Workflows built around your operating model — collections,
                claims, onboarding, after-sales — with approvals and audit trails where they belong.
              </p>
              <p className="pc-svc-foot">Private deployment · your cloud or ours</p>
            </div>
            <div>
              <span className="pc-svc-n">04</span>
              <h4>Signal &amp; Insight</h4>
              <p>
                Conversations become structured data: objections, price friction, churn tells,
                drop-off points. The analytics layer that answers why a buyer left, not just that
                they did.
              </p>
              <p className="pc-svc-foot">Board-ready dashboards, weekly</p>
            </div>
          </div>
          <div className="pc-lockup" style={{ marginTop: 20 }}>
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <p>
              <b>Hello@thefortiora.com</b>
              <br />
              thefortiora.com · Sheridan, Wyoming
              <br />
              An advertisement by the publisher of PrimeCrest
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 11 · GROWTH OR LEAK */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well">
          <Label>Diagnosis</Label>
          <h2 className="pc-head pc-head-sm">
            A Growth Problem and a Leak
            <br />
            Are Not the Same Thing
          </h2>
          <div className="pc-ratio">
            <div className="pc-ratio-track">
              <i>10 · Strategy</i>
              <i>90 · Execution</i>
            </div>
            <p className="pc-ratio-cap">
              <span>Where the thinking happens</span>
              <span>Where the result is decided</span>
            </p>
          </div>
          <div className="pc-hair" style={{ margin: "16px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                The distinction he draws first is the one most review meetings blur. A growth problem
                is strategic: it is tied to market headroom, category choices and positioning, and it
                can often be solved through tactical pivots with fast turnarounds, followed by a
                robust go-to-market that builds enduring value. Hit fifty percent share in a mature
                segment and headroom naturally diminishes; finding new growth then means targeting
                entirely new customer segments rather than pushing harder at the same ones.
              </p>
              <p>
                An execution problem is systemic. It is a structural leak in the bucket. If sales
                productivity is chronically low, the issue is operational, and fixing it takes
                significantly longer because it requires re-engineering infrastructure, implementing
                new standard operating procedures, and driving genuine organisational adoption. The
                two are interdependent, which is why the diagnosis matters so much:{" "}
                <span className="pc-run">
                  a brilliant strategic growth thesis will fail if the execution engine cannot
                  deliver.
                </span>
              </p>
              <p className="pc-sub">What repeats across five industries</p>
              <p>
                Having worked FMCG, automobiles, pharma, consumer products and building materials, he
                finds the most universal commercial bottlenecks rooted in execution breakdowns.
                They stem from poor strategic guidance, a lack of clear prioritisation, capability
                gaps, and the absence of crisp operating frameworks — the same four, in categories
                that otherwise share almost nothing.
              </p>
              <p className="pc-sub">The communication disconnect</p>
              <p>
                Internal communication is often surprisingly weak. Frontline sales teams rarely have
                absolute clarity on priorities, so they do their best with what they know. More
                consequentially, on-the-ground market friction rarely makes it up to executive
                leadership unfiltered, which leaves boardroom decisions resting on assumptions that
                expired two quarters ago.
              </p>
              <p className="pc-sub">Timely in-market diagnostics</p>
              <p>
                Practical execution friction is inevitable. The differentiator between winning and
                losing companies is how frequently leadership audits ground realities and implements
                timely corrections. Planning has to be anchored in ground-level market realities,
                sales-force competencies and channel partner incentives — not in the version of the
                market that exists in the plan.
              </p>
              <p className="pc-sub">The first customer is the trade</p>
              <p>
                Consumer-centricity is vital, but distribution-led B2C businesses must remember that
                the distributor, stockist, dealer or retailer is the first customer to satisfy. If
                channel partners are not aligned, incentivised and supported, the product will never
                reach the consumer effectively — however good the consumer campaign.
              </p>
            </div>
          </div>

          <div className="pc-slab">
            <p>
              “A growth problem is strategic. An execution problem is a structural leak in the
              bucket. Fixing the leak takes longer.”
            </p>
          </div>
          <Folio page="11" section="Growth or leak" />
        </div>
      </article>

      {/* ============================================== 12 · THE BALCONY */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <div className="pc-well" style={{ padding: "44px 54px 34px" }}>
          <Label>Portfolio · the balcony</Label>
          <h2 className="pc-head pc-head-sm" style={{ fontSize: 30, marginTop: 4 }}>
            Above the Skyline, Off the Clock
          </h2>
          <p className="pc-quiet" style={{ marginTop: 8, maxWidth: 620 }}>
            Photographs supplied with the feature package, reproduced whole — the full frame, as
            shot, nothing trimmed to fit a grid.
          </p>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
            <Plate
              src="arms.jpg"
              alt="Vineet Trakroo on a balcony above the city skyline"
              w={732}
              h={549}
              cap="The long view · arms folded, city behind"
              credit="Supplied"
            />
            <div style={{ display: "flex", gap: 16 }}>
              <Plate
                src="balcony.jpg"
                alt="Vineet Trakroo on the balcony"
                w={358}
                h={269}
                cap="Off the record"
              />
              <Plate
                src="sunset.jpg"
                alt="Vineet Trakroo at sunset"
                w={358}
                h={269}
                cap="Last light"
              />
            </div>
          </div>
          <Folio page="12" section="Portfolio" />
        </div>
      </article>

      {/* ============================================== 13 · THE FILE */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well">
          <Label>The file</Label>
          <h2 className="pc-head pc-head-sm">As Given</h2>
          <div className="pc-hair" style={{ margin: "14px 0 10px" }} />
          <ul className="pc-dossier" style={{ flex: "0 0 auto" }}>
            {[
              ["Name", "Vineet Trakroo"],
              ["Designation", "CEO & Chief Evolution Officer"],
              ["Organisation", "Evolution Strategy Advisors LLP"],
              ["Watchwords", "Growth · Strategy · Execution · Future readiness"],
              ["Industries", "FMCG, automobiles, pharma, consumer products, building materials"],
              ["Scale of work", "100+ brands"],
              [
                "Interview focus",
                "Growth strategy, execution, consumer insight, organisational agility, sustainable growth",
              ],
              ["Supporting material", "Professional photographs, recognition image, supplied logo"],
              ["References", "theevolutionconsulting.com/awards.php · linkedin.com/in/vineettrakroo"],
            ].map(([k, v]) => (
              <li key={k}>
                <b>{k}</b>
                <span>{v}</span>
              </li>
            ))}
          </ul>

          <p className="pc-label" style={{ marginTop: 20 }}>
            The ten questions, in the order they were asked
          </p>
          <ol
            style={{
              flex: "1 1 auto",
              minHeight: 0,
              columnCount: 2,
              columnGap: 30,
              margin: "12px 0 0",
              padding: "0 0 0 22px",
              fontFamily: "var(--pc-serif)",
              fontSize: 13,
              lineHeight: 1.5,
              color: "#3a3f41",
            }}
          >
            <li style={{ marginBottom: 7 }}>What is usually hiding underneath a weak growth line.</li>
            <li style={{ marginBottom: 7 }}>The first thing to look for when a large B2C business loses momentum.</li>
            <li style={{ marginBottom: 7 }}>How to tell a growth problem from an execution problem.</li>
            <li style={{ marginBottom: 7 }}>
              The growth lesson that travels across FMCG, automobiles, pharma, consumer products and
              building materials.
            </li>
            <li style={{ marginBottom: 7 }}>How a chief executive decides what to stop.</li>
            <li style={{ marginBottom: 7 }}>
              Turning consumer insight into growth rather than another research report.
            </li>
            <li style={{ marginBottom: 7 }}>Why strong strategies fail during execution.</li>
            <li style={{ marginBottom: 7 }}>
              What separates a business growing today from one that is genuinely future-ready.
            </li>
            <li style={{ marginBottom: 7 }}>
              The recurring mistake in established B2C businesses, after 100+ brands.
            </li>
            <li style={{ marginBottom: 0 }}>
              What Indian B2C leaders should start changing today to build sustainable growth through
              2030.
            </li>
          </ol>

          <div className="pc-logochip" style={{ marginTop: 16 }}>
            <img src={`${IMG}/logo-esa.jpg`} alt="Evolution Strategy Advisors" />
          </div>
          <Folio page="13" section="The file" />
        </div>
      </article>

      {/* ============================================== 14 · RECOGNITION */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well">
          <Label>Recognition</Label>
          <h2 className="pc-head pc-head-sm">The Plate, As Supplied</h2>
          <p className="pc-dek" style={{ fontSize: 15 }}>
            Reproduced from the feature package. The references below are the contributor’s own.
          </p>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />
          <div style={{ display: "flex", gap: 26, flex: "1 1 auto", minHeight: 0 }}>
            <div className="pc-award-frame" style={{ width: 396, alignSelf: "flex-start" }}>
              <img src={`${IMG}/awards.jpg`} alt="Awards and recognition, as supplied" />
              <p
                className="pc-plate-cap"
                style={{ marginTop: 12, color: "rgba(43,47,49,0.6)", justifyContent: "center" }}
              >
                <span>Recognition image · supplied with the feature</span>
              </p>
            </div>
            <div style={{ flex: "1 1 auto", minWidth: 0 }}>
              <p className="pc-sub">On the record</p>
              <p
                style={{
                  margin: "0 0 10px",
                  fontFamily: "var(--pc-serif)",
                  fontSize: 13.6,
                  lineHeight: 1.6,
                  textAlign: "justify",
                  color: "#33383a",
                }}
              >
                PrimeCrest prints what it is given and says so. The plate opposite arrived with the
                feature materials as a single recognition image; the two references beneath it were
                supplied by the contributor as the place where the awards themselves are listed.
                Individual honours have not been independently verified for this edition, and we
                would rather write that line than imply a check we did not run.
              </p>
              <p
                style={{
                  margin: "0 0 14px",
                  fontFamily: "var(--pc-serif)",
                  fontSize: 13.6,
                  lineHeight: 1.6,
                  textAlign: "justify",
                  color: "#33383a",
                }}
              >
                It is a small discipline, and it belongs in an issue about execution. The subject’s
                own argument is that leadership operates in a vacuum when information thins on its
                way upstairs — that under a tenth of what happens on the ground survives the trip.
                A magazine is not exempt from its own cover story.
              </p>
              <div className="pc-hair" />
              <p className="pc-sub" style={{ marginTop: 12 }}>
                References
              </p>
              <ul style={{ margin: "8px 0 0", padding: 0, listStyle: "none" }}>
                {[
                  ["Awards", "theevolutionconsulting.com/awards.php"],
                  ["Honours", "linkedin.com/in/vineettrakroo/details/honors/"],
                  ["Firm", "Evolution Strategy Advisors LLP"],
                  ["Package", "Interview feature and supporting visual portfolio"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "84px 1fr",
                      gap: 14,
                      padding: "9px 0",
                      borderTop: "1px solid rgba(60,65,68,0.18)",
                    }}
                  >
                    <b
                      style={{
                        fontFamily: "var(--pc-sans)",
                        fontSize: 9.5,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--pc-brass-dk)",
                      }}
                    >
                      {k}
                    </b>
                    <span
                      style={{
                        fontFamily: "var(--pc-serif)",
                        fontSize: 13,
                        lineHeight: 1.45,
                        color: "#23282a",
                        wordBreak: "break-word",
                      }}
                    >
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pc-slab" style={{ marginTop: 18 }}>
                <p style={{ fontSize: 15.5 }}>
                  “In business, there are no pure mistakes — only learnings.”
                </p>
              </div>
            </div>
          </div>
          <Folio page="14" section="Recognition" />
        </div>
      </article>

      {/* ============================================== 15 · THE ICEBERG */}
      <article className="mag-page pc pc-ink">
        <div className="pc-well">
          <Label>Why strategies fail</Label>
          <h2 className="pc-head pc-head-sm">Ten Percent Reaches the Top</h2>
          <p className="pc-dek">
            Strategy is a tenth of the effort. The other ninety is a communication problem wearing
            an operational disguise.
          </p>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                In terms of organisational effort, he puts the split at ten and ninety. Strategy is
                ten percent; execution is the rest. Even a sound strategy fails when execution is
                neglected, and the failure modes are depressingly consistent from company to company.
              </p>
              <p className="pc-sub">The business-as-usual trap</p>
              <p>
                Teams default to comfortable routines. Actions become unthinking muscle memory rather
                than active responses to a market that has moved. The plan is not abandoned; it is
                simply overtaken by habit, one uneventful week at a time.
              </p>
              <p className="pc-sub">Organisational blind spots</p>
              <p>
                Teams operating too close to daily operations frequently miss the structural problem
                forming underneath them. Proximity is not the same as visibility, and a busy quarter
                is an excellent place to hide a developing category shift.
              </p>
              <p className="pc-sub">The iceberg effect</p>
              <p>
                As the management theorist Sidney Yoshida pointed out, less than ten percent of
                frontline operational problems ever reach top management. Feedback from dealers and
                frontline sales teams gets diluted like a game of telephone on its way to
                headquarters, and leadership ends up operating in a vacuum — confident, well
                briefed, and wrong.
              </p>
              <p className="pc-sub">Data without actionable analytics</p>
              <p>
                The failure is bidirectional by company size. Smaller companies under-invest in
                understanding why their products are chosen or rejected at all. Larger enterprises
                drown in digitised sales data yet lack the analytical rigour to identify where
                customers drop out of the purchase journey. Both end up with a number and no
                explanation.
              </p>
            </div>
          </div>

          <Iceberg />
          <Folio page="15" section="The iceberg effect" />
        </div>
      </article>

      {/* ============================================== 16 · PLATE */}
      <article className="mag-page pc pc-bleed pc-wedge-l" data-density="hard">
        <img
          className="pc-img"
          src={`${IMG}/vest.jpg`}
          alt="Vineet Trakroo"
          style={{ objectPosition: "52% 24%" }}
        />
        <div className="pc-corner-tr" />
        <div className="pc-platecard" style={{ width: 348 }}>
          <p className="pc-label">The ninety</p>
          <h4>Feedback thins on the way upstairs.</h4>
          <p>
            Dealer and sales-floor reality gets diluted like a game of telephone on the route to
            headquarters. The differentiator, he says, is how often leadership goes and audits the
            ground itself.
          </p>
        </div>
        <p className="pc-vcap">Supplied portfolio · reproduced full frame</p>
      </article>

      {/* ============================================== 17 · INSIGHT */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well">
          <Label>Consumer insight</Label>
          <h2 className="pc-head pc-head-sm">Research Is Not an Offering</h2>
          <p className="pc-dek" style={{ fontSize: 15.5 }}>
            Converting research into commercial growth requires an institutionalised, repeatable
            process — not a better deck.
          </p>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                Expectations do not stand still while a product is being used. As consumers live with
                a product or service over time, their needs evolve from the primary functional job it
                was bought to do toward secondary conveniences: packaging functionality, dosage
                precision, the way the thing fits into a life. Continuous usage-and-attitude tracking
                is what keeps a company aware of that drift, and it is the input that fine-tunes
                marketing mix, product design and delivery formats before a competitor notices the
                same gap.
              </p>
              <p className="pc-sub">From a deck to a pipeline</p>
              <p>
                The failure he names is organisational rather than analytical.{" "}
                <span className="pc-run">
                  Market research must not sit inside the marketing department as an academic deck.
                </span>{" "}
                Leading enterprises maintain structured new-product-development and innovation
                pipelines whose explicit job is to translate customer feedback into packaging
                changes, SKU variants, or entirely new offerings. The insight is not the asset; the
                pipeline that converts it is.
              </p>
              <p className="pc-sub">Executing the adaptation</p>
              <p>
                Where internal teams struggle to translate research data into commercialised
                offerings, he argues that leveraging external advisory frameworks can accelerate
                pipeline execution and market launch. That is, in effect, a description of his own
                brief: not to produce another study, but to move a finding through an organisation
                until it arrives on a shelf as something a buyer can choose.
              </p>
              <p>
                The test is unsentimental. If a quarter of research produced no pack change, no
                variant, no new format and no retired SKU, the research did not happen — a report
                happened. The difference between the two is the whole of this page.
              </p>
            </div>
          </div>

          <p className="pc-label" style={{ marginTop: 14 }}>
            Insight to offering · the repeatable loop
          </p>
          <div className="pc-chain">
            <div>
              <b>01</b>
              <h5>Track</h5>
              <p>Usage and attitude, continuously — not once a launch.</p>
            </div>
            <div>
              <b>02</b>
              <h5>Read</h5>
              <p>Why chosen, why rejected, where the buyer dropped out.</p>
            </div>
            <div>
              <b>03</b>
              <h5>Pipeline</h5>
              <p>A structured NPD queue that owns the finding.</p>
            </div>
            <div>
              <b>04</b>
              <h5>Ship</h5>
              <p>Pack, dosage, SKU variant, or a new line entirely.</p>
            </div>
            <div>
              <b>05</b>
              <h5>Feed back</h5>
              <p>Result returns to the mix. The loop closes.</p>
            </div>
          </div>
          <Folio page="17" section="Consumer insight" />
        </div>
      </article>

      {/* ============================================== 18 · THE ROOMS */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <div className="pc-well" style={{ padding: "44px 54px 34px" }}>
          <Label teal>Portfolio · the rooms</Label>
          <h2 className="pc-head pc-head-sm" style={{ fontSize: 30, marginTop: 4 }}>
            Where the Correction Happens
          </h2>
          <p className="pc-quiet" style={{ marginTop: 8, maxWidth: 620 }}>
            Boardroom, table, chair. The unglamorous geography of an in-market audit — and the rooms
            where a priority stack gets cut down to the few drivers that move a number.
          </p>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
            <Plate
              src="office.jpg"
              alt="Vineet Trakroo in the boardroom"
              w={732}
              h={549}
              cap="The boardroom · where assumptions get audited"
              credit="Supplied"
            />
            <div style={{ display: "flex", gap: 16 }}>
              <Plate src="desk.jpg" alt="Vineet Trakroo at the table" w={358} h={269} cap="The table" />
              <Plate src="chair.jpg" alt="Vineet Trakroo seated" w={358} h={269} cap="The pause" />
            </div>
          </div>
          <Folio page="18" section="Portfolio" />
        </div>
      </article>

      {/* ============================================== 19 · HOUSE AD */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <AdArt shift={-420} />
        <div className="pc-well" style={{ padding: "54px 50px 38px" }}>
          <p className="pc-ad-kick">Fortiora Group · Advertisement</p>
          <h3 className="pc-ad-hero" style={{ fontSize: 40, marginTop: 12, maxWidth: 640 }}>
            The call you did not answer
            <br />
            <b>was the quarter.</b>
          </h3>
          <div className="pc-rule pc-rule-left" style={{ width: 220, margin: "20px 0 18px" }} />
          <p className="pc-ad-copy" style={{ maxWidth: 600, fontSize: 14.4 }}>
            Enterprises measure sales productivity and still lose the top line in the gaps between
            people — after hours, at peak, on the third follow-up, in the language the customer
            actually speaks. Fortiora builds custom AI voice and copilot systems that close those
            gaps and report what they found. No generic assistant, no pilot that dies in
            procurement: a system wired into your telephony, your price masters and your CRM, with
            an owner and a number attached.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              flex: "0 0 auto",
            }}
          >
            {[
              [
                "Revenue recovery",
                "Every missed call, abandoned quote and dormant account, worked to a rule.",
                "Recovered pipeline, weekly",
              ],
              [
                "Voice of the market",
                "Objections, price friction and churn tells, extracted from real conversations.",
                "Straight to the board pack",
              ],
              [
                "Field & trade support",
                "Dealers and frontline teams answered in seconds, in the register of the counter.",
                "Fewer escalations, faster orders",
              ],
            ].map(([h, b, f]) => (
              <div
                key={h}
                style={{
                  padding: "20px 18px 18px",
                  background: "rgba(255,255,255,0.04)",
                  borderTop: "2px solid var(--pc-brass)",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 8px",
                    fontFamily: "var(--pc-sans)",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "#f4eee2",
                  }}
                >
                  {h}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--pc-serif)",
                    fontSize: 12.4,
                    lineHeight: 1.5,
                    color: "rgba(236,229,216,0.78)",
                  }}
                >
                  {b}
                </p>
                <p
                  style={{
                    margin: "12px 0 0",
                    paddingTop: 10,
                    borderTop: "1px solid rgba(236,229,216,0.12)",
                    fontFamily: "var(--pc-sans)",
                    fontSize: 10.5,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--pc-teal)",
                  }}
                >
                  {f}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 26,
            }}
          >
            <div className="pc-qr-card" style={{ marginTop: 0, width: 200 }}>
              <p>Scan to start</p>
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
              <b>Book a pilot</b>
              <span className="pc-ribbon">Custom AI, built on your commercial reality</span>
            </div>
            <div className="pc-lockup" style={{ flex: "1 1 auto", paddingTop: 16 }}>
              <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
              <p>
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com
                <br />
                30 N Gould St Ste R, Sheridan, WY 82801
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 20 · THROUGH 2030 */}
      <article className="mag-page pc pc-ink">
        <div className="pc-well">
          <Label>Future readiness</Label>
          <h2 className="pc-head pc-head-sm">
            The Few Drivers That
            <br />
            Move the Number
          </h2>
          <p className="pc-dek">
            Current revenue growth does not equal future readiness. One of them can be borrowed.
          </p>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                Current top-line growth, he warns, can easily be an illusion sustained by historical
                distribution moats, broad economic tailwinds, or weak competitors. None of those
                three are capabilities. All three can be withdrawn without notice, and a company that
                mistook them for competence discovers the difference in a single bad year.
              </p>
              <p className="pc-sub pc-sub-teal">The agility gap</p>
              <p>
                Consider legacy giants with near-monopolistic distribution and marketing muscle
                competing against new-age players. A digital-native brand such as Mamaearth achieved
                scale rapidly, outpacing long-standing legacy brands in specific segments despite
                having none of the legacy distribution infrastructure. One company is growing on
                historical momentum; the other was built for the modern consumer journey. From a
                distance the growth lines can look similar. They are not the same asset.
              </p>
              <p className="pc-sub pc-sub-teal">Borrowed capability is a signal</p>
              <p>
                When a global legacy FMCG powerhouse has to lean on a D2C partner to manage digital
                marketing for its own legacy personal-care portfolio, he reads it as a symptom rather
                than a partnership: a deeper struggle to build internal, future-ready capability. The
                media plan is fine. The capability gap is the story.
              </p>
              <p className="pc-sub pc-sub-teal">What future-ready actually means</p>
              <p>
                A future-ready organisation, in his account, is deeply customer-centric. It
                systematically maps shifts in consumer journeys and leverages modern technology and
                AI to deliver hyper-personalised value propositions. That agility — not a platform
                purchase — is the foundation of sustainable long-term compounding.
              </p>
              <p className="pc-sub pc-sub-teal">Through 2030</p>
              <p>
                Building sustainable growth by 2030 requires one core capability: the institutional
                agility to continuously sense and respond to internal and external change. It shows
                up as relentless focus, because sustainable success does not come from doing
                everything; it comes from identifying the few commercial drivers that truly move the
                needle and executing them with extreme rigour. It shows up as active environmental
                scanning, with leadership monitoring market shifts, technological disruption and
                evolving customer journeys, and willing to reshape the operating model to drive
                customer delight. And it shows up as customer obsession held as the north star.
                Restructuring hierarchies, modifying culture and adopting advanced digital platforms
                are enablers. In an era where product features commoditise rapidly, the ultimate
                source of enterprise value remains the customer’s end-to-end journey, usage
                experience and overall satisfaction.
              </p>
            </div>
          </div>

          <div className="pc-skew">
            <p>
              Sustainable success comes from identifying the few commercial drivers that truly move
              the needle — and executing them with extreme rigour.
            </p>
          </div>
          <Folio page="20" section="Through 2030" />
        </div>
      </article>

      {/* ============================================== 21 · CLOSE */}
      <article className="mag-page pc pc-cream">
        <div className="pc-well">
          <Label>The close</Label>
          <h2 className="pc-head pc-head-sm">
            No Pure Mistakes.
            <br />
            Only Learnings.
          </h2>
          <div className="pc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="pc-colwrap">
            <div className="pc-cols pc-drop">
              <p>
                After more than a hundred brands, he refuses to dress a failure up as a tragedy. In
                business, he says, there are no pure mistakes — only learnings. That said, the single
                largest gap between sustained market leadership and stagnation is a specific one:
                failing to adapt offerings and go-to-market models as consumer buying habits evolve.
                It is not a missing slogan. It is a file that stayed still while the buyer did not.
              </p>
              <p className="pc-sub">Assumption versus validation</p>
              <p>
                Tweaking product formulations, packaging or customer touchpoints without direct
                consumer validation is, in his phrase, a recipe for value destruction. The change
                feels productive inside the building and arrives in the market as a stranger.
              </p>
              <p className="pc-sub">Force-fitting across segments</p>
              <p>
                Designing an offering for one niche and then force-fitting it across divergent
                consumer segments leads to brand dilution and weak sales. The initial success is real;
                the extrapolation is what fails.
              </p>
              <p className="pc-sub">Diluting strategic capacity</p>
              <p>
                Organisations frequently try to solve too many initiatives at once, creating
                competing internal priorities. Real transformation requires matching strategic
                ambition to internal capability constraints and executing systematically, phase by
                phase — which brings the argument back to the decision he rates above all others.
              </p>
              <p className="pc-sub">Deciding what to stop</p>
              <p>
                <span className="pc-run">
                  Deciding what not to do is the single most critical decision a CEO will ever make.
                </span>{" "}
                It requires ruthless focus, because an organisation cannot pursue multiple
                high-stakes objectives simultaneously without diluting the quality of all of them.
                Four disciplines make that survivable. Initiatives are prioritised on maximum impact
                to core bottom-line outcomes, and the stack is recalibrated quarterly as capabilities
                mature and bottlenecks clear. Every department rallies around a single shared
                operational agenda, which is the only reliable cure for siloed cross-purposes.
                Advanced analytics are used to surface frontline sales friction, channel margin pain
                points and strategic execution gaps. And internal capability is benchmarked honestly
                against industry leaders — while remembering that sophisticated frameworks and
                analytics are useless without a high-performance culture committed to accountability
                and delivery.
              </p>
            </div>
          </div>

          <div className="pc-skew pc-skew-flat" style={{ marginTop: 16 }}>
            <p>Match the ambition to the capability. Then execute, phase by phase.</p>
          </div>
          <div style={{ marginTop: 12, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
            <div>
              <p className="pc-sign" style={{ fontSize: 34 }}>
                Vineet Trakroo
              </p>
              <p className="pc-sign-role">CEO &amp; Chief Evolution Officer · Evolution Strategy Advisors LLP</p>
            </div>
            <div className="pc-logochip" style={{ padding: "8px 14px" }}>
              <img src={`${IMG}/logo-esa.jpg`} alt="Evolution Strategy Advisors" style={{ width: 150 }} />
            </div>
          </div>
          <Folio page="21" section="The close" />
        </div>
      </article>

      {/* ============================================== 22 · NEXT EDITION */}
      <article className="mag-page pc pc-ink" data-density="hard">
        <img className="pc-credits-bg" src="/brand/backdrop-primecrest.jpg" alt="" />
        <div className="pc-credits-veil" />
        <div className="pc-well" style={{ padding: "56px 52px 42px" }}>
          <Label>PrimeCrest · house page</Label>
          <p className="pc-script pc-script-light" style={{ fontSize: 96, lineHeight: 0.9, marginTop: 6 }}>
            The Next
          </p>
          <h2 className="pc-head" style={{ fontSize: 62, marginTop: -6 }}>
            Edition
          </h2>
          <div className="pc-rule pc-rule-left" style={{ width: 260, margin: "18px 0 22px" }} />
          <p className="pc-ad-copy" style={{ maxWidth: 620, fontSize: 14.6 }}>
            PrimeCrest publishes leaders whose method is worth reading, not only their results. Every
            edition is one long conversation, printed in the order it was answered, with the working
            method drawn out around it. If that is the kind of record you want on file — for a
            founder, an operator, or a chief executive whose quarter deserves more than a press
            release — the desk is open.
          </p>

          <div className="pc-sub-tiers" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div>
              <strong>01</strong>
              <b>Nominate</b>
              <span>A leader, a method, and one number that changed.</span>
            </div>
            <div>
              <strong>02</strong>
              <b>Sit for it</b>
              <span>One interview. We print the answers as given.</span>
            </div>
            <div>
              <strong>03</strong>
              <b>Published</b>
              <span>Digital edition, portfolio, and a permanent link.</span>
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 28,
            }}
          >
            <div>
              <p className="pc-label" style={{ marginBottom: 10 }}>
                Get featured in the upcoming edition of PrimeCrest
              </p>
              <p className="pc-imprint">
                <b>PrimeCrest</b> · a product of Fortiora Group LLC
                <br />
                Hello@thefortiora.com · theprimecrest.com
                <br />
                30 N Gould St Ste R, Sheridan, WY 82801, United States
              </p>
              <span className="pc-pill" style={{ marginTop: 16 }}>
                Because your story deserves the record
              </span>
            </div>
            <div className="pc-qr-card" style={{ marginTop: 0, width: 208 }}>
              <p>Scan the QR code</p>
              <img src="/brand/qr-primecrest.png" alt="Scan to reach PrimeCrest" />
              <b>Register interest</b>
              <span className="pc-ribbon">theprimecrest.com</span>
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 23 · BACK COVER */}
      <article className="mag-page pc pc-bleed" data-density="hard">
        <img className="pc-img" src="/brand/backdrop-primecrest.jpg" alt="" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "radial-gradient(70% 50% at 50% 34%, rgba(23,149,154,0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(7,10,11,0.82) 0%, rgba(7,10,11,0.62) 40%, rgba(7,10,11,0.92) 100%)",
          }}
        />
        <div className="pc-well pc-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img className="pc-back-logo" src="/brand/logo-primecrest.png" alt="PrimeCrest" />
            <span className="pc-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--pc-serif)",
                fontSize: 18,
                fontStyle: "italic",
                lineHeight: 1.66,
                letterSpacing: "-0.012em",
                color: "rgba(242,237,227,0.86)",
              }}
            >
              A journal of affairs, business and culture — independent reporting, considered writing,
              and the people who shape what comes next.
            </p>
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            <img
              src="/brand/qr-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 132, height: 132, padding: 7, background: "#f7f4ee", boxShadow: "0 10px 26px rgba(0,0,0,0.5)" }}
            />
            <p className="pc-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <b>theprimecrest.com</b>
            </p>
            <div className="pc-hair" style={{ width: 320 }} />
            <p className="pc-label" style={{ letterSpacing: "0.4em" }}>
              The Evolution Issue · Vol. IX
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
