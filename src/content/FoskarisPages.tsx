/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";

/**
 * PrimeCrest · The October Issue, Vol. VIII
 * Penny Foskaris, Founder, Red Light Pro Devices & Foskaris Wellness.
 *
 * Cover and back keep the house PrimeCrest lockup. Interiors are a closed
 * `fk-*` system: blush paper, warm charcoal, Instrument Serif / Spectral /
 * Syne. Contents photo + numeral index, the signature story and method,
 * then the interview printed whole: eight questions, one per leaf, in the
 * order asked. Faces stay whole.
 */

const IMG = "/issues/foskaris";

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
  ["Published by", "Fortiora Group LLC"],
  ["On the Cover", "Penny Foskaris"],
] as const;

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="fk-folio">
      <span>PrimeCrest · October</span>
      <span>{section}</span>
      <span>{page}</span>
    </p>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="fk-kicker">{children}</p>;
}

/** One interview leaf: numeral, question, the answer whole, a lifted line. */
function Interview({
  n,
  q,
  page,
  tone = "blush",
  size = 14,
  lead = 1.56,
  pull,
  band,
  children,
}: {
  n: string;
  q: ReactNode;
  page: string;
  tone?: "blush" | "char";
  size?: number;
  lead?: number;
  pull?: ReactNode;
  band?: { src: string; alt: string; ratio: number; quote: ReactNode; by: string };
  children: ReactNode;
}) {
  return (
    <article className={`mag-page fk fk-${tone}`}>
      <div className="fk-well">
        <Kicker>The Interview · Question {n} of 08</Kicker>
        <div className="fk-q">
          <b>{n}</b>
          <h3>{q}</h3>
        </div>
        <div
          className="fk-qa fk-drop"
          style={{ "--fk-qa-size": `${size}px`, lineHeight: lead } as CSSProperties}
        >
          {children}
        </div>
        {band ? (
          <div className="fk-qa-row">
            <img src={band.src} alt={band.alt} style={{ aspectRatio: band.ratio }} />
            <div className="fk-qa-rowpanel">
              <q>{band.quote}</q>
              <small>{band.by}</small>
            </div>
          </div>
        ) : null}
        <div className="fk-qa-end">
          {pull ? <p className="fk-pull">{pull}</p> : null}
          <Folio page={page} section="The Interview" />
        </div>
      </div>
    </article>
  );
}

type Plate = {
  src: string;
  alt: string;
  /** natural width / height, so the frame matches the photograph exactly */
  ratio: number;
  quote: ReactNode;
  by: string;
  stats: [string, string][];
  quoteSize?: number;
};

