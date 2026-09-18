/* eslint-disable @next/next/no-img-element */

/**
 * PrimeCrest · Interior page kit (components)
 * ------------------------------------------------------------------
 * Pairs with src/app/m/kit.css. Every component renders a complete
 * `.mag-page` leaf and fills it by construction. A new issue passes
 * its theme class (e.g. "kt-judy") plus content — nothing else.
 */

import type { CSSProperties, ReactNode } from "react";

type Base = { theme: string };

function cls(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Full-bleed photograph with a bottom-anchored display stack. */
export function PlatePage({
  theme,
  img,
  imgPos,
  kicker,
  side,
  script,
  title,
  dek,
  footLeft,
  footRight,
}: Base & {
  img: string;
  imgPos?: string;
  kicker: string;
  side?: string;
  script?: string;
  title?: ReactNode;
  dek?: string;
  footLeft: string;
  footRight: string;
}) {
  return (
    <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
      <img className="kt-plate-img" src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
      <div className="kt-plate-grade" />
      <div className="kt-plate-ui">
        <p className="kt-kicker">{kicker}</p>
        {side ? <span className="kt-plate-side">{side}</span> : null}
        <div className="kt-plate-stack">
          {script ? <p className="kt-script">{script}</p> : null}
          {title ? <h2 className="kt-plate-title">{title}</h2> : null}
          {dek ? <p className="kt-plate-dek">{dek}</p> : null}
          <div className="kt-plate-foot">
            <span>{footLeft}</span>
            <span>{footRight}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Feature opener: full-bleed portrait with the subject's name.
 *  Variants: "bottom" (default), "boxed" (framed plate centered),
 *  "side" (name runs vertically up the left edge), "center". */
export function OpenerPage({
  theme,
  variant = "bottom",
  img,
  imgPos,
  kicker,
  side,
  nameTop,
  nameBottom,
  dek,
  footLeft,
  footRight,
}: Base & {
  variant?: "bottom" | "boxed" | "side" | "center";
  img: string;
  imgPos?: string;
  kicker: string;
  side?: string;
  nameTop: string;
  nameBottom: string;
  dek?: string;
  footLeft: string;
  footRight: string;
}) {
  const foot = (
    <div className="kt-plate-foot">
      <span>{footLeft}</span>
      <span>{footRight}</span>
    </div>
  );
  const base = (
    <>
      <img
        className="kt-plate-img"
        src={img}
        alt={`${nameTop} ${nameBottom}`}
        style={imgPos ? { objectPosition: imgPos } : undefined}
      />
      <div className="kt-plate-grade" />
    </>
  );

  if (variant === "boxed") {
    return (
      <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
        {base}
        <div className="kt-plate-ui kt-opener-boxed">
          <p className="kt-kicker">{kicker}</p>
          <div className="kt-opener-box">
            <h2 className="kt-opener-name">
              <b>{nameTop}</b>
              <em>{nameBottom}</em>
            </h2>
            {dek ? <p className="kt-plate-dek">{dek}</p> : null}
          </div>
          {foot}
        </div>
      </article>
    );
  }

  if (variant === "side") {
    return (
      <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
        {base}
        <h2 className="kt-opener-vert">
          <b>{nameTop}</b>
          <em>{nameBottom}</em>
        </h2>
        <div className="kt-plate-ui kt-opener-sidecopy">
          <p className="kt-kicker" style={{ justifyContent: "flex-end", width: "100%" }}>
            {kicker}
          </p>
          <div className="kt-plate-stack">
            {dek ? <p className="kt-plate-dek">{dek}</p> : null}
            {foot}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
      {base}
      <div className={cls("kt-plate-ui", variant === "center" && "kt-opener-center")}>
        <p className="kt-kicker" style={variant === "center" ? { justifyContent: "center" } : undefined}>
          {kicker}
        </p>
        {side ? <span className="kt-plate-side">{side}</span> : null}
        <div className="kt-plate-stack">
          <h2 className="kt-opener-name">
            <b>{nameTop}</b>
            <em>{nameBottom}</em>
          </h2>
          {dek ? <p className="kt-plate-dek">{dek}</p> : null}
          {foot}
        </div>
      </div>
    </article>
  );
}

/** Editor's letter. Variants:
 *  - "plate" (default): centered book-plate head, two columns
 *  - "side": rail head on the left, single-measure body on the right
 *  - "dark": centered single measure on the dark ground  */
export function LetterPage({
  theme,
  variant = "plate",
  script,
  title,
  children,
  signName,
  signRole,
  quote,
  folio,
}: Base & {
  variant?: "plate" | "side" | "dark";
  script: string;
  title: ReactNode;
  children: ReactNode;
  signName: string;
  signRole: string;
  quote?: string;
  folio: [string, string, string];
}) {
  const sign = (
    <div className="kt-letter-sign">
      <div>
        <p className="kt-script">{signName}</p>
        <small>{signRole}</small>
      </div>
      {quote ? <blockquote>{quote}</blockquote> : null}
    </div>
  );

  if (variant === "side") {
    return (
      <article className={cls("mag-page kt kt-light", theme)}>
        <div className="kt-frame-box" />
        <div className="kt-well kt-letter-side">
          <div className="kt-ls-rail">
            <p className="kt-script">{script}</p>
            <h2>{title}</h2>
            {sign}
          </div>
          <div className="kt-ls-main">
            <div className="kt-letter-body">{children}</div>
            <Folio parts={folio} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cls("mag-page kt", variant === "dark" ? "kt-dark" : "kt-light", theme)}
      data-density={variant === "dark" ? "hard" : undefined}
    >
      <div className="kt-frame-box" />
      <div className={cls("kt-well", variant === "dark" && "kt-letter-dark")}>
        <div className="kt-letter-head">
          <p className="kt-script">{script}</p>
          <h2>{title}</h2>
          <div className="kt-letter-rules" />
        </div>
        <div className="kt-letter-body">{children}</div>
        {sign}
        <Folio parts={folio} />
      </div>
    </article>
  );
}

/** Masthead / credits. Variants: "rows" (two columns, default),
 *  "ledger" (narrow centered list, dotted leaders), "grid" (three columns).
 *  `light` renders it on paper instead of the dark ground. */
export function CreditsPage({
  theme,
  variant = "rows",
  light,
  script,
  issueLine,
  credits,
  imprint,
  qr,
}: Base & {
  variant?: "rows" | "ledger" | "grid";
  light?: boolean;
  script: string;
  issueLine: string;
  credits: ReadonlyArray<readonly [string, string]>;
  imprint: ReactNode;
  qr: string;
}) {
  const listClass =
    variant === "ledger" ? "kt-credits-ledger" : variant === "grid" ? "kt-credits-grid" : "kt-credits-rows";
  return (
    <article
      className={cls("mag-page kt", light ? "kt-light" : "kt-dark", theme)}
      data-density={light ? undefined : "hard"}
    >
      <div className="kt-frame-box" />
      <div className="kt-well">
        <div className="kt-credits-head">
          <p className="kt-credits-word">{script}</p>
          <p className="kt-credits-issueline">{issueLine}</p>
        </div>
        <dl className={listClass}>
          {credits.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="kt-credits-foot">
          <p>{imprint}</p>
          <img src={qr} alt="Scan to visit" />
        </div>
      </div>
    </article>
  );
}

/** Contents. Variants:
 *  - "split" (default): full-height photograph beside the entries column
 *  - "overlay": entries panel over a full-bleed photograph
 *  - "rail": rotated CONTENTS rail, photo band above the entries
 *  - "band": photo band on top, centered script, two-column entries  */
export function ContentsPage({
  theme,
  variant = "split",
  flip,
  img,
  imgPos,
  caption,
  script,
  issueLine,
  entries,
}: Base & {
  variant?: "split" | "overlay" | "rail" | "band";
  flip?: boolean;
  img: string;
  imgPos?: string;
  caption: string;
  script: string;
  issueLine: string;
  entries: ReadonlyArray<{ no: string; title: string; dek: string }>;
}) {
  const list = (cn: string) => (
    <ol className={cn}>
      {entries.map((e) => (
        <li key={e.no}>
          <em>{e.no}</em>
          <div>
            <h4>{e.title}</h4>
            <p>{e.dek}</p>
          </div>
        </li>
      ))}
    </ol>
  );

  if (variant === "overlay") {
    return (
      <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
        <img className="kt-plate-img" src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
        <div className="kt-plate-grade" />
        <span className="kt-co-word">{script}</span>
        <div className="kt-co-panel">
          <p className="kt-contents-issue">{issueLine}</p>
          {list("")}
        </div>
      </article>
    );
  }

  if (variant === "rail") {
    return (
      <article className={cls("mag-page kt kt-dark", theme)} data-density="hard">
        <div className="kt-contents kt-contents-rail">
          <div className="kt-rail">
            <b>{script.toUpperCase()}</b>
          </div>
          <div className="kt-contents-main">
            <img className="kt-rail-pic" src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
            <p className="kt-contents-issue">{issueLine}</p>
            {list("kt-contents-list")}
          </div>
        </div>
      </article>
    );
  }

  if (variant === "band") {
    return (
      <article className={cls("mag-page kt kt-dark", theme)} data-density="hard">
        <div className="kt-cb">
          <div className="kt-cb-pic">
            <img src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
            <p className="kt-contents-cap">{caption}</p>
          </div>
          <div className="kt-cb-main">
            <p className="kt-script">{script}</p>
            <p className="kt-contents-issue">{issueLine}</p>
            {list("kt-cb-grid")}
          </div>
        </div>
      </article>
    );
  }

  const pic = (
    <div className="kt-contents-pic">
      <img src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
      <p className="kt-contents-cap">{caption}</p>
    </div>
  );
  const main = (
    <div className="kt-contents-main">
      <p className="kt-script">{script}</p>
      <p className="kt-contents-issue">{issueLine}</p>
      {list("kt-contents-list")}
    </div>
  );
  return (
    <article className={cls("mag-page kt kt-dark", theme)} data-density="hard">
      <div className="kt-contents" style={flip ? { gridTemplateColumns: "1fr 46%" } : undefined}>
        {flip ? main : pic}
        {flip ? pic : main}
      </div>
    </article>
  );
}

/** Essay page on paper: headline, columns, pull-quote band. */
export function StoryPage({
  theme,
  variant = "cols",
  dense,
  kicker,
  title,
  dek,
  children,
  pull,
  folio,
}: Base & {
  variant?: "cols" | "measure" | "three";
  dense?: boolean;
  kicker: string;
  title: ReactNode;
  dek?: string;
  children: ReactNode;
  pull?: string;
  folio: [string, string, string];
}) {
  return (
    <article className={cls("mag-page kt kt-light", theme)}>
      <div className="kt-frame-box" />
      <div
        className={cls(
          "kt-well",
          variant === "measure" && "kt-story-measure",
          variant === "three" && "kt-story-three",
        )}
      >
        <div className="kt-story-head">
          <p className="kt-kicker">{kicker}</p>
          <h2>{title}</h2>
          {dek ? <p className="kt-dek">{dek}</p> : null}
        </div>
        <div className={cls("kt-story-body", dense && "kt-dense")}>{children}</div>
        {pull ? <p className="kt-pull">{pull}</p> : null}
        <Folio parts={folio} />
      </div>
    </article>
  );
}

/** Bold run-in subhead for dense body columns. */
export function Subhead({ children }: { children: ReactNode }) {
  return <p className="kt-subhead">{children}</p>;
}

/** Tinted pull-quote panel with an oversized mark; sits inside columns. */
export function QuotePanel({ children }: { children: ReactNode }) {
  return (
    <div className="kt-quote-panel">
      <p>{children}</p>
    </div>
  );
}

/** Photograph embedded in body columns. */
export function Inset({ src, pos, caption }: { src: string; pos?: string; caption?: string }) {
  return (
    <figure className="kt-inset">
      <img src={src} alt="" style={pos ? { objectPosition: pos } : undefined} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** Half photograph, half copy — record, timeline, interview, feature pages.
 *  Pass `items` for a keyed list, or `children` for dense feature prose. */
export function SplitPage({
  theme,
  dark,
  reverse,
  band,
  wide,
  img,
  imgPos,
  caption,
  kicker,
  title,
  items,
  children,
  folio,
}: Base & {
  dark?: boolean;
  reverse?: boolean;
  /** photograph banded across the top instead of a vertical half */
  band?: boolean;
  /** widen the photograph column to 55% */
  wide?: boolean;
  img: string;
  imgPos?: string;
  caption: string;
  kicker: string;
  title: ReactNode;
  items?: ReadonlyArray<readonly [string, string]>;
  children?: ReactNode;
  folio: [string, string, string];
}) {
  const pic = (
    <div className="kt-split-pic">
      <img src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
      <p className="kt-split-cap">{caption}</p>
    </div>
  );
  const main = (
    <div className="kt-split-main">
      <p className="kt-kicker">{kicker}</p>
      <h2>{title}</h2>
      {items ? (
        <ul className="kt-split-list">
          {items.map(([k, v]) => (
            <li key={k}>
              <b>{k}</b>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="kt-split-prose">{children}</div>
      )}
      <Folio parts={folio} />
    </div>
  );
  return (
    <article
      className={cls("mag-page kt", dark ? "kt-dark" : "kt-light", theme)}
      data-density={dark ? "hard" : undefined}
    >
      <div className={cls("kt-split", reverse && "kt-split-rev", band && "kt-split-band", wide && "kt-split-55")}>
        {reverse && !band ? main : pic}
        {reverse && !band ? pic : main}
      </div>
    </article>
  );
}

/** Publisher / SaaS advertisement page. */
export function AdPage({
  theme,
  variant = "list",
  dark,
  mark,
  hero,
  copy,
  items,
  contact,
  qr,
}: Base & {
  variant?: "list" | "poster" | "cards";
  dark?: boolean;
  mark: string;
  hero: ReactNode;
  copy: string;
  items: ReadonlyArray<readonly [string, string]>;
  contact: ReactNode;
  qr?: string;
}) {
  return (
    <article
      className={cls("mag-page kt", dark ? "kt-dark" : "kt-light", theme)}
      data-density={dark ? "hard" : undefined}
    >
      <div className="kt-frame-box" />
      <div className={cls("kt-well", variant === "poster" && "kt-ad-poster", variant === "cards" && "kt-ad-cards")}>
        <p className="kt-ad-mark">{mark}</p>
        <h3 className="kt-ad-hero">{hero}</h3>
        <p className="kt-ad-copy">{copy}</p>
        <ul className="kt-ad-list">
          {items.map(([k, v], i) => (
            <li key={k}>
              <em>{String(i + 1).padStart(2, "0")}</em>
              <div>
                <b>{k}</b>
                <span>{v}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="kt-ad-foot">
          <p>{contact}</p>
          {qr ? <img src={qr} alt="Scan to reach us" /> : null}
        </div>
      </div>
    </article>
  );
}

/** Full-bleed invitation with a framed card. */
export function SpotPage({
  theme,
  variant = "center",
  img,
  imgPos,
  script,
  title,
  qr,
  cta,
  note,
}: Base & {
  variant?: "center" | "corner" | "band";
  img: string;
  imgPos?: string;
  script: string;
  title: ReactNode;
  qr: string;
  cta: string;
  note: string;
}) {
  const card =
    variant === "band" ? (
      <div className="kt-spot-card">
        <div className="kt-spot-main">
          <p className="kt-script">{script}</p>
          <h3>{title}</h3>
          <b style={{ marginTop: 14 }}>{cta}</b>
          <p>{note}</p>
        </div>
        <img src={qr} alt="Scan to register" />
      </div>
    ) : (
      <div className="kt-spot-card">
        <p className="kt-script">{script}</p>
        <h3>{title}</h3>
        <img src={qr} alt="Scan to register" />
        <b>{cta}</b>
        <p>{note}</p>
      </div>
    );
  return (
    <article className={cls("mag-page kt kt-bleed", theme)} data-density="hard">
      <img className="kt-spot-bg" src={img} alt="" style={imgPos ? { objectPosition: imgPos } : undefined} />
      <div className="kt-spot-grade" />
      <div className={cls("kt-spot", variant === "corner" && "kt-spot-corner", variant === "band" && "kt-spot-band")}>
        {card}
      </div>
    </article>
  );
}

export function Folio({ parts, style }: { parts: [string, string, string]; style?: CSSProperties }) {
  return (
    <p className="kt-folio" style={style}>
      <span>{parts[0]}</span>
      <span>{parts[1]}</span>
      <span>{parts[2]}</span>
    </p>
  );
}
