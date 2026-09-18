/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · The September Issue, Vol. VIII
 * James Espey OBE, Investor & Chairman, Wiltshire Whisky Distillery, England.
 * Cover and back carry the flagship `es-cover` lockup on the house
 * architecture. Interiors are a closed `es-*` system (src/app/m/espey/espey.css):
 * oak-black with a candlelight glow, parchment paper, Cormorant Garamond
 * display, Cardo text, Oswald labels. Three true spreads: contents (3–4),
 * the Chivas portrait (7–8), and the Fortiora ad (11–12).
 * Facts from his summarised bio and the Ego Trip memoir. No scene invented.
 */

const IMG = "/issues/espey";
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
  ["On the Cover", "James Espey OBE"],
  ["Circulation", "Digital edition · worldwide"],
  ["Subscriptions", "theprimecrest.com"],
] as const;

export const ESPEY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Subject" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Journey" },
  { page: 6, label: "The Back Bar" },
  { page: 7, label: "The Chivas Play" },
  { page: 9, label: "The Numbers" },
  { page: 10, label: "Second Acts" },
  { page: 11, label: "Fortiora · Applied AI" },
  { page: 13, label: "PrimeCrest" },
];

export function EspeyPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page es es-cover" data-density="hard">
        <img
          className="es-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="James Espey OBE, Investor and Chairman, Wiltshire Whisky Distillery"
          fetchPriority="high"
        />
        <div className="es-cover-grade" />

        <div className="es-cover-ui">
          <header className="es-mast">
            <div className="es-mast-word">
              <svg className="es-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#d99a3a" />
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
            <p className="es-mast-tag">Where Vision Meets Voice</p>
            <div className="es-mast-hair" />
          </header>

          <div className="es-cover-date">
            <p>The September Issue</p>
            <p>Vol. VIII · No. 08</p>
            <p>2026</p>
          </div>

          <div className="es-teaser es-teaser-a">
            <h3>
              The
              <br />
              back bar
            </h3>
            <hr />
            <p>
              Baileys, Malibu, Blue Label. Sixty years in the drinks trade, told by the man who
              poured it.
            </p>
          </div>

          <div className="es-cover-badge">
            <span className="es-badge-dot" />
            <h2>Unstoppable</h2>
            <strong>LEADER</strong>
            <span>making a difference in</span>
            <em>2026</em>
          </div>

          <div className="es-cover-role">
            <p>
              Investor &amp;
              <br />
              Chairman
            </p>
            <strong>
              Wiltshire Whisky
              <br />
              Distillery, England
            </strong>
          </div>

          <div className="es-teaser es-teaser-b">
            <h3>
              The
              <br />
              Chivas play
            </h3>
            <hr />
            <p>
              A hundred million dollars in 1992, largely on stock. Five million cases a year.
            </p>
          </div>

          <div className="es-cover-name">
            <em>James</em>
            <strong>ESPEY</strong>
            <p>
              O.B.E. Sixty years behind the world&apos;s back bar, and a distillery twelve miles
              from Stonehenge still laying down stock.
            </p>
          </div>

          <div className="es-cover-foot">
            <p className="es-cover-issn">
              <b>The September Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="es-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* 01 · Credits */}
      <article className="mag-page es es-oak-leaf" data-density="hard">
        <div className="es-well">
          <p className="es-credits-word">Credits</p>
          <p className="es-credits-issue">The September Issue · Vol. VIII · 2026</p>
          <dl className="es-credits-list">
            {CREDITS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="es-credits-foot">
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

      {/* 02 · The Subject */}
      <article className="mag-page es es-parch-leaf">
        <div className="es-well">
          <p className="es-kicker">The Subject</p>
          <h2 className="es-h">
            Eighty-two. <em>Still laying down stock.</em>
          </h2>
          <div className="es-cols">
            <p className="es-drop">
              James Espey was born in Zambia in 1943, in the Livingstone hospital, twenty-one
              years after his mother was born in the same building. Her grandfather kept the books
              for the company that built the Victoria Falls Bridge. The family lived in huts on
              the bank of the Zambezi while the steel went up, and later in the first house in
              Livingstone with a tin roof. That is the file he still opens with. Not a brand, not
              a kilt, not a case number. A hospital, a bridge, a roof that kept the rain off.
            </p>
            <p className="es-sub">The train</p>
            <p>
              School was Cape Town. Four days and four nights by train, twice a year, for ten and
              a half years. He was one of the poorer boys at SACS; sport and reasonable marks were
              the way through. He does not romanticise the trip. He counts it. Ten and a half
              years of it. The poorer boy learned to keep the arithmetic.
            </p>
            <p className="es-sub">The degrees</p>
            <p>
              A BCom in marketing and accounting from the University of Cape Town, 1965. Two years
              at Spar as an assistant marketing manager, then back for a full-time MBA, finished at
              the end of 1969 with a thesis written inside Coca-Cola on whether canned carbonated
              drinks could work in South Africa. They offered him the canning desk. He chose the
              drinks trade instead, and the loans that bought both degrees were repaid shortly
              after his thirtieth birthday. He titled the memoir Ego Trip, the joke of a man who
              no longer needs one.
            </p>
            <p className="es-sub">The boards</p>
            <p>
              The seats accumulated the way casks do, quietly. Non-executive years at Fuller
              Smith &amp; Turner from 1998 to 2009, at AG Barr, at Church Shoes; the chairmanship
              of Swallowfield; the chair for industry affairs at Whyte &amp; Mackay from 2003 to
              2008. In 1993 he was president of the UK branch of the International Advertising
              Association, and in 2015 the Marketing Society made him an honorary member, one of
              only twelve. He lists them the way he lists everything, with the dates attached.
            </p>
            <p className="es-sub">What this issue holds</p>
            <p>
              What follows is sixty years as he told it. Gilbeys in 1970. London in 1977, the main
              board that November. Baileys remade, Malibu invented, Blue Label built. Chivas asked
              for in China. Mimecast backed at his dining-room table. The Last Drop financed from
              savings. Wiltshire, since June 2022, still laying down stock twelve miles from
              Stonehenge. No scene invented. The years, the houses, and the case numbers are his.
            </p>
          </div>
          <p className="es-pull">Long odds, longer view.</p>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>The Subject</span>
            <span>02</span>
          </div>
        </div>
      </article>

      {/* 03 · Contents spread · left */}
      <article className="mag-page es es-bleed-leaf" data-density="hard">
        <img
          className="es-port-img"
          src={`${IMG}/gaze.jpg`}
          alt="James Espey"
          style={{ objectPosition: "50% 12%" }}
        />
        <div className="es-scrim" />
        <div className="es-well">
          <span className="es-toc-banner">The Signature Story</span>
          <p className="es-toc-num">05</p>
          <h2 className="es-toc-line">Sixty years in the drinks trade, told by the man who poured it.</h2>
          <p className="es-toc-sub">
            The Chivas play, page 07. How a hundred-million-dollar demand in 1992 became five
            million cases a year, some twenty years after he left the room.
          </p>
              </div>
      </article>

      {/* 04 · Contents spread · right */}
      <article className="mag-page es es-bleed-leaf" data-density="hard">
        <div className="es-spreadpic is-right">
          <img src={`${IMG}/hands.jpg`} alt="" />
              </div>
        <div className="es-scrim" />
        <p className="es-vert">Contents</p>
        <div className="es-well" style={{ paddingRight: 150 }}>
          <p className="es-kicker">In this issue</p>
          <ol className="es-toc-list">
            <li>
              <div>
                <h4>The Subject</h4>
                <p>Livingstone, the train to Cape Town, borrowed money for the MBA.</p>
              </div>
              <em>02</em>
            </li>
            <li>
              <div>
                <h4>The Journey</h4>
                <p>A savage from the colonies, and the blueprint that answered them.</p>
              </div>
              <em>05</em>
            </li>
            <li>
              <div>
                <h4>The Back Bar</h4>
                <p>Baileys to Blue Label. What he put on the world&apos;s shelf.</p>
              </div>
              <em>06</em>
            </li>
            <li>
              <div>
                <h4>The Chivas Play</h4>
                <p>A hundred-million-dollar demand. Five million cases, twenty years later.</p>
              </div>
              <em>07</em>
            </li>
            <li>
              <div>
                <h4>The Numbers</h4>
                <p>The figures he will still recite without looking down.</p>
              </div>
              <em>09</em>
            </li>
            <li>
              <div>
                <h4>Second Acts</h4>
                <p>Mimecast, The Last Drop, the scholarship, and Wiltshire.</p>
              </div>
              <em>10</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 05 · The Journey */}
      <article className="mag-page es es-parch-leaf">
        <div className="es-well">
          <p className="es-kicker">The Journey</p>
          <h2 className="es-h">&ldquo;A savage from the colonies.&rdquo;</h2>
          <div className="es-cols">
            <p className="es-drop">
              In 1970 he joined Gilbeys South Africa, part of Grand Metropolitan, as sales
              director, later sales and marketing director. In 1977 London called: group marketing
              director of International Distillers &amp; Vintners, and that November, the main
              board, the first non-Englishman on it. Not everyone approved. To some of the club he
              was a savage from the colonies, and they said so. He kept the phrase. It is in the
              memoir. It is how the room sounded when a man from Livingstone sat down with men who
              had never taken the train.
            </p>
            <p className="es-sub">The blueprint</p>
            <p>
              The savage got to work. His 1981 doctorate, a worldwide strategy for IDV, became the
              company blueprint, and in 1982 he was appointed executive chairman of IDV UK. He
              remade Baileys into the world&apos;s No. 1 liqueur, some eight million cases a year.
              In 1979 he took a South African coconut drink called Coco Rico, found a Malibu
              trademark in the cupboard, bottled it in Harlow, Essex, and shipped it as
              Caribbean-style rum. The world still believes it was always Caribbean. Le Piat
              D&apos;or, branded French wine for the masses, ran to two million cases worldwide.
            </p>
            <p className="es-sub">Scotch</p>
            <p>
              In 1986 he joined United Distillers under Guinness as deputy managing director, and
              from 1988 to 1992 ran North America as president. The Classic Malts and Johnnie
              Walker Blue Label date from those years, and so does The Keepers of the Quaich, the
              whisky society he created in 1988. Its guests of honour have included King Charles
              III, Princess Anne, Ronald Reagan and F.W. de Klerk.{" "}
              <span className="es-run">&ldquo;Think global, act local.&rdquo;</span> Fifty-five
              trips to North America in four years, because you meet the trade where it stands.
              When the work is done you have a drink together. The work matters. It was never only
              the work.
            </p>
            <p className="es-sub">The exit</p>
            <p>
              Seventeen years he gave IDV in the end. He left with no pension, treated on the way
              out as a foreigner after all. By his own arithmetic the brands he built or remade
              have since earned more than £5 billion for Diageo. He keeps the arithmetic. They
              keep the brands. He tells the story without heat, the way a man reads out a ledger
              line that stopped hurting a long time ago, and then he moves on to what came next,
              because something always came next.
          </p>
        </div>
          <p className="es-pull">Think global. Act local.</p>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>The Journey</span>
            <span>05</span>
        </div>
        </div>
      </article>

      {/* 06 · The Back Bar · dark ledger */}
      <article className="mag-page es es-oak-leaf" data-density="hard">
        <div className="es-well">
          <p className="es-kicker">The Back Bar</p>
          <h2 className="es-h">What he put on the world&apos;s shelf.</h2>
          <ul className="es-shelf-list">
            <li>
              <em>1977</em>
              <div>
                <b>Baileys Irish Cream</b>
                <span>Remade into the world&apos;s No. 1 liqueur. Some eight million cases a year.</span>
              </div>
          </li>
          <li>
              <em>1979</em>
              <div>
                <b>Malibu</b>
                <span>Born in Stellenbosch as Coco Rico, billed as Caribbean. The world&apos;s No. 2 liqueur.</span>
              </div>
          </li>
          <li>
              <em>1979</em>
              <div>
                <b>Le Piat D&apos;or</b>
                <span>Branded French wine for the masses. Two million cases worldwide.</span>
              </div>
          </li>
          <li>
              <em>1987</em>
              <div>
                <b>The Classic Malts</b>
                <span>Six distilleries, one long argument for single malt.</span>
              </div>
          </li>
          <li>
              <em>1987</em>
              <div>
                <b>Johnnie Walker Blue Label</b>
                <span>The standard other luxury blends still answer to.</span>
              </div>
          </li>
          <li>
              <em>1997</em>
              <div>
                <b>Chivas Regal 18</b>
                <span>Today the No. 1 eighteen-year-old whisky in the world.</span>
              </div>
          </li>
          <li>
              <em>2008</em>
              <div>
                <b>The Last Drop</b>
                <span>The world&apos;s most exclusive spirits collection. Now the pinnacle of Sazerac&apos;s portfolio.</span>
              </div>
          </li>
        </ul>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>The Back Bar</span>
            <span>06</span>
          </div>
        </div>
      </article>

      {/* 07 · Chivas spread · left: the portrait and the quote card */}
      <article className="mag-page es es-bleed-leaf" data-density="hard">
        <img className="es-port-img" src={`${IMG}/wood.jpg`} alt="James Espey" style={{ objectPosition: "50% 18%" }} />
        <div className="es-port-grade" />
        <div className="es-quote-card">
          <p>Success in the liquor trade is about vision and long-term planning.</p>
        </div>
        <p className="es-port-cap">
          <span>James Espey OBE</span>
          <span>The Chivas Play · 07</span>
        </p>
      </article>

      {/* 08 · Chivas spread · right: the story */}
      <article className="mag-page es es-parch-leaf">
        <div className="es-well">
          <p className="es-kicker">The Chivas Play</p>
          <h2 className="es-h">
            A hundred million dollars, <em>and a kilt on Chinese television.</em>
          </h2>
          <div className="es-cols">
            <p className="es-drop">
              Joining Seagram in 1992 as president of the Chivas Regal and Glenlivet group, he set
              one condition: $100 million, largely on stock, so that Chivas Bros could grow from
              under two million cases to five million within twenty-five years. Ninety for whisky
              to sleep in barrels, ten for the distilleries and Linn House, a hospitality home for
              the trade. Seagram&apos;s president wrote later that he nearly fell over. He signed
              anyway. The demand was not theatre. If you want a twenty-year whisky you have to buy
              the years. Most rooms will not. This one did.
            </p>
            <p className="es-sub">The kilt</p>
            <p>
              Then Espey put on the kilt of the Keepers of the Quaich, went on Chinese television
              holding a bottle of Chivas Regal, and told a country just coming into money to drink
              better. Chivas became the top whisky in China. The five-million-case mark was passed
              some twenty years after he left the company, superb profit for the UK, exactly as
              the 1992 paper had planned. In 1994 Chivas Bros received the Queen&apos;s Award for
              Exports. In 1997 he put Chivas Regal 18 on the shelf, today the No. 1
              eighteen-year-old whisky in the world, and set about revitalising Royal Salute, the
              blend created for a coronation.
            </p>
            <p className="es-sub">What the room forgot</p>
          <p>
            He will still recite the split: ninety for stock, ten for the houses that host the
              trade. Linn House was not a perk. It was how a buyer from Shanghai or Chicago
              learned what was in the glass. Two terms on the Council of the Scotch Whisky
              Association sat beside the commercial work. The Lifetime Achievement Award for
              Scotch came in 2001, the OBE for services to the whisky industry in 2013. He treats
              those as marks on a file, not as the story. The story is the hundred million, the
              kilt, and a country that started drinking better.
            </p>
            <p className="es-sub">The lesson</p>
            <p>
              Ask him what the play teaches and the answer is not about whisky. It is about
              patience priced in decades, and about asking for the full number in the first
              meeting rather than the survivable one. The men who nearly fell over stayed in the
              room. The men who did not ask are not in the story at all.
          </p>
        </div>
          <p className="es-pull">If you want a twenty-year whisky, buy the years.</p>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>The Chivas Play</span>
            <span>08</span>
        </div>
        </div>
      </article>

      {/* 09 · The Numbers */}
      <article className="mag-page es es-oak-leaf" data-density="hard">
        <div className="es-well">
          <p className="es-kicker">The Numbers</p>
          <ul className="es-num-list">
            <li>
              <b>£10bn+</b>
              <span>brand value delivered to the UK economy</span>
            </li>
            <li>
              <b>10,000</b>
              <span>jobs he counts against the career</span>
            </li>
            <li>
              <b>5m</b>
              <span>cases of Chivas Regal a year, as planned in 1992</span>
            </li>
            <li>
              <b>$5.6bn</b>
              <span>Mimecast at exit, launched in his home in 2003</span>
            </li>
            <li>
              <b>83</b>
              <span>his age. Still at work.</span>
            </li>
          </ul>
          <p className="es-num-note">His arithmetic, cheerfully offered. The auditors are welcome to argue.</p>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>The Numbers</span>
            <span>09</span>
            </div>
        </div>
      </article>

      {/* 10 · Second Acts & Giving Back */}
      <article className="mag-page es es-parch-leaf">
        <div className="es-well">
          <p className="es-kicker">Second Acts</p>
          <h2 className="es-h">
            Retired. <em>Three exclamation marks.</em>
          </h2>
          <div className="es-cols">
            <p className="es-drop">
              His CV gives 2008 a single line, &ldquo;Retired ! ! !&rdquo;, and nobody believed
              the punctuation. In 2003 he had backed two young men, Peter Bauer, then a
              28-year-old chief executive, and Neil Murray, in launching an email-security company
              called Mimecast in his home. It floated on the NASDAQ in November 2016 at $10 a
              share and was acquired by Permira in early 2022 at $80 a share, $5.6 billion. More
              than 2,000 staff now serve 36,000 businesses in over 100 countries. He still counts
              the table it started on. Waiting is the method. He had waited on Chivas too.
            </p>
            <p className="es-sub">The Last Drop</p>
            <p>
              The year he retired, he founded The Last Drop Distillers, the world&apos;s most
              exclusive spirits collection. He financed it from savings, so he flew economy and
            stayed in the cheapest hotels while hosting dinners around the world in the kilt,
              signing bottles after dessert. Sazerac, the largest privately owned drinks company
              in America, bought it in 2016 and keeps it at the top of the portfolio.{" "}
              <span className="es-run">
                &ldquo;Never be arrogant, and never forget from whence you come.&rdquo;
              </span>
            </p>
            <p className="es-sub">Giving back</p>
            <p>
              The Espey scholarship at his old school in Cape Town has a written criterion: poor,
              likes sport, reasonably bright. His own file, in other words. In Livingstone he pays
              the school fees of two girls, and bought one a bicycle so she rides to school
              instead of walking an hour each way. From 2016 to 2024 he was founder, trustee and
              president of Shaw Mind, the mental health charity whose 2017 petition put 100,000
              signatures behind mental health in schools. Two books for the next generation,
              Making Your Marque and 365 Quotes to Accelerate Your Career, one of them translated
              into Mongolian. He mentors quietly, and one mentee has been calling since the late
              1990s.
            </p>
            <p className="es-sub">Wiltshire, still</p>
            <p>
              Retirement, on this file, is the chairmanship of a start-up whisky distillery twelve
              miles from Stonehenge, accepted in June 2022 as, in his words, an interesting
              seven-year challenge. His largest investment is Uberbinder, a cold-applied polymer
              to replace heated bitumen in road building; a tenth of global greenhouse gas traces
              to roads, runs the argument. Mimecast&apos;s founder holds half, Espey eleven
              percent, and the head office has moved to Liverpool. The casks still have to rest.
              Stock still going down.
          </p>
        </div>
          <div className="es-band" style={{ margin: "14px -58px 0" }}>
            If you never leave the shore, you will never reach the other side.
        </div>
          <div className="es-folio">
            <span>{ISSUE}</span>
            <span>Second Acts</span>
            <span>10</span>
          </div>
        </div>
      </article>

      {/* 11 · Ad spread · left: the statement */}
      <article className="mag-page es es-oak-leaf" data-density="hard">
        <div className="es-well">
          <p className="es-ad-kicker">Fortiora Group · Advertisement</p>
          <div className="es-ad-state">
            <h2>
              The record,
              <br />
              <em>kept by itself.</em>
            </h2>
            <p className="es-ad-copy">
              Fortiora turns scattered numbers into a working ledger. Revenue, operations and the
              customer file on one board, with an assistant that answers in plain language and
              cites its source. The long view, without the long meeting.
            </p>
            <p className="es-ad-sig">Fortiora · Applied AI, from the publisher of PrimeCrest</p>
            <ul className="es-ad-tenets">
              <li>
                <b>One board</b>
                <span>the whole business on a single page</span>
              </li>
              <li>
                <b>Every source cited</b>
                <span>each figure traceable to its origin</span>
              </li>
              <li>
                <b>Plain language</b>
                <span>ask the ledger; it answers</span>
              </li>
            </ul>
        </div>
          <div className="es-ad-foot-line">
            <span>PrimeCrest · The September Issue</span>
            <span>Advertisement · 11</span>
        </div>
        </div>
      </article>

      {/* 12 · Ad spread · right: the detail */}
      <article className="mag-page es es-oak-leaf" data-density="hard">
        <div className="es-well">
          <p className="es-ad-kicker">What the ledger holds</p>
          <h2 className="es-ad-head">Four entries, kept current.</h2>
          <ul className="es-ad-list">
            <li>
              <b>The board</b>
              <p>
                Revenue, retention and operations on one page, refreshed as the data lands and
                drillable to the row that moved it. The morning meeting starts answered.
              </p>
            </li>
            <li>
              <b>The forecast</b>
              <p>
                Demand, churn and cash projected from your own history, scored against what
                actually landed. The model earns its keep or says so.
              </p>
            </li>
            <li>
              <b>The question</b>
              <p>
                Ask in plain language, get the number with its source attached. No query language,
                no report queue, no waiting on the one analyst who knows where it lives.
              </p>
            </li>
            <li>
              <b>The provenance</b>
              <p>
                Every figure traceable to its origin. Decisions stay attached to the data that
                produced them, which is the whole point of keeping a record.
              </p>
            </li>
          </ul>
          <div className="es-ad-foot">
            <div>
              <div className="es-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
          </div>
        </div>
              <p className="es-ad-contact">
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="es-ad-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <div className="es-ad-foot-line" style={{ marginTop: 12 }}>
            <span>PrimeCrest · The September Issue</span>
            <span>Advertisement · 12</span>
        </div>
        </div>
      </article>

      {/* ============================================== 13 · BACK COVER */}
      <article className="mag-page es es-backcover" data-density="hard">
        <img
          className="es-back-img"
          src="/brand/backdrop-primecrest.jpg"
          alt=""
          style={{ filter: "saturate(0.95) contrast(1.02) brightness(1.12)" }}
        />
        <div className="es-back-grade" />
        <div className="es-well es-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="es-back-mark">
              <svg className="es-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f4efe6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#d99a3a" />
              </svg>
              <b className="es-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
        </div>
            <span className="es-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p className="es-back-line">
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
            <p className="es-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              Hello@thefortiora.com · <b>theprimecrest.com</b>
            </p>
            <div className="es-back-hair" />
            <p className="es-back-label">The September Issue · 2026</p>
          </div>
        </div>
      </article>
    </>
  );
}
