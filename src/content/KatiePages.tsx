/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The October Issue, Vol. VI
 * Katie Holmes, Founder & CEO, Brand Studio Creative.
 * Cover and back keep the flagship lockup. Interiors are a closed `kh-*`
 * system: ice paper, ink, studio teal, Playfair / Franklin / Cinzel.
 * Facts from her interview only. No scene invented.
 */

const IMG = "/issues/katie";
const ISSUE = "PrimeCrest · The October Issue";

const CREDITS = [
  ["Editor-in-Chief", "Katherine A. Mercer"],
  ["Managing Editor", "Daniel Whitfield"],
  ["Feature Editor", "Rebecca Sloan"],
  ["Art & Design Head", "Marcus Ellison"],
  ["Type & Composition", "Nathan Brooks"],
  ["Cover Direction", "Claire Donovan"],
  ["Photo Editor", "Gregory Hale"],
  ["Photography", "Kyrsten Ashlay Photography"],
  ["Interview", "Printed as answered"],
  ["Fact Desk", "Emily Carter"],
  ["Digital Production", "Aaron Pierce"],
  ["Business Development", "Jonathan Reyes"],
  ["On the Cover", "Katie Holmes"],
  ["Subscriptions", "theprimecrest.com"],
] as const;

export const KATIE_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Method" },
  { page: 6, label: "The Studio" },
  { page: 7, label: "Branding with Heart" },
  { page: 9, label: "The File" },
  { page: 10, label: "Be Featured" },
  { page: 11, label: "Fortiora · Relay" },
  { page: 13, label: "PrimeCrest" },
];

