/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

const IMG = "/issues/vineet";

const CREAM = "#f4efe6";
const TEAL = "#0d7377";
const INK = "#062e30";
const CREAM_DIM = "rgba(244, 239, 230, 0.7)";

export const VINEET_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Portrait" },
  { page: 4, label: "Contents" },
  { page: 5, label: "Diagnosis" },
  { page: 6, label: "Portrait" },
  { page: 7, label: "The Split" },
  { page: 8, label: "The Record" },
  { page: 9, label: "Vision Board" },
  { page: 10, label: "The 90 Percent" },
  { page: 11, label: "Portrait" },
  { page: 12, label: "Through 2030" },
  { page: 13, label: "Future Ready" },
  { page: 14, label: "Close" },
  { page: 15, label: "PrimeCrest" },
];

function Sq({ light }: { light?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        background: light ? CREAM : TEAL,
        marginRight: 10,
        verticalAlign: 1,
        flexShrink: 0,
      }}
    />
  );
}

function LCorner({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative", padding: "14px 12px 12px 16px" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          borderTop: `2px solid ${TEAL}`,
          borderLeft: `2px solid ${TEAL}`,
        }}
      />
      {children}
    </div>
  );
}

function Kicker({ children, light }: { children: string; light?: boolean }) {
  return (
    <p
      className={light ? "mag-kicker mag-kicker-light" : "mag-kicker"}
      style={{
        color: light ? CREAM : TEAL,
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.22em",
      }}
    >
      <Sq light={light} />
      {children}
    </p>
  );
}

