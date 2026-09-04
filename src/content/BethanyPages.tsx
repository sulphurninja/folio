/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, IssueCredits, PhotoCopy } from "./IssueChrome";

const IMG = "/issues/bethany";

const CREAM = "#f4f0e8";
const STEEL = "#2c4a63";
const STEEL_LIGHT = "#8aa8bd";
const INK = "#0e1824";
const SCRIM = "rgba(20, 40, 70, 0.45)";

export const BETHANY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Editorial" },
  { page: 4, label: "Contents" },
  { page: 5, label: "The Floor" },
  { page: 7, label: "Philosophy" },
  { page: 8, label: "Challenges" },
  { page: 10, label: "Impact" },
  { page: 11, label: "Innovation" },
  { page: 12, label: "The Vision" },
  { page: 13, label: "Advice" },
  { page: 15, label: "The House" },
  { page: 17, label: "PrimeCrest" },
];

const TIMELINE = [
  { mark: "Cottage", title: "The floor", leaf: "06" },
  { mark: "Twelve years", title: "Inside one house", leaf: "06" },
  { mark: "July 2026", title: "The chair", leaf: "03" },
  { mark: "Philosophy", title: "People, then the call", leaf: "08" },
  { mark: "The hard years", title: "What the door receives", leaf: "09" },
  { mark: "The record", title: "Four figures", leaf: "11" },
  { mark: "New methods", title: "What already works", leaf: "12" },
  { mark: "The vision", title: "Still a local house", leaf: "13" },
  { mark: "Counsel", title: "Start at the bottom", leaf: "14" },
];

