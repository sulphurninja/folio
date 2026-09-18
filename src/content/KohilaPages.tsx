/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. VI
 * Kohila Sivas, Founder & Master Coach, Wholistic SuccessCodes.
 * Cover and back keep the bespoke `kh-*` lockup. Interiors run on the
 * shared kit (src/content/kit.tsx) themed `kt-kohila` with a layout
 * combination unique to this issue: overlay contents, side letter,
 * boxed opener, measure + cols dense features, reverse-wide prose split,
 * banded record, poster ad, corner spot, ledger credits. Signature
 * element: fleuron dividers between double hairlines, rounded insets.
 */

import {
  ContentsPage,
  CreditsPage,
  LetterPage,
  OpenerPage,
  QuotePanel,
  SplitPage,
  SpotPage,
  StoryPage,
  Subhead,
} from "./kit";

const IMG = "/issues/kohila";
const T = "kt-kohila";
const ISSUE = "PrimeCrest · The September Issue";

/** Kohila's signature divider: a fleuron between double hairlines. */
function Fleuron() {
  return (
    <div className="ko-fleuron" aria-hidden>
      <span>&#10087;</span>
    </div>
  );
}

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

export const KOHILA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 2, label: "Credits" },
  { page: 3, label: "The Editor's Letter" },
  { page: 4, label: "The Signature Story" },
  { page: 6, label: "Blocks to Flow" },
  { page: 7, label: "The Lesson" },
  { page: 8, label: "The Record" },
  { page: 9, label: "Fortiora · AI Analytics" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "PrimeCrest" },
];

