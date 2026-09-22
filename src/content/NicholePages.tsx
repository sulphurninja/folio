/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. III
 * Dr. Nichole Pettway, Deputy Director, BOSS, California.
 * WERC is one facility; she also manages the Trauma Recovery Center
 * and the Pre-trial Expansion Program.
 * Cover and back keep the flagship lockup. Interiors are a closed `np-*`
 * system: forest night, bone paper, brass, DM Serif / Baskerville / Oswald.
 * Facts from her interview only. The book on the table is in the sitting.
 */

const IMG = "/issues/nichole";
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
  ["On the Cover", "Dr. Nichole Pettway"],
  ["Subscriptions", "theprimecrest.com"],
] as const;

export const NICHOLE_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Masthead" },
  { page: 2, label: "A letter from the file" },
  { page: 3, label: "Portrait" },
  { page: 4, label: "Index" },
  { page: 5, label: "WERC" },
  { page: 6, label: "The Sitting" },
  { page: 7, label: "As answered" },
  { page: 9, label: "From the file" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "Fortiora · Casework" },
  { page: 13, label: "PrimeCrest" },
];

export function NicholePages() {
  return (
    <>
      <article className="mag-page np np-cover" data-density="hard">
        <img
          className="np-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Dr. Nichole Pettway, Deputy Director, Building Opportunities for Self-Sufficiency"
          fetchPriority="high"
        />
        <div className="np-cover-grade" />
        <div className="np-cover-ui">
          <header className="np-mast">
            <div className="np-mast-word">
              <svg className="np-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c9a35a" />
              </svg>
              <b aria-label="PrimeCrest">
                <i>P</i><i>R</i><i>I</i><i>M</i><i>E</i><i>C</i><i>R</i><i>E</i><i>S</i><i>T</i>
                <span>.</span>
              </b>
            </div>
            <p className="np-mast-tag">Where Vision Meets Voice</p>
            <div className="np-mast-hair" />
          </header>

          <div className="np-cover-date">
            <p>The September Issue</p>
            <p>Vol. III · No. 03</p>
            <p>2026</p>
          </div>

          <div className="np-teaser np-teaser-a">
            <h3>
              The
              <br />
              center
            </h3>
            <hr />
            <p>WERC is one facility. A place, she says, people can come as they are.</p>
          </div>

          <div className="np-cover-badge">
            <span className="np-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="np-cover-role">
            <p>
              Deputy
              <br />
              Director
            </p>
            <strong>
              BOSS
              <br />
              California
            </strong>
          </div>

          <div className="np-teaser np-teaser-b">
            <h3>
              Not the
              <br />
              last word
            </h3>
            <hr />
            <p>Resilience, as she defines it: get back up, sometimes slowly, sometimes differently.</p>
          </div>

          <div className="np-cover-name">
            <em>Nichole</em>
            <strong>PETTWAY</strong>
            <p>
              Deputy Director at Building Opportunities for Self-Sufficiency. WERC is one
              facility; she also manages the Trauma Recovery Center and the Pre-trial
              Expansion Program.
            </p>
          </div>

          <div className="np-cover-foot">
            <p className="np-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="np-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-forest-leaf" data-density="hard">
        <p className="np-spine">The September Issue · Vol. III</p>
        <div className="np-well">
          <p className="np-kicker">Masthead</p>
          <h2 className="np-h">The desk that put this edition on the page.</h2>
          <dl className="np-cred-stack">
            {CREDITS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="np-credits-foot">
            <p>
              Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
              <br />
              Hello@thefortiora.com · theprimecrest.com
              <br />
              © 2026 Fortiora Group LLC. All rights reserved.
            </p>
            <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
          </div>
        </div>
      </article>

      <article className="mag-page np np-paper-leaf">
        <div className="np-well">
          <p className="np-kicker" style={{ justifyContent: "center", width: "100%" }}>
            A letter from the file
          </p>
          <p className="np-letter-open">
            Where you have been does not have to decide where you are going.
          </p>
          <div className="np-letter">
            <p>
              Dr. Nichole Pettway is Deputy Director at Building Opportunities for
              Self-Sufficiency, California. The Wellness Empowerment Resiliency Campus is
              one facility. She also manages the Trauma Recovery Center and the Pre-trial
              Expansion Program. The career was not invented in a classroom. It came from
              her own file: trauma, addiction, incarceration, instability, and the feeling
              that a future had already been decided for her.
            </p>
            <p>
              She also knows what it feels like when someone sees past those circumstances
              and reminds you the life still has purpose. She wanted to become that person
              for others. To help people recognize that where they have been does not have
              to determine where they are going.
            </p>
            <p>
              Purpose is what still gets her out of bed. The work touches real people, real
              families, and sometimes entire generations. Every day she has a chance to use
              both the professional file and the personal one: stability, healing,
              employment, housing, recovery, or simply believing in themselves again. That
              responsibility, she says, is what keeps her moving.
            </p>
            <p>
              She does not count a title, a degree, an award, or a chair as the achievement.
              She counts sitting at the tables where decisions are made and not forgetting
              the people those decisions land on. Lived experience became professional
              expertise. She builds programs, leads teams, creates opportunity, and argues
              for communities she once personally represented.
            </p>
            <p>
              The people who keep her hopeful are often ordinary. Loss, trauma, rejection,
              incarceration, addiction, hardship, and still the courage to rebuild. Their
              perseverance is what she names when she talks about the human spirit. Faith,
              opportunity, accountability, support, and determination, together. She has
              seen the change. She is living proof it is possible. She will always believe
              it is possible.
            </p>
            <p>
              What follows is printed as she answered it. The book on the table in the
              sitting is hers: Against All Odds. We do not invent a chapter around it.
            </p>
            <p className="np-letter-close">
              Your circumstances do not get to have the final say. You can heal, reinvent
              yourself, find a voice, and move in purpose. The past does not disqualify the
              future.
            </p>
          </div>
          <div className="np-folio">
            <span>{ISSUE}</span>
            <span>A letter from the file</span>
            <span>02</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-bleed-leaf" data-density="hard">
        <div className="np-inset-port">
          <img src={`${IMG}/ivory.jpg`} alt="Dr. Nichole Pettway" style={{ objectPosition: "50% 10%" }} />
        </div>
        <div className="np-frame" />
        <p className="np-stamp">
          The September Issue
          <b>Vol. III · Portrait</b>
        </p>
        <p className="np-stamp is-right">
          Deputy Director
          <b>BOSS · California</b>
        </p>
        <p className="np-inset-cap">
          <strong>Dr. Nichole Pettway</strong>
          Lived experience, taken to the table · 03
        </p>
      </article>

      <article className="mag-page np np-paper-leaf">
        <div className="np-well">
          <p className="np-kicker">Index</p>
          <h2 className="np-h">The file, in the order we printed it.</h2>
          <p className="np-index-dek">
            Lived experience, taken to the table at BOSS. Answers kept in the order she
            gave them. The book on the table in the sitting is hers.
          </p>
          <ol className="np-ledger">
            <li>
              <em>02</em>
              <h4>The letter</h4>
              <p>The file she still opens with, and the table she now sits at.</p>
            </li>
            <li>
              <em>05</em>
              <h4>WERC</h4>
              <p>One facility. Hope, healing, opportunity. The whole person, not a single need.</p>
            </li>
            <li>
              <em>06</em>
              <h4>The sitting</h4>
              <p>The California portraits, and Against All Odds on the table.</p>
            </li>
            <li>
              <em>07</em>
              <h4>As answered</h4>
              <p>Resilience, the people she serves, the advice she still gives.</p>
            </li>
            <li>
              <em>09</em>
              <h4>From the file</h4>
              <p>Self-care, society, Building Bridges Foundation, a note to the reader.</p>
            </li>
            <li>
              <em>11</em>
              <h4>Casework</h4>
              <p>An operations assistant, from the publisher&apos;s desk.</p>
            </li>
          </ol>
          <p className="np-ledger-note">
            We do not invent a chapter around the book. It is in the photograph.
          </p>
          <div className="np-folio">
            <span>{ISSUE}</span>
            <span>Index</span>
            <span>04</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-paper-leaf">
        <div className="np-well">
          <p className="np-kicker">WERC</p>
          <h2 className="np-h" style={{ fontSize: 30 }}>
            Come as you are. <em>Become who you were created to be.</em>
          </h2>
          <div className="np-bands">
            <div className="np-band">
              <h3>The place</h3>
              <p>
                The Wellness Empowerment Resiliency Campus is one facility. She also
                manages the Trauma Recovery Center and the Pre-trial Expansion Program. All
                of it is for Building Opportunities for Self-Sufficiency. WERC, she says,
                is hope, healing, opportunity, and transformation. A room people can arrive
                in as they are, and be supported in becoming who they were created to be.
                Pathways for people who have been overlooked, underserved, or defined by
                their most difficult moments. That is the sentence she will still give.
              </p>
            </div>
            <div className="np-band">
              <h3>The whole person</h3>
              <p>
                Change comes from meeting people where they are. Someone may need employment
                help and also be carrying trauma, housing instability, justice-system
                involvement, family trouble, or a behavioral health need. Services,
                relationships, resources, and opportunity are brought to the same table.
                Stability and self-sufficiency are the direction of travel.
              </p>
            </div>
            <div className="np-band">
              <h3>What they taught her</h3>
              <p>
                People are resilient when they are given a real chance, respect, and support.
                Never assume a whole story from one moment. The people they serve keep
                reminding her that everyone has strengths, gifts, and possibilities that may
                only need the right room to show.
              </p>
            </div>
            <div className="np-band">
              <h3>The fight</h3>
              <p>
                One of the greatest challenges, she says, is the lack of equitable access to
                opportunity. Too many people are asked to overcome trauma, poverty,
                incarceration, violence, homelessness, and systemic barriers without the
                means. You cannot tell someone to change a life while denying housing,
                employment, behavioral health, education, and community support.
              </p>
            </div>
            <div className="np-band">
              <h3>What keeps her moving</h3>
              <p>
                Purpose. Every day she has a chance to use both the professional file and the
                personal one. Transformation keeps her hopeful. She has watched people change
                the trajectory of a life, and she is living proof that the change is
                possible. Because she has seen it, she will always believe it.
              </p>
            </div>
          </div>
          <ul className="np-werc-acro">
            <li>
              <b>W</b>
              <span>Wellness</span>
            </li>
            <li>
              <b>E</b>
              <span>Empowerment</span>
            </li>
            <li>
              <b>R</b>
              <span>Resiliency</span>
            </li>
            <li>
              <b>C</b>
              <span>Campus</span>
            </li>
          </ul>
          <p className="np-letter-close" style={{ borderTop: 0, paddingTop: 4 }}>
            Come as you are. Be supported in becoming who you were created to be.
          </p>
          <div className="np-folio">
            <span>{ISSUE}</span>
            <span>WERC</span>
            <span>05</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-bleed-leaf" data-density="hard">
        <img className="np-plate-img" src={`${IMG}/hearth.jpg`} alt="Dr. Nichole Pettway" style={{ objectPosition: "50% 22%" }} />
        <div className="np-plate-grade" />
        <div className="np-frame" />
        <p className="np-stamp">
          The Sitting
          <b>Against All Odds</b>
        </p>
        <p className="np-stamp is-right">
          Photographed for
          <b>The September Issue</b>
        </p>
        <div className="np-sit-bar">
          <div>
            <b>Against All Odds</b>
            <span>the book on the table</span>
          </div>
          <div>
            <b>BOSS</b>
            <span>WERC · TRC · Pre-trial</span>
          </div>
          <div>
            <b>The sitting</b>
            <span>as photographed · 06</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-forest-leaf" data-density="hard">
        <div className="np-well">
          <p className="np-kicker">As answered</p>
          <h2 className="np-h" style={{ fontSize: 28 }}>
            Printed as she said them.
          </h2>
          <div className="np-qa">
            <div className="np-q">
              <b>What does resilience mean?</b>
              <p>
                Not pretending that something did not hurt you. Acknowledging what happened,
                learning from it, healing from it, and refusing to let it have the final word
                over your life. Get back up. Sometimes slowly. Sometimes differently. Get
                back up nonetheless.
              </p>
            </div>
            <div className="np-q">
              <b>Advice, if the season is still painful</b>
              <p>
                Do not make permanent conclusions about a life from a painful season. Give
                yourself permission to ask for help, to heal, and to take recovery one step
                at a time. Trauma may become part of the story. It does not have to become
                the identity. There is life on the other side of what you are in, even when
                you cannot see it yet.
              </p>
            </div>
            <div className="np-q">
              <b>Who has inspired you most?</b>
              <p>
                Many people, she says. Some of the strongest examples have been ordinary
                people who kept going through extraordinary circumstances. Loss, trauma,
                rejection, incarceration, addiction, hardship, and still the courage to
                rebuild. Their perseverance reminds her of the power of the human spirit.
              </p>
            </div>
            <div className="np-q">
              <b>What keeps you hopeful?</b>
              <p>
                Transformation. She has watched people change the trajectory of a life, and
                she is living proof that the change is possible. Life can look completely
                different when faith, opportunity, accountability, support, and determination
                come together. Because she has seen it, she will always believe it.
              </p>
            </div>
            <div className="np-q">
              <b>What would you change in society?</b>
              <p>
                Stop permanently defining people by the worst thing they have done or the
                hardest thing they have lived. People deserve the chance to heal, grow,
                contribute, and reinvent themselves. Accountability matters. Redemption and
                restoration have to have a place as well.
              </p>
            </div>
            <div className="np-q">
              <b>What is ahead?</b>
              <p>
                Leadership, speaking, coaching, program development, and Building Bridges
                Foundation. More opportunity for people marked by trauma, incarceration,
                addiction, violence, and systemic barriers. Future leaders who can carry
                the work. Everything she builds, she wants to outlive her.
              </p>
            </div>
            <div className="np-q">
              <b>A note to the reader</b>
              <p>
                Your circumstances do not get to have the final say. You can survive
                difficult things and still become something you did not expect. Do not let
                the past convince you that you are disqualified from the future. Sometimes
                the experiences you wished you could erase are the ones that equip you to
                change someone else&apos;s life.
              </p>
            </div>
          </div>
          <div className="np-folio">
            <span>{ISSUE}</span>
            <span>As answered</span>
            <span>07</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-bleed-leaf" data-density="hard">
        <img className="np-open-img" src={`${IMG}/wine.jpg`} alt="Dr. Nichole Pettway" style={{ objectPosition: "50% 14%" }} />
        <div className="np-feat-grade" />
        <div className="np-frame" />
        <p className="np-stamp">
          As answered
          <b>Page 08</b>
        </p>
        <p className="np-edge">
          Resilience is refusing to let it have the final word.
        </p>
        <p className="np-port-cap">Dr. Nichole Pettway · Deputy Director, BOSS</p>
      </article>

      <article className="mag-page np np-paper-leaf">
        <div className="np-well">
          <p className="np-kicker">From the file</p>
          <h2 className="np-h" style={{ fontSize: 32 }}>
            Notes she will still give.
          </h2>
          <p className="np-notes-lead">
            Your circumstances do not get to have the final say over your life.
          </p>
          <ul className="np-notes">
            <li>
              <b>The post</b>
              <span>
                Deputy Director at Building Opportunities for Self-Sufficiency, California.
                WERC is one facility. She also manages the Trauma Recovery Center and the
                Pre-trial Expansion Program.
              </span>
            </li>
            <li>
              <b>Self-care</b>
              <span>
                Still learning it is necessary. Family, reflection, prayer, travel,
                celebration, rest, and the things that bring her joy. Boundaries, too. You
                cannot keep pouring out without putting something back.
              </span>
            </li>
            <li>
              <b>Society</b>
              <span>
                Stop permanently defining people by the worst thing they have done or the
                hardest thing they have lived. Accountability matters. Redemption and
                restoration have to have a place as well.
              </span>
            </li>
            <li>
              <b>Ahead</b>
              <span>
                Leadership, speaking, coaching, program development, and Building Bridges
                Foundation. Future leaders who can carry the work. Everything she builds,
                she wants to outlive her.
              </span>
            </li>
            <li>
              <b>The gift</b>
              <span>
                You can survive difficult things and still become something you did not
                expect. Sometimes the experiences you wished you could erase are the ones
                that equip you to change someone else&apos;s life.
              </span>
            </li>
          </ul>
          <div className="np-folio">
            <span>{ISSUE}</span>
            <span>From the file</span>
            <span>09</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-bleed-leaf" data-density="hard">
        <div className="np-half">
          <div style={{ position: "relative" }}>
            <img src={`${IMG}/green.jpg`} alt="Dr. Nichole Pettway" style={{ objectPosition: "50% 18%" }} />
            <p className="np-stamp" style={{ top: 22, left: 22 }}>
              Be Featured
              <b>Vol. III</b>
            </p>
          </div>
          <div className="np-half-copy">
            <p className="np-kicker">Be Featured</p>
            <h3>Get featured in the upcoming edition of PrimeCrest.</h3>
            <p>
              We print answers in the order they are given. We keep the sitting as it was
              directed. This edition is Vol. III of The September Issue. The next one is
              open. Register now. Because your story deserves the record.
            </p>
            <ul className="np-half-perks">
              <li>
                <b>The interview</b>
                <span>Printed as answered. No rewrite of the file you gave us.</span>
              </li>
              <li>
                <b>The sitting</b>
                <span>Art-directed, the way this California sitting was made.</span>
              </li>
              <li>
                <b>The record</b>
                <span>Your page, kept properly, in the upcoming edition.</span>
              </li>
              <li>
                <b>The house</b>
                <span>PrimeCrest, a product of Fortiora Group LLC, Sheridan, Wyoming.</span>
              </li>
              <li>
                <b>The desk</b>
                <span>Hello@thefortiora.com · theprimecrest.com</span>
              </li>
            </ul>
            <p>
              This sitting is from Vol. III. The next edition is open to the people who
              still have a file worth printing. Scan the mark. The desk will take the
              rest from there.
            </p>
            <div className="np-half-qr">
              <img src="/brand/qr-primecrest.png" alt="Scan to register" />
              <span>Scan to register</span>
            </div>
          </div>
        </div>
      </article>

      <article className="mag-page np np-forest-leaf" data-density="hard">
        <div className="np-well">
          <p className="np-ad-kicker">Fortiora Group · Advertisement</p>
          <p className="np-case-word">
            The file
            <br />
            <em>still attached.</em>
          </p>
          <p className="np-case-copy">
            Fortiora Casework is an operations assistant for program teams. The note is
            written as the meeting ends. The referral is queued. The next action stays
            attached to the person, not lost in a second system.
          </p>
          <div className="np-case-strip">
            <div>
              <b>The note</b>
              <span>Written before the room empties.</span>
            </div>
            <div>
              <b>The next step</b>
              <span>Queued against the person, not a pile.</span>
            </div>
            <div>
              <b>The source</b>
              <span>Cited to the meeting that produced it.</span>
            </div>
          </div>
          <div className="np-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>11</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-forest-leaf" data-density="hard">
        <div className="np-well">
          <p className="np-ad-kicker">What the assistant actually does</p>
          <h2 className="np-h" style={{ fontSize: 34 }}>
            Four jobs, <em>kept with the person.</em>
          </h2>
          <ul className="np-dossier">
            <li>
              <em>01</em>
              <b>Session notes</b>
              <p>
                The conversation turned into a record before the next door opens. A person
                still signs it. The machine does not invent what was not said.
              </p>
            </li>
            <li>
              <em>02</em>
              <b>Referrals</b>
              <p>
                Housing, employment, behavioral health, education. The request leaves with
                the file attached, so the receiving desk does not start from nothing.
              </p>
            </li>
            <li>
              <em>03</em>
              <b>The queue</b>
              <p>
                Who is waiting, what is due, which clock is about to fail. Ordered by
                urgency, not by who shouted last.
              </p>
            </li>
            <li>
              <em>04</em>
              <b>The handoff</b>
              <p>
                When a case moves, the history moves with it. Built for shops that cannot
                afford a lost file, and will not pretend a new form is a new person.
              </p>
            </li>
          </ul>
          <div className="np-ad-foot">
            <div>
              <div className="np-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Casework</span>
                </div>
              </div>
              <p className="np-ad-contact">
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
              </p>
            </div>
            <div className="np-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <div className="np-folio">
            <span>PrimeCrest · September</span>
            <span>Advertisement</span>
            <span>12</span>
          </div>
        </div>
      </article>

      <article className="mag-page np np-backcover" data-density="hard">
        <img
          className="np-back-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(0.95) contrast(1.02) brightness(1.12)" }}
        />
        <div className="np-back-grade" />
        <div className="np-well np-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="np-back-mark">
              <svg className="np-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c9a35a" />
              </svg>
              <b className="np-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="np-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p className="np-back-line">
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
              style={{ width: 132, height: 132, padding: 7, background: "#f7f4ee", boxShadow: "0 10px 26px rgba(0, 0, 0, 0.5)" }}
            />
            <p className="np-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <b>theprimecrest.com</b>
            </p>
            <div className="np-back-hair" />
            <p className="np-back-label">The September Issue · 2026</p>
          </div>
        </div>
      </article>
    </>
  );
}
