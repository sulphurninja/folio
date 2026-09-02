/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

const IMG = "/issues/joan";

const CREAM = "#f4efe6";
const NAVY = "#1a2744";
const GOLD = "#c9a227";
const CREAM_DIM = "rgba(244, 239, 230, 0.68)";
const KICK = { letterSpacing: "0.32em" as const };

export const JOAN_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Kansas City" },
  { page: 4, label: "Contents" },
  { page: 5, label: "The Classroom" },
  { page: 6, label: "Times Square" },
  { page: 7, label: "The Record" },
  { page: 8, label: "Milestones" },
  { page: 9, label: "The Award" },
  { page: 10, label: "The Method" },
  { page: 11, label: "The Teacher" },
  { page: 12, label: "Outlook" },
  { page: 13, label: "The Charge" },
  { page: 14, label: "Close" },
  { page: 15, label: "PrimeCrest" },
];

const LEDGER: CSSProperties = {
  borderBottom: `1px solid ${GOLD}`,
};

export function JoanPages() {
  return (
    <>
      {/* 01 Cover — classic magazine, hard */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/coverart.jpg`}
          alt="Joan Gillman"
          fetchPriority="high"
        />
        <div className="mag-overlay" style={{ padding: "36px 36px 28px" }}>
          <div>
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{
                width: 300,
                height: "auto",
                filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.45))",
              }}
            />
            <p
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Vol. VII · The Classroom Issue
            </p>
          </div>

          <div
            style={{
              marginTop: "auto",
              background: "rgba(26,39,68,0.92)",
              padding: "22px 26px 20px",
              maxWidth: 440,
            }}
          >
            <h1
              className="mag-display"
              style={{
                color: CREAM,
                fontSize: 40,
                lineHeight: 1.04,
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              Top 10 Unstoppable Leaders in 2026<span style={{ color: GOLD }}>.</span>
            </h1>
            <p className="mag-display" style={{ fontSize: 30, color: CREAM, marginTop: 14 }}>
              Joan Gillman
            </p>
            <p
              style={{
                margin: "8px 0 0",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Science Teacher
            </p>
            <p
              style={{
                margin: "6px 0 0",
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 16,
                fontStyle: "italic",
                color: "rgba(244,239,230,0.88)",
              }}
            >
              The Browning School · New York
            </p>
          </div>
        </div>
        <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="Scan to visit theprimecrest.com" />
      </article>

      {/* 02 Credits — navy */}
      <article className="mag-page mag-pad mag-navy">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
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
            {[
              ["Magazine", "PrimeCrest · theprimecrest.com"],
              ["Published by", "Fortiora Group LLC"],
              ["Editorial & Design", "Fortiora Studio"],
              ["Digital Production", "Fortiora Studio"],
              ["Featured Subject", "Joan Ava Gillman"],
              ["Words", "From the interviews and papers of Joan Gillman"],
              ["Issue", "Vol. VII · The Classroom Issue"],
            ].map(([role, name]) => (
              <li key={role} style={LEDGER}>
                <b style={{ color: GOLD }}>{role}</b>
                <span style={{ color: CREAM }}>{name}</span>
              </li>
            ))}
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
            <img src="/brand/logo-primecrest.png" alt="PrimeCrest" style={{ width: 280, height: "auto" }} />
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
            <p className="mag-imprint" style={{ fontSize: 11, color: "rgba(244,239,230,0.45)", maxWidth: 520 }}>
              © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
              reproduced or transmitted in any form without prior written permission from the
              publisher.
            </p>
          </div>
        </div>
      </article>

      {/* 03 Opener — gold-framed portrait */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            The Subject
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: NAVY }}>
            She measured the snow with a yardstick.
          </h2>
          <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p className="mag-folio mag-dropcap">
                Joan Gillman was mixing powders in the bathroom before she had a lab. She was sure
                a new product would come of it if she kept going. After a snowfall she used a
                yardstick for the rate, checked the temperature and the barometer, and kept a
                camera ready. With her older brother she built robots from shoe boxes and a model
                city they named Kinderkamack Village.
              </p>
              <p className="mag-folio">
                High school required community service. She taught recorder, tutored math, and ran
                playground games so the children who were not the athletes still played. She taught
                swimming at the local JCC, including some special-needs children, and filled in as
                a ballet teacher. Inclusiveness, she says, is still how she teaches.
              </p>
            </div>
            <div style={{ width: 176, flexShrink: 0, textAlign: "center", paddingTop: 4 }}>
              <img
                src={`${IMG}/portrait-studio.jpg`}
                alt="Joan Gillman"
                style={{
                  width: 168,
                  height: 210,
                  objectFit: "cover",
                  objectPosition: "center 12%",
                  boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 6px #efe6d6`,
                }}
              />
              <p className="mag-by" style={{ color: NAVY }}>
                Joan Gillman
              </p>
              <p className="mag-role" style={{ color: GOLD }}>
                Science Teacher
              </p>
            </div>
          </div>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: NAVY }}>
            Give each child an opportunity to shine.
          </blockquote>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 03
          </p>
        </div>
      </article>

      {/* 04 Photo bleed + gold caption bar */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/conference.jpg`}
          alt="Joan Gillman at the NSTA National Conference"
          style={{ objectPosition: "center 22%" }}
        />
        <div className="mag-caption-bar" style={{ background: NAVY, padding: "18px 28px 20px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            Kansas City · October 2023
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              color: CREAM,
            }}
          >
            At the NSTA National Conference: Equity and Diversity in the STEM Classroom.
            The Browning School, New York.
          </p>
        </div>
      </article>

      {/* 05 Contents — gold-ruled ledger */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            In this issue
          </p>
          <h2 className="mag-h" style={{ color: NAVY, marginBottom: 8 }}>
            Contents.
          </h2>
          <p
            style={{
              margin: "0 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "#5a5348",
            }}
          >
            Forty-four years in the science classroom, told in order.
          </p>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
            {[
              ["The Subject", "03", "A yardstick, a bathroom lab, and the first classroom."],
              ["The Classroom", "06", "Blackboard and chalk. Then a SmartBoard."],
              ["The Record", "08", "Posts, papers, and the prizes she will still set aside."],
              ["Milestones", "09", "A career read left to right."],
              ["The Method", "11", "Green Team, labs, and climate without panic."],
              ["Outlook", "13", "Kindergarten next. The older students stay."],
              ["Close", "15", "Listen first. Keep a sense of humor."],
            ].map(([label, page, note]) => (
              <li
                key={label}
                style={{
                  ...LEDGER,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 16,
                  padding: "16px 0 14px",
                  alignItems: "baseline",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: 26,
                      fontWeight: 600,
                      color: NAVY,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: 15,
                      color: "#5a5348",
                    }}
                  >
                    {note}
                  </p>
                </div>
                <em
                  style={{
                    fontStyle: "normal",
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: GOLD,
                  }}
                >
                  {page}
                </em>
              </li>
            ))}
          </ol>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 05
          </p>
        </div>
      </article>

      {/* 06 Feature — two-col */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            The Classroom
          </p>
          <h2 className="mag-h" style={{ color: NAVY }}>
            Blackboard and chalk. Then a computer she could not switch on.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.72 }}>
            <p style={{ margin: "0 0 12px" }}>
              She has been teaching since 1982. The first tools were a blackboard and chalk. The
              first computer in her room arrived as a puzzle. She could not find the power switch.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              At The Browning School in New York every classroom now has a SmartBoard and a
              supply of Chromebooks. She teaches across divisions, which means three platforms:
              Seesaw for the youngest, Google Classroom for the older lower-school students,
              Canvas for the middle school.
            </p>
            <p style={{ margin: 0 }}>
              Early on she used fewer labs. That changed. Students hold a topic longer when they
              have to build a model, write a song, run an experiment, or teach it to someone else.
              As a student teacher at P.S. 47 Junior High School for the Deaf, she watched
              seventh-, eighth-, and ninth-graders take an electronics unit and make a mini
              amusement park with working rides. Hands-on stayed.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: NAVY, fontSize: 24 }}>
            I didn&apos;t even know where to find the switch.
          </blockquote>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 06
          </p>
        </div>
      </article>

      {/* 07 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/nasdaq.jpg`}
          alt="Joan Gillman on the Nasdaq billboard"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="mag-caption-bar" style={{ background: `linear-gradient(transparent, ${NAVY})`, padding: "56px 28px 22px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            Times Square
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              color: CREAM,
              maxWidth: 520,
            }}
          >
            IAOTP named her Top Educator of the Year. The announcement ran on the Nasdaq board.
          </p>
        </div>
      </article>

      {/* 08 The record — gold ledger list */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            The Record
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: NAVY }}>
            What she holds, and what she would rather talk about.
          </h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
            {[
              ["The Browning School, New York", "Science teacher. Grades two, four, five, and six. Next year, kindergarten as well."],
              ["K–8 Green Team", "Leader. Central Park cleanups at 7:30 on a Monday. A Green Action of the Week."],
              ["Since 1982", "First post: St. Angela Merici School. Later the Calhoun School — Teacher of the Year, 2017."],
              ["STANYS", "Subject Area Representative. Workshops also at NSTA, SCONYC, STEMTeachersNYC, NYSAIS."],
              ["On the page", "STANYS Bulletin. Science and Children. Straw Rockets are Out of This World, 2013; again in 2016."],
              ["IAOTP, 2025–26", "Top Educator of the Year. Top 25 Global Impact Leaders. Woman of the Year. Top Educator of the Decade. Lifetime Achievement."],
              ["Also held", "National Geographic Certified Educator. Kappa Delta Pi Legacy Member. Forttuna Education Council, Global Advisory Board."],
            ].map(([label, note]) => (
              <li key={label} style={{ ...LEDGER, padding: "13px 0 12px" }}>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: 4,
                  }}
                >
                  {label}
                </strong>
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 16,
                    lineHeight: 1.45,
                    color: "#2a241c",
                  }}
                >
                  {note}
                </span>
              </li>
            ))}
          </ul>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 08
          </p>
        </div>
      </article>

      {/* 09 Horizontal milestones — unique page */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            Milestones
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: NAVY, marginBottom: 6 }}>
            Read it left to right.
          </h2>
          <p
            style={{
              margin: "0 0 22px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "#5a5348",
            }}
          >
            Years in gold. The work underneath.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignContent: "flex-start",
            }}
          >
            {[
              ["1980", "B.A., Felician College, summa cum laude"],
              ["1982", "M.A., N.Y.U. First classroom."],
              ["2011", "Cornell curriculum award"],
              ["2013", "Straw Rockets, Science and Children"],
              ["2017", "Teacher of the Year, Calhoun"],
              ["2018", "The Browning School. Half-Earth ambassador."],
              ["2023", "National Geographic. NSTA, Kansas City."],
              ["2025", "IAOTP Top Educator of the Year"],
              ["2026", "Woman of the Year. Honorary Ph.D., CICA."],
            ].map(([year, note]) => (
              <div
                key={year}
                style={{
                  width: "calc(33.33% - 8px)",
                  background: GOLD,
                  color: NAVY,
                  padding: "16px 14px 14px",
                  minHeight: 132,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 32,
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {year}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 14,
                    lineHeight: 1.35,
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 09
          </p>
        </div>
      </article>

      {/* 10 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/award.jpg`}
          alt="IAOTP Top Educator of the Decade award"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="mag-caption-bar" style={{ background: NAVY, padding: "18px 28px 20px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            The Decade
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              color: CREAM,
            }}
          >
            IAOTP, Top Educator of the Decade, 2026. Presented to Joan Ava Gillman.
          </p>
        </div>
      </article>

      {/* 11 Classroom / method */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            The Method
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: NAVY }}>
            Climate without frightening the children.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.7 }}>
            That is the line she draws. They need to know how the world works if they are going
            to decide anything useful later. As a leader of The Browning School&apos;s K–8 Green Team
            she keeps the work small enough to finish: lights off when you leave, both sides of
            the paper, recycling done correctly, no pencils snapped in half. The students write
            the Green Action of the Week and put the signs up themselves.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.7 }}>
            They show up for Central Park cleanups at 7:30 on a Monday morning. They ran a
            water.org fundraiser and raised more than a thousand dollars. After Hurricane Melissa
            they stood in the first-floor lobby Monday through Thursday and held a bake sale on
            Friday. The total was $2,300.32, split between Project Hope and American Friends of
            Jamaica.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 0 }}>
            Last summer the school began moving middle-school science onto the Next Generation
            Science Standards. She has been rewriting the curriculum to fit.
          </p>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 11
          </p>
        </div>
      </article>

      {/* 12 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait-studio.jpg`}
          alt="Joan Gillman"
          style={{ objectPosition: "center 18%" }}
        />
        <div className="mag-caption-bar" style={{ background: NAVY, padding: "18px 28px 20px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            The teacher
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              color: CREAM,
            }}
          >
            The Browning School, New York. Science, still, after forty-odd years in the room.
          </p>
        </div>
      </article>

      {/* 13 Outlook + navy darkband */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
          <div style={{ padding: "0 0 18px" }}>
            <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
              Outlook
            </p>
            <h2 className="mag-h mag-h-sm" style={{ color: NAVY }}>
              Next year the lower school gets all of her time.
            </h2>
            <p className="mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.7 }}>
              Kindergarten is new. She keeps the K–8 Green Team, so the older students are not
              gone. She stays a Subject Area Representative for STANYS and a member of the
              Forttuna Education Council&apos;s Global Advisory Board. She still wants the conference
              circuit.
            </p>
            <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.7 }}>
              AI is in the room. The job, as she puts it, is to keep it from doing the writing
              and the thinking. This past year the school tried to pull technology back in the
              science labs. Paper and pencil returned. Climate will not wait. She wants the
              science class to carry the other subjects with it. That is how the world actually
              works.
            </p>
          </div>
          <div
            className="mag-darkband"
            style={{ margin: "auto -58px 0", background: NAVY, color: GOLD }}
          >
            The future of our planet will depend on them.
          </div>
        </div>
      </article>

      {/* 14 Overlay statement */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait.jpg`}
          alt=""
          style={{ objectPosition: "center 18%" }}
        />
        <div
          className="mag-scrim"
          style={{ background: `linear-gradient(to top, ${NAVY}f2, ${NAVY}88, transparent 58%)` }}
        />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light" style={{ color: GOLD, ...KICK }}>
            The Charge
          </p>
          <h2
            className="mag-h mag-h-light"
            style={{ marginTop: "auto", fontSize: 40, maxWidth: 540, color: CREAM }}
          >
            Protect the ground they walk on.
          </h2>
          <p className="mag-folio" style={{ color: CREAM_DIM, maxWidth: 500, textAlign: "left" }}>
            As leader of the K–8 Green Team she is trying to leave them with a habit: take care
            of the Earth. The students need to know how to be stewards. She said it plainly.
          </p>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: GOLD,
            }}
          >
            &ldquo;The future of our planet will depend on them.&rdquo;
          </p>
        </div>
      </article>

      {/* 15 Close */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: GOLD, ...KICK }}>
            Close
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: NAVY }}>
            Forty-four years, and she still goes to the workshops.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.7 }}>
            Listen first. If you already believe you have the best method, you miss the
            collaboration. Compromise when the school&apos;s goals require it. Keep a sense of humor
            when the day is hard. Ask for help. The building is full of teachers.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.7 }}>
            She has written for the STANYS Bulletin and for Science and Children.{" "}
            <em>Straw Rockets are Out of This World</em> ran in 2013 and again in the 2016 book{" "}
            <em>Bringing STEM to the Elementary Classroom</em>. This year she contributed to a
            Corwin book, <em>What Teachers Want to Know About Teaching Climate Change</em>.
          </p>
          <p className="mag-folio" style={{ fontSize: 17, lineHeight: 1.7 }}>
            The hope is ordinary. That they remember the lessons. That they look things up after
            school. That they take care of the ground they walk on.
          </p>
          <blockquote className="mag-pull" style={{ margin: "auto 8px 0", color: NAVY, fontSize: 24 }}>
            The best days are just ahead of you.
          </blockquote>
          <p className="mag-foot" style={{ color: GOLD }}>
            The Classroom Issue · 15
          </p>
        </div>
      </article>

      {/* 16 PrimeCrest back — hard */}
      <article className="mag-page mag-bleed mag-navy" data-density="hard">
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
                color: GOLD,
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
                color: "rgba(247,244,239,0.85)",
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
                color: GOLD,
              }}
            >
              The Classroom Issue · Vol. VII
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
