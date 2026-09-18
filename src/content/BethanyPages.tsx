/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

/**
 * PrimeCrest · The September Issue, Vol. III
 * Nick Hill, President & Chief Executive Officer, Bethany Children's Home.
 *
 * Closed `bc-*` system in src/app/m/bethany/bethany.css. Cover and back keep
 * the civic steel lockup. Interiors are a 12-leaf civic magazine: contents
 * spread with a vertical spine word, a portrait/text signature pair, a dense
 * door-and-record pair, and a two-page Fortiora ledger ad.
 */

const IMG = "/issues/bethany";

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

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="bc-folio">
      <span>PrimeCrest · September</span>
      <span>{section}</span>
      <span>{page}</span>
    </p>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="bc-kicker">{children}</p>;
}

/**
 * Spread-wide civic art for the Fortiora leaves. ViewBox is 1680 × 1120;
 * the facing page shifts it left by one leaf so the door frames and the
 * day-bars read as one drawing across the gutter. Steel, not teal.
 */
function AdArt({ shift = 0 }: { shift?: number }) {
  const bars = Array.from({ length: 56 }, (_, i) => {
    const a = Math.abs(Math.sin(i * 0.33 + 0.4));
    const b = Math.abs(Math.cos(i * 0.19));
    return 22 + Math.round(a * 120 + b * 48);
  });

  return (
    <div className="bc-ad-art" aria-hidden>
      <svg
        viewBox="0 0 1680 1120"
        width={1680}
        height={1120}
        style={{ inset: "auto", left: shift, top: 0, width: 1680, height: 1120 }}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="bcGlow" cx="28%" cy="46%" r="64%">
            <stop offset="0%" stopColor="#5f8fb0" stopOpacity="0.38" />
            <stop offset="58%" stopColor="#2c4a63" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0e1a26" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bcBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a9c6d8" />
            <stop offset="52%" stopColor="#5f8fb0" />
            <stop offset="100%" stopColor="#2c4a63" />
          </linearGradient>
          <linearGradient id="bcFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0e1a26" stopOpacity="0.55" />
            <stop offset="24%" stopColor="#0e1a26" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1680" height="1120" fill="#0e1a26" />
        <rect width="1680" height="1120" fill="url(#bcGlow)" />

        {Array.from({ length: 28 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 40 + 20}
            x2="1680"
            y2={i * 40 + 20}
            stroke="#ece5d8"
            strokeOpacity="0.045"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 42 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 40 + 20}
            y1="0"
            x2={i * 40 + 20}
            y2="1120"
            stroke="#ece5d8"
            strokeOpacity="0.03"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: 9 }, (_, i) => (
          <rect
            key={`d${i}`}
            x={40 - i * 28}
            y={140 - i * 24}
            width={520 + i * 80}
            height={780 + i * 52}
            fill="none"
            stroke="#8aa8bd"
            strokeOpacity={0.32 - i * 0.026}
            strokeWidth={i % 3 === 0 ? 2 : 1}
            rx="4"
          />
        ))}

        <g transform="translate(480 560)">
          {bars.map((v, i) => (
            <rect
              key={i}
              x={i * 15.2}
              y={-v / 2}
              width="6"
              height={v}
              rx="1"
              fill="url(#bcBar)"
              fillOpacity={0.32 + (i % 5) * 0.09}
            />
          ))}
        </g>
        <line x1="780" y1="560" x2="1660" y2="560" stroke="#8aa8bd" strokeOpacity="0.32" strokeWidth="1" />

        <text
          x="720"
          y="200"
          fill="#a9c6d8"
          fillOpacity="0.16"
          style={{ font: "700 148px var(--font-oswald), Oswald, sans-serif", letterSpacing: "10px" }}
        >
          FORTIORA
        </text>

        {[
          [1288, 268],
          [1540, 820],
          [840, 900],
          [1120, 180],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} stroke="#a9c6d8" strokeOpacity="0.5" strokeWidth="1.2">
            <line x1={x - 13} y1={y} x2={x + 13} y2={y} />
            <line x1={x} y1={y - 13} x2={x} y2={y + 13} />
            <circle cx={x} cy={y} r="7" fill="none" strokeOpacity="0.3" />
          </g>
        ))}

        <rect width="300" height="1120" fill="url(#bcFade)" />
      </svg>
    </div>
  );
}

