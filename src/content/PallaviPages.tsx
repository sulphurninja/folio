/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, IssueCredits, PhotoCopy } from "./IssueChrome";

const IMG = "/issues/pallavi";

const CREAM = "#f4efe6";
const INK = "#1a0a10";
const OXBLOOD = "#7a1d3a";
const ROSE = "#c45a72";
const RULE = "rgba(122, 29, 58, 0.28)";
const CREAM_DIM = "rgba(244, 239, 230, 0.7)";

const CONTENTS = [
  ["03", "The Subject", "Portland. Two companies. A kitchen sink."],
  ["06", "The Kitchen Sink", "Banana leaves, then Amazon."],
  ["08", "Two Companies", "DTOCS, then the founders who asked."],
  ["09", "The Years", "A timeline in oxblood numerals."],
  ["11", "Direct", "Treat people like adults."],
  ["14", "The Work", "She wants her children to see it."],
] as const;

const YEARS = [
  ["—", "India. Banana leaves as everyday tableware. Beautiful, practical, gone without a plastic pile."],
  ["10", "Years in supply chain before a plate carried her name."],
  ["—", "A party in the United States. Then the sink. Chief Dishwashing Officer."],
  ["7", "Years. More than twenty million single-use pieces taken off events and foodservice."],
  ["2", "Companies. DTOCS and DTOCS Consulting. Portland, Oregon."],
  ["2026", "Still a real business. Still growing. Still learning."],
] as const;

export const PALLAVI_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Editorial" },
  { page: 4, label: "Contents" },
  { page: 5, label: "The Kitchen Sink" },
  { page: 7, label: "Two Companies" },
  { page: 8, label: "The Years" },
  { page: 10, label: "Direct" },
  { page: 12, label: "Still Growing" },
  { page: 13, label: "The Work" },
  { page: 15, label: "The Sink" },
  { page: 17, label: "PrimeCrest" },
];

