/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. XI · No. 11
 * Dr. Geeta Grewal, Founder & CMD, 9 Muses Wellness.
 *
 * "Noir Atelier": a closed `gg-*` system. Near-black espresso grounds, gold
 * foil accents, warm cream type in EB Garamond at real weight, Montserrat
 * labels. Every photograph sits in a rectangular frame at its own pixel
 * ratio with a gold keyline; nothing is masked or cropped. The deco fan is
 * a line ornament only, and the face-zones plate is drawn in gold line.
 */

const IMG = "/issues/geeta";
const R23 = 1321 / 1980;
const R_CORRIDOR = 1320 / 1980;
const R_HANDS = 925 / 528;
const R_SFACE = 900 / 1125;

export const GEETA_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Credits" },
  { page: 2, label: "From the Editors" },
  { page: 3, label: "Contents" },
  { page: 5, label: "The Feature" },
  { page: 9, label: "The Zones" },
  { page: 10, label: "The Interview" },
  { page: 16, label: "The Record" },
  { page: 17, label: "Fortiora Clinic" },
  { page: 19, label: "Fortiora Ledger" },
  { page: 20, label: "Be Featured" },
  { page: 21, label: "Back Cover" },
];

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <div className="gg-folio">
      <p>
        <span>PrimeCrest · The November Issue</span>
        <span>{section}</span>
        <b>{page}</b>
      </p>
    </div>
  );
}

function Kicker({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="gg-kicker" style={style}>
      {children}
    </p>
  );
}

function Rule({ style }: { style?: CSSProperties }) {
  return <div className="gg-rule" style={style} aria-hidden />;
}

/** A photograph at its exact pixel ratio inside a gold keyline. Never cropped. */
function Plate({
  src,
  alt,
  w,
  ratio,
  style,
}: {
  src: string;
  alt: string;
  w: number;
  ratio: number;
  style?: CSSProperties;
}) {
  return (
    <div className="gg-plate" style={{ width: w, ...style }}>
      <img src={src} alt={alt} style={{ aspectRatio: ratio }} />
    </div>
  );
}

function Q({ n, children, size = 40 }: { n: string; children: ReactNode; size?: number }) {
  return (
    <div className="gg-q">
      <b>{n}</b>
      <h3 style={{ fontSize: size }}>{children}</h3>
    </div>
  );
}

/** Deco fan: a line ornament only, never over a photograph. */
function Fan({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={`gg-fan ${className ?? ""}`} viewBox="0 0 400 210" style={style} aria-hidden>
      {[190, 160, 130, 100].map((r, i) => (
        <path
          key={r}
          d={`M${200 - r} 205 A ${r} ${r} 0 0 1 ${200 + r} 205`}
          fill="none"
          stroke="#d4af6a"
          strokeWidth={i === 0 ? 2 : 1}
          strokeOpacity={i === 0 ? 0.9 : 0.55}
        />
      ))}
      {Array.from({ length: 13 }, (_, i) => {
        const a = Math.PI + (i * Math.PI) / 12;
        return (
          <line
            key={i}
            x1={(200 + 40 * Math.cos(a)).toFixed(1)}
            y1={(205 + 40 * Math.sin(a)).toFixed(1)}
            x2={(200 + 190 * Math.cos(a)).toFixed(1)}
            y2={(205 + 190 * Math.sin(a)).toFixed(1)}
            stroke="#d4af6a"
            strokeOpacity={0.5}
            strokeWidth={1}
          />
        );
      })}
      <path d="M160 205 A 40 40 0 0 1 240 205 Z" fill="#d4af6a" fillOpacity={0.9} />
    </svg>
  );
}

