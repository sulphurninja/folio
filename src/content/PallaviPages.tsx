/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. VII
 * Pallavi Pande, Founder & Owner, DTOCS & DTOCS Consulting, Portland, Oregon.
 * Cover and back keep the flagship `pl-*` lockup. Interiors are a closed
 * `pv-*` system (src/app/m/pallavi/pallavi.css): plum noir with a rose glow,
 * blush paper, Bodoni Moda display, Spectral text, Jost labels. Three true
 * spreads: the opener (5–6), the story (7–8), and the Fortiora ad (11–12).
 */

const IMG = "/issues/pallavi";
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
  ["On the Cover", "Pallavi Pande"],
  ["Circulation", "Digital edition · worldwide"],
  ["Community Desk", "Greater Than Portland"],
  ["Subscriptions", "theprimecrest.com"],
] as const;

export const PALLAVI_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Editorial" },
  { page: 2, label: "The Editor's Letter" },
  { page: 3, label: "Contents" },
  { page: 4, label: "Credits" },
  { page: 5, label: "The Signature Story" },
  { page: 9, label: "The Record" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "Fortiora · AI Service Desk" },
  { page: 13, label: "PrimeCrest" },
];

export function PallaviPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page pl pl-cover" data-density="hard">
        <img
          className="pl-cover-img"
          src={`${IMG}/feature.jpg`}
          alt="Pallavi Pande, Founder and Owner of DTOCS and DTOCS Consulting"
          fetchPriority="high"
        />
        <div className="pl-cover-grade" />

        <div className="pl-cover-ui">
          <header className="pl-mast">
            <div className="pl-mast-word">
              <svg className="pl-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c45a72" />
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
            <p className="pl-mast-tag">Where Vision Meets Voice</p>
            <div className="pl-mast-hair" />
          </header>

          <div className="pl-cover-date">
            <p>The September Issue</p>
            <p>Vol. VII · No. 07</p>
            <p>2026</p>
          </div>

          <div className="pl-teaser pl-teaser-a">
            <h3>
              The kitchen
              <br />
              sink
            </h3>
            <hr />
            <p>
              Banana leaves at home. Then a party in the States, and the dishes she could not stop
              seeing.
            </p>
          </div>

          <div className="pl-cover-badge">
            <span className="pl-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="pl-cover-role">
            <p>
              Founder &amp;
              <br />
              Owner
            </p>
            <strong>
              DTOCS &amp; DTOCS
              <br />
              Consulting, Portland
            </strong>
          </div>

          <div className="pl-teaser pl-teaser-b">
            <h3>
              Two
              <br />
              companies
            </h3>
            <hr />
            <p>
              DTOCS is the plates. Consulting is the founders who asked her how it was done.
            </p>
          </div>

          <div className="pl-cover-name">
            <em>Pallavi</em>
            <strong>PANDE</strong>
            <p>
              The founder who turned a plate problem into two businesses, and more than twenty
              million single-use pieces taken off the table.
            </p>
          </div>

          <div className="pl-cover-foot">
            <p className="pl-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="pl-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* 01 · Editorial plate */}
      <article className="mag-page pv pv-bleed-leaf" data-density="hard">
        <img className="pv-plate-img" src={`${IMG}/cover.jpg`} alt="Pallavi Pande" style={{ objectPosition: "50% 20%" }} />
        <div className="pv-plate-grade" />
        <span className="pv-plate-side">Vol. VII · No. 07 · 2026</span>
        <ul className="pv-plate-chip">
          <li>
            <b>20M+</b>
            <span>single-use pieces off the table</span>
          </li>
          <li>
            <b>500+</b>
            <span>caterers, venues &amp; vineyards</span>
          </li>
          <li>
            <b>7 yrs</b>
            <span>from the sink to this page</span>
          </li>
        </ul>
        <div className="pv-well">
          <p className="pv-kicker">PrimeCrest · The September Issue</p>
          <div className="pv-plate-stack">
            <h2 className="pv-plate-word">
              Twenty million
              <br />
              plates <em>later.</em>
            </h2>
            <p className="pv-plate-dek">
              Pallavi Pande grew up eating on banana leaves and spent ten years in supply chain
              before a plate ever carried her name. This edition is about what she built when the
              two finally met.
            </p>
            <div className="pv-plate-foot">
              <span>{ISSUE}</span>
              <span>Editorial · 01</span>
            </div>
          </div>
        </div>
      </article>

      {/* 02 · Editor's letter */}
      <article className="mag-page pv pv-paper-leaf">
        <div className="pv-well" style={{ position: "absolute" }}>
          <div className="pv-letter-head" style={{ position: "relative" }}>
            <p className="pv-kicker" style={{ justifyContent: "center", width: "100%" }}>
              From the Editors
            </p>
            <h2>
            The Question That
            <br />
              <em>Stayed at the Sink</em>
            </h2>
            <div className="pv-letter-rules" />
          </div>
          <div className="pv-letter-body">
            <p className="pv-drop">
          Most companies are founded on a market study. A smaller, more interesting number are
              founded on an irritation that refuses to drain away. Pallavi Pande hosted a few
              parties after moving to the United States and ended each one at the sink with the
              dishes, or guilty about the paper and plastic headed for landfill. She asked herself
              why she had to be the Chief Dishwashing Officer or the reason for another bag of
              waste. The question stayed. This issue is what she did about it.
        </p>
        <p>
              She was unusually well armed. Ten years in supply chain taught her how product moves
              and how quickly a small logistics mistake becomes an expensive one. Her childhood in
              India had already shown her the answer: a banana leaf holds a full meal and leaves
              nothing behind. DTOCS, her palm leaf and bamboo fiber tableware company, is that
              memory run through that training. Seven years later, the count stands at more than
              twenty million single-use pieces taken off events and foodservice.
        </p>
        <p>
          The shelf has filled on its own along the way. The U.S. Chamber CO-100, one of
              America&apos;s Top 100 Small Businesses. Inc. 250 Female Founders. A Gold Stevie.
              She does not lead with any of it, and the real mark, she says, is simpler: the
              business is still growing.
        </p>
        <p>
          Her method fits on an index card. Treat people like adults. Stay attached to the
              outcome, not the original plan. Ask what really needs to happen today. The interview
              was answered in writing and printed as answered. Where she declined to dress the
              story up, we kept the plainness. It suits her.
            </p>
           
          </div>
          <div className="pv-letter-sign">
            <div>
              <b>The Editors</b>
              <small>PrimeCrest Editorial Desk</small>
            </div>
            <blockquote>A plate is a small thing. Count again.</blockquote>
          </div>
          <div className="pv-folio">
            <span>{ISSUE}</span>
            <span>The Editor&apos;s Letter</span>
            <b>02</b>
          </div>
        </div>
      </article>

      {/* 03 · Contents */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-toc">
          <div className="pv-toc-pic">
            <img src={`${IMG}/business.jpg`} alt="" style={{ objectPosition: "50% 22%" }} />
            <p className="pv-toc-cap">Pallavi Pande · photographed for the September issue</p>
          </div>
          <div className="pv-toc-main">
            <p className="pv-kicker">In this issue</p>
            <p className="pv-toc-word">Contents</p>
            <p className="pv-toc-issue">The September Issue · Vol. VII · 2026</p>
            <ol className="pv-toc-list">
              <li>
                <em>02</em>
                <div>
                  <h4>The Editor&apos;s Letter</h4>
                  <p>A question that stayed at the sink, and the decade of freight behind the answer.</p>
                </div>
              </li>
              <li>
                <em>04</em>
                <div>
                  <h4>Credits</h4>
                  <p>The desk that put this edition on the page.</p>
                </div>
              </li>
              <li>
                <em>05</em>
                <div>
                  <h4>Pallavi Pande</h4>
                  <p>The founder who turned a plate problem into two companies in Portland, Oregon.</p>
                </div>
              </li>
              <li>
                <em>07</em>
                <div>
                  <h4>The Signature Story</h4>
                  <p>Banana leaves, an Amazon education, and the count behind a quiet slogan.</p>
                </div>
              </li>
              <li>
                <em>09</em>
                <div>
                  <h4>The Record</h4>
                  <p>India, the party, ten years of supply chain, and twenty million pieces.</p>
                </div>
              </li>
              <li>
                <em>11</em>
                <div>
                  <h4>Fortiora · AI Service Desk</h4>
                  <p>The queue, answered. From the publisher&apos;s desk.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </article>

      {/* 04 · Credits */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-well">
          <p className="pv-credits-word">Credits</p>
          <p className="pv-credits-issue">The September Issue · Vol. VII · 2026</p>
          <dl className="pv-credits-list">
            {CREDITS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="pv-credits-foot">
            <p>
              Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
              <br />
              hello@theprimecrest.com · theprimecrest.com
              <br />
              © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
              reproduced without prior written permission from the publisher.
            </p>
            <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
          </div>
        </div>
      </article>

      {/* 05 · Opener spread · left: portrait blended toward the gutter */}
      <article className="mag-page pv pv-bleed-leaf" data-density="hard">
        <img className="pv-open-img" src={`${IMG}/portrait.jpg`} alt="Pallavi Pande" style={{ objectPosition: "50% 14%" }} />
        <div className="pv-open-blend" />
        <div className="pv-open-rail">
          <p className="pv-open-rail-kick">The count, so far</p>
          <ul>
            <li>
              <b>20M+</b>
              <span>single-use pieces replaced</span>
            </li>
            <li>
              <b>500+</b>
              <span>caterers, venues &amp; vineyards</span>
            </li>
            <li>
              <b>2</b>
              <span>companies, one kitchen sink</span>
            </li>
            <li>
              <b>10</b>
              <span>years of supply chain first</span>
            </li>
          </ul>
        </div>
        <p className="pv-open-cap">Portland, Oregon · The September Sitting</p>
      </article>

      {/* 06 · Opener spread · right: nameplate on the noir ground */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-open-main">
          <p className="pv-kicker">The Signature Story</p>
          <h2 className="pv-open-name">
            <b>Pallavi</b>
            <em>Pande</em>
          </h2>
          <div className="pv-open-rule" />
          <p className="pv-open-dek">
            The founder who turned a plate problem into two businesses, and more than twenty
            million single-use pieces taken off the table.
          </p>
          <p className="pv-open-role">Founder &amp; Owner · DTOCS &amp; DTOCS Consulting</p>
          <div className="pv-open-chapters">
            <p>In three chapters</p>
            <ol>
              <li>
                <em>01</em>
                <h5>The sink</h5>
                <p className="pv-chap-line">A party, fifty dishes, and a question that refused to drain away.</p>
              </li>
              <li>
                <em>02</em>
                <h5>The education</h5>
                <p className="pv-chap-line">Amazon as classroom. The tuition was real and so were the lessons.</p>
              </li>
              <li>
                <em>03</em>
                <h5>The count</h5>
                <p className="pv-chap-line">Twenty million pieces, five hundred partners, and a shelf of awards she does not lead with.</p>
              </li>
            </ol>
          </div>
          <div className="pv-open-foot">
            <span>{ISSUE}</span>
            <span>The Signature Story · 06</span>
          </div>
        </div>
      </article>

      {/* 07 · Story spread · left: the essay */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-well">
          <div className="pv-story-head">
            <p className="pv-kicker">The Signature Story</p>
            <h2>
              The sink, <em>then the brand.</em>
            </h2>
            <p className="pv-dek">
              Growing up in India, eating on a banana leaf was ordinary. Beautiful, practical, gone
              without a pile of plastic. The problem arrived later, at a party in the States.
            </p>
          </div>
          <div className="pv-story-body">
            <p className="pv-drop">
          In the house she grew up in, a plate was not a purchase. A banana leaf came to the
              table, held a full meal, and left again, used once and gone, with nothing behind it
              that a landfill would ever have to carry. Nobody called it sustainability. It was
              simply how a meal ended, and it took moving across the world for Pallavi Pande to
              notice how rare that ending is.
        </p>
        <p>
              The United States taught her the alternative one party at a time. She ended each
              night at the sink with the dishes, or guilty about the bag headed for landfill.{" "}
              <span className="pv-run">
            &ldquo;Why am I the Chief Dishwashing Officer, or the reason for another bag of
            waste?&rdquo;
          </span>{" "}
          The joke stuck; the question refused to leave.
        </p>
            <p className="pv-sub">Ten years of freight</p>
        <p>
          She was not guessing at an answer. Before a plate ever carried her name she had spent
              ten years in supply chain, reading freight and learning where a margin quietly dies.
              Put the leaf and the logistics together and DTOCS follows almost by itself: palm leaf
              and bamboo fiber tableware, built for events and foodservice, sold first on Amazon.
        </p>
        <p>
              Amazon was the classroom and the tuition was real. Pricing, packaging, the catalog,
              the reviews, the returns, and the difference between a product people like and a
              product people reorder. There was no template, so she kept each lesson, even the ones
              that cost real money.
            </p>
            <p className="pv-sub">A second company</p>
            <p>
              DTOCS Consulting began as conversation, when other founders kept asking how she sold
              on Amazon and what she would avoid the second time. The second firm offers the
              education she paid for once, with the scars still attached. Her favorite receipt is a
              plate that never shipped: hearts, until the customer survey said square.{" "}
              <span className="pv-run">&ldquo;Working harder does not always fix the problem.&rdquo;</span>{" "}
              The market grades what sells, not effort.
            </p>
            <p className="pv-sub">The desk she runs</p>
            <p>
              Her management style would fit on the same index card as her method. She is direct.
              She does not build complicated rules so that people feel corporate. She wants a team
              that knows what the company is trying to accomplish, has the freedom to do the work,
              and feels comfortable saying that something is not working. Mistakes get the same
              treatment as freight: find what happened, fix it, stop it recurring. She expects
              responsibility rather than perfection, and holds herself to the standard first.
            </p>
            <p className="pv-sub">What the day is for</p>
            <p>
              Motherhood, she says, made her better at the one skill founders rarely name:
              deciding what actually needs to happen today. Being busy is not being productive; a
              day can fill itself with things that move nothing. So the question gets asked every
              morning, of the business and of herself, and the guilt about not doing everything
              perfectly has been retired. Some days the company needs her, some days her family
              does, and some days both at once. The plan bends. The outcome does not.
            </p>
          </div>
          <div className="pv-folio">
            <span>{ISSUE}</span>
            <span>The Signature Story</span>
            <b>07</b>
          </div>
        </div>
      </article>

      {/* 08 · Story spread · right: portrait with the floating quote card */}
      <article className="mag-page pv pv-bleed-leaf" data-density="hard">
        <div className="pv-story-pic">
          <img src={`${IMG}/close.jpg`} alt="Pallavi Pande" style={{ objectPosition: "62% 20%" }} />
        </div>
        <div className="pv-story-r-cap">
          <p className="pv-story-r-kick">In her words</p>
          <p>
            Photographed in Portland for the September issue. The plates are palm leaf and bamboo
            fiber; the count behind them is on the facing page.
          </p>
        </div>
        <div className="pv-story-r-rail">
          <div>
            <b>20M+</b>
            <span>pieces replaced</span>
          </div>
          <div>
            <b>500+</b>
            <span>trade partners</span>
          </div>
        </div>
        <div className="pv-quote-card pv-story-r-card">
          <p>
            Sustainability should just be a better, healthier choice. Not a lecture, and not a
            premium anyone has to apologize for.
          </p>
        </div>
        <div className="pv-story-r-foot">
          <span>PrimeCrest</span>
          <span>The Signature Story · 08</span>
        </div>
      </article>

      {/* 09 · The record */}
      <article className="mag-page pv pv-paper-leaf">
        <div className="pv-well">
          <div className="pv-record-head">
            <div>
              <p className="pv-kicker">The File</p>
              <h2>
                Leaves. Orders. <em>Plates.</em>
              </h2>
            </div>
          </div>
          <ul className="pv-record-list">
            <li>
              <b>India</b>
              <span>
                A banana leaf is everyday tableware. Used once, cleared away, gone without a pile
                of plastic behind it.
              </span>
            </li>
            <li>
              <b>The party</b>
              <span>
                A gathering in the States leaves her at the sink, or guilty about the plastic bound
                for landfill. The question stays.
              </span>
            </li>
            <li>
              <b>Supply chain</b>
              <span>
                Ten years moving product before a plate carries her name. The training the brand
                quietly runs on.
              </span>
            </li>
            <li>
              <b>DTOCS</b>
              <span>
                Palm leaf and bamboo fiber, sold first on Amazon. A crash course in business,
                learned in public, one order at a time.
              </span>
            </li>
            <li>
              <b>Consulting</b>
              <span>
                Built because founders kept asking how. The education she paid for once, offered so
                they need not pay twice.
              </span>
            </li>
            <li>
              <b>The trade</b>
              <span>
                More than five hundred caterers, charcuterie makers, venues, event spaces,
                restaurants and vineyards, in the States and abroad.
              </span>
            </li>
            <li>
              <b>The shelf</b>
              <span>
                CO-100, Inc. 250 Female Founders, a Gold Stevie, People + Planet First verified.
                The only brand in the space, she notes, holding all four.
              </span>
            </li>
            <li>
              <b>2026</b>
              <span>
                Twenty million pieces off the table and still counting. Sewing machines and
                scholarships in India, Greater Than Portland at home. The business, still growing.
              </span>
            </li>
          </ul>
          <div className="pv-folio">
            <span>PrimeCrest</span>
            <span>The Record</span>
            <b>09</b>
          </div>
        </div>
      </article>

      {/* 10 · Be featured */}
      <article className="mag-page pv pv-bleed-leaf" data-density="hard">
        <img className="pv-open-img" src={`${IMG}/magic.jpg`} alt="" style={{ objectPosition: "50% 18%" }} />
        <div className="pv-feat-grade" />
        <div className="pv-feat-card">
          <p className="pv-feat-word">Be Featured</p>
          <h3>Get featured in the upcoming edition of PrimeCrest.</h3>
          <p>Register now. Because your story deserves the record.</p>
          <ul className="pv-feat-perks">
            <li>
              <b>The interview</b>
              printed as answered
            </li>
            <li>
              <b>The sitting</b>
              art-directed, like this one
            </li>
            <li>
              <b>The record</b>
              your file, kept properly
            </li>
          </ul>
          <div className="pv-feat-row">
            <span>Scan the QR code</span>
            <img src="/brand/qr-primecrest.png" alt="Scan to register" />
          </div>
        </div>
      </article>

      {/* 11 · Ad spread · left: the statement */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-well">
          <p className="pv-ad-kicker">Fortiora Group · Advertisement</p>
          <div className="pv-ad-state">
            <h2>
              The queue,
              <br />
              <em>answered.</em>
            </h2>
            <p className="pv-ad-copy">
              An AI service desk that reads every ticket the moment it lands, drafts the reply in
              your voice, and closes the loop. The routine resolves itself. The rest reaches a
              person with the history already attached.
            </p>
            <p className="pv-ad-sig">Fortiora · Applied AI, from the publisher of PrimeCrest</p>
            <ul className="pv-ad-tenets">
              <li>
                <b>Every ticket read</b>
                <span>the moment it lands, around the clock</span>
              </li>
              <li>
                <b>Your voice</b>
                <span>replies drafted the way your team writes</span>
              </li>
              <li>
                <b>History attached</b>
                <span>no customer repeats themselves twice</span>
              </li>
            </ul>
          </div>
          <div className="pv-ad-foot-line">
            <span>PrimeCrest · September</span>
            <span>Advertisement · 11</span>
          </div>
        </div>
      </article>

      {/* 12 · Ad spread · right: the detail */}
      <article className="mag-page pv pv-noir-leaf" data-density="hard">
        <div className="pv-well">
          <p className="pv-ad-kicker">What the desk actually does</p>
          <h2 className="pv-ad-head">Four things, done every hour.</h2>
          <ul className="pv-ad-list">
            <li>
              <b>Triage</b>
              <p>
                Every message read, tagged and ranked as it arrives. The queue is ordered by
                urgency, not arrival time, so the angriest customer never waits the longest.
              </p>
            </li>
            <li>
              <b>Drafted replies</b>
              <p>
                Answers written in your brand voice with the account history attached. Agents
                approve, edit or send, and every edit teaches the desk something.
              </p>
            </li>
            <li>
              <b>Escalation</b>
              <p>
                Response clocks watched in real time. The path fires before a breach, not after
                the apology, with the right person already holding the file.
              </p>
            </li>
            <li>
              <b>Insight</b>
              <p>
                Every close scored. Where tickets pile up, where answers lag, and why, rolled into
                a board-ready view that reads in one sitting.
              </p>
            </li>
          </ul>
          <div className="pv-ad-foot">
            <div>
              <div className="pv-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="pv-ad-contact">
            <b>Hello@thefortiora.com</b>
            <br />
                thefortiora.com · Sheridan, Wyoming
            <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="pv-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <div className="pv-ad-foot-line" style={{ marginTop: 12 }}>
            <span>PrimeCrest · September</span>
            <span>Advertisement · 12</span>
          </div>
        </div>
      </article>

      {/* ============================================== 13 · BACK COVER */}
      <article className="mag-page pl pl-bleed" data-density="hard">
        <img
          className="pl-img"
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
              "radial-gradient(72% 52% at 50% 32%, rgba(196,90,114,0.14) 0%, transparent 70%), linear-gradient(180deg, rgba(24,10,18,0.58) 0%, rgba(24,10,18,0.34) 42%, rgba(24,10,18,0.74) 100%)",
          }}
        />
        <div className="pl-well pl-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="pl-back-mark">
              <svg className="pl-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#c45a72" />
              </svg>
              <b className="pl-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="pl-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--pl-serif)",
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
            <p className="pl-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="pl-hair" style={{ width: 320 }} />
            <p className="pl-label" style={{ letterSpacing: "0.4em" }}>
              The September Issue · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
