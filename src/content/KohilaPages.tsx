/* eslint-disable @next/next/no-img-element */
const IMG = "/issues/kohila";

const CREAM = "#f4efe6";
const COPPER = "#b0561f";
const DARK = "#1a1008";
const CREAM_DIM = "rgba(244, 239, 230, 0.72)";

export const KOHILA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Question" },
  { page: 7, label: "The Lesson" },
  { page: 8, label: "The Record" },
  { page: 9, label: "Credentials" },
  { page: 10, label: "Philosophy" },
  { page: 12, label: "Outlook" },
  { page: 13, label: "The Stage" },
  { page: 14, label: "Close" },
  { page: 15, label: "PrimeCrest" },
];

function Kicker({
  children,
  light,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p
      className={light ? "mag-kicker mag-kicker-light mag-kicker-hair" : "mag-kicker mag-kicker-hair"}
      style={{ color: light ? CREAM : COPPER }}
    >
      {children}
    </p>
  );
}

export function KohilaPages() {
  return (
    <>
      {/* 01 Cover — stacked title FAR LEFT, portrait right */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/coverart.jpg`}
          alt="Kohila Sivas"
          fetchPriority="high"
          style={{ objectPosition: "right center" }}
        />
        <div
          className="mag-scrim"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,16,8,0.82) 0%, rgba(26,16,8,0.42) 28%, rgba(26,16,8,0.08) 48%, transparent 62%)",
          }}
        />
        <div className="mag-overlay">
          <div style={{ textAlign: "center" }}>
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{
                width: "76%",
                maxWidth: 560,
                height: "auto",
                filter: "drop-shadow(0 6px 22px rgba(0,0,0,0.55))",
              }}
            />
            <div
              style={{
                margin: "18px auto 0",
                paddingTop: 12,
                borderTop: "1px solid rgba(244,239,230,0.45)",
                maxWidth: 560,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: CREAM,
              }}
            >
              Vol. V · The Readiness Issue · theprimecrest.com
            </div>
          </div>

          <div style={{ marginTop: "auto", maxWidth: 280 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: COPPER,
              }}
            >
              Making a difference
              <br />
              in 2026
            </p>
            <div style={{ width: 80, height: 1, background: COPPER, margin: "12px 0 0" }} />
            <h1
              className="mag-display"
              style={{
                marginTop: 16,
                color: "#fff",
                fontSize: 44,
                lineHeight: 1.02,
                textShadow: "0 8px 32px rgba(0,0,0,0.55)",
              }}
            >
              Top 10
              <br />
              Unstoppable
              <br />
              Business
              <br />
              Leaders<span style={{ color: COPPER }}>.</span>
            </h1>
            <div
              style={{
                marginTop: 22,
                paddingTop: 14,
                borderTop: "1px solid rgba(244,239,230,0.4)",
              }}
            >
              <p className="mag-display" style={{ fontSize: 30, color: CREAM }}>
                Kohila Sivas
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: CREAM,
                }}
              >
                Founder &amp; Master Coach
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(244,239,230,0.88)",
                }}
              >
                Wholistic SuccessCodes · Blocks to Flow
              </p>
            </div>
          </div>
        </div>
        <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="Scan to visit theprimecrest.com" />
      </article>

      {/* 02 Credits — copper-dark */}
      <article className="mag-page mag-pad mag-dark mag-copper">
        <div className="mag-body">
          <Kicker>The imprint</Kicker>
          <h2
            className="mag-h"
            style={{ color: CREAM, fontStyle: "italic", fontWeight: 500, fontSize: 58, marginBottom: 34 }}
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
              <span>Kohila Sivas</span>
            </li>
            <li>
              <b>Words</b>
              <span>From the interviews and writings of Kohila Sivas</span>
            </li>
            <li>
              <b>Issue</b>
              <span>Vol. V · The Readiness Issue</span>
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

      {/* 03 Opener — drop cap + hairline + portrait bottom-right */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>The Subject</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
            At twelve, the systems had no language for her.
          </h2>
          <p className="mag-folio mag-dropcap">
            Kohila Sivas reached a point, at twelve, where she attempted to take her own life. She
            was not incapable. She was not a problem child. She was a human being struggling inside
            systems that did not understand what sat underneath the behaviour and the marks.
          </p>
          <p className="mag-folio">
            That fact never left her. Later, as an educator and a learning coach, she watched the
            same pattern in children, then in parents, then in teachers, then in people who run
            companies. The work kept landing on the performance. The human underneath went unread.
          </p>
          <p className="mag-folio">
            For more than two decades she has worked with learners and families. The deeper she
            went, the clearer it became: learning challenges are rarely just about learning. There
            is always something underneath.
          </p>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 16,
            }}
          >
            <div style={{ textAlign: "right", paddingBottom: 8 }}>
              <p className="mag-by" style={{ color: DARK }}>
                Kohila Sivas
              </p>
              <p className="mag-role" style={{ color: COPPER }}>
                Master Coach · Readiness OS
              </p>
            </div>
            <img
              className="mag-avatar"
              src={`${IMG}/portrait.jpg`}
              alt="Kohila Sivas"
              style={{ width: 132, height: 132, boxShadow: `0 0 0 6px #efe6d6` }}
            />
          </div>
        </div>
      </article>

      {/* 04–05 Split-spread — speak.jpg, even=left / odd=right */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-spread-photo is-left"
          src={`${IMG}/speak.jpg`}
          alt=""
          style={{ objectPosition: "center 22%" }}
        />
        <div
          className="mag-scrim"
          style={{ background: "linear-gradient(to right, rgba(26,16,8,0.82), transparent 70%)" }}
        />
        <div className="mag-overlay">
          <span className="mag-banner" style={{ background: COPPER, color: CREAM }}>
            The readiness story
          </span>
          <p className="mag-num" style={{ color: COPPER }}>
            04
          </p>
          <h2 className="mag-h mag-h-light" style={{ maxWidth: 500, fontSize: 34 }}>
            Two decades asking what is blocking a person from what is already there.
          </h2>
          <div style={{ marginTop: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: COPPER,
                marginBottom: 8,
              }}
            >
              08 · The Lesson
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 16,
                color: "rgba(244,239,230,0.88)",
                maxWidth: 360,
              }}
            >
              Readiness precedes performance. She no longer begins with the result.
            </p>
          </div>
        </div>
      </article>

      <article className="mag-page mag-bleed">
        <img
          className="mag-spread-photo is-right"
          src={`${IMG}/speak.jpg`}
          alt=""
          style={{ objectPosition: "center 22%" }}
        />
        <div
          className="mag-scrim"
          style={{ background: "linear-gradient(to left, rgba(26,16,8,0.78), transparent 62%)" }}
        />
        <p className="mag-vert" style={{ color: CREAM }}>
          C<span style={{ background: COPPER }} />NTENTS
        </p>
        <div className="mag-overlay" style={{ paddingRight: 120 }}>
          <Kicker light>In this issue</Kicker>
          <ol className="mag-toc mag-toc-copper">
            <li>
              <span>The Question</span>
              <em>06</em>
            </li>
            <li>
              <span>The Lesson</span>
              <em>08</em>
            </li>
            <li>
              <span>The Record</span>
              <em>09</em>
            </li>
            <li>
              <span>Credentials</span>
              <em>10</em>
            </li>
            <li>
              <span>Philosophy</span>
              <em>11</em>
            </li>
            <li>
              <span>Outlook</span>
              <em>13</em>
            </li>
            <li>
              <span>The Stage</span>
              <em>14</em>
            </li>
            <li>
              <span>Close</span>
              <em>15</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 Feature two-col */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>The Question</Kicker>
          <h2 className="mag-h" style={{ color: DARK }}>
            Why do capable people stay stuck?
          </h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
            <p style={{ margin: "0 0 14px" }}>
              Wholistic SuccessCodes grew out of one question Kohila kept asking. Why do
              intelligent, capable people struggle even when they know what to do?
            </p>
            <p style={{ margin: "0 0 14px" }}>
              She watched students take more tutoring and stay stuck. Parents collected strategies
              and still felt helpless. Educators worked harder and burned out. Adults read the
              books, sat the courses, hired the coaches — and repeated the pattern.
            </p>
            <p style={{ margin: 0 }}>
              The visible problem was rarely the problem. She stopped asking what was wrong with
              the person. She started asking what was blocking them from accessing what was already
              within them. That shift became the work.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 30, color: COPPER }}>
            That shift changes everything.
          </blockquote>
          <p className="mag-foot" style={{ color: COPPER }}>
            The Readiness Issue · 06
          </p>
        </div>
      </article>

      {/* 07 Full-bleed */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait.jpg`}
          alt=""
          style={{ objectPosition: "center 18%" }}
        />
        <div className="mag-caption-bar">
          Kohila Sivas · Master Wholistic NeuroGrowth Success Coach · Blocks to Flow
        </div>
      </article>

      {/* 08 Feature */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>The Lesson</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
            Readiness precedes performance.
          </h2>
          <p className="mag-folio mag-dropcap">
            The biggest lesson of more than twenty years: a strategy can be excellent and still
            fail if the human system is not ready to use it. The world prefers the other order. Do
            more. Work harder. Be disciplined. Follow the plan. Get the result.
          </p>
          <p className="mag-folio">
            She has seen it in a child who can learn and cannot, in that hour. In a teacher who
            knows the method and is too exhausted to reach it. In a founder who has the plan and
            cannot execute it.
          </p>
          <p className="mag-folio">
            She no longer begins with the result. She begins with the human. When the person has
            what they need in order to become ready, performance can arrive as an outcome rather
            than something forced through the door.
          </p>
          <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 30, color: COPPER }}>
            Begin with the human.
          </blockquote>
          <p className="mag-foot" style={{ color: COPPER }}>
            The Readiness Issue · 08
          </p>
        </div>
      </article>

      {/* 09 Record — copper hairlines between items */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>The Record</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
            What she built from the question.
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: "8px 0 0",
              padding: 0,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {[
              ["Two decades", "Learners and families. Then educators, coaches, leaders. The pattern held."],
              ["Blocks to Flow™", "Identify what interferes with a person’s ability to learn, live, lead and perform."],
              ["ReadinessOS™", "A growing set of programs for the barrier underneath the result."],
              ["Wholistic Compass™", "A platform for how people learn, live and lead — not a coaching shop alone."],
              ["Wholistic Campus™", "A home and marketplace for readiness-based programs, built with other experts."],
              ["TEDx · Spoleto", "9 January 2027. The talk: “Readiness Precedes Performance.”"],
            ].map(([label, note]) => (
              <li key={label} style={{ padding: "14px 0", borderBottom: `1px solid ${COPPER}` }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: DARK,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#3a3228",
                  }}
                >
                  {note}
                </p>
              </li>
            ))}
          </ul>
          <p className="mag-foot" style={{ color: COPPER }}>
            The Readiness Issue · 09
          </p>
        </div>
      </article>

      {/* 10 Credentials mosaic — 2×2, photo + short caption */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>Credentials</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK, marginBottom: 18 }}>
            Four facts, four photographs.
          </h2>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 16,
              minHeight: 0,
            }}
          >
            {[
              [`${IMG}/mosaic-door.jpg`, "Master Wholistic NeuroGrowth Success Coach."],
              [`${IMG}/mosaic-speak.jpg`, "TEDx, Spoleto. 9 January 2027."],
              [`${IMG}/mosaic-piano.jpg`, "Founder, Wholistic SuccessCodes."],
              [`${IMG}/mosaic-stage.jpg`, "1.5 billion humans by 2035."],
            ].map(([src, caption]) => (
              <figure
                key={caption}
                style={{
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                  background: "#efe6d6",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    flex: 1,
                    minHeight: 0,
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                />
                <figcaption
                  style={{
                    padding: "10px 12px 12px",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 14,
                    lineHeight: 1.35,
                    color: DARK,
                    borderTop: `1px solid ${COPPER}`,
                  }}
                >
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>

      {/* 11 Philosophy */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>Philosophy</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
            Flow is not forcing yourself forward.
          </h2>
          <p className="mag-folio mag-dropcap">
            Blocks to Flow is a different question. Not: how do I make this person perform? What
            is preventing them from accessing their capacity right now? Most people assume they
            need more discipline, more motivation, more information. Often they do not.
          </p>
          <p className="mag-folio">
            Push the result without the block and you can create more resistance. Find the block
            and movement becomes possible. That is flow. It is removing what keeps a person from
            moving.
          </p>
          <p className="mag-folio">
            People mistake those blocks for identity. I am lazy. I am bad at math. I procrastinate.
            I am not confident. She does not take the sentence as the fact. She wants what happened
            before the shutdown. What the system is trying to protect them from. The behaviour we
            try to eliminate is often information.
          </p>
          <blockquote className="mag-quote" style={{ margin: "auto 0", borderColor: COPPER }}>
            When we become curious about the pattern instead of judging the person, we can finally
            find the block.
          </blockquote>
          <p className="mag-foot" style={{ color: COPPER }}>
            The Readiness Issue · 11
          </p>
        </div>
      </article>

      {/* 12 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/piano.jpg`}
          alt=""
          style={{ objectPosition: "center 20%" }}
        />
        <div className="mag-caption-bar">
          Founder of Wholistic SuccessCodes · readiness before the result
        </div>
      </article>

      {/* 13 Outlook + darkband */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body">
          <div style={{ padding: "0 0 22px" }}>
            <Kicker>Outlook</Kicker>
            <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
              A campus, a ripple, 1.5 billion.
            </h2>
            <p className="mag-folio mag-dropcap">
              The vision has grown past a coaching company. She wants to change how we understand
              human readiness: how we learn, how we live, how we lead, how we perform. One person
              and one method will not do that work alone.
            </p>
            <p className="mag-folio">
              Wholistic Compass is the wider platform. Wholistic Campus is the house — her
              programs, and a marketplace of work from educators, coaches and other experts. She
              does not believe one person has all the answers. If the aim is to change education
              and human development, collaboration has to be part of the solution.
            </p>
            <p className="mag-folio" style={{ marginBottom: 0 }}>
              The number is 1.5 billion humans by 2035. She does not expect to reach them herself.
              One educator can reach hundreds. One parent can change a family. The destination is
              the ripple.
            </p>
          </div>
          <div
            className="mag-darkband"
            style={{ margin: "auto -58px 0", background: DARK, color: CREAM }}
          >
            Nothing works until the human system is ready.
          </div>
        </div>
      </article>

      {/* 14 Overlay statement */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/speak.jpg`}
          alt=""
          style={{ objectPosition: "center 18%" }}
        />
        <div
          className="mag-scrim"
          style={{
            background: "linear-gradient(to top, rgba(26,16,8,0.92), rgba(26,16,8,0.35) 46%, transparent 72%)",
          }}
        />
        <div className="mag-overlay">
          <Kicker light>The Stage</Kicker>
          <h2
            className="mag-h mag-h-light"
            style={{ marginTop: "auto", fontSize: 40, maxWidth: 540, color: CREAM }}
          >
            Readiness precedes performance.
          </h2>
          <p className="mag-folio" style={{ color: "rgba(244,239,230,0.88)", maxWidth: 520, textAlign: "left" }}>
            On 9 January 2027 she takes that sentence to the TEDx stage in Spoleto, Italy. At
            twelve she felt unheard. The stage is a milestone. The 1.5-billion-human mission is
            the destination.
          </p>
        </div>
      </article>

      {/* 15 Close */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <Kicker>Close</Kicker>
          <h2 className="mag-h mag-h-sm" style={{ color: DARK }}>
            Pain, turned into a mission.
          </h2>
          <p className="mag-folio mag-dropcap">
            She is grateful for the years with families, for training educators and coaches
            internationally, for taking the work into schools and professional rooms, for building
            Wholistic SuccessCodes from her own life. The thing she is most proud of is simpler.
          </p>
          <p className="mag-folio">
            She turned what she once experienced as pain into a mission that can reduce
            unnecessary human suffering. Every time a child thinks, maybe I am not the problem.
            Every time a parent begins to see the child differently. Every time an adult breaks a
            pattern carried for years.
          </p>
          <p className="mag-folio">
            The work is not about fixing people. It is about helping them understand themselves.
            Shame can decrease. Choice increases. Success can be built in a way that actually fits
            who they are.
          </p>
          <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 28, color: COPPER }}>
            Understand the human before demanding the performance.
          </blockquote>
          <p className="mag-foot" style={{ color: COPPER }}>
            The Readiness Issue · 15
          </p>
        </div>
      </article>

      {/* 16 PrimeCrest back */}
      <article className="mag-page mag-bleed mag-dark" data-density="hard">
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
                color: COPPER,
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
            <p className="mag-imprint" style={{ color: CREAM_DIM }}>
              <strong style={{ color: CREAM }}>PrimeCrest</strong> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <strong style={{ color: CREAM }}>theprimecrest.com</strong>
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: COPPER,
              }}
            >
              The Readiness Issue · Vol. V
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
