/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

export function PhotoCopy({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="mag-photo-copy">
      {kicker ? <p className="mag-kicker mag-kicker-light">{kicker}</p> : null}
      {title ? <p className="mag-photo-copy-h">{title}</p> : null}
      <div className="mag-photo-copy-cols">{children}</div>
    </div>
  );
}

export type IssueIconKind =
  | "cask"
  | "book"
  | "house"
  | "flow"
  | "leaf"
  | "atom"
  | "ray"
  | "cycle"
  | "key";

export function YearBadge({ accent }: { accent: string }) {
  return (
    <div className="mag-year-badge" style={{ borderColor: accent, color: accent }} aria-label="2026">
      <em>20</em>
      <strong>26</strong>
    </div>
  );
}

export function IssueIcon({ kind, accent }: { kind: IssueIconKind; accent: string }) {
  return (
    <div className="mag-issue-badge" style={{ borderColor: accent, color: accent }}>
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {kind === "cask" && (
          <>
            <ellipse cx="32" cy="16" rx="16" ry="6" />
            <path d="M16 16v28c0 4 7 8 16 8s16-4 16-8V16" />
            <path d="M16 30h32M16 42h32" />
          </>
        )}
        {kind === "book" && (
          <>
            <path d="M10 14v36c8-4 16-4 22 0V14c-6-4-14-4-22 0z" />
            <path d="M32 14v36c6-4 14-4 22 0V14c-8-4-16-4-22 0z" />
          </>
        )}
        {kind === "house" && (
          <>
            <path d="M8 30 L32 10 L56 30" />
            <path d="M16 28v26h32V28" />
            <path d="M28 54V40h8v14" />
          </>
        )}
        {kind === "flow" && (
          <>
            <path d="M10 44c8-18 12-18 20 0s12 18 20 0" />
            <path d="M10 28c8-16 12-16 20 0s12 16 20 0" />
            <circle cx="32" cy="20" r="4" />
          </>
        )}
        {kind === "leaf" && (
          <>
            <path d="M32 54c0-22 18-34 22-38C50 12 20 14 14 40c8 2 14 8 18 14z" />
            <path d="M32 54C28 36 22 24 14 16" />
          </>
        )}
        {kind === "atom" && (
          <>
            <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none" />
            <ellipse cx="32" cy="32" rx="24" ry="10" />
            <ellipse cx="32" cy="32" rx="24" ry="10" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="24" ry="10" transform="rotate(-60 32 32)" />
          </>
        )}
        {kind === "ray" && (
          <>
            <circle cx="32" cy="32" r="10" />
            <path d="M32 8v8M32 48v8M8 32h8M48 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 20l6-6" />
          </>
        )}
        {kind === "cycle" && (
          <>
            <path d="M16 28a16 16 0 0 1 26-10l2-6 8 12-14-2 3-5" />
            <path d="M48 36a16 16 0 0 1-26 10l-2 6-8-12 14 2-3 5" />
          </>
        )}
        {kind === "key" && (
          <>
            <circle cx="22" cy="24" r="10" />
            <path d="M30 28l24 16v8h-8v-6h-6v-6h-6" />
          </>
        )}
      </svg>
    </div>
  );
}

export type CoverLayout =
  | "nameplate"
  | "band"
  | "split"
  | "script"
  | "italic"
  | "right"
  | "hot"
  | "cycle"
  | "island";