/** Photograph at its own proportions, with the quote and figures beneath. */
function StackPlate({ plate, right = false }: { plate: Plate; right?: boolean }) {
  return (
    <div className={`fk-split-photo is-stack${right ? " is-right" : ""}`} style={{ flexBasis: "46%" }}>
      <img src={plate.src} alt={plate.alt} style={{ aspectRatio: plate.ratio }} />
      <div
        className="fk-stack-panel"
        style={plate.quoteSize ? ({ "--fk-stack-q": `${plate.quoteSize}px` } as CSSProperties) : undefined}
      >
        <div>
          <q>{plate.quote}</q>
          <small>{plate.by}</small>
        </div>
        <div className="fk-stack-stats">
          {plate.stats.map(([b, t]) => (
            <div key={b}>
              <b>{b}</b>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Interview leaf for a shorter answer: plate on one side, type on the other. */
function InterviewSplit({
  n,
  q,
  page,
  tone = "char",
  size = 14.5,
  lead = 1.56,
  photo,
  photoRight = false,
  children,
}: {
  n: string;
  q: ReactNode;
  page: string;
  tone?: "blush" | "char";
  size?: number;
  lead?: number;
  photo: Plate;
  photoRight?: boolean;
  children: ReactNode;
}) {
  return (
    <article className={`mag-page fk fk-${tone}`}>
      <div className="fk-split">
        <StackPlate plate={photo} right={photoRight} />
        <div className="fk-split-type">
          <Kicker>The Interview · Question {n} of 08</Kicker>
          <div className="fk-q">
            <b>{n}</b>
            <h3>{q}</h3>
          </div>
          <div
            className="fk-qa is-one fk-drop"
            style={{ "--fk-qa-size": `${size}px`, lineHeight: lead } as CSSProperties}
          >
            {children}
          </div>
          <div className="fk-qa-end">
            <Folio page={page} section="The Interview" />
          </div>
        </div>
      </div>
    </article>
  );
}

function AdArt({ shift = 0 }: { shift?: number }) {
  const bars = Array.from({ length: 48 }, (_, i) => {
    const a = Math.abs(Math.sin(i * 0.41 + 0.2));
    const b = Math.abs(Math.cos(i * 0.17));
    return 18 + Math.round(a * 140 + b * 36);
  });

  return (
    <div className="fk-ad-art" aria-hidden>
      <svg
        viewBox="0 0 1680 1120"
        width={1680}
        height={1120}
        style={{ inset: "auto", left: shift, top: 0, width: 1680, height: 1120 }}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="fkGlow" cx="72%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#e8896a" stopOpacity="0.36" />
            <stop offset="52%" stopColor="#d4563a" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#1c1412" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fkBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0b49a" />
            <stop offset="48%" stopColor="#d4563a" />
            <stop offset="100%" stopColor="#8a2e1e" />
          </linearGradient>
        </defs>
        <rect width="1680" height="1120" fill="#1c1412" />
        <rect width="1680" height="1120" fill="url(#fkGlow)" />
        {Array.from({ length: 18 }, (_, i) => (
          <rect
            key={`p${i}`}
            x={40 + (i % 9) * 180}
            y={80 + Math.floor(i / 9) * 480}
            width="148"
            height="420"
            fill="none"
            stroke="#e8896a"
            strokeOpacity={0.14 + (i % 3) * 0.04}
            strokeWidth="1.2"
            rx="3"
          />
        ))}
        <g transform="translate(220 560)">
          {bars.map((v, i) => (
            <rect
              key={i}
              x={i * 28}
              y={-v / 2}
              width="12"
              height={v}
              rx="1"
              fill="url(#fkBar)"
              fillOpacity={0.28 + (i % 4) * 0.1}
            />
          ))}
        </g>
        <text
          x="180"
          y="190"
          fill="#e8896a"
          fillOpacity="0.14"
          style={{ font: "600 132px var(--font-syne), Syne, sans-serif", letterSpacing: "12px" }}
        >
          FORTIORA
        </text>
      </svg>
    </div>
  );
}

export const FOSKARIS_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "The Editor's Letter" },
  { page: 4, label: "The Signature Story" },
  { page: 5, label: "The Method" },
  { page: 6, label: "The Light" },
  { page: 7, label: "The Interview" },
  { page: 15, label: "The Record" },
  { page: 16, label: "Be Featured" },
  { page: 17, label: "Fortiora · Applied AI" },
  { page: 19, label: "PrimeCrest" },
];

export function FoskarisPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page fk fk-cover" data-density="hard">
        <img
          className="fk-cover-img"
          src={`${IMG}/coverart.jpg`}
          alt="Penny Foskaris, Founder of Red Light Pro Devices and Foskaris Wellness"
          fetchPriority="high"
        />
        <div className="fk-cover-grade" />

        <div className="fk-cover-ui">
          <header className="fk-mast">
            <div className="fk-mast-word">
              <svg className="fk-mast-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f6f0e6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#e8896a" />
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
            <p className="fk-mast-tag">Where Vision Meets Voice</p>
            <div className="fk-mast-hair" />
          </header>

          <div className="fk-cover-left">
            <div className="fk-cover-date">
              <p>The October Issue</p>
              <p>Vol. VIII · No. 08 · 2026</p>
            </div>
            <div className="fk-cover-badge">
              <span className="fk-badge-dot" />
              <h2>Unstoppable</h2>
              <strong>LEADER</strong>
              <span>making a difference in 2026</span>
            </div>
            <div className="fk-teaser">
              <h3>
                The place
                <br />
                she needed
              </h3>
              <hr />
              <p>The wellness center she could not find as a patient, built for the people who came after.</p>
            </div>
          </div>

          <div className="fk-cover-role">
            <p>Founder</p>
            <strong>
              Red Light Pro
              <br />
              &amp; Foskaris Wellness
            </strong>
          </div>

          <div className="fk-teaser fk-teaser-b">
            <h3>
              The light
              <br />
              they take home
            </h3>
            <hr />
            <p>The clinic system&apos;s maker would not build for home. She found engineers who would.</p>
          </div>

          <div className="fk-cover-name">
            <em>Penny</em>
            <strong>FOSKARIS</strong>
            <p>
              Two and a half years without an answer, then a practice where people are heard, and a
              light her clients can take home.
            </p>
          </div>

          <div className="fk-cover-foot">
            <p className="fk-cover-issn">
              <b>The October Issue</b>
              <br />
              theprimecrest.com
            </p>
            <span className="fk-qr-chip">
              <span>Scan to read</span>
              <img src="/brand/qr-primecrest.png" alt="Scan to read PrimeCrest online" />
            </span>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS PHOTO */}
      <article className="mag-page fk fk-cphoto" data-density="hard">
        <div className="fk-cphoto-strip" />
        <img
          className="fk-cphoto-img"
          src={`${IMG}/portrait2.jpg`}
          alt="Penny Foskaris"
          style={{ left: 93, width: 747 }}
        />
        <div className="fk-cphoto-grade" />
        <p className="fk-cword">CONTENTS</p>
        <p className="fk-cchip">01 · 02</p>
      </article>

      {/* ============================================== 02 · CONTENTS INDEX */}
      <article className="mag-page fk fk-char">
        <div className="fk-well" style={{ padding: "44px 48px 32px" }}>
          <p className="fk-index-k">The October Issue · Vol. VIII</p>
          <div className="fk-lead">
            <b>04.</b>
            <div>
              <h3>Penny Foskaris</h3>
              <p>The practice she needed as a patient, and the light her clients take home.</p>
            </div>
          </div>
          <ol className="fk-index">
            <li>
              <b>03.</b>
              <div>
                <p className="fk-index-k">From the desk</p>
                <h4>The Editor&apos;s Letter</h4>
                <p>The patient who built the practice.</p>
              </div>
            </li>
            <li>
              <b>05.</b>
              <div>
                <p className="fk-index-k">The method</p>
                <h4>Reveal. Restore. Reverse.</h4>
                <p>A conversation first, sleep and food early, and no battery of tests on day one.</p>
              </div>
            </li>
            <li>
              <b>07.</b>
              <div>
                <p className="fk-index-k">In her words</p>
                <h4>The Interview</h4>
                <p>Eight questions, answered in full and printed in the order asked.</p>
              </div>
            </li>
            <li>
              <b>15.</b>
              <div>
                <p className="fk-index-k">The file</p>
                <h4>The Record</h4>
                <p>From the library to the rent-to-buy program in Anaheim Hills.</p>
              </div>
            </li>
            <li>
              <b>16.</b>
              <div>
                <p className="fk-index-k">The desk</p>
                <h4>Be Featured</h4>
                <p>Because your story deserves the record.</p>
              </div>
            </li>
          </ol>
          <div className="fk-mastcredits">
            {CREDITS.map(([k, v]) => (
              <span key={k}>
                {k}
                <b>{v}</b>
              </span>
            ))}
          </div>
          <p
            style={{
              margin: "10px 0 0",
              fontFamily: "var(--fk-sans)",
              fontSize: 9.5,
              lineHeight: 1.5,
              letterSpacing: "0.04em",
              color: "rgba(236,229,216,0.5)",
              flex: "0 0 auto",
            }}
          >
            Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801, United States ·
            Hello@thefortiora.com. © 2026 Fortiora Group LLC. All rights reserved. No part of
            this publication may be reproduced or transmitted in any form without prior written
            permission from the publisher.
          </p>
          <Folio page="02" section="Contents" />
        </div>
      </article>

      {/* ============================================== 03 · LETTER */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>From the Editors</Kicker>
          <h2 className="fk-head" style={{ fontSize: 38 }}>
            The patient who built the practice.
          </h2>
          <div
            className="fk-flow fk-drop"
            style={{ marginTop: 16, flex: "0 0 auto", columnFill: "balance", fontSize: 18, lineHeight: 1.6 }}
          >
            <p>
              In her mid-thirties Penny Foskaris spent more than two and a half years with dizzy
              spells, chronic fatigue and an abdominal pain that would not let up. Doctor after
              doctor. Test after test. Nobody could say what was wrong, and every month of not
              knowing cost money.
            </p>
            <p>
              Then a holistic wellness center, and within a week she was feeling better. She went
              back to school. The practice she opened afterward, Foskaris Wellness, was built to
              be the place she had needed during those years: nobody rushed out the door, the
              whole person looked at, time spent listening. She called the philosophy Reveal.
              Restore. Reverse. More than five thousand people have since worked with her.
            </p>
            <p>
              Red Light Pro Devices came later, out of necessity. Her clients had been using a
              professional red light system in the center for about three years and wanted
              something for home. She tested about a dozen home devices and could not recommend
              one. The maker of the roughly $28,000 clinic system was not interested in building
              smaller units. Engineers at another red light company were, and the months that
              followed went into LED configuration and power.
            </p>
            <p>
              Before wellness, she was in the restaurant business with her family. When people
              told her they wanted a restaurant because it looked like easy money, she told them
              they would be married to it. Her first question to anyone who wants to start a
              business is still the same one: why do you want to do this.
            </p>
            <p>
              Her answers to our eight questions follow in full, in the order we asked them,
              beginning on page seven. We have not trimmed them. She has spent ten years being
              precise with people about their health, and she was precise with us.
            </p>
          </div>
          <div className="fk-nums">
            <div>
              <b>2½</b>
              <span>Years without an answer</span>
            </div>
            <div>
              <b>5,000+</b>
              <span>People she has worked with</span>
            </div>
            <div>
              <b>10+</b>
              <span>Years in business</span>
            </div>
          </div>
          <p className="fk-pull" style={{ marginTop: "auto" }}>
            Your &ldquo;why&rdquo; has to be strong enough to carry you through the parts of
            entrepreneurship that aren&apos;t exciting.
          </p>
          <div className="fk-sign" style={{ marginTop: 10 }}>
            <b>The Editors</b>
            <small>PrimeCrest Editorial Desk · Reveal. Restore. Reverse.</small>
          </div>
          <Folio page="03" section="The Editor's Letter" />
        </div>
      </article>

      {/* ============================================== 04 · FEATURE */}
      <article className="mag-page fk fk-char" data-density="hard">
        <div className="fk-split">
          <StackPlate
            plate={{
              src: `${IMG}/portrait2.jpg`,
              alt: "Penny Foskaris",
              ratio: 452 / 678,
              quote: "If you don’t feel well enough to enjoy those years, that’s not truly living.",
              by: "Penny Foskaris · Founder",
              quoteSize: 49,
              stats: [["$28,000", "The clinic system her clients wanted to take home"]],
            }}
          />
          <div className="fk-split-type">
            <Kicker>The Signature Story</Kicker>
            <h2 className="fk-head" style={{ fontSize: 30, marginBottom: 10 }}>
              Penny Foskaris
            </h2>
            <div className="fk-rail fk-drop" style={{ flex: "0 0 auto", fontSize: 15.3, lineHeight: 1.48 }}>
              <p>
                It began in a library. One aunt had Type 1 diabetes. Another family member had
                heart disease. As a teenager she spent hours reading about nutrition and health,
                trying to find out whether there was anything she could do to help them.
              </p>
              <p>
                In her mid-thirties the question turned personal. Dizzy spells, chronic fatigue,
                continuous abdominal pain. Two and a half years of appointments and tests, and
                no one could say what was wrong.
              </p>
              <p>
                A holistic wellness center changed that inside a week. She went back to school,
                then opened Foskaris Wellness, where the first appointment is mostly listening.
              </p>
              <p>
                Founder of Foskaris Wellness and Red Light Pro Devices. More than ten years in
                business, and more than five thousand clients.
              </p>
            </div>
            <div className="fk-hair" style={{ margin: "14px 0 12px" }} />
            <Kicker>The Light</Kicker>
            <h2 className="fk-head" style={{ fontSize: 30, marginBottom: 10 }}>
              They take it home.
            </h2>
            <div className="fk-rail" style={{ fontSize: 15.3, lineHeight: 1.48 }}>
              <p>
                For about three years her clients had professional red light therapy in the
                center. Then they began asking what they could buy for home.
              </p>
              <p>
                She tested about a dozen home devices. Wrapped around a knee or an elbow, most
                brought little or no relief anyone could feel. The professional system often did
                by the end of a session.
              </p>
              <p>
                Its maker, asked for something smaller, was not interested. Engineers at another
                red light company were. Months of testing followed on the LED configuration and
                the power.
              </p>
              <p>
                The standard was plain. If her name was going on a device, it had to be one she
                would use in her own wellness center.
              </p>
              <p>
                At the Red Light Pro Devices location in Anaheim Hills, a device can be rented
                for a month and the rental put toward the purchase.
              </p>
              <p>
                Next, she says: high school athletic programs, recovery rooms at home, and a
                practice people can reach from anywhere.
              </p>
            </div>
            <Folio page="04" section="The Signature Story" />
          </div>
        </div>
      </article>

      {/* ============================================== 05 · THE METHOD */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well" style={{ paddingBottom: 0 }}>
          <Kicker>The Method</Kicker>
          <h2 className="fk-head" style={{ fontSize: 34 }}>
            Listen first. Test second.
          </h2>
          <div className="fk-pulse">
            <div className="fk-pulse-band is-reveal">
              <em>Reveal</em>
              <p>
                A symptom, she says, is often the end result. The work starts with history and
                a conversation: how someone is sleeping, what they eat every day and whether it
                is enough, medications, lifestyle, stress.
              </p>
              <p>
                Body composition and visceral fat give the first measurable picture. She does
                not order every possible test on day one. That first analysis already says a
                great deal.
              </p>
            </div>
            <div className="fk-pulse-band is-restore">
              <em>Restore</em>
              <p>
                Nutrition often comes first. Under-nourishing the body can bring deficiencies,
                hormonal imbalance, lost muscle, low energy and poor sleep. Sleep is the other
                early question. A body that does not rest cannot properly repair.
              </p>
              <p>
                Many of the poor sleepers she has seen were also under-eating. Once they were
                fed properly, many of them slept better.
              </p>
            </div>
            <div className="fk-pulse-band is-reverse">
              <em>Reverse</em>
              <p>
                Then the plan is watched and adjusted, and another layer is added when it is
                needed: hormones, micronutrients, other health markers.
              </p>
              <p>
                No two people get the same protocol. The plan has to be one a person can
                actually follow, and it keeps changing as the body answers.
              </p>
            </div>
          </div>
          <Folio page="05" section="The Method" />
        </div>
      </article>

      {/* ============================================== 06 · THE LIGHT */}
      <article className="mag-page fk fk-plate" data-density="hard">
        <img
          className="fk-plate-img"
          src={`${IMG}/kitchen.jpg`}
          alt="Penny Foskaris in the kitchen, preparing fresh produce"
        />
        <div className="fk-plate-grade" />
        <p className="fk-plate-quote">
          If I was going to put my name behind a device and recommend it to my own clients, it
          had to be something I would actually use in my wellness center myself.
        </p>
        <p className="fk-cchip">06</p>
      </article>

      {/* ============================================== 07 · Q1 */}
      <Interview
        n="01"
        page="07"
        size={15.6}
        lead={1.56}
        q="What inspired you to establish Red Light Pro Devices and Foskaris Wellness?"
      >
        <p>
          My interest in nutrition and chronic disease actually began when I was a teenager. I had
          an aunt with Type 1 diabetes and another family member with heart disease, and I would
          spend hours in the library researching nutrition and health, trying to understand if
          there was anything I could do to help them. I didn&apos;t realize it at the time, but
          those early experiences planted the seed for what would eventually become my
          life&apos;s work.
        </p>
        <p>
          Then, in my mid-30s, health became very personal. For more than two and a half years, I
          struggled with unexplained dizzy spells, chronic fatigue, and continuous abdominal pain.
          I went from doctor to doctor and had test after test, but no one could figure out what
          was wrong. It was physically exhausting, emotionally frustrating, and incredibly
          expensive.
        </p>
        <p>
          Eventually, I visited a holistic wellness center, and within a week I began feeling
          better. That experience completely changed the direction of my life. It inspired me to
          return to school and ultimately open Foskaris Wellness, where I could take a more
          holistic approach to helping people.
        </p>
        <p>
          I wanted to create the kind of wellness center I had needed during those difficult
          years—a place where people weren&apos;t rushed out the door, where I could spend time
          listening to them, looking at the whole person, and helping them understand what their
          body needed. I also wanted it to be a place where people could relax and reduce stress
          while working toward their health goals. That became the philosophy behind Reveal.
          Restore. Reverse.
        </p>
        <p>
          Since then, I&apos;ve had the privilege of helping more than 5,000 people improve their
          health, lose body fat, reduce pain and stress, improve important health markers, and
          work toward overcoming chronic health challenges. Ultimately, my goal is to help people
          live with vitality and feel their best, because longevity isn&apos;t simply about how
          many years you live. If you don&apos;t feel well enough to enjoy those years,
          that&apos;s not truly living.
        </p>
        <p>
          Red Light Pro Devices came later, and it was born out of necessity. I had already been
          using professional red light therapy with my clients for about three years when they
          began asking me for devices they could use at home to continue supporting their
          recovery between visits.
        </p>
        <p>
          We tested different home devices, but I wasn&apos;t satisfied with what was available.
          I wanted something that could provide my clients with a professional-quality experience
          similar to what we were using in the wellness center. I initially approached the
          company that manufactured our approximately $28,000 professional system and asked
          whether they would develop smaller home-use devices. They weren&apos;t interested.
        </p>
        <p>
          So I decided to find another way. I began working with engineers from a red light
          therapy company to develop devices that could bring the quality and performance I
          wanted into a format people could conveniently use at home.
        </p>
        <p>
          That&apos;s how Red Light Pro Devices began. It wasn&apos;t originally about starting
          another company. It was about solving a problem for my clients and giving people access
          to a technology I had already seen become an important part of supporting recovery,
          reducing discomfort, and helping them stay active.
        </p>
      </Interview>

      {/* ============================================== 08 · Q2 */}
      <Interview
        n="02"
        page="08"
        tone="char"
        size={16.4}
        lead={1.64}
        q="How has your background in nutrition and research shaped the way you approach your clients’ health and wellness?"
        pull="If the body doesn’t rest, it can’t properly repair."
      >
        <p>
          I&apos;ve always approached health like a researcher. A symptom is often the end result,
          so rather than focusing only on the symptom, I look at a person&apos;s history and work
          to identify the multiple root causes and contributing factors that may have led them
          there.
        </p>
        <p>
          It starts with a conversation. I want to understand what&apos;s happening in
          someone&apos;s life right now as well as their health history. How are they sleeping?
          What are they eating every day, and just as importantly, are they eating enough? Are
          they taking medications? What does their lifestyle look like? What are their stress
          levels? We can also begin with measurable information such as body composition and
          visceral fat levels.
        </p>
        <p>
          Sleep is one of the biggest factors I look at. If the body doesn&apos;t rest, it
          can&apos;t properly repair. So much of our body&apos;s restoration and recovery takes
          place while we sleep, and poor sleep can affect how someone feels and functions
          throughout the day.
        </p>
        <p>
          I also look at the relationship between sleep and nutrition. Over the years, I&apos;ve
          worked with many people who weren&apos;t sleeping well and were also under-nourishing
          their bodies. Once we improved their nutrition and gave their bodies the fuel and
          nutrients they needed, many of them began sleeping better as well. Everything is
          interconnected, which is why it&apos;s important to look at the whole picture rather
          than isolating one symptom.
        </p>
        <p>
          I don&apos;t believe in overwhelming someone with every possible test on day one. We
          can learn a tremendous amount from that initial analysis, put a personalized plan into
          place, and see how their body responds.
        </p>
        <p>
          Nutrition is often one of the first areas we address because under-nourishing the body
          can contribute to nutrient deficiencies, hormonal imbalances, loss of muscle, low
          energy, poor sleep, and other problems. Sometimes getting the nutritional foundation in
          place can make a significant difference.
        </p>
        <p>
          Then, if we need to investigate further, we can go deeper with testing such as
          hormones, micronutrients, and other health markers.
        </p>
        <p>
          For me, wellness isn&apos;t about giving everyone the same protocol. It&apos;s about
          listening, gathering the right information, understanding how the different pieces may
          be connected, and creating a realistic plan that the person can actually follow. Then
          we continue to analyze, adjust, and add another layer when necessary.
        </p>
      </Interview>

      {/* ============================================== 09 · Q3 */}
      <Interview
        n="03"
        page="09"
        size={13.6}
        lead={1.56}
        q="What makes your red light therapy solutions unique in today’s wellness market?"
        band={{
          src: `${IMG}/kitchen.jpg`,
          alt: "Penny Foskaris in the kitchen, preparing fresh produce",
          ratio: 1417 / 1600,
          quote: "They weren’t developed because I saw a popular wellness trend and wanted to create a product.",
          by: "Penny Foskaris · On Red Light Pro Devices",
        }}
      >
        <p>
          There are many red light therapy products on the market today, and before I ever
          considered developing my own, we tested about a dozen different home-use devices in our
          wellness center. I was genuinely hoping to find something I could confidently recommend
          to my clients so they could continue supporting their recovery at home.
        </p>
        <p>
          The difference we observed was significant. We might wrap one of the home-use devices
          we purchased online around a client&apos;s knee or elbow and they often reported little
          to no noticeable relief. Yet when we used the professional red light therapy system in
          our wellness center, clients frequently told us they felt a difference by the end of
          their session.
        </p>
        <p>
          It was frustrating because my clients kept asking, &ldquo;What can I buy to use at
          home?&rdquo; and I didn&apos;t have something I felt comfortable recommending.
        </p>
        <p>
          Initially, I approached the manufacturer of the professional system we were using and
          asked if they would consider developing smaller home-use devices, but they weren&apos;t
          interested. So I eventually connected with another red light therapy company that was
          already manufacturing home-use products and began working with their engineers.
        </p>
        <p>
          We spent months testing and refining the devices—adjusting the LED configuration and
          power to create something that could deliver the level of performance I was looking
          for while still being appropriate and convenient for home use.
        </p>
        <p>
          That&apos;s really what makes Red Light Pro Devices different to me. They weren&apos;t
          developed because I saw a popular wellness trend and wanted to create a product. They
          grew out of years of hands-on experience using red light therapy with real clients and
          identifying a gap between the professional equipment we were using and the home-use
          products available at the time.
        </p>
        <p>
          My goal was simple: if I was going to put my name behind a device and recommend it to
          my own clients, it had to be something I would actually use in my wellness center
          myself.
        </p>
      </Interview>

      {/* ============================================== 10 · Q4 */}
      <InterviewSplit
        n="04"
        page="10"
        size={16.1}
        lead={1.64}
        q="What achievement are you most proud of throughout your entrepreneurial journey?"
        photoRight
        photo={{
          src: `${IMG}/portrait.jpg`,
          alt: "Penny Foskaris",
          ratio: 683 / 1024,
          quote: "Something I created has helped people feel better and live better.",
          by: "Penny Foskaris · On what she is proudest of",
          quoteSize: 52,
          stats: [["5,000+", "People she has worked with"]],
        }}
      >
        <p>
          What I&apos;m most proud of isn&apos;t a particular business milestone. It&apos;s
          creating a place where people can come when they&apos;re struggling with their health,
          feel heard, and hopefully begin finding answers that can help them improve their lives.
        </p>
        <p>
          I know personally what it feels like to not feel well for years and have unanswered
          questions. I know the frustration of going from appointment to appointment, having test
          after test, and still not understanding why you don&apos;t feel like yourself. Unless
          you&apos;ve experienced it, it&apos;s difficult to understand how much that can affect
          every part of your life.
        </p>
        <p>
          That&apos;s why some of the most meaningful moments for me are when we help someone
          uncover pieces of their health that they hadn&apos;t understood before. Sometimes
          people have been struggling for years. Being able to listen to their story, help reveal
          some of the factors that may be contributing to how they feel, and give them a path
          forward is incredibly rewarding.
        </p>
        <p>
          Over the years, I&apos;ve had the privilege of working with more than 5,000 people.
          I&apos;ve watched people improve their health, become stronger, reduce pain, reach
          weight and body-composition goals, improve important health markers, have more energy,
          and regain the confidence to do things they enjoy again.
        </p>
        <p>
          That&apos;s what I&apos;m most proud of—knowing that something I created has helped
          people feel better and live better. I turned one of the most difficult periods of my
          own life into something that could help other people struggle less, and to me,
          that&apos;s a much greater measure of success than any business accomplishment.
        </p>
      </InterviewSplit>

      {/* ============================================== 11 · Q5 */}
      <Interview
        n="05"
        page="11"
        tone="char"
        size={16.4}
        lead={1.64}
        q="How do you see red light therapy evolving in the future of recovery, wellness, and cognitive health?"
        pull="People will begin thinking much earlier about how today’s choices affect the way they will feel 10, 20, or 30 years from now."
      >
        <p>
          I believe we&apos;re still in the early stages of understanding the potential of red
          light therapy and photobiomodulation. As more clinical research is published and
          awareness grows, I believe we&apos;ll see greater acceptance among healthcare
          professionals, athletes, wellness practitioners, and the general public.
        </p>
        <p>
          One area I&apos;m particularly excited about is athletics. I envision a future where red
          light therapy becomes part of the normal performance and recovery environment for
          athletes beginning as early as high school. Rather than thinking only about recovery
          after an athlete is sore or injured, I believe we&apos;ll see greater emphasis on
          supporting the body before training and competition as well as afterward.
        </p>
        <p>
          I can see high schools, colleges, and universities incorporating red light therapy into
          their athletic programs as another tool to support warm-up, performance, recovery, and
          the long-term well-being of their athletes.
        </p>
        <p>
          I also believe we&apos;re going to see red light therapy move beyond clinics and
          athletic facilities and become much more common in people&apos;s homes. Just as people
          have created home gyms, saunas, and dedicated wellness spaces, I envision more homes
          having recovery rooms that incorporate technologies such as red light therapy as part
          of a proactive approach to healthy aging.
        </p>
        <p>
          The emerging research surrounding photobiomodulation and cognitive and brain health is
          especially fascinating to me. I believe this will be an important area of continued
          research, and I&apos;m excited to see what we learn over the next decade about how
          light-based technologies may support healthy brain function as we age.
        </p>
        <p>
          Ultimately, my vision is much bigger than red light therapy alone. I believe the future
          of health will become increasingly proactive. Instead of waiting until something goes
          wrong, people will begin thinking much earlier about how today&apos;s choices affect
          the way they will feel 10, 20, or 30 years from now.
        </p>
        <p>
          Technology can be an important part of that, but we can&apos;t forget the foundation.
          Nutrition, sleep, movement, stress management, and what we consistently put into our
          bodies still matter tremendously. My hope is that the future of wellness combines those
          fundamentals with emerging technologies to help people not only live longer, but stay
          active, independent, and able to enjoy those additional years.
        </p>
      </Interview>

      {/* ============================================== 12 · Q6 */}
      <Interview
        n="06"
        page="12"
        size={15.3}
        lead={1.56}
        q="What is your vision for Red Light Pro Devices and Foskaris Wellness in the coming years?"
        pull="Someone shouldn’t have to live close to my office to have access to information and resources that may help them live a better life."
      >
        <p>
          My vision for Foskaris Wellness is for it to become a hub of wellness and longevity
          information that people can access no matter where they live. Technology has given us
          the ability to reach people across the United States and eventually around the world
          through education, telehealth, remote testing, and personalized guidance from the
          comfort of their own homes.
        </p>
        <p>
          I had one client who would actually fly in twice a month to see me. As you can imagine,
          that became expensive and time-consuming. Today, being able to work with people
          remotely, coordinate testing, and send certain wellness devices directly to them has
          completely changed what&apos;s possible. Someone shouldn&apos;t have to live close to
          my office to have access to information and resources that may help them live a better
          life.
        </p>
        <p>
          I want to help people build a clearer roadmap for their health. That begins with
          understanding their health history and what&apos;s happening in their life
          today—how they&apos;re sleeping, their relationship with food, what and how much
          they&apos;re eating, their lifestyle, and other factors that may be affecting how they
          feel. From there, we can determine what additional testing may be valuable and give
          them direction on what steps to take next.
        </p>
        <p>
          For Red Light Pro Devices, my vision is equally ambitious. I would love to see our
          technology being used in clinics across the country. We already develop devices for
          professional as well as home use, and I believe there&apos;s a tremendous opportunity
          to connect those two environments.
        </p>
        <p>
          At our Red Light Pro Devices location in Anaheim Hills, we&apos;ve created a
          rent-to-buy program that allows someone to experience the technology at home before
          making the commitment to purchase. They can rent a device for a month, see how it fits
          into their own wellness or recovery routine, and if they decide to purchase it, apply
          their rental cost toward the device.
        </p>
        <p>
          My vision is to bring that model into wellness and healthcare offices throughout the
          United States, where people can experience the technology, rent a device to use at
          home, and then decide whether it&apos;s something they want to incorporate into their
          lifestyle long-term.
        </p>
        <p>
          Ultimately, I see Red Light Pro Devices becoming a household name. As more people create
          wellness rooms or dedicated wellness spaces in their homes, I want a Red Light Pro
          Device to be one of the technologies they choose to have there.
        </p>
        <p>
          Both companies share the same larger purpose: making wellness more accessible. Whether
          that&apos;s giving someone access to information, testing and personalized guidance
          from hundreds of miles away, or giving them access to professional-quality red light
          technology at home, I want to remove barriers that keep people from being proactive
          about their health.
        </p>
      </Interview>

      {/* ============================================== 13 · Q7 */}
      <Interview
        n="07"
        page="13"
        tone="char"
        size={16.7}
        lead={1.64}
        q="What advice would you give to aspiring women entrepreneurs who want to turn their ideas into meaningful businesses?"
        pull="Your passion gives you the reason to keep going; your plan gives you the foundation to turn that passion into something that can last."
      >
        <p>The first question I would ask is, &ldquo;Why do you want to do this?&rdquo;</p>
        <p>
          Your &ldquo;why&rdquo; has to be strong enough to carry you through the parts of
          entrepreneurship that aren&apos;t exciting, because having a great idea is very
          different from building a successful business around that idea.
        </p>
        <p>
          Before I entered the wellness industry, I was in the restaurant business with my
          family. People would sometimes tell me they wanted to open a restaurant because they
          thought it was an easy way to make money. I would tell them, &ldquo;There is nothing
          easy about owning a restaurant. You&apos;re going to be married to it. There will be
          times when you spend more time with that restaurant than you do with your
          family.&rdquo;
        </p>
        <p>
          I think that lesson applies to almost any business. How passionate are you about what
          you&apos;re creating? How long have you wanted to do it? And most importantly, what
          impact do you want this business to make in the world? When things become
          difficult—and they will—those answers matter.
        </p>
        <p>Then you have to take the passion and put a foundation underneath it.</p>
        <p>
          I would encourage any aspiring entrepreneur to create a real business plan. Understand
          what you&apos;re building. Is it an online business, a brick-and-mortar location, or
          both? What will it cost to operate? Will you need insurance? What licenses or
          requirements apply? How will you handle bookkeeping and accounting? What systems need
          to be in place behind the scenes?
        </p>
        <p>
          Those things may not be as exciting as creating the product, designing the logo, or
          making the first sale, but they&apos;re what allow you to build something sustainable.
        </p>
        <p>
          I would also encourage women to write down exactly what they envision their business
          looking like at year one, year three, and year five. Don&apos;t just think about how
          much money you want the business to make. Think about what you want it to become, who
          you want it to serve, and what difference you want it to make.
        </p>
        <p>
          A meaningful business needs both passion and structure. Your passion gives you the
          reason to keep going; your plan gives you the foundation to turn that passion into
          something that can last.
        </p>
      </Interview>

      {/* ============================================== 14 · Q8 */}
      <InterviewSplit
        n="08"
        page="14"
        tone="blush"
        size={17.4}
        lead={1.64}
        q={<>What does being an &ldquo;Unstoppable Leader&rdquo; mean to you?</>}
        photoRight
        photo={{
          src: `${IMG}/kitchen.jpg`,
          alt: "Penny Foskaris in the kitchen, preparing fresh produce",
          ratio: 1417 / 1600,
          quote: "Setbacks can be the springboard for innovation.",
          by: "Penny Foskaris · On leading",
          quoteSize: 59,
          stats: [
            ["10+", "Years in business, and many pivots"],
            ["2½", "Years without an answer, before the work began"],
          ],
        }}
      >
        <p>
          To me, being an unstoppable leader doesn&apos;t mean that you never experience
          setbacks. It means that when something changes or doesn&apos;t work as planned,
          you&apos;re willing to learn from it, adapt, and find another way forward.
        </p>
        <p>
          In more than ten years of business, I&apos;ve had to pivot many times as markets have
          changed, new research has emerged, and the needs of my clients have evolved. I&apos;ve
          watched businesses struggle because they continued doing exactly what they had always
          done, even when the world around them was telling them it was time to change.
        </p>
        <p>
          I&apos;ve adopted the mindset that setbacks can be the springboard for innovation.
          Sometimes the obstacle in front of you is exactly what forces you to look at something
          differently and create a better solution.
        </p>
        <p>
          Being open-minded has been one of the most important parts of my growth as an
          entrepreneur. I don&apos;t want to build my businesses based only on what works today.
          I&apos;m constantly looking ahead—at emerging research, new technology, changing needs,
          and where health and wellness are going next.
        </p>
        <p>
          The vision I had when I started more than a decade ago has evolved in ways I never
          could have predicted, and I think that&apos;s a good thing. A strong vision gives you
          direction, but it shouldn&apos;t prevent you from evolving.
        </p>
      </InterviewSplit>

      {/* ============================================== 15 · THE RECORD */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>The File</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>Years. Rooms. Devices.</h2>
          <p className="fk-dek">From the library to Anaheim Hills, as she told it.</p>
          <ol className="fk-file">
            <li>
              <b>01</b>
              <div>
                <h4>The library</h4>
                <p>
                  A teenager reading about nutrition and health because an aunt had Type 1
                  diabetes and another family member had heart disease.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h4>Two and a half years</h4>
                <p>
                  Her mid-thirties. Dizzy spells, chronic fatigue, continuous abdominal pain.
                  Doctor after doctor, test after test, no answer.
                </p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h4>One week</h4>
                <p>
                  A holistic wellness center, and she begins to feel better. Back to school, then
                  Foskaris Wellness.
                </p>
              </div>
            </li>
            <li>
              <b>04</b>
              <div>
                <h4>More than 5,000</h4>
                <p>
                  People she has worked with on body fat, pain, stress, health markers and
                  chronic health challenges.
                </p>
              </div>
            </li>
            <li>
              <b>05</b>
              <div>
                <h4>About $28,000</h4>
                <p>
                  The professional red light system in the center. Its maker would not build for
                  home. Engineers at another red light company would.
                </p>
              </div>
            </li>
            <li>
              <b>06</b>
              <div>
                <h4>Rent to buy</h4>
                <p>
                  At Red Light Pro Devices in Anaheim Hills: a month at home, the rental cost
                  applied toward the device.
                </p>
              </div>
            </li>
            <li>
              <b>07</b>
              <div>
                <h4>The why</h4>
                <p>
                  Her first question to any founder. She learned the answer matters in her
                  family&apos;s restaurant business.
                </p>
              </div>
            </li>
            <li>
              <b>08</b>
              <div>
                <h4>More than ten years</h4>
                <p>
                  In business, with many pivots as markets, research and client needs changed.
                  Next: telehealth, remote testing, and rent-to-buy in offices nationwide.
                </p>
              </div>
            </li>
          </ol>
          <Folio page="15" section="The Record" />
        </div>
      </article>

      {/* ============================================== 16 · BE FEATURED */}
      <article className="mag-page fk fk-blush">
        <div className="fk-well">
          <Kicker>Be Featured</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>The desk is open.</h2>
          <p className="fk-dek">Get featured in the upcoming edition of PrimeCrest.</p>
          <ol className="fk-steps">
            <li>
              <b>01 · Nominate</b>
              <p>
                Send a leader, a method, and one number that changed. We print answers in the
                order they are given. We keep the numbers. We do not invent a second story
                for the photograph.
              </p>
            </li>
            <li>
              <b>02 · Sit</b>
              <p>
                Eight questions. In writing if you prefer. A plate that keeps the subject
                whole. Digital edition, portfolio plate, and a record that stays.
              </p>
            </li>
            <li>
              <b>03 · Scan</b>
              <p>
                Write the desk. Tell us why the year turned. theprimecrest.com ·
                Hello@thefortiora.com
              </p>
            </li>
          </ol>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 16,
              marginTop: 14,
            }}
          >
            <p style={{ margin: 0, fontFamily: "var(--fk-serif)", fontSize: 14, lineHeight: 1.4 }}>
              The year is still open.
            </p>
            <div className="fk-qr-card" style={{ background: "#1c1412", padding: 8 }}>
              <img src="/brand/qr-primecrest.png" alt="Scan to register" />
            </div>
          </div>
          <Folio page="16" section="Be Featured" />
        </div>
      </article>

      {/* ============================================== 17 · AD LEFT */}
      <article className="mag-page fk fk-char" data-density="hard">
        <AdArt shift={0} />
        <div className="fk-well" style={{ zIndex: 3 }}>
          <Kicker>Fortiora Group · Advertisement</Kicker>
          <h2 className="fk-head" style={{ fontSize: 38, maxWidth: 620 }}>
            One AI workspace for the whole conversation.
          </h2>
          <p className="fk-dek" style={{ maxWidth: 580 }}>
            Team chat, channels, calls and meetings in a single room. The assistant drafts
            the message, catches you up on what you missed, and turns a thread into a
            decision with the record intact.
          </p>
          <div className="fk-hair" />
          <ul className="fk-ad-list">
            <li>
              <b>Chat &amp; channels</b>
              <p>
                Every project thread in one place, summarized the moment you open it,
                searchable in plain language across the whole company.
              </p>
            </li>
            <li>
              <b>Calls &amp; meetings</b>
              <p>
                Live transcription with recaps and action items assigned before anyone hangs
                up. Spoken once, kept forever.
              </p>
            </li>
            <li>
              <b>The assistant</b>
              <p>
                Drafts replies in your voice, answers questions from the record with its
                source, and briefs you on what changed while you were away.
              </p>
            </li>
            <li>
              <b>Signal</b>
              <p>
                Where decisions stall, who is waiting on a reply, where the team&apos;s
                attention actually goes. The layer that answers why.
              </p>
            </li>
          </ul>
          <div className="fk-lockup" style={{ marginTop: 8 }}>
            <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 52 }} />
            <div className="fk-lockup-mark">
              <b>Fortiora</b>
              <span>Group</span>
            </div>
          </div>
          <Folio page="17" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 18 · AD RIGHT */}
      <article className="mag-page fk fk-char" data-density="hard">
        <AdArt shift={-840} />
        <div className="fk-well" style={{ zIndex: 3 }}>
          <Kicker>Built for operators</Kicker>
          <h2 className="fk-head" style={{ fontSize: 36 }}>
            The day, planned before it starts.
          </h2>
          <p className="fk-ad-copy" style={{ marginTop: 12 }}>
            Built for people who already have a stack and do not want another login. Fortiora
            sits on the conversation you already have and makes it searchable, briefable, and
            hard to lose.
          </p>
          <div className="fk-hair" />
          <ul className="fk-ad-list">
            <li>
              <b>Morning brief</b>
              <p>
                What moved overnight, who is waiting, which thread now needs a decision. Open
                the workspace and the day is already in order.
              </p>
            </li>
            <li>
              <b>The record</b>
              <p>
                Decisions stay attached to the talk that produced them. Six months later you
                can still find who said yes, and why.
              </p>
            </li>
            <li>
              <b>Your voice</b>
              <p>
                Drafts that sound like the person who will send them. Edit, send, or ignore.
                The assistant does not replace the judgment.
              </p>
            </li>
            <li>
              <b>One vendor</b>
              <p>Chat, rooms, calls, notes. One bill, one search box, one place the work lives.</p>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              marginTop: 8,
              flex: "0 0 auto",
            }}
          >
            <div>
              <div className="fk-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 64 }} />
                <div className="fk-lockup-mark">
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="fk-ad-copy" style={{ marginTop: 14, fontSize: 13 }}>
                <b style={{ color: "#f4eee2" }}>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Sheridan, Wyoming
                <br />
                An advertisement by the publisher of PrimeCrest
              </p>
            </div>
            <div className="fk-qr-card">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
          <Folio page="18" section="Advertisement" />
        </div>
      </article>

      {/* ============================================== 19 · BACK COVER */}
      <article className="mag-page fk fk-bleed" data-density="hard">
        <img
          className="fk-img"
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
              "radial-gradient(72% 52% at 50% 32%, rgba(212,86,58,0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(28,20,18,0.6) 0%, rgba(28,20,18,0.36) 42%, rgba(28,20,18,0.76) 100%)",
          }}
        />
        <div className="fk-well fk-back">
          <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="fk-back-mark">
              <svg className="fk-back-crest" viewBox="0 0 48 42" aria-hidden>
                <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" fill="#f6f0e6" />
                <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" fill="#e8896a" />
              </svg>
              <b className="fk-back-word" aria-label="PrimeCrest">
                PRIMECREST<span>.</span>
              </b>
            </div>
            <span className="fk-pill" style={{ marginTop: 26 }}>
              Where Vision Meets Voice
            </span>
            <p
              style={{
                margin: "30px 0 0",
                maxWidth: 470,
                fontFamily: "var(--fk-serif)",
                fontSize: 20,
                fontStyle: "italic",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "rgba(242,237,227,0.9)",
              }}
            >
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
            <p className="fk-imprint">
              <b>PrimeCrest</b> · a product of Fortiora Group LLC
              <br />
              30 N Gould St Ste R, Sheridan, WY 82801, United States
              <br />
              hello@theprimecrest.com · <b>theprimecrest.com</b>
            </p>
            <div className="fk-hair" style={{ width: 320, background: "rgba(232,137,106,0.4)" }} />
            <p className="fk-label" style={{ letterSpacing: "0.4em" }}>
              The October Issue · Vol. VIII · 2026
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
