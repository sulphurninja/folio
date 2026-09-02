/* eslint-disable @next/next/no-img-element */
const IMG = "/issues/espey";

const CREAM = "#f4efe6";
const GOLD = "#e8c56b";
const CREAM_DIM = "rgba(244, 239, 230, 0.66)";

export const ESPEY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Journey" },
  { page: 6, label: "The Back Bar" },
  { page: 8, label: "The Record" },
  { page: 9, label: "The Chivas Play" },
  { page: 10, label: "The Numbers" },
  { page: 11, label: "Second Acts" },
  { page: 12, label: "Giving Back" },
  { page: 13, label: "Outlook" },
  { page: 15, label: "PrimeCrest" },
];

export function EspeyPages() {
  return (
    <>
      {/* 01 Cover — single, hard */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/coverart.jpg`}
          alt="James Espey OBE"
          fetchPriority="high"
        />
        <div className="mag-overlay">
          {/* Masthead — the magazine, front and centre */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/brand/logo-primecrest.png"
              alt="PrimeCrest"
              style={{
                width: "76%",
                maxWidth: 560,
                height: "auto",
                filter: "drop-shadow(0 6px 22px rgba(0,0,0,0.55))",
              }}
            />
            <div
              style={{
                margin: "18px auto 0",
                paddingTop: 12,
                borderTop: "1px solid rgba(244,239,230,0.45)",
                maxWidth: 560,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: CREAM,
              }}
            >
              Vol. II · The Legacy Issue · theprimecrest.com
            </div>
          </div>

          {/* Cover line — kept in the clear left column, off the portrait */}
          <div style={{ marginTop: "auto", maxWidth: 330 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Making a difference
              <br />
              in 2026
            </p>
            <h1
              className="mag-display"
              style={{
                marginTop: 16,
                color: "#fff",
                fontSize: 52,
                lineHeight: 1.02,
                textShadow: "0 8px 32px rgba(0,0,0,0.55)",
              }}
            >
              Top 10
              <br />
              Unstoppable
              <br />
              Business
              <br />
              Leaders<span style={{ color: "#d4545c" }}>.</span>
            </h1>
            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid rgba(244,239,230,0.4)",
              }}
            >
              <p className="mag-display" style={{ fontSize: 34, color: CREAM }}>
                James Espey
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: CREAM,
                }}
              >
                Investor &amp; Chairman
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 16,
                  fontStyle: "italic",
                  color: "rgba(244,239,230,0.88)",
                }}
              >
                Wiltshire Whisky Distillery · England
              </p>
            </div>
          </div>
        </div>
        <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="Scan to visit theprimecrest.com" />
      </article>

      {/* 02 Credits — left, dark */}
      <article className="mag-page mag-pad mag-dark">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker" style={{ color: GOLD }}>
          The imprint
        </p>
        <h2
          className="mag-h"
          style={{ color: CREAM, fontStyle: "italic", fontWeight: 500, fontSize: 58, marginBottom: 34 }}
        >
          Credits.
        </h2>
        <ul
          className="mag-credits-list"
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}
        >
          <li>
            <b>Magazine</b>
            <span>PrimeCrest · theprimecrest.com</span>
          </li>
          <li>
            <b>Published by</b>
            <span>Fortiora Group LLC</span>
          </li>
          <li>
            <b>Editorial &amp; Design</b>
            <span>Fortiora Studio</span>
          </li>
          <li>
            <b>Digital Production</b>
            <span>Fortiora Studio</span>
          </li>
          <li>
            <b>Featured Subject</b>
            <span>James Espey OBE</span>
          </li>
          <li>
            <b>Words</b>
            <span>From the papers and interviews of James Espey</span>
          </li>
          <li>
            <b>Issue</b>
            <span>Vol. II · The Legacy Issue</span>
          </li>
        </ul>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <img
            src="/brand/logo-primecrest.png"
            alt="PrimeCrest"
            style={{ width: 300, height: "auto" }}
          />
          <p className="mag-imprint">
            <strong>PrimeCrest</strong> · a product of Fortiora Group LLC
            <br />
            30 N Gould St Ste R, Sheridan, WY 82801, United States
            <br />
            Hello@thefortiora.com · <strong>theprimecrest.com</strong>
          </p>
          <img
            src="/brand/barcode-primecrest.png"
            alt="Scan to visit theprimecrest.com"
            style={{ width: 178, height: "auto" }}
          />
          <p className="mag-imprint" style={{ fontSize: 11, color: "rgba(244,239,230,0.45)", maxWidth: 520 }}>
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
            reproduced or transmitted in any form without prior written permission from the
            publisher.
          </p>
        </div>
        </div>
      </article>

      {/* 03 The subject — right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Subject</p>
        <h2 className="mag-h mag-h-sm">Eighty-two next May. Still laying down stock.</h2>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <p className="mag-folio mag-dropcap">
              James Espey was born in the Livingstone hospital in 1943, twenty-one years after his
              mother was born in the same building. Her grandfather kept the books for the company
              that built the Victoria Falls Bridge; the family lived in huts on the bank of the
              Zambezi while the steel went up, and later in the first house in Livingstone with a
              tin roof.
            </p>
            <p className="mag-folio">
              School was Cape Town — four days and four nights by train, twice a year, for ten and
              a half years. He was one of the poorer boys at SACS; sport and reasonable marks were
              the way through. The BCom and the MBA were bought with borrowed money, repaid shortly
              after his thirtieth birthday. Everything he built afterwards was built the same way:
              long odds, longer view.
            </p>
          </div>
          <div style={{ width: 188, flexShrink: 0, textAlign: "center", paddingTop: 8 }}>
            <img className="mag-avatar" src={`${IMG}/expo.jpg`} alt="James Espey OBE" />
            <p className="mag-by">James Espey OBE</p>
            <p className="mag-role">Brand builder · Intrapreneur</p>
          </div>
        </div>
        <blockquote className="mag-pull" style={{ margin: "auto 12px" }}>
          Long odds, longer view.
        </blockquote>
        <p
          className="mag-folio"
          style={{ marginTop: "auto", fontStyle: "italic", textAlign: "right", color: "#8a5a12", fontSize: 16 }}
        >
          He titled the memoir &ldquo;Ego Trip&rdquo; — the joke of a man who no longer needs one.
        </p>
        </div>
      </article>

      {/* 04–05 Contents spread over the hands */}
      <article className="mag-page mag-bleed">
        <img className="mag-spread-photo is-left" src={`${IMG}/hands.jpg`} alt="" />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <span className="mag-banner">The signature story</span>
          <p className="mag-num">04</p>
          <h2 className="mag-h mag-h-light" style={{ maxWidth: 540, fontSize: 36 }}>
            Sixty years in the drinks trade, told by the man who poured it.
          </h2>
          <div style={{ marginTop: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 8,
              }}
            >
              10 · The Chivas Play
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 16,
                color: "rgba(244,239,230,0.88)",
                maxWidth: 360,
              }}
            >
              How a hundred-million-dollar demand in 1992 became five million cases a year —
              twenty years after he left the room.
            </p>
          </div>
        </div>
      </article>

      <article className="mag-page mag-bleed">
        <img className="mag-spread-photo is-right" src={`${IMG}/hands.jpg`} alt="" />
        <div className="mag-scrim" />
        <p className="mag-vert">
          C<span />NTENTS
        </p>
        <div className="mag-overlay" style={{ paddingRight: 120 }}>
          <p className="mag-kicker mag-kicker-light">In this issue</p>
          <ol className="mag-toc">
            <li>
              <span>The Journey</span>
              <em>06</em>
            </li>
            <li>
              <span>The Back Bar</span>
              <em>07</em>
            </li>
            <li>
              <span>The Record</span>
              <em>09</em>
            </li>
            <li>
              <span>The Chivas Play</span>
              <em>10</em>
            </li>
            <li>
              <span>The Numbers</span>
              <em>11</em>
            </li>
            <li>
              <span>Second Acts</span>
              <em>12</em>
            </li>
            <li>
              <span>Giving Back</span>
              <em>13</em>
            </li>
            <li>
              <span>Outlook</span>
              <em>14</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 The Journey */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Journey</p>
        <h2 className="mag-h">&ldquo;A savage from the colonies.&rdquo;</h2>
        <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 14px" }}>
            In 1970 he joined Gilbeys South Africa as sales director. In January 1977 Anthony
            Tennant visited, and asked him to London: global marketing director of International
            Distillers &amp; Vintners, the first non-Englishman on the board, aged thirty-four.
            Not everyone approved. To some of the club he was a savage from the colonies, and they
            said so.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            The savage got to work. His 1981 doctorate — a worldwide strategy for IDV — became the
            company blueprint: trading profit of £26.4 million in 1977–78, £111.2 million five
            years later. He remade Baileys into the world&apos;s No. 1 liqueur. And in 1979 he took
            a South African coconut drink called Coco Rico, found a Malibu trademark in the
            cupboard, bottled it in Harlow, Essex — and shipped it as Caribbean-style rum. The
            world still believes it was always Caribbean.
          </p>
          <p style={{ margin: 0 }}>
            Seventeen years he gave IDV. He left with no pension, treated on the way out as a
            foreigner after all. By his own arithmetic the brands have since made more than £5
            billion for Diageo. He keeps the arithmetic. They keep the brands.
          </p>
        </div>
        <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 32 }}>
          Think global. Act local.
        </blockquote>
        <p className="mag-foot">The Legacy Issue · 06</p>
        </div>
      </article>

      {/* 07 The Back Bar — dark ledger */}
      <article className="mag-page mag-pad mag-dark">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker" style={{ color: GOLD }}>
          The Back Bar
        </p>
        <h2 className="mag-h mag-h-light" style={{ fontSize: 34 }}>
          What he put on the world&apos;s shelf.
        </h2>
        <ul
          style={{
            listStyle: "none",
            margin: "10px 0 0",
            padding: 0,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {[
            ["1977", "Baileys Irish Cream", "Remade into the world's No. 1 liqueur. Some six million cases a year."],
            ["1979", "Malibu", "Born in Stellenbosch as Coco Rico, billed as Caribbean. The world's No. 2 liqueur."],
            ["1979", "Le Piat D'or", "Branded French wine for the masses. Two million cases worldwide."],
            ["1987", "The Classic Malts", "Six distilleries, one long argument for single malt."],
            ["1987", "Johnnie Walker Blue Label", "The standard other luxury blends still answer to."],
            ["1997", "Chivas Regal 18", "Today the No. 1 eighteen-year-old whisky in the world."],
            ["2008", "The Last Drop", "\u201CThe world's most exclusive spirits collection.\u201D Now the pinnacle of Sazerac's portfolio."],
          ].map(([year, name, note]) => (
            <li
              key={name}
              style={{ padding: "15px 0", borderBottom: "1px solid rgba(244,239,230,0.16)" }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: GOLD,
                }}
              >
                {year}
              </p>
              <p
                style={{
                  margin: "4px 0 2px",
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: CREAM,
                }}
              >
                {name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: CREAM_DIM,
                }}
              >
                {note}
              </p>
            </li>
          ))}
        </ul>
        <p className="mag-foot" style={{ color: "rgba(244,239,230,0.4)" }}>
          The Legacy Issue · 07
        </p>
        </div>
      </article>

      {/* 08 Photo — wood portrait */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/wood.jpg`} alt="James Espey" />
        <div className="mag-caption-bar">The brand builder at ease · photographed for The Legacy Issue</div>
      </article>

      {/* 09 The Record */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Record</p>
        <h2 className="mag-h mag-h-sm">The honours, and what they mark.</h2>
        <ul
          className="mag-list"
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}
        >
          <li>
            <strong>1988 · Scotland</strong>
            Founder of The Keepers of the Quaich, Scotland&apos;s exclusive whisky society; its
            chairman, 1997–2000. Guests of honour have included Ronald Reagan, F.W. de Klerk,
            Princess Anne, and King Charles III. &ldquo;In many ways the brand I am most proud
            of.&rdquo;
          </li>
          <li>
            <strong>1994 · Buckingham Palace</strong>
            The Queen&apos;s Award for Exports, received from Her Majesty as Chivas Regal passed
            two million cases a year.
          </li>
          <li>
            <strong>2001 &amp; 2013</strong>
            The International Wine &amp; Spirit Lifetime Achievement Award for Scotch whisky; then
            an OBE for services to the industry in the Queen&apos;s Birthday Honours.
          </li>
          <li>
            <strong>2015 &amp; 2023</strong>
            Honorary Member of The Marketing Society of Great Britain; named one of the Top 100
            business and society influencers.
          </li>
        </ul>
        <p className="mag-note">
          Two terms on the Council of The Scotch Whisky Association — 1992–1998 and 2003–2008.
        </p>
        </div>
      </article>

      {/* 10 The Chivas Play */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Chivas Play</p>
        <h2 className="mag-h mag-h-sm">A hundred million dollars, and a kilt on Chinese television.</h2>
        <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 14px" }}>
            Joining Seagram in 1992 to run Chivas Bros, he set one condition: $100 million. Ninety
            for whisky to sleep in barrels for the next twenty years, ten for the distilleries and
            Linn House, a hospitality home for the trade. Ed McDonnell, Seagram&apos;s president,
            wrote later that he nearly fell over. He signed anyway.
          </p>
          <p style={{ margin: 0 }}>
            Then Espey put on the kilt of the Keepers, went on Chinese television holding a bottle
            of Chivas Regal, and told a country just coming into money to drink better. Chivas
            became the top whisky in China. His plan said five million cases within twenty-five
            years; Chivas Bros passed the mark — some twenty years after he left the room, worth
            billions to a company that, he suspects, knows nothing about the decision that did it.
          </p>
        </div>
        <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 32 }}>
          Drink better.
        </blockquote>
        <p className="mag-foot">The Legacy Issue · 10</p>
        </div>
      </article>

      {/* 11 The Numbers — dark stats */}
      <article className="mag-page mag-pad mag-dark">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker" style={{ color: GOLD }}>
          The Numbers
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            flex: 1,
            marginTop: 8,
          }}
        >
          {[
            ["£10bn+", "brand value delivered to the UK economy"],
            ["10,000", "jobs he counts against his career"],
            ["5m", "cases of Chivas Regal a year, as planned in 1992"],
            ["$5.8bn", "Mimecast — launched at his dining-room table"],
            ["82", "next May. Still at work."],
          ].map(([num, label]) => (
            <div key={label} style={{ borderBottom: "1px solid rgba(244,239,230,0.14)", paddingBottom: 22 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: 74,
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: GOLD,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: CREAM_DIM,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: "auto",
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: 15,
            fontStyle: "italic",
            color: "rgba(244,239,230,0.5)",
          }}
        >
          His arithmetic, cheerfully offered. The auditors are welcome to argue.
        </p>
        </div>
      </article>

      {/* 12 Second Acts */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">Second Acts</p>
        <h2 className="mag-h mag-h-sm">Retired. Three exclamation marks.</h2>
        <div className="mag-cols mag-folio mag-dropcap" style={{ fontSize: 18, lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 14px" }}>
            His CV gives 2008 a single line — &ldquo;Retired ! ! !&rdquo; — and nobody believed
            the punctuation. In 2003 he had already backed two young men, one a 28-year-old chief
            executive, who launched an email-security company called Mimecast from his home. It
            floated on the NASDAQ at $10 a share and sold in 2022 for $5.8 billion.
          </p>
          <p style={{ margin: 0 }}>
            The year he &ldquo;retired&rdquo;, he founded The Last Drop Distillers: the
            world&apos;s most exclusive spirits collection, mostly Scotch around fifty years old,
            an average bottle at £3,000. He financed it from savings — so he flew economy and
            stayed in the cheapest hotels while hosting dinners around the world in the kilt,
            signing bottles after dessert. Sazerac, the largest private drinks company in America,
            bought it in 2017 and keeps it at the very top of the portfolio.
          </p>
        </div>
        <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 30 }}>
          Never be arrogant, and never forget from whence you come.
        </blockquote>
        <p className="mag-foot">The Legacy Issue · 12</p>
        </div>
      </article>

      {/* 13 Giving Back */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">Giving Back</p>
        <h2 className="mag-h mag-h-sm">&ldquo;Poor, likes sport, reasonably bright.&rdquo;</h2>
        <p className="mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
          That is the written criterion for the Espey scholarship at his old school in Cape Town —
          his own file, in other words. Thulile Dodwana, from a remote part of South Africa, was
          the first scholar; a second has just started. More than £60,000 committed, the trust
          paying through to university.
        </p>
        <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
          In Livingstone, where he was born, he pays the school fees of two girls, and recently
          bought one a bicycle so she rides to school instead of walking an hour each way. Further
          up-country, wells for drinking water. And quietly, he covers medical bills for two
          friends of forty years who fell on hard times — one of them was good to him when he was
          a young man in Cape Town with little money.
        </p>
        <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
          Two books for the next generation — <em>Making Your Marque</em> and <em>365 Quotes to
          Accelerate Your Career</em> — and a standing habit of mentoring. One mentee has been
          calling since the late 1990s. He is now in his sixties.
        </p>
        <blockquote className="mag-quote" style={{ margin: "auto 0" }}>
          We all have a responsibility to help future generations.
        </blockquote>
        <p className="mag-foot">The Legacy Issue · 13</p>
        </div>
      </article>

      {/* 14 Outlook */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
        <div style={{ padding: "0 0 28px" }}>
          <p className="mag-kicker">Outlook</p>
          <h2 className="mag-h mag-h-sm">Whisky near Stonehenge, roads without fire, a plan to ninety.</h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
            At an age when most men curate their memoirs, he chairs The Wiltshire Distillery —
            English whisky sleeping in barrels in a very old building on the Fonthill Estate,
            twenty miles from Stonehenge, distilling since 2024. His daughter Caroline sits on the
            board; his daughter Jessica, an associate professor who spent a decade at the United
            Nations, keeps its environmental conscience.
          </p>
          <p className="mag-folio" style={{ fontSize: 17.5, lineHeight: 1.85 }}>
            His largest investment is Uberbinder, a cold-applied polymer to replace heated bitumen
            in road-building — a tenth of global greenhouse gas traces to roads, runs the argument.
            Mimecast&apos;s founder owns half; Espey holds fifteen percent; the head office has
            moved to Oxford. &ldquo;Tesla should never have got off the ground,&rdquo; he says,
            and means it as encouragement.
          </p>
        </div>
        <blockquote className="mag-pull" style={{ margin: "auto 12px", fontSize: 30 }}>
          A plan to ninety, and whisky laid down for longer.
        </blockquote>
        <div className="mag-darkband" style={{ margin: "0 -58px" }}>
          If you never leave the shore, you will never reach the other side.
        </div>
        </div>
      </article>

      {/* 15 The Method — statement over the gaze */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/gaze.jpg`}
          alt=""
          style={{ objectPosition: "center 12%" }}
        />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light">The Method</p>
          <h2 className="mag-h mag-h-light" style={{ marginTop: "auto", fontSize: 42, maxWidth: 520 }}>
            No chief executive should sit in his office.
          </h2>
          <p
            className="mag-folio"
            style={{ color: "rgba(244,239,230,0.88)", maxWidth: 500, textAlign: "left" }}
          >
            The real boss in business is the consumer, who votes with his or her feet. Fifty-five
            trips to North America in four years, because you meet the trade where it stands. And
            when the work is done, you have a drink together — the work matters, but it was never
            only the work.
          </p>
          <p
            style={{
              marginTop: 10,
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: 16,
              fontStyle: "italic",
              color: GOLD,
            }}
          >
            &ldquo;TEAM — together everyone achieves more.&rdquo;
          </p>
        </div>
      </article>

      {/* 16 Back cover — PrimeCrest house page over the issue collage, single, hard */}
      <article className="mag-page mag-bleed mag-dark" data-density="hard">
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
                width: "84%",
                maxWidth: 600,
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
                color: GOLD,
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
              src="/brand/barcode-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 210, height: "auto", boxShadow: "0 10px 26px rgba(0,0,0,0.45)" }}
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
                color: GOLD,
              }}
            >
              The Legacy Issue · Vol. II
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