export const BETHANY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "The Signature Story" },
  { page: 6, label: "The Door" },
  { page: 7, label: "The Record" },
  { page: 8, label: "Fortiora · Applied AI" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "PrimeCrest" },
];

export function BethanyPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page bc bc-cover" data-density="hard">
        <img
          className="bc-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Nick Hill, President and Chief Executive Officer of Bethany Children's Home"
          fetchPriority="high"
        />
        <div className="bc-cover-grade" />

        <div className="bc-cover-ui">
          <header className="bc-mast">
            <div className="bc-mast-word">
              <svg className="bc-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#8aa8bd" />
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
            <p className="bc-mast-tag">Where Vision Meets Voice</p>
            <div className="bc-mast-hair" />
          </header>

          <div className="bc-cover-date">
            <p>The September Issue</p>
            <p>Vol. III · No. 03</p>
            <p>2026</p>
          </div>

          <div className="bc-cover-badge">
            <span className="bc-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="bc-teaser bc-teaser-a">
            <h3>
              The floor,
              <br />
              first
            </h3>
            <hr />
            <p>
              Twelve years in the cottages before the board handed him the chief executive&apos;s
              chair.
            </p>
          </div>

          <div className="bc-cover-role">
            <p>
              President &amp;
              <br />
              Chief Executive
            </p>
            <strong>
              Bethany Children&apos;s
              <br />
              Home
            </strong>
          </div>

          <div className="bc-cover-name">
            <em>Nick</em>
            <strong>HILL</strong>
            <p>
              The chief executive who learned the house from the cottage floor, and still measures
              the job by the young person at the door.
            </p>
          </div>

          <div className="bc-cover-foot">
            <p className="bc-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="bc-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS, LEFT */}
      <article className="mag-page bc bc-contents-photo" data-density="hard">
        <img
          className="bc-img"
          src={`${IMG}/portrait2.jpg`}
          alt="Nick Hill"
          style={{ objectPosition: "50% 16%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(90deg, rgba(16,28,40,0.18) 0%, transparent 36%), linear-gradient(0deg, rgba(16,28,40,0.55) 0%, transparent 28%)",
          }}
        />
        <div className="bc-vrail" />
        <p className="bc-vword">CONTENTS</p>
        <p className="bc-contents-cap">Nick Hill · photographed for the September issue</p>
      </article>

      {/* ============================================== 02 · CONTENTS, RIGHT */}
      <article className="mag-page bc bc-navy">
        <div className="bc-well" style={{ padding: "48px 50px 38px" }}>
          <Kicker>The September Issue · Vol. III</Kicker>
          <h2 className="bc-head" style={{ fontSize: 40, marginTop: 10 }}>
            In this issue
          </h2>
          <p className="bc-dek">
            A house learned from the inside. Twelve years on the cottage floor, then the chair.
          </p>

          <ol className="bc-toc">
            <li>
              <b>03</b>
              <div>
                <h4>Credits</h4>
                <p>The masthead, the imprint, and how this edition was set.</p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Nick Hill</h4>
                <p>Cottage Support Staff on the first line. The signature story.</p>
              </div>
            </li>
            <li>
              <b>06</b>
              <div>
                <h4>What the door receives</h4>
                <p>The hard years, thin systems, and the night that is never the start.</p>
              </div>
            </li>
            <li>
              <b>07</b>
              <div>
                <h4>The Record</h4>
                <p>Thirty counties, four programs, a Specialized Setting. Kept plain.</p>
              </div>
            </li>
            <li>
              <b>08</b>
              <div>
                <h4>Fortiora · Applied AI</h4>
                <p>The day, planned before it starts. A house advertisement.</p>
              </div>
            </li>
            <li>
              <b>10</b>
              <div>
                <h4>Be Featured</h4>
                <p>Because your story deserves the record.</p>
              </div>
            </li>
          </ol>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · CREDITS */}
      <article className="mag-page bc bc-navy" data-density="hard">
        <img className="bc-credits-bg" src="/brand/backdrop-primecrest.jpg" alt="" />
        <div className="bc-credits-veil" />
        <div className="bc-well" style={{ padding: "40px 46px 34px", zIndex: 3 }}>
          <p className="bc-credits-word">CREDITS</p>
          <p className="bc-kicker" style={{ marginTop: 10 }}>
            The September Issue · Vol. III · 2026
          </p>
          <div className="bc-hair" style={{ margin: "12px 0 0" }} />

          <ul className="bc-credit-rows">
            {CREDITS.map(([k, v]) => (
              <li key={k}>
                <span className="bc-k">{k}</span>
                <span className="bc-v">{v}</span>
              </li>
            ))}
          </ul>

          <div className="bc-hair" style={{ margin: "14px 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 120px", gap: 20, flex: "0 0 auto" }}>
            <div>
              <p className="bc-kicker" style={{ marginBottom: 8 }}>
                On the cover
              </p>
              <p className="bc-ad-copy" style={{ margin: 0, fontSize: 12.4, lineHeight: 1.5 }}>
                Nick Hill, photographed for this edition. Portrait supplied by Bethany
                Children&apos;s Home and used with permission. Type set in Fraunces, Baskerville
                and Oswald on an 840 × 1120 canvas.
              </p>
            </div>
            <div>
              <p className="bc-kicker" style={{ marginBottom: 8 }}>
                This edition
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  ["Leaves", "Twelve"],
                  ["Questions", "Ten, in the order asked"],
                  ["Years on the floor", "Twelve"],
                  ["Counties served", "Almost thirty"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "6px 0",
                      borderTop: "1px solid rgba(169,198,216,0.18)",
                      fontFamily: "var(--bc-sans)",
                      fontSize: 12,
                      color: "rgba(236,229,216,0.74)",
                    }}
                  >
                    <span>{k}</span>
                    <b style={{ color: "#f2ede3", fontWeight: 500 }}>{v}</b>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/brand/qr-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 118, height: "auto", padding: 6, background: "#f7f4ee" }}
            />
          </div>

          <p className="bc-ad-copy" style={{ marginTop: 14, fontSize: 12.2 }}>
            Printed as answered. Where Hill named a year, we kept it. © 2026 Fortiora Group LLC.
            All rights reserved.
          </p>
          <Folio page="03" section="Credits" />
        </div>
      </article>

      {/* ============================================== 04 · FEATURE, PLATE */}
      <article className="mag-page bc bc-bleed" data-density="hard">
        <img
          className="bc-img"
          src={`${IMG}/portrait3.jpg`}
          alt="Nick Hill"
          style={{ objectPosition: "50% 14%" }}
        />
        <p className="bc-vcap">The Signature Story · 04</p>
        <div className="bc-nameplate">
          <em>Nick</em>
          <strong>Hill</strong>
          <p>
            President and Chief Executive Officer, Bethany Children&apos;s Home. Twelve years on
            the cottage floor before the board named him to the chair.
          </p>
        </div>
      </article>

      {/* ============================================== 04 · FEATURE, TEXT */}
      <article className="mag-page bc bc-cream">
        <div className="bc-well">
          <Kicker>The Signature Story · One</Kicker>
          <h2 className="bc-head">The first line on the file.</h2>
          <p className="bc-dek">
            Cottage Support Staff, twelve years, one house. Nothing about the chair makes sense
            without the floor that came before it.
          </p>
          <div className="bc-hair" style={{ margin: "14px 0 12px" }} />

          <div className="bc-story">
            <div className="bc-story-main">
              <div className="bc-cols bc-drop">
                <p>
                  Bethany Children&apos;s Home sits on the Philadelphia side of Pennsylvania. It
                  takes young people in when the systems around them run thin: shelter beds for the
                  night a young person has nowhere else to go, residential cottages for the longer
                  road, transitional living for the step toward independence, and community based
                  services that reach families before a crisis becomes a placement. The range is
                  wide on purpose. A young person does not arrive with a tidy problem.
                </p>
                <p>
                  Nick Hill came up inside that house. He started as Cottage Support Staff, on the
                  floor, doing the direct work with youth. Relationships. Consistency. A room that
                  felt safe. Twelve years inside one institution before the board moved him to the
                  chair, and he still talks like a man who worked the cottages, because he did.
                </p>
                <p className="bc-sub">The order of the file</p>
                <p>
                  Direct care is unglamorous and exact. The same shift, the same room, the same
                  young person, held steady until steadiness starts to mean something. He watched
                  how often the difference between giving up and going on was a single adult who
                  refused to leave.
                </p>
                <p>
                  He moved through leadership posts, served as Deputy Chief Executive and Chief
                  Human Resources Officer, and in July 2026 the board named him President and Chief
                  Executive Officer. The title changed. The floor did not.
                </p>
                <p>
                  Ask him what he wants from a leader when the week turns hard and the answer
                  arrives in that order. Listen first. Make the hard call. Take the blame when it
                  lands. Staff should have a voice, work that matters, and room to grow.{" "}
                  <span className="bc-run">Circumstances should never determine potential.</span> A
                  child&apos;s address is not a verdict, and the file is never the whole story.
                </p>
                <p>
                  The work now is to protect the mission, hold the teams, keep programs honest, and
                  make sure each decision lands on a young person. Shelter for the night. Cottages
                  for the longer stay. Transitional living for the step out. Community services that
                  try to reach a family before the door is the last one open. Four rooms, one house.
                </p>
                <p>
                  If he is any good at this, he will tell you, the house is stronger because of the
                  people he has developed. High expectations. Still human. Ask for excellent work
                  and still see that the people doing it need support.
                </p>
              </div>
            </div>
            <aside className="bc-pull-rail">
              <b>“</b>
              <p>
                A title does not make someone a leader. People do. Accountability does. Purpose
                does.
              </p>
              <span>Nick Hill · President &amp; CEO</span>
            </aside>
          </div>
          <Folio page="05" section="The Signature Story" />
        </div>
      </article>

      {/* ============================================== 05 · THE DOOR */}
      <article className="mag-page bc bc-cream">
        <div className="bc-well">
          <Kicker>The Signature Story · Two</Kicker>
          <h2 className="bc-head">What the door receives.</h2>
          <p className="bc-dek">
            By the time a young person reaches residential or emergency care, years usually sit
            behind that night. The night is the visible part.
          </p>
          <div className="bc-hair" style={{ margin: "12px 0 10px" }} />

          <div className="bc-colwrap">
            <div className="bc-cols bc-drop">
              <p>
                What is not visible is the slow accumulation that led to it: mental and behavioral
                health left unaddressed, family instability, poverty, trauma, isolation, barriers at
                school, and the constant pull of a phone that never stops. Many arrive unable to
                find a floor that holds.
              </p>
              <p>
                The systems built to help are thin, and getting thinner. Needs grow more tangled
                while the offices meant to answer them run short of hands and hours. A single family
                may sit inside several systems at once, already exhausted, retelling the same story
                to each of them and watching it fall between the desks.
              </p>
              <p className="bc-sub">Put the money earlier</p>
              <p>
                Hill&apos;s argument about this is not complicated, and he makes it often.{" "}
                <span className="bc-run">Put the money earlier.</span> Families, schools, mental
                health, work, the ordinary good days that keep a child out of a crisis bed. By the
                time the door at Bethany is the last one open, the least expensive help is already
                years in the past.
              </p>
              <p>
                He does not pretend the work is clean. A young person tests whether the adults will
                leave, because leaving is the pattern they have learned to expect. The staff have to
                be the adults in the room on the worst day, not only the good one. The young person
                at the door is the whole reason. The adult beside them, backed and steady, is how
                the reason survives a difficult year.
              </p>
              <p className="bc-sub">Start at the bottom</p>
              <p>
                The counsel he gives anyone who wants the chair is short. Be willing to start at the
                bottom and learn the work. The lessons that stuck came from youth and employees, not
                from an executive office. Keep learning. Keep people near you who will tell you what
                you do not want to hear. Make the decision. You will not have a perfect brief.
                Remember the people. Titles move. The way you treat someone can stay.
              </p>
              <p>
                He wants Bethany known as a national name in youth services and still tied to the
                community that has kept it for generations. More chances for young people. The same
                personal relationships that make the days land. Inventive enough to meet a changing
                load. Grounded enough not to lose the mission. The last test is the one he keeps.
                Every young person who comes through should leave believing the story is still being
                written.
              </p>
              <p>
                An unstoppable leader, in his phrasing, is someone who never gives up on the goals
                they hold for the people in their care, and for themselves. It does not mean never
                meeting a hard week. It means refusing to let the hard week write the file. He
                starts the morning with a single question: what can I do today to make the house
                stronger, and to give a young person a better next year.
              </p>
              <p>
                The work is not only a bed. Education, a usable skill, a first job, a therapist who
                stays, a court that got rebuilt because the town showed up with more than a hundred
                thousand dollars. He wants youth to understand that a past is not a verdict. The
                title on the door is not the proof. The next shift is.
              </p>
            </div>
          </div>

          <div className="bc-slab">
            <p>
              If a young person leaves with confidence, a usable skill, a sense of belonging, and a
              belief they can build a life, the house did the work.
            </p>
            <span>Nick Hill · on the measure that still holds</span>
          </div>
          <Folio page="06" section="The Door" />
        </div>
      </article>

      {/* ============================================== 06 · THE RECORD */}
      <article className="mag-page bc bc-cream">
        <div className="bc-well">
          <Kicker>The Record</Kicker>
          <h2 className="bc-head">Dates. Rooms. The file.</h2>
          <p className="bc-dek">
            What the interview will stand behind. Kept in the order he gave it.
          </p>
          <div className="bc-hair" style={{ margin: "12px 0 4px" }} />

          <ul className="bc-file">
            <li>
              <b>Cottage</b>
              <span>
                The first line on the file. Cottage Support Staff, on the floor, doing the direct
                work with youth.
              </span>
            </li>
            <li>
              <b>Twelve years</b>
              <span>
                One house before the chair, through posts including Deputy Chief Executive and
                Chief Human Resources Officer.
              </span>
            </li>
            <li>
              <b>July 2026</b>
              <span>
                The board names him President and Chief Executive Officer. The work waiting at the
                door does not change.
              </span>
            </li>
            <li>
              <b>Thirty counties</b>
              <span>
                Youth arrive from across Pennsylvania into shelter, residential, transitional living
                and community based services.
              </span>
            </li>
            <li>
              <b>Specialized Setting</b>
              <span>
                Among the first on the East Coast for youth at risk of trafficking. Joint Commission
                accredited.
              </span>
            </li>
            <li>
              <b>$100,000+</b>
              <span>
                Community money rebuilt the basketball court. A Top 100 Organizations listing
                recognised the service.
              </span>
            </li>
            <li>
              <b>The systems</b>
              <span>
                Leadership structure tightened. Human resources and performance systems rebuilt.
                Staff, technology, and the ordinary machinery of a house that has to last.
              </span>
            </li>
            <li>
              <b>The measure</b>
              <span>
                If a young person leaves with confidence, a usable skill, a sense of belonging, and
                a belief they can build a life, the house did the work.
              </span>
            </li>
          </ul>

          <div className="bc-prog">
            <div>
              <b>Shelter</b>
              <p>Beds for the night a young person has nowhere else to go.</p>
            </div>
            <div>
              <b>Residential</b>
              <p>Cottages for the longer road, held by the same adults.</p>
            </div>
            <div>
              <b>Transitional</b>
              <p>Living that steps toward independence without dropping the name.</p>
            </div>
            <div>
              <b>Community</b>
              <p>Services that reach a family before a crisis becomes a placement.</p>
            </div>
          </div>
          <Folio page="07" section="The Record" />
        </div>
      </article>

      {/* ============================================== 08 · AD, LEFT */}
      <article className="mag-page bc bc-navy" data-density="hard">
        <AdArt />
        <div className="bc-well" style={{ padding: "52px 50px 38px" }}>
          <Kicker>Fortiora Group · Advertisement</Kicker>
          <h2 className="bc-ad-hero">
            The day, planned
            <br />
            <em>before it starts.</em>
          </h2>
          <div className="bc-hair" style={{ width: 220, margin: "16px 0 12px" }} />
          <p className="bc-ad-copy">
            An AI-native productivity suite that plans the day, drafts the update, and clears the
            busywork. Tasks, docs, calendar and automations on one board, with an assistant that
            reads the context, writes the first draft, and moves the work forward while the team is
            still in the meeting. Built on your stack. Measured on hours returned.
          </p>

          <ol className="bc-ad-list">
            <li>
              <b>01</b>
              <div>
                <h5>AI task board</h5>
                <p>
                  Priorities set from goals, deadlines and capacity. The assistant plans the day,
                  then reshuffles it the moment the day changes. Every task carries its context, so
                  the next thing to do is always obvious.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h5>Docs and meetings</h5>
                <p>
                  Notes, summaries and action items captured and routed without the admin. Ask in
                  plain language. Get the answer with its source, across every team that touched
                  the work.
                </p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h5>Automations and agents</h5>
                <p>
                  Standups, follow-ups, reports and handoffs run themselves, with approvals and
                  audit trails left where they belong. The agents hand back only the decisions that
                  actually need a person.
                </p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h5>Focus and insight</h5>
                <p>
                  Where time actually goes, where tasks stall, where the week gets won. The
                  analytics layer answers why, not only what, and turns a busy team into one that
                  leaders can plan around.
                </p>
              </div>
            </li>
          </ol>

          <p className="bc-ad-copy" style={{ marginTop: 18 }}>
            Built for operators who already have a stack and do not want another login. Fortiora
            wires the assistant into the work that already exists, then reports what it found. No
            generic playbook. A system with an owner and a number attached.
          </p>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              paddingTop: 16,
            }}
          >
            <div className="bc-lockup-mark">
              <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 58 }} />
              <span>
                Fortiora
                <i>Hello@thefortiora.com</i>
              </span>
            </div>
            <div className="bc-qr-card" style={{ marginTop: 0, width: 168 }}>
              <p>Scan to start</p>
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
              <b>Book a pilot</b>
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 09 · AD, RIGHT */}
      <article className="mag-page bc bc-navy" data-density="hard">
        <AdArt shift={-840} />
        <div className="bc-well" style={{ padding: "52px 50px 38px" }}>
          <Kicker>An advertisement by the publisher</Kicker>
          <h2 className="bc-ad-hero" style={{ fontSize: 38 }}>
            Sensible systems.
            <br />
            <em>Actionable advice.</em>
          </h2>
          <p className="bc-ad-copy" style={{ maxWidth: 640 }}>
            Custom-built, then measured on the only thing that matters: hours returned to the team
            and a record that stays true. No generic assistant. A system with an owner and a number
            attached.
          </p>

          <div className="bc-svc" style={{ marginTop: 22 }}>
            <div>
              <span className="bc-svc-n">01</span>
              <h4>Task board</h4>
              <p>
                Every task carries its context, so the next thing to do is always obvious and
                nothing slips off the edge of the week. Priorities reset when the day changes,
                not when someone remembers to update the board.
              </p>
              <p className="bc-svc-foot">Priorities that reshuffle themselves</p>
            </div>
            <div>
              <span className="bc-svc-n">02</span>
              <h4>The record</h4>
              <p>
                Notes and action items routed without anyone tending them. The file stays current
                while the meeting is still running. Ask in plain language and get the answer with
                its source attached.
              </p>
              <p className="bc-svc-foot">Ask in plain language</p>
            </div>
            <div>
              <span className="bc-svc-n">03</span>
              <h4>Agents</h4>
              <p>
                The agents hand back only the decisions that actually need a person, and nothing
                runs without a record. Standups, follow-ups and handoffs keep moving after the
                room empties.
              </p>
              <p className="bc-svc-foot">Approvals where they belong</p>
            </div>
            <div>
              <span className="bc-svc-n">04</span>
              <h4>Insight</h4>
              <p>
                Work becomes legible. Where time actually goes, where tasks stall, where the week
                gets won. A busy team turns into one that leaders can plan around, week by week.
              </p>
              <p className="bc-svc-foot">Why, not only what</p>
            </div>
          </div>

          <div className="bc-lockup">
            <div className="bc-lockup-mark">
              <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 72 }} />
              <span>
                Fortiora
                <i>Applied AI · thefortiora.com</i>
              </span>
            </div>
            <p>
              <b>Hello@thefortiora.com</b>
              <br />
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 10 · BE FEATURED */}
      <article className="mag-page bc bc-bleed" data-density="hard">
        <img
          className="bc-img"
          src={`${IMG}/backcover.jpg`}
          alt=""
          style={{ filter: "saturate(0.9) contrast(1.04) brightness(1.05)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(180deg, rgba(16,28,40,0.35) 0%, rgba(16,28,40,0.15) 28%, rgba(16,28,40,0.55) 100%)",
          }}
        />
        <div className="bc-spot-card">
          <p className="bc-script">Be Featured</p>
          <h3>
            Get featured in the
            <br />
            upcoming edition of
            <br />
            PrimeCrest
          </h3>
          <p className="bc-dek" style={{ color: "#4a5a66" }}>
            PrimeCrest publishes leaders whose method is worth reading, not only their results.
            One interview. We print the answers as given. A digital edition, a portfolio, and a
            permanent link. If that is the kind of record you want on file, for a founder, an
            operator, or a chief executive whose year deserves more than a press release, the
            desk is open.
          </p>
          <div className="bc-slab" style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", margin: "18px 0 0" }}>
            <p>Because your story deserves the record. One conversation, printed as answered.</p>
            <span>PrimeCrest · The September desk</span>
          </div>
          <ol className="bc-spot-steps">
            <li>
              <b>01 · Nominate</b>
              <p>
                A leader, a method, and one number that changed. Name the work, not the slogan.
                The desk reads every file.
              </p>
            </li>
            <li>
              <b>02 · Sit for it</b>
              <p>
                One interview, in writing if you prefer. Ten questions. The transcript goes to
                press as answered.
              </p>
            </li>
            <li>
              <b>03 · Published</b>
              <p>
                Digital edition, portfolio plate, and a permanent link. The September desk is
                open. Register now.
              </p>
            </li>
          </ol>
          <div className="bc-spot-foot">
            <p className="bc-imprint" style={{ color: "#22323d", textAlign: "left" }}>
              <b style={{ color: "#1b3346" }}>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              hello@theprimecrest.com · theprimecrest.com
            </p>
            <div>
              <p
                className="bc-kicker"
                style={{ marginBottom: 8, textAlign: "right", color: "#2c4a63" }}
              >
                Scan the QR code
              </p>
              <img src="/brand/qr-primecrest.png" alt="Scan to reach PrimeCrest" />
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 11 · BACK COVER */}
      <article className="mag-page bc bc-bleed" data-density="hard">
        <img
          className="bc-img"
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
              "radial-gradient(72% 52% at 50% 32%, rgba(138,168,189,0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(16,32,46,0.6) 0%, rgba(16,32,46,0.36) 42%, rgba(16,32,46,0.76) 100%)",
          }}
        />
        <div className="bc-well bc-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="bc-back-mark">
              <svg className="bc-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#8aa8bd" />
              </svg>
              <b className="bc-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="bc-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--bc-serif)",
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
            <p className="bc-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="bc-hair" style={{ width: 320 }} />
            <p className="bc-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
