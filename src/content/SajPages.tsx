/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, PhotoCopy } from "./IssueChrome";

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
  { page: 15, label: "The Deal" },
];

export function SajPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/cover.jpg`}
        alt="Shermel A. Jeffers Chandwani"
        vol="Vol. I · The Caribbean Issue · 2026"
        accent="#e8c56b"
        icon="key"
        layout="island"
        name="Shermel A. Jeffers Chandwani"
        role="Managing Director"
        place="SAJ Interior Design & Real Estate Services · St. Kitts & Nevis"
        showKicker={false}
        title={
          <>
            Master
            <br />
            of the Deal<span style={{ color: "#e8c56b" }}>.</span>
          </>
        }
        teasers={[
          ["The desk", "Thirteen years at the Royal Bank of Canada. Top personal lending officer, 2005 to 2012."],
          ["The listing", "Mortgage introductions first. Then the doorway. Always master the art of the deal."],
        ]}
      />

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
            marginTop: 120,
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 44,
          }}
        >
          Editorial Note.
        </h2>
        <p className="mag-folio" style={{ position: "relative", zIndex: 1 }}>
          A banker&apos;s discipline. A broker&apos;s nerve. And a luxury practice built on an island
          that still rewards people who know the difference. This is Vol. I of PrimeCrest: the
          Caribbean Issue, eighteen leaves on Shermel A. Jeffers Chandwani and SAJ Interior Design
          &amp; Real Estate Services, St. Kitts &amp; Nevis. The spine of the issue is simple. A
          lending officer learned how money actually moves. Then she applied that file to listings,
          interiors, and the Citizenship by Investment buyer who has seen the villa only on a
          screen.
        </p>
        <p className="mag-folio" style={{ position: "relative", zIndex: 1 }}>
          Thirteen years at the Royal Bank of Canada. Top personal lending officer from 2005 to
          2012. More than twenty-five Royal Performance awards, locally and across the Eastern
          Caribbean. Then a friend said the obvious thing. She was great with people. She could
          sell anything. She should sell. She did. The portfolio now sits in excess of US$300
          million. The practice still begins with a pre-approval, not a showing. First
          communication now includes an education in what a person can actually borrow — so
          purchasing power is known before anyone stands in a doorway.
        </p>
        <p className="mag-folio" style={{ position: "relative", zIndex: 1 }}>
          What follows is the unglamorous middle — which bank, which product, which appointment —
          and one villa story that still makes the point. Robert Fong, 2022, coming out of the
          pandemic. An offer at full price. An owner who wanted more. Another villa. A virtual
          showing. The deed. Nearly two years later, the ocean in front of him. We printed it as
          she told it. Coverage in CEO Magazine, EliteX, MSN, the New York Herald, and USA Today
          sits in the record pages. The awards from New York and Switzerland sit there too. The
          issue is not those headlines. The issue is the appointment booked before the key turns.
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
              product, which appointment, before a key turns in a lock. Ten years in, SAJ is a
              primary listing agent on the island, trusted by local banks to help liquidate
              foreclosed balances. The websites hold the listings. The practice holds the rest.
            </p>
            <p className="mag-folio">
              A friend in the banking years put it plainly. She was great with people, and she could
              sell anything. She should do it. She did. Always master the art of the deal — her
              line, not a house invention. Once you fully understand the game, winning becomes like
              a piece of cake. She says that too. The Caribbean Issue prints both, then spends the
              rest of the leaves on the middle that luxury marketing usually skips: mortgage
              introductions at the local banks, the financial picture made clear, empathy during
              the transaction and after it, accurate information on every property in play.
            </p>
            <p className="mag-folio">
              The next five years, on her telling, are sales and new development — lifestyle buyers
              and Citizenship by Investment alike. The horizon she names for SAJ is not the island
              only, but the Caribbean region: a powerhouse broker, built the same way the first
              decade was built. To anyone who wants the work: it is not all glamour. Be focused.
              Know the market. Hear what the client actually needs. Stay determined to finish the
              task at hand. Keep pushing forward. Stay motivated. Focus on the end goal.
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
          <ol className="mag-toc mag-toc-fill">
            <li>
              <div>
                <span>The Journey</span>
                <small>From the lending desk to the listing.</small>
              </div>
              <em>06</em>
            </li>
            <li>
              <div>
                <span>The Record</span>
                <small>What the awards actually mark.</small>
              </div>
              <em>08</em>
            </li>
            <li>
              <div>
                <span>Mission</span>
                <small>If there is a deal to be made, make it.</small>
              </div>
              <em>10</em>
            </li>
            <li>
              <div>
                <span>A Client, a Villa</span>
                <small>The expression on his face was priceless.</small>
              </div>
              <em>12</em>
            </li>
            <li>
              <div>
                <span>The Market Ahead</span>
                <small>The next five years, and a note to the ambitious.</small>
              </div>
              <em>14</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 Journey */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Journey</p>
        <h2 className="mag-h">From the lending desk to the listing.</h2>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            As Managing Director of SAJ Interior Designs and Real Estate Services, Shermel leads a
            luxury consultancy on St. Kitts &amp; Nevis. The work is not only listings. It is the
            unglamorous middle — mortgage introductions at the local banks, appointments booked, the
            financial picture made clear before anyone stands in a doorway. Creativity here is not a
            mood board. It is a path through financing that actually closes. The product, she will
            say, is the place itself. The practice is how a buyer reaches it without a surprise at
            the bank.
          </p>
          <p className="mag-sub" style={{ color: "#c9a24b" }}>The desk</p>
          <p>
            The early years were the Royal Bank of Canada: top personal lending officer from 2005 to
            2012, more than twenty-five Royal Performance awards in sales, locally and across the
            Eastern Caribbean. That stretch is the muscle memory of the firm. She still talks like
            a lender. She still asks what a person can carry before she asks which villa they
            liked on a website. Then a friend said the obvious thing. She should sell. The island
            has been the proving ground ever since. Thirteen years in the bank. Ten in real estate.
            A portfolio now in excess of US$300 million.
          </p>
          <p className="mag-sub" style={{ color: "#c9a24b" }}>What the banks trust</p>
          <p>
            Local banks trust SAJ to help liquidate foreclosed balances. That is not a lifestyle
            caption. It is a relationship built on files that close. The 2024 Luxury Lifestyle
            Awards in New York named SAJ Best Luxury Boutique Real Estate Consultancy for St. Kitts
            &amp; Nevis and put her among the Top 100 Real Estate Brokers of the World. In 2025, in
            Switzerland, the Global Elite Awards added Leading Luxury Real Estate Consultancy for
            Personalized Investment Guidance, and a second Best Luxury Boutique win. She will list
            them if asked. She would rather walk a buyer through pre-approval.
          </p>
        </div>
        <div className="mag-qframe" style={{ color: "#c9a24b" }}>
          <p>Always master the art of the deal.</p>
        </div>
        <p className="mag-foot">The Caribbean Issue · 06</p>
        </div>
      </article>

      {/* 07 Journey photo */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/studio.jpg`} alt="" />
        <PhotoCopy kicker="Basseterre" title="The rooms where the work happens.">
          <p>
            SAJ Interior Designs and Real Estate Services works from St. Kitts &amp; Nevis. The
            listings sit on sajrealestateskn.com and stkittsnevisrealtors.com. The practice sits
            in rooms like this: introductions to the local banks, appointments booked, the
            financial picture made clear before a key turns.
          </p>
          <p>
            Thirteen years at the Royal Bank of Canada. Top personal lending officer from 2005 to
            2012. More than twenty-five Royal Performance awards, locally and across the Eastern
            Caribbean. Then a friend said she should sell. The island has been the proving ground
            ever since. Portfolio now in excess of US$300 million.
          </p>
          <p>
            Primary listing agent. Trusted by local banks to help liquidate foreclosed balances.
            Empathy during the transaction and after it. Accurate information on every property
            in play. Trust first. Then the showing.
          </p>
        </PhotoCopy>
      </article>

      {/* 08 Awards */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Record</p>
        <h2 className="mag-h mag-h-sm">What the awards actually mark.</h2>
        <p className="mag-folio mag-dense">
          The plaques are a chronology, not the argument. The argument is still the lending years
          and the listing years sitting in one practice. Read the dates as a file. Then go back to
          the villa story and the pre-approval. That is what they mark.
        </p>
        <ul className="mag-list">
          <li>
            <strong>Banking years · Royal Bank of Canada</strong>
            Thirteen years. Top Personal Lending Officer from 2005 to 2012. More than twenty-five
            Royal Performance awards in sales, locally and across the Eastern Caribbean. The
            muscle the later awards sit on. She still talks like a lender.
          </li>
          <li>
            <strong>The friend</strong>
            She was great with people. She could sell anything. She should sell. She did. The
            island has been the proving ground ever since.
          </li>
          <li>
            <strong>The practice · St. Kitts &amp; Nevis</strong>
            SAJ Interior Designs and Real Estate Services. Primary listing agent. Trusted by local
            banks to help liquidate foreclosed balances. Portfolio now in excess of US$300 million.
            sajrealestateskn.com · stkittsnevisrealtors.com.
          </li>
          <li>
            <strong>The method</strong>
            Pre-approval first. Then the showing. Which bank, which product, which appointment.
            Empathy during the transaction and after it. Accurate information on every property
            in play. Always master the art of the deal.
          </li>
          <li>
            <strong>2022 · Robert Fong</strong>
            A property seen online. Full price. The owner wanted more. Another villa. One virtual
            showing. The deal closed. Citizenship followed. Nearly two years later he walked the
            grass. He could not believe he owned it.
          </li>
          <li>
            <strong>2024 · New York</strong>
            Best Luxury Boutique Real Estate Consultancy, St. Kitts &amp; Nevis — Luxury Lifestyle
            Awards. Named among the Top 100 Real Estate Brokers of the World. Coverage in CEO
            Magazine, EliteX, MSN, the New York Herald, and USA Today.
          </li>
          <li>
            <strong>2025 · Switzerland</strong>
            Leading Luxury Real Estate Consultancy for Personalized Investment Guidance — Global
            Elite Awards. A second Best Luxury Boutique win. On the island it is still the same
            sentence: which bank, which product, which appointment.
          </li>
          <li>
            <strong>The next five years</strong>
            Sales and new development — lifestyle buyers and Citizenship by Investment. The
            horizon she names is the Caribbean region: a powerhouse broker, built the same way
            the first decade was built. It is not all glamour. Be focused. Know the market. Finish
            the task.
          </li>
        </ul>
        <p className="mag-note">
          Awards and coverage as supplied for the edition. The Fong closing is the scene we printed
          at length.
        </p>
        </div>
      </article>

      {/* 09 Portrait */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/portrait.jpg`} alt="" style={{ objectPosition: "center 20%" }} />
        <PhotoCopy kicker="The record" title="Managing Director · the file behind the portrait.">
          <p>
            2024, New York: Best Luxury Boutique Real Estate Consultancy, St. Kitts &amp; Nevis,
            Luxury Lifestyle Awards. Named among the Top 100 Real Estate Brokers of the World.
            Coverage in CEO Magazine, EliteX, MSN, the New York Herald, and USA Today.
          </p>
          <p>
            2025, Switzerland: Leading Luxury Real Estate Consultancy for Personalized Investment
            Guidance — Global Elite Awards. A second Best Luxury Boutique win. She will list them
            if asked. She would rather walk a buyer through pre-approval.
          </p>
          <p>
            Always master the art of the deal. If there is a deal to be made, make it. Once you
            fully understand the game, winning becomes like a piece of cake. Those are her lines.
            The portrait is the person who still talks like a lender.
          </p>
        </PhotoCopy>
      </article>

      {/* 10 Island / mission left */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/resort.jpg`} alt="St. Kitts coastline" />
        <div className="mag-scrim" />
        <div className="mag-overlay">
          <p className="mag-kicker mag-kicker-light">The island</p>
          <h2 className="mag-h mag-h-light" style={{ maxWidth: 480 }}>
            The product is the place itself.
          </h2>
          <p className="mag-folio" style={{ color: "rgba(244,239,230,0.9)", textAlign: "left" }}>
            Lifestyle buyers and Citizenship by Investment buyers arrive with different clocks.
            She treats both as a file: what they can carry, what the property actually is, what
            the bank will do. Sales and new development, on her telling, are rising. The horizon
            she names is not the island only, but the Caribbean region — a powerhouse broker,
            built the same way the first decade was built. It is not all glamour. Be focused.
            Know the market. Hear what the client actually needs. Stay determined to finish the
            task at hand.
          </p>
        </div>
      </article>

      {/* 11 Mission right */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">Mission</p>
        <h2 className="mag-h mag-h-sm">If there is a deal to be made, make it.</h2>
        <div className="mag-qframe" style={{ color: "#c9a24b" }}>
          <p>Once you fully understand the game, winning becomes like a piece of cake.</p>
        </div>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            SAJ&apos;s brief is complete: every detail of a client&apos;s real estate need, including
            the middle that luxury marketing usually skips. Which bank. Which product. Which
            appointment. Creativity here is not a mood board. It is a path through financing that
            actually closes. First communication now includes an education in pre-approval — so
            purchasing power is known before anyone stands in a doorway. Trust first. Then the
            showing.
          </p>
          <p>
            The websites hold the listings. The practice holds the rest — empathy during the
            transaction and after it, and accurate information on every property in play. Ten years
            in, SAJ is a primary listing agent on the island, trusted by local banks to help
            liquidate foreclosed balances. Lifestyle buyers and Citizenship by Investment buyers
            arrive with different clocks. She treats both as a file: what they can carry, what the
            property actually is, what the bank will do. The product is the place itself. The
            winning “it,” she says, is made for you — not pulled from a brochure and forced to fit.
          </p>
          <p>
            Always master the art of the deal. If there is a deal to be made, make it. Those two
            lines sit over a decade of introductions, refusals, second villas, and closings that
            sometimes happen before the buyer has walked the grass. Robert Fong is the scene later
            in this issue. The mission page is the method that made that scene possible.
          </p>
        </div>
        <p className="mag-foot">sajrealestateskn.com · stkittsnevisrealtors.com</p>
        </div>
      </article>

      {/* 12 Client story */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">A Client</p>
        <h2 className="mag-h mag-h-sm">The expression on his face was priceless.</h2>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            Robert Fong reached SAJ in 2022, coming out of the pandemic, for a property he had seen
            online. He offered full price. The owner wanted more. Shermel told him it was unfair, and
            found another villa. That is the whole first movement: a listing on a screen, a number
            that should have been enough, a seller who wanted more, a broker who would not dress
            the gap up as negotiation theatre. She moved him.
          </p>
          <p>
            One virtual showing. Another full-price offer. The deal closed. Citizenship in St. Kitts
            &amp; Nevis followed. Nearly two years later he walked the property for the first time —
            ocean in front of him, the deed in his name. He could not believe he owned it. The
            expression on his face, she says, was priceless. No moral stapled on. The reader gets
            the scene: offer, refusal, another villa, the deed, the ocean. The pandemic is only the
            weather the year arrived in. The method is older than that year — pre-approval, a
            second property, a close that does not wait for the buyer to stand in the doorway.
          </p>
          <p>
            Citizenship by Investment is part of how the island is bought now. Lifestyle buyers
            arrive on a different clock. Fong&apos;s file holds both: a home he had not yet walked,
            and a passport process that ran while the grass grew without him. SAJ held the middle.
            Which bank. Which product. Which appointment. When he finally stood there, the work
            was already done. That is the deal, mastered.
          </p>
        </div>
        <div className="mag-qframe" style={{ color: "#c9a24b" }}>
          <p>He could not believe he owned it.</p>
        </div>
        <p className="mag-foot">The Caribbean Issue · 12</p>
        </div>
      </article>

      {/* 13 Ruins */}
      <article className="mag-page mag-bleed">
        <img className="mag-fill" src={`${IMG}/ruins.jpg`} alt="" />
        <img className="mag-inset" src={`${IMG}/skyline.jpg`} alt="" />
        <PhotoCopy kicker="A client" title="The expression on his face was priceless.">
          <p>
            Robert Fong reached SAJ in 2022, coming out of the pandemic, for a property he had
            seen online. He offered full price. The owner wanted more. Shermel told him it was
            unfair, and found another villa. One virtual showing. Another full-price offer. The
            deal closed. Citizenship in St. Kitts &amp; Nevis followed.
          </p>
          <p>
            Nearly two years later he walked the property for the first time — ocean in front of
            him, the deed in his name. He could not believe he owned it. No moral stapled on.
            Offer, refusal, another villa, the deed, the ocean. The method is older than that
            year: pre-approval, a second property, a close that does not wait for the buyer to
            stand in the doorway.
          </p>
        </PhotoCopy>
      </article>

      {/* 14 Outlook */}
      <article className="mag-page mag-pad" style={{ paddingBottom: 0 }}>
        <div style={{ padding: "0 0 28px" }}>
          <p className="mag-kicker">Outlook</p>
          <h2 className="mag-h mag-h-sm">The next five years, and a note to the ambitious.</h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p>
              She sees sales and new development rising — lifestyle buyers and Citizenship by
              Investment alike. The horizon she names for SAJ is not the island only, but the
              Caribbean region: a powerhouse broker, built the same way the first decade was built.
              Pre-approval first. The listing second. Empathy during the transaction and after it.
              Accurate information on every property in play. Local banks still send the foreclosure
              files. The portfolio is already past US$300 million. The next five years, on her
              telling, are more of the same work at a larger map.
            </p>
            <p>
              To anyone who wants the work: it is not all glamour. Be focused. Know the market. Hear
              what the client actually needs. Stay determined to finish the task at hand. Keep
              pushing forward. Stay motivated. Focus on the end goal. Trust first. Then the showing.
              Always master the art of the deal. If there is a deal to be made, make it. Those are
              her lines. This issue does not rewrite them into a keynote. It leaves them next to the
              Fong villa and the lending years, and lets the reader do the adding up.
            </p>
          </div>
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
          <h2 className="mag-h mag-h-light" style={{ maxWidth: 520, fontSize: 34 }}>
            Trust first. Then the showing.
          </h2>
          <p className="mag-folio" style={{ color: "rgba(244,239,230,0.9)", textAlign: "left" }}>
            First communication now includes an education in pre-approval — so purchasing power is
            known before anyone stands in a doorway. Which bank. Which product. Which appointment.
            Keep pushing forward. Stay motivated. Focus on the end goal. The next five years are
            more of the same work at a larger map: lifestyle and Citizenship by Investment, the
            island and then the region. sajrealestateskn.com. stkittsnevisrealtors.com. The
            winning “it,” she says, is made for you.
          </p>
        </div>
      </article>

      <HouseAdSpread
        variant="visual"
        accent="#e8c56b"
        kicker="House spread"
        headlineLead="Thirteen years at the bank. Then"
        headlineHero="The Listing"
        tag="The Deal"
        foot="The Caribbean Issue"
        photo={`${IMG}/lounge.jpg`}
        photoAlt="A St. Kitts interior"
        objectPosition="center 40%"
        caption="The lounge · mortgage introductions first. Then the doorway."
        quote="Always master the art of the deal."
        sections={[
          {
            heading: "The desk",
            body:
              "Shermel A. Jeffers Chandwani spent thirteen years at the Royal Bank of Canada. Top personal lending officer from 2005 to 2012 — more than twenty-five Royal Performance awards in that stretch. SAJ Interior Design & Real Estate Services, St. Kitts & Nevis, is the second act: a banker's file applied to island listings.",
          },
          {
            heading: "The showing",
            body:
              "First communication now includes an education in pre-approval, so purchasing power is known before anyone stands in a doorway. The Robert Fong story in this issue is told cold: an offer, a refusal, another villa, the deed, the ocean. No moral stapled on.",
          },
          {
            heading: "This spread",
            body:
              "The Caribbean Issue is not the Top 10 series title. It is Master of the Deal. This is the long page before the back — gold type, a lounge, the two URLs she still prints: sajrealestateskn.com and stkittsnevisrealtors.com.",
          },
        ]}
      />

      {/* 18 Back cover */}
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