export function KatiePages() {
  return (
    <>
      <article className="mag-page kh kh-cover" data-density="hard">
        <img
          className="kh-cover-img"
          src={`${IMG}/blazer.jpg`}
          alt="Katie Holmes, Founder and CEO of Brand Studio Creative"
          fetchPriority="high"
        />
        <div className="kh-cover-grade" />
        <div className="kh-cover-ui">
          <header className="kh-mast">
            <div className="kh-mast-word">
              <svg className="kh-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#4aa0ae" />
              </svg>
              <b aria-label="PrimeCrest">
                <i>P</i><i>R</i><i>I</i><i>M</i><i>E</i><i>C</i><i>R</i><i>E</i><i>S</i><i>T</i>
                <span>.</span>
              </b>
            </div>
            <p className="kh-mast-tag">Where Vision Meets Voice</p>
            <div className="kh-mast-hair" />
          </header>

          <div className="kh-cover-date">
            <p>The October Issue</p>
            <p>Vol. VI · No. 06</p>
            <p>2026</p>
          </div>

          <div className="kh-teaser kh-teaser-a">
            <h3>
              Branding
              <br />
              with Heart
            </h3>
            <hr />
            <p>The studio that starts with the person behind the business, then the mark.</p>
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
              CEO
            </p>
            <strong>
              Brand Studio
              <br />
              Creative
            </strong>
          </div>

          <div className="kh-teaser kh-teaser-b">
            <h3>
              Flower House
              <br />
              Dallas
            </h3>
            <hr />
            <p>From the original project to the wraps on the cars. Lauren, still using the brand.</p>
          </div>

          <div className="kh-cover-name">
            <em>Katie</em>
            <strong>HOLMES</strong>
            <p>
              The founder who built a studio so a business owner can take what lives in her head
              and put it on the page, the site, and the wrap.
            </p>
          </div>

          <div className="kh-cover-foot">
            <p className="kh-cover-issn">
              <b>The October Issue</b>
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

      <article className="mag-page kh kh-ink-leaf" data-density="hard">
        <div className="kh-well">
          <p className="kh-credits-word">Credits</p>
          <p className="kh-credits-issue">The October Issue · Vol. VI · 2026</p>
          <dl className="kh-credits-list">
            {CREDITS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="kh-credits-foot">
            <p>
              Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801
              <br />
              Hello@thefortiora.com · theprimecrest.com
              <br />
              © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
              reproduced without prior written permission from the publisher.
            </p>
            <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-paper-leaf">
        <div className="kh-well">
          <p className="kh-kicker">The Subject</p>
          <h2 className="kh-h">
            She did not wake up wanting a studio. <em>She kept seeing the gap.</em>
          </h2>
          <div className="kh-cols">
            <p className="kh-drop">
              Katie Holmes founded Brand Studio Creative because she watched owners who had
              already built the business fail to get the brand to match it. The work was good.
              The clients were cared for. The site and the mark did not say so. She wanted a
              room where those owners were heard through the making of the thing, not hurried
              past it.
            </p>
            <p className="kh-sub">What she calls the work</p>
            <p>
              She calls the method Branding with Heart. To her, a business is often
              someone&apos;s baby, and she does not take that trust lightly. Curiosity,
              collaboration, and honest talk sit at the desk before a typeface does. The
              point is not a beautiful file. The point is a brand that feels true to the
              person behind it, and that gives her the nerve to show up.
            </p>
            <p className="kh-sub">How a job starts</p>
            <p>
              She begins at the heart of the business. Purpose, audience, goals, personality,
              and, most of all, how the owner wants people to feel when they meet the brand.
              She asks a lot of questions because the more she understands, the more
              deliberate the work can be. Then she looks for the connections and turns them
              into strategy, a visual identity, messaging, and a website that can be used.
            </p>
            <p className="kh-sub">What this issue holds</p>
            <p>
              What follows is the method as she told it. Authenticity and clarity as the
              thing that still cuts through polished noise. Flower House Dallas, grown past
              the original job onto merchandise and car wraps. The walkthrough she gives so
              a client can keep using the brand after launch day. The advice she would give
              an owner who wants to start with the heart, not the logo. Printed as answered.
              No scene added.
            </p>
            <p className="kh-sub">What she would tell an owner</p>
            <p>
              Start with why you do the work, who you are best equipped to help, what
              makes the approach different, and how you want people to feel. Do not build
              the brand around a trend. Build it around what is true, and around where the
              shop is going, not only where it is today. Invest in a foundation. Make tools
              you can use again. When the brand is honest and the strategy is clear,
              showing up gets easier and the right people can tell why you are the right
              choice. Give yourself permission to evolve. The audience may change. The
              brand should be able to change with it.
            </p>
          </div>
          <p className="kh-pull">Your business has a heart. Your brand should feel like it.</p>
          <div className="kh-folio">
            <span>{ISSUE}</span>
            <span>The Subject</span>
            <span>02</span>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-bleed-leaf" data-density="hard">
        <div className="kh-spreadpic is-left">
          <img src={`${IMG}/chair.jpg`} alt="" />
        </div>
        <div className="kh-scrim" />
        <div className="kh-well">
          <span className="kh-toc-banner">The Signature Story</span>
          <p className="kh-toc-num">07</p>
          <h2 className="kh-toc-line">From embarrassed by the brand to proud enough to share it.</h2>
          <p className="kh-toc-sub">
            Flower House Dallas, page 07. The original project, then the site, the
            marketing, the merchandise, and the wraps. Lauren, still using what they made.
          </p>
        </div>
      </article>

      <article className="mag-page kh kh-bleed-leaf" data-density="hard">
        <div className="kh-spreadpic is-right">
          <img src={`${IMG}/chair.jpg`} alt="" />
        </div>
        <div className="kh-scrim" />
        <p className="kh-vert">Contents</p>
        <div className="kh-well" style={{ paddingRight: 140 }}>
          <p className="kh-kicker">In this issue</p>
          <ol className="kh-toc-list">
            <li>
              <div>
                <h4>The Subject</h4>
                <p>The gap she kept seeing, and the studio she built to close it.</p>
              </div>
              <em>02</em>
            </li>
            <li>
              <div>
                <h4>The Method</h4>
                <p>Questions first. Then strategy, the mark, the site, the walkthrough.</p>
              </div>
              <em>05</em>
            </li>
            <li>
              <div>
                <h4>The Studio</h4>
                <p>Brand Studio Creative, as she runs it, and the files a client leaves with.</p>
              </div>
              <em>06</em>
            </li>
            <li>
              <div>
                <h4>Branding with Heart</h4>
                <p>Flower House Dallas, and the owners who start sharing again.</p>
              </div>
              <em>07</em>
            </li>
            <li>
              <div>
                <h4>The File</h4>
                <p>What she believes still makes a brand hold, and where the studio is going.</p>
              </div>
              <em>09</em>
            </li>
            <li>
              <div>
                <h4>Fortiora · Relay</h4>
                <p>Communications agents, from the publisher&apos;s desk.</p>
              </div>
              <em>11</em>
            </li>
          </ol>
        </div>
      </article>

      <article className="mag-page kh kh-paper-leaf">
        <div className="kh-well">
          <p className="kh-kicker">The Method</p>
          <h2 className="kh-h">
            Every decision should have a purpose. <em>Beauty is not enough.</em>
          </h2>
          <div className="kh-cols">
            <p className="kh-drop">
              Once the questions are on the table she looks for the lines between them. The
              brand has to help the right people understand the business, remember it, and
              take the next step. Looking good is not the job. Looking good and being usable
              is the job. She treats creativity, the client&apos;s needs, and strategy as
              one process, not three departments arguing.
            </p>
            <p className="kh-sub">What the client leaves with</p>
            <p>
              Guidelines. Templates. Assets in order. A final walkthrough so the owner
              knows how to use what she paid for. A brand that only looks right on launch
              day has failed her test. It should make showing up and marketing the business
              feel lighter long after the files are delivered.
            </p>
            <p className="kh-sub">What she listens for</p>
            <p>
              She listens to what the client says and to what sits under it. What she is
              trying to achieve. What the audience needs to understand. What is making the
              marketing feel disconnected. Then she turns those notes into decisions that
              are both useful and hers. The goal is never to press a personal style onto
              someone else&apos;s shop. It is to make a brand that finally feels like her.
            </p>
            <p className="kh-sub">What still cuts through</p>
            <p>
              Authenticity and clarity, she says, are what still make a brand hold. The
              feed is full of polish and borrowed looks. The brands people remember feel
              distinct, human, and honest. They do not try to please everyone. They say
              what the business believes, who it serves, and why the approach matters.{" "}
              <span className="kh-run">
                There is a difference between looking authentic and knowing who you are.
              </span>{" "}
              The strongest rooms stop asking what everyone else is doing and start asking
              what makes them different, then say that clearly.
            </p>
            <p className="kh-sub">After the files leave</p>
            <p>
              Websites, she says, will have to do more than post information. They will
              have to move a person from first look to trust to the next step. Tools will
              get faster. That does not make the brand. The heart and the story still have
              to be protected, or the work is only a file.
            </p>
          </div>
          <ol className="kh-steps">
            <li>
              <em>01</em>
              <b>Ask</b>
              <span>Purpose, audience, the feeling she wants in the room.</span>
            </li>
            <li>
              <em>02</em>
              <b>Build</b>
              <span>Strategy, identity, messaging, a site that can be used.</span>
            </li>
            <li>
              <em>03</em>
              <b>Hand over</b>
              <span>Guidelines, templates, the walkthrough after launch day.</span>
            </li>
          </ol>
          <p className="kh-pull">Start with the heart of the business, not the logo.</p>
          <div className="kh-folio">
            <span>{ISSUE}</span>
            <span>The Method</span>
            <span>05</span>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-bleed-leaf" data-density="hard">
        <img className="kh-plate-img" src={`${IMG}/desk.jpg`} alt="Katie Holmes at Brand Studio Creative" style={{ objectPosition: "50% 30%" }} />
        <div className="kh-plate-grade" />
        <ul className="kh-plate-chip">
          <li>
            <b>Heart first</b>
            <span>purpose, audience, the feeling</span>
          </li>
          <li>
            <b>Then the system</b>
            <span>identity, messaging, the site</span>
          </li>
          <li>
            <b>Then the walkthrough</b>
            <span>guidelines, templates, the files</span>
          </li>
        </ul>
        <div className="kh-well">
          <p className="kh-kicker">The Studio</p>
          <h2 className="kh-h" style={{ maxWidth: 520 }}>
            Brand Studio Creative, <em>as she sits in it.</em>
          </h2>
          <p style={{ margin: "12px 0 0", maxWidth: 460, fontSize: 15, lineHeight: 1.5, color: "rgba(244,240,232,0.86)" }}>
            The mark on the screen is hers. The sitting is Kyrsten Ashlay&apos;s. The work,
            she says, is to take what has been living in a client&apos;s head and make it
            usable.
          </p>
          <div className="kh-folio">
            <span>{ISSUE}</span>
            <span>The Studio</span>
            <span>06</span>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-ink-leaf" data-density="hard">
        <div className="kh-well">
          <p className="kh-kicker">The Signature Story</p>
          <h2 className="kh-open-name">
            <b>Katie</b>
            <em>Holmes</em>
          </h2>
          <div className="kh-open-rule" />
          <p className="kh-open-dek">
            The founder who turned a gap she kept seeing into a studio, and a method she
            will not dress up as anything colder than Branding with Heart.
          </p>
          <p className="kh-open-role">Founder &amp; CEO · Brand Studio Creative</p>
          <div className="kh-open-chapters">
            <p>In three chapters</p>
            <ol>
              <li>
                <em>01</em>
                <h5>The gap</h5>
                <p className="kh-chap-line">
                  Owners who had already built the business and still could not get the
                  brand to carry the work. The clients were cared for. The site and the mark
                  did not say so. She built a studio so those owners would be heard.
                </p>
              </li>
              <li>
                <em>02</em>
                <h5>The method</h5>
                <p className="kh-chap-line">
                  Questions first: purpose, audience, the feeling she wants in the room.
                  Then the lines between them become strategy, a visual identity, messaging,
                  and a site that can be used. Guidelines and templates leave with the files.
                </p>
              </li>
              <li>
                <em>03</em>
                <h5>The proof</h5>
                <p className="kh-chap-line">
                  Flower House Dallas grew past the original job: the site, the marketing,
                  the merchandise, the wraps. Lauren is still using what they made. The
                  brand, Katie says, helped her attract the clients she wanted.
                </p>
              </li>
            </ol>
            <p className="kh-open-close">
              A successful brand should not only look good on launch day. It should make
              showing up feel lighter long after the files are delivered. That is the
              walkthrough she still insists on giving.
            </p>
          </div>
          <div className="kh-folio">
            <span>{ISSUE}</span>
            <span>The Signature Story · 07</span>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-bleed-leaf" data-density="hard">
        <img className="kh-open-img" src={`${IMG}/blazer.jpg`} alt="Katie Holmes" style={{ objectPosition: "50% 12%" }} />
        <div className="kh-feat-grade" />
        <div className="kh-quote-card">
          <p>Watching someone go from embarrassed by her brand to proud enough to share it never gets old.</p>
        </div>
        <p className="kh-port-cap">
          <span>Katie Holmes</span>
          <span>Branding with Heart · 08</span>
        </p>
      </article>

      <article className="mag-page kh kh-paper-leaf">
        <div className="kh-well">
          <p className="kh-kicker">The File</p>
          <h2 className="kh-h">
            What she will still say <em>in the room.</em>
          </h2>
          <ul className="kh-file-list">
            <li>
              <b>The studio</b>
              <span>
                Brand Studio Creative. Katie Holmes, founder and CEO. brandstudiocreative.com,
                and the Branding with Heart page she asked us to print.
              </span>
            </li>
            <li>
              <b>The start</b>
              <span>
                Owners who had built the business and still could not get the brand to carry
                the quality of the work. She built a studio so they would be heard.
              </span>
            </li>
            <li>
              <b>The method</b>
              <span>
                Purpose, audience, goals, personality, the feeling. Then strategy, identity,
                messaging, the site. Guidelines, templates, a walkthrough.
              </span>
            </li>
            <li>
              <b>Dallas</b>
              <span>
                Flower House Dallas grew past the original project: website, marketing,
                merchandise, car wraps. The brand, she says, helped Lauren attract the
                clients she wanted.
              </span>
            </li>
            <li>
              <b>The advice</b>
              <span>
                Do not build around a trend. Build around what is true, and around where the
                business is going. Give yourself permission to evolve. A brand is not a
                thing you put on a shelf.
              </span>
            </li>
            <li>
              <b>Ahead</b>
              <span>
                A long-term partner for owners ready for the next level. Maintain, evolve,
                and keep using the brand as the shop grows. Strategic work, she says, does
                not have to feel cold.
              </span>
            </li>
            <li>
              <b>On tools</b>
              <span>
                She is interested in what new tools can do. She does not think the answer is
                to make brands more technological. The human heart and the story still have
                to be protected.
              </span>
            </li>
          </ul>
          <div className="kh-folio">
            <span>{ISSUE}</span>
            <span>The File</span>
            <span>09</span>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-bleed-leaf" data-density="hard">
        <img className="kh-open-img" src={`${IMG}/phone.jpg`} alt="" style={{ objectPosition: "50% 20%" }} />
        <div className="kh-feat-grade" />
        <div className="kh-feat-card">
          <p className="kh-feat-word">Be Featured</p>
          <h3>Get featured in the upcoming edition of PrimeCrest.</h3>
          <p>Register now. Because your story deserves the record.</p>
          <ul className="kh-feat-perks">
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
          <div className="kh-feat-row">
            <span>Scan the QR code</span>
            <img src="/brand/qr-primecrest.png" alt="Scan to register" />
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-ink-leaf" data-density="hard">
        <div className="kh-well">
          <p className="kh-ad-kicker">Fortiora Group · Advertisement</p>
          <div className="kh-ad-state">
            <h2>
              The thread,
              <br />
              <em>held in one voice.</em>
            </h2>
            <p className="kh-ad-copy">
              Fortiora Relay is an enterprise communications agent. It drafts the client
              update in the voice on file, files the reply against the thread, and keeps
              the internal note attached. Email, the follow-up, the briefing. One desk.
              A person still approves the send. The machine does not invent a sentence
              the firm did not already mean.
            </p>
            <p className="kh-ad-sig">Fortiora · Relay, from the publisher of PrimeCrest</p>
            <ul className="kh-ad-tenets">
              <li>
                <b>Your voice</b>
                <span>
                  Replies written the way the firm already writes, from the thread on file.
                  Not a generic tone. The one the client already recognizes.
                </span>
              </li>
              <li>
                <b>The thread intact</b>
                <span>
                  Every send cited back to the conversation that produced it. The internal
                  note stays attached. Nobody starts the next reply from a blank page.
                </span>
              </li>
              <li>
                <b>The briefing</b>
                <span>
                  What moved overnight, on one page, before the first meeting. Who wrote,
                  what is waiting, which thread still needs a person.
                </span>
              </li>
              <li>
                <b>A person signs</b>
                <span>
                  Approve, edit, or send. Each correction teaches the next draft. The
                  machine does not close a loop a person has not seen.
                </span>
              </li>
            </ul>
          </div>
          <div className="kh-ad-end">
            <p className="kh-ad-close">
              Built for firms that cannot lose a conversation. The jobs are on the next page.
            </p>
            <div className="kh-ad-foot-line">
              <span>PrimeCrest · October</span>
              <span>Advertisement · 11</span>
            </div>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-ink-leaf" data-density="hard">
        <div className="kh-well">
          <p className="kh-ad-kicker">What the agent actually does</p>
          <h2 className="kh-ad-head">Four jobs, done before the meeting.</h2>
          <ul className="kh-ad-list">
            <li>
              <b>Inbox triage</b>
              <p>
                Incoming mail read, ranked, and grouped by account. The angry thread is
                not left under the newsletter. Clients, vendors, and the internal loop sit
                in separate stacks, so the first thing on the desk is the thing that can
                wait the least.
              </p>
            </li>
            <li>
              <b>Drafted replies</b>
              <p>
                Answers in the house voice, with the last three exchanges attached. A
                person approves, edits, or sends. Each edit teaches the desk. The machine
                does not invent a promise the firm did not make.
              </p>
            </li>
            <li>
              <b>The follow-up</b>
              <p>
                Promised dates watched. The reminder goes out before the client has to
                ask, with the file already open. A date that was said in a meeting stays
                attached to the person who said it, not to a second calendar no one opens.
              </p>
            </li>
            <li>
              <b>The briefing</b>
              <p>
                Overnight movement on one page: who wrote, what is waiting, which thread
                needs a person. Built for firms that cannot lose a conversation, and will
                not pretend a new inbox is a new relationship.
              </p>
            </li>
          </ul>
          <div className="kh-ad-end">
            <p className="kh-ad-close">
              Email, the follow-up, the briefing. One desk. A person still signs it.
            </p>
            <div className="kh-ad-foot">
              <div>
                <div className="kh-lockup">
                  <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                  <div>
                    <b>Fortiora</b>
                    <span>Relay</span>
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
            <div className="kh-ad-foot-line">
              <span>PrimeCrest · October</span>
              <span>Advertisement · 12</span>
            </div>
          </div>
        </div>
      </article>

      <article className="mag-page kh kh-backcover" data-density="hard">
        <img
          className="kh-back-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(0.95) contrast(1.02) brightness(1.12)" }}
        />
        <div className="kh-back-grade" />
        <div className="kh-well kh-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="kh-back-mark">
              <svg className="kh-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#4aa0ae" />
              </svg>
              <b className="kh-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="kh-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p className="kh-back-line">
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
            <p className="kh-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <b>theprimecrest.com</b>
            </p>
            <div className="kh-back-hair" />
            <p className="kh-back-label">The October Issue · 2026</p>
          </div>
        </div>
      </article>
    </>
  );
}
