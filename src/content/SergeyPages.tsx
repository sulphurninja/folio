/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import { NovemberBack, PrimeCrestMast, novemberCredits } from "@/content/november/House";

/**
 * PrimeCrest · The November Issue, Vol. XIV · No. 14
 * Sergey Shayakhmetov, Founder & CEO, Longevium.
 *
 * Closed `ss-*` system: graphite, bone and signal orange (his tee), Unbounded
 * / IBM Plex Serif / IBM Plex Mono, a measurement grid on every ground,
 * crosshair marks and telemetry folios. Fig. 01 maps Longevium strictly from
 * his own answers. The interview is printed whole, ten questions in the five
 * sections and the order he answered them. Every fact is from his interview.
 */

const IMG = "/issues/sergey";
const RUN = "PrimeCrest · The November Issue · Vol. XIV";

export const SERGEY_TOC = [
  { page: 0, label: "Cover" },
  { page: 1, label: "Contents" },
  { page: 3, label: "Credits" },
  { page: 4, label: "From the Desk" },
  { page: 5, label: "The Longevity Mindset" },
  { page: 8, label: "Fig. 01 · Built to Connect" },
  { page: 9, label: "Fortiora Forge" },
  { page: 11, label: "The Interview" },
  { page: 17, label: "The Readout" },
  { page: 18, label: "Last Word" },
  { page: 19, label: "Fortiora Sentinel" },
  { page: 20, label: "Be Featured" },
  { page: 21, label: "PrimeCrest" },
];

function Folio({ page, section }: { page: string; section: string }) {
  return (
    <p className="ss-folio">
      <span>
        <i />
        {RUN}
      </span>
      <span>{section}</span>
      <b>P. {page}</b>
    </p>
  );
}

function Cross({ style }: { style: CSSProperties }) {
  return <span className="ss-cross" style={style} aria-hidden />;
}

function Pull({ children, by = "Sergey Shayakhmetov", size }: { children: ReactNode; by?: string; size?: number }) {
  return (
    <div>
      <p className="ss-pull" style={size ? { fontSize: size } : undefined}>
        {children}
      </p>
      <p className="ss-pull-by">{by}</p>
    </div>
  );
}

type Q = { n: string; q: ReactNode; a: ReactNode };

