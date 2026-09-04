/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, IssueCredits, PhotoCopy } from "./IssueChrome";

const IMG = "/issues/judy";

const GREEN = "#1e3d2f";
const CREAM = "#f4efe6";
const CREAM_DIM = "rgba(244, 239, 230, 0.72)";
const KICK = {
  letterSpacing: "0.28em" as const,
  fontWeight: 700,
};

export const JUDY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "Letter" },
  { page: 3, label: "Wisdom" },
  { page: 4, label: "Contents" },
  { page: 5, label: "The Field" },
  { page: 6, label: "Santa Fe" },
  { page: 7, label: "Philosophy" },
  { page: 8, label: "The Record" },
  { page: 9, label: "Classroom" },
  { page: 10, label: "The Method" },
  { page: 11, label: "The Numbers" },
  { page: 12, label: "The Question" },
  { page: 13, label: "Statement" },
  { page: 14, label: "Close" },
  { page: 15, label: "The Field" },
  { page: 17, label: "PrimeCrest" },
];

const TOC_CARDS = [
  ["03", "Letter", "How the field began"],
  ["06", "The Field", "From gerontology to growth"],
  ["07", "Santa Fe", "A week in the desert"],
  ["08", "Philosophy", "The gold standard"],
  ["09", "The Record", "What she built"],
  ["11", "The Method", "Critique as curriculum"],
  ["13", "The Question", "AI at the desk"],
  ["15", "Close", "Never give up"],
];

const RECORD = [
  ["1970s", "The peel", "Adult development arrives as a new area in psychology, peeling away from gerontology. Decline was the old question. What still grows after forty is the new one."],
  ["1977", "Adult Life", "First edition. Described as the first textbook in adult development written for psychology students. A map when the professors were still drawing the coast."],
  ["40s–50s", "The students", "Typical Fielding students: long work histories — organizational consulting, teaching, social work. They wanted theory and practice in the same room."],
  ["1987", "Online degree", "A graduate program delivered entirely online except orientation — among the first in the country. The work moved to the screen."],
  ["1987", "Santa Fe", "Fielding opened its doors. A week in the desert. Orientation in New Mexico. Then the seminars existed as text."],
  ["—", "The method", "Critique and dialogue: students reviewed papers, offered feedback, led the discussions. The student’s own thinking still has to be visible."],
  ["—", "Oxford Handbook", "Major contributor and editor of the Oxford International Handbook of Adult Development and Wisdom."],
  ["—", "The standard", "Compassion and empathy are the gold standard of adult emotional development. Her line. Not a mood."],
  ["Now", "The desk", "AI for research. The student’s own thinking and writing still has to be visible. That is the issue."],
];

const STATS = [
  ["1977", "Adult Life first published"],
  ["1987", "Online program opens"],
  ["40s–50s", "Typical Fielding student"],
  ["1st", "Textbook for psychology students"],
  ["Santa Fe", "Weeklong orientation"],
  ["Oxford", "Handbook of Adult Development"],
];

