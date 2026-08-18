/* eslint-disable @next/next/no-img-element */
const IMG = "/issues/saj";

export const SAJ_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Editorial Note" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Journey" },
  { page: 7, label: "The Record" },
  { page: 9, label: "Mission" },
  { page: 11, label: "A Client, a Villa" },
  { page: 13, label: "Outlook" },
];

export function SajPages() {
  return (
    <>
      {/* 01 Cover — single, hard */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/cover.jpg`}
          alt="Shermel A. Jeffers Chandwani"
          fetchPriority="high"
        />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p
            className="mag-kicker mag-kicker-light"
            style={{ letterSpacing: "0.22em", marginBottom: 0 }}
          >
            Vol. I · The Caribbean Issue
          </p>
          <div style={{ marginTop: "auto" }}>
            <h1 className="mag-display" style={{ color: "#fff", fontSize: 78, textShadow: "0 8px 32px rgba(0,0,0,0.35)" }}>
              Master
              <br />
              of the Deal.
            </h1>
            <p
              style={{
                marginTop: 22,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 15,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#f4efe6",
              }}
            >
              Shermel A. Jeffers Chandwani
            </p>
            <p
              style={{
                marginTop: 8,
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 18,
                fontStyle: "italic",
                color: "rgba(244,239,230,0.85)",
              }}
            >
              Managing Director, SAJ Interior Design &amp; Real Estate Services
            </p>
          </div>
        </div>
      </article>

      {/* 02 Editorial left */}
      <article className="mag-page mag-pad" style={{ background: "linear-gradient(180deg, #f7f2ea 0%, #efe4d6 100%)" }}>
        <p className="mag-kicker">From the desk</p>
        <p
          className="mag-giant"
          style={{ position: "absolute", left: 24, bottom: 40, margin: 0, zIndex: 0 }}
        >
          S
        </p>
        <h2
          className="mag-h"
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: 280,
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 44,
          }}
        >
          Editorial Note.
        </h2>
        <p className="mag-folio" style={{ position: "relative", zIndex: 1, maxWidth: 420 }}>
          A banker&apos;s discipline. A broker&apos;s nerve. And a luxury practice built on an island
          that still rewards people who know the difference.
        </p>
        <p className="mag-foot" style={{ position: "relative", zIndex: 1 }}>
          The Caribbean Issue · 02
        </p>
      </article>

      {/* 03 Editorial right */}
      <article className="mag-page mag-pad">
        <p className="mag-kicker">Profile</p>
        <h2 className="mag-h mag-h-sm">Influence rooted in purpose, service, and conviction.</h2>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <p className="mag-folio mag-dropcap">
              Thirteen years in banking. Ten in real estate. A portfolio now in excess of US$300
              million — and a practice that still begins with a pre-approval, not a showing. Shermel
              A. Jeffers Chandwani leads SAJ Interior Designs and Real Estate Services from St. Kitts
              &amp; Nevis, where the work is listings, yes, but also counsel: which bank, which
              product, which appointment, before a key turns in a lock.
            </p>
            <p className="mag-folio">
              A friend in the banking years put it plainly. She was great with people, and she could
              sell anything. She should do it. She did.
            </p>
          </div>
          <div style={{ width: 188, flexShrink: 0, textAlign: "center", paddingTop: 8 }}>
            <img className="mag-avatar" src={`${IMG}/studio.jpg`} alt="Shermel A. Jeffers Chandwani" />
            <p className="mag-by">Shermel A. Jeffers Chandwani</p>
            <p className="mag-role">Managing Director</p>
          </div>
        </div>
        <p
          className="mag-folio"
          style={{
            marginTop: "auto",
            fontStyle: "italic",
            textAlign: "right",
            color: "#8a5a12",
            fontSize: 16,
          }}
        >
          Let each page inspire reflection, purpose, and forward thinking.
        </p>
      </article>

      {/* 04–05 Contents spread over lounge */}
      <article className="mag-page mag-bleed">
        <img className="mag-spread-photo is-left" src={`${IMG}/lounge.jpg`} alt="" />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <span className="mag-banner">The signature story</span>
          <p className="mag-num">04</p>
          <h2 className="mag-h mag-h-light" style={{ maxWidth: 520, fontSize: 36 }}>
            The deal-driven world of Shermel A. Jeffers Chandwani.
          </h2>
          <div style={{ marginTop: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#e8c56b",
                marginBottom: 8,
              }}
            >
              08 The Record
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 16,
                color: "rgba(244,239,230,0.88)",
                maxWidth: 360,
              }}
            >
              Awards from New York to Switzerland — and what they actually mark.
            </p>
          </div>
        </div>
      </article>

      <article className="mag-page mag-bleed">
        <img className="mag-spread-photo is-right" src={`${IMG}/lounge.jpg`} alt="" />
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
              <span>The Record</span>
              <em>08</em>
            </li>
            <li>
              <span>Mission</span>
              <em>10</em>
            </li>
            <li>
              <span>A Client, a Villa</span>
              <em>12</em>
            </li>
            <li>
              <span>The Market Ahead</span>
              <em>14</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 Journey */}
      <article className="mag-page mag-pad">
        <p className="mag-kicker">The Journey</p>
        <h2 className="mag-h">From the lending desk to the listing.</h2>
        <div className="mag-cols mag-folio mag-dropcap">
          <p style={{ margin: "0 0 14px" }}>
            As Managing Director of SAJ Interior Designs and Real Estate Services, Shermel leads a
            luxury consultancy on St. Kitts &amp; Nevis. The work is not only listings. It is the
            unglamorous middle — mortgage introductions at the local banks, appointments booked, the
            financial picture made clear before anyone stands in a doorway.
          </p>
          <p style={{ margin: 0 }}>
            The early years were the Royal Bank of Canada: top personal lending officer from 2005 to
            2012, more than twenty-five Royal Performance awards in sales, locally and across the
            Eastern Caribbean. Then a friend said the obvious thing. She should sell. The island has
            been the proving ground ever since.
          </p>
        </div>
        <blockquote className="mag-pull">Always master the art of the deal.</blockquote>
        <p className="mag-foot">The Caribbean Issue · 06</p>
      </article>

      {/* 07 Journey photo */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/studio.jpg`} alt="" />
        <div className="mag-caption-bar">The rooms where the work happens · Basseterre</div>
      </article>

      {/* 08 Awards */}
      <article className="mag-page mag-pad">
        <p className="mag-kicker">The Record</p>
        <h2 className="mag-h mag-h-sm">What the awards actually mark.</h2>
        <ul className="mag-list">
          <li>
            <strong>2005–2012</strong>
            Top Personal Lending Officer, RBC Royal Bank of Canada. More than 25 Royal Performance
            awards in sales, locally and across the Eastern Caribbean.
          </li>
          <li>
            <strong>2024 · New York</strong>
            Best Luxury Boutique Real Estate Consultancy, St. Kitts &amp; Nevis — Luxury Lifestyle
            Awards. Named among the Top 100 Real Estate Brokers of the World.
          </li>
          <li>
            <strong>2025 · Switzerland</strong>
            Leading Luxury Real Estate Consultancy for Personalized Investment Guidance — Global Elite
            Awards. A second Best Luxury Boutique win.
          </li>
        </ul>
        <p className="mag-note">
          Coverage in CEO Magazine, EliteX, MSN, the New York Herald, and USA Today.
        </p>
      </article>

      {/* 09 Portrait */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/portrait.jpg`} alt="" style={{ objectPosition: "center 20%" }} />
        <div className="mag-caption-bar">Managing Director · SAJ Interior Design &amp; Real Estate Services</div>
      </article>

      {/* 10 Island / mission left */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/resort.jpg`} alt="St. Kitts coastline" />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light">The island</p>
          <h2 className="mag-h mag-h-light" style={{ marginTop: "auto", maxWidth: 480 }}>
            The product is the place itself.
          </h2>
        </div>
      </article>

      {/* 11 Mission right */}
      <article className="mag-page mag-pad">
        <p className="mag-kicker">Mission</p>
        <h2 className="mag-h mag-h-sm">If there is a deal to be made, make it.</h2>
        <blockquote className="mag-quote">
          Once you fully understand the game, winning becomes like a piece of cake.
        </blockquote>
        <p className="mag-folio mag-dropcap">
          SAJ&apos;s brief is complete: every detail of a client&apos;s real estate need, including
          the middle that luxury marketing usually skips. Which bank. Which product. Which
          appointment. Creativity here is not a mood board. It is a path through financing that
          actually closes.
        </p>
        <p className="mag-folio">
          The websites hold the listings. The practice holds the rest — empathy during the
          transaction and after it, and accurate information on every property in play. Ten years in,
          SAJ is a primary listing agent on the island, trusted by local banks to help liquidate
          foreclosed balances.
        </p>
        <p className="mag-foot">sajrealestateskn.com · stkittsnevisrealtors.com</p>
      </article>

      {/* 12 Client story */}
      <article className="mag-page mag-pad">
        <p className="mag-kicker">A Client</p>
        <h2 className="mag-h mag-h-sm">The expression on his face was priceless.</h2>
        <div className="mag-cols mag-folio mag-dropcap">
          <p style={{ margin: "0 0 14px" }}>
            Robert Fong reached SAJ in 2022, coming out of the pandemic, for a property he had seen
            online. He offered full price. The owner wanted more. Shermel told him it was unfair, and
            found another villa.
          </p>
          <p style={{ margin: 0 }}>
            One virtual showing. Another full-price offer. The deal closed. Citizenship in St. Kitts
            &amp; Nevis followed. Nearly two years later he walked the property for the first time —
            ocean in front of him, the deed in his name. He could not believe he owned it.
          </p>
        </div>
        <blockquote className="mag-pull">He could not believe he owned it.</blockquote>
        <p className="mag-foot">The Caribbean Issue · 12</p>
      </article>

      {/* 13 Ruins */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/ruins.jpg`} alt="" />
        <img className="mag-inset" src={`${IMG}/skyline.jpg`} alt="" />
        <div className="mag-caption-bar">Place as the long argument · St. Kitts &amp; Nevis</div>
      </article>

      {/* 14 Outlook */}
      <article className="mag-page mag-pad" style={{ paddingBottom: 0 }}>
        <div style={{ padding: "0 0 28px" }}>
          <p className="mag-kicker">Outlook</p>
          <h2 className="mag-h mag-h-sm">The next five years, and a note to the ambitious.</h2>
          <p className="mag-folio mag-dropcap">
            She sees sales and new development rising — lifestyle buyers and Citizenship by
            Investment alike. The horizon she names for SAJ is not the island only, but the Caribbean
            region: a powerhouse broker, built the same way the first decade was built.
          </p>
          <p className="mag-folio">
            To anyone who wants the work: it is not all glamour. Be focused. Know the market. Hear
            what the client actually needs. Stay determined to finish the task at hand.
          </p>
        </div>
        <div className="mag-darkband" style={{ margin: "auto -58px 0" }}>
          Keep pushing forward. Stay motivated. Focus on the end goal.
        </div>
      </article>

      {/* 15 Advice / skyline */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/skyline.jpg`} alt="" />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light">Advice</p>
          <h2 className="mag-h mag-h-light" style={{ marginTop: "auto", maxWidth: 500, fontSize: 38 }}>
            Trust first. Then the showing.
          </h2>
          <p
            className="mag-folio"
            style={{ color: "rgba(244,239,230,0.88)", maxWidth: 440, textAlign: "left" }}
          >
            First communication now includes an education in pre-approval — so purchasing power is
            known before anyone stands in a doorway.
          </p>
        </div>
      </article>

      {/* 16 Back cover */}
      <article className="mag-page mag-bleed" data-density="hard">
        <img
          className="mag-fill"
          src={`${IMG}/cover.jpg`}
          alt=""
          style={{ objectPosition: "center 30%", filter: "brightness(0.55) saturate(1.1)" }}
        />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light">SAJ</p>
          <h2 className="mag-h mag-h-light" style={{ fontSize: 48, maxWidth: 520 }}>
            The winning “it,” made for you.
          </h2>
          <div style={{ marginTop: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(244,239,230,0.88)",
              }}
            >
              sajrealestateskn.com
              <br />
              stkittsnevisrealtors.com
            </p>
            <p
              style={{
                marginTop: 28,
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#e8c56b",
              }}
            >
              The Caribbean Issue
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