export function BethanyPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/coverart.jpg`}
        alt="Nick Hill"
        objectPosition="78% center"
        vol="Vol. IV · The Purpose Issue · 2026"
        accent={STEEL_LIGHT}
        icon="house"
        layout="split"
        name="Nick Hill"
        role="President / Chief Executive Officer"
        place="Bethany Children's Home · Philadelphia, Pennsylvania"
        teasers={[
          ["The floor", "Twelve years from the cottage floor to the chair."],
          ["The door", "The work is still the children at the door."],
        ]}
      />

      <IssueCredits
        accent={STEEL_LIGHT}
        groundClass="mag-steel"
        subject="Nick Hill — President / Chief Executive Officer, Bethany Children's Home, Philadelphia"
        words="From the interviews of Nick Hill. Twelve years on the cottage floor, then the chair in July 2026."
        volume="Vol. IV · The Purpose Issue"
        note={
          <>
            <p>
              The Purpose Issue is the house on the Philadelphia side: Bethany Children&apos;s
              Home, and Nick Hill, who spent twelve years on the cottage floor before he took the
              chair. The work did not change when the title did. Children still arrive at the
              door. The staff still have to be the adults in the room.
            </p>
            <p>
              What follows is his account of that floor, the hard years, the figures the house
              will stand on, and the counsel he gives anyone who wants the job: start at the
              bottom. PrimeCrest printed it as he said it. The QR opens theprimecrest.com.
            </p>
          </>
        }
      />

      {/* 03 Subject opener — right. Full-bleed left half, text on the right. */}
      <article className="mag-page">
        <img
          src={`${IMG}/cover.jpg`}
          alt="Nick Hill"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 16%",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            background: SCRIM,
          }}
        />
        <div
          className="mag-body mag-fill-page"
          style={{ padding: "52px 40px 44px 454px" }}
        >
          <p className="mag-kicker" style={{ color: STEEL }}>
            The subject
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK, fontSize: 30, marginBottom: 8 }}>
            Twelve years. Then the chair.
          </h2>
          <p
            style={{
              margin: "0 0 22px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 17,
              fontStyle: "italic",
              lineHeight: 1.4,
              color: STEEL,
            }}
          >
            Cottage Support Staff to President and Chief Executive Officer.
          </p>
          <p className="mag-folio">
            Nick Hill began at Bethany Children&apos;s Home on the cottage floor. Direct work
            with youth. Relationships. Consistency. A room that felt safe. Twelve years inside
            one house before the board moved him to the chair. Cottage Support Staff is the
            first line on the file. President and Chief Executive Officer is the last.
          </p>
          <p className="mag-folio">
            He moved through leadership posts and served as Deputy CEO and Chief Human
            Resources Officer. In July 2026 the board named him President and Chief
            Executive Officer. Circumstances should never determine potential. A title does
            not make someone a leader. People. Accountability. Purpose — what he asks when
            the week turns hard.
          </p>
          <p className="mag-folio">
            The work now is to protect the mission, hold the teams, keep programs honest,
            and make sure each decision lands on a young person. The children still arrive.
            The house still has to be ready. The title changed. The floor did not. This
            issue stays inside one institution. No invented satellite campus.
          </p>
          <blockquote
            className="mag-quote"
            style={{ marginTop: "auto", borderLeftColor: STEEL, color: INK, fontSize: 20 }}
          >
            Circumstances should never determine potential.
          </blockquote>
        </div>
      </article>

      {/* 04 Editorial note — left, cream, giant N */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            From the desk
          </p>
          <p
            className="mag-giant"
            style={{
              position: "absolute",
              left: 8,
              bottom: 8,
              margin: 0,
              background: "linear-gradient(180deg, #2c4a63 0%, #8aa8bd 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            N
          </p>
          <h2
            className="mag-h"
            style={{
              position: "relative",
              zIndex: 1,
              marginTop: 260,
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 44,
              color: INK,
            }}
          >
            Editorial Note.
          </h2>
          <p
            className="mag-folio"
            style={{ position: "relative", zIndex: 1, maxWidth: 460, fontSize: 18, lineHeight: 1.62 }}
          >
            Nick Hill still talks like a man who worked the cottages. He did. Twelve years
            inside one house in Philadelphia — Cottage Support Staff, then the deputy
            desk, then the presidency in July 2026. This issue is the span between those
            rooms. The line he will not drop: a child&apos;s address is not a verdict.
          </p>
          <p className="mag-foot" style={{ position: "relative", zIndex: 1, color: STEEL }}>
            The Purpose Issue · 04
          </p>
        </div>
      </article>

      {/* 05 Contents — right, vertical timeline */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            In this issue
          </p>
          <h2 className="mag-h" style={{ color: INK, fontStyle: "italic", fontWeight: 500, fontSize: 40 }}>
            The span.
          </h2>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 8,
              borderLeft: `2px solid ${STEEL}`,
              paddingLeft: 28,
              margin: "8px 0 0 6px",
            }}
          >
            {TIMELINE.map((row) => (
              <div key={row.mark} style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: -36,
                    top: 8,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: STEEL,
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-sans), system-ui, sans-serif",
                        fontSize: 11.5,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: STEEL,
                      }}
                    >
                      {row.mark}
                    </p>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: 22,
                        fontStyle: "italic",
                        color: INK,
                        lineHeight: 1.15,
                      }}
                    >
                      {row.title}
                    </p>
                  </div>
                  <em
                    style={{
                      fontStyle: "normal",
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 13,
                      letterSpacing: "0.12em",
                      color: STEEL,
                    }}
                  >
                    {row.leaf}
                  </em>
                </div>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 05
          </p>
        </div>
      </article>

      {/* 06 The Floor — left, two-col dropcap */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            The floor
          </p>
          <h2 className="mag-h" style={{ color: INK, fontSize: 36 }}>
            Adults who will not walk away.
          </h2>
          <p
            style={{
              margin: "-8px 0 20px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            How the cottages taught him the work.
          </p>
          <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 17, lineHeight: 1.72 }}>
            <p style={{ margin: "0 0 12px" }}>
              Hill&apos;s measure has always been plain. Circumstances should never decide what
              a young person can become. Every child needs adults who believe in them, speak
              for them, and keep a door open.
            </p>
            <p style={{ margin: "0 0 12px" }}>
              Early work with youth showed him the load they carry, and the stubbornness
              they bring anyway. He watched the gap between giving up and going on. Often
              the difference was one person who refused to leave.
            </p>
            <p style={{ margin: 0 }}>
              That still runs the house. Services are not the whole point. The point is a
              future a young person can see — school, a skill, a job, a name that knows
              theirs.
            </p>
          </div>
          <blockquote className="mag-quote" style={{ marginTop: "auto", borderLeftColor: STEEL, color: INK }}>
            Sometimes the difference is one person who stays.
          </blockquote>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 06
          </p>
        </div>
      </article>

      {/* 07 Full-bleed portrait — right, steel scrim */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait2.jpg`}
          alt="Nick Hill"
          style={{ objectPosition: "center 18%" }}
        />
        <div className="mag-scrim-steel" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <PhotoCopy kicker="The floor" title="Cottage Support Staff to the chair.">
          <p>
            Nick Hill began at Bethany Children&apos;s Home on the cottage floor. Direct work with
            youth. Relationships. Consistency. A room that felt safe. Twelve years inside one
            house. He moved through leadership posts and served as Deputy CEO and Chief Human
            Resources Officer. In July 2026 the board named him President and Chief Executive
            Officer.
          </p>
          <p>
            Circumstances should never determine potential — his line. A title does not make
            someone a leader. The work now is to protect the mission, hold the teams, keep
            programs honest, and make sure each decision lands on a young person. The children
            still arrive. The house still has to be ready. The title changed. The floor did not.
          </p>
        </PhotoCopy>
      </article>

      {/* 08 Leadership philosophy — left, quote + body */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            Philosophy
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK }}>
            People. Accountability. Purpose.
          </h2>
          <p
            style={{
              margin: "-6px 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            What he asks of a leader when the week turns hard.
          </p>
          <blockquote className="mag-quote" style={{ borderLeftColor: STEEL, color: INK, fontSize: 26 }}>
            A title does not make someone a leader.
          </blockquote>
          <p className="mag-folio">
            Hill&apos;s rule is people, accountability, and purpose. Listen. Make the hard
            call. Take the blame. Leadership, he says, is service. It shows in what you do
            when the week turns ugly, not in the plate on the door.
          </p>
          <p className="mag-folio">
            If he is any good at this, the house is stronger because of the people he has
            developed. Staff should have a voice, work that matters, and room to grow.
          </p>
          <p className="mag-folio" style={{ marginBottom: 0 }}>
            At Bethany that means holding one another to account without losing the person
            in the row. High expectations. Still human. Ask for excellent work and still
            see that the people doing it need support.
          </p>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 08
          </p>
        </div>
      </article>

      {/* 09 Challenges — right, 01/02/03 steel numerals */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            Challenges
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK, marginBottom: 8 }}>
            What arrives at the door.
          </h2>
          <p
            style={{
              margin: "0 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 17,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            Mental health, thin systems, and years before the shelter night.
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
            {[
              [
                "01",
                "The weather they live in",
                "Mental and behavioral health. Family instability. Poverty. Trauma. Isolation. School barriers. The pull of social media. Many young people cannot find a floor that holds.",
              ],
              [
                "02",
                "Thin systems",
                "The needs grow more tangled while the offices built to help run short. Families sit in several systems at once, already tired.",
              ],
              [
                "03",
                "Too late at the door",
                "By the time a youth reaches residential or emergency care, years sit behind that night. Put money earlier — families, schools, mental health, work, ordinary good days.",
              ],
            ].map(([num, title, note]) => (
              <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <p
                  className="mag-display"
                  style={{
                    margin: 0,
                    width: 88,
                    flexShrink: 0,
                    fontSize: 48,
                    color: STEEL,
                    lineHeight: 0.9,
                  }}
                >
                  {num}
                </p>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: STEEL,
                    }}
                  >
                    {title}
                  </p>
                  <p className="mag-folio" style={{ margin: "8px 0 0", fontSize: 16, lineHeight: 1.55 }}>
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mag-note" style={{ color: STEEL }}>
            Bethany takes youth from communities across Pennsylvania — almost thirty counties.
          </p>
        </div>
      </article>

      {/* 10 Full-bleed photo — left */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait3.jpg`}
          alt="Nick Hill"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="mag-scrim-steel" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <PhotoCopy kicker="The house" title="Philadelphia · the door is still the work.">
          <p>
            The Purpose Issue stays inside one institution. Cottage, staff, the door. No invented
            satellite campus. The photographs are the house and the man who still talks about the
            floor when he talks about the job. Advice pages in this edition are operational, not
            a keynote. How a house holds when the news cycle moves on.
          </p>
          <p>
            July 2026 is the chair. The years under it are not. PrimeCrest printed the chronology
            as he gave it — cottage first, then the office — and left the moral to the reader.
            People. Accountability. Purpose. What he asks of a leader when the week turns hard.
          </p>
        </PhotoCopy>
      </article>

      {/* 11 Impact statistics — right, 2×2 steel figures on cream */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            The record
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK }}>
            Four figures.
          </h2>
          <p
            style={{
              margin: "-6px 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 17,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            What the interview will stand behind.
          </p>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 0,
              borderTop: `1px solid ${STEEL}`,
              borderLeft: `1px solid ${STEEL}`,
            }}
          >
            {[
              ["30+", "Youth served", "Counties across Pennsylvania"],
              ["12", "Years", "Cottage floor to the chair"],
              ["4", "Programs", "Shelter · residential · transitional · community"],
              ["Cottage", "Staff", "He started on the floor"],
            ].map(([fig, label, note]) => (
              <div
                key={label}
                style={{
                  padding: "22px 24px 20px",
                  borderRight: `1px solid ${STEEL}`,
                  borderBottom: `1px solid ${STEEL}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p
                  className="mag-display"
                  style={{
                    margin: 0,
                    fontSize: fig === "Cottage" ? 40 : 72,
                    color: STEEL,
                    lineHeight: 0.92,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {fig}
                </p>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: INK,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 15,
                    fontStyle: "italic",
                    color: STEEL,
                    lineHeight: 1.35,
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 11
          </p>
        </div>
      </article>

      {/* 12 Innovation — left */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            New methods
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK }}>
            Take what works. Do it cleaner.
          </h2>
          <p
            style={{
              margin: "-6px 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            Workforce, trauma work, and the systems inside the house.
          </p>
          <p className="mag-folio mag-dropcap">
            Bethany is trying to keep changing around the youth it already has. One push
            is work and school as they move toward living on their own. Hill wants them to
            know a past does not close a future.
          </p>
          <p className="mag-folio">
            The house is also tightening how it meets youth who have lived through serious
            trauma or exploitation. Joint Commission accreditation. Named among the first
            Specialized Settings on the East Coast for youth at risk of trafficking, or
            already harmed by it. A Top 100 Organizations listing for depth of service.
          </p>
          <p className="mag-folio" style={{ marginBottom: 0 }}>
            Inside: staff, technology, leadership development, the ordinary machinery.
            Community money rebuilt the basketball court — more than a hundred thousand
            dollars. Hill&apos;s line on invention is dry. It is not always a new thing. Often
            it is a working thing, done with less waste.
          </p>
          <blockquote className="mag-quote" style={{ marginTop: "auto", borderLeftColor: STEEL, color: INK }}>
            Sometimes it is a better way to do what already works.
          </blockquote>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 12
          </p>
        </div>
      </article>

      {/* 13 Vision + darkband — right */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            The vision
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK }}>
            A national name. Still a local house.
          </h2>
          <p
            style={{
              margin: "-6px 0 18px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            Expand the work. Keep the names.
          </p>
          <p className="mag-folio mag-dropcap">
            Hill wants Bethany known as a national leader in youth services and still
            tied to the community that has kept it for generations. More chances for young
            people. The same personal relationships that make the days land.
          </p>
          <p className="mag-folio">
            He also wants a house where staff are proud to show up, young people can see
            a way through, and partners can point to where their money went. Inventive
            enough to meet a changing load. Grounded enough not to lose the mission.
          </p>
          <p className="mag-folio" style={{ marginBottom: 0 }}>
            The last test is the one he keeps. Every young person who comes through should
            leave believing the story is still being written.
          </p>
          <div
            className="mag-darkband"
            style={{
              margin: "auto -58px 0",
              background: INK,
              color: CREAM,
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Current circumstances do not define the future.
          </div>
        </div>
      </article>

      {/* 14 Advice — left, single column, italic closer */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: STEEL }}>
            Counsel
          </p>
          <h2 className="mag-h mag-h-sm" style={{ color: INK }}>
            Start at the bottom.
          </h2>
          <p
            style={{
              margin: "-6px 0 22px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 18,
              fontStyle: "italic",
              color: STEEL,
            }}
          >
            Four notes for anyone who wants the chair.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Be willing to start at the bottom and learn the work. The lessons that stuck
            came from youth and employees, not from an executive office.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Keep learning. You will never know enough. Keep people near you who will
            challenge you, teach you, and tell you what you do not want to hear.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Make the decision. You will not have a perfect brief. You will not please
            everyone. Decide from your values, the mission, and what the house needs.
          </p>
          <p className="mag-folio" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Remember the people. Titles move. The way you treat someone, and the chance
            you open, can stay.
          </p>
          <p
            style={{
              marginTop: "auto",
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 28,
              fontStyle: "italic",
              fontWeight: 500,
              lineHeight: 1.28,
              color: STEEL,
              textWrap: "balance",
            }}
          >
            Titles come and go. The way you treat people can last.
          </p>
          <p className="mag-foot" style={{ color: STEEL }}>
            The Purpose Issue · 14
          </p>
        </div>
      </article>

      {/* 15 Photo overlay — right, type at the bottom, face clear */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/cover.jpg`}
          alt="Nick Hill"
          style={{ objectPosition: "center 12%" }}
        />
        <div className="mag-scrim-steel" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <div className="mag-overlay" style={{ justifyContent: "flex-end", padding: "48px 48px 52px" }}>
          <p className="mag-kicker mag-kicker-light" style={{ color: STEEL_LIGHT }}>
            The mission
          </p>
          <h2 className="mag-h mag-h-light" style={{ fontSize: 36, maxWidth: 520, marginBottom: 14 }}>
            Protect the mission. Hold the teams.
          </h2>
          <p
            className="mag-folio"
            style={{ color: "rgba(244,240,232,0.9)", maxWidth: 500, marginBottom: 0, textAlign: "left" }}
          >
            If a young person leaves Bethany with more confidence, a usable skill, a sense
            of belonging, and a belief they can build a life — the house did the work.
          </p>
        </div>
      </article>

      <HouseAdSpread
        variant="quote"
        accent={STEEL_LIGHT}
        kicker="The house, at length"
        headlineLead="Twelve years on the cottage floor."
        headlineHero="Then the chair."
        tag="Purpose"
        foot="The Purpose Issue"
        photo={`${IMG}/portrait2.jpg`}
        photoAlt=""
        caption=""
        quote="The work is still the children at the door. The title changed. The floor did not."
        sections={[
          {
            heading: "The floor",
            body:
              "Nick Hill came up inside Bethany Children's Home on the Philadelphia side — twelve years on the cottage floor before the appointment as President and Chief Executive Officer. The date he gives for the chair is July 2026. The work he describes is the same work: the children at the door, not a rebrand.",
          },
          {
            heading: "One house",
            body:
              "The Purpose Issue stays inside one institution. Cottage, staff, the door. No invented satellite campus. The photographs are the house and the man who still talks about the floor when he talks about the job.",
          },
          {
            heading: "What follows",
            body:
              "Advice pages in this edition are operational, not a keynote. How a house holds when the news cycle moves on. How a title sits on a person who learned the place from the inside.",
          },
        ]}
        continued={[
          {
            heading: "July 2026",
            body:
              "The chair is new. The years under it are not. PrimeCrest printed the chronology as he gave it — cottage first, then the office — and left the moral to the reader.",
          },
          {
            heading: "The door",
            body:
              "Every spread in this issue returns to the same fact. The children still arrive. The house still has to be ready. That is the whole argument.",
          },
        ]}
      />

      {/* 18 PrimeCrest back — hard, collage + QR */}
      <article className="mag-page mag-bleed mag-steel" data-density="hard">
        <img className="mag-fill" src={`${IMG}/backcover.jpg`} alt="" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(14, 24, 36, 0.42)",
            zIndex: 1,
          }}
        />
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
                color: STEEL_LIGHT,
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
                color: "rgba(244,240,232,0.85)",
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
                color: STEEL_LIGHT,
              }}
            >
              The Purpose Issue · Vol. IV
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
