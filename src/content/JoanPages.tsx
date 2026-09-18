/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. V
 * Joan Gillman, Science Teacher, The Browning School, New York.
 * Cover and back keep the flagship lockup (`jn-*`, joan.css).
 * Interiors run on the shared kit (src/content/kit.tsx) themed `kt-joan`
 * (oxblood ink, parchment, antique gold, slate blue) in Joan's own
 * structural combination: dark letter, overlay contents, side opener,
 * three-column feature, banded split, dark list ad, light ledger credits,
 * band spot.
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

const IMG = "/issues/joan";
const T = "kt-joan";
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

export const JOAN_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Editorial" },
  { page: 2, label: "The Editor's Letter" },
  { page: 3, label: "Contents" },
  { page: 4, label: "Credits" },
  { page: 5, label: "The Signature Story" },
  { page: 8, label: "Fortiora · Applied AI" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "PrimeCrest" },
];

export function JoanPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page jn jn-cover" data-density="hard">
        <img
          className="jn-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Joan Gillman, Science Teacher at The Browning School, New York"
          fetchPriority="high"
        />
        <div className="jn-cover-grade" />

        <div className="jn-cover-ui">
          <header className="jn-mast">
            <div className="jn-mast-word">
              <svg className="jn-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c9a227" />
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
            <p className="jn-mast-tag">Where Vision Meets Voice</p>
            <div className="jn-mast-hair" />
          </header>

          <div className="jn-cover-date">
            <p>The September Issue</p>
            <p>Vol. V · No. 05</p>
            <p>2026</p>
          </div>

          <div className="jn-teaser jn-teaser-a">
            <h3>
              The
              <br />
              Classroom
            </h3>
            <hr />
            <p>
              Forty-four years in the room. Blackboard and chalk, then a SmartBoard, and the subject
              never changed.
            </p>
            </div>

          <div className="jn-cover-badge">
            <span className="jn-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="jn-cover-role">
            <p>
              Science
              <br />
              Teacher
            </p>
            <strong>
              The Browning
              <br />
              School, New York
            </strong>
          </div>

          <div className="jn-teaser jn-teaser-b">
            <h3>
              The
              <br />
              honor
            </h3>
            <hr />
            <p>
              Named Top Educator of the Decade 2026 by the International Association of Top Professionals.
            </p>
          </div>

          <div className="jn-cover-name">
            <em>Joan</em>
            <strong>GILLMAN</strong>
            <p>
              The teacher who spent forty-four years making room for wonder.
            </p>
          </div>

          <div className="jn-cover-foot">
            <p className="jn-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="jn-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* 01 · Editorial plate */}
      <PlatePage
        theme={T}
        img={`${IMG}/portrait-studio.jpg`}
        imgPos="50% 26%"
        kicker="PrimeCrest · The September Issue"
        side="Vol. V · No. 05 · 2026"
        script="Editorial"
        title={
          <>
            Make room for <em>wonder.</em>
          </>
        }
        dek="Joan Gillman has kept a science classroom for forty-four years, from blackboard and chalk to a SmartBoard and a Green Team that writes the week's action itself. This edition is about the room she keeps building."
        footLeft={ISSUE}
        footRight="Editorial · 01"
      />

      {/* 02 · Editor's letter · dark single measure */}
      <LetterPage
        theme={T}
        variant="dark"
        script="From the Editors"
        title={
          <>
            Forty-Four Septembers
            <br />
            in the Same Subject
          </>
        }
        signName="The Editors"
        signRole="PrimeCrest Editorial Desk"
        quote="Read it slowly. Then go and look at the classroom."
        folio={[ISSUE, "The Editor's Letter", "02"]}
      >
        <p className="kt-drop">
          Long before anyone gave her a laboratory, Joan Gillman was mixing powders in the bathroom,
          sure that a new product would come of it if she only kept going. Forty-four years of
          teaching later, the habit has a name she uses without embarrassment: making room for
          wonder.
        </p>
        <p>
          The facts are plain and we kept them that way. She has taught since 1982. Her first
          classroom held a blackboard and chalk, and when the first computer arrived she could not
          find the switch to turn it on. Today, at The Browning School in New York, she teaches
          across three platforms at once. The tools kept changing. The subject never did.
        </p>
        <p>
          Her case is a patient one: a child who builds a thing and then teaches it has learned it
          for good. A stewardship habit small enough to finish can still change a school.
        </p>
        <p>
          We printed her answers in the order she gave them. After Hurricane Melissa the Green Team
          collected in the first-floor lobby for four days and ran a bake sale on the fifth. The
          week raised $2,300.32 for Project Hope and American Friends of Jamaica. None of it stayed
          at the school. No second career was invented for the photograph.
        </p>
        <p>
          If your own classroom, or your own team, is running short of wonder this term, the most
          useful pages here are the quiet ones: the Green Action of the Week, decided by the team
          and posted on every floor, and a park cleanup that starts at half past seven on a Monday
          morning.
        </p>
      </LetterPage>

      {/* 03 · Contents · overlay */}
      <ContentsPage
        theme={T}
        variant="overlay"
        img={`${IMG}/woman-year.jpg`}
        imgPos="50% 42%"
        caption="IAOTP · Woman of the Year, presented to Joan Ava Gillman"
        script="Contents"
        issueLine="The September Issue · Vol. V · 2026"
        entries={[
          {
            no: "02",
            title: "The Editor's Letter",
            dek: "Forty-four Septembers in the same subject.",
          },
          {
            no: "04",
            title: "Credits",
            dek: "The desk that put this edition on the page.",
          },
          {
            no: "05",
            title: "Joan Gillman",
            dek: "The teacher who made room for wonder, from chalk to a SmartBoard.",
          },
          {
            no: "06",
            title: "The Classroom",
            dek: "Bathroom chemistry, shoe-box robots, three platforms, and the record.",
          },
          {
            no: "07",
            title: "The Green Team",
            dek: "Green Action of the Week, posted on every floor.",
          },
          {
            no: "08",
            title: "Fortiora · Applied AI",
            dek: "One AI engine for the whole campaign, from the publisher's desk.",
          },
          {
            no: "10",
            title: "Be Featured",
            dek: "Because your story deserves the record.",
          },
        ]}
      />

      {/* 04 · Credits · after contents */}
      <CreditsPage
        theme={T}
        variant="ledger"
        light
        script="Credits"
        issueLine="The September Issue · Vol. V · 2026"
        credits={CREDITS}
        imprint={
          <>
            Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
            <br />
            hello@theprimecrest.com · theprimecrest.com
            <br />
            Printed as answered. The Hurricane Melissa total went out in full.
          </>
        }
        qr="/brand/qr-primecrest.png"
      />

      {/* 05 · Feature opener · vertical name */}
      <OpenerPage
        theme={T}
        variant="side"
        img={`${IMG}/portrait.jpg`}
        imgPos="50% 12%"
        kicker="The Signature Story"
        nameTop="Joan"
        nameBottom="Gillman"
        dek="The teacher who spent forty-four years making room for wonder."
        footLeft={ISSUE}
        footRight="The Signature Story · 05"
      />

      {/* 06 · Feature */}
      <StoryPage
        theme={T}
        variant="cols"
        dense
        kicker="The Signature Story · One"
        title="The switch she could not find."
        dek="Forty-four years in the room. The tools kept changing. The subject never did."
        pull="Students hold a topic longer when they build it, sing it, run it, or teach it."
        folio={[ISSUE, "The Classroom", "06"]}
      >
        <p className="kt-drop">
          Her first classroom, in 1982 at St. Angela Merici School, held a blackboard and a box of
          chalk, and it was everything she needed. When the first computer arrived she could not
          find the switch. The same hands now run a SmartBoard without a second thought.
        </p>
        <p>
          The scientist arrived first. As a child she mixed powders in the bathroom, held a
          yardstick to falling snow, and built robots from shoe boxes. With her older brother she
          laid out a model town, Kinderkamack Village. Nobody called any of that a curriculum. It
          was one anyway.
        </p>
        <Subhead>Before the first classroom</Subhead>
        <p>
          In high school there was a community service requirement for graduation. She taught
          recorder, tutored in math, and organized games in the lower school&apos;s playground,
          making sure every student took part: those who were athletically endowed and those
          who were not. She also taught swimming at the local JCC, including children with
          special needs.
        </p>
        <QuotePanel>
          Give each child an opportunity to shine, and never give up on the goals you hold for
          them.
        </QuotePanel>
        <p>
          The proof came during her student teaching at P.S. 47, the junior high school for the
          deaf, where seventh, eighth and ninth graders built a working amusement park, rides and
          all. She has been biased toward making things ever since.
        </p>
        <Subhead>Three platforms at once</Subhead>
        <p>
          This year at Browning she teaches kindergarten, second, and fourth, and still runs the
          K-8 Green Team. The youngest students work on Seesaw. In earlier years she also used
          Google Classroom and Canvas, one platform to a division. She reaches for labs more than
          she once did, because a student holds a topic longer after building it, writing a song
          about it, or teaching it to somebody who does not understand it yet.
        </p>
        <p>
          Artificial intelligence is in the room now. This past year the school pulled the
          technology back in the science labs, and paper and pencil returned to the bench. The
          tool is welcome where it helps and set aside where it would do a child&apos;s growing
          for them.
        </p>
        <Subhead>The circuit and the record</Subhead>
        <p>
          She is a Subject Area Representative for STANYS for Elementary Science in NYC. She has
          led workshops at the STANYS conferences as well as NSTA, STEMTeachersNYC, SCONYC, and
          NYSAIS. Straw Rockets are Out of This World was published in the NSTA journal Science
          and Children, then selected for the NSTA book Bringing STEM to the Elementary Classroom.
        </p>
        <p>
          The honors caught up in 2025 and 2026: Top Educator of the Decade 2026, Woman of the
          Year and Lifetime Achievement from the IAOTP. She would rather talk about the room.
          Listen first. Keep a sense of humor on the hard days. Ask for help, because the
          building is full of teachers, none of them finished learning either.
        </p>
      </StoryPage>

      {/* 07 · Feature · banded split */}
      <SplitPage
        theme={T}
        dark
        band
        img={`${IMG}/nasdaq.jpg`}
        imgPos="50% 58%"
        caption="IAOTP · Top Educator of the Decade 2026, presented to Joan Ava Gillman"
        kicker="The Signature Story · Two"
        title="Green Action of the Week."
        folio={[ISSUE, "The Green Team", "07"]}
      >
        <p>
          The Green Team decides the Green Action of the Week and posts the signs on each floor.
          Lights off when you leave the room. Use both sides of the paper. Recycling sorted correctly.
          No pencils snapped in half for the fun of it. A rule a child wrote is a rule a child
          keeps.
        </p>
        <p>
          After Hurricane Melissa they manned a table in the first floor lobby Monday through
          Thursday and ran a bake sale on Friday. The week raised $2,300.32 for Project Hope and
          American Friends of Jamaica. The school kept none of it. Earlier they had raised more
          than a thousand dollars for water.org. They still turn up for Central Park cleanups at
          half past seven on a Monday morning.
        </p>
        <p>
          Green Team leaders also take the week&apos;s action into homerooms and advisories, and
          sometimes into assembly. She teaches climate without frightening the children, because
          fear does not build a steward and a repeated, finishable task does.{" "}
          <span className="kt-run">&ldquo;The future of our planet will depend on them.&rdquo;</span>
        </p>
      </SplitPage>

      {/* 08 · AD LEFT */}
      <article className="mag-page jn jn-ad" data-density="hard">
        <div className="jn-ad-well">
          <p className="jn-ad-kicker">Fortiora Group · Advertisement</p>
          <h2 className="jn-ad-head">One AI engine for the whole campaign.</h2>
          <p className="jn-ad-dek">
            An AI-native marketing platform that plans the campaign, builds the audience and
            drafts the first version of every asset. Reach, engagement and conversion on one
            board.
          </p>
          <div className="jn-ad-hair" />
          <ul className="jn-ad-list">
            <li>
              <b>Campaigns</b>
              <p>Brief in, plan out. Channels, budget and calendar drafted, then live, with spend moving toward what is working.</p>
            </li>
            <li>
              <b>Audiences</b>
              <p>Segments built from first-party data, scored and refreshed. Ask who to reach next and get the list with the reason.</p>
            </li>
            <li>
              <b>Content</b>
              <p>On-brand copy, images and landing pages as variants, routed for approval, each one traced to the brief.</p>
            </li>
            <li>
              <b>Analytics</b>
              <p>Reach to retention on one curve. The split that names the winner, and the forecast for the next dollar.</p>
            </li>
          </ul>
          <div className="jn-lockup">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <div>
              <b>Fortiora</b>
              <span>Group</span>
            </div>
          </div>
          <p className="jn-ad-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>08</span>
          </p>
        </div>
      </article>

      {/* 09 · AD RIGHT */}
      <article className="mag-page jn jn-ad" data-density="hard">
        <div className="jn-ad-well">
          <p className="jn-ad-kicker">Built for operators</p>
          <h2 className="jn-ad-head">The day, planned before it starts.</h2>
          <p className="jn-ad-dek">
            Built for people who already have a stack and do not want another login. Fortiora
            sits on the work you already do and makes it searchable, briefable, and hard to lose.
          </p>
          <div className="jn-ad-hair" />
          <ul className="jn-ad-list">
            <li>
              <b>Morning brief</b>
              <p>What moved overnight, who is waiting, which thread now needs a decision. Open the workspace and the day is in order.</p>
            </li>
            <li>
              <b>The record</b>
              <p>Decisions stay attached to the talk that produced them. Six months later you can still find who said yes, and why.</p>
            </li>
            <li>
              <b>Your voice</b>
              <p>Drafts that sound like the person who will send them. Edit, send, or ignore. The assistant does not replace the judgment.</p>
            </li>
            <li>
              <b>One vendor</b>
              <p>Campaigns, audiences, assets, numbers. One bill, one search box, one place the work lives.</p>
            </li>
          </ul>
          <div className="jn-ad-foot">
            <div>
              <div className="jn-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="jn-ad-contact">
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="jn-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <p className="jn-ad-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>09</span>
          </p>
        </div>
      </article>

      {/* 10 · BE FEATURED */}
      <article className="mag-page jn jn-feat" data-density="hard">
        <img
          className="jn-feat-img"
          src={`${IMG}/nsta.jpg`}
          alt="Joan Gillman at the NSTA National Conference"
        />
        <div className="jn-feat-grade" />
        <div className="jn-feat-card">
          <p className="jn-feat-script">Be Featured</p>
          <h3>Get featured in the upcoming edition of PrimeCrest.</h3>
          <p>Register now. Because your story deserves the record.</p>
          <div className="jn-feat-row">
            <span>Scan the QR code</span>
            <img src="/brand/qr-primecrest.png" alt="Scan to register" />
          </div>
        </div>
      </article>

      {/* ============================================== 11 · BACK COVER */}
      <article className="mag-page jn jn-bleed" data-density="hard">
        <img
          className="jn-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(0.96) contrast(1.02) brightness(1.12)" }}
        />
        <div
              style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "radial-gradient(72% 52% at 50% 32%, rgba(201,162,39,0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(20,28,44,0.58) 0%, rgba(20,28,44,0.34) 42%, rgba(20,28,44,0.76) 100%)",
          }}
        />
        <div className="jn-well jn-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="jn-back-mark">
              <svg className="jn-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c9a227" />
              </svg>
              <b className="jn-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="jn-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--jn-serif)",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "rgba(242,237,227,0.9)",
              }}
            >
              A journal of affairs, business and culture, independent reporting, considered writing, and
              the people who shape what comes next.
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
            <p className="jn-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="jn-hair" style={{ width: 320 }} />
            <p className="jn-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