export function VineetPages() {
  return (
    <>
      {/* 01 Cover — asymmetric: mark top-left, title at 38%, portrait right */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/coverart.jpg`}
          alt="Vineet Trakroo"
          fetchPriority="high"
          style={{ objectPosition: "right center" }}
        />
        <div
          className="mag-scrim"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,46,48,0.82) 0%, rgba(6,46,48,0.46) 30%, rgba(6,46,48,0.08) 48%, transparent 60%)",
          }}
        />
        <div className="mag-overlay">
          <div style={{ alignSelf: "flex-start", maxWidth: 340 }}>
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{
                width: 268,
                height: "auto",
                filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.5))",
              }}
            />
            <div
              style={{
                marginTop: 12,
                paddingTop: 10,
                borderTop: "1px solid rgba(244,239,230,0.35)",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: CREAM,
              }}
            >
              Vol. IX · The Evolution Issue
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "38%",
              left: 58,
              maxWidth: 348,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: TEAL,
              }}
            >
              Making a difference in 2026
            </p>
            <h1
              className="mag-display"
              style={{
                marginTop: 14,
                color: "#fff",
                fontSize: 46,
                lineHeight: 1.0,
                letterSpacing: "-0.045em",
                textShadow: "0 8px 28px rgba(0,0,0,0.5)",
              }}
            >
              Top 10
              <br />
              Unstoppable
              <br />
              Business
              <br />
              Leaders<span style={{ color: TEAL }}>.</span>
            </h1>
            <div
              style={{
                marginTop: 22,
                paddingTop: 14,
                borderTop: "1px solid rgba(244,239,230,0.38)",
              }}
            >
              <p className="mag-display" style={{ fontSize: 32, color: CREAM, letterSpacing: "-0.03em" }}>
                Vineet Trakroo
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: CREAM,
                }}
              >
                CEO &amp; Chief Evolution Officer
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 16,
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  color: "rgba(244,239,230,0.88)",
                }}
              >
                Evolution Strategy Advisors LLP
              </p>
            </div>
          </div>
        </div>
        <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="Scan to visit theprimecrest.com" />
      </article>

      {/* 02 Credits — left, teal-dark */}
      <article className="mag-page mag-pad mag-teal">
        <div className="mag-body mag-fill-page">
          <Kicker light>The imprint</Kicker>
          <h2
            className="mag-h"
            style={{ color: CREAM, fontStyle: "italic", fontWeight: 500, fontSize: 56, letterSpacing: "-0.04em", marginBottom: 28 }}
          >
            Credits.
          </h2>
          <ul
            className="mag-credits-list"
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}
          >
            <li>
              <b>Magazine</b>
              <span>PrimeCrest · theprimecrest.com</span>
            </li>
            <li>
              <b>Published by</b>
              <span>Fortiora Group LLC</span>
            </li>
            <li>
              <b>Editorial &amp; Design</b>
              <span>Fortiora Studio</span>
            </li>
            <li>
              <b>Digital Production</b>
              <span>Fortiora Studio</span>
            </li>
            <li>
              <b>Featured Subject</b>
              <span>Vineet Trakroo</span>
            </li>
            <li>
              <b>Words</b>
              <span>From the interview of Vineet Trakroo</span>
            </li>
            <li>
              <b>Issue</b>
              <span>Vol. IX · The Evolution Issue</span>
            </li>
          </ul>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              textAlign: "center",
            }}
          >
            <img src="/brand/logo-primecrest.png" alt="PrimeCrest" style={{ width: 300, height: "auto" }} />
            <p className="mag-imprint">
              <strong>PrimeCrest</strong> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <strong>theprimecrest.com</strong>
            </p>
            <img
              src="/brand/barcode-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 178, height: "auto" }}
            />
            <p className="mag-imprint" style={{ fontSize: 11, color: "rgba(244,239,230,0.45)", maxWidth: 520 }}>
              © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
              reproduced or transmitted in any form without prior written permission from the
              publisher.
            </p>
          </div>
        </div>
      </article>

      {/* 03 Opener — text top, landscape strip bottom */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
          <Kicker>The subject</Kicker>
          <h2 className="mag-h" style={{ letterSpacing: "-0.038em", maxWidth: 620 }}>
            Sales is the last number you see.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.7, letterSpacing: "-0.012em" }}>
            Vineet Trakroo is CEO and Chief Evolution Officer at Evolution Strategy Advisors LLP.
            The brief he keeps is short: growth, strategy, execution, future readiness. He has
            worked it across FMCG, automobiles, pharma, consumer products, and building materials.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7, letterSpacing: "-0.012em" }}>
            More than a hundred brands. The first thing he says is almost a shrug. Sales is merely
            the effect, the final leg of the entire commercial engine. If the figure is short, the
            work is to find what is hiding underneath.
          </p>
          <img
            src={`${IMG}/arms.jpg`}
            alt="Vineet Trakroo on a city balcony at dusk"
            style={{
              display: "block",
              margin: "auto -58px 0",
              width: "calc(100% + 116px)",
              height: 318,
              objectFit: "cover",
              objectPosition: "center 28%",
            }}
          />
        </div>
      </article>

      {/* 04 Photo bleed */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/office.jpg`} alt="Vineet Trakroo" style={{ objectPosition: "center 20%" }} />
        <div className="mag-caption-bar">The office floor · glass, geometry, and a standing brief</div>
      </article>

      {/* 05 Contents — 2-column card grid, teal L-corners */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>In this issue</Kicker>
          <h2 className="mag-h" style={{ letterSpacing: "-0.04em", marginBottom: 22 }}>
            The commercial engine.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              flex: 1,
            }}
          >
            {[
              ["06", "Diagnosis", "What sits under a weak sales line."],
              ["08", "The Split", "Growth problem, or a leak in the bucket."],
              ["09", "The Record", "The role, the firm, the industries."],
              ["10", "Vision Board", "Six frames. One word each."],
              ["11", "The 90 Percent", "Why a sound strategy still fails."],
              ["13", "Through 2030", "Agility, and the few drivers that count."],
            ].map(([num, title, note]) => (
              <div
                key={num}
                style={{
                  background: "rgba(13, 115, 119, 0.05)",
                  border: "1px solid rgba(13, 115, 119, 0.18)",
                }}
              >
                <LCorner>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      color: TEAL,
                    }}
                  >
                    {num}
                  </p>
                  <p
                    className="mag-display"
                    style={{ margin: "8px 0 6px", fontSize: 22, letterSpacing: "-0.03em", color: INK }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: 14.5,
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      color: "#4a4338",
                    }}
                  >
                    {note}
                  </p>
                </LCorner>
              </div>
            ))}
          </div>
          <p className="mag-foot">The Evolution Issue · 05</p>
        </div>
      </article>

      {/* 06 Feature — diagnosis */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>Diagnosis</Kicker>
          <h2 className="mag-h" style={{ letterSpacing: "-0.038em" }}>
            What is usually hiding underneath.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.68, letterSpacing: "-0.01em" }}>
            <p style={{ margin: "0 0 12px" }}>
              If sales figures fall short of targets, the diagnosis is not a marketing meeting. Multiple
              functions feed the number. The bottlenecks rarely sit in a single department.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              Underneath sluggish numbers he finds softer friction: misaligned culture, leadership
              gaps, flawed strategic choices, team competency deficits. Delivery processes and a
              poorly designed customer experience can quietly take the top line with them.
            </p>
            <p style={{ margin: 0 }}>
              Modern organizations generate departmental data. Operational drag shows up in the
              supply chain, in satisfaction drop-offs, in poor sales productivity. The real story is
              always in the data. Leadership has to look at it.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "22px 8px 8px", fontSize: 28, color: TEAL, letterSpacing: "-0.03em" }}>
            The real story is always in the data.
          </blockquote>
          <p className="mag-folio" style={{ fontSize: 16.5, lineHeight: 1.62, letterSpacing: "-0.01em", marginBottom: 0 }}>
            Many brick-and-mortar companies still score teams on KPIs written two or three decades
            ago. Today, many enterprises take 30 to 50 percent of their business from digital
            channels. That is where the incremental growth sits. The metrics have to follow.
          </p>
          <p className="mag-foot">The Evolution Issue · 06</p>
        </div>
      </article>

      {/* 07 Photo */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/desk.jpg`} alt="Vineet Trakroo at his desk" style={{ objectPosition: "center 40%" }} />
        <div className="mag-caption-bar">The desk · a growth problem and an execution problem are not the same thing</div>
      </article>

      {/* 08 Feature — growth vs execution */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>The split</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ letterSpacing: "-0.036em" }}>
            A growth problem is strategic. An execution problem is a leak.
          </h2>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.01em" }}>
            A growth problem is tied to market headroom, category choices, and positioning. It can
            often be solved with a tactical pivot and a go-to-market that builds value. Hit 50 percent
            share in a mature segment and the headroom thins. New growth means new customers.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.01em" }}>
            An execution problem is systemic. A structural leak in the bucket. If sales productivity
            is chronically low, the issue is operational. Fixing it takes longer: infrastructure,
            new procedures, and the organization actually adopting them.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.01em" }}>
            The two are not cousins you can ignore. A brilliant growth thesis fails if the engine
            cannot deliver.
          </p>
          <blockquote className="mag-quote" style={{ margin: "8px 0 0", borderColor: TEAL, color: INK }}>
            Deciding what not to do is the single most critical decision a CEO will ever make.
          </blockquote>
          <p className="mag-foot">The Evolution Issue · 08</p>
        </div>
      </article>

      {/* 09 Record — compact teal-ruled rows */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>The record</Kicker>
          <h2 className="mag-h" style={{ letterSpacing: "-0.04em", marginBottom: 18 }}>
            The file, as given.
          </h2>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {[
              ["Name", "Vineet Trakroo"],
              ["Role", "CEO & Chief Evolution Officer"],
              ["Firm", "Evolution Strategy Advisors LLP"],
              ["Watchwords", "Growth · Strategy · Execution · Future readiness"],
              ["Industries", "FMCG, automobiles, pharma, consumer products, building materials"],
              ["Work", "100+ brands"],
              ["Interview", "Root causes, execution, consumer insight, future readiness"],
              ["Plate", "Recognition image supplied with the feature materials"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "168px 1fr",
                  gap: 18,
                  alignItems: "baseline",
                  padding: "13px 0",
                  borderTop: `1.5px solid ${TEAL}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: TEAL,
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 18,
                    letterSpacing: "-0.015em",
                    color: INK,
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
            <div style={{ borderTop: `1.5px solid ${TEAL}`, flex: 1 }} />
          </div>
          <p className="mag-note" style={{ color: TEAL, marginTop: 8 }}>
            Awards references as supplied: theevolutionconsulting.com/awards.php
          </p>
          <p className="mag-foot">The Evolution Issue · 09</p>
        </div>
      </article>

      {/* 10 Vision board — unique photo grid */}
      <article className="mag-page mag-pad mag-teal">
        <div className="mag-body mag-fill-page">
          <Kicker light>Vision board</Kicker>
          <h2
            className="mag-h mag-h-light"
            style={{ fontSize: 34, letterSpacing: "-0.04em", marginBottom: 18 }}
          >
            Six rooms. One word.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              flex: 1,
            }}
          >
            {[
              ["balcony.jpg", "Horizon", "center 40%"],
              ["desk.jpg", "Counsel", "center 35%"],
              ["chair.jpg", "Pause", "center 40%"],
              ["office.jpg", "Glass", "center 30%"],
              ["lobby.jpg", "Frame", "center 18%"],
              ["vest.jpg", "Still", "center 20%"],
            ].map(([src, word, pos]) => (
              <div key={word} style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
                <img
                  src={`${IMG}/${src}`}
                  alt={word}
                  style={{
                    width: "100%",
                    height: 196,
                    objectFit: "cover",
                    objectPosition: pos,
                    display: "block",
                  }}
                />
                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: CREAM,
                  }}
                >
                  {word}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: "rgba(244,239,230,0.4)" }}>
            The Evolution Issue · 10
          </p>
        </div>
      </article>

      {/* 11 Philosophy */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>The 90 percent</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ letterSpacing: "-0.036em" }}>
            Strategy is ten. Execution is the rest.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.68, letterSpacing: "-0.01em" }}>
            In organizational effort, strategy is 10 percent. Execution is 90. A sound plan still
            fails when the work is neglected. Teams slip into the comfortable routine. Action
            becomes muscle memory, not a reply to the market in front of them.
          </p>
          <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.68, letterSpacing: "-0.01em" }}>
            Teams sitting too close to the day miss the structural problem forming under it. Sidney
            Yoshida called the rest the iceberg: less than 10 percent of frontline operational
            problems ever reach the top. Dealer and sales-floor feedback thins on the way to
            headquarters. Leadership works in a vacuum.
          </p>
          <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.68, letterSpacing: "-0.01em" }}>
            Research that stays inside marketing as a deck does not grow a company. Usage and
            attitude shift as people live with a product — from the first job it does to packaging,
            dosage, the way it fits a life. Leading houses keep an NPD pipeline that turns that
            feedback into a SKU, a pack change, or a new line.
          </p>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", fontSize: 26, color: TEAL, letterSpacing: "-0.03em" }}>
            Less than 10% of frontline problems ever reach the top.
          </blockquote>
          <p className="mag-foot">The Evolution Issue · 11</p>
        </div>
      </article>

      {/* 12 Photo */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/vest.jpg`} alt="Vineet Trakroo" style={{ objectPosition: "center 18%" }} />
        <div className="mag-caption-bar">Hands in pockets · the pause before the next brief</div>
      </article>

      {/* 13 Outlook + teal darkband */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
          <div style={{ paddingBottom: 18 }}>
            <Kicker>Through 2030</Kicker>
            <h2 className="mag-h mag-h-sm" style={{ letterSpacing: "-0.036em" }}>
              Current growth is not the same as being ready.
            </h2>
            <p className="mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.68, letterSpacing: "-0.012em" }}>
              Building through 2030, he says, takes one capability: the institutional agility to
              sense a change — inside the firm or outside it — and respond. Sustainable success
              does not come from doing everything. It comes from the few commercial drivers that
              move the number, executed with rigor.
            </p>
            <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.68, letterSpacing: "-0.012em" }}>
              Leadership has to watch the market, the technology, and how people actually buy —
              and be willing to reshape the operating model. Hierarchies, culture, digital
              platforms: those are enablers. Product features go commodity. The value that remains
              is the customer&apos;s path from first look to use, and whether they stay satisfied.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "8px 8px 18px", fontSize: 26, color: TEAL, letterSpacing: "-0.03em" }}>
            Identify the few drivers. Execute them.
          </blockquote>
          <div className="mag-darkband" style={{ margin: "0 -58px", background: INK, color: CREAM }}>
            Customer obsession as the North Star.
          </div>
        </div>
      </article>

      {/* 14 Overlay — type bottom-left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/balcony.jpg`}
          alt=""
          style={{ objectPosition: "right 35%" }}
        />
        <div className="mag-scrim mag-scrim-teal" />
        <div
          className="mag-overlay"
          style={{ justifyContent: "flex-end", alignItems: "flex-start", paddingBottom: 48 }}
        >
          <Kicker light>Future ready</Kicker>
          <h2
            className="mag-h mag-h-light"
            style={{ fontSize: 36, maxWidth: 480, letterSpacing: "-0.038em", marginTop: 8 }}
          >
            Today&apos;s revenue can be an illusion.
          </h2>
          <p
            className="mag-folio"
            style={{ color: CREAM_DIM, maxWidth: 460, textAlign: "left", fontSize: 16.5, letterSpacing: "-0.01em" }}
          >
            Historical distribution, a kind economy, weak competitors — any of these can hold a
            top line up. A digital-native brand such as Mamaearth scaled without the old
            infrastructure. One company is living on momentum. The other was built for how people
            buy now.
          </p>
        </div>
      </article>

      {/* 15 Close */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <Kicker>Close</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ letterSpacing: "-0.036em" }}>
            No pure mistakes. Only learnings.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.7, letterSpacing: "-0.012em" }}>
            After 100+ brands, he will not dress a failure up as tragedy. In business, he says,
            there are no pure mistakes — only learnings. The gap he sees between staying ahead
            and stalling is simpler than the decks suggest: offerings and go-to-market models that
            do not move when buying habits do.
          </p>
          <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.7, letterSpacing: "-0.012em" }}>
            Tweaking a formula, a pack, or a touchpoint without asking the person who uses it is
            how value disappears. Designing for one niche and force-fitting it across the rest
            dilutes the brand. Trying to solve too many initiatives at once splits the room.
          </p>
          <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.7, letterSpacing: "-0.012em" }}>
            Real change matches the ambition to the capability you actually have. Then it proceeds
            in phases. Not all at once.
          </p>
          <blockquote className="mag-quote" style={{ margin: "auto 0 0", borderColor: TEAL, color: INK }}>
            Match the ambition to the constraint. Then execute, phase by phase.
          </blockquote>
          <p className="mag-foot">The Evolution Issue · 15</p>
        </div>
      </article>

      {/* 16 PrimeCrest back */}
      <article className="mag-page mag-bleed mag-teal" data-density="hard">
        <img className="mag-fill" src={`${IMG}/backcover.jpg`} alt="" />
        <div
          className="mag-overlay"
          style={{ alignItems: "center", textAlign: "center", padding: "60px 52px 44px" }}
        >
          <div
            style={{
              margin: "auto 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{
                width: "84%",
                maxWidth: 600,
                height: "auto",
                filter: "drop-shadow(0 10px 34px rgba(0,0,0,0.65))",
              }}
            />
            <p
              style={{
                margin: "26px 0 0",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.5em",
                textIndent: "0.5em",
                textTransform: "uppercase",
                color: TEAL,
              }}
            >
              Where Vision Meets Voice
            </p>
            <p
              style={{
                margin: "34px 0 0",
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 19,
                fontStyle: "italic",
                lineHeight: 1.65,
                letterSpacing: "-0.015em",
                color: "rgba(244,239,230,0.85)",
                maxWidth: 470,
              }}
            >
              A journal of affairs, business, and culture — independent reporting, considered
              writing, and the people who shape what comes next.
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
              src="/brand/barcode-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 210, height: "auto", boxShadow: "0 10px 26px rgba(0,0,0,0.45)" }}
            />
            <p className="mag-imprint">
              <strong>PrimeCrest</strong> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <strong>theprimecrest.com</strong>
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: TEAL,
              }}
            >
              The Evolution Issue · Vol. IX
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