export function PallaviPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/coverart.jpg`}
        alt="Pallavi Pande"
        vol="Vol. VI · The Table Issue · 2026"
        accent={ROSE}
        icon="leaf"
        layout="italic"
        name="Pallavi Pande"
        role="Mompreneur · Owner & Founder"
        place="Dtocs & Dtocs Consulting · Portland, Oregon"
        teasers={[
          ["The sink", "Banana leaves at home. Then a party, and the sink."],
          ["Two firms", "DTOCS is the plates. Consulting is the other founders."],
        ]}
      />

      <IssueCredits
        accent={ROSE}
        groundClass="mag-dark mag-oxblood"
        subject="Pallavi Pande — Owner & Founder, Dtocs & Dtocs Consulting, Portland, Oregon"
        words="From the interviews of Pallavi Pande. Banana leaves, a kitchen sink, and more than twenty million single-use pieces taken off events."
        volume="Vol. VI · The Table Issue"
        note={
          <>
            <p>
              The Table Issue is Pallavi Pande in Portland: two companies, a title she will still
              joke is Chief Dishwashing Officer, and a plate problem that started after a party.
              She grew up in India eating on banana leaves. In the United States the sink, or the
              landfill, was the other option. Ten years in supply chain. Then DTOCS.
            </p>
            <p>
              DTOCS Consulting came because other product founders started asking. She wants her
              children to see the work, not a perfect life. Seven years. More than twenty million
              single-use pieces taken off events and foodservice. That is the table we set.
            </p>
          </>
        }
      />

      {/* 03 Profile opener — right. Large rectangular portrait, text below */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD, marginBottom: 10 }}>
            The Subject
          </p>
          <h2 className="mag-h" style={{ fontStyle: "italic", fontSize: 34, color: INK, marginBottom: 12 }}>
            She kept seeing problems.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p>
              Pallavi Pande did not wake up one morning and decide to become an entrepreneur. She
              kept seeing problems and wanting to solve them. Two companies now sit in Portland,
              Oregon: DTOCS, the tableware, and DTOCS Consulting, the other founders.
            </p>
            <p className="mag-sub" style={{ color: OXBLOOD }}>Chief Dishwashing Officer</p>
            <p>
              She calls herself a mompreneur. Owner. Founder. Some days the Chief Dishwashing
              Officer. Some days the person running both firms. She wants her children to see the
              work, not a perfect life.
            </p>
            <p className="mag-sub" style={{ color: OXBLOOD }}>Banana leaves, then the sink</p>
            <p>
              She grew up in India eating on banana leaves. After the move, a party left her at
              the sink, or guilty of paper and plastic headed for landfill. Ten years in supply
              chain. She put the two together.
            </p>
          </div>
          <div className="mag-qframe" style={{ color: OXBLOOD }}>
            <p>Sustainability should just be a better, healthier choice.</p>
          </div>
          <p className="mag-foot" style={{ color: OXBLOOD }}>
            The Table Issue · 03
          </p>
        </div>
      </article>

      {/* 04 Ghost-letter editorial — left */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p
            className="mag-giant"
            style={{
              position: "absolute",
              left: -8,
              top: 20,
              margin: 0,
              zIndex: 0,
              background: "none",
              color: OXBLOOD,
              WebkitTextFillColor: OXBLOOD,
              opacity: 0.11,
            }}
          >
            P
          </p>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
            <p className="mag-kicker" style={{ color: OXBLOOD }}>
              Editorial Note
            </p>
            <h2 className="mag-h" style={{ fontStyle: "italic", fontSize: 40, color: INK }}>
              A plate is a small thing.
            </h2>
            <p className="mag-folio">
              Until you replace millions of them. Pallavi Pande grew up in India eating on banana
              leaves — used, gone, no plastic pile. After the move to the United States, a party
              left her at the sink, or guilty of paper and plastic headed for landfill. Ten years
              in supply chain before a plate carried her name. She put the two together. Chief
              Dishwashing Officer is still the joke she will tell. The companies are not a joke.
            </p>
            <p className="mag-folio">
              Seven years. More than twenty million single-use pieces taken off events and
              foodservice. Two firms in Portland: DTOCS is the plates; DTOCS Consulting came
              because other product founders started asking how she was selling on Amazon. What
              she had learned. What she would avoid if she started again. Direct. Treat people
              like adults. She wants her children to see a real business — still growing, still
              learning in 2026. She does not claim to have mastered balance. She asks what really
              needs to happen today. We printed the answers as she gave them.
            </p>
            <blockquote className="mag-pull" style={{ color: OXBLOOD, margin: "auto 8px 0" }}>
              Sustainability should just be a better, healthier choice.
            </blockquote>
            <p className="mag-foot" style={{ color: OXBLOOD }}>
              The Table Issue · 04
            </p>
          </div>
        </div>
      </article>

      {/* 05 Contents — italic running heads on hairline rules, right */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD }}>
            In this issue
          </p>
          <h2
            className="mag-h"
            style={{
              fontStyle: "italic",
              color: INK,
              marginBottom: 8,
            }}
          >
            The Table Issue.
          </h2>
          <p className="mag-folio" style={{ fontStyle: "italic", color: "#5a4a46", marginBottom: 8 }}>
            Six running heads. One subject. Portland, Oregon.
          </p>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 8,
            }}
          >
            {CONTENTS.map(([num, title, line]) => (
              <div key={title} style={{ borderBottom: `1px solid ${RULE}`, padding: "6px 0 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 18 }}>
                  <p
                    className="mag-h"
                    style={{
                      fontStyle: "italic",
                      fontSize: 28,
                      fontWeight: 500,
                      margin: 0,
                      color: INK,
                    }}
                  >
                    {title}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: OXBLOOD,
                      flexShrink: 0,
                    }}
                  >
                    {num}
                  </span>
                </div>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 15,
                    fontStyle: "italic",
                    color: "#6a5a54",
                  }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: OXBLOOD }}>
            The Table Issue · 05
          </p>
        </div>
      </article>

      {/* 06 Feature two-col — left. Ghost D */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p
            className="mag-giant"
            style={{
              position: "absolute",
              right: -10,
              bottom: 40,
              margin: 0,
              zIndex: 0,
              background: "none",
              color: OXBLOOD,
              WebkitTextFillColor: OXBLOOD,
              opacity: 0.1,
              fontSize: 420,
            }}
          >
            D
          </p>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
            <p className="mag-kicker" style={{ color: OXBLOOD }}>
              The origin
            </p>
            <h2 className="mag-h" style={{ fontStyle: "italic", color: INK }}>
              The sink, then the brand.
            </h2>
            <div className="mag-cols" style={{ flex: 1 }}>
              <p className="mag-folio mag-dropcap">
                Growing up in India, eating on banana leaves was ordinary. Part of the day.
                Beautiful, practical, disposable without a pile of plastic. Years later, in the
                United States, she hosted a few parties and found herself at the sink.
              </p>
              <p className="mag-folio">
                Why am I the Chief Dishwashing Officer? Or guilty of cheap paper and plastic that
                end in landfill? She had ten years in supply chain. Blending the two would make a
                brand that could take the worst single-use tableware off events.
              </p>
              <p className="mag-folio">
                DTOCS was not born in a boardroom. It started after a party. The question stayed.
                She began building around palm-leaf and bamboo-fiber tableware. She started
                selling on Amazon, which became a crash course in running a business.
              </p>
              <p className="mag-folio" style={{ marginBottom: 0 }}>
                Pricing. Packaging. Logistics. How quickly a small mistake becomes an expensive
                one. She kept learning. The company now serves customers, caterers, venues,
                vendors, and businesses in the United States and abroad.
              </p>
            </div>
            <p className="mag-foot" style={{ color: OXBLOOD }}>
              The Table Issue · 06
            </p>
          </div>
        </div>
      </article>

      {/* 07 Full-bleed + oxblood caption — right */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/magic.jpg`}
          alt="Pallavi Pande with a Business Magic sign"
          style={{ objectPosition: "center 22%" }}
        />
        <PhotoCopy kicker="The sink" title="After the party: a sign she can stand behind.">
          <p>
            Banana leaves at home. Then a party in the United States. Then the sink. Ten years in
            supply chain. DTOCS began as a better option than paper and plastic headed for
            landfill. Seven years on, more than twenty million single-use pieces taken off events
            and foodservice. Sustainability, she says, should just be a better, healthier choice.
          </p>
          <p>
            DTOCS is the plates. Consulting is the other founders — the ones who asked how she was
            selling on Amazon, what she would avoid if she started again. Two firms. Portland,
            Oregon. She wants her children to see it. Still a real business. Still growing. Still
            learning. Direct. Treat people like adults.
          </p>
        </PhotoCopy>
      </article>

      {/* 08 Feature — left. Two companies */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD }}>
            The second firm
          </p>
          <h2 className="mag-h" style={{ fontStyle: "italic", color: INK }}>
            Two companies. One education.
          </h2>
          <p className="mag-folio mag-dropcap">
            DTOCS is the plates. DTOCS Consulting came because other product founders started
            asking how she was selling on Amazon. What she had learned. What she would avoid if
            she were starting again.
          </p>
          <p className="mag-folio">
            She had watched founders burn money on agencies that operate accounts but do not own
            the outcome. She had been both owner and operator. Consulting is the other firm: help
            product businesses grow inside Amazon&apos;s ecosystem, with the scars still attached.
          </p>
          <p className="mag-folio">
            She wanted to offer a heart-shaped plate. A survey said customers wanted square. The
            numbers do not care how hard you worked. She learned to stay attached to the outcome,
            not the original plan.
          </p>
          <blockquote className="mag-quote" style={{ borderLeftColor: OXBLOOD, color: INK, marginTop: "auto" }}>
            Working harder does not always fix the problem.
          </blockquote>
          <p className="mag-foot" style={{ color: OXBLOOD }}>
            The Table Issue · 08
          </p>
        </div>
      </article>

      {/* 09 Timeline — right. Unique page: years as huge oxblood numerals */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD }}>
            The record
          </p>
          <h2 className="mag-h" style={{ fontStyle: "italic", color: INK, marginBottom: 12 }}>
            The years.
          </h2>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 8,
            }}
          >
            {YEARS.map(([year, line]) => (
              <div
                key={year + line}
                style={{
                  display: "grid",
                  gridTemplateColumns: "148px 1fr",
                  gap: 18,
                  alignItems: "center",
                  borderBottom: `1px solid ${RULE}`,
                  padding: "8px 0 12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: year.length > 3 ? 40 : 58,
                    fontStyle: "italic",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.9,
                    color: OXBLOOD,
                  }}
                >
                  {year}
                </span>
                <p
                  className="mag-folio"
                  style={{ margin: 0, textAlign: "left", fontSize: 16.5, lineHeight: 1.45 }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: OXBLOOD }}>
            The Table Issue · 09
          </p>
        </div>
      </article>

      {/* 10 Full-bleed — left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/business.jpg`}
          alt="Pallavi Pande"
          style={{ objectPosition: "center 28%" }}
        />
        <div className="mag-scrim" />
        <div className="mag-caption-bar mag-caption-oxblood">
          Portland. Owner of two companies. Some days the dishes. Some days both firms.
        </div>
      </article>

      {/* 11 Philosophy — right. Italic pull + body. Ghost C */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p
            className="mag-giant"
            style={{
              position: "absolute",
              left: -12,
              top: 180,
              margin: 0,
              zIndex: 0,
              background: "none",
              color: OXBLOOD,
              WebkitTextFillColor: OXBLOOD,
              opacity: 0.1,
            }}
          >
            C
          </p>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
            <p className="mag-kicker" style={{ color: OXBLOOD }}>
              How she leads
            </p>
            <h2 className="mag-h" style={{ fontStyle: "italic", color: INK }}>
              Treat people like adults.
            </h2>
            <blockquote className="mag-pull" style={{ color: OXBLOOD, fontStyle: "italic", margin: "8px 8px 22px" }}>
              I&apos;m pretty direct.
            </blockquote>
            <p className="mag-folio">
              She does not believe in complicated rules just to make a room feel corporate. People
              should know what the work is for, have the freedom to do it, and be able to say when
              something is not working.
            </p>
            <p className="mag-folio">
              If someone makes a mistake, she wants to know what happened, fix it, and keep it
              from happening again. She does not expect perfection. She does expect people to take
              responsibility. She tries to hold herself to the same standard.
            </p>
            <p className="mag-folio" style={{ marginBottom: 0 }}>
              Motherhood, she says, made her better at deciding what can wait. Being busy is not
              the same as being productive. The question that saves the day: what really needs to
              happen today?
            </p>
            <p className="mag-foot" style={{ color: OXBLOOD }}>
              The Table Issue · 11
            </p>
          </div>
        </div>
      </article>

      {/* 12 Photo — left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/awards.jpg`}
          alt="Pallavi Pande at the U.S. Chamber of Commerce CO-100"
          style={{ objectPosition: "center 18%" }}
        />
        <div className="mag-scrim" />
        <div className="mag-caption-bar mag-caption-oxblood">
          U.S. Chamber CO—100. She lists Inc. 250 Female Founders, a Gold Stevie, and People +
          Planet First. She says the mark is that the business is still growing.
        </div>
      </article>

      {/* 13 Outlook + darkband — right */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD }}>
            The count
          </p>
          <h2 className="mag-h" style={{ fontStyle: "italic", color: INK }}>
            Twenty million pieces.
          </h2>
          <p className="mag-folio mag-dropcap">
            In seven years DTOCS has helped take more than twenty million pieces of single-use
            tableware off events and foodservice. More than five hundred caterers, charcuterie
            makers, venues, restaurants, and vineyards now use the line.
          </p>
          <p className="mag-folio">
            In India the company donates sewing machines to women building their own livelihoods,
            and supports education scholarships. In Oregon, philanthropy runs through Greater Than
            Portland. A plate is still a small thing. The count is not.
          </p>
          <p className="mag-folio" style={{ marginBottom: 18 }}>
            She is still learning. There is always another customer, another problem, another
            idea. Usually another lesson around the corner.
          </p>
          <div
            className="mag-darkband"
            style={{
              background: OXBLOOD,
              color: CREAM,
              fontStyle: "italic",
              marginTop: "auto",
            }}
          >
            I don&apos;t think I have mastered balance.
          </div>
        </div>
      </article>

      {/* 14 Statement overlay — left. Type left of face */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/close.jpg`}
          alt="Pallavi Pande"
          style={{ objectPosition: "72% 16%" }}
        />
        <div
          className="mag-scrim"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,10,16,0.82) 0%, rgba(26,10,16,0.42) 42%, transparent 68%)",
          }}
        />
        <div className="mag-overlay" style={{ justifyContent: "center", maxWidth: 360, paddingRight: 40 }}>
          <p className="mag-kicker mag-kicker-light" style={{ color: ROSE }}>
            The work
          </p>
          <h2
            className="mag-h mag-h-light"
            style={{ fontStyle: "italic", fontSize: 36, color: CREAM }}
          >
            I want them to see the work behind it.
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 17,
              lineHeight: 1.58,
              color: CREAM_DIM,
            }}
          >
            Not a perfect life. The risk. The mistakes. The days the business needs her and the
            days the family does, sometimes at the same hour.
          </p>
        </div>
      </article>

      {/* 15 Close — right */}
      <article className="mag-page mag-pad">
        <div className="mag-body">
          <p className="mag-kicker" style={{ color: OXBLOOD }}>
            Closing
          </p>
          <h2 className="mag-h" style={{ fontStyle: "italic", color: INK }}>
            It became a real business.
          </h2>
          <p className="mag-folio mag-dropcap">
            That might sound simple. Founders know what it means. An idea she was not sure would
            work. Selling on Amazon. Mistakes. Adjustments. Customers across markets. Wholesale
            partners. Caterers. Then a second company, built from the same education.
          </p>
          <p className="mag-folio">
            The largest mark, she says, is not one sales number or one award. It is knowing that
            something started from an idea is still growing. One business makes products people
            can use and feel decent about using. The other helps people build businesses around
            products they believe in.
          </p>
          <p className="mag-folio" style={{ marginBottom: 0 }}>
            She likes that she gets to do both.
          </p>
          <blockquote className="mag-pull" style={{ color: OXBLOOD, margin: "auto 8px 0" }}>
            The biggest achievement isn&apos;t one sales number or one award.
          </blockquote>
          <p className="mag-foot" style={{ color: OXBLOOD }}>
            The Table Issue · 15
          </p>
        </div>
      </article>

      <HouseAdSpread
        variant="quote"
        accent={ROSE}
        kicker="The table, at length"
        headlineLead="Banana leaves at home. Then a party."
        headlineHero="Then the sink."
        tag="The Table"
        foot="The Table Issue"
        photo={`${IMG}/magic.jpg`}
        photoAlt=""
        caption=""
        quote="Chief Dishwashing Officer is still the joke she will tell. The companies are not a joke."
        sections={[
          {
            heading: "India, then Portland",
            body:
              "Banana leaves were everyday tableware — used, gone, no plastic pile. A party in the United States left a sink. Pallavi Pande still calls the title Chief Dishwashing Officer. Ten years in supply chain before a plate carried her name. Then Dtocs, and Dtocs Consulting for the founders who asked how.",
          },
          {
            heading: "The count",
            body:
              "Seven years. More than twenty million single-use pieces taken off events and foodservice. Two firms in Portland. The Table Issue does not turn that number into a sermon. It is the work: plates, consulting, a kitchen that started it.",
          },
          {
            heading: "The children",
            body:
              "She wants her children to see a real business — still growing, still learning in 2026. Direct, she says. Treat people like adults. That line is hers.",
          },
        ]}
        continued={[
          {
            heading: "Two firms",
            body:
              "DTOCS is the plates. Consulting is the other founders. The oxblood pages keep those two jobs separate so the reader can see both. This spread is the long setting: leaves, sink, count, Portland.",
          },
          {
            heading: "How to read it",
            body:
              "Kitchen first. Then the years. The work page is the close. Scan the QR for theprimecrest.com.",
          },
        ]}
      />

      {/* 18 PrimeCrest back — collage + QR */}
      <article className="mag-page mag-bleed mag-dark mag-oxblood" data-density="hard">
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
                width: "92%",
                maxWidth: 700,
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
                color: ROSE,
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
              src="/brand/qr-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 160, height: "auto", boxShadow: "0 10px 26px rgba(0,0,0,0.45)" }}
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
                color: ROSE,
              }}
            >
              The Table Issue · Vol. VI
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
