/* eslint-disable @next/next/no-img-element */
const IMG = "/issues/foskaris";

const CREAM = "#f6f0e6";
const MAGENTA = "#e84393";
const CHARCOAL = "#1c1c1c";

export const FOSKARIS_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Opening" },
  { page: 4, label: "Contents" },
  { page: 5, label: "Five Thousand" },
  { page: 6, label: "Statement" },
  { page: 7, label: "Manifesto" },
  { page: 8, label: "Home Use" },
  { page: 10, label: "The Measure" },
  { page: 11, label: "Statement" },
  { page: 12, label: "The Horizon" },
  { page: 14, label: "Unstoppable" },
  { page: 15, label: "PrimeCrest" },
];

export function FoskarisPages() {
  return (
    <>
      {/* 01 Cover — portrait top 60%, charcoal slab bottom 40% */}
      <article className="mag-page mag-bleed mag-fosk-cover" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/coverart.jpg`}
          alt="Penny Foskaris"
          fetchPriority="high"
        />
        <div className="mag-fosk-slab">
          <div className="mag-fosk-slab-main">
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{ width: "72%", maxWidth: 420, height: "auto" }}
            />
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: CREAM,
              }}
            >
              Vol. VIII · The Vitality Issue · theprimecrest.com
            </p>
            <p
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: MAGENTA,
              }}
            >
              Making a difference in 2026
            </p>
            <h1
              className="mag-display"
              style={{
                marginTop: 8,
                color: "#fff",
                fontSize: 34,
                lineHeight: 1.05,
              }}
            >
              Top 10 Unstoppable
              <br />
              Business Leaders<span style={{ color: MAGENTA }}>.</span>
            </h1>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 12,
                borderTop: "1px solid rgba(246,240,230,0.22)",
              }}
            >
              <p className="mag-display" style={{ fontSize: 30, color: CREAM }}>
                Penny Foskaris
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: CREAM,
                }}
              >
                Founder
              </p>
              <p
                style={{
                  margin: "5px 0 0",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(246,240,230,0.86)",
                }}
              >
                Red Light Pro Devices &amp; Foskaris Wellness
                <br />
                Anaheim Hills, California · United States
              </p>
            </div>
          </div>
          <div className="mag-fosk-slab-bar">
            <img
              className="mag-qr"
              src="/brand/barcode-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ position: "static", width: 148, boxShadow: "0 8px 20px rgba(0,0,0,0.45)" }}
            />
          </div>
        </div>
      </article>

      {/* 02 Credits */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            The imprint
          </p>
          <h2
            className="mag-h"
            style={{ color: CREAM, fontStyle: "italic", fontWeight: 500, fontSize: 58, marginBottom: 28 }}
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
              <span>Penny Foskaris</span>
            </li>
            <li>
              <b>Words</b>
              <span>From the interviews of Penny Foskaris</span>
            </li>
            <li>
              <b>Issue</b>
              <span>Vol. VIII · The Vitality Issue</span>
            </li>
          </ul>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
              textAlign: "center",
            }}
          >
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{ width: 280, height: "auto" }}
            />
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
              style={{ width: 168, height: "auto" }}
            />
            <p className="mag-imprint" style={{ fontSize: 11, color: "rgba(246,240,230,0.42)", maxWidth: 520 }}>
              © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
              reproduced or transmitted in any form without prior written permission from the
              publisher.
            </p>
          </div>
        </div>
      </article>

      {/* 03 Opener */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            The Opening
          </p>
          <h2 className="mag-h mag-h-sm">The room she could not find.</h2>
          <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p className="mag-folio mag-dropcap">
                Penny Foskaris was a teenager in a library because an aunt had Type 1 diabetes and
                another relative had heart disease. She wanted to know if food could help. She did
                not yet know those hours would become a life.
              </p>
              <p className="mag-folio">
                In her mid-thirties the question turned on her. More than two and a half years of
                dizzy spells, chronic fatigue, continuous abdominal pain. Doctor to doctor. Test
                after test. No one could say what was wrong. It was expensive. It was exhausting.
              </p>
            </div>
            <div style={{ width: 176, flexShrink: 0, textAlign: "center", paddingTop: 6 }}>
              <img
                className="mag-avatar"
                src={`${IMG}/portrait2.jpg`}
                alt="Penny Foskaris"
                style={{ borderColor: MAGENTA }}
              />
              <p className="mag-by">Penny Foskaris</p>
              <p className="mag-role">Founder</p>
            </div>
          </div>
          <p className="mag-folio">
            A holistic wellness center. Within a week she began to feel better. She went back to
            school. She opened Foskaris Wellness — the kind of place she had needed and could not
            find. People were not rushed out the door. She looked at the whole person.
          </p>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: CHARCOAL }}>
            Reveal. Restore. Reverse.
          </blockquote>
        </div>
      </article>

      {/* 04 Photo bleed */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/kitchen.jpg`}
          alt="Penny Foskaris in the kitchen"
          style={{ objectPosition: "center 22%" }}
        />
        <div className="mag-caption-bar">
          Penny Foskaris · Foskaris Wellness · Anaheim Hills, California
        </div>
      </article>

      {/* 05 Contents — magenta numbered 01–08 */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            In this issue
          </p>
          <h2 className="mag-h" style={{ fontSize: 40, marginBottom: 8 }}>
            Contents.
          </h2>
          <ol className="mag-fosk-toc">
            <li>
              <b>01</b>
              <span>The Opening</span>
              <em>03</em>
            </li>
            <li>
              <b>02</b>
              <span>Five Thousand</span>
              <em>06</em>
            </li>
            <li>
              <b>03</b>
              <span>The Sentence</span>
              <em>07</em>
            </li>
            <li>
              <b>04</b>
              <span>Manifesto</span>
              <em>08</em>
            </li>
            <li>
              <b>05</b>
              <span>Home Use</span>
              <em>09</em>
            </li>
            <li>
              <b>06</b>
              <span>The Measure</span>
              <em>11</em>
            </li>
            <li>
              <b>07</b>
              <span>The Horizon</span>
              <em>13</em>
            </li>
            <li>
              <b>08</b>
              <span>Unstoppable</span>
              <em>15</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            Five Thousand
          </p>
          <h2 className="mag-h mag-h-sm">She looks at the whole picture.</h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.72 }}>
            <p style={{ margin: "0 0 12px" }}>
              She approaches health like a researcher. A symptom is often the end result. Rather
              than chase it, she asks for a history — sleep, food, whether a person is eating
              enough, medications, stress, body composition, visceral fat.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              Sleep first. If the body does not rest, it cannot repair. She has watched
              under-nourished clients start sleeping once the fuel was there. Everything, she
              says, is interconnected.
            </p>
            <p style={{ margin: 0 }}>
              She does not order every test on day one. A conversation. A plan a person can
              actually follow. Then another layer if the body asks for it. More than five thousand
              people have come through that method — less pain, less fat, better markers, a chance
              at vitality.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: CHARCOAL, fontSize: 26 }}>
            Longevity is not simply how many years you live.
          </blockquote>
          <p className="mag-foot">The Vitality Issue · 06</p>
        </div>
      </article>

      {/* 07 STATEMENT */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body">
          <div className="mag-fosk-state">
            <p
              className="mag-kicker"
              style={{ color: MAGENTA, marginBottom: 28, letterSpacing: "0.28em" }}
            >
              On longevity
            </p>
            <p
              className="mag-display"
              style={{
                color: MAGENTA,
                fontSize: 44,
                lineHeight: 1.18,
                textAlign: "center",
                maxWidth: 620,
              }}
            >
              If you don&apos;t feel well enough to enjoy those years, that&apos;s not truly living.
            </p>
          </div>
        </div>
      </article>

      {/* 08 MANIFESTO */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body">
          <p
            className="mag-kicker"
            style={{ color: MAGENTA, textAlign: "center", letterSpacing: "0.28em" }}
          >
            Manifesto
          </p>
          <div className="mag-fosk-mani">
            <p>Reveal. Restore. Reverse.</p>
            <p>A symptom is the end result.</p>
            <p>Look at the whole person.</p>
            <p>Do not rush them out the door.</p>
            <p>Everything is interconnected.</p>
          </div>
        </div>
      </article>

      {/* 09 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            Home Use
          </p>
          <h2 className="mag-h mag-h-sm">The manufacturer said no.</h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.72 }}>
            <p style={{ margin: "0 0 12px" }}>
              Red Light Pro Devices was not a second brand in search of a market. Clients had
              used the professional system at Foskaris Wellness for about three years. They asked
              for something they could take home. She tested about a dozen devices. Wrap one
              around a knee and little happened. The clinic machine was another story.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              The company behind the roughly $28,000 system was not interested in a smaller unit.
              She found engineers at another red-light firm. Months of LED layouts and power.
              The test was simple. If she would not use it in her own center, it would not carry
              her name.
            </p>
            <p style={{ margin: 0 }}>
              That gap — clinic quality, home format — is the company. Not a trend she decided
              to join.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: CHARCOAL, fontSize: 24 }}>
            It had to be something I would actually use myself.
          </blockquote>
          <p className="mag-foot">The Vitality Issue · 09</p>
        </div>
      </article>

      {/* 10 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait.jpg`}
          alt="Penny Foskaris"
          style={{ objectPosition: "center 18%" }}
        />
        <div className="mag-caption-bar">
          Founder · Red Light Pro Devices &amp; Foskaris Wellness
        </div>
      </article>

      {/* 11 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            The Measure
          </p>
          <h2 className="mag-h mag-h-sm">Not a milestone. A place to be heard.</h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.7 }}>
            <p style={{ margin: "0 0 12px" }}>
              What she is most proud of is not a figure on a ledger. It is a room people can
              enter when they do not feel like themselves, tell the story, and leave with a
              path. She knows the years of unanswered tests. She turned that stretch into less
              struggle for someone else.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              One client used to fly in twice a month. The fare and the hours piled up. Remote
              work, testing, and devices shipped to the door changed the map. Someone should
              not have to live next to the office to get help.
            </p>
            <p style={{ margin: 0 }}>
              At the Red Light Pro Devices location in Anaheim Hills, a rent-to-buy month lets
              a person try the light at home and put the rental toward a purchase. She wants
              that model in offices across the United States. Same purpose as the wellness
              center: take down the barrier.
            </p>
          </div>
          <p className="mag-foot">The Vitality Issue · 11</p>
        </div>
      </article>

      {/* 12 STATEMENT 2 */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body">
          <div className="mag-fosk-state">
            <p
              className="mag-kicker"
              style={{ color: MAGENTA, marginBottom: 28, letterSpacing: "0.28em" }}
            >
              On setbacks
            </p>
            <p
              className="mag-display"
              style={{
                color: MAGENTA,
                fontSize: 44,
                lineHeight: 1.18,
                textAlign: "center",
                maxWidth: 620,
              }}
            >
              Setbacks can be the springboard for innovation.
            </p>
          </div>
        </div>
      </article>

      {/* 13 Outlook + darkband */}
      <article className="mag-page mag-pad mag-fosk mag-pb0">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            The Horizon
          </p>
          <h2 className="mag-h mag-h-sm">Still early days for the light.</h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.68 }}>
            She thinks photobiomodulation is only beginning. More papers. More clinicians.
            She wants red light in high-school and college athletic rooms — not only after a
            sprain, but before the match. Recovery rooms at home, the way people now keep a
            gym. Cognitive research over the next decade. A hub of longevity information
            people can reach from anywhere: education, telehealth, remote testing.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.68 }}>
            Technology is a piece. The foundation is still nutrition, sleep, movement, stress,
            and what goes into the body every day. The point is not only more years. It is
            staying active enough to use them — ten, twenty, thirty years from now.
          </p>
          <div className="mag-darkband" style={{ margin: "auto -58px 0", background: CHARCOAL, color: MAGENTA }}>
            Stay committed to the purpose. Stay flexible about the path.
          </div>
        </div>
      </article>

      {/* 14 Photo + bottom slab */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/kitchen.jpg`}
          alt=""
          style={{ objectPosition: "center 12%" }}
        />
        <div className="mag-fosk-footslab">
          <p
            className="mag-kicker"
            style={{ color: MAGENTA, marginBottom: 10 }}
          >
            Foskaris Wellness
          </p>
          <p
            className="mag-display"
            style={{ color: CREAM, fontSize: 30, lineHeight: 1.15, maxWidth: 620 }}
          >
            A place where people weren&apos;t rushed out the door.
          </p>
        </div>
      </article>

      {/* 15 Close */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            Unstoppable
          </p>
          <h2 className="mag-h mag-h-sm">Ask why. Then put a floor under it.</h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.68 }}>
            More than ten years in, she has had to pivot as markets moved and clients changed.
            Unstoppable, to her, is not a life without setbacks. It is learning, adapting, and
            finding another way. A strong vision gives direction. It should not freeze the
            route.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.68 }}>
            To women who want to build something: start with why. She came out of the family
            restaurant trade. People told her a restaurant was easy money. She told them they
            would be married to it. Passion keeps you in the room. A plan — costs, licenses,
            books, year one and year five — is what lets the thing last.
          </p>
          <blockquote className="mag-quote" style={{ margin: "auto 0 0", color: CHARCOAL, borderLeftColor: MAGENTA }}>
            Your why has to be strong enough to carry you through the parts that aren&apos;t exciting.
          </blockquote>
        </div>
      </article>

      {/* 16 PrimeCrest back */}
      <article className="mag-page mag-bleed mag-dark mag-charcoal" data-density="hard">
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
                color: MAGENTA,
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
                color: "rgba(246,240,230,0.85)",
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
                color: MAGENTA,
              }}
            >
              The Vitality Issue · Vol. VIII
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
