/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

/**
 * PrimeCrest · The September Issue, Vol. IV
 * Penny Foskaris, Founder, Red Light Pro Devices & Foskaris Wellness,
 * Anaheim Hills, California.
 *
 * Cover and back keep the house PrimeCrest lockup. Interiors are a closed
 * `fk-*` system: blush paper, warm charcoal, Instrument Serif / Spectral /
 * Syne. Contents photo + numeral index, dense two-column stories, photo/type
 * splits with the quote on the dress. Faces stay whole.
 */

const IMG = "/issues/foskaris";

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
    <p className="fk-folio">
      <span>PrimeCrest · September</span>
      <span>{section}</span>
      <span>{page}</span>
    </p>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="fk-kicker">{children}</p>;
}

function AdArt({ shift = 0 }: { shift?: number }) {
  const bars = Array.from({ length: 48 }, (_, i) => {
    const a = Math.abs(Math.sin(i * 0.41 + 0.2));
    const b = Math.abs(Math.cos(i * 0.17));
    return 18 + Math.round(a * 140 + b * 36);
  });

  return (
    <div className="fk-ad-art" aria-hidden>
      <svg
        viewBox="0 0 1680 1120"
        width={1680}
        height={1120}
        style={{ inset: "auto", left: shift, top: 0, width: 1680, height: 1120 }}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="fkGlow" cx="72%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#e8896a" stopOpacity="0.36" />
            <stop offset="52%" stopColor="#d4563a" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#1c1412" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fkBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0b49a" />
            <stop offset="48%" stopColor="#d4563a" />
            <stop offset="100%" stopColor="#8a2e1e" />
          </linearGradient>
        </defs>
        <rect width="1680" height="1120" fill="#1c1412" />
        <rect width="1680" height="1120" fill="url(#fkGlow)" />
        {Array.from({ length: 18 }, (_, i) => (
          <rect
            key={`p${i}`}
            x={40 + (i % 9) * 180}
            y={80 + Math.floor(i / 9) * 480}
            width="148"
            height="420"
            fill="none"
            stroke="#e8896a"
            strokeOpacity={0.14 + (i % 3) * 0.04}
            strokeWidth="1.2"
            rx="3"
          />
        ))}
        <g transform="translate(220 560)">
          {bars.map((v, i) => (
            <rect
              key={i}
              x={i * 28}
              y={-v / 2}
              width="12"
              height={v}
              rx="1"
              fill="url(#fkBar)"
              fillOpacity={0.28 + (i % 4) * 0.1}
            />
          ))}
        </g>
        <text
          x="180"
          y="190"
          fill="#e8896a"
          fillOpacity="0.14"
          style={{ font: "600 132px var(--font-syne), Syne, sans-serif", letterSpacing: "12px" }}
        >
          FORTIORA
        </text>
      </svg>
    </div>
  );
}

export const FOSKARIS_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "The Editor's Letter" },
  { page: 4, label: "The Signature Story" },
  { page: 5, label: "The Method" },
  { page: 6, label: "The Light" },
  { page: 7, label: "The Record" },
  { page: 8, label: "Fortiora · Applied AI" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "PrimeCrest" },
];

