/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. II
 * Judy Stevens. Cover and back keep the flagship lockup.
 * Interiors run on the shared kit (src/content/kit.tsx) themed `kt-judy`.
 * Ads and Be Featured are custom `jd-*` leaves (Fortiora lockup, floor card).
 */

import {
  ContentsPage,
  CreditsPage,
  LetterPage,
  OpenerPage,
  PlatePage,
  QuotePanel,
  SplitPage,
  StoryPage,
  Subhead,
} from "./kit";

const IMG = "/issues/judy";
const T = "kt-judy";
const ISSUE = "PrimeCrest · The September Issue";

const CREDITS = [
  ["Editor-in-Chief", "Katherine A. Mercer"],
  ["Managing Editor", "Daniel Whitfield"],
  ["Feature Editor", "Rebecca Sloan"],
  ["Art & Design Head", "Marcus Ellison"],
  ["Type & Composition", "Nathan Brooks"],
  ["Cover Direction", "Claire Donovan"],
  ["Photo Editor", "Gregory Hale"],
  ["Interview", "Printed as answered"],
  ["Fact Desk", "Emily Carter"],
  ["Digital Production", "Aaron Pierce"],
  ["Business Development", "Jonathan Reyes"],
  ["Subscriptions", "theprimecrest.com"],
] as const;

export const JUDY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Editorial" },
  { page: 2, label: "The Editor's Letter" },
  { page: 3, label: "Contents" },
  { page: 4, label: "Credits" },
  { page: 5, label: "The Signature Story" },
  { page: 7, label: "The Record" },
  { page: 8, label: "Fortiora · AI CRM" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "PrimeCrest" },
];