export function JudyPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/coverart.jpg`}
        alt="Judy Stevens"
        vol="Vol. III · The Wisdom Issue · 2026"
        accent={GREEN}
        icon="book"
        layout="band"
        name="Judy Stevens"
        role="Scholar & Educator"
        place="Adult Development & Wisdom"
        teasers={[
          ["The field", "Adult Life, 1977 — written for psychology students, not the corridor."],
          ["Santa Fe", "A week in the desert. Then the work moved to the screen."],
        ]}
      />

      <IssueCredits
        accent={GREEN}
        groundClass="mag-dark mag-forest"
        subject="Judy Stevens — Scholar & Educator, Adult Development & Wisdom"
        words="From the interviews and writings of Judy Stevens. Textbook years, Fielding, Santa Fe, and the Oxford Handbook as she gave them."
        volume="Vol. III · The Wisdom Issue"
        note={
          <>
            <p>
              The Wisdom Issue is eighteen leaves on Judy Stevens and the field she helped write
              into being. Adult Life, 1977 — described as the first textbook in adult development
              written for psychology students. A graduate program delivered online except
              orientation, 1987. A week in Santa Fe, then the work on the screen.
            </p>
            <p>
              She is a major contributor and editor of the Oxford International Handbook of Adult
              Development and Wisdom. The method was critique and dialogue: students reviewed
              papers, offered feedback, led the discussions. AI sits at the desk now. The
              student&apos;s own thinking still has to be visible. That is the issue.
            </p>
          </>
        }
      />

      {/* 03 Opening letter — right, single column, ghost J */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p
            className="mag-giant"
            style={{
              position: "absolute",
              left: -6,
              top: 36,
              margin: 0,
              zIndex: 0,
              background: "none",
              color: GREEN,
              WebkitTextFillColor: GREEN,
              opacity: 0.12,
            }}
          >
            J
          </p>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
            <img
              src={`${IMG}/portrait.jpg`}
              alt="Judy Stevens"
              style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "center 22%", marginBottom: 22 }}
            />
            <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
              Opening letter
            </p>
            <h2 className="mag-h" style={{ color: GREEN, fontSize: 36 }}>
              A field that asked what still grows.
            </h2>
            <p className="mag-folio mag-dropcap">
              Adult development is a young field. It arrived in the late 1970s, peeling away from
              gerontology. The older discipline had been measuring decline. This one asked a
              different question: what still grows after forty? Intellectual growth. Emotional
              growth. The wider system, held still long enough to see. Compassion and empathy, she
              would later write, are the gold standard of adult emotional development.
            </p>
            <p className="mag-folio">
              Judy Stevens was there at the start. Not as a spectator. She wrote the book the field
              needed. <em>Adult Life</em>, 1977. First textbook in adult development written for
              psychology students. A map, when the professors were still drawing the coast. The
              students who found her were typically in their forties and fifties, arriving with
              long work histories — organizational consulting, teaching, social work. Highly
              motivated. They wanted two things at once: why they did what they chose to do, the
              theory; and how that theory should guide practice. Not a lecture. A working method.
            </p>
            <p className="mag-folio">
              She has spent the years since in classrooms — first physical, then ones that existed
              only as text on a screen. Fielding. A week in Santa Fe. Then the seminars moved onto
              the wire, early, when online education still had to prove it could hold a room. The
              Oxford Handbook chapter came later, as the field caught up to what she had been
              teaching. The argument has not moved. The adult mind can still thicken. It can still
              take on complexity. It can still learn to hold more than one truth at a time. The
              student&apos;s own thinking still has to be visible. That is the issue.
            </p>
            <p className="mag-foot" style={{ color: GREEN }}>
              The Wisdom Issue · 03
            </p>
          </div>
        </div>
      </article>

      {/* 04 Full-bleed + mag-vert WISDOM — left */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/blue.jpg`} alt="Judy Stevens" />
        <div className="mag-scrim" style={{ background: "linear-gradient(90deg, rgba(15,31,24,0.45) 0%, transparent 46%)" }} />
        <p className="mag-vert" style={{ color: CREAM }}>
          WISDOM
        </p>
        <PhotoCopy kicker="Wisdom" title="Intellectual growth. Emotional growth.">
          <p>
            Adult development differentiated itself from gerontology. Where the older field watched
            the body fail, this one studied maturation, positive development, maturity, and wisdom
            in adulthood. <em>Adult Life</em> gave students a book their professors could assign.
            It gave a young discipline a spine.
          </p>
          <p>
            Stevens saw the work as teaching, not as a career in the usual sense. The students
            were typically in their forties and fifties. They arrived with long work histories.
            They wanted the theory and the practice in the same room. A week in Santa Fe, then a
            degree on the wire. The questions did not get smaller.
          </p>
        </PhotoCopy>
      </article>

      {/* 05 TOC — 2×4 card grid, cream, right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            In this issue
          </p>
          <h2
            className="mag-h"
            style={{
              color: GREEN,
              paddingBottom: 12,
              borderBottom: `1px solid ${GREEN}`,
              marginBottom: 22,
            }}
          >
            Eight leaves to read.
          </h2>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: 14,
            }}
          >
            {TOC_CARDS.map(([num, title, line]) => (
              <div
                key={title}
                style={{
                  border: `1px solid ${GREEN}`,
                  padding: "16px 18px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "rgba(30,61,47,0.04)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: GREEN,
                  }}
                >
                  {num}
                </p>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: 22,
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: GREEN,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: 14,
                      fontStyle: "italic",
                      color: "#4a453c",
                    }}
                  >
                    {line}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 05
          </p>
        </div>
      </article>

      {/* 06 The Field — three columns, green hairline — left */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            The field
          </p>
          <h2
            className="mag-h"
            style={{
              color: GREEN,
              paddingBottom: 12,
              borderBottom: `1px solid ${GREEN}`,
              marginBottom: 22,
            }}
          >
            Why they came. How they used it.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p>
              In the late 1970s, adult development emerged as an entirely new area in psychology.
              It differentiated itself from gerontology. Where the older field watched the body
              fail, this one studied maturation, positive development, maturity, and wisdom in
              adulthood. The corridor still thought of adulthood as a plateau, then a decline.
              The new books asked what still grows.
            </p>
            <p>
              <em>Adult Life</em>, 1977, gave students a book their professors could assign. It
              gave a young discipline a spine. Stevens saw the work as teaching, not as a career
              in the usual sense. The students who found her were typically in their forties and
              fifties. They arrived with long work histories — organizational consulting, teaching,
              social work. Highly motivated. They wanted two things at once: why they did what
              they chose to do, the theory; and how that theory should guide practice. Not a
              lecture. A working method.
            </p>
            <p>
              Fielding sat inside a program built for adults already in the middle of a life. The
              method was conversation and case. Santa Fe was a week in the desert; then the work
              moved to the screen. The Oxford Handbook chapter came later. Compassion and empathy
              are the gold standard of adult emotional development — her line. This issue stays
              with the years as she gave them. No second career invented for the photograph.
            </p>
          </div>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 06
          </p>
        </div>
      </article>

      {/* 07 Full-bleed + caption + mag-vert — right */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/scarf.jpg`}
          alt="Judy Stevens"
          style={{ objectPosition: "center 22%" }}
        />
        <div className="mag-scrim" />
        <p className="mag-vert" style={{ color: CREAM }}>
          PRACTICE
        </p>
        <div className="mag-caption-bar">
          1987 · Fielding Institute · Orientation in Santa Fe, then a degree on the wire.
        </div>
      </article>

      {/* 08 Philosophy — unique full-page italic quote, racing green — left */}
      <article className="mag-page mag-pad mag-dark mag-racing">
        <div className="mag-body mag-fill-page" style={{ justifyContent: "center" }}>
          <p className="mag-kicker mag-kicker-light" style={{ ...KICK, color: CREAM, marginBottom: 28 }}>
            The standard
          </p>
          <blockquote
            style={{
              margin: 0,
              padding: 0,
              border: 0,
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: 500,
              lineHeight: 1.16,
              letterSpacing: "-0.03em",
              color: CREAM,
            }}
          >
            Compassion and empathy are the gold standard of adult emotional development.
          </blockquote>
          <p
            style={{
              margin: "12px 0 14px",
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: CREAM_DIM,
            }}
          >
            Judy Stevens
          </p>
          <div className="mag-cols mag-folio mag-dense" style={{ color: "rgba(244,239,230,0.88)" }}>
            <p>
              She wrote it as a standard, not a mood. The field had been about decline. Adult
              development asked what still grows after forty — intellectual, emotional, the wider
              system. The students who sat with her were already in the middle of a life. They
              wanted the theory and the practice in the same hour.
            </p>
            <p>
              <em>Adult Life</em>, 1977. Fielding. Santa Fe. Then the screen. The Oxford Handbook
              later. The gold standard is the same sentence in every room: compassion and empathy
              as the mark of adult emotional development. The student&apos;s own thinking still
              has to be visible. That is the work. That is the issue.
            </p>
          </div>
        </div>
      </article>

      {/* 09 Record — two-column list, green year labels — right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            The record
          </p>
          <h2
            className="mag-h mag-h-sm"
            style={{
              color: GREEN,
              paddingBottom: 12,
              borderBottom: `1px solid ${GREEN}`,
              marginBottom: 18,
            }}
          >
            Dates, rooms, books.
          </h2>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 28px",
              alignContent: "stretch",
            }}
          >
            {RECORD.map(([year, name, note]) => (
              <div
                key={`${year}-${name}`}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(30,61,47,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: GREEN,
                  }}
                >
                  {year}
                </p>
                <p
                  style={{
                    margin: "6px 0 4px",
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#1a1510",
                  }}
                >
                  {name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 14.5,
                    lineHeight: 1.45,
                    color: "#4a453c",
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 09
          </p>
        </div>
      </article>

      {/* 10 Photo bleed — left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/gaze.jpg`}
          alt="Judy Stevens"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="mag-scrim" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(15,31,24,0.72) 100%)" }} />
        <p className="mag-vert" style={{ color: CREAM }}>
          FIELDING
        </p>
        <div className="mag-caption-bar">
          Critique as the lesson. Papers passed between students. The professor in the thread.
        </div>
      </article>

      {/* 11 Method — single wide column + left-rule quote — right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            The method
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: GREEN }}>
            When the classroom is a wire.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Online education can become transactional — content exchanged for credit. At Fielding,
            Stevens built the opposite. Participation in critique and dialogue was the point:
            students reviewed one another&apos;s papers, offered feedback, and led online discussions.
            The master&apos;s program opened in 1987, most likely the first in the country delivered
            entirely online except a weeklong orientation.
          </p>
          <blockquote className="mag-quote" style={{ borderLeftColor: GREEN, color: GREEN, flexShrink: 0 }}>
            The curriculum was paired with a teaching strategy that put students in conversation
            with one another, and with their professors.
          </blockquote>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 0 }}>
            Later technologies such as Zoom made the exchange easier and more fluid. The principle
            did not move. Graduate work is a conversation, or it is a filing cabinet. She chose
            the conversation, year after year, in a medium that still tempted people to hide.
          </p>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 11
          </p>
        </div>
      </article>

      {/* 12 Numbers — 2×3 card grid — left */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            The numbers
          </p>
          <h2
            className="mag-h mag-h-sm"
            style={{
              color: GREEN,
              paddingBottom: 12,
              borderBottom: `1px solid ${GREEN}`,
              marginBottom: 20,
            }}
          >
            What the file will hold.
          </h2>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {STATS.map(([num, label]) => (
              <div
                key={label}
                style={{
                  border: `1px solid ${GREEN}`,
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "rgba(30,61,47,0.04)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: 36,
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                    color: GREEN,
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#4a453c",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 12
          </p>
        </div>
      </article>

      {/* 13 Vision + darkband — right */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            The question
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: GREEN }}>
            What the machine cannot sit for.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.7 }}>
            AI is a major challenge for higher education. Students should be able to use it for
            research. It is a tool. Tools have always changed the desk. What cannot be handed off
            is the thinking itself.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Educators still need to see the level of thinking and writing demonstrated by the
            students themselves. The sentence is plain. It does not forbid the tool. It insists
            on a visible mind.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 0 }}>
            Graduate education, she has said for years, should go beyond acquiring information
            and knowledge. Students should learn to assess underlying assumptions, critique
            different points of view, and recognize unexpected consequences arising from those
            assumptions. A machine can retrieve. It cannot sit for that.
          </p>
          <div
            className="mag-darkband"
            style={{ margin: "auto -58px 0", background: GREEN, color: CREAM }}
          >
            Educators still need to see the thinking.
          </div>
        </div>
      </article>

      {/* 14 Statement overlay — type lower-left only — left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/scarf.jpg`}
          alt=""
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="mag-scrim"
          style={{
            background:
              "linear-gradient(180deg, transparent 36%, rgba(15,31,24,0.55) 68%, rgba(15,31,24,0.88) 100%)",
          }}
        />
        <p className="mag-vert" style={{ color: CREAM }}>
          HOLD
        </p>
        <div className="mag-overlay" style={{ justifyContent: "flex-end", alignItems: "flex-start" }}>
          <div style={{ maxWidth: 360 }}>
            <p className="mag-kicker mag-kicker-light" style={{ ...KICK, color: CREAM }}>
              The work
            </p>
            <h2 className="mag-h mag-h-light" style={{ fontSize: 34, color: CREAM, marginBottom: 10 }}>
              Understanding before responding.
            </h2>
            <p className="mag-folio" style={{ color: CREAM_DIM, margin: 0, textAlign: "left" }}>
              Systems thinking. Reflection. The wider system, assessed before a word is spent.
            </p>
          </div>
        </div>
      </article>

      {/* 15 Advice / close — right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ ...KICK, color: GREEN }}>
            Close
          </p>
          <h2 className="mag-h" style={{ color: GREEN }}>
            Never give up on the student.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 18.5, lineHeight: 1.72 }}>
            What does an unstoppable leader mean? Stevens answers without ornament. An unstoppable
            leader never gives up on the goals and aspirations they have for their students as well
            as themselves.
          </p>
          <p className="mag-folio" style={{ fontSize: 18.5, lineHeight: 1.72 }}>
            The sentence names students first. Institutions do not appear. Rank does not appear.
            The work is the refusal to quit on a mind that is still forming.
          </p>
          <blockquote className="mag-pull is-green" style={{ color: GREEN, margin: "auto 8px 0" }}>
            Never give up on the goals and aspirations they have for their students.
          </blockquote>
          <p className="mag-foot" style={{ color: GREEN }}>
            The Wisdom Issue · 15
          </p>
        </div>
      </article>

      <HouseAdSpread
        variant="quote"
        accent={GREEN}
        kicker="The field, at length"
        headlineLead="Written for students, not the corridor."
        headlineHero="Adult Life, 1977"
        tag="Wisdom"
        foot="The Wisdom Issue"
        photo={`${IMG}/lecture.jpg`}
        photoAlt=""
        caption=""
        quote="The work moved from a week in the desert to the screen. The questions did not get smaller."
        sections={[
          {
            heading: "The textbook",
            body:
              "Adult Life, 1977, was written for psychology students. Judy Stevens describes it as the first textbook in adult development — not a hallway pamphlet, not a gerontology leftover. The field had been about decline. She wrote it as growth that continues after the diploma.",
          },
          {
            heading: "Fielding",
            body:
              "The doctoral work at Fielding sat inside a program built for adults who were already in the middle of a life. The method was conversation and case, not a lecture hall that pretended the student had no job, no children, no second act.",
          },
          {
            heading: "Santa Fe",
            body:
              "A week in the desert. Then the seminars moved onto the screen — early, when online education still had to prove it could hold a room. The Oxford Handbook chapter came later, as the field caught up to what she had been teaching.",
          },
        ]}
        continued={[
          {
            heading: "What the issue holds",
            body:
              "This spread is the long page: the years as she gave them, the titles, the move from print to screen. PrimeCrest did not invent a second career for the photograph. The Wisdom Issue stays with the work — adult development as a subject that still has something to say in 2026.",
          },
          {
            heading: "How to read it",
            body:
              "Start at the letter. Then the field. The numbers and the close are the same argument in a shorter type. Scan the QR for theprimecrest.com.",
          },
        ]}
      />

      {/* 18 Back cover — PrimeCrest collage, hard */}
      <article className="mag-page mag-bleed mag-dark mag-forest" data-density="hard">
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
                color: CREAM,
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
                color: CREAM,
              }}
            >
              The Wisdom Issue · Vol. III
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