export function FoskarisPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page fk fk-cover" data-density="hard">
        <img
          className="fk-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Penny Foskaris, Founder of Red Light Pro Devices and Foskaris Wellness"
          fetchPriority="high"
        />
        <div className="fk-cover-grade" />

        <div className="fk-cover-ui">
          <header className="fk-mast">
            <div className="fk-mast-word">
              <svg className="fk-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f6f0e6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#e8896a" />
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
            <p className="fk-mast-tag">Where Vision Meets Voice</p>
            <div className="fk-mast-hair" />
          </header>

          <div className="fk-cover-left">
            <div className="fk-cover-date">
              <p>The September Issue</p>
              <p>Vol. IV · No. 04 · 2026</p>
            </div>
            <div className="fk-cover-badge">
              <span className="fk-badge-dot" />
              <h2>Unstoppable</h2>
              <strong>LEADER</strong>
              <span>making a difference in 2026</span>
            </div>
            <div className="fk-teaser">
              <h3>
                The room
                <br />
                she needed
              </h3>
              <hr />
              <p>A wellness center she could not find as a patient, built for everyone who came after.</p>
            </div>
          </div>

          <div className="fk-cover-role">
            <p>Founder</p>
            <strong>
              Red Light Pro
              <br />
              &amp; Foskaris Wellness
            </strong>
          </div>

          <div className="fk-teaser fk-teaser-b">
            <h3>
              The light
              <br />
              they take home
            </h3>
            <hr />
            <p>The clinic device the first manufacturer refused to shrink. She found engineers who would.</p>
          </div>

          <div className="fk-cover-name">
            <em>Penny</em>
            <strong>FOSKARIS</strong>
            <p>
              The practitioner who turned two and a half unanswered years into a room in Anaheim
              Hills, then a light her clients take home.
            </p>
          </div>

          <div className="fk-cover-foot">
            <p className="fk-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="fk-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS PHOTO */}
      <article className="mag-page fk fk-cphoto" data-density="hard">
        <img className="fk-cphoto-img" src={`${IMG}/portrait2.jpg`} alt="Penny Foskaris" />
        <div className="fk-cphoto-grade" />
        <p className="fk-cword">CONTENTS</p>
        <p className="fk-cchip">01 · 02</p>
      </article>

      {/* ============================================== 02 · CONTENTS INDEX */}
      <article className="mag-page fk fk-char">
        <div className="fk-well" style={{ padding: "46px 48px 34px" }}>
          <p className="fk-index-k">The Front Page Exclusive</p>
          <div className="fk-lead">
            <b>04.</b>
            <div>
              <h3>Penny Foskaris</h3>
              <p>The room she needed as a patient, and the light her clients take home.</p>
            </div>
          </div>
          <ol className="fk-index">
            <li>
              <b>03.</b>
              <div>
                <p className="fk-index-k">From the desk</p>
                <h4>The Editor&apos;s Letter</h4>
                <p>The patient who built the practice. Printed as answered.</p>
              </div>
            </li>
            <li>
              <b>05.</b>
              <div>
                <p className="fk-index-k">The method</p>
                <h4>Reveal. Restore. Reverse.</h4>
                <p>How the first hour is spent, and what she refuses to test on day one.</p>
              </div>
            </li>
            <li>
              <b>06.</b>
              <div>
                <p className="fk-index-k">The plate</p>
                <h4>The kitchen in Anaheim Hills</h4>
                <p>Twelve home devices. None of them passed.</p>
              </div>
            </li>
            <li>
              <b>07.</b>
              <div>
                <p className="fk-index-k">The file</p>
                <h4>The Record</h4>
                <p>The library, the clinic, the rent-to-buy. Kept as given.</p>
              </div>
            </li>
            <li>
              <b>08.</b>
              <div>
                <p className="fk-index-k">Advertisement</p>
                <h4>Fortiora · Applied AI</h4>
                <p>One workspace for the whole conversation.</p>
              </div>
            </li>
            <li>
              <b>10.</b>
              <div>
                <p className="fk-index-k">The desk</p>
                <h4>Be Featured</h4>
                <p>Because your story deserves the record.</p>
              </div>
            </li>
          </ol>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · LETTER */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>From the Editors</Kicker>
          <h2 className="fk-head" style={{ fontSize: 38 }}>
            The patient who built the practice.
          </h2>
          <div className="fk-flow fk-drop" style={{ marginTop: 14 }}>
            <p>
              For more than two and a half years Penny Foskaris lived with dizzy spells, chronic
              fatigue and a continuous abdominal pain. Doctor to doctor. Test to test. Nothing
              conclusive. Expensive. Exhausting. The education no school offers.
            </p>
            <p>
              A holistic center finally read the history as one story. Within a week she began
              to feel like herself again. She treats that week as evidence, not a miracle. She
              went back to school, then opened Foskaris Wellness in Anaheim Hills: the room she
              had needed as a patient and never found. No one is rushed out of it. More than
              five thousand people have come through the door.
            </p>
            <p>
              When her clients asked to carry the recovery home, she tested roughly a dozen
              consumer red light devices and rejected every one. The maker of the clinic system
              she trusted, about twenty-eight thousand dollars, declined to build a smaller
              version. She found engineers who would. Her name on the housing only because she
              would use it herself.
            </p>
            <p>
              She came from the family restaurant trade. There is no romance in her about what
              a business costs. People used to tell her they wanted a restaurant because they
              thought it was easy money. She told them they would be married to it. A great
              idea is not a plan.
            </p>
            <p>
              We printed her answers in the order she gave them. We kept her first question to
              every founder who asks for advice. Why do you want to do this. The answer has to
              carry you through the parts that are not exciting. Hers did.
            </p>
            <p>
              Reveal. Restore. Reverse. Three words, and a waiting room that does not hurry.
              That is the issue. The rest is how she got there, and what her clients take home
              when the hour is over.
            </p>
            <p>
              We kept the library, the two and a half years, the week that changed the
              reading, and the dozen devices that failed. We kept the rent-to-buy month and
              the client who used to fly in twice a month. The file is short because she
              does not waste a sentence.
            </p>
          </div>
          <p className="fk-pull">
            Why do you want to do this. The answer has to carry you through the parts that are
            not exciting.
          </p>
          <div className="fk-sign" style={{ marginTop: 10 }}>
            <b>The Editors</b>
            <small>PrimeCrest Editorial Desk · Reveal. Restore. Reverse.</small>
          </div>
          <Folio page="03" section="The Editor's Letter" />
        </div>
      </article>

      {/* ============================================== 04 · FEATURE */}
      <article className="mag-page fk fk-char" data-density="hard">
        <div className="fk-stage">
          <div className="fk-stage-rail">
            <Kicker>The Signature Story</Kicker>
            <h2 className="fk-head" style={{ fontSize: 28, marginBottom: 12 }}>
              Penny Foskaris
            </h2>
            <div className="fk-rail fk-drop">
              <p>
                The story starts in a public library. An aunt lived with Type 1 diabetes.
                Heart disease ran in the family. A teenager sat in the stacks reading about
                nutrition because she wanted to know whether food could change the odds.
              </p>
              <p>
                The question went quiet in the family restaurant trade. Then, in her mid
                thirties, it turned on her. Dizzy spells. Fatigue that would not lift. An
                abdominal pain that never stopped. Two and a half years of clean tests and
                shrugs.
              </p>
              <p>
                Every specialist examined a piece of her. Nobody examined the whole. A
                holistic center finally read the history as one story. Within a week she
                felt like herself again. She treats that week as evidence, not a miracle.
              </p>
              <p>
                She went back to school, then built the room she had spent years looking
                for. Founder of Foskaris Wellness and Red Light Pro Devices, Anaheim Hills.
              </p>
            </div>
            <Folio page="04" section="The Signature Story" />
          </div>
          <div className="fk-stage-photo">
            <img src={`${IMG}/portrait2.jpg`} alt="Penny Foskaris" />
            <p className="fk-stage-quote">
              If you do not feel well enough to enjoy the years, that is not living.
            </p>
          </div>
          <div className="fk-stage-rail is-end">
            <Kicker>The Light</Kicker>
            <h2 className="fk-head" style={{ fontSize: 28, marginBottom: 12 }}>
              They take it home.
            </h2>
            <div className="fk-rail">
              <p>
                The first visit is a conversation. Sleep comes first, because a body that
                does not rest cannot repair. Body composition and visceral fat are read
                early. Hormones only if the body asks.
              </p>
              <p>
                More than five thousand people have come through that order. What they
                remember is the first appointment where someone finally listened. No one
                is rushed out the door.
              </p>
              <p>
                For about three years her clients used the professional red light system
                inside the clinic, a machine that costs roughly twenty-eight thousand
                dollars. Then they asked to take the recovery home.
              </p>
              <p>
                She tested roughly a dozen consumer devices. Wrap one around a knee and
                very little happened. None of them passed. The maker she trusted declined
                a smaller version. She found engineers who would.
              </p>
              <p>
                It had to be something she would use herself, or it would not carry her
                name. Months on LED layouts and power. Then a unit a person can rent for
                a month, the rental applied to a purchase.
              </p>
              <p>
                Next she sees the light in school athletic rooms and spare rooms. A client
                who once flew in twice a month now works from another state. The clinic
                keeps its hour. The perimeter moved.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 05 · THE ROOM */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well" style={{ paddingBottom: 0 }}>
          <Kicker>The Method</Kicker>
          <h2 className="fk-head" style={{ fontSize: 34 }}>
            Two and a half years without an answer.
          </h2>
          <div className="fk-pulse">
            <div className="fk-pulse-band is-reveal">
              <em>Reveal</em>
              <p>
                Before the door had a name, she was the patient nobody could explain. A
                symptom, she says, is usually the end result of something further upstream.
                The first hour is spent finding that something.
              </p>
              <p>
                How is she sleeping. What is she eating, and is she eating enough.
                Medications. Stress. The history, read as one story, not as a stack of
                clean tests that never named the pain. Two and a half years of shrugs.
                Then one week that read the whole file.
              </p>
            </div>
            <div className="fk-pulse-band is-restore">
              <em>Restore</em>
              <p>
                Nutrition is often the first layer because under-nourishing the body can look
                like a dozen other problems. Body composition and visceral fat, read early.
                Hormones and micronutrients only if the body asks.
              </p>
              <p>
                She does not believe in every possible test on day one. Get the foundation
                in place and many of those complaints move. Then, if the body still asks,
                they go deeper. Sleep first. Food next. Hormones only when the body asks.
              </p>
            </div>
            <div className="fk-pulse-band is-reverse">
              <em>Reverse</em>
              <p>
                Reveal what is happening. Restore what has been running thin. Reverse the
                pattern that put them in the chair. The words are on the wall because they
                are the method, not a slogan.
              </p>
              <p>
                A client who once flew in twice a month now works from another state.
                Someone should not have to live next door to be well. The light came later,
                and only because the room was already full.
              </p>
            </div>
          </div>
          <Folio page="05" section="The Method" />
        </div>
      </article>

      {/* ============================================== 06 · THE LIGHT */}
      <article className="mag-page fk fk-plate" data-density="hard">
        <img
          className="fk-plate-img"
          src={`${IMG}/kitchen.jpg`}
          alt="Penny Foskaris in the Anaheim Hills kitchen"
        />
        <div className="fk-plate-grade" />
        <p className="fk-plate-quote">
          It had to be something I would use myself, or it would not carry my name.
        </p>
        <p className="fk-cchip">06</p>
      </article>

      {/* ============================================== 07 · THE RECORD */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>The File</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>Years. Rooms. Devices.</h2>
          <p className="fk-dek">Kept in the order she gave them.</p>
          <ol className="fk-file">
            <li>
              <b>01</b>
              <div>
                <h4>The library</h4>
                <p>
                  A teenager reading nutrition studies because an aunt lived with Type 1
                  diabetes and heart disease ran in the family. Can food change the odds.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Two and a half years</h4>
                <p>
                  Dizzy spells, chronic fatigue and continuous abdominal pain that specialist
                  after specialist could not name.
                </p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>One week</h4>
                <p>
                  A holistic center reads the whole history. She goes back to school. The
                  patient becomes the practitioner.
                </p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>Five thousand and more</h4>
                <p>
                  People through Foskaris Wellness in Anaheim Hills. Sleep, food and stress
                  before anything else.
                </p>
              </div>
            </li>
            <li>
              <b>05</b>
              <div>
                <h4>Twenty-eight thousand</h4>
                <p>
                  The professional red light system. Its maker declined a home version. She
                  found engineers who would.
                </p>
              </div>
            </li>
            <li>
              <b>06</b>
              <div>
                <h4>Rent to buy</h4>
                <p>
                  A month at home, the rental applied to a purchase. One client who flew in
                  twice a month now works from another state.
                </p>
              </div>
            </li>
            <li>
              <b>07</b>
              <div>
                <h4>The why</h4>
                <p>
                  First question to any founder: why do you want to do this. She came from
                  restaurants. She already knew what a business costs.
                </p>
              </div>
            </li>
            <li>
              <b>08</b>
              <div>
                <h4>What comes next</h4>
                <p>
                  A hub people can reach from anywhere. Red light in athletic rooms. The
                  clinic keeps its hour. The perimeter moved.
                </p>
              </div>
            </li>
          </ol>
          <Folio page="07" section="The Record" />
        </div>
      </article>

      {/* ============================================== 08 · AD LEFT */}
      <article className="mag-page fk fk-char" data-density="hard">
        <AdArt shift={0} />
        <div className="fk-well" style={{ zIndex: 3 }}>
          <Kicker>Fortiora Group · Advertisement</Kicker>
          <h2 className="fk-head" style={{ fontSize: 38, maxWidth: 620 }}>
            One AI workspace for the whole conversation.
          </h2>
          <p className="fk-dek" style={{ maxWidth: 580 }}>
            Team chat, channels, calls and meetings in a single room. The assistant drafts
            the message, catches you up on what you missed, and turns a thread into a
            decision with the record intact.
          </p>
          <div className="fk-hair" />
          <ul className="fk-ad-list">
            <li>
              <b>Chat &amp; channels</b>
              <p>
                Every project thread in one place, summarized the moment you open it,
                searchable in plain language across the whole company.
              </p>
            </li>
            <li>
              <b>Calls &amp; meetings</b>
              <p>
                Live transcription with recaps and action items assigned before anyone hangs
                up. Spoken once, kept forever.
              </p>
            </li>
            <li>
              <b>The assistant</b>
              <p>
                Drafts replies in your voice, answers questions from the record with its
                source, and briefs you on what changed while you were away.
              </p>
            </li>
            <li>
              <b>Signal</b>
              <p>
                Where decisions stall, who is waiting on a reply, where the team&apos;s
                attention actually goes. The layer that answers why.
              </p>
            </li>
          </ul>
          <div className="fk-lockup" style={{ marginTop: 8 }}>
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 52 }} />
            <div className="fk-lockup-mark">
              <b>Fortiora</b>
              <span>Group</span>
            </div>
          </div>
          <Folio page="08" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 09 · AD RIGHT */}
      <article className="mag-page fk fk-char" data-density="hard">
        <AdArt shift={-840} />
        <div className="fk-well" style={{ zIndex: 3 }}>
          <Kicker>Built for operators</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>
            The day, planned before it starts.
          </h2>
          <p className="fk-ad-copy" style={{ marginTop: 12 }}>
            Built for people who already have a stack and do not want another login. Fortiora
            sits on the conversation you already have and makes it searchable, briefable, and
            hard to lose.
          </p>
          <div className="fk-hair" />
          <ul className="fk-ad-list">
            <li>
              <b>Morning brief</b>
              <p>
                What moved overnight, who is waiting, which thread now needs a decision. Open
                the workspace and the day is already in order.
              </p>
            </li>
            <li>
              <b>The record</b>
              <p>
                Decisions stay attached to the talk that produced them. Six months later you
                can still find who said yes, and why.
              </p>
            </li>
            <li>
              <b>Your voice</b>
              <p>
                Drafts that sound like the person who will send them. Edit, send, or ignore.
                The assistant does not replace the judgment.
              </p>
            </li>
            <li>
              <b>One vendor</b>
              <p>Chat, rooms, calls, notes. One bill, one search box, one place the work lives.</p>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              marginTop: 8,
              flex: "0 0 auto",
            }}
          >
            <div>
              <div className="fk-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 64 }} />
                <div className="fk-lockup-mark">
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="fk-ad-copy" style={{ marginTop: 14, fontSize: 13 }}>
                <b style={{ color: "#f4eee2" }}>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="fk-qr-card">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <Folio page="09" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 10 · BE FEATURED */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>Be Featured</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>The desk is open.</h2>
          <p className="fk-dek">Get featured in the upcoming edition of PrimeCrest.</p>
          <ol className="fk-steps">
            <li>
              <b>01 · Nominate</b>
              <p>
                Send a leader, a method, and one number that changed. We print answers in the
                order they are given. We keep the numbers. We do not invent a second story
                for the photograph.
              </p>
            </li>
            <li>
              <b>02 · Sit</b>
              <p>
                Eight questions. In writing if you prefer. A plate that keeps the subject
                whole. Digital edition, portfolio plate, and a record that stays.
              </p>
            </li>
            <li>
              <b>03 · Scan</b>
              <p>
                Write the desk. Tell us why the year turned. theprimecrest.com ·
                Hello@thefortiora.com
              </p>
            </li>
          </ol>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 16,
              marginTop: 14,
            }}
          >
            <p style={{ margin: 0, fontFamily: "var(--fk-serif)", fontSize: 14, lineHeight: 1.4 }}>
              The year is still open.
            </p>
            <div className="fk-qr-card" style={{ background: "#1c1412", padding: 8 }}>
              <img src="/brand/qr-primecrest.png" alt="Scan to register" />
            </div>
          </div>
          <Folio page="10" section="Be Featured" />
        </div>
      </article>

      {/* ============================================== 11 · BACK COVER */}
      <article className="mag-page fk fk-bleed" data-density="hard">
        <img
          className="fk-img"
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
              "radial-gradient(72% 52% at 50% 32%, rgba(212,86,58,0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(28,20,18,0.6) 0%, rgba(28,20,18,0.36) 42%, rgba(28,20,18,0.76) 100%)",
          }}
        />
        <div className="fk-well fk-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="fk-back-mark">
              <svg className="fk-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f6f0e6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#e8896a" />
              </svg>
              <b className="fk-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="fk-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--fk-serif)",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "rgba(242,237,227,0.9)",
              }}
            >
              A journal of affairs, business and culture, independent reporting, considered
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
              style={{ width: 132, height: 132, padding: 7, background: "#f7f4ee", boxShadow: "0 10px 26px rgba(0,0,0,0.5)" }}
            />
            <p className="fk-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="fk-hair" style={{ width: 320, background: "rgba(232,137,106,0.4)" }} />
            <p className="fk-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
