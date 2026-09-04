/* eslint-disable @next/next/no-img-element */
import { HouseAdSpread, IssueCover, IssueCredits, PhotoCopy } from "./IssueChrome";

const IMG = "/issues/foskaris";

const CREAM = "#f6f0e6";
const MAGENTA = "#e84393";
const CHARCOAL = "#1c1c1c";

export const FOSKARIS_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "The Opening" },
  { page: 4, label: "Contents" },
  { page: 5, label: "Five Thousand" },
  { page: 6, label: "Statement" },
  { page: 7, label: "Manifesto" },
  { page: 8, label: "Home Use" },
  { page: 10, label: "The Measure" },
  { page: 11, label: "Statement" },
  { page: 12, label: "The Horizon" },
  { page: 14, label: "Unstoppable" },
  { page: 15, label: "The Room" },
  { page: 17, label: "PrimeCrest" },
];

export function FoskarisPages() {
  return (
    <>
      <IssueCover
        img={`${IMG}/coverart.jpg`}
        alt="Penny Foskaris"
        objectPosition="top center"
        vol="Vol. VIII · The Vitality Issue · 2026"
        accent={MAGENTA}
        icon="ray"
        layout="hot"
        name="Penny Foskaris"
        role="Founder"
        place="Red Light Pro Devices & Foskaris Wellness · Anaheim Hills, California"
        teasers={[
          ["The room", "The wellness center she needed and could not find."],
          ["Home use", "The manufacturer said no. She found other engineers."],
        ]}
      />

      <IssueCredits
        accent={MAGENTA}
        groundClass="mag-dark mag-charcoal"
        subject="Penny Foskaris — Founder, Red Light Pro Devices & Foskaris Wellness, Anaheim Hills, California"
        words="From the interviews of Penny Foskaris. The library years, the unanswered tests, the clinic machine, and the home unit the first manufacturer would not build."
        volume="Vol. VIII · The Vitality Issue"
        note={
          <>
            <p>
              The Vitality Issue is Penny Foskaris: a teenager in a library because an aunt had
              Type 1 diabetes and another relative had heart disease; then two and a half years
              of dizzy spells, fatigue, and abdominal pain that no doctor could name. A holistic
              center. Within a week she felt better. She went back to school and opened the room
              she had needed.
            </p>
            <p>
              More than five thousand people have come through that method. Clients asked for the
              clinic light at home. The company behind the roughly $28,000 system said no. She
              found other engineers. If she would not use it in her own center, it would not
              carry her name. That is the company, and this is the issue.
            </p>
          </>
        }
      />

      {/* 03 Opener — dense two-col */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            The Opening
          </p>
          <h2 className="mag-h mag-h-sm">The room she could not find.</h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p>
              Penny Foskaris was a teenager in a library because an aunt had Type 1 diabetes and
              another relative had heart disease. She wanted to know if food could help. She did
              not yet know those hours would become a life.
            </p>
            <p className="mag-sub" style={{ color: MAGENTA }}>Two and a half years</p>
            <p>
              In her mid-thirties the question turned on her. Dizzy spells, chronic fatigue,
              continuous abdominal pain. Doctor to doctor. Test after test. No one could say what
              was wrong. It was expensive. It was exhausting.
            </p>
            <p className="mag-sub" style={{ color: MAGENTA }}>The room</p>
            <p>
              A holistic wellness center. Within a week she began to feel better. She went back to
              school. She opened Foskaris Wellness — the kind of place she had needed and could not
              find. People were not rushed out the door. She looked at the whole person.
            </p>
          </div>
          <div className="mag-qframe" style={{ color: MAGENTA }}>
            <p>Reveal. Restore. Reverse.</p>
          </div>
          <p className="mag-foot">The Vitality Issue · 03</p>
        </div>
      </article>

      {/* 04 Photo bleed */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/kitchen.jpg`}
          alt="Penny Foskaris in the kitchen"
          style={{ objectPosition: "center 22%" }}
        />
        <PhotoCopy kicker="The kitchen" title="The room she needed and could not find.">
          <p>
            Penny Foskaris was a teenager in a library because an aunt had unanswered tests. Years
            later she wanted a wellness room she could not find, then a clinic machine, then a
            unit a person could take home. Foskaris Wellness and Red Light Pro Devices, Anaheim
            Hills, California. More than five thousand people have come through that method.
          </p>
          <p>
            She approaches health like a researcher. A symptom is often the end result. Sleep
            first. Food. Whether a person is eating enough. Medications, stress, body composition,
            visceral fat. A conversation. A plan a person can actually follow. Then another layer
            if the body asks for it. If she would not use it, it does not carry her name.
          </p>
        </PhotoCopy>
      </article>

      {/* 05 Contents — magenta numbered 01–08 */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: MAGENTA }}>
            In this issue
          </p>
          <h2 className="mag-h" style={{ fontSize: 40, marginBottom: 8 }}>
            Contents.
          </h2>
          <ol className="mag-fosk-toc">
            <li>
              <b>01</b>
              <span>The Opening<small>The library, then two and a half years of tests nobody could read. She opened the room she could not find.</small></span>
              <em>03</em>
            </li>
            <li>
              <b>02</b>
              <span>Five Thousand<small>Sleep, food, stress, visceral fat. A conversation first. Then another layer if the body asks.</small></span>
              <em>06</em>
            </li>
            <li>
              <b>03</b>
              <span>The Sentence<small>Longevity is not simply how many years you live. If you cannot use them, that is not living.</small></span>
              <em>07</em>
            </li>
            <li>
              <b>04</b>
              <span>Manifesto<small>Reveal. Restore. Reverse.</small></span>
              <em>08</em>
            </li>
            <li>
              <b>05</b>
              <span>Home Use<small>The $28,000 clinic machine. A dozen home devices that did nothing. Then engineers who would build one she would use.</small></span>
              <em>09</em>
            </li>
            <li>
              <b>06</b>
              <span>The Measure<small>Not a ledger. A client who flew in twice a month. Remote work, and a rent-to-buy month in Anaheim Hills.</small></span>
              <em>11</em>
            </li>
            <li>
              <b>07</b>
              <span>The Horizon<small>Photobiomodulation still early. Athletic rooms, home recovery, a hub people can reach from anywhere.</small></span>
              <em>13</em>
            </li>
            <li>
              <b>08</b>
              <span>Unstoppable<small>The family restaurant. You will be married to it. A plan for year one and year five. Start with why.</small></span>
              <em>15</em>
            </li>
          </ol>
        </div>
      </article>

      {/* 06 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <img
            className="mag-fosk-inpage"
            src={`${IMG}/extract_p7_i0.jpg`}
            alt="Penny Foskaris"
            style={{ height: 248, objectPosition: "center 18%", marginBottom: 16 }}
          />
          <p className="mag-kicker" style={{ color: MAGENTA, marginBottom: 8 }}>
            Five Thousand
          </p>
          <h2 className="mag-h mag-h-sm" style={{ marginBottom: 12 }}>
            She looks at the whole picture.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p style={{ margin: "0 0 16px" }}>
              She approaches health like a researcher. A symptom is often the end result. Rather
              than chase it, she asks for a history — sleep, food, whether a person is eating
              enough, medications, stress, body composition, visceral fat.
            </p>
            <p style={{ margin: "0 0 16px" }}>
              Sleep first. If the body does not rest, it cannot repair. She has watched
              under-nourished clients start sleeping once the fuel was there. Everything, she
              says, is interconnected.
            </p>
            <p style={{ margin: 0 }}>
              She does not order every test on day one. A conversation. A plan a person can
              actually follow. Then another layer if the body asks for it. More than five thousand
              people have come through that method — less pain, less fat, better markers, a chance
              at vitality. The figure is not the point. The point is they were heard.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "12px 8px 0", color: CHARCOAL, fontSize: 28 }}>
            Longevity is not simply how many years you live.
          </blockquote>
          <p className="mag-foot">The Vitality Issue · 06</p>
        </div>
      </article>

      {/* 07 STATEMENT */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body mag-fill-page">
          <div className="mag-fosk-state">
            <p
              className="mag-kicker"
              style={{ color: MAGENTA, marginBottom: 28, letterSpacing: "0.28em" }}
            >
              On longevity
            </p>
            <p
              className="mag-display"
              style={{
                color: MAGENTA,
                fontSize: 56,
                lineHeight: 1.16,
                textAlign: "center",
                maxWidth: 680,
              }}
            >
              If you don&apos;t feel well enough to enjoy those years, that&apos;s not truly living.
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "rgba(246,240,230,0.7)",
                maxWidth: 480,
              }}
            >
              Five thousand people through the door. The years only count if they can be used.
            </p>
          </div>
        </div>
      </article>

      {/* 08 MANIFESTO */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body mag-fill-page">
          <p
            className="mag-kicker"
            style={{ color: MAGENTA, textAlign: "center", letterSpacing: "0.28em" }}
          >
            Manifesto
          </p>
          <div className="mag-fosk-mani">
            <p>Reveal. Restore. Reverse.</p>
            <p>A symptom is the end result.</p>
            <p>Look at the whole person.</p>
            <p>Do not rush them out the door.</p>
            <p>Everything is interconnected.</p>
            <p>Sleep first.</p>
            <p>If I would not use it, it does not carry my name.</p>
            <p>Start with why.</p>
          </div>
        </div>
      </article>

      {/* 09 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <img
            className="mag-fosk-inpage"
            src={`${IMG}/extract_p1_i0.jpg`}
            alt="Penny Foskaris"
            style={{ height: 248, objectPosition: "center 12%", marginBottom: 16 }}
          />
          <p className="mag-kicker" style={{ color: MAGENTA, marginBottom: 8 }}>
            Home Use
          </p>
          <h2 className="mag-h mag-h-sm" style={{ marginBottom: 12 }}>
            The manufacturer said no.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p style={{ margin: "0 0 16px" }}>
              Red Light Pro Devices was not a second brand in search of a market. Clients had
              used the professional system at Foskaris Wellness for about three years. They asked
              for something they could take home. She tested about a dozen devices. Wrap one
              around a knee and little happened. The clinic machine was another story.
            </p>
            <p style={{ margin: "0 0 16px" }}>
              The company behind the roughly $28,000 system was not interested in a smaller unit.
              She found engineers at another red-light firm. Months of LED layouts and power.
              The test was simple. If she would not use it in her own center, it would not carry
              her name.
            </p>
            <p style={{ margin: 0 }}>
              That gap — clinic quality, home format — is the company. Not a trend she decided
              to join. A rent-to-buy month in Anaheim Hills lets a person try the light at home
              and put the rental toward a purchase.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "12px 8px 0", color: CHARCOAL, fontSize: 28 }}>
            It had to be something I would actually use myself.
          </blockquote>
          <p className="mag-foot">The Vitality Issue · 09</p>
        </div>
      </article>

      {/* 10 Photo */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/portrait.jpg`}
          alt="Penny Foskaris"
          style={{ objectPosition: "center 18%" }}
        />
        <PhotoCopy kicker="Home use" title="The manufacturer said no.">
          <p>
            Clients had used the professional system at Foskaris Wellness for about three years.
            They asked for something they could take home. She tested about a dozen devices. Wrap
            one around a knee and little happened. The clinic machine was another story. The
            company behind the roughly $28,000 system was not interested in a smaller unit.
          </p>
          <p>
            She found engineers at another red-light firm. Months of LED layouts and power. The
            test was simple. If she would not use it in her own center, it would not carry her
            name. A rent-to-buy month in Anaheim Hills lets a person try the light at home and
            put the rental toward a purchase. She wants that model in offices across the United
            States. Same purpose as the wellness center: take down the barrier.
          </p>
        </PhotoCopy>
      </article>

      {/* 11 Feature */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <img
            className="mag-fosk-inpage"
            src={`${IMG}/portrait2.jpg`}
            alt="Penny Foskaris"
            style={{ height: 248, objectPosition: "center 18%", marginBottom: 16 }}
          />
          <p className="mag-kicker" style={{ color: MAGENTA, marginBottom: 8 }}>
            The Measure
          </p>
          <h2 className="mag-h mag-h-sm" style={{ marginBottom: 12 }}>
            Not a milestone. A place to be heard.
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense">
            <p style={{ margin: "0 0 16px" }}>
              What she is most proud of is not a figure on a ledger. It is a room people can
              enter when they do not feel like themselves, tell the story, and leave with a
              path. She knows the years of unanswered tests. She turned that stretch into less
              struggle for someone else.
            </p>
            <p style={{ margin: "0 0 16px" }}>
              One client used to fly in twice a month. The fare and the hours piled up. Remote
              work, testing, and devices shipped to the door changed the map. Someone should
              not have to live next to the office to get help.
            </p>
            <p style={{ margin: 0 }}>
              At the Red Light Pro Devices location in Anaheim Hills, a rent-to-buy month lets
              a person try the light at home and put the rental toward a purchase. She wants
              that model in offices across the United States. Same purpose as the wellness
              center: take down the barrier.
            </p>
          </div>
          <blockquote className="mag-pull" style={{ margin: "12px 8px 0", color: CHARCOAL, fontSize: 26 }}>
            Someone should not have to live next door to get help.
          </blockquote>
          <p className="mag-foot">The Vitality Issue · 11</p>
        </div>
      </article>

      {/* 12 STATEMENT 2 */}
      <article className="mag-page mag-pad mag-dark mag-charcoal">
        <div className="mag-body mag-fill-page">
          <div className="mag-fosk-state">
            <p
              className="mag-kicker"
              style={{ color: MAGENTA, marginBottom: 28, letterSpacing: "0.28em" }}
            >
              On setbacks
            </p>
            <p
              className="mag-display"
              style={{
                color: MAGENTA,
                fontSize: 56,
                lineHeight: 1.16,
                textAlign: "center",
                maxWidth: 680,
              }}
            >
              Setbacks can be the springboard for innovation.
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "rgba(246,240,230,0.7)",
                maxWidth: 480,
              }}
            >
              The manufacturer said no. She found other engineers. The light still carries her name.
            </p>
          </div>
        </div>
      </article>

      {/* 13 Outlook + darkband */}
      <article className="mag-page mag-pad mag-fosk mag-pb0">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: MAGENTA, marginBottom: 10 }}>
            The Horizon
          </p>
          <h2 className="mag-h" style={{ fontSize: 36, marginBottom: 16 }}>
            Still early days for the light.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 19, lineHeight: 1.85 }}>
            She thinks photobiomodulation is only beginning. More papers. More clinicians.
            She wants red light in high-school and college athletic rooms — not only after a
            sprain, but before the match. Recovery rooms at home, the way people now keep a
            gym. Cognitive research over the next decade. A hub of longevity information
            people can reach from anywhere: education, telehealth, remote testing.
          </p>
          <p className="mag-folio" style={{ fontSize: 19, lineHeight: 1.85 }}>
            Technology is a piece. The foundation is still nutrition, sleep, movement, stress,
            and what goes into the body every day. The point is not only more years. It is
            staying active enough to use them — ten, twenty, thirty years from now.
          </p>
          <p className="mag-folio" style={{ fontSize: 19, lineHeight: 1.85 }}>
            She is still early. The papers will keep coming. The rooms have to exist first.
          </p>
          <div className="mag-darkband" style={{ margin: "auto -58px 0", background: CHARCOAL, color: MAGENTA }}>
            Stay committed to the purpose. Stay flexible about the path.
          </div>
        </div>
      </article>

      {/* 14 Photo + bottom slab */}
      <article className="mag-page mag-bleed">
        <img
          className="mag-fill"
          src={`${IMG}/kitchen.jpg`}
          alt=""
          style={{ objectPosition: "center 12%" }}
        />
        <div className="mag-fosk-footslab">
          <p
            className="mag-kicker"
            style={{ color: MAGENTA, marginBottom: 10 }}
          >
            Foskaris Wellness
          </p>
          <p
            className="mag-display"
            style={{ color: CREAM, fontSize: 30, lineHeight: 1.15, maxWidth: 620 }}
          >
            A place where people weren&apos;t rushed out the door.
          </p>
        </div>
      </article>

      {/* 15 Close */}
      <article className="mag-page mag-pad mag-fosk">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: MAGENTA, marginBottom: 10 }}>
            Unstoppable
          </p>
          <h2 className="mag-h" style={{ fontSize: 36, marginBottom: 16 }}>
            Ask why. Then put a floor under it.
          </h2>
          <p className="mag-folio mag-dropcap" style={{ fontSize: 19, lineHeight: 1.85 }}>
            More than ten years in, she has had to pivot as markets moved and clients changed.
            Unstoppable, to her, is not a life without setbacks. It is learning, adapting, and
            finding another way. A strong vision gives direction. It should not freeze the
            route.
          </p>
          <p className="mag-folio" style={{ fontSize: 19, lineHeight: 1.85 }}>
            To women who want to build something: start with why. She came out of the family
            restaurant trade. People told her a restaurant was easy money. She told them they
            would be married to it. Passion keeps you in the room. A plan — costs, licenses,
            books, year one and year five — is what lets the thing last.
          </p>
          <p className="mag-folio" style={{ fontSize: 19, lineHeight: 1.85 }}>
            Stay committed to the purpose. Stay flexible about the path. The light was a no
            until it wasn&apos;t.
          </p>
          <blockquote className="mag-quote" style={{ margin: "8px 0 0", color: CHARCOAL, borderLeftColor: MAGENTA, fontSize: 26 }}>
            Your why has to be strong enough to carry you through the parts that aren&apos;t exciting.
          </blockquote>
        </div>
      </article>

      <HouseAdSpread
        variant="visual"
        accent={MAGENTA}
        kicker="House spread"
        headlineLead="The wellness center she needed"
        headlineHero="And could not find"
        tag="Vitality"
        foot="The Vitality Issue"
        photo={`${IMG}/kitchen.jpg`}
        photoAlt="The Foskaris kitchen"
        objectPosition="center 40%"
        caption="Home use · the unit the first manufacturer would not build"
        quote="The manufacturer said no. She found other engineers."
        sections={[
          {
            heading: "The library",
            body:
              "Penny Foskaris was a teenager in a library because an aunt had unanswered tests. The Vitality Issue starts there — not in a studio. Years later she wanted a wellness room she could not find, then a clinic machine, then a unit a person could take home. Red Light Pro Devices and Foskaris Wellness, Anaheim Hills, California.",
          },
          {
            heading: "Home use",
            body:
              "The first manufacturer would not build the home unit. She found other engineers. The manifesto pages in this edition are her list, not a brand deck rewritten for the flipbook. More than five thousand people through that method is a number she gave; we printed it.",
          },
          {
            heading: "This spread",
            body:
              "Dark left, the kitchen right. The type is tight on purpose — a different system from the whisky issue and the school issue. Scan the QR for theprimecrest.com.",
          },
        ]}
      />

      {/* 18 PrimeCrest back */}
      <article className="mag-page mag-bleed mag-dark mag-charcoal" data-density="hard">
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
                color: MAGENTA,
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
                color: "rgba(246,240,230,0.85)",
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
                color: MAGENTA,
              }}
            >
              The Vitality Issue · Vol. VIII
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