export function JudyPages() {
  return (
    <>
      <article className="mag-page wc wc-cover" data-density="hard">
        <img
          className="wc-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Judy Stevens, Scholar and Educator in Adult Development and Wisdom"
          fetchPriority="high"
        />
        <div className="wc-cover-grade" />
        <div className="wc-cover-ui">
          <header className="wc-mast">
            <div className="wc-mast-word">
              <svg className="wc-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c0466f" />
              </svg>
              <b aria-label="PrimeCrest">
                <i>P</i>
                <i>R</i>
                <i>I</i>
                <i>M</i>
                <i>E</i>
                <i>C</i>
                <i>R</i>
                <i>E</i>
                <i>S</i>
                <i>T</i>
                <span>.</span>
              </b>
            </div>
            <p className="wc-mast-tag">Where Vision Meets Voice</p>
            <div className="wc-mast-hair" />
          </header>
          <div className="wc-cover-date">
            <p>The September Issue</p>
            <p>Vol. II · No. 02</p>
            <p>2026</p>
          </div>
          <div className="wc-teaser wc-teaser-a">
            <h3>
              Adult Life,
              <br />
              1977
            </h3>
            <hr />
            <p>
              The first textbook in adult development, written for psychology students, not the
              corridor.
            </p>
          </div>
          <div className="wc-cover-badge">
            <span className="wc-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>
          <div className="wc-cover-role">
            <p>
              Scholar &amp;
              <br />
              Educator
            </p>
            <strong>
              Adult Development
              <br />
              &amp; Wisdom
            </strong>
          </div>
          <div className="wc-teaser wc-teaser-b">
            <h3>
              A week in
              <br />
              Santa Fe
            </h3>
            <hr />
            <p>
              Then the seminar moved onto the wire, early, when online still had to prove it could
              hold a room.
            </p>
          </div>
          <div className="wc-cover-name">
            <em>Judy</em>
            <strong>STEVENS</strong>
            <p>
              The scholar who wrote a young field its first book, and taught it on a screen before
              the rest of the corridor arrived.
            </p>
          </div>
          <div className="wc-cover-foot">
            <p className="wc-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="wc-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* 01 · Editorial plate */}
      <PlatePage
        theme={T}
        img={`${IMG}/scarf.jpg`}
        imgPos="50% 10%"
        kicker="PrimeCrest · The September Issue"
        side="Vol. II · No. 02 · 2026"
        script="Editorial"
        title={
          <>
            The book was <em>the easy part.</em>
          </>
        }
        dek="Judy Stevens wrote a young field its first textbook, then taught it on a screen before the rest of the corridor arrived. This edition is about the gap she works in."
        footLeft={ISSUE}
        footRight="Editorial · 01"
      />

      {/* 02 · Editor's letter */}
      <LetterPage
        theme={T}
        script="From the Editors"
        title={
          <>
            A Field That
            <br />
            Outlasts the Syllabus
          </>
        }
        signName="The Editors"
        signRole="PrimeCrest Editorial Desk"
        quote="Read it slowly. Then go and look at the student."
        folio={[ISSUE, "The Editor's Letter", "02"]}
      >
        <p className="kt-drop">
          Most classrooms do not stall because nobody wrote a theory. They stall because the theory
          was the easy part. The syllabus gets approved, the week in Santa Fe is named, and then the
          room goes back to doing what it already knows how to do. That gap, between the book on the
          shelf and the thinking on the screen, is the subject of this edition.
        </p>
        <p>
          We look for leaders who work inside that gap. Judy Stevens has spent a career there. She
          wrote <em>Adult Life</em> in 1977, the first textbook in adult development written for
          psychology students, when the corridor still treated adulthood as a plateau and then a
          decline. The students who found her were typically in their forties and fifties. They
          wanted the theory and the practice in the same hour.
        </p>
        <p>
          With this September issue, PrimeCrest publishes leaders whose method is worth copying, not
          only their results. Our cover subject makes an uncomfortable case: that compassion and
          empathy are the gold standard of adult emotional development; that a seminar can hold a
          room on a wire; and that a machine can retrieve, but it cannot sit for the thinking.
        </p>
        <p>
          We printed her answers in the order she gave them. Where she named a year, we kept it.
          Where she declined to dress a career up as a legend, we kept that too. If your own seminar
          is short this term, the most useful page in this issue may be the one that tells you where
          to stop looking.
        </p>
        <p>
          A note on method. The interview was conducted in writing, at her request, and the
          transcript went to press with its punctuation intact. What you are reading is the way she
          actually answers a question, which is to say slowly, and in full sentences.
        </p>
      </LetterPage>

      {/* 03 · Contents */}
      <ContentsPage
        theme={T}
        img={`${IMG}/blue.jpg`}
        imgPos="50% 16%"
        caption="Judy Stevens · photographed for the September issue"
        script="Contents"
        issueLine="The September Issue · Vol. II"
        entries={[
          {
            no: "02",
            title: "The Editor's Letter",
            dek: "A field that outlasts the syllabus, and why we printed her answers as given.",
          },
          {
            no: "04",
            title: "Credits",
            dek: "The desk that put this edition on the page.",
          },
          {
            no: "05",
            title: "Judy Stevens",
            dek: "The scholar who wrote the field its first book, then taught it on a wire.",
          },
          {
            no: "07",
            title: "The Record",
            dek: "1977, 1987, Santa Fe, Oxford. Kept in the order she gave them.",
          },
          {
            no: "08",
            title: "Fortiora · AI CRM",
            dek: "The account on one board, from the publisher's desk.",
          },
          {
            no: "10",
            title: "Be Featured",
            dek: "Because your story deserves the record.",
          },
        ]}
      />

      {/* 04 · Credits */}
      <CreditsPage
        theme={T}
        script="Credits"
        issueLine="The September Issue · Vol. II · 2026"
        credits={CREDITS}
        imprint={
          <>
            Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
            <br />
            hello@theprimecrest.com · theprimecrest.com
            <br />
            Printed as answered. No second career invented for the photograph.
          </>
        }
        qr="/brand/qr-primecrest.png"
      />

      {/* 05 · Feature opener */}
      <OpenerPage
        theme={T}
        img={`${IMG}/gaze.jpg`}
        imgPos="50% 8%"
        kicker="The Signature Story"
        side="Scholar & Educator · Adult Development & Wisdom"
        nameTop="Judy"
        nameBottom="Stevens"
        dek="The scholar who wrote a young field its first book, and taught it on a screen before the rest of the corridor arrived."
        footLeft={ISSUE}
        footRight="The Signature Story · 05"
      />

      {/* 06 · Feature essay */}
      <StoryPage
        theme={T}
        dense
        kicker="The Signature Story · Two"
        title="The last number you see is not the field."
        dek="Judy Stevens on why a short seminar is almost never a syllabus problem, and what the student already knows."
        pull="Compassion and empathy are the gold standard of adult emotional development."
        folio={[ISSUE, "The Signature Story", "06"]}
      >
        <p className="kt-drop">
          A field is the most public idea a discipline owns and the least useful place to begin.
          Adult development arrived late, peeling away from gerontology. The older discipline
          measured decline. This one asked what still grows after forty. Judy Stevens was there at
          the start, and not as a spectator. She wrote <em>Adult Life</em> in 1977, the first
          textbook the field had, written for psychology students at a time when the professors were
          still drawing the coastline of the subject.
        </p>
        <Subhead>The standard that can be missed</Subhead>
        <p>
          Ask her what the field settled on and the answer arrives without hedging.{" "}
          <span className="kt-run">
            “Compassion and empathy are the gold standard of adult emotional development.”
          </span>{" "}
          That sentence reorganises a great deal of thinking. If the standard is a standard, it can
          be taught, measured and missed. Sentiment cannot. The students who sat with her were
          already in the middle of a life, organisational consulting, teaching, social work, and
          they could tell a framework from a slogan. They arrived in their forties and fifties with
          a long work history behind them, wanting theory and practice in the same hour, and she
          built the hour so both would fit.
        </p>
        <Subhead>1987, the room becomes text</Subhead>
        <p>
          She took the room apart in 1987 and rebuilt it as text. Fielding. A week of orientation in
          Santa Fe, then the seminars existed on a wire, most likely among the first graduate
          programs in the country delivered that way. Papers were posted where everyone could read
          them. Hiding, the oldest habit of the back row, became almost impossible. The method
          survived the move because the method was never the furniture. It was the visible thinking.
        </p>
        <QuotePanel>
          A machine can retrieve. It cannot sit for the assumption underneath a sentence.
        </QuotePanel>
        <p>
          AI now sits at the same desk, and she will not play the reactionary about it. Retrieval is
          real work and the machine does it well. What it cannot do is show the student&apos;s own
          reasoning, and the student&apos;s own reasoning is the whole assignment. We printed her
          answers in the order she gave them. No second career invented for the photograph.
        </p>
        <Subhead>A reading list, not a legacy</Subhead>
        <p>
          Ask her about legacy and the answer comes back at practitioner height: the book still
          assigned, the students still writing, the Oxford International Handbook of Adult
          Development and Wisdom holding the field&apos;s record straight. She does not call it a
          legacy. She calls it a reading list, and she keeps adding to it.
        </p>
      </StoryPage>

      {/* 07 · The record */}
      <SplitPage
        theme={T}
        img={`${IMG}/portrait.jpg`}
        imgPos="58% 20%"
        caption="Photographed for the September issue"
        kicker="The File"
        title={
          <>
            Dates. Rooms. <em>Books.</em>
          </>
        }
        items={[
          [
            "1977",
            "Adult Life, first edition. The first textbook in adult development written for psychology students. A map when the professors were still drawing the coast.",
          ],
          [
            "40s–50s",
            "The typical Fielding student arrives with a long work history, wanting theory and practice in the same room. Highly motivated. A working method, not a lecture.",
          ],
          [
            "1987",
            "A graduate program delivered entirely online except a weeklong orientation, most likely among the first in the country. The work moves to the screen.",
          ],
          [
            "Santa Fe",
            "Fielding opens with a week in the desert. Then the seminars exist as text, and later as video, without losing the method.",
          ],
          [
            "Oxford",
            "Major contributor and editor of the Oxford International Handbook of Adult Development and Wisdom, as the field catches up to the teaching.",
          ],
          [
            "Now",
            "AI sits at the desk. The student's own thinking and writing still has to be visible. That is the issue she keeps returning to.",
          ],
        ]}
        folio={["PrimeCrest", "The Record", "07"]}
      />

      {/* 08 · Ad left */}
      <article className="mag-page jd jd-ad" data-density="hard">
        <div className="jd-ad-well">
          <p className="jd-ad-kicker">Fortiora Group · Advertisement</p>
          <h2 className="jd-ad-head">The account, on one board.</h2>
          <p className="jd-ad-dek">
            An AI CRM that keeps the deal, the ticket and the last conversation in the same place.
            The next move is already drafted.
          </p>
          <div className="jd-ad-hair" />
          <ul className="jd-ad-list">
            <li>
              <b>Pipeline</b>
              <p>Deals stay current from the call and the mail. No extra entry.</p>
            </li>
            <li>
              <b>The desk</b>
              <p>Docs, tasks and approvals, searchable in the language you already use.</p>
            </li>
            <li>
              <b>After the sale</b>
              <p>Onboarding and follow-up as a workflow, with the trail still attached.</p>
            </li>
            <li>
              <b>Signal</b>
              <p>Where a deal stalls, and where the week actually went.</p>
            </li>
          </ul>
          <div className="jd-lockup">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <div>
              <b>Fortiora</b>
              <span>Group</span>
            </div>
          </div>
          <p className="jd-ad-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>08</span>
          </p>
        </div>
      </article>

      {/* 09 · Ad right */}
      <article className="mag-page jd jd-ad" data-density="hard">
        <div className="jd-ad-well">
          <p className="jd-ad-kicker">Built for the person who already has a stack</p>
          <h2 className="jd-ad-head">Open the desk. The day is in order.</h2>
          <p className="jd-ad-dek">
            Not another login. Fortiora sits on the work you already do and makes it searchable,
            briefable, and hard to lose.
          </p>
          <div className="jd-ad-hair" />
          <ul className="jd-ad-list">
            <li>
              <b>Morning brief</b>
              <p>What moved overnight, who is waiting, which thread now needs a decision.</p>
            </li>
            <li>
              <b>The trail</b>
              <p>Six months later you can still find who said yes, and why.</p>
            </li>
            <li>
              <b>Your voice</b>
              <p>Drafts that sound like the person who will send them. Edit, send, or ignore.</p>
            </li>
            <li>
              <b>One bill</b>
              <p>Pipeline, workspace, copilots. One search box. One place the work lives.</p>
            </li>
          </ul>
          <div className="jd-ad-foot">
            <div>
              <div className="jd-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="jd-ad-contact">
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="jd-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <p className="jd-ad-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>09</span>
          </p>
        </div>
      </article>

      {/* 10 · Be featured */}
      <article className="mag-page jd jd-feat" data-density="hard">
        <img
          className="jd-feat-img"
          src={`${IMG}/blue.jpg`}
          alt="Judy Stevens, photographed for the September issue"
        />
        <div className="jd-feat-grade" />
        <div className="jd-feat-card">
          <p className="jd-feat-script">Be Featured</p>
          <h3>Get featured in the upcoming edition of PrimeCrest.</h3>
          <p>Register now. Because your story deserves the record.</p>
          <div className="jd-feat-row">
            <span>Scan the QR code</span>
            <img src="/brand/qr-primecrest.png" alt="Scan to register" />
          </div>
        </div>
      </article>

      <article className="mag-page wc wc-bleed" data-density="hard">
        <img
          className="wc-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(0.95) contrast(1.02) brightness(1.12)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "radial-gradient(72% 52% at 50% 32%, rgba(23,149,154,0.14) 0%, transparent 70%), linear-gradient(180deg, rgba(20,26,28,0.58) 0%, rgba(20,26,28,0.34) 42%, rgba(20,26,28,0.74) 100%)",
          }}
        />
        <div className="wc-well wc-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="wc-back-mark">
              <svg className="wc-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c39a4b" />
              </svg>
              <b className="wc-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="wc-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--wc-cover-serif)",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "rgba(242,237,227,0.9)",
              }}
            >
              A journal of affairs, business and culture, independent reporting, considered writing,
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
            <p className="wc-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="wc-hair" style={{ width: 320 }} />
            <p className="wc-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