export function KohilaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page kh kh-cover" data-density="hard">
        <img
          className="kh-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Kohila Sivas, Founder and Master Coach at Wholistic SuccessCodes"
          style={{ objectPosition: "50% 22%" }}
          fetchPriority="high"
        />
        <div className="kh-cover-grade" />

        <div className="kh-cover-ui">
          <header className="kh-mast">
            <div className="kh-mast-word">
              <svg className="kh-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#b0561f" />
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
            <p className="kh-mast-tag">Where Vision Meets Voice</p>
            <div className="kh-mast-hair" />
          </header>

          <div className="kh-cover-date">
            <p>The September Issue</p>
            <p>Vol. VI · No. 06</p>
            <p>2026</p>
          </div>

          <div className="kh-teaser kh-teaser-a">
            <h3>
              At twelve,
              <br />
              unheard
            </h3>
            <hr />
            <p>
              The systems had no language for what sat underneath the behaviour and the marks.
            </p>
          </div>

          <div className="kh-cover-badge">
            <span className="kh-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="kh-cover-role">
            <p>
              Founder &amp;
              <br />
              Master Coach
            </p>
            <strong>
              Wholistic
              <br />
              SuccessCodes
            </strong>
          </div>

          <div className="kh-teaser kh-teaser-b">
            <h3>
              The lesson,
              <br />
              in one line
            </h3>
            <hr />
            <p>
              Learning challenges are rarely just about learning. There is always something
              underneath.
            </p>
          </div>

          <div className="kh-cover-name">
            <em>Kohila</em>
            <strong>SIVAS</strong>
            <p>
              Two decades on a single order of operations: readiness before performance, and the
              human read before the result.
            </p>
          </div>

          <div className="kh-cover-foot">
            <p className="kh-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="kh-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* 01 · Contents · overlay */}
      <ContentsPage
        theme={T}
        variant="overlay"
        img={`${IMG}/piano.jpg`}
        imgPos="50% 30%"
        caption="Kohila Sivas · photographed for the September issue"
        script="Contents"
        issueLine="The September Issue · Vol. VI · 2026"
        entries={[
          {
            no: "02",
            title: "Credits",
            dek: "The desk that put this edition on the page.",
          },
          {
            no: "03",
            title: "The Editor's Letter",
            dek: "The question under the result, and what we kept exactly as she said it.",
          },
          {
            no: "04",
            title: "Kohila Sivas",
            dek: "Founder & Master Coach, Wholistic SuccessCodes. Readiness before performance.",
          },
          {
            no: "05",
            title: "The Signature Story",
            dek: "Three chapters. The question, the method, and the lesson she will not soften.",
          },
          {
            no: "08",
            title: "The Record",
            dek: "SuccessCodes to Spoleto. The file, kept in her order.",
          },
          {
            no: "09",
            title: "Fortiora · AI Analytics",
            dek: "The number, and the why behind it, from the publisher's desk.",
          },
          {
            no: "10",
            title: "Be Featured",
            dek: "Because your story deserves the record.",
          },
        ]}
      />

      {/* 02 · Credits */}
      <CreditsPage
        theme={T}
        variant="ledger"
        script="Credits"
        issueLine="The September Issue · Vol. VI · 2026"
        credits={CREDITS}
        imprint={
          <>
            Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
            <br />
            hello@theprimecrest.com · theprimecrest.com
            <br />
            Readiness before performance, kept in that order.
          </>
        }
        qr="/brand/qr-primecrest.png"
      />

      {/* 02 · Editor's letter · side rail */}
      <LetterPage
        theme={T}
        variant="side"
        script="From the Editors"
        title={
          <>
            The Question
            <br />
            Under the Result
          </>
        }
        signName="The Editors"
        signRole="PrimeCrest Editorial Desk"
        quote="There is always something underneath."
        folio={[ISSUE, "The Editor's Letter", "03"]}
      >
        <p className="kt-drop">
          Most stuck people are not short of instruction. They own the books, they have sat the
          courses, and they can recite the plan they are failing to follow. What they are short of
          is somebody willing to look underneath the plan. That gap is the subject of this edition,
          and it is the working life of Kohila Sivas, Founder and Master Coach at Wholistic
          SuccessCodes.
        </p>
        <p>
          Her story begins in a hard place, and she does not soften it. At twelve she attempted to
          take her own life. She was not incapable, and she was not a problem child. She was a
          person struggling inside systems that had no language for what sat underneath the
          behaviour and the marks. Two decades of coaching later, that fact is still the engine of
          the work.
        </p>
        <Fleuron />
        <p>
          As an educator and learning coach she watched the same pattern repeat at every altitude.
          Students took more tutoring and stayed stuck. Parents collected strategy after strategy
          and still felt helpless. Teachers burned out reaching for craft they already knew.
          Founders held the plan and could not execute it. So she reversed the order the world
          prefers. Readiness before performance, held in that sequence on purpose.
        </p>
        <p>
          The pages that follow keep her order. Her question, her method, her record and her
          destination, told in the words she gave us, without a converted origin myth. Where she
          names a year, we kept it. Read it slowly, then look again at whoever you had already
          decided was lazy, or careless, or unteachable, and ask what is in the way instead.
        </p>
      </LetterPage>

      {/* 03 · Feature opener · boxed */}
      <OpenerPage
        theme={T}
        variant="boxed"
        img={`${IMG}/feature.jpg`}
        imgPos="50% 30%"
        kicker="The Signature Story"
        nameTop="Kohila"
        nameBottom="Sivas"
        dek="Two decades on a single order of operations. Readiness before performance, and the human read before the result."
        footLeft={ISSUE}
        footRight="The Signature Story · 04"
      />

      {/* 04 · Feature I · measure, dense */}
      <StoryPage
        theme={T}
        variant="measure"
        dense
        kicker="The Signature Story · One"
        title="Why do capable people stay stuck?"
        dek="The visible problem is rarely the real one. Kohila Sivas built a working life on the difference."
        pull="Understand the human before demanding the performance."
        folio={[ISSUE, "The Signature Story", "05"]}
      >
        <p className="kt-drop">
          Every discipline has a question it cannot stop asking. Kohila Sivas found hers early, and
          in twenty years it has not moved. Why do intelligent, capable people struggle even when
          they know exactly what to do? She watched students take more tutoring and stay exactly
          where they were. Parents collected strategy after strategy. Educators burned out. Adults
          read the books, sat the courses, then repeated the same pattern.
        </p>
        <p>
          The industry answer is more input. Another programme, another planner, another round of
          discipline. Her answer is different.{" "}
          <span className="kt-run">&ldquo;The visible problem is rarely the real one.&rdquo;</span>{" "}
          A strategy can be excellent and still fail, because the human system it lands on is not
          ready to use it. The fault is not in the plan. It is in what the plan was asked to sit on.
        </p>
        <Fleuron />
        <p>
          She earned that reading the hard way. At twelve she reached the point of attempting to
          take her own life. She was not incapable. She was a person struggling inside systems that
          had no language for what sat underneath the behaviour and the marks. The adults graded
          the surface. Nobody asked what the surface was standing on.
        </p>
        <QuotePanel>
          Learning challenges are rarely just about learning. There is always something
          underneath.
        </QuotePanel>
        <p>
          So she stopped asking what is wrong with a person, and started asking what is blocking
          them. The first question makes the person the fault. The second makes the block the
          object of the work. A missed target is data about a system, never a verdict on a person.
          The score is where most people start. She starts underneath it.
        </p>
      </StoryPage>

      {/* 05 · Feature II · two columns, dense */}
      <StoryPage
        theme={T}
        dense
        kicker="The Signature Story · Two"
        title="Flow is not forcing yourself forward."
        dek="The method reads behaviour as information, names the block, and removes it. What is left is movement."
        pull="The work is not about fixing people. It is about helping them understand themselves."
        folio={[ISSUE, "Blocks to Flow", "06"]}
      >
        <p className="kt-drop">
          Blocks to Flow starts from a different question. Not how do I make this person perform,
          but what is preventing them from reaching their own capacity right now. Most people
          arrive convinced they need more discipline, more motivation, more information. Usually
          they need none of it. They need the block to be seen.
        </p>
        <p>
          People mistake their blocks for identity. I am lazy. I am bad at math. I procrastinate.
          She does not take the sentence as the fact.{" "}
          <span className="kt-run">
            &ldquo;What happened before it, what is the pattern protecting, and what is the
            behaviour trying to say?&rdquo;
          </span>{" "}
          Those questions land on the block rather than the person.
        </p>
        <Subhead>The behaviour is information</Subhead>
        <p>
          The behaviour we most want to eliminate is usually information about the block. Treated
          as a verdict, it hardens. Treated as a signal, it opens. A child who stops trying is not
          showing an absence of ability. A founder who stalls is not showing an absence of
          ambition. Both are showing where the system stopped feeling safe enough to move.
        </p>
        <p>
          In practice the method looks less like motivation and more like detective work. She
          traces the moment a person shuts down, the condition that precedes it, and the quiet
          logic the pattern is running. Name that, and the fix is rarely dramatic. A block lifted
          rather than a will overpowered.
        </p>
        <Fleuron />
        <p>
          Once the block is named, shame decreases and choice increases. That is what she means by
          flow. It is not a personality some people are born with, and it is not forcing yourself
          forward. It is what any system does when nothing is standing in its way.
        </p>
      </StoryPage>

      {/* 06 · Feature III · split prose, reverse + wide */}
      <SplitPage
        theme={T}
        dark
        reverse
        wide
        img={`${IMG}/speak.jpg`}
        imgPos="32% 20%"
        caption="On stage · the work in the room"
        kicker="The Signature Story · Three"
        title={
          <>
            Readiness precedes <em>performance.</em>
          </>
        }
        folio={[ISSUE, "The Lesson", "07"]}
      >
        <p>
          The biggest lesson of more than twenty years is the simplest to say. A person has to be
          ready before the performance can arrive. The world prefers the other order. Do more.
          Work harder. Follow the plan. Get the result.
        </p>
        <p>
          Push the result without finding the block and you create more resistance, not less. So
          she no longer begins with the result. She begins with the human, and with the room the
          person is actually in.
        </p>
        <QuotePanel>Nothing works until the human system is ready.</QuotePanel>
        <p>
          It is a demanding idea, not a soft one. Readiness is not permission to wait. It is the
          discipline to find the real obstacle before spending the effort. Twenty years in, the
          sentence has not moved.
        </p>
      </SplitPage>

      {/* 07 · The record · banded photo */}
      <SplitPage
        theme={T}
        dark
        band
        img={`${IMG}/close.jpg`}
        imgPos="50% 22%"
        caption="Photographed for the September issue"
        kicker="The File"
        title={
          <>
            Names. Dates. <em>Numbers.</em>
          </>
        }
        items={[
          [
            "Two decades",
            "Learners and families first, then parents, teachers, coaches and founders.",
          ],
          [
            "Blocks to Flow",
            "Find what interferes with the ability to learn, live, lead and perform, then remove it.",
          ],
          [
            "ReadinessOS",
            "Readiness programs aimed at the barrier underneath the result, not the result alone.",
          ],
          [
            "Compass & Campus",
            "The wider platform, and a marketplace built with other educators.",
          ],
          [
            "TEDx · Spoleto",
            "9 January 2027, Spoleto, Italy. Readiness Precedes Performance.",
          ],
          [
            "1.5bn by 2035",
            "One educator reaches hundreds. One parent changes a family. A ripple, not a stage.",
          ],
        ]}
        folio={["PrimeCrest", "The Record", "08"]}
      />

      {/* 09 · Ad */}
      <article className="mag-page kh kh-ad" data-density="hard">
        <div className="kh-ad-well">
          <p className="kh-ad-kicker">Fortiora Group · Advertisement</p>
          <h2 className="kh-ad-head">The number, and the why behind it.</h2>
          <p className="kh-ad-dek">
            Fortiora turns scattered data into decisions. Dashboards, forecasts and a plain-language
            query layer, built on your own numbers, so the team can ask a question and get an
            answer with its source attached.
          </p>
          <div className="kh-ad-hair" />
          <ul className="kh-ad-list">
            <li>
              <b>Live dashboards</b>
              <p>Revenue, retention and operations on one board, refreshed as the data lands and drillable to the row that moved it.</p>
            </li>
            <li>
              <b>Forecasts that hold</b>
              <p>Demand, churn and cash projected from your own history, scored against the outcomes that actually landed.</p>
            </li>
            <li>
              <b>Plain language query</b>
              <p>Type the question, get the number, the trend and the source. No query language, no report queue.</p>
            </li>
            <li>
              <b>Signal &amp; alerts</b>
              <p>Where a trend breaks, where time actually goes, and where to look before it starts to cost you.</p>
            </li>
          </ul>
          <div className="kh-ad-foot">
            <div>
              <div className="kh-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="kh-ad-contact">
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="kh-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <p className="kh-ad-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>09</span>
          </p>
        </div>
      </article>

      {/* 09 · Be featured · corner card */}
      <SpotPage
        theme={T}
        variant="corner"
        img={`${IMG}/backcover.jpg`}
        imgPos="50% 40%"
        script="Be Featured"
        title={
          <>
            Get featured in the
            <br />
            upcoming edition of
            <br />
            PrimeCrest
          </>
        }
        qr="/brand/qr-primecrest.png"
        cta="Scan the QR code"
        note="Register now. Because your story deserves the record."
      />

      {/* ============================================== 11 · BACK COVER */}
      <article className="mag-page kh kh-bleed" data-density="hard">
        <img
          className="kh-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(1.02) contrast(1.02) brightness(1.12)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "radial-gradient(72% 52% at 50% 32%, rgba(176,86,31,0.18) 0%, transparent 70%), linear-gradient(180deg, rgba(24,16,11,0.58) 0%, rgba(24,16,11,0.34) 42%, rgba(24,16,11,0.76) 100%)",
          }}
        />
        <div className="kh-well kh-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="kh-back-mark">
              <svg className="kh-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#b0561f" />
              </svg>
              <b className="kh-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="kh-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--kh-serif)",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "rgba(242,237,227,0.9)",
              }}
            >
              A journal of affairs, business and culture. Independent reporting, considered writing,
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
            <p className="kh-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="kh-hair" style={{ width: 320 }} />
            <p className="kh-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
