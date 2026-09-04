/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, IssueCredits, PhotoCopy } from "./IssueChrome";

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
  { page: 15, label: "The Back Bar" },
  { page: 17, label: "PrimeCrest" },
];

export function EspeyPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/coverart.jpg`}
        alt="James Espey OBE"
        vol="Vol. II · The Legacy Issue · 2026"
        accent={GOLD}
        icon="cask"
        layout="nameplate"
        name="James Espey"
        role="Investor & Chairman"
        place="Wiltshire Whisky Distillery · England"
        teasers={[
          ["The back bar", "Sixty years in the drinks trade, told by the man who poured it."],
          ["The Chivas play", "A hundred-million-dollar demand that became five million cases a year."],
        ]}
      />

      <IssueCredits
        accent={GOLD}
        subject="James Espey OBE — Investor & Chairman, Wiltshire Whisky Distillery, England"
        words="Drawn from the papers, memoir, and interviews of James Espey. No scene invented; the years, houses, and case numbers are his."
        volume="Vol. II · The Legacy Issue"
        note={
          <>
            <p>
              This is the Legacy Issue of PrimeCrest: eighteen leaves on James Espey — born in the
              Livingstone hospital in 1943, schooled in Cape Town after four days and four nights
              by train, later the man behind brands that still sit on the back bar. Wiltshire is
              the present tense. The memoir he titled Ego Trip is the joke of a man who no longer
              needs one.
            </p>
            <p>
              The copy follows his account: the tin-roof house, borrowed money for the BCom and
              the MBA, United Distillers, the Chivas demand that became five million cases a year
              twenty years after he left the room. Photographs supplied for the edition. Scan the
              QR for theprimecrest.com.
            </p>
          </>
        }
      />

      {/* 03 The subject — dense two-col */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Subject</p>
        <h2 className="mag-h mag-h-sm">Eighty-two next May. Still laying down stock.</h2>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            James Espey was born in the Livingstone hospital in 1943, twenty-one years after his
            mother was born in the same building. Her grandfather kept the books for the company
            that built the Victoria Falls Bridge. The family lived in huts on the bank of the
            Zambezi while the steel went up, and later in the first house in Livingstone with a
            tin roof. That is the file he still opens with — not a brand, not a kilt, not a case
            number. A hospital, a bridge, a roof that kept the rain off.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The train</p>
          <p>
            School was Cape Town — four days and four nights by train, twice a year, for ten and
            a half years. He was one of the poorer boys at SACS. Sport and reasonable marks were
            the way through. The carriage was the first long corridor of his life: a boy going
            south to a school that did not owe him anything, then north again to a town that still
            smelled of the river. He does not romanticise the trip. He counts it. Ten and a half
            years of it. The poorer boy learned to keep the arithmetic.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>Borrowed money</p>
          <p>
            The BCom and the MBA were bought with borrowed money, repaid shortly after his
            thirtieth birthday. Everything he built afterwards was built the same way: long odds,
            longer view. He titled the memoir Ego Trip — the joke of a man who no longer needs one.
            The joke is the point. The man who would later ask Seagram for a hundred million
            dollars had first to pay back the loan that bought the degrees. He still recites both
            figures without looking down.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>What this issue holds</p>
          <p>
            What follows is sixty years in the drinks trade as he told it: Gilbeys in South Africa,
            International Distillers &amp; Vintners in London, the first non-Englishman on that
            board at thirty-four, Baileys remade, Malibu born in Stellenbosch and billed as
            Caribbean, Chivas asked for in China, The Last Drop financed from savings, Wiltshire
            still laying down stock twenty miles from Stonehenge. No scene invented. The years,
            the houses, and the case numbers are his.
          </p>
        </div>
        <div className="mag-qframe" style={{ color: GOLD }}>
          <p>Long odds, longer view.</p>
        </div>
        <p className="mag-foot">The Legacy Issue · 03</p>
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
          <ol className="mag-toc mag-toc-fill">
            <li>
              <div>
                <span>The Journey</span>
                <small>Livingstone, the train to Cape Town, borrowed money for the MBA.</small>
              </div>
              <em>06</em>
            </li>
            <li>
              <div>
                <span>The Back Bar</span>
                <small>What sixty years behind the world&apos;s drinks trade actually looks like.</small>
              </div>
              <em>07</em>
            </li>
            <li>
              <div>
                <span>The Record</span>
                <small>Chivas, United Distillers, and the brands that still carry his mark.</small>
              </div>
              <em>09</em>
            </li>
            <li>
              <div>
                <span>The Chivas Play</span>
                <small>A hundred-million-dollar demand. Five million cases, twenty years later.</small>
              </div>
              <em>10</em>
            </li>
            <li>
              <div>
                <span>The Numbers</span>
                <small>The figures he will still recite without looking down.</small>
              </div>
              <em>11</em>
            </li>
            <li>
              <div>
                <span>Second Acts</span>
                <small>Wiltshire, and the stock he is still laying down.</small>
              </div>
              <em>12</em>
            </li>
            <li>
              <div>
                <span>Giving Back</span>
                <small>The part of the memoir that is not about the back bar.</small>
              </div>
              <em>13</em>
            </li>
            <li>
              <div>
                <span>Outlook</span>
                <small>Eighty-two next May. The casks still have to rest.</small>
              </div>
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
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            In 1970 he joined Gilbeys South Africa as sales director. In January 1977 Anthony
            Tennant visited, and asked him to London: global marketing director of International
            Distillers &amp; Vintners, the first non-Englishman on the board, aged thirty-four.
            Not everyone approved. To some of the club he was a savage from the colonies, and they
            said so. He kept the phrase. It is in the memoir. It is how the room sounded when a
            man from Livingstone sat down with men who had never taken the train.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The blueprint</p>
          <p>
            The savage got to work. His 1981 doctorate — a worldwide strategy for IDV — became the
            company blueprint: trading profit of £26.4 million in 1977–78, £111.2 million five
            years later. He remade Baileys into the world&apos;s No. 1 liqueur, some six million
            cases a year. And in 1979 he took a South African coconut drink called Coco Rico,
            found a Malibu trademark in the cupboard, bottled it in Harlow, Essex — and shipped it
            as Caribbean-style rum. The world still believes it was always Caribbean. Le Piat
            D&apos;or, branded French wine for the masses, ran to two million cases worldwide. The
            Classic Malts and Johnnie Walker Blue Label followed in 1987, once he was deep in the
            Scotch argument.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>Seventeen years</p>
          <p>
            Seventeen years he gave IDV. He left with no pension, treated on the way out as a
            foreigner after all. By his own arithmetic the brands have since made more than £5
            billion for Diageo. He keeps the arithmetic. They keep the brands. Think global, act
            local — the line he still uses when a young marketer wants a single campaign for every
            country. The consumer, he says, votes with his or her feet. Fifty-five trips to North
            America in four years, because you meet the trade where it stands. When the work is
            done you have a drink together. The work matters. It was never only the work.
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
            justifyContent: "flex-start", gap: 6,
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
        <PhotoCopy kicker="The back bar" title="What sixty years actually put on the shelf.">
          <p>
            Baileys remade into the world&apos;s No. 1 liqueur — some six million cases a year. Malibu
            born as Coco Rico in Stellenbosch, a trademark found in the cupboard, bottled in Harlow,
            Essex, and billed as Caribbean. The world still believes it was always Caribbean. Le Piat
            D&apos;or, branded French wine for the masses, ran to two million cases worldwide.
          </p>
          <p>
            1987: The Classic Malts — six distilleries, one long argument for single malt. The same
            year, Johnnie Walker Blue Label, the standard other luxury blends still answer to. 1997:
            Chivas Regal 18, on his telling the No. 1 eighteen-year-old whisky in the world. 2008:
            The Last Drop, mostly Scotch around fifty years old, an average bottle at £3,000; Sazerac
            bought it in 2017 and keeps it at the top of the portfolio.
          </p>
          <p>
            He founded The Keepers of the Quaich in 1988 and chaired it from 1997 to 2000. Guests of
            honour have included Ronald Reagan, F.W. de Klerk, Princess Anne, and King Charles III.
            In many ways, he says, the brand he is most proud of. The photograph is the man at ease.
            The file underneath is still the case numbers.
          </p>
          <p>
            Seventeen years at IDV. First non-Englishman on the board at thirty-four. A 1981
            doctorate that became the company blueprint: trading profit of £26.4 million in 1977–78,
            £111.2 million five years later. He left with no pension, treated on the way out as a
            foreigner after all. By his own arithmetic the brands have since made more than £5
            billion for Diageo. He keeps the arithmetic. They keep the brands.
          </p>
          <p>
            Think global. Act local. Fifty-five trips to North America in four years, because you
            meet the trade where it stands. The real boss is the consumer, who votes with his or her
            feet. When the work is done you have a drink together. TEAM — together everyone achieves
            more. No chief executive should sit in his office.
          </p>
          <p>
            The wood behind him is only a sitting. Wiltshire is still laying down stock twenty miles
            from Stonehenge. Eighty-two next May. The casks still have to rest. Turn the leaf for
            the honours as dates; this panel is the shelf those dates were hung on.
          </p>
        </PhotoCopy>
      </article>

      {/* 09 The Record */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Record</p>
        <h2 className="mag-h mag-h-sm">The honours, and what they mark.</h2>
        <p className="mag-folio mag-dense">
          A chronology, not a speech. Every line is a year he will still recite without looking
          down. The plaques sit on top of the brands; the brands sit on top of the train to Cape
          Town and the borrowed money for the MBA. Read it as a file.
        </p>
        <ul className="mag-list">
          <li>
            <strong>1970 · Gilbeys South Africa</strong>
            Sales director. The first commercial chair after the degrees bought with borrowed money.
          </li>
          <li>
            <strong>1977 · London</strong>
            Anthony Tennant asks him to IDV: global marketing director, first non-Englishman on the
            board, aged thirty-four. To some of the club he was a savage from the colonies.
          </li>
          <li>
            <strong>1977–79 · The shelf</strong>
            Baileys remade into the world&apos;s No. 1 liqueur. Malibu born as Coco Rico, billed as
            Caribbean. Le Piat D&apos;or to two million cases.
          </li>
          <li>
            <strong>1981 · The doctorate</strong>
            A worldwide strategy for IDV becomes the company blueprint: £26.4 million trading profit
            in 1977–78, £111.2 million five years later.
          </li>
          <li>
            <strong>1987 · Scotch</strong>
            The Classic Malts. Johnnie Walker Blue Label. The long argument for single malt, and
            the luxury blend other houses still answer to.
          </li>
          <li>
            <strong>1988 · Scotland</strong>
            Founder of The Keepers of the Quaich; chairman 1997–2000. Guests of honour: Ronald
            Reagan, F.W. de Klerk, Princess Anne, King Charles III. &ldquo;In many ways the brand I
            am most proud of.&rdquo;
          </li>
          <li>
            <strong>1992 · Seagram / Chivas Bros</strong>
            One condition: $100 million. Ninety for whisky to sleep twenty years, ten for the
            distilleries and Linn House. Ed McDonnell nearly fell over. He signed anyway.
          </li>
          <li>
            <strong>1992–1998 &amp; 2003–2008</strong>
            Two terms on the Council of The Scotch Whisky Association. The commercial work and the
            trade body in the same years.
          </li>
          <li>
            <strong>1994 · Buckingham Palace</strong>
            The Queen&apos;s Award for Exports, received from Her Majesty as Chivas Regal passed
            two million cases a year.
          </li>
          <li>
            <strong>1997 · Chivas Regal 18</strong>
            On his telling, the No. 1 eighteen-year-old whisky in the world. The kilt on Chinese
            television sits in the same decade.
          </li>
          <li>
            <strong>2001 &amp; 2013</strong>
            International Wine &amp; Spirit Lifetime Achievement Award for Scotch; then an OBE for
            services to the industry in the Queen&apos;s Birthday Honours.
          </li>
          <li>
            <strong>2003–2022 · Mimecast</strong>
            Backed from his dining-room table. Floated on the NASDAQ at $10 a share. Sold in 2022
            for $5.8 billion.
          </li>
          <li>
            <strong>2008 · The Last Drop</strong>
            CV line: &ldquo;Retired ! ! !&rdquo; The same year he founds the collection. Economy
            flights, cheapest hotels, kilt at dinner. Sazerac buys it in 2017.
          </li>
          <li>
            <strong>2015 &amp; 2023</strong>
            Honorary Member of The Marketing Society of Great Britain; named one of the Top 100
            business and society influencers.
          </li>
          <li>
            <strong>2024 · Wiltshire</strong>
            The Wiltshire Distillery on the Fonthill Estate, twenty miles from Stonehenge, English
            whisky sleeping in a very old building. Caroline on the board. Jessica on the
            environmental conscience. Stock still going down.
          </li>
        </ul>
        <p className="mag-folio mag-dense" style={{ marginTop: 8 }}>
          His arithmetic, cheerfully offered: more than £10 billion in brand value to the UK
          economy; some 10,000 jobs against the career; five million cases of Chivas a year as
          planned in 1992; Mimecast at $5.8 billion from a dining-room table. The auditors are
          welcome to argue. What the list does not hold is the train, the borrowed MBA, or the
          bicycle in Livingstone. Those sit on the leaves that follow.
        </p>
        </div>
      </article>

      {/* 10 The Chivas Play */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">The Chivas Play</p>
        <h2 className="mag-h mag-h-sm">A hundred million dollars, and a kilt on Chinese television.</h2>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            Joining Seagram in 1992 to run Chivas Bros, he set one condition: $100 million. Ninety
            for whisky to sleep in barrels for the next twenty years, ten for the distilleries and
            Linn House, a hospitality home for the trade. Ed McDonnell, Seagram&apos;s president,
            wrote later that he nearly fell over. He signed anyway. The demand was not theatre. If
            you want a twenty-year whisky you have to buy the years. Most rooms will not. This one
            did, and then spent two decades proving the paper right.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The kilt</p>
          <p>
            Then Espey put on the kilt of the Keepers of the Quaich — the society he had founded
            in 1988, the brand he says he is most proud of — went on Chinese television holding a
            bottle of Chivas Regal, and told a country just coming into money to drink better.
            Chivas became the top whisky in China. His plan said five million cases within
            twenty-five years; Chivas Bros passed the mark some twenty years after he left the
            room, worth billions to a company that, he suspects, knows nothing about the decision
            that did it. In 1994 the Queen&apos;s Award for Exports arrived as Chivas passed two
            million cases a year. In 1997 he put Chivas Regal 18 on the shelf. It is, on his
            telling, the No. 1 eighteen-year-old whisky in the world.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>What the room forgot</p>
          <p>
            He will still recite the split: ninety for stock, ten for the houses that host the
            trade. Linn House was not a perk. It was how a buyer from Shanghai or Chicago learned
            what was in the glass. Two terms on the Council of The Scotch Whisky Association —
            1992–1998 and 2003–2008 — sat beside the commercial work. The International Wine &amp;
            Spirit Lifetime Achievement Award for Scotch came in 2001. The OBE for services to the
            industry in the Queen&apos;s Birthday Honours, 2013. He treats those as marks on a
            file, not as the story. The story is the hundred million, the kilt, and a country that
            started drinking better.
          </p>
        </div>
        <div className="mag-qframe" style={{ color: GOLD }}>
          <p>Drink better.</p>
        </div>
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
            justifyContent: "flex-start", gap: 6,
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
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            His CV gives 2008 a single line — &ldquo;Retired ! ! !&rdquo; — and nobody believed
            the punctuation. In 2003 he had already backed two young men, one a 28-year-old chief
            executive, who launched an email-security company called Mimecast from his dining-room
            table. It floated on the NASDAQ at $10 a share and sold in 2022 for $5.8 billion. He
            still counts the table. The launch was not a pitch deck in a glass tower. It was a
            house, two young men, and a man from the drinks trade who knew how to wait. He had
            waited on Chivas too: a hundred million in 1992, five million cases a year some twenty
            years after he left the room. Waiting is the method.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The dining-room table</p>
          <p>
            The 28-year-old was the chief executive. Espey put the house around them. Mimecast was
            email security, not whisky, and that is the point of a second act: the file transfers.
            How to hold a long bet. How not to sit in the office. How to meet the people who will
            actually use the thing. $10 on the NASDAQ. $5.8 billion in 2022. He will still give you
            both figures without looking down, the same way he gives you Baileys at six million
            cases and Chivas at five. The auditors are welcome to argue. He offers the arithmetic
            cheerfully.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The Last Drop</p>
          <p>
            The year he &ldquo;retired&rdquo;, he founded The Last Drop Distillers: the
            world&apos;s most exclusive spirits collection, mostly Scotch around fifty years old,
            an average bottle at £3,000. He financed it from savings — so he flew economy and
            stayed in the cheapest hotels while hosting dinners around the world in the kilt,
            signing bottles after dessert. Sazerac, the largest private drinks company in America,
            bought it in 2017 and keeps it at the very top of the portfolio. Never be arrogant, and
            never forget from whence you come. Economy on the way out. Kilt at dinner. Signature
            after the pudding. The Keepers of the Quaich kilt is the same one that went on Chinese
            television with a bottle of Chivas. He does not keep two kilts for two lives.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>Wiltshire, still</p>
          <p>
            Retirement, on this file, is a chair at The Wiltshire Distillery on the Fonthill
            Estate, twenty miles from Stonehenge, English whisky sleeping in a very old building,
            distilling since 2024. His daughter Caroline sits on the board. His daughter Jessica,
            an associate professor who spent a decade at the United Nations, keeps its
            environmental conscience. The casks still have to rest. Eighty-two next May is a
            harvest calendar, not a closing date.
          </p>
          <p>
            His largest investment is Uberbinder, a cold-applied polymer to replace heated bitumen
            in road-building — a tenth of global greenhouse gas traces to roads, runs the argument.
            Mimecast&apos;s founder owns half; Espey holds fifteen percent; the head office has
            moved to Oxford. Tesla should never have got off the ground, he says, and means it as
            encouragement. If you never leave the shore, you will never reach the other side. The
            shore was Livingstone. Then Cape Town. Then London. Then a dining-room table. Then a
            still in Wiltshire. A plan to ninety. Stock still going down.
          </p>
        </div>
        <img
          src={`${IMG}/expo.jpg`}
          alt=""
          style={{ width: "100%", height: 200, objectFit: "cover", objectPosition: "center 30%", margin: "8px 0 6px" }}
        />
        <div className="mag-qframe" style={{ color: GOLD }}>
          <p>Never be arrogant, and never forget from whence you come.</p>
        </div>
        <p className="mag-foot">The Legacy Issue · 12</p>
        </div>
      </article>

      {/* 13 Giving Back */}
      <article className="mag-page mag-pad">
        <div className="mag-body mag-fill-page">
        <p className="mag-kicker">Giving Back</p>
        <h2 className="mag-h mag-h-sm">&ldquo;Poor, likes sport, reasonably bright.&rdquo;</h2>
        <div className="mag-cols mag-folio mag-dropcap mag-dense">
          <p>
            That is the written criterion for the Espey scholarship at his old school in Cape Town —
            his own file, in other words. Poor, likes sport, reasonably bright. He was one of the
            poorer boys at SACS. Sport and reasonable marks were the way through. Four days and
            four nights by train, twice a year, for ten and a half years. The scholarship is that
            boy, written down as a rule so the next one does not have to invent the corridor.
            Thulile Dodwana, from a remote part of South Africa, was the first scholar; a second
            has just started. More than £60,000 committed, the trust paying through to university.
            He does not dress it up as a foundation with a gala. It is a criterion, a name, and
            fees that arrive.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>Livingstone, still</p>
          <p>
            In Livingstone, where he was born — same hospital as his mother, twenty-one years
            later, grandfather on the books of the company that built the Victoria Falls Bridge,
            first tin roof in the town — he pays the school fees of two girls, and recently bought
            one a bicycle so she rides to school instead of walking an hour each way. Further
            up-country, wells for drinking water. And quietly, he covers medical bills for two
            friends of forty years who fell on hard times — one of them was good to him when he was
            a young man in Cape Town with little money. The bicycle is the line he likes to tell.
            An hour each way on foot. Then a bicycle. The rest of the file is quieter: wells, bills,
            no press release. The memoir is titled Ego Trip. This page is the opposite of the title.
          </p>
          <p className="mag-sub" style={{ color: GOLD }}>The books, the calls</p>
          <p>
            Two books for the next generation — <em>Making Your Marque</em> and <em>365 Quotes to
            Accelerate Your Career</em> — and a standing habit of mentoring. One mentee has been
            calling since the late 1990s. He is now in his sixties. That is a quarter-century of
            the same number ringing. We all have a responsibility to help future generations. He
            says it as a duty, not a slogan.
          </p>
          <p>
            The Keepers of the Quaich guests of honour have included Ronald Reagan, F.W. de Klerk,
            Princess Anne, and King Charles III. He will mention them if asked. He would rather
            talk about the scholar, the bicycle, and the man who still rings. TEAM — together
            everyone achieves more — is the line he leaves on the wall. No chief executive should
            sit in his office. The giving-back file is the same instruction: leave the office, meet
            the person, pay the fee, buy the bicycle, take the call. Never be arrogant, and never
            forget from whence you come. Livingstone. The train. The borrowed MBA. Then the shelf.
            Then this.
          </p>
        </div>
        <img
          src={`${IMG}/hands.jpg`}
          alt=""
          style={{ width: "100%", height: 200, objectFit: "cover", objectPosition: "center 40%", margin: "8px 0 6px" }}
        />
        <div className="mag-qframe" style={{ color: GOLD }}>
          <p>We all have a responsibility to help future generations.</p>
        </div>
        <p className="mag-foot">The Legacy Issue · 13</p>
        </div>
      </article>

      {/* 14 Outlook */}
      <article className="mag-page mag-pad mag-pb0">
        <div className="mag-body mag-fill-page">
        <div style={{ padding: "0 0 28px" }}>
          <p className="mag-kicker">Outlook</p>
          <h2 className="mag-h mag-h-sm">Whisky near Stonehenge, roads without fire, a plan to ninety.</h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p>
              At an age when most men curate their memoirs, he chairs The Wiltshire Distillery —
              English whisky sleeping in barrels in a very old building on the Fonthill Estate,
              twenty miles from Stonehenge, distilling since 2024. His daughter Caroline sits on the
              board; his daughter Jessica, an associate professor who spent a decade at the United
              Nations, keeps its environmental conscience. The casks still have to rest. Eighty-two
              next May is not a closing date. It is a harvest calendar.
            </p>
            <p>
              His largest investment is Uberbinder, a cold-applied polymer to replace heated bitumen
              in road-building — a tenth of global greenhouse gas traces to roads, runs the argument.
              Mimecast&apos;s founder owns half; Espey holds fifteen percent; the head office has
              moved to Oxford. Tesla should never have got off the ground, he says, and means it as
              encouragement. If you never leave the shore, you will never reach the other side. He
              has been saying versions of that since the train to Cape Town. The shore, then, was
              Livingstone. The other side was London, then China, then a dining-room table, then a
              still in Wiltshire. The plan runs to ninety. The stock is already in the wood.
            </p>
            <p>
              He will still give you the other arithmetic if you ask: more than £10 billion in brand
              value delivered to the UK economy, on his count; some 10,000 jobs against the career;
              five million cases of Chivas a year, as planned in 1992. The auditors are welcome to
              argue. He offers the figures cheerfully. The method underneath them has not changed.
              No chief executive should sit in his office. Meet the trade. Have the drink. TEAM —
              together everyone achieves more — is the line he leaves on the wall.
            </p>
          </div>
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

      <HouseAdSpread
        variant="visual"
        accent={GOLD}
        kicker="House spread"
        headlineLead="Sixty years behind"
        headlineHero="The Back Bar"
        tag="Legacy"
        foot="The Legacy Issue"
        photo={`${IMG}/hands.jpg`}
        photoAlt="Hands at the distillery"
        objectPosition="center 40%"
        caption="The pour · stock still going down in Wiltshire"
        quote="Eighty-two next May. Still laying down stock."
        sections={[
          {
            heading: "Livingstone, 1943",
            body:
              "James Espey was born in the Livingstone hospital twenty-one years after his mother, in the same building. Her grandfather kept the books for the company that built the Victoria Falls Bridge. The family lived in huts on the Zambezi bank while the steel went up, then in the first house in Livingstone with a tin roof. Four days and four nights by train to Cape Town for school. Borrowed money for the BCom and the MBA.",
          },
          {
            heading: "The Chivas demand",
            body:
              "At United Distillers he put a hundred-million-dollar demand on the table. Twenty years after he left the room, Chivas was moving five million cases a year. The brands from those years still sit on the back bar. The memoir he titled Ego Trip is the joke of a man who no longer needs one.",
          },
          {
            heading: "Wiltshire, now",
            body:
              "Investor and chairman at Wiltshire Whisky Distillery, England. The work is casks, not a farewell tour. This spread is the house page for the Legacy Issue: the years, the houses, and the case numbers as he gave them — no scene invented for the photograph.",
          },
        ]}
      />

      {/* 18 Back cover — PrimeCrest house page over the issue collage, single, hard */}
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