export function IssueCover({
  img,
  alt,
  vol,
  accent,
  icon,
  name,
  role,
  place,
  title,
  teasers,
  objectPosition,
  showKicker = true,
  layout = "nameplate",
  scriptWord,
  nameColor,
}: {
  img: string;
  alt: string;
  vol: string;
  accent: string;
  icon: IssueIconKind;
  name: string;
  role: string;
  place: string;
  title?: ReactNode;
  teasers?: [string, string][];
  objectPosition?: string;
  showKicker?: boolean;
  layout?: CoverLayout;
  scriptWord?: string;
  nameColor?: string;
}) {
  const defaultTitle = (
    <>
      Top 10
      <br />
      Unstoppable
      <br />
      Business
      <br />
      Leaders<span style={{ color: accent }}>.</span>
    </>
  );

  return (
    <article className={`mag-page mag-bleed mag-issue-cover mag-cover-${layout}`} data-density="hard">
      <img
        className="mag-fill"
        src={img}
        alt={alt}
        fetchPriority="high"
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className="mag-issue-scrim" />
      <div className="mag-overlay mag-issue-cover-ui">
        <header className="mag-issue-mast">
          <img src="/brand/logo-primecrest.png" alt="PrimeCrest" />
          <p>Where Vision Meets Voice</p>
        </header>

        <div className="mag-issue-mid">
          <div className="mag-issue-col">
            <p className="mag-issue-vol">{vol}</p>
            {showKicker && (
              <p className="mag-issue-kicker" style={{ color: accent }}>
                Making a difference in 2026
              </p>
            )}
            <h1 className="mag-display mag-issue-title">
              {scriptWord ? (
                <>
                  <em className="mag-issue-script" style={{ color: accent }}>
                    {scriptWord}
                  </em>
                  {title ?? (
                    <>
                      <br />
                      Leader in
                      <br />
                      2026
                    </>
                  )}
                </>
              ) : (
                (title ?? defaultTitle)
              )}
            </h1>
            {teasers && teasers.length > 0 && (
              <div className="mag-issue-teasers">
                {teasers.map(([k, line]) => (
                  <div key={k}>
                    <b style={{ color: accent }}>{k}</b>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mag-issue-badges">
            <IssueIcon kind={icon} accent={accent} />
            <YearBadge accent={accent} />
          </div>
        </div>

        <footer className="mag-issue-who" style={layout === "hot" ? { borderTopColor: accent } : undefined}>
          <p className="mag-display mag-issue-name" style={{ color: nameColor ?? (layout === "nameplate" || layout === "island" ? accent : undefined) }}>
            {name}
          </p>
          <p className="mag-issue-role">{role}</p>
          <p className="mag-issue-place">{place}</p>
        </footer>
      </div>
      <img className="mag-qr" src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
      <p className="mag-issue-url">theprimecrest.com</p>
    </article>
  );
}

export function IssueCredits({
  accent,
  groundClass = "mag-dark",
  subject,
  words,
  volume,
  note,
}: {
  accent: string;
  groundClass?: string;
  subject: string;
  words: string;
  volume: string;
  note: ReactNode;
}) {
  const rows: [string, string][] = [
    ["Magazine", "PrimeCrest · an independent journal of affairs, business, and culture · theprimecrest.com"],
    ["Published by", "Fortiora Group LLC · 30 N Gould St Ste R, Sheridan, WY 82801, United States"],
    ["Editorial & Design", "Fortiora Studio · issue architecture, type, and art direction"],
    ["Digital Production", "Fortiora Studio · flipbook, assets, and the live edition"],
    ["Featured Subject", subject],
    ["Words", words],
    ["Photographs", "Supplied by the subject and used with permission for this edition"],
    ["Series", "Top 10 Unstoppable Business Leaders Making a Difference in 2026"],
    ["Issue", `${volume} · eighteen leaves · digital canvas 840 × 1120`],
    ["Contact", "Hello@thefortiora.com · theprimecrest.com"],
  ];

  return (
    <article className={`mag-page mag-pad ${groundClass}`}>
      <div className="mag-body mag-fill-page mag-credits-fill">
        <p className="mag-kicker" style={{ color: accent }}>
          The imprint
        </p>
        <h2
          className="mag-h"
          style={{ color: "#f4efe6", fontStyle: "italic", fontWeight: 500, fontSize: 44, marginBottom: 10 }}
        >
          Credits.
        </h2>
        <div className="mag-credits-note">{note}</div>
        <ul className="mag-credits-list mag-credits-dense">
          {rows.map(([role, name]) => (
            <li key={role}>
              <b style={{ color: accent }}>{role}</b>
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <div className="mag-credits-lockup mag-credits-lockup-row">
          <img src="/brand/logo-primecrest.png" alt="PrimeCrest" />
          <img src="/brand/qr-primecrest.png" alt="Scan to visit theprimecrest.com" />
        </div>
        <p className="mag-imprint mag-credits-rights">
          © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be
          reproduced or transmitted in any form without prior written permission from the publisher.
        </p>
      </div>
    </article>
  );
}

export type AdSection = { heading: string; body: string };

export function HouseAdSpread({
  variant = "visual",
  accent,
  kicker,
  headlineLead,
  headlineHero,
  sections,
  quote,
  continued,
  photo,
  photoAlt,
  caption,
  objectPosition,
  tag,
  foot,
}: {
  variant?: "visual" | "quote";
  accent: string;
  kicker: string;
  headlineLead: string;
  headlineHero: string;
  sections: AdSection[];
  quote: string;
  continued?: AdSection[];
  photo: string;
  photoAlt: string;
  caption: string;
  objectPosition?: string;
  tag: string;
  foot: string;
}) {
  if (variant === "quote") {
    return (
      <>
        <article className="mag-page mag-pad mag-ad-quote-left">
          <div className="mag-body mag-fill-page">
            <p className="mag-kicker" style={{ color: accent }}>
              {kicker}
            </p>
            <h2 className="mag-h mag-ad-title">
              <span>{headlineLead}</span>
              <strong style={{ color: accent }}>{headlineHero}</strong>
            </h2>
            <div className="mag-cols-3 mag-folio mag-dropcap mag-dense">
              {sections.map((s) => (
                <div key={s.heading}>
                  <p className="mag-sub" style={{ color: accent }}>
                    {s.heading}
                  </p>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mag-qframe" style={{ color: accent }}>
              <p>{quote}</p>
            </div>
            <p className="mag-foot">{foot} · 16</p>
          </div>
        </article>
        <article className="mag-page mag-pad mag-ad-quote-right">
          <div className="mag-body mag-fill-page">
            <div className="mag-ad-slab" style={{ boxShadow: `inset 0 8px 0 ${accent}` }}>
              <p>{quote}</p>
            </div>
            {continued && continued.length > 0 && (
              <div className="mag-cols mag-folio mag-dense" style={{ marginTop: 18 }}>
                {continued.map((s) => (
                  <div key={s.heading}>
                    <p className="mag-sub" style={{ color: accent }}>
                      {s.heading}
                    </p>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="mag-foot">{foot} · 17</p>
          </div>
        </article>
      </>
    );
  }

  return (
    <>
      <article className="mag-page mag-pad mag-dark mag-ad-copy">
        <div className="mag-body mag-fill-page">
          <p className="mag-kicker" style={{ color: accent }}>
            {kicker}
          </p>
          <p className="mag-ad-lead">{headlineLead}</p>
          <h2 className="mag-display mag-ad-hero" style={{ color: accent }}>
            {headlineHero}
          </h2>
          <div className="mag-cols mag-folio mag-dropcap mag-dense mag-ad-cols">
            {sections.map((s) => (
              <div key={s.heading}>
                <p className="mag-sub" style={{ color: accent }}>
                  {s.heading}
                </p>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mag-qframe mag-ad-q" style={{ color: accent }}>
            <p>{quote}</p>
          </div>
          <p className="mag-foot" style={{ color: "rgba(244,239,230,0.5)" }}>
            {foot} · 16 · theprimecrest.com
          </p>
        </div>
      </article>
      <article className="mag-page mag-bleed mag-dark mag-ad-visual" data-density="hard">
        <img
          className="mag-fill"
          src={photo}
          alt={photoAlt}
          style={objectPosition ? { objectPosition } : undefined}
        />
        <p className="mag-ad-tag" style={{ background: accent }}>
          {tag}
        </p>
        <div className="mag-caption-bar">{caption}</div>
      </article>
    </>
  );
}