/** One interview leaf: a section of two questions, answers whole, a working rail. */
function Section({
  n,
  label,
  head,
  page,
  tone,
  size = 15,
  lead = 1.6,
  qgap,
  rail,
  qs,
}: {
  n: string;
  label: string;
  head: ReactNode;
  page: string;
  tone: "graph" | "paper";
  size?: number;
  lead?: number;
  qgap?: number;
  rail: ReactNode;
  qs: Q[];
}) {
  return (
    <article className={`mag-page ss ss-${tone}`}>
      <div className="ss-well">
        <div className="ss-topbar">
          <span>
            The Interview · <b>Section {n}</b> / 05
          </span>
          <span>{label}</span>
        </div>
        <h2 className="ss-head" style={{ marginTop: 20, fontSize: 44 }}>
          {head}
        </h2>
        <div className="ss-iv">
          <div className="ss-rail">{rail}</div>
          <div
            className="ss-qs"
            style={
              {
                "--ss-size": `${size}px`,
                "--ss-lead": lead,
                ...(qgap ? { "--ss-qgap": `${qgap}px` } : {}),
              } as CSSProperties
            }
          >
            {qs.map((x) => (
              <div className="ss-q" key={x.n}>
                <b>{x.n}</b>
                <h3>{x.q}</h3>
                <div className="ss-body">{x.a}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <Folio page={page} section="The Interview" />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------ Fig. 01 */

function EcoNode({
  x,
  y,
  tag,
  title,
  lines,
}: {
  x: number;
  y: number;
  tag: string;
  title: string;
  lines: string[];
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="214" height="150" fill="#141416" stroke="rgba(233,230,223,0.32)" />
      <rect width="214" height="3" fill="#ff6a1a" />
      <text x="14" y="26" fill="#ff6a1a" style={{ font: "600 10px var(--ss-m)", letterSpacing: "0.16em" }}>
        {tag}
      </text>
      <text x="14" y="54" fill="#e9e6df" style={{ font: "600 19px var(--ss-d)", letterSpacing: "-0.03em" }}>
        {title}
      </text>
      {lines.map((l, i) => (
        <text
          key={l}
          x="14"
          y={82 + i * 20}
          fill="rgba(233,230,223,0.84)"
          style={{ font: "400 13px var(--ss-s)" }}
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function RingPill({ x, y, n, a, b }: { x: number; y: number; n: string; a: string; b: string }) {
  return (
    <g transform={`translate(${x - 74} ${y - 27})`}>
      <rect width="148" height="54" fill="#0b0b0c" stroke="#ff6a1a" strokeWidth="1.2" />
      <text x="10" y="20" fill="#ff6a1a" style={{ font: "600 10px var(--ss-m)", letterSpacing: "0.14em" }}>
        {n}
      </text>
      <text x="10" y="36" fill="#e9e6df" style={{ font: "500 10.5px var(--ss-m)", letterSpacing: "0.04em" }}>
        {a}
      </text>
      <text x="10" y="48" fill="#e9e6df" style={{ font: "500 10.5px var(--ss-m)", letterSpacing: "0.04em" }}>
        {b}
      </text>
    </g>
  );
}

function EcosystemFigure() {
  const cx = 372;
  const cy = 330;
  return (
    <svg
      viewBox="0 0 744 660"
      width={744}
      height={660}
      style={{ display: "block", width: "100%", height: "auto" }}
      role="img"
      aria-label="Longevium ecosystem: clinics, development work, Longevium.travel and research around the person and a ten-year horizon"
    >
      {/* horizon rings */}
      <circle cx={cx} cy={cy} r="250" fill="none" stroke="rgba(233,230,223,0.14)" strokeDasharray="2 6" />
      <circle cx={cx} cy={cy} r="176" fill="none" stroke="rgba(255,106,26,0.55)" strokeWidth="1.2" strokeDasharray="6 5" />
      {Array.from({ length: 60 }, (_, i) => {
        const a = (i / 60) * Math.PI * 2;
        const r1 = 250;
        const r2 = i % 5 === 0 ? 238 : 245;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * r1}
            y1={cy + Math.sin(a) * r1}
            x2={cx + Math.cos(a) * r2}
            y2={cy + Math.sin(a) * r2}
            stroke="rgba(233,230,223,0.32)"
            strokeWidth="1"
          />
        );
      })}

      {/* spokes to the four parts */}
      {[
        [214, 150, cx - 124, cy - 124],
        [530, 150, cx + 124, cy - 124],
        [214, 510, cx - 124, cy + 124],
        [530, 510, cx + 124, cy + 124],
      ].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff6a1a" strokeWidth="1.2" />
          <circle cx={x2} cy={y2} r="4" fill="#ff6a1a" />
        </g>
      ))}

      {/* the person */}
      <circle cx={cx} cy={cy} r="96" fill="#ff6a1a" />
      <circle cx={cx} cy={cy} r="104" fill="none" stroke="#ff6a1a" strokeOpacity="0.5" />
      <text x={cx} y={cy - 22} textAnchor="middle" fill="#0b0b0c" style={{ font: "600 10px var(--ss-m)", letterSpacing: "0.2em" }}>
        AT THE CENTRE
      </text>
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#0b0b0c" style={{ font: "800 23px var(--ss-d)", letterSpacing: "-0.04em" }}>
        One person
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" fill="#0b0b0c" style={{ font: "500 10px var(--ss-m)", letterSpacing: "0.12em" }}>
        THE NEXT TEN YEARS
      </text>
      <text x={cx} y={cy + 44} textAnchor="middle" fill="#0b0b0c" style={{ font: "500 10px var(--ss-m)", letterSpacing: "0.12em" }}>
        OF THEIR LIFE
      </text>

      {/* what someone should be able to do */}
      <RingPill x={cx} y={cy - 176} n="01" a="UNDERSTAND" b="THEIR HEALTH" />
      <RingPill x={cx + 176} y={cy} n="02" a="ACCESS THE" b="RIGHT EXPERTISE" />
      <RingPill x={cx} y={cy + 176} n="03" a="FOLLOW A" b="PRACTICAL PLAN" />
      <RingPill x={cx - 176} y={cy} n="04" a="SEE PROGRESS" b="OVER TIME" />

      <EcoNode x={0} y={0} tag="[A] CLINICAL CARE" title="The clinics" lines={["The foundation.", "Three operating in Dubai.", "Planned: Abu Dhabi, Bali."]} />
      <EcoNode
        x={530}
        y={0}
        tag="[B] TECHNOLOGY"
        title="Development"
        lines={["AI tools for doctors.", "EEG-based brain assessment.", "Immersive neurotechnology."]}
      />
      <EcoNode
        x={0}
        y={510}
        tag="[C] HOW PEOPLE LIVE"
        title="Longevium.travel"
        lines={["Wellness and longevity travel.", "AI-assisted, medically", "informed recommendations."]}
      />
      <EcoNode
        x={530}
        y={510}
        tag="[D] RESEARCH"
        title="Research"
        lines={["Brain-health and AI projects.", "Longer term: neuroscience", "and regenerative medicine."]}
      />
    </svg>
  );
}

/* ---------------------------------------------------- Fortiora Forge art */

function ForgeGhost({ shift }: { shift: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }} aria-hidden>
      <div
        style={{
          position: "absolute",
          left: shift,
          top: 0,
          width: 1680,
          height: 1120,
          background:
            "radial-gradient(46% 40% at 50% 46%, rgba(255,106,26,0.26) 0%, rgba(255,106,26,0.06) 52%, transparent 72%)",
        }}
      />
      <svg
        viewBox="0 0 1680 1120"
        width={1680}
        height={1120}
        style={{ position: "absolute", left: shift, top: 0, width: 1680, height: 1120 }}
      >
        <text
          x="-20"
          y="1010"
          fill="none"
          stroke="rgba(255,106,26,0.3)"
          strokeWidth="1.5"
          style={{ font: "800 470px var(--ss-d)", letterSpacing: "-0.06em" }}
        >
          FORGE
        </text>
      </svg>
    </div>
  );
}

function AgentGraph() {
  const node = (x: number, y: number, name: string, role: string, state: string, hot = false) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width="148" height="62" rx="2" fill={hot ? "#ff6a1a" : "#18181b"} stroke={hot ? "#ff6a1a" : "rgba(233,230,223,0.3)"} />
      <text x="12" y="22" fill={hot ? "#0b0b0c" : "#e9e6df"} style={{ font: "600 13px var(--ss-d)", letterSpacing: "-0.02em" }}>
        {name}
      </text>
      <text x="12" y="38" fill={hot ? "#0b0b0c" : "rgba(233,230,223,0.6)"} style={{ font: "400 9.5px var(--ss-m)", letterSpacing: "0.08em" }}>
        {role}
      </text>
      <text x="12" y="53" fill={hot ? "#0b0b0c" : "#ff6a1a"} style={{ font: "600 9px var(--ss-m)", letterSpacing: "0.14em" }}>
        {state}
      </text>
    </g>
  );
  const wire = (d: string) => <path d={d} fill="none" stroke="#ff6a1a" strokeWidth="1.3" strokeDasharray="4 4" />;
  return (
    <svg viewBox="0 0 720 300" width={720} height={300} style={{ display: "block", width: "100%", height: "auto" }} aria-hidden>
      <defs>
        <pattern id="ssDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(233,230,223,0.12)" />
        </pattern>
      </defs>
      <rect width="720" height="300" fill="url(#ssDots)" />
      {wire("M164 150 C 200 150, 200 70, 236 70")}
      {wire("M164 150 L 236 150")}
      {wire("M164 150 C 200 150, 200 230, 236 230")}
      {wire("M384 70 C 420 70, 420 150, 456 150")}
      {wire("M384 150 L 456 150")}
      {wire("M384 230 C 420 230, 420 150, 456 150")}
      {wire("M604 150 L 640 150")}
      {node(16, 119, "planner", "SPLITS THE TASK", "● RUNNING", true)}
      {node(236, 39, "retriever", "REPO + DOCS", "✓ DONE")}
      {node(236, 119, "coder", "PROPOSES THE PATCH", "● RUNNING")}
      {node(236, 199, "tester", "RUNS THE SUITE", "○ QUEUED")}
      {node(456, 119, "reviewer", "CHECKS THE DIFF", "○ WAITING")}
      <g transform="translate(640 112)">
        <rect width="64" height="76" fill="none" stroke="#e9e6df" strokeOpacity="0.5" strokeDasharray="3 3" />
        <text x="32" y="34" textAnchor="middle" fill="#e9e6df" style={{ font: "600 9px var(--ss-m)", letterSpacing: "0.12em" }}>
          HUMAN
        </text>
        <text x="32" y="48" textAnchor="middle" fill="#e9e6df" style={{ font: "600 9px var(--ss-m)", letterSpacing: "0.12em" }}>
          GATE
        </text>
      </g>
    </svg>
  );
}

function Waterfall() {
  const spans: [string, number, number, string][] = [
    ["run · fix-flaky-test", 0, 100, "#e9e6df"],
    ["planner.split", 0, 14, "#ff6a1a"],
    ["retriever.search", 12, 22, "#ff6a1a"],
    ["tool.read_file", 30, 10, "#c94c0c"],
    ["coder.patch", 38, 30, "#ff6a1a"],
    ["guardrail.secrets", 66, 6, "#9fd7a5"],
    ["tester.run_suite", 70, 20, "#ff6a1a"],
    ["eval.regression", 88, 8, "#9fd7a5"],
    ["reviewer.diff", 94, 6, "#ff6a1a"],
  ];
  return (
    <div style={{ padding: "12px 14px 14px" }}>
      {spans.map(([name, start, len, c], i) => (
        <div
          key={name}
          style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 10, alignItems: "center", height: 22 }}
        >
          <span
            style={{
              fontSize: 10.5,
              color: i === 0 ? "#e9e6df" : "rgba(233,230,223,0.7)",
              paddingLeft: i === 0 ? 0 : 10,
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
          <span style={{ position: "relative", height: 10, background: "rgba(233,230,223,0.05)" }}>
            <span
              style={{
                position: "absolute",
                left: `${start}%`,
                width: `${len}%`,
                top: 0,
                bottom: 0,
                background: c,
                opacity: i === 0 ? 0.35 : 0.95,
              }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------- the issue */

export function SergeyPages() {
  return (
    <>
      {/* ============================================== 00 · COVER */}
      <article className="mag-page ss ss-cover" data-density="hard">
        <img
          className="ss-cover-img"
          src={`${IMG}/portrait.jpg`}
          alt="Sergey Shayakhmetov, Founder and CEO of Longevium, in an orange tee at golden hour"
          fetchPriority="high"
        />
        <div className="ss-cover-grade" />
        <div className="ss-cover-ui">
          <header className="ss-mast">
            <PrimeCrestMast tone="dark" tagline={false} hero />
            <div className="ss-mast-row">
              <span>
                The November Issue · November 2026 · <b>Vol. XIV</b> · No. 14
              </span>
              <span>Where Vision Meets Voice</span>
            </div>
          </header>

          <h2 className="ss-cover-title">
            <small>Cover story</small>
            <span className="is-the">The</span>
            <span className="is-future">Future</span>
            <span className="is-of">of Longevity</span>
            <span className="is-and">
              and <em>AI</em>
            </span>
          </h2>

          <div className="ss-roundel">
            <span>Vol.</span>
            <b>XIV</b>
            <span>Longevity</span>
          </div>

          <div className="ss-teasers">
            <div className="ss-teaser">
              <small>
                <span>Fig. 01</span>
                <span>P. 08</span>
              </small>
              <b>Built to connect</b>
              <p>Clinics, AI for doctors, EEG brain assessment, research. The map, in his words.</p>
            </div>
            <div className="ss-teaser">
              <small>
                <span>Interview</span>
                <span>P. 11</span>
              </small>
              <b>Ten questions, whole</b>
              <p>From the AIvarix exit to a busy Tuesday morning in the clinic.</p>
            </div>
            <div className="ss-teaser">
              <small>
                <span>Advice</span>
                <span>P. 16</span>
              </small>
              <b>Develop judgment</b>
              <p>When AI makes everything easy to produce, deciding what deserves to exist.</p>
            </div>
          </div>

          <p className="ss-spine">Lab notes · No. 14 · Longevium</p>

          <div className="ss-cover-name">
            <p className="ss-cover-role">Founder &amp; CEO · Longevium</p>
            <span className="ss-cover-first">Sergey</span>
            <span className="ss-cover-last">Shayakhmetov</span>
          </div>

          <div className="ss-cover-foot">
            <div className="ss-plate">
              <img className="mag-qr" src="/brand/barcode-primecrest.png" alt="PrimeCrest barcode and QR code" />
            </div>
            <p className="ss-cover-line">
              <b>“I think ambition should extend to our biology.”</b>
              <span>The longevity mindset · On AI, ambition and building a longevity ecosystem</span>
            </p>
          </div>
        </div>
      </article>

      {/* ============================================== 01 · CONTENTS PLATE (LEFT) */}
      <article className="mag-page ss ss-black">
        <div className="ss-strip is-or" style={{ left: 0, width: 94 }}>
          <span className="ss-strip-mono">01 / 02</span>
          <span className="ss-strip-word">CONTENTS</span>
          <span className="ss-strip-mono">Vol. XIV</span>
        </div>
        <img
          className="ss-plate-img"
          src={`${IMG}/mono-seated.jpg`}
          alt="Sergey Shayakhmetov, seated, in black and white"
          style={{ left: 94 }}
        />
        <Cross style={{ left: 112, top: 18 }} />
        <Cross style={{ right: 18, top: 18 }} />
        <Cross style={{ right: 18, bottom: 18 }} />
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 40,
            zIndex: 5,
            background: "#0b0b0c",
            color: "#e9e6df",
            padding: "12px 16px",
            fontFamily: "var(--ss-m)",
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            lineHeight: 1.6,
            borderLeft: "3px solid #ff6a1a",
          }}
        >
          Plate 01 · Sergey Shayakhmetov
          <br />
          Founder &amp; CEO, Longevium
        </div>
      </article>

      {/* ============================================== 02 · CONTENTS INDEX (RIGHT) */}
      <article className="mag-page ss ss-graph">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>Index</b> · The November Issue
            </span>
            <span>Vol. XIV · No. 14</span>
          </div>
          <h2 className="ss-head" style={{ marginTop: 22, fontSize: 52 }}>
            In this <em>issue.</em>
          </h2>
          <ol className="ss-toc" style={{ marginTop: 14, flex: 1, justifyContent: "space-between" }}>
            <li>
              <b>04</b>
              <div>
                <small>From the desk</small>
                <h4>Ambition, applied to the body.</h4>
                <p>An engineer who sold one AI company, and why he now counts in decades.</p>
              </div>
            </li>
            <li>
              <b>05</b>
              <div>
                <small>The feature</small>
                <h4>The longevity mindset.</h4>
                <p>AIvarix, three clinics in Dubai, and the question of what happens after the first appointment.</p>
              </div>
            </li>
            <li>
              <b>08</b>
              <div>
                <small>Fig. 01</small>
                <h4>Built to connect.</h4>
                <p>Longevium mapped from his own description: clinics, development, travel, research.</p>
              </div>
            </li>
            <li>
              <b>11</b>
              <div>
                <small>The interview · ten questions</small>
                <h4>Printed whole, in the order answered.</h4>
                <div className="ss-toc-sub">
                  <span>
                    <b>11</b>A longer view
                  </span>
                  <span>
                    <b>12</b>Built to connect
                  </span>
                  <span>
                    <b>14</b>Build. Test. Advance.
                  </span>
                  <span>
                    <b>15</b>Beyond the clinic
                  </span>
                  <span>
                    <b>16</b>A future worth having
                  </span>
                </div>
              </div>
            </li>
            <li>
              <b>17</b>
              <div>
                <small>The readout</small>
                <h4>The record, in numbers he gave.</h4>
                <p>Three clinics, two cities planned, one ten-year horizon.</p>
              </div>
            </li>
            <li>
              <b>18</b>
              <div>
                <small>Last word</small>
                <h4>The real luxury.</h4>
                <p>Time, and being well enough to choose what to do with it.</p>
              </div>
            </li>
          </ol>
          <div className="ss-house">
            <div>
              <small>03 · Masthead</small>
              <b>Credits</b>
            </div>
            <div>
              <small>09 · 19 · Fortiora Group</small>
              <b>
                Forge <em>/</em> Sentinel
              </b>
            </div>
            <div>
              <small>20 · PrimeCrest</small>
              <b>Be featured</b>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <Folio page="02" section="Contents" />
          </div>
        </div>
      </article>

      {/* ============================================== 03 · CREDITS (LEFT) */}
      <article className="mag-page ss ss-graph">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>Masthead</b> · PrimeCrest
            </span>
            <span>November 2026</span>
          </div>
          <h2 className="ss-head" style={{ marginTop: 40, fontSize: 114, letterSpacing: "-0.07em" }}>
            Credits<em>.</em>
          </h2>
          <p className="ss-dek" style={{ marginTop: 18, fontSize: 21 }}>
            The November Issue, Vol. XIV, No. 14. Ten questions put to the founder of Longevium, printed in
            full.
          </p>
          <ul className="ss-credits" style={{ marginTop: 26 }}>
            {novemberCredits("Sergey Shayakhmetov").map(([k, v], i) => (
              <li key={k}>
                <span>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {k}
                </span>
                <strong>{v}</strong>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: "auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 28,
              alignItems: "end",
              paddingTop: 22,
              borderTop: "1px solid rgba(233,230,223,0.2)",
            }}
          >
            <div>
              <p className="ss-label" style={{ marginBottom: 10 }}>
                Corporate office
              </p>
              <p className="ss-imprint">
                <b>Fortiora Group LLC</b>
                <br />
                30 N Gould St Ste R, Sheridan, WY 82801
                <br />
                United States
                <br />
                Hello@thefortiora.com · <b>thefortiora.com</b>
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
              <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 70, width: "auto" }} />
              <div className="ss-qr">
                <img src="/brand/qr-fortiora.png" alt="Scan to visit thefortiora.com" style={{ width: 96 }} />
              </div>
            </div>
          </div>
          <p className="ss-rights" style={{ marginTop: 22, paddingTop: 14, borderTop: "1px solid rgba(233,230,223,0.2)" }}>
            © 2026 Fortiora Group LLC. All rights reserved. No part of this publication may be reproduced or
            transmitted in any form without prior written permission from the publisher.
          </p>
          <div style={{ marginTop: 16 }}>
            <Folio page="03" section="Credits" />
          </div>
        </div>
      </article>

      {/* ============================================== 04 · FROM THE DESK (RIGHT) */}
      <article className="mag-page ss ss-paper">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>From the desk</b> · Editor&apos;s letter
            </span>
            <span>Vol. XIV</span>
          </div>
          <h2 className="ss-head" style={{ marginTop: 22, fontSize: 50 }}>
            Ambition, applied to <em>the body.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 250px", gap: 32, marginTop: 26, flex: 1 }}>
            <div className="ss-body ss-drop" style={{ "--ss-size": "17.2px", "--ss-lead": 1.64 } as CSSProperties}>
              <p>
                Founders tend to count time in quarters. Sergey Shayakhmetov counts it in decades, and he
                is precise about why.
              </p>
              <p>
                His company AIvarix developed AI for venous assessment and was acquired by a major
                pharmaceutical company. What he took from that was practical knowledge: how an idea moves
                through development and scientific work, and then into the market. What he does with it
                now is Longevium, an ecosystem around longevity, preventive medicine and human performance.
                Clinics in Dubai. AI tools for doctors. Brain assessment built on EEG. A travel platform.
                Research ambitions that run years out.
              </p>
              <p>
                What stayed with us after reading his answers was the impatience with hype. He wants a
                prototype, a well-designed experiment, or a difficult problem understood properly. He thinks
                the word “breakthrough” is easier to produce than the thing itself, and he says so in print.
              </p>
              <p>
                He is wry about his own household. His wife, Dr Kseniia Butova, brings the clinical
                perspective; he brings technology and entrepreneurship. The conversations at home, he
                reports, are very interesting.
              </p>
              <p>
                We have printed his ten answers whole, in the order he gave them. Fig. 01 on page 08 maps
                the company from his own description and nothing else. His advice to founders is on page
                16. It is short, and worth reading twice.
              </p>
              <p
                style={{
                  marginTop: 18,
                  fontFamily: "var(--ss-m)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ss-or-dk)",
                }}
              >
                The Editors · PrimeCrest
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ background: "#0b0b0c", padding: "16px 16px 18px", borderTop: "4px solid #ff6a1a" }}>
                <img src={`${IMG}/longevium.jpg`} alt="Longevium wordmark" style={{ width: "100%", height: "auto" }} />
                <p className="ss-label" style={{ marginTop: 16, fontSize: 9.5 }}>
                  Clinics operating · Dubai
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "var(--ss-d)",
                    fontWeight: 300,
                    fontSize: 112,
                    lineHeight: 0.9,
                    letterSpacing: "-0.07em",
                    color: "#ff6a1a",
                  }}
                >
                  03
                </p>
                <p className="ss-label" style={{ marginTop: 14, fontSize: 9.5, color: "rgba(233,230,223,0.7)" }}>
                  Planned · Abu Dhabi · Bali
                </p>
                <p className="ss-label" style={{ marginTop: 8, fontSize: 9.5, color: "rgba(233,230,223,0.7)" }}>
                  Before · AIvarix, acquired
                </p>
              </div>
              <div className="ss-read">
                <span>Subject</span>
                <b>Sergey Shayakhmetov</b>
                <p>Founder &amp; CEO, Longevium</p>
              </div>
              <div className="ss-read">
                <span>Field</span>
                <p style={{ marginTop: 4 }}>Longevity, preventive medicine and human performance</p>
              </div>
              <div className="ss-read">
                <span>Format</span>
                <p style={{ marginTop: 4 }}>Ten questions in five sections, answers printed whole</p>
              </div>
              <div className="ss-read">
                <span>Clinical perspective</span>
                <p style={{ marginTop: 4 }}>Dr Kseniia Butova, his wife</p>
              </div>
              <div className="ss-read">
                <span>Horizon</span>
                <p style={{ marginTop: 4 }}>“The next ten years of that person’s life.”</p>
              </div>
              <div style={{ marginTop: "auto" }}>
                <Pull size={17}>That makes for some very interesting conversations at home.</Pull>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <Folio page="04" section="From the Desk" />
          </div>
        </div>
      </article>

      {/* ============================================== 05 · OPENER PLATE (LEFT) */}
      <article className="mag-page ss ss-black">
        <img
          src={`${IMG}/thinking.jpg`}
          alt="Sergey Shayakhmetov, hand at his chin, in warm evening light"
          style={{ position: "absolute", left: 0, top: 0, width: 840, height: "auto", zIndex: 1 }}
        />
        <Cross style={{ left: 18, top: 18 }} />
        <Cross style={{ right: 18, top: 18 }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 68,
            zIndex: 4,
            background: "#0b0b0c",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 30px",
            fontFamily: "var(--ss-m)",
            fontSize: 10.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(233,230,223,0.7)",
            borderTop: "3px solid #ff6a1a",
          }}
        >
          <span>
            <b style={{ color: "#ff6a1a" }}>Plate 02</b> · Sergey Shayakhmetov
          </span>
          <span>The feature · 05</span>
        </div>
      </article>

      {/* ============================================== 06 · OPENER TEXT (RIGHT) */}
      <article className="mag-page ss ss-paper">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>The feature</b> · Editorial interview
            </span>
            <span>Origins &amp; purpose</span>
          </div>
          <h1 className="ss-open-title" style={{ marginTop: 26 }}>
            <span>The</span>
            <span>Longevity</span>
            <span>Mindset.</span>
          </h1>
          <p className="ss-label" style={{ marginTop: 18 }}>
            On AI, ambition and building a longevity ecosystem
          </p>
          <p className="ss-dek" style={{ marginTop: 14, fontSize: 22.5 }}>
            His first AI company was acquired by a major pharmaceutical company. Now Sergey Shayakhmetov
            runs three clinics in Dubai and wants to know what happens to a patient over the next ten
            years.
          </p>
          <div
            className="ss-body ss-cols ss-drop"
            style={
              {
                "--ss-size": "17.2px",
                "--ss-lead": 1.66,
                marginTop: 24,
                paddingTop: 20,
                borderTop: "2px solid #0b0b0c",
                flex: 1,
              } as CSSProperties
            }
          >
            <p>
              Sergey Shayakhmetov was working with artificial intelligence long before “AI-powered” became
              compulsory in every investor presentation. His background is engineering and building
              technology businesses. He founded AIvarix, which developed AI for venous assessment. A major
              pharmaceutical company acquired it.
            </p>
            <p>
              The exit gave him something practical: a working knowledge of how an idea moves through
              development, scientific work and commercialisation. It also left him with a larger question.
              What can be built today that will help people live better decades from now?
            </p>
            <p>
              Longevium is the answer he is building. He is its founder and chief executive, and the
              company is assembling an ecosystem around longevity, preventive medicine and human
              performance. His wife, Dr Kseniia Butova, brings the clinical perspective. He brings the
              technology and the entrepreneurship.
            </p>
            <p>
              What interests him is a contradiction most founders live inside. People spend years building
              businesses, accumulating assets and planning their futures, then discover that enjoying any
              of it depends on the one thing they barely invested in.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 18 }}>
            <div className="ss-read">
              <span>Before</span>
              <b>AIvarix</b>
              <p>AI for venous assessment. Acquired.</p>
            </div>
            <div className="ss-read">
              <span>Now</span>
              <b>Longevium</b>
              <p>Founder and CEO.</p>
            </div>
            <div className="ss-read">
              <span>On the ground</span>
              <b>Dubai</b>
              <p>Three clinics operating.</p>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <Folio page="06" section="The Longevity Mindset" />
          </div>
        </div>
      </article>

      {/* ============================================== 07 · STORY (LEFT) */}
      <article className="mag-page ss ss-paper">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>The feature</b> · Continued
            </span>
            <span>Clinics, proof, the next decade</span>
          </div>
          <div
            className="ss-body ss-cols"
            style={{ "--ss-size": "16.4px", "--ss-lead": 1.64, marginTop: 18, flex: 1 } as CSSProperties}
          >
            <p className="ss-sub" style={{ marginTop: 0 }}>
              [02] Biology
            </p>
            <p>
              His position is plain. Ambition should extend to biology. People are comfortable wanting
              better businesses and better technology. Wanting to stay strong, sharp and independent for
              longer deserves the same seriousness.
            </p>
            <p className="ss-sub">[03] A busy Tuesday</p>
            <p>
              The clinics keep him honest. The group now operates three of them in Dubai, and real people
              arrive with real expectations. A process that looked elegant on a diagram has to work on a
              busy Tuesday morning. He is happy to think ten years ahead. He also wants to know why a
              patient has not received a clear answer today.
            </p>
            <p>
              The hardest work, in his experience, happens between disciplines. Engineers, doctors,
              researchers and investors can look at one project and see four completely different
              problems. The job is to bring those views together without losing momentum, and without
              pretending a better presentation will settle everyone’s concerns.
            </p>
            <p className="ss-sub">[04] Proof</p>
            <p>
              He is hands-on with AI himself and uses it to challenge assumptions about how much time,
              money and manpower a project really needs. The question he likes to put to a team is whether
              a working version could be built this week. Clinical research asks harder ones: what is being
              tested, how it will be measured, what would change minds.
            </p>
            <p>
              A futuristic-looking device, in his phrase, is a design achievement. Calling it a medical
              breakthrough requires a different level of proof.
            </p>
            <p className="ss-sub">[05] Next</p>
            <p>
              Expansion to Abu Dhabi and Bali is planned. Brain-health and AI projects are being developed
              alongside the clinics, with longer-term research ambitions in neuroscience and regenerative
              medicine. Longevium.travel is meant to help patients and doctors find wellness and longevity
              destinations through AI-assisted, medically informed recommendations.
            </p>
            <p>
              He has a young daughter. When he thinks about longevity, he pictures being actively involved
              in her life decades from now, and still having adventures of his own. That, he says, makes
              the ambition very concrete.
            </p>
          </div>
          <div
            style={{
              marginTop: 20,
              background: "#0b0b0c",
              color: "#e9e6df",
              padding: "22px 26px 20px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 20,
              alignItems: "end",
              borderLeft: "6px solid #ff6a1a",
            }}
          >
            <p className="ss-pull" style={{ fontSize: 25, color: "#e9e6df" }}>
              The word “breakthrough” is currently much easier to produce than a breakthrough.
            </p>
            <p className="ss-pull-by" style={{ margin: 0, writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              S. Shayakhmetov
            </p>
          </div>
          <div style={{ marginTop: 16 }}>
            <Folio page="07" section="The Longevity Mindset" />
          </div>
        </div>
      </article>

      {/* ============================================== 08 · FIG. 01 (RIGHT) */}
      <article className="mag-page ss ss-graph">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>Fig. 01</b> · The ecosystem &amp; the work
            </span>
            <span>Drawn from his answers</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 22, gap: 20 }}>
            <h2 className="ss-head" style={{ fontSize: 50 }}>
              Built to <em>connect.</em>
            </h2>
            <img
              src={`${IMG}/longevium.jpg`}
              alt="Longevium wordmark"
              style={{ width: 236, height: "auto" }}
            />
          </div>
          <p className="ss-dek" style={{ marginTop: 14, fontSize: 17 }}>
            Longevium as its founder describes it: clinics at the base, development work around them, a
            travel platform reaching outward, research on the long horizon. In the middle, one person and
            the next ten years of their life.
          </p>
          <div style={{ marginTop: 22, flex: 1, display: "flex", alignItems: "center" }}>
            <EcosystemFigure />
          </div>
          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 26,
              paddingTop: 16,
              borderTop: "1px solid rgba(233,230,223,0.22)",
            }}
          >
            <Pull size={19}>The challenge is making these pieces useful together.</Pull>
            <p className="ss-body" style={{ "--ss-size": "13.5px", "--ss-lead": 1.5 } as CSSProperties}>
              “Someone should be able to understand their health, access appropriate expertise, follow a
              practical plan and see how they progress over time.” The four steps on the inner ring are his,
              in his order.
            </p>
          </div>
          <div style={{ marginTop: 16 }}>
            <Folio page="08" section="Fig. 01" />
          </div>
        </div>
      </article>

      {/* ============================================== 09 · FORTIORA FORGE (LEFT) */}
      <article className="mag-page ss ss-graph" data-density="hard">
        <ForgeGhost shift={0} />
        <div className="ss-well" style={{ padding: "44px 48px 36px" }}>
          <p className="ss-ad-kicker">
            <b>Advertisement</b> · Fortiora Group
          </p>
          <div className="ss-lockup" style={{ marginTop: 26 }}>
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora Forge</b>
              <span>AI agent platform</span>
            </div>
          </div>
          <h2 className="ss-ad-head" style={{ marginTop: 34, fontSize: 64 }}>
            Agents that do the work.
            <br />
            <em>Traces that show it.</em>
          </h2>
          <p className="ss-ad-copy" style={{ marginTop: 22, maxWidth: 640, fontSize: 17 }}>
            Forge is where engineering teams build AI agents, wire them together, test them against
            evaluations and run them inside guardrails. Every step is traced, so when an agent does
            something surprising, you can see exactly where and why.
          </p>
          <div className="ss-console" style={{ marginTop: 34 }}>
            <div className="ss-console-bar">
              <i />
              <i />
              <i />
              <span>forge · orchestration · fix-flaky-test</span>
              <em>● live</em>
            </div>
            <div style={{ padding: "14px 14px 10px" }}>
              <AgentGraph />
            </div>
            <ul className="ss-log" style={{ borderTop: "1px solid rgba(233,230,223,0.12)" }}>
              <li>
                <span>step 01</span>
                <b>planner</b>
                <span>split task into retrieve, patch, test</span>
                <em>ok</em>
              </li>
              <li>
                <span>step 02</span>
                <b>retriever</b>
                <span>pulled test file and recent commits</span>
                <em>ok</em>
              </li>
              <li>
                <span>step 03</span>
                <b>coder</b>
                <span>drafting patch on a scratch branch</span>
                <em>running</em>
              </li>
              <li>
                <span>step 04</span>
                <b>guardrail</b>
                <span>no write access to main without review</span>
                <em>enforced</em>
              </li>
            </ul>
          </div>
          <p
            className="ss-ad-kicker"
            style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid rgba(233,230,223,0.2)", display: "flex" }}
          >
            For engineering teams · Orchestration · Evaluations · Guardrails · Tracing
          </p>
        </div>
      </article>

      {/* ============================================== 10 · FORTIORA FORGE (RIGHT) */}
      <article className="mag-page ss ss-graph" data-density="hard">
        <ForgeGhost shift={-840} />
        <div className="ss-well" style={{ padding: "44px 48px 36px" }}>
          <div className="ss-console">
            <div className="ss-console-bar">
              <i />
              <i />
              <i />
              <span>trace · run fix-flaky-test</span>
              <em>observability</em>
            </div>
            <Waterfall />
          </div>
          <div className="ss-console" style={{ marginTop: 18 }}>
            <div className="ss-console-bar">
              <i />
              <i />
              <i />
              <span>evaluations · before release</span>
              <em>gate</em>
            </div>
            <ul className="ss-log">
              {[
                ["suite", "regression", "golden tasks re-run on the new prompt", "is-ok", "pass"],
                ["suite", "tool use", "right tool, right arguments, right order", "is-ok", "pass"],
                ["policy", "secrets", "no credentials in diffs or logs", "is-ok", "pass"],
                ["policy", "scope", "agent touched files outside the task", "is-hold", "hold"],
              ].map(([a, b, c, t, s]) => (
                <li key={b} style={{ gridTemplateColumns: "58px 92px 1fr auto", alignItems: "center" }}>
                  <span>{a}</span>
                  <b>{b}</b>
                  <span>{c}</span>
                  <span className={`ss-tag ${t}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ss-caps" style={{ marginTop: 26 }}>
            <div>
              <small>01 · ORCHESTRATION</small>
              <h4>Agents as a team</h4>
              <p>Planners, workers and reviewers with clear hand-offs, retries and a human gate where you want one.</p>
            </div>
            <div>
              <small>02 · EVALUATIONS</small>
              <h4>Tested before trusted</h4>
              <p>Run every change against your own tasks and policies. Nothing ships on a hunch.</p>
            </div>
            <div>
              <small>03 · GUARDRAILS</small>
              <h4>Limits that hold</h4>
              <p>Scoped permissions, blocked actions and approval steps, enforced at run time.</p>
            </div>
            <div>
              <small>04 · TRACING</small>
              <h4>Every step on record</h4>
              <p>Prompts, tool calls and outputs in one trace, searchable when something goes sideways.</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 20,
              paddingTop: 22,
            }}
          >
            <div>
              <div className="ss-lockup">
                <img src="/brand/logo-fortiora.png" alt="Fortiora Group" />
                <div>
                  <b>Fortiora</b>
                  <span>Group</span>
                </div>
              </div>
              <p className="ss-contact" style={{ marginTop: 14 }}>
                <b>Hello@thefortiora.com</b>
                <br />
                thefortiora.com · Fortiora Forge
              </p>
            </div>
            <div className="ss-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" />
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 11 · INTERVIEW I (LEFT) */}
      <Section
        n="01"
        label="Origins & purpose"
        head={
          <>
            A longer <em>view.</em>
          </>
        }
        page="11"
        tone="paper"
        size={16.2}
        lead={1.62}
        rail={
          <>
            <div className="ss-read">
              <span>Prior company</span>
              <b>AIvarix</b>
              <p>AI for venous assessment. Exit through acquisition by a major pharmaceutical company.</p>
            </div>
            <div className="ss-read">
              <span>Now</span>
              <b>Longevium</b>
              <p>Founder and CEO. Longevity, preventive medicine, human performance.</p>
            </div>
            <div className="ss-read">
              <span>Clinical perspective</span>
              <b>Dr Kseniia Butova</b>
              <p>His wife.</p>
            </div>
            <div className="ss-read">
              <span>The contradiction</span>
              <p>“Enjoying any of it depends on something we may have barely invested in: our health.”</p>
            </div>
            <div className="ss-read">
              <span>The bigger question</span>
              <p>“What can we build today that will help us live better decades from now?”</p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Pull size={22}>I think ambition should extend to our biology.</Pull>
            </div>
          </>
        }
        qs={[
          {
            n: "01",
            q: "Could you briefly share your professional journey?",
            a: (
              <>
                <p>
                  I’ve been working with AI and technology for years - long before “AI-powered” became
                  compulsory in every investor presentation.
                </p>
                <p>
                  My background is in engineering and building technology businesses. I founded AIvarix,
                  which developed AI for venous assessment and achieved a successful exit through acquisition
                  by a major pharmaceutical company. That experience gave me a practical understanding of how
                  an idea moves through development, scientific work and commercialisation.
                </p>
                <p>
                  Today, I’m the Founder and CEO of Longevium, where we’re building an ecosystem around
                  longevity, preventive medicine and human performance.
                </p>
                <p>
                  The question that interests me has become much bigger: what can we build today that will
                  help us live better decades from now?
                </p>
              </>
            ),
          },
          {
            n: "02",
            q: "What inspired you to join or work with Longevium?",
            a: (
              <>
                <p>
                  We spend years building businesses, accumulating assets and planning our futures. Then we
                  discover that enjoying any of it depends on something we may have barely invested in: our
                  health.
                </p>
                <p>That contradiction fascinates me.</p>
                <p>
                  Longevium grew out of the belief that we can take a much more active, intelligent approach
                  to ageing. My wife, Dr Kseniia Butova, brings the clinical perspective, and I bring
                  technology and entrepreneurship. That makes for some very interesting conversations at
                  home.
                </p>
                <p>
                  I think ambition should extend to our biology. We’re comfortable wanting better businesses,
                  better technology and better lives. Wanting to remain strong, sharp and independent for
                  longer deserves the same seriousness.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ============================================== 12 · INTERVIEW II (RIGHT) */}
      <Section
        n="02"
        label="The ecosystem & the work"
        head={
          <>
            Built to <em>connect.</em>
          </>
        }
        page="12"
        tone="graph"
        size={16.2}
        lead={1.62}
        rail={
          <>
            <div className="ss-read">
              <span>Clinics · Dubai</span>
              <b className="is-big">03</b>
              <p>Operated by the group today. The foundation of the ecosystem.</p>
            </div>
            <div className="ss-read">
              <span>One project, four views</span>
              <ul className="ss-checks" style={{ marginTop: 6 }}>
                <li>Engineers</li>
                <li>Doctors</li>
                <li>Researchers</li>
                <li>Investors</li>
              </ul>
              <p>“Four completely different problems.”</p>
            </div>
            <div className="ss-read">
              <span>The approach</span>
              <p>“Stay ambitious about the destination and very practical about the next step.”</p>
            </div>
            <div className="ss-read">
              <span>The real test</span>
              <p>“A process that looked elegant on a diagram suddenly has to work on a busy Tuesday morning.”</p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Pull size={18}>I’m interested in what happens over the next ten years of that person’s life.</Pull>
            </div>
          </>
        }
        qs={[
          {
            n: "03",
            q: "What is your current role and key focus at Longevium?",
            a: (
              <>
                <p>
                  As Founder and CEO, I’m building the connections between clinical care, technology,
                  research and the way people actually live.
                </p>
                <p>
                  Our clinics provide the foundation. Our development work includes AI tools for doctors,
                  EEG-based brain assessment and immersive neurotechnology. Longevium.travel extends that
                  vision into wellness and longevity travel.
                </p>
                <p>
                  The challenge is making these pieces useful together. Someone should be able to understand
                  their health, access appropriate expertise, follow a practical plan and see how they
                  progress over time.
                </p>
                <p>
                  A beautiful clinic can make a strong first impression. I’m interested in what happens over
                  the next ten years of that person’s life. That is the scale of relationship we want to
                  build.
                </p>
              </>
            ),
          },
          {
            n: "04",
            q: "What major challenges have shaped your career?",
            a: (
              <>
                <p>
                  The hardest work often happens between disciplines. Engineers, doctors, researchers and
                  investors can look at the same project and see four completely different problems.
                </p>
                <p>
                  I’ve had to learn how to bring those perspectives together without losing momentum - or
                  pretending that everyone’s concerns can be solved with a better presentation.
                </p>
                <p>
                  Operating clinics is particularly grounding. Real people arrive with real expectations. A
                  process that looked elegant on a diagram suddenly has to work on a busy Tuesday morning.
                </p>
                <p>
                  That has shaped my approach: stay ambitious about the destination and very practical about
                  the next step. I’m happy to think ten years ahead, but I also want to know why a patient
                  hasn’t received a clear answer today.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ============================================== 13 · TYPE PLATE (LEFT) */}
      <article className="mag-page ss ss-graph">
        <div className="ss-strip is-or" style={{ left: 0, width: 94 }}>
          <span className="ss-strip-mono">Q. 05</span>
          <span className="ss-strip-mono">Innovation &amp; milestones · Section 03</span>
          <span className="ss-strip-mono">P. 13</span>
        </div>
        <Cross style={{ left: 112, top: 18 }} />
        <Cross style={{ right: 18, top: 18 }} />
        <Cross style={{ right: 18, bottom: 18 }} />
        <div className="ss-well" style={{ left: 94, padding: "52px 44px 30px 40px" }}>
          <div className="ss-topbar">
            <span>
              <b>The founder&apos;s question</b>
            </span>
            <span>In his words</span>
          </div>
          <p
            style={{
              margin: "34px 0 0",
              fontFamily: "var(--ss-d)",
              fontWeight: 800,
              fontSize: 96,
              lineHeight: 0.94,
              letterSpacing: "-0.065em",
              color: "#e9e6df",
            }}
          >
            <span style={{ display: "block", color: "#ff6a1a", fontSize: 150, lineHeight: 0.62, height: 64 }}>“</span>
            Could we build a working version <span style={{ color: "#ff6a1a" }}>this week?</span>
          </p>
          <p className="ss-pull-by" style={{ marginTop: 22, fontSize: 11 }}>
            Sergey Shayakhmetov · on leadership and innovation
          </p>
          <svg viewBox="0 0 666 96" width={666} height={96} style={{ display: "block", width: "100%", height: "auto", marginTop: 34 }} aria-hidden>
            <line x1="0" y1="48" x2="666" y2="48" stroke="rgba(233,230,223,0.4)" />
            {Array.from({ length: 43 }, (_, i) => (
              <line
                key={i}
                x1={3 + i * 15.5}
                x2={3 + i * 15.5}
                y1={i % 6 === 0 ? 30 : 40}
                y2={i % 6 === 0 ? 66 : 56}
                stroke={i % 6 === 0 ? "#ff6a1a" : "rgba(233,230,223,0.35)"}
                strokeWidth={i % 6 === 0 ? 2 : 1}
              />
            ))}
            <rect x="0" y="44" width="654" height="8" fill="#ff6a1a" opacity="0.85" />
            <text x="0" y="18" fill="#ff6a1a" style={{ font: "600 11px var(--ss-m)", letterSpacing: "0.2em" }}>
              START
            </text>
            <text x="666" y="18" textAnchor="end" fill="#ff6a1a" style={{ font: "600 11px var(--ss-m)", letterSpacing: "0.2em" }}>
              A WORKING VERSION
            </text>
            <text x="333" y="90" textAnchor="middle" fill="rgba(233,230,223,0.6)" style={{ font: "500 10.5px var(--ss-m)", letterSpacing: "0.24em" }}>
              ONE WEEK
            </text>
          </svg>
          <p
            style={{
              margin: "30px 0 0",
              fontFamily: "var(--ss-s)",
              fontStyle: "italic",
              fontSize: 22,
              lineHeight: 1.45,
              color: "rgba(233,230,223,0.88)",
            }}
          >
            “I’m hands-on with AI myself. It helps me challenge assumptions about how much time, money and
            manpower a project really needs.”
          </p>
          <div
            style={{
              marginTop: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              ["01 · Build", "“Show me a prototype, a well-designed experiment or a difficult problem you’ve understood properly.”"],
              ["02 · Test", "“What are we testing, how will we measure it, and what would change our minds?”"],
              ["03 · Advance", "“The imagination to create and the discipline to find out whether it works.”"],
            ].map(([k, t]) => (
              <div key={k} className="ss-read">
                <span>{k}</span>
                <p style={{ fontSize: 15, lineHeight: 1.45 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ============================================== 14 · INTERVIEW III (RIGHT) */}
      <Section
        n="03"
        label="Innovation & milestones"
        head={
          <>
            Build. Test. <em>Advance.</em>
          </>
        }
        page="14"
        tone="paper"
        size={15.5}
        lead={1.62}
        rail={
          <>
            <div className="ss-read">
              <span>The people he likes</span>
              <p>“People who can turn curiosity into something tangible.”</p>
            </div>
            <div className="ss-read">
              <span>The level of proof</span>
              <p>“Calling it a medical breakthrough requires a different level of proof.”</p>
            </div>
            <div className="ss-read">
              <span>Clinical research asks</span>
              <ul className="ss-checks" style={{ marginTop: 6 }}>
                <li>What are we testing?</li>
                <li>How will we measure it?</li>
                <li>What would change our minds?</li>
              </ul>
            </div>
            <div className="ss-read">
              <span>Two kinds of experience</span>
              <p>Building intellectual property and bringing technology to market. Delivering care in the real world.</p>
            </div>
            <div className="ss-read">
              <span>Milestone</span>
              <p>“The AIvarix exit was a defining milestone.”</p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Pull size={21}>A futuristic-looking device is a design achievement.</Pull>
            </div>
          </>
        }
        qs={[
          {
            n: "05",
            q: "How do you approach leadership and innovation?",
            a: (
              <>
                <p>
                  I like people who can turn curiosity into something tangible. Show me a prototype, a
                  well-designed experiment or a difficult problem you’ve understood properly. That gives us
                  something useful to discuss.
                </p>
                <p>
                  I’m hands-on with AI myself. It helps me challenge assumptions about how much time, money
                  and manpower a project really needs. Sometimes the most productive question a founder can
                  ask is, “Could we build a working version this week?”
                </p>
                <p>
                  In clinical research, the questions become more demanding: what are we testing, how will we
                  measure it, and what would change our minds?
                </p>
                <p>
                  A futuristic-looking device is a design achievement. Calling it a medical breakthrough
                  requires a different level of proof.
                </p>
                <p>
                  I want our team to have the imagination to create and the discipline to find out whether it
                  works.
                </p>
              </>
            ),
          },
          {
            n: "06",
            q: "What key achievements are you most proud of?",
            a: (
              <>
                <p>
                  The AIvarix exit was a defining milestone. Seeing a major pharmaceutical company acquire
                  something we had built was meaningful recognition of the work behind it.
                </p>
                <p>
                  I’m also proud of building a group that now operates three clinics in Dubai. Developing
                  technology and running healthcare operations give you very different kinds of experience.
                  Having both changes the questions you ask and the decisions you make.
                </p>
                <p>
                  Together, they give Longevium a strong starting point: experience in building intellectual
                  property, bringing technology to market and delivering care in the real world.
                </p>
                <p>
                  What excites me now is putting that experience behind a more ambitious goal - creating an
                  organisation capable of developing new products and contributing to the science of healthy
                  ageing.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ============================================== 15 · INTERVIEW IV (LEFT) */}
      <Section
        n="04"
        label="The next chapter"
        head={
          <>
            Beyond the <em>clinic.</em>
          </>
        }
        page="15"
        tone="graph"
        size={15.2}
        lead={1.55}
        qgap={22}
        rail={
          <>
            <div className="ss-read">
              <span>As the industry matures</span>
              <p>“Companies will face tougher questions about evidence, outcomes and value.”</p>
            </div>
            <div className="ss-read">
              <span>On biohacking</span>
              <p>“I want to see that curiosity supported by better research and more meaningful measurement.”</p>
            </div>
            <div className="ss-read">
              <span>Expansion</span>
              <b>Dubai → Abu Dhabi, Bali</b>
            </div>
            <div
              style={{
                border: "1px solid #ff6a1a",
                padding: "12px 12px 14px",
              }}
            >
              <p className="ss-label" style={{ fontSize: 9.5 }}>
                The ecosystem, in motion
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--ss-d)",
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "-0.04em",
                  color: "#e9e6df",
                }}
              >
                Longevium.travel
              </p>
              <p className="ss-label is-dim" style={{ marginTop: 6, fontSize: 9, letterSpacing: "0.12em" }}>
                Wellness / Longevity / Travel
              </p>
            </div>
            <div className="ss-read">
              <span>What people will ask</span>
              <p>“How do I preserve my strength, protect my cognitive abilities and remain independent?”</p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Pull size={17}>Longevity is too important to leave its reputation entirely in the hands of marketing.</Pull>
            </div>
          </>
        }
        qs={[
          {
            n: "07",
            q: "How do you see your industry evolving in the coming years?",
            a: (
              <>
                <p>
                  I expect longevity to become a much more significant part of how people think about
                  healthcare, consumption and the second half of their lives.
                </p>
                <p>
                  People will increasingly ask: how do I preserve my strength, protect my cognitive abilities
                  and remain independent? Those questions create opportunities for medicine, AI,
                  biotechnology and entirely new services.
                </p>
                <p>
                  Biohacking has brought energy and curiosity into this conversation. I want to see that
                  curiosity supported by better research and more meaningful measurement.
                </p>
                <p>
                  The word “breakthrough” is currently much easier to produce than a breakthrough. As the
                  industry matures, companies will face tougher questions about evidence, outcomes and value.
                </p>
                <p>
                  That is a future I welcome. Longevity is too important to leave its reputation entirely in
                  the hands of marketing.
                </p>
              </>
            ),
          },
          {
            n: "08",
            q: "What are your future professional goals?",
            a: (
              <>
                <p>
                  I want to build Longevium into an international ecosystem that can deliver care, develop
                  proprietary technologies and create the conditions for useful research.
                </p>
                <p>
                  Our expansion plans include Abu Dhabi and Bali. Alongside the clinics, we’re developing
                  brain-health and AI projects, with longer-term research ambitions in neuroscience and
                  regenerative medicine.
                </p>
                <p>
                  We’re also developing Longevium.travel, a platform designed to help patients and doctors
                  find wellness and longevity destinations through AI-assisted, medically informed
                  recommendations.
                </p>
                <p>
                  A person might know they need a reset but have no idea which programme, destination or
                  expertise would actually fit their goals. We want to make that decision more intelligent and
                  connect travel with a broader approach to health.
                </p>
                <p>
                  I see enormous potential in bringing clinical expertise, technology and exceptional
                  environments together.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ============================================== 16 · INTERVIEW V (RIGHT) */}
      <Section
        n="05"
        label="Judgment & legacy"
        head={
          <>
            A future worth <em>having.</em>
          </>
        }
        page="16"
        tone="paper"
        size={15.1}
        lead={1.6}
        qgap={22}
        rail={
          <>
            <div className="ss-read">
              <span>Lasting impact</span>
              <p>“I would like us to expand people’s sense of what remains possible as they grow older.”</p>
            </div>
            <div className="ss-read">
              <span>For founders · in order</span>
              <ul className="ss-checks" style={{ marginTop: 6 }}>
                <li>Develop judgment.</li>
                <li>Get close to a real problem.</li>
                <li>Build an early version.</li>
                <li>Understand the economics.</li>
                <li>Choose people who can challenge you.</li>
              </ul>
            </div>
            <div className="ss-read">
              <span>Held lightly</span>
              <p>“Take the problem seriously while holding my first solution quite lightly.”</p>
            </div>
            <div className="ss-read">
              <span>The economics</span>
              <p>“Understand the economics before you become too attached to the story.”</p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Pull size={21}>Deciding what deserves to exist is becoming even more valuable.</Pull>
            </div>
          </>
        }
        qs={[
          {
            n: "09",
            q: "What advice would you give aspiring entrepreneurs and leaders?",
            a: (
              <>
                <p>
                  Develop judgment. AI is making it easier to produce software, research, presentations and
                  content. Deciding what deserves to exist is becoming even more valuable.
                </p>
                <p>
                  Get close to a real problem. Build an early version. Put it in front of people who have no
                  reason to flatter you. Learn what they use, what they ignore and what they would pay for.
                </p>
                <p>Understand the economics before you become too attached to the story.</p>
                <p>
                  And choose people who can challenge you. A founder’s confidence can help a company get
                  started; their ability to listen helps it grow.
                </p>
                <p>
                  I’ve learned to take the problem seriously while holding my first solution quite lightly.
                  There is usually a better version waiting on the other side of an uncomfortable
                  conversation.
                </p>
              </>
            ),
          },
          {
            n: "10",
            q: "What lasting impact would you like to create through your work at Longevium?",
            a: (
              <>
                <p>I would like us to expand people’s sense of what remains possible as they grow older.</p>
                <p>
                  There is something quietly depressing about planning your later years around all the
                  things you expect to stop doing. I want to contribute to a future where more people can keep
                  making plans that require energy, courage and curiosity.
                </p>
                <p>
                  I have a young daughter. When I think about longevity, I picture being actively involved in
                  her life decades from now - and still having adventures of my own.
                </p>
                <p>That makes the ambition very concrete.</p>
                <p>The real luxury is having time, and being well enough to choose what to do with it.</p>
                <p>
                  If Longevium can help more people preserve that freedom, while creating valuable technology
                  and contributing meaningful research, I will consider that work worth doing.
                </p>
              </>
            ),
          },
        ]}
      />

      {/* ============================================== 17 · THE READOUT (LEFT) */}
      <article className="mag-page ss ss-paper">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>The readout</b> · The record
            </span>
            <span>Every line from the interview</span>
          </div>
          <h2 className="ss-head" style={{ marginTop: 22, fontSize: 50 }}>
            The <em>readout.</em>
          </h2>
          <div className="ss-dials" style={{ marginTop: 24 }}>
            <div>
              <span>Clinics · Dubai</span>
              <b>03</b>
              <p>Operated by the group he built.</p>
            </div>
            <div>
              <span>Cities planned</span>
              <b>02</b>
              <p>Abu Dhabi and Bali.</p>
            </div>
            <div>
              <span>Horizon · years</span>
              <b>10</b>
              <p>The relationship he wants with each person.</p>
            </div>
          </div>
          <ol className="ss-record" style={{ marginTop: 18, flex: 1, alignContent: "space-between" }}>
            {[
              ["Background", "Engineering, and building technology businesses."],
              ["AIvarix", "Founded it. AI for venous assessment. Exit through acquisition by a major pharmaceutical company."],
              ["Longevium", "Founder and CEO. An ecosystem around longevity, preventive medicine and human performance."],
              ["Development", "AI tools for doctors, EEG-based brain assessment, immersive neurotechnology."],
              ["Longevium.travel", "Wellness and longevity destinations, matched through AI-assisted, medically informed recommendations."],
              ["Research", "Brain-health and AI projects now. Longer term: neuroscience and regenerative medicine."],
              ["At home", "Dr Kseniia Butova, his wife, brings the clinical perspective. A young daughter."],
              ["The test", "“Could we build a working version this week?”"],
              ["The bar", "“In clinical research, the questions become more demanding: what are we testing, how will we measure it, and what would change our minds?”"],
              ["The goal", "“I want to build Longevium into an international ecosystem that can deliver care, develop proprietary technologies and create the conditions for useful research.”"],
            ].map(([h, p], i) => (
              <li key={h}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <div>
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 18 }}>
            <Folio page="17" section="The Readout" />
          </div>
        </div>
      </article>

      {/* ============================================== 18 · LAST WORD (RIGHT) */}
      <article className="mag-page ss ss-black">
        <img
          className="ss-plate-img"
          src={`${IMG}/smile.jpg`}
          alt="Sergey Shayakhmetov, smiling, in an orange tee"
          style={{ left: 0 }}
        />
        <div className="ss-strip is-g" style={{ right: 0, width: 89 }}>
          <span className="ss-strip-mono">P. 18</span>
          <span className="ss-strip-mono">
            <b>Last word</b> · Judgment &amp; legacy
          </span>
          <span className="ss-strip-mono">
            <b>Plate 03</b>
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            width: 751,
            bottom: 0,
            zIndex: 4,
            background: "rgba(11,11,12,0.93)",
            borderTop: "4px solid #ff6a1a",
            padding: "26px 34px 26px",
          }}
        >
          <p className="ss-pull" style={{ fontSize: 29, color: "#e9e6df", maxWidth: 640 }}>
            The real luxury is having time, and being well enough to choose what to do with it.
          </p>
          <p className="ss-pull-by">Sergey Shayakhmetov · Founder &amp; CEO, Longevium</p>
        </div>
        <Cross style={{ left: 18, top: 18 }} />
      </article>

      {/* ============================================== 19 · FORTIORA SENTINEL (LEFT) */}
      <article className="mag-page ss ss-graph">
        <div className="ss-well" style={{ padding: "44px 48px 36px" }}>
          <p className="ss-ad-kicker">
            <b>Advertisement</b> · Fortiora Group
          </p>
          <div className="ss-lockup" style={{ marginTop: 24 }}>
            <img src="/brand/logo-fortiora.png" alt="Fortiora" />
            <div>
              <b>Fortiora Sentinel</b>
              <span>AI security posture</span>
            </div>
          </div>
          <h2 className="ss-ad-head" style={{ marginTop: 34, fontSize: 60 }}>
            Find the open door <em>before anyone else does.</em>
          </h2>
          <p className="ss-ad-copy" style={{ marginTop: 22, fontSize: 17.5 }}>
            Sentinel watches your cloud and SaaS estate for misconfigurations, keeps access reviews moving and
            triages the alert queue, so your security team spends its morning on the few things that matter.
          </p>
          <div className="ss-console" style={{ marginTop: 26 }}>
            <div className="ss-console-bar">
              <i />
              <i />
              <i />
              <span>sentinel · posture · all accounts</span>
              <em>● watching</em>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", borderBottom: "1px solid rgba(233,230,223,0.12)" }}>
              <div style={{ borderRight: "1px solid rgba(233,230,223,0.12)" }}>
                <p className="ss-label" style={{ padding: "12px 14px 0", fontSize: 9.5 }}>
                  Misconfigurations
                </p>
                <ul className="ss-log" style={{ fontSize: 11.5, lineHeight: 2.3 }}>
                  {[
                    ["storage bucket readable by public link", "is-hi", "high"],
                    ["admin role without MFA enforced", "is-hi", "high"],
                    ["logging disabled on a prod project", "is-med", "med"],
                    ["unused API key older than policy", "is-lo", "low"],
                  ].map(([t, c, s]) => (
                    <li key={t} style={{ gridTemplateColumns: "1fr auto", alignItems: "center" }}>
                      <span style={{ color: "rgba(233,230,223,0.86)" }}>{t}</span>
                      <span className={`ss-tag ${c}`}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="ss-label" style={{ padding: "12px 14px 0", fontSize: 9.5 }}>
                  Access reviews
                </p>
                <ul className="ss-log" style={{ fontSize: 11.5, lineHeight: 2.3 }}>
                  {[
                    ["contractor · billing admin", "revoke"],
                    ["ex-team · repo write", "revoke"],
                    ["analyst · read-only", "keep"],
                    ["service acct · deploy", "review"],
                  ].map(([t, s]) => (
                    <li key={t} style={{ gridTemplateColumns: "1fr auto", alignItems: "center" }}>
                      <span style={{ color: "rgba(233,230,223,0.86)" }}>{t}</span>
                      <span className={`ss-tag ${s === "keep" ? "is-ok" : s === "review" ? "is-med" : "is-hold"}`}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="ss-label" style={{ padding: "12px 14px 0", fontSize: 9.5 }}>
              Alert triage · grouped, deduplicated, ranked
            </p>
            <ul className="ss-log" style={{ fontSize: 11.5, lineHeight: 2.3 }}>
              {[
                ["login burst", "same user, new region", "escalate", "is-hi"],
                ["port scan", "known scanner, blocked", "close", "is-ok"],
                ["policy drift", "matches open finding", "merge", "is-med"],
              ].map(([a, b, c, t]) => (
                <li key={a} style={{ gridTemplateColumns: "110px 1fr auto", alignItems: "center" }}>
                  <b>{a}</b>
                  <span style={{ color: "rgba(233,230,223,0.8)" }}>{b}</span>
                  <span className={`ss-tag ${t}`}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 30 }}>
            {[
              ["01 · Detect", "Misconfigurations", "Risky settings found across accounts and explained in plain language, with the fix."],
              ["02 · Review", "Access reviews", "Who can reach what, queued for the right owner to keep or revoke."],
              ["03 · Triage", "Alert triage", "Noise grouped and closed, the real signal ranked and sent to a person."],
            ].map(([k, h, p]) => (
              <div key={k} className="ss-read">
                <span>{k}</span>
                <b style={{ fontSize: 18 }}>{h}</b>
                <p style={{ fontSize: 14.5 }}>{p}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingTop: 20,
              gap: 20,
            }}
          >
            <p className="ss-contact">
              <b>Hello@thefortiora.com</b>
              <br />
              thefortiora.com · Fortiora Sentinel
              <br />
              An advertisement by the publisher of PrimeCrest
            </p>
            <div className="ss-lockup">
              <img src="/brand/logo-fortiora.png" alt="Fortiora Group" style={{ height: 76 }} />
              <div>
                <b>Fortiora</b>
                <span>Group</span>
              </div>
            </div>
            <div className="ss-qr">
              <img src="/brand/qr-fortiora.png" alt="Scan to reach Fortiora Group" style={{ width: 130 }} />
            </div>
          </div>
        </div>
      </article>

      {/* ============================================== 20 · BE FEATURED (RIGHT) */}
      <article className="mag-page ss ss-paper">
        <div className="ss-well">
          <div className="ss-topbar">
            <span>
              <b>Be featured</b> · PrimeCrest
            </span>
            <span>Nominations open</span>
          </div>
          <h2 className="ss-head" style={{ marginTop: 30, fontSize: 64 }}>
            Your work, <em>on the record.</em>
          </h2>
          <p className="ss-dek" style={{ marginTop: 16 }}>
            PrimeCrest profiles leaders whose work can be checked. Tell us what you are building and why
            now. If the story holds, we will send the questions.
          </p>
          <div
            style={{
              marginTop: 26,
              border: "1.5px solid #0b0b0c",
              background: "rgba(255,255,255,0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 16px",
                background: "#0b0b0c",
                color: "#e9e6df",
                fontFamily: "var(--ss-m)",
                fontSize: 10.5,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              <span>Submission form · PC-NOM</span>
              <span style={{ color: "#ff6a1a" }}>theprimecrest.com</span>
            </div>
            {["Name and title", "Company", "What you are building", "Why the year turned", "Where we can reach you"].map(
              (f, i) => (
                <div
                  key={f}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 210px 1fr",
                    alignItems: "end",
                    padding: "33px 16px 12px",
                    borderBottom: i < 4 ? "1px solid rgba(11,11,12,0.2)" : 0,
                    fontFamily: "var(--ss-m)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#4a4844",
                  }}
                >
                  <b style={{ color: "#c94c0c" }}>{String(i + 1).padStart(2, "0")}</b>
                  <span>{f}</span>
                  <span style={{ height: 1, background: "rgba(11,11,12,0.45)", marginBottom: 3 }} />
                </div>
              ),
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 26 }}>
            {[
              ["01 · Nominate", "Yourself or someone whose work you know. A few honest lines are enough."],
              ["02 · Sit", "Ten questions, answered in writing or in conversation. We print the answers whole."],
              ["03 · Publish", "A designed digital issue, a cover, and a record that stays online."],
            ].map(([k, p]) => (
              <div key={k} className="ss-read">
                <span style={{ color: "#c94c0c", fontWeight: 600 }}>{k}</span>
                <p style={{ fontSize: 16, lineHeight: 1.5 }}>{p}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 24,
              background: "#0b0b0c",
              color: "#e9e6df",
              padding: "13px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "6px solid #ff6a1a",
              fontFamily: "var(--ss-d)",
              fontWeight: 600,
              fontSize: 19,
              letterSpacing: "-0.03em",
            }}
          >
            <span>Answers printed whole. Faces kept whole.</span>
            <span style={{ fontFamily: "var(--ss-m)", fontWeight: 500, fontSize: 10.5, letterSpacing: "0.16em", color: "#ff6a1a" }}>
              PC · NOMINATIONS
            </span>
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              paddingTop: 22,
            }}
          >
            <div>
              <div style={{ width: 470, "--pc-mast-size": "42px" } as CSSProperties}>
                <PrimeCrestMast tone="light" tagline={false} />
              </div>
              <p className="ss-label" style={{ marginTop: 14, color: "#0b0b0c" }}>
                Scan to nominate · theprimecrest.com
              </p>
            </div>
            <img
              src="/brand/qr-primecrest.png"
              alt="Scan to visit theprimecrest.com"
              style={{ width: 150, height: "auto", border: "1.5px solid #0b0b0c" }}
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <Folio page="20" section="Be Featured" />
          </div>
        </div>
      </article>

      {/* ============================================== 21 · BACK COVER */}
      <NovemberBack scope="ss" vol="XIV" />
    </>
  );
}
