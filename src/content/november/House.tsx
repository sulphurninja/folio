/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

/**
 * PrimeCrest · The November Issues (Vol. IX – XV) · house furniture.
 *
 * Shared by all seven November issues: the bold PrimeCrest masthead, the
 * credits masthead (same names as the Foskaris issue) and the back cover
 * (the Foskaris back page, coloured per issue). Each issue sets the
 * --nv-* variables on its scope class (see src/app/m/november/house.css).
 */

/** The masthead names, as printed in every PrimeCrest issue. */
export function novemberCredits(onTheCover: string): [string, string][] {
  return [
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
    ["Published by", "Fortiora Group LLC"],
    ["On the Cover", onTheCover],
    ["Subscriptions", "theprimecrest.com"],
  ];
}

function Crest({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 42" aria-hidden>
      <path d="M24 1.2 46 20.4h-7.2L24 8.6 9.2 20.4H2Z" className="pc-crest-top" />
      <path d="M24 15.2 46 34.4h-7.2L24 22.6 9.2 34.4H2Z" className="pc-crest-low" />
    </svg>
  );
}

/**
 * The bold PrimeCrest masthead (the Foskaris cover lockup): crest plus a
 * letterspaced PRIMECREST that runs the full width of its container.
 * Size with --pc-mast-size (default 92px) on the parent.
 */
export function PrimeCrestMast({
  tone = "dark",
  tagline = true,
  hero = false,
  className = "",
}: {
  tone?: "dark" | "light";
  tagline?: boolean;
  /** cover masthead: taller letters, heavier shadow, always above the photo */
  hero?: boolean;
  className?: string;
}) {
  return (
    <div className={`pc-mast is-${tone}${hero ? " is-hero" : ""} ${className}`}>
      <div className="pc-mast-word">
        <Crest className="pc-mast-crest" />
        <b aria-label="PrimeCrest">
          {"PRIMECREST".split("").map((c, i) => (
            <i key={i}>{c}</i>
          ))}
          <span>.</span>
        </b>
      </div>
      {tagline ? (
        <>
          <p className="pc-mast-tag">Where Vision Meets Voice</p>
          <div className="pc-mast-hair" />
        </>
      ) : null}
    </div>
  );
}

/** Back cover: the Foskaris back page, coloured by the issue's accent. */
export function NovemberBack({ scope, vol }: { scope: string; vol: string }) {
  return (
    <article className={`mag-page nv-back ${scope}`} data-density="hard">
      <img className="nv-back-img" src="/brand/backdrop-primecrest.jpg" alt="" />
      <div className="nv-back-grade" />
      <div className="nv-back-well">
        <div className="nv-back-center">
          <div className="nv-back-mark">
            <Crest className="nv-back-crest" />
            <b className="nv-back-word" aria-label="PrimeCrest">
              PRIMECREST<span>.</span>
            </b>
          </div>
          <span className="nv-back-pill">Where Vision Meets Voice</span>
          <p className="nv-back-line">
            A journal of affairs, business and culture, independent reporting, considered
            writing, and the people who shape what comes next.
          </p>
        </div>
        <div className="nv-back-foot">
          <img
            className="nv-back-qr"
            src="/brand/qr-primecrest.png"
            alt="Scan to visit theprimecrest.com"
          />
          <p className="nv-back-imprint">
            <b>PrimeCrest</b> · a product of Fortiora Group LLC
            <br />
            30 N Gould St Ste R, Sheridan, WY 82801, United States
            <br />
            hello@theprimecrest.com · <b>theprimecrest.com</b>
          </p>
          <div className="nv-back-hair" />
          <p className="nv-back-issue">The November Issue · Vol. {vol} · 2026</p>
        </div>
      </div>
    </article>
  );
}