/** The face-zones plate in gold line on espresso. */
function FaceChart() {
  const ink = "#f3e9da";
  const gold = "#d4af6a";
  const zones: [number, number, string][] = [
    [260, 205, "1"],
    [148, 300, "2"],
    [372, 300, "2"],
    [190, 372, "3"],
    [330, 372, "3"],
    [165, 448, "4"],
    [355, 448, "4"],
    [200, 528, "5"],
    [320, 528, "5"],
    [260, 590, "6"],
  ];
  return (
    <svg className="gg-chart" viewBox="0 0 520 720" aria-label="A face read in thirds and zones">
      {Array.from({ length: 61 }, (_, i) => (
        <line
          key={i}
          x1={14}
          x2={i % 5 === 0 ? 34 : 24}
          y1={60 + i * 10}
          y2={60 + i * 10}
          stroke={gold}
          strokeWidth={i % 5 === 0 ? 1.4 : 0.8}
        />
      ))}
      <line x1={14} x2={14} y1={60} y2={660} stroke={gold} strokeWidth={1.4} />
      {(
        [
          [110, "TRICHION"],
          [270, "GLABELLA"],
          [440, "SUBNASALE"],
          [640, "MENTON"],
        ] as [number, string][]
      ).map(([y, t]) => (
        <g key={t}>
          <line x1={44} x2={476} y1={y} y2={y} stroke={gold} strokeWidth={0.9} strokeDasharray="3 5" />
          <text x={478} y={y - 6} fontSize={11} letterSpacing={2} fill={gold} textAnchor="end" fontFamily="var(--font-montserrat)" fontWeight={700}>
            {t}
          </text>
        </g>
      ))}
      {(
        [
          [110, 270, "I"],
          [270, 440, "II"],
          [440, 640, "III"],
        ] as [number, number, string][]
      ).map(([a, b, t]) => (
        <g key={t}>
          <line x1={502} x2={502} y1={a + 4} y2={b - 4} stroke={gold} strokeWidth={1.4} />
          <line x1={495} x2={509} y1={a + 4} y2={a + 4} stroke={gold} strokeWidth={1.4} />
          <line x1={495} x2={509} y1={b - 4} y2={b - 4} stroke={gold} strokeWidth={1.4} />
          <text x={490} y={(a + b) / 2 + 6} fontSize={18} fill={gold} textAnchor="end" fontFamily="var(--font-garamond)" fontWeight={700}>
            {t}
          </text>
        </g>
      ))}
      {[120, 190, 260, 330, 400].map((x) => (
        <line key={x} x1={x} x2={x} y1={250} y2={460} stroke={gold} strokeOpacity={0.6} strokeWidth={0.8} strokeDasharray="1 4" />
      ))}
      <path
        d="M260 92 C 370 92 430 170 432 290 C 434 380 420 450 392 520 C 360 590 312 640 260 642 C 208 640 160 590 128 520 C 100 450 86 380 88 290 C 90 170 150 92 260 92 Z"
        fill="rgba(212,175,106,0.06)"
        stroke={gold}
        strokeWidth={1.8}
      />
      <path d="M90 300 C 66 296 62 360 72 392 C 78 410 92 412 100 404" fill="none" stroke={gold} strokeWidth={1.4} />
      <path d="M430 300 C 454 296 458 360 448 392 C 442 410 428 412 420 404" fill="none" stroke={gold} strokeWidth={1.4} />
      <path d="M150 262 C 178 244 212 244 236 256" fill="none" stroke={ink} strokeWidth={1.5} />
      <path d="M284 256 C 308 244 342 244 370 262" fill="none" stroke={ink} strokeWidth={1.5} />
      <path d="M160 300 C 178 284 214 284 230 300 C 214 312 178 312 160 300 Z" fill="none" stroke={ink} strokeWidth={1.3} />
      <path d="M290 300 C 306 284 342 284 360 300 C 342 312 306 312 290 300 Z" fill="none" stroke={ink} strokeWidth={1.3} />
      <circle cx={195} cy={299} r={6} fill="none" stroke={ink} strokeWidth={1.2} />
      <circle cx={325} cy={299} r={6} fill="none" stroke={ink} strokeWidth={1.2} />
      <path d="M252 290 C 250 340 240 400 236 420 C 244 436 276 436 284 420 C 280 400 270 340 268 290" fill="none" stroke={ink} strokeWidth={1.2} />
      <path d="M210 500 C 230 488 250 492 260 498 C 270 492 290 488 310 500" fill="none" stroke={ink} strokeWidth={1.5} />
      <path d="M210 500 C 236 524 284 524 310 500" fill="none" stroke={ink} strokeWidth={1.3} />
      <line x1={260} x2={260} y1={70} y2={664} stroke={gold} strokeWidth={1} />
      {zones.map(([x, y, t], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={14} fill="#120c09" stroke={gold} strokeWidth={1.8} />
          <text x={x} y={y + 5} fontSize={14} fill={gold} textAnchor="middle" fontFamily="var(--font-montserrat)" fontWeight={700}>
            {t}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Two-page ad art: a deco fan centred on the gutter, line only. */
function SpreadFan({ shift }: { shift: number }) {
  return (
    <svg className="gg-ad-fan" viewBox="0 0 1680 1120" style={{ left: shift }} aria-hidden preserveAspectRatio="none">
      {[620, 560, 500, 440].map((r, i) => (
        <path
          key={r}
          d={`M${840 - r} 1120 A ${r} ${r} 0 0 1 ${840 + r} 1120`}
          fill="none"
          stroke="#d4af6a"
          strokeOpacity={i === 0 ? 0.55 : 0.22}
          strokeWidth={i === 0 ? 2 : 1}
        />
      ))}
      {Array.from({ length: 25 }, (_, i) => {
        const a = Math.PI + (i * Math.PI) / 24;
        return (
          <line
            key={i}
            x1={(840 + 120 * Math.cos(a)).toFixed(1)}
            y1={(1120 + 120 * Math.sin(a)).toFixed(1)}
            x2={(840 + 620 * Math.cos(a)).toFixed(1)}
            y2={(1120 + 620 * Math.sin(a)).toFixed(1)}
            stroke="#d4af6a"
            strokeOpacity={0.16}
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
}

function Lockup({ product, dark = true }: { product: string; dark?: boolean }) {
  return (
    <div className={`gg-lockup${dark ? "" : " is-light"}`}>
      <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
      <div>
        <b>Fortiora</b>
        <span>{product}</span>
      </div>
    </div>
  );
}

export function GeetaPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page gg gg-cover" data-density="hard">
        <div className="gg-cv-ground" />
        <Fan className="gg-cv-fan" />
        <header className="gg-cv-mast">
          <PrimeCrestMast tone="dark" tagline={false} hero />
          <p>
            <span>November 2026 · Vol. XI · No. 11</span>
            <span>The November Issue</span>
          </p>
        </header>

        <div className="gg-cv-frame" aria-hidden />
        <img
          className="gg-cv-photo"
          src={`${IMG}/cover-hero.jpg`}
          alt="Dr. Geeta Grewal, Founder & CMD, 9 Muses Wellness"
          fetchPriority="high"
        />
        <div className="gg-cv-shade" aria-hidden />

        <div className="gg-cv-roundel" aria-hidden>
          <svg viewBox="0 0 160 160">
            <defs>
              <path id="gg-ring" d="M80 80 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
              <linearGradient id="gg-foil" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f0d79c" />
                <stop offset="0.5" stopColor="#d4af6a" />
                <stop offset="1" stopColor="#9c7638" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="78" fill="url(#gg-foil)" />
            <circle cx="80" cy="80" r="71" fill="none" stroke="#120c09" strokeWidth="1.2" />
            <circle cx="80" cy="80" r="43" fill="none" stroke="#120c09" strokeWidth="1.2" />
            <text fontSize="11" letterSpacing="2.4" fill="#120c09" fontFamily="var(--font-montserrat)" fontWeight="700">
              <textPath href="#gg-ring">“INDIA&apos;S TOP AESTHETIC DOCTOR” · VOL. XI · </textPath>
            </text>
            <text x="80" y="74" textAnchor="middle" fontSize="12" letterSpacing="3" fill="#120c09" fontFamily="var(--font-montserrat)" fontWeight="700">
              NO.
            </text>
            <text x="80" y="108" textAnchor="middle" fontSize="42" fill="#120c09" fontFamily="var(--font-garamond)" fontWeight="700">
              11
            </text>
          </svg>
        </div>

        <div className="gg-cv-series">
          <p className="gg-cv-top">
            <span>Top</span>
            <b>10</b>
          </p>
          <p className="gg-cv-big">Unstoppable</p>
          <p className="gg-cv-mid">Business Leaders</p>
          <p className="gg-cv-sub">Making a Difference in 2026</p>
        </div>

        <p className="gg-cv-line">&ldquo;We are not in vanity business, we are in repair.&rdquo;</p>

        <div className="gg-cv-teasers">
          <div>
            <b>p. 05 · The theatre</b>
            <span>Surgical oncology at Apollo, then a clinic of her own.</span>
          </div>
          <div>
            <b>p. 09 · Zonal disconnect</b>
            <span>Why one face can be several ages at once.</span>
          </div>
          <div>
            <b>p. 14 · 9M Skincare</b>
            <span>A gel that began with patients calling back.</span>
          </div>
        </div>

        <div className="gg-cv-plate">
          <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
        </div>

        <div className="gg-cv-name">
          <p className="gg-cv-role">
            Founder &amp; CMD · <b>9 Muses Wellness</b>
          </p>
          <em>Dr. Geeta</em>
          <strong>GREWAL</strong>
          <p className="gg-cv-tag">
            Advancing Aesthetic Medicine Through Science, Safety &amp; Natural-Looking Results
          </p>
        </div>
      </article>

      {/* ============================================== 01 · CREDITS */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well gg-credits">
          <Fan className="gg-credits-fan" />
          <Kicker>PrimeCrest · The November Issue · Vol. XI</Kicker>
          <h2 className="gg-credits-h">Credits.</h2>
          <Rule />
          <dl className="gg-credits-list">
            {novemberCredits("Dr. Geeta Grewal").map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="gg-credits-note">
            The interview is printed as Dr. Grewal answered it, in her own words and in the order
            the questions were asked. Where she answered three questions together, it is printed
            together.
          </p>
          <div className="gg-credits-foot">
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
            <div>
              <p className="gg-imprint">
                <b>Fortiora Group LLC</b>
                <br />
                30 N Gould St Ste R, Sheridan, WY 82801, United States
                <br />
                Hello@thefortiora.com · thefortiora.com
              </p>
              <p className="gg-rights">
                © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may
                be reproduced or transmitted in any form without prior written permission from the
                publisher.
              </p>
            </div>
          </div>
          <Folio page="01" section="Credits" />
        </div>
      </article>

      {/* ============================================== 02 · FROM THE EDITORS */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>From the Editors</Kicker>
          <h2 className="gg-head" style={{ fontSize: 72 }}>
            She calls it <em>repair.</em>
          </h2>
          <Rule style={{ margin: "16px 0 22px" }} />
          <div className="gg-body gg-drop gg-letter" style={{ fontSize: 18.6, lineHeight: 1.58 }}>
            <div className="gg-letter-side">
              <Plate src={`${IMG}/portrait.jpg`} alt="Dr. Geeta Grewal" w={268} ratio={R23} />
              <p className="gg-cap">Dr. Geeta Grewal, Founder &amp; CMD, 9 Muses Wellness.</p>
            </div>
            <p>
              Dr. Geeta Grewal did not come to aesthetic medicine the usual way. She came from
              surgical oncology at Indraprastha Apollo in Delhi, where the work was rebuilding
              facial and structural tissue after radical cancer resections. She learned the face
              from its deep layers out: the planes, the bone, the vessels a surgeon has to stay
              clear of.
            </p>
            <p>
              Her patients moved her. As minimally invasive procedures caught on, oncology
              patients and their families asked whether she would do fillers and botulinum toxin.
              She said yes and brought the hospital with her. To its safety and its standards she
              added what a hospital rarely gives anyone, privacy and the care of luxury
              hospitality.
            </p>
            <p>
              9 Muses Wellness opened in late 2019, right before COVID. Lockdowns followed, and in
              2022 a fire in the building. The move to Golf Course Road, she says, was the biggest
              catalyst for growth they have had.
            </p>
            <p>
              The word she keeps coming back to is repair. She looks for the parts of a face that
              have aged faster than the rest and brings them back into line. She teaches younger
              doctors to diagnose first, the way they would for a diabetic.
            </p>
            <p>Her answers follow in full from page ten.</p>
          </div>
          <div className="gg-panel gg-letter-end">
            <p>&ldquo;Every face has a beauty hidden in it.&rdquo;</p>
            <small>The Editors · PrimeCrest · The November Issue</small>
          </div>
          <Folio page="02" section="From the Editors" />
        </div>
      </article>

      {/* ============================================== 03 · CONTENTS PHOTO */}
      <article className="mag-page gg gg-dark">
        <Plate
          src={`${IMG}/suit.jpg`}
          alt="Dr. Geeta Grewal in a white suit"
          w={694}
          ratio={R23}
          style={{ position: "absolute", left: 40, top: 40, zIndex: 2 }}
        />
        <div className="gg-cstrip">
          <p className="gg-spine">Contents</p>
          <b>XI</b>
        </div>
      </article>

      {/* ============================================== 04 · CONTENTS INDEX */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The November Issue · Vol. XI · No. 11</Kicker>
          <h2 className="gg-head" style={{ fontSize: 92, marginTop: 2 }}>
            <em>Contents.</em>
          </h2>
          <Rule style={{ margin: "12px 0 4px" }} />
          <ol className="gg-toc">
            {[
              ["02", "From the Editors", "She calls it repair.", "The surgeon who came to aesthetics because her patients asked."],
              ["05", "The Feature", "The face, learned from the inside.", "Apollo, a clinic opened right before COVID, a fire, and Golf Course Road."],
              ["09", "The Zones", "One face, several ages.", "Zonal disconnect, and why she treats it as a repair job."],
              ["10", "The Interview", "In her words.", "Eight questions, answered in six parts and printed whole."],
              ["16", "The Record", "From oncology to 9M.", "The years and places, in order."],
              ["17", "Advertisement", "Fortiora Clinic.", "The front desk that answers while you operate."],
              ["19", "Advertisement", "Fortiora Ledger.", "Month-end, closed in order."],
              ["20", "PrimeCrest", "Be featured.", "The desk is open for the next edition."],
            ].map(([n, k, h, d]) => (
              <li key={n}>
                <b>{n}</b>
                <div>
                  <span>{k}</span>
                  <h4>{h}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="gg-goldband">
            <p>&ldquo;Self-care is the antidote to depression and anxiety.&rdquo;</p>
            <small>Dr. Geeta Grewal · page 15</small>
          </div>
          <Folio page="04" section="Contents" />
        </div>
      </article>

      {/* ============================================== 05 · OPENER PHOTO */}
      <article className="mag-page gg gg-dark">
        <img
          className="gg-open-photo"
          src={`${IMG}/corridor.jpg`}
          alt="Dr. Geeta Grewal standing in an arched corridor"
          style={{ aspectRatio: R_CORRIDOR }}
        />
        <div className="gg-open-strip">
          <p className="gg-spine">Dr. Geeta Grewal</p>
          <b>05</b>
        </div>
      </article>

      {/* ============================================== 06 · OPENER TEXT */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Feature · Aesthetic Medicine &amp; Wellness</Kicker>
          <h2 className="gg-head" style={{ fontSize: 70, marginTop: 10 }}>
            The face, learned <em>from the inside.</em>
          </h2>
          <p className="gg-dek">
            Dr. Geeta Grewal trained as a surgical oncologist. The clinic she runs now on Golf
            Course Road still works like an operating theatre with better chairs.
          </p>
          <Rule style={{ margin: "18px 0 20px" }} />
          <div className="gg-body gg-cols gg-drop" style={{ fontSize: 17.6, lineHeight: 1.56, flex: "0 0 auto" }}>
            <p>
              The training happened in theatre. At Indraprastha Apollo in Delhi, Dr. Geeta Grewal
              worked in surgical oncology, and the cases were not small ones: radical cancer
              resections, after which the facial and structural tissue had to be built back. The
              work went deep. She learned the face plane by plane, bone first, and she learned
              where the vessels ran because a surgeon has to.
            </p>
            <p>
              That is not how most people arrive in aesthetics. She is blunt about the
              difference. A three-dimensional sense of facial planes, bone structure and vascular
              safety is, in her words, knowledge &ldquo;you simply cannot get from superficial
              cosmetic training alone.&rdquo;
            </p>
            <p>
              Her patients pushed her over. As minimally invasive procedures picked up, oncology
              patients and their families started asking whether she could do fillers and
              botulinum toxin. She saw a way to bring surgical rigor to non-surgical work. She also
              saw a gap. Hospitals had the safety and the medical standards. Luxury hospitality had
              the privacy and the care. She wanted to bridge the two.
            </p>
            <p>
              9 Muses Wellness launched in late 2019, right before COVID. There were lockdowns. In
              2022 there was a fire in the building. She files both under resilience and moves on.
              The move to Golf Course Road turned out to be, as she puts it, the biggest catalyst
              for growth.
            </p>
          </div>
          <div className="gg-goldband is-grow">
            <p>Knowledge that you simply cannot get from superficial cosmetic training alone.</p>
            <small>Dr. Geeta Grewal, on surgical oncology</small>
          </div>
          <Folio page="06" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 07 · FEATURE CONT. (light) */}
      <article className="mag-page gg gg-light">
        <div className="gg-well">
          <Kicker>The Feature · Continued</Kicker>
          <h2 className="gg-head" style={{ fontSize: 62, marginTop: 8 }}>
            Not wrinkles. <em>Architecture.</em>
          </h2>
          <Rule style={{ margin: "14px 0 18px" }} />
          <div className="gg-body gg-cols" style={{ fontSize: 18.4, lineHeight: 1.56, flex: "0 0 auto" }}>
            <p>
              She has little patience for the idea that the job is filling wrinkles. The job, as
              she describes it, is restoring structural balance and the facial architecture
              underneath, so that what follows is subtle and reads as natural rejuvenation.
            </p>
            <p>
              Then there is the genome. Aging, she says, runs in a pattern. Put a mother and
              daughter side by side and the daughter will begin to show, in her thirties, the
              telltale signs of how her mother aged. Her case to patients is that repair changes the
              trajectory. The face does not have to go the way the pattern says. It can look
              pleasant to its age.
            </p>
            <p>
              Safety is where the surgeon shows. When she injects, she watches the patient as
              closely as the needle: how comfortable they are, what they tell her in real time. She
              reads all of it as information about whether she is in a safe zone or near a risky
              one.
            </p>
            <p>
              Younger doctors came to her after seeing her results, and she trains them. Her first
              lesson is the one any physician knows. Each diabetic, each hypertensive, has a reason
              for the disease. Each face has its own aesthetic diagnosis. Find it, then plan.
            </p>
          </div>
          <figure className="gg-fig">
            <Plate src={`${IMG}/desk-hands.jpg`} alt="Dr. Grewal writing at her desk" w={712} ratio={R_HANDS} />
            <figcaption>
              <b>Notes first.</b> &ldquo;Diagnosis is a key to a successful result.&rdquo;
            </figcaption>
          </figure>
          <Folio page="07" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 08 · DESK PLATE */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well gg-center">
          <Kicker style={{ marginBottom: 20 }}>The Feature · At the desk</Kicker>
          <Plate src={`${IMG}/desk.jpg`} alt="Dr. Geeta Grewal at her desk" w={552} ratio={R23} />
          <div className="gg-darkquote">
            <p>
              &ldquo;We are doctors, we are healers, and we should align with the values of
              healers and care.&rdquo;
            </p>
            <small>Dr. Geeta Grewal</small>
          </div>
          <Folio page="08" section="The Feature" />
        </div>
      </article>

      {/* ============================================== 09 · THE ZONES */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Zones · A Plate</Kicker>
          <h2 className="gg-head" style={{ fontSize: 66, marginTop: 6 }}>
            One face, <em>several ages.</em>
          </h2>
          <Rule style={{ margin: "14px 0 12px" }} />
          <div className="gg-zones">
            <div className="gg-zones-chart">
              <FaceChart />
              <p className="gg-cap">Plate: the face read in thirds and zones. Illustration, PrimeCrest.</p>
            </div>
            <ol className="gg-zones-notes">
              <li>
                <b>01 · Diagnose</b>
                <p>&ldquo;Each face is unique, each patient has a unique diagnosis of aesthetic.&rdquo;</p>
              </li>
              <li>
                <b>02 · Find the weak zones</b>
                <p>
                  Certain zones, she says, still look like they are in their twenties. Others have
                  advanced. Genetics decides which go first.
                </p>
              </li>
              <li>
                <b>03 · Name the problem</b>
                <p>
                  When zones fall out of step she calls it zonal disconnect, one of the primary
                  causes of an unnatural result.
                </p>
              </li>
              <li>
                <b>04 · Bring them in line</b>
                <p>
                  Catch the weaker zones up to the best ones. Repair the broken ones until they blend
                  with the healthy, with no gaps.
                </p>
              </li>
            </ol>
          </div>
          <div className="gg-goldband is-grow">
            <p>&ldquo;Balance &amp; Harmony is perceived as beauty.&rdquo;</p>
            <small>Dr. Geeta Grewal</small>
          </div>
          <Folio page="09" section="The Zones" />
        </div>
      </article>

      {/* ============================================== 10 · Q1 */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Interview · In Her Words</Kicker>
          <Q n="01" size={44}>
            Your Journey into Aesthetic Medicine
          </Q>
          <Rule style={{ margin: "14px 0 16px" }} />
          <div className="gg-body gg-cols gg-ans" style={{ fontSize: 17.6, lineHeight: 1.54, flex: "0 0 auto" }}>
            <p>
              My background isn&apos;t typical for aesthetic medicine. I started in surgical oncology
              at Indraprastha Apollo in Delhi, reconstructing facial and structural tissue after
              radical cancer resections. Operating in deep tissue layers gave me a direct, 3D
              understanding of facial planes, bone structure, and vascular safety—knowledge that
              you simply cannot get from superficial cosmetic training alone.
            </p>
            <p>
              <strong>Responding to Patient Demand:</strong> As minimally invasive procedures picked
              up, oncology patients and their families began asking if I could perform fillers and
              botulinum toxin. I saw an opportunity to bring surgical rigor to non-surgical
              enhancements.
            </p>
            <p>
              <strong>Artistic Facial Balancing:</strong> Non-surgical aesthetics isn&apos;t about
              filling wrinkles; it&apos;s about restoring structural balance and underlying facial
              architecture to create subtle, natural rejuvenation.
            </p>
            <p>
              I wanted to bridge two worlds: the safety and medical standards of a hospital, and
              the privacy and care of luxury hospitality. We launched in late 2019, right before
              COVID. Navigating lockdowns and a building fire in 2022 taught us resilience. Moving
              to Golf Course Road turned out to be our biggest catalyst for growth.
            </p>
          </div>
          <div className="gg-q1-band">
            <Plate src={`${IMG}/portrait.jpg`} alt="Dr. Geeta Grewal" w={250} ratio={R23} />
            <div className="gg-panel gg-q1-pull">
              <p>&ldquo;I saw an opportunity to bring surgical rigor to non-surgical enhancements.&rdquo;</p>
              <small>Dr. Geeta Grewal · Founder &amp; CMD, 9 Muses Wellness</small>
            </div>
          </div>
          <Folio page="10" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 11 · Q2–4, PART 1 */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Interview · Questions 02 – 04, answered together</Kicker>
          <ol className="gg-qstack">
            <li>
              <b>02</b>Your Philosophy of Beauty and Facial Aesthetics?
            </li>
            <li>
              <b>03</b>Your Approach to Patient Care and Safe Treatments?
            </li>
            <li>
              <b>04</b>Your Work in Global Facial Anti-Aging Treatments?
            </li>
          </ol>
          <Rule style={{ margin: "16px 0 18px" }} />
          <div className="gg-rail-row">
            <div className="gg-body gg-ans gg-drop" style={{ fontSize: 21.2, lineHeight: 1.66 }}>
              <p className="gg-part">Part one</p>
              <p>
                My philosophy of beauty and facial aesthetic is maintaining the characteristic of
                that patient&apos;s individual face. Each face is unique. There is no second copy of
                that particular face, and every face has a beauty hidden in it. I approach
                aesthetic treatment to repair. I do repair work. I identify the weak zones on the
                face or the broken zones as we age. The aging occurs in a pattern that runs in our
                genome. It&apos;s a genetic pattern of aging. Mother, daughter, duo, if you see, the
                daughter will start the telltale signs of how the mother has aged in her thirties.
                So I tell them that if you repair, you will change the trajectory of your aging
                pattern and you will not look in a certain way, rather you will look pleasant to
                that age. So my aim is not to amplify anything, but my aim is to repair the aging
                damage that has happened on the face. And that&apos;s how I try to restore the
                beauty because every face has different zones and certain zones as per their
                genetic makeup of the individual age way faster compared to other zones. So I try
                and repair those.
              </p>
            </div>
            <div className="gg-rail">
              <Plate src={`${IMG}/shelves-face.jpg`} alt="Dr. Geeta Grewal" w={236} ratio={R_SFACE} />
              <p className="gg-rail-pull">&ldquo;My aim is not to amplify anything.&rdquo;</p>
              <Fan className="gg-rail-fan" />
            </div>
          </div>
          <Folio page="11" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 12 · Q2–4, PART 2 (light) */}
      <article className="mag-page gg gg-light">
        <div className="gg-well">
          <Kicker>The Interview · Questions 02 – 04, continued</Kicker>
          <Q n="02–04" size={50}>
            Natural, safe, <em>in sync.</em>
          </Q>
          <Rule style={{ margin: "14px 0 18px" }} />
          <div className="gg-rail-row is-flip">
            <div className="gg-rail">
              <Plate src={`${IMG}/standing.jpg`} alt="Dr. Geeta Grewal" w={236} ratio={R23} />
              <p className="gg-rail-pull">&ldquo;Balance &amp; Harmony is perceived as beauty.&rdquo;</p>
            </div>
            <div className="gg-body gg-ans" style={{ fontSize: 19.6, lineHeight: 1.6 }}>
              <p className="gg-part">Part two</p>
              <p>
                Natural looking is not trying to change anything, but trying to catch up on the
                weaker zones to match it up to the best zones on the face and repair the broken zones
                and get them to blend with the healthy zones and not have gaps. What I mean by that
                is that certain zones on the face will still look in their twenties, whereas other
                zones might have advanced due to aging. And I want all of them to be blending and to
                be in a particular age zone, not in different zones on an individual face.
              </p>
              <p>
                One of the primary causes of an unnatural aesthetic result is zonal disconnect, my
                goal is to get zones in sync with each other, this gives balance to face. Balance
                &amp; Harmony is perceived as beauty.
              </p>
              <p>
                I educate my patients with above insights, they trust my knowledge beautiful results
                after treatment reinforces that trust further.
              </p>
            </div>
          </div>
          <div className="gg-panel is-ink gg-bigquote">
            <p>
              &ldquo;When I do injections, I am fully aligned with my patient&apos;s real-time
              feedback, I completely monitor how comfortable they are during the procedure. That
              helps me get insight into being in a safe zone or into any risky areas, so that helps me
              to deliver results with safety&rdquo;
            </p>
            <small>Dr. Geeta Grewal · from her answer</small>
          </div>
          <Folio page="12" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 13 · Q5 */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Interview · In Her Words</Kicker>
          <Q n="05" size={40}>
            Building Expertise and Training Other Practitioners
          </Q>
          <Rule style={{ margin: "14px 0 18px" }} />
          <div className="gg-rail-row">
            <div className="gg-body gg-ans gg-drop" style={{ fontSize: 19.8, lineHeight: 1.62 }}>
              <p>
                Practitioners, young doctors approached me to get trained with seeing the results
                that I was delivering, and that&apos;s how they just reached out and I was willing to
                train them impart with my insights and my knowledge.
              </p>
              <p>
                <strong>Skill,</strong> I think delivering results with complete safety, that skill
                they must have and overcome the fears that they have for any complications.
              </p>
              <p>
                <strong>Values,</strong> I believe we are not in vanity business, we are in repair, we
                are doctors, we are healers, and we should align with the values of healers and care.
              </p>
              <p>
                <strong>And practical lessons</strong> are learn to diagnose as any medical practice.
                Diagnosis is a key to a successful result. Learn aesthetic diagnosis and how to reach
                that diagnosis and design treatment accordingly because each face is unique, each
                patient has a unique diagnosis of aesthetic. Like each diabetic or a hypertensive has
                a unique reason of the disease, so identify the reason, identify the diagnosis and
                plan accordingly. That&apos;s most essential
              </p>
            </div>
            <div className="gg-rail">
              <Plate src={`${IMG}/suit.jpg`} alt="Dr. Geeta Grewal" w={236} ratio={R23} />
              <p className="gg-rail-pull">&ldquo;Diagnosis is a key to a successful result.&rdquo;</p>
            </div>
          </div>
          <div className="gg-trio">
            <div>
              <b>Skill</b>
              <span>Results with complete safety</span>
            </div>
            <div>
              <b>Values</b>
              <span>Healers, not vanity</span>
            </div>
            <div>
              <b>Practice</b>
              <span>Diagnose, then design</span>
            </div>
          </div>
          <Folio page="13" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 14 · Q6 */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Interview · In Her Words</Kicker>
          <Q n="06" size={50}>
            The Story Behind <em>9M Skincare</em>
          </Q>
          <Rule style={{ margin: "14px 0 18px" }} />
          <div className="gg-rail-row is-flip" style={{ gridTemplateColumns: "320px 1fr" }}>
            <div className="gg-rail">
              <Plate src={`${IMG}/shelves.jpg`} alt="Dr. Geeta Grewal beside shelves of skincare" w={296} ratio={R_CORRIDOR} />
              <p className="gg-rail-pull">
                &ldquo;If the skin is well-hydrated &hellip; it&apos;s fully equipped to take care of
                itself.&rdquo;
              </p>
            </div>
            <div className="gg-body gg-ans gg-drop" style={{ fontSize: 20.6, lineHeight: 1.64 }}>
              <p>
                After procedures, the skin tends to need more hydration, and though there were many
                post-procedure creams available, every time after the procedure, patients used to
                give a callback that they&apos;re having issues. So, I understood that the hydration
                level is not optimum, that I need to have a moisturizer and a soothing ingredient that
                helps the skin in better recovery.
              </p>
              <p>
                So, I started doing research on getting a product that hits the bullseye and the
                patient doesn&apos;t get in trouble on the next day. That&apos;s how we came up with the
                day and night moisture surge and the ultra-hydrating soothing gel so that the
                inflammation and the dehydration in the skin can be taken care of.
              </p>
              <p>
                My core belief in skincare is a best hydration or moisturizer. If the skin is
                well-hydrated, it can, it&apos;s fully equipped to take care of itself. So, most of
                the products are designed around that.
              </p>
            </div>
          </div>
          <div className="gg-trio">
            <div>
              <b>Day &amp; night</b>
              <span>Moisture surge</span>
            </div>
            <div>
              <b>Ultra-hydrating</b>
              <span>Soothing gel</span>
            </div>
            <div>
              <b>The belief</b>
              <span>Hydration first</span>
            </div>
          </div>
          <Folio page="14" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 15 · Q7 + Q8 (light) */}
      <article className="mag-page gg gg-light">
        <div className="gg-well">
          <Kicker>The Interview · In Her Words</Kicker>
          <Q n="07" size={34}>
            Professional Recognition, Media Features, and Your Impact
          </Q>
          <div className="gg-body gg-ans gg-cols" style={{ fontSize: 19, lineHeight: 1.56, marginTop: 14, flex: "0 0 auto" }}>
            <p>
              Validation from the media houses and public validation kind of helps in strengthening
              your belief in yourself. I think that&apos;s how probably it would have helped me. And
              aesthetic medicine, I think should come out of vanity and it should be seen as a
              repair, repair before the disease hits you. And skin care choices and beauty choices
              should be without any guilt because I feel self-care is the antidote to depression and
              anxiety. People need to be responsible towards themselves because you are the most
              essential person in your own world. So, self-care comes starts with your skin care,
              with your care for yourself, and that is how I think it should be
            </p>
          </div>
          <Rule style={{ margin: "18px 0 16px" }} />
          <Q n="08" size={34}>
            Your Vision for the Future of Aesthetic Medicine
          </Q>
          <div className="gg-body gg-ans gg-cols" style={{ fontSize: 19, lineHeight: 1.56, marginTop: 14, flex: "0 0 auto" }}>
            <p>
              My ambition for 9M Clinics and 9M Skin Care would be to serve more and more people
              better and in best possible capacity and make the work more affordable, deliver more
              results in less spent, share my knowledge with the upcoming doctors, educate them about
              the field, future advances. I would be looking forward to latest things in pigmentation
              and hair care. And I want to build people&apos;s trust in the field, see it more as a
              repair, not as vanity. I&apos;ve seen patients going in a guilt trip on self-care,
              especially in India. I want them to understand self-care is the most essential,
              especially in today&apos;s times
            </p>
          </div>
          <div className="gg-panel is-ink gg-closer">
            <p>&ldquo;You are the most essential person in your own world.&rdquo;</p>
            <small>Dr. Geeta Grewal</small>
          </div>
          <Folio page="15" section="The Interview" />
        </div>
      </article>

      {/* ============================================== 16 · THE RECORD */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well">
          <Kicker>The Record</Kicker>
          <h2 className="gg-head" style={{ fontSize: 66, marginTop: 6 }}>
            From oncology <em>to 9M.</em>
          </h2>
          <Rule style={{ margin: "14px 0 8px" }} />
          <ol className="gg-record">
            {[
              ["Surgery", "Indraprastha Apollo, Delhi", "Surgical oncology. Reconstructing facial and structural tissue after radical cancer resections."],
              ["The turn", "Patients ask", "Oncology patients and their families ask for fillers and botulinum toxin."],
              ["2019", "9 Muses Wellness", "Launched in late 2019, right before COVID. Hospital standards, hospitality privacy."],
              ["COVID", "Lockdowns", "The clinic's first year runs straight into them."],
              ["2022", "A building fire", "In her words, it taught them resilience."],
              ["Golf Course Rd", "The move", "Their biggest catalyst for growth."],
              ["9M Skincare", "Two products", "The day and night moisture surge, and the ultra-hydrating soothing gel."],
              ["Teaching", "Younger doctors", "Trained in safety, healers' values and aesthetic diagnosis."],
              ["Next", "9M Clinics & 9M Skin Care", "More people, more affordable work, pigmentation and hair care."],
            ].map(([k, h, d]) => (
              <li key={k}>
                <b>{k}</b>
                <i aria-hidden />
                <div>
                  <h4>{h}</h4>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="gg-record-foot">
            <div>
              <span>Title</span>
              <b>Founder &amp; CMD, 9 Muses Wellness</b>
            </div>
            <div>
              <span>As she is titled</span>
              <b>India&apos;s Top Aesthetic Doctor</b>
            </div>
          </div>
          <Folio page="16" section="The Record" />
        </div>
      </article>

      {/* ============================================== 17 · AD · FORTIORA CLINIC (L) */}
      <article className="mag-page gg gg-dark" data-density="hard">
        <SpreadFan shift={0} />
        <div className="gg-well gg-ad-well">
          <div className="gg-ad-top">
            <Kicker>Advertisement · Fortiora Group</Kicker>
            <Lockup product="Clinic" />
          </div>
          <h2 className="gg-ad-h">
            The front desk that answers <em>while you operate.</em>
          </h2>
          <p className="gg-ad-dek">
            AI agents for the whole patient journey. They take the booking, send the questionnaire,
            remind the patient, and have the consult note drafted for the doctor to review.
          </p>
          <div className="gg-chat">
            <div className="gg-chat-head">
              <span className="gg-dot" />
              <b>Front desk agent</b>
              <small>Clinic line · after hours</small>
            </div>
            <p className="is-them">Hi, I&apos;d like to book a consultation next week.</p>
            <p className="is-us">Of course. Tuesday at 11:30 or Thursday at 4:00 are open. Which suits you?</p>
            <p className="is-them">Thursday, please.</p>
            <p className="is-us">
              Booked for Thursday at 4:00. I&apos;ve sent a short questionnaire so the doctor has your
              history before you arrive. You&apos;ll get a reminder the day before.
            </p>
            <div className="gg-chat-foot">
              <span>Appointment created</span>
              <span>Questionnaire sent</span>
              <span>Reminder scheduled</span>
            </div>
          </div>
          <Folio page="17" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 18 · AD · FORTIORA CLINIC (R) */}
      <article className="mag-page gg gg-dark" data-density="hard">
        <SpreadFan shift={-840} />
        <div className="gg-well gg-ad-well">
          <div className="gg-console">
            <div className="gg-console-bar">
              <i />
              <i />
              <i />
              <b>Fortiora Clinic · Patient journeys</b>
              <small>Today</small>
            </div>
            <div className="gg-console-body">
              <ul className="gg-console-nav">
                <li className="is-on">Journeys</li>
                <li>Intake</li>
                <li>Questionnaires</li>
                <li>Reminders</li>
                <li>Consult notes</li>
              </ul>
              <div className="gg-console-main">
                <div className="gg-stages">
                  <span>Patient</span>
                  <div>
                    <span>Booked</span>
                    <span>Pre-visit</span>
                    <span>Visit</span>
                    <span>Note</span>
                    <span>Follow</span>
                  </div>
                  <span>Status</span>
                </div>
                {[
                  ["New consultation", 2, "Questionnaire returned"],
                  ["Review visit", 3, "Checked in"],
                  ["New consultation", 1, "Intake in progress"],
                  ["Post-procedure", 4, "Note drafted"],
                  ["Post-procedure", 5, "Reminder sent"],
                ].map(([t, st, label], i) => (
                  <div key={i} className="gg-journey">
                    <b>{t}</b>
                    <div className="gg-track">
                      {[1, 2, 3, 4, 5].map((k) => (
                        <i key={k} className={k < (st as number) ? "is-done" : k === st ? "is-now" : undefined} />
                      ))}
                    </div>
                    <small>{label}</small>
                  </div>
                ))}
                <div className="gg-note-card">
                  <div className="gg-note-head">
                    <b>Consult note · draft</b>
                    <span>Awaiting doctor review</span>
                  </div>
                  <p>
                    <em>Presenting concern</em> · from pre-visit questionnaire
                  </p>
                  <p>
                    <em>History</em> · patient-reported, attached
                  </p>
                  <p>
                    <em>Plan</em> · left blank for the doctor
                  </p>
                  <div className="gg-note-actions">
                    <span>Edit</span>
                    <span className="is-on">Review &amp; sign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="gg-ad-caps">
            <li>
              <b>Appointment intake</b>
              <p>Calls and messages answered, slots offered, bookings made.</p>
            </li>
            <li>
              <b>Pre-visit questionnaires</b>
              <p>Sent on booking, returned before the patient walks in.</p>
            </li>
            <li>
              <b>Follow-up reminders</b>
              <p>The day before, and after the procedure, on schedule.</p>
            </li>
            <li>
              <b>Consult-note drafts</b>
              <p>Prepared from the record. The doctor edits and signs.</p>
            </li>
          </ul>
          <p className="gg-ad-line">
            <span>
              From the first call to the follow-up, <em>one record.</em>
            </span>
          </p>
          <div className="gg-ad-sign">
            <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            <p>
              <b>Fortiora Clinic</b> · a Fortiora Group product
              <br />
              Hello@thefortiora.com · thefortiora.com
            </p>
          </div>
          <Folio page="18" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 19 · AD · FORTIORA LEDGER (light) */}
      <article className="mag-page gg gg-light">
        <div className="gg-well">
          <div className="gg-ad-top">
            <Kicker>Advertisement · Fortiora Group</Kicker>
            <Lockup product="Ledger" dark={false} />
          </div>
          <h2 className="gg-head" style={{ fontSize: 76, marginTop: 18 }}>
            Month-end, <em>closed in order.</em>
          </h2>
          <p className="gg-dek" style={{ maxWidth: 660 }}>
            Finance close automation. Reconciliations matched, approvals routed, the checklist kept,
            so the close runs the same way every month.
          </p>
          <div className="gg-ledger">
            <div className="gg-ledger-bar">
              <b>Fortiora Ledger · Month-end close</b>
              <span>Day 3 of close</span>
            </div>
            <div className="gg-ledger-grid">
              <div className="gg-ledger-col">
                <p className="gg-ledger-k">Checklist</p>
                {[
                  ["Bank reconciliations", "done"],
                  ["Card statements", "done"],
                  ["Accruals", "now"],
                  ["Intercompany", "next"],
                  ["Review & lock", "next"],
                ].map(([t, st]) => (
                  <div key={t} className={`gg-check is-${st}`}>
                    <i />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="gg-ledger-col">
                <p className="gg-ledger-k">Reconciliation</p>
                {[
                  ["Operating account", "Matched"],
                  ["Payroll account", "Matched"],
                  ["Card clearing", "Exceptions to review"],
                  ["Vendor payments", "Matched"],
                ].map(([t, st]) => (
                  <div key={t} className="gg-recon">
                    <span>{t}</span>
                    <b className={st === "Matched" ? "is-ok" : "is-flag"}>{st}</b>
                  </div>
                ))}
                <p className="gg-ledger-k" style={{ marginTop: 14 }}>
                  Approvals
                </p>
                {[
                  ["Accrual entry", "Approved"],
                  ["Vendor invoice", "With approver"],
                ].map(([t, st]) => (
                  <div key={t} className="gg-recon">
                    <span>{t}</span>
                    <b className={st === "Approved" ? "is-ok" : "is-wait"}>{st}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="gg-ledger-caps">
            <li>
              <b>Reconciliations</b>Bank, card and ledger lines matched; exceptions set aside for a
              person.
            </li>
            <li>
              <b>Approvals</b>Entries routed to the right approver, with the trail kept.
            </li>
            <li>
              <b>Month-end</b>One checklist, the same order every close.
            </li>
          </ul>
          <div className="gg-ad-sign is-light">
            <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            <p>
              <b>Fortiora Ledger</b> · a Fortiora Group product
              <br />
              Hello@thefortiora.com · thefortiora.com
            </p>
          </div>
          <Folio page="19" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 20 · BE FEATURED */}
      <article className="mag-page gg gg-dark">
        <div className="gg-well gg-feat">
          <div className="gg-feat-frame">
            <Fan className="gg-feat-fan" />
            <div className="gg-feat-mast">
              <PrimeCrestMast tone="dark" tagline={false} />
            </div>
            <Kicker style={{ marginTop: 18 }}>Be Featured · The November Issue</Kicker>
            <h2>
              Your legacy, <em>featured.</em>
            </h2>
            <p className="gg-feat-dek">
              PrimeCrest profiles people who build things and keep them running. If your work
              belongs in the next edition, tell us about it.
            </p>
            <ol className="gg-feat-steps">
              <li>
                <b>I</b>
                <div>
                  <h4>Write to the desk</h4>
                  <p>Who you are, what you built, and why this year.</p>
                </div>
              </li>
              <li>
                <b>II</b>
                <div>
                  <h4>The interview</h4>
                  <p>Our questions, your answers, printed as you give them.</p>
                </div>
              </li>
              <li>
                <b>III</b>
                <div>
                  <h4>The issue</h4>
                  <p>A cover, a feature, and a record that stays online.</p>
                </div>
              </li>
            </ol>
            <div className="gg-feat-foot">
              <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
              <p>
                Scan, or visit
                <br />
                <b>theprimecrest.com</b>
              </p>
            </div>
          </div>
          <Folio page="20" section="Be Featured" />
        </div>
      </article>

      {/* ============================================== 21 · BACK COVER */}
      <NovemberBack scope="gg" vol="XI" />
    </>
  );
}
