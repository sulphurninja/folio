# The Folio Magazine System

How a new digital issue gets made. The client (or we) fill in `docs/QUESTIONNAIRE.md`
and drop a folder of photographs. From those two inputs, a complete flipbook issue is
crafted — written, art-directed, and shipped at `/m/<slug>`.

This document is the house style. Follow it exactly. The bar is a legendary print
publishing house — think of the issue as something that could be lying on a table at
a five-star hotel lobby, not something generated.

---

## 1. Intake

Two inputs are required before any crafting begins:

1. **Questionnaire** — a filled copy of `docs/QUESTIONNAIRE.md` (any format: md, txt,
   docx text, or pasted into chat). If answers are thin, mine them for texture anyway;
   never pad with invented facts. Facts come from the questionnaire only.
2. **Images** — a folder of photographs. Any names, any sizes.

Before writing a single line, read the whole questionnaire twice and look at every
image. Decide what the issue is *about* — the one-sentence spine (for SAJ it was:
"a banker's discipline applied to island luxury real estate"). Every page must serve
that spine.

## 2. The writing — this is the whole game

The copy must read as if a senior magazine editor wrote it in one sitting after a
long interview. Print-magazine prose, not web copy, not marketing, and absolutely
not AI.

### Voice rules

- **Short declaratives carry the weight.** "She should sell. She did." Let sentences
  land. Vary length hard — a long winding sentence, then a three-word one.
- **Concrete over abstract.** Never "a passion for excellence" — instead "top personal
  lending officer from 2005 to 2012, more than twenty-five Royal Performance awards."
  Numbers, years, places, names of banks, names of streets.
- **The subject's own phrases are gold.** Lift verbatim lines from the questionnaire
  into pull quotes and heads ("Always master the art of the deal"). Quote sparingly
  in body copy; a magazine paraphrases with authority.
- **Write the unglamorous middle.** Great profiles find the boring true thing and
  make it the point: "mortgage introductions at the local banks, appointments booked,
  the financial picture made clear before anyone stands in a doorway."
- **Understatement, not hype.** No "visionary", "trailblazer", "powerhouse" (unless
  the subject says it, quoted), no exclamation marks, no superlatives we can't source.
- **Heads are sentences with a period, or fragments with nerve.** "From the lending
  desk to the listing." / "If there is a deal to be made, make it." Never "Meet the
  Woman Behind…", never title case listicle heads.
- **Third person for narration, and let scenes do the work.** The Robert Fong story
  is told as a scene: offer, refusal, another villa, the deed, the ocean. No moral
  attached at the end — the reader gets it.

### Banned — instant AI tells

Never use: *delve, tapestry, testament, vibrant, boasts, nestled, seamless, elevate,
journey (as metaphor), unleash, empower, foster, landscape (metaphor), navigate
(metaphor), realm, robust, dynamic, "isn't just X — it's Y", "at the heart of",
"stands as", "serves as", "a beacon of", "what sets X apart", rhetorical questions
as transitions, em-dash triples, "Moreover/Furthermore/Additionally", any sentence
that could open a LinkedIn post.*

Also banned: starting consecutive paragraphs with the same construction, three-item
parallel lists ("X, Y, and Z" as a rhythm crutch) more than once per page, and
summarizing the page you just wrote.

### Editing pass

After drafting, do a cold read of every page and ask: would a Condé Nast sub-editor
strike this line? If a sentence explains what the previous one implied, cut it.
Target: body copy per page fits its container with air (see §5 QA).

## 3. Issue architecture

Pages are single leaves. **Total count must be even.** 16 pages is the house length
for a single-subject profile; 20–24 for a larger feature set.

The proven 16-page arc (adapt, don't copy blindly):

| # | Leaf | What it does |
|---|------|--------------|
| 1 | Cover (`data-density="hard"`) | Full-bleed hero image, issue kicker, display title, subject line |
| 2–3 | Editorial spread | Left: giant initial + "Editorial Note." tease. Right: profile opener with portrait + drop cap |
| 4–5 | Contents spread | One photo split across both leaves (`mag-spread-photo is-left/is-right`), signature-story banner left, TOC right |
| 6 | First feature (text) | Kicker, head, two-column drop-cap body, pull quote |
| 7 | Full-bleed photo | With caption bar |
| 8 | The record / credentials | `mag-list` with bolded years/places |
| 9 | Full-bleed portrait | Caption bar |
| 10 | Atmosphere photo + overlay statement | Scrim + light head; the "place" page |
| 11 | Mission / philosophy (text) | Head, block quote, drop-cap body |
| 12 | The client story (text) | A scene, told cold, pull quote |
| 13 | Full-bleed photo + inset photo | Caption bar |
| 14 | Outlook (text) | Forward-looking close + `mag-darkband` motto strip |
| 15 | Advice / final statement over photo | Scrim + overlay |
| 16 | Back cover (`data-density="hard"`) | Darkened cover image reprise, sign-off line, URLs, issue kicker |

Rhythm rule: never two dense text pages adjacent except the editorial spread. Text
page → photo page → text page. The reader must be able to breathe.

### House furniture — required in every issue

Three non-negotiables on every issue, all branded to the publisher
(**Fortiora Group LLC**, 30 N Gould St Ste R, Sheridan, WY 82801, United States ·
Hello@thefortiora.com · thefortiora.com):

1. **Cover barcode plate** — `<img className="mag-qr" src="/brand/barcode-fortiora.png" />`
   inside the cover leaf: Code 128 bars + a scannable QR add-on that opens
   thefortiora.com, styled like a print barcode block (bottom-right by default).
2. **Publisher back cover** — the final leaf is the Fortiora house page, not a
   reprise of the subject's imagery: `mag-dark`, the mark
   (`/brand/logo-fortiora.png`), the FORTIORA / GROUP lockup, one serif line,
   the imprint block, the barcode plate, and the issue kicker. See the Espey
   issue's leaf 16 for the reference implementation.
3. **Credits / colophon leaf** — a dark masthead page, usually leaf 2 (facing
   the editorial opener). Contents, in order:
   - Script-italic "Credits." head (display serif, italic).
   - `mag-credits-list` role/name rows. Never invent staff names — use the
     house entities: Published by → Fortiora Group LLC; Editorial & Design →
     Fortiora Studio; Digital Production → Fortiora Studio; plus any real
     names the questionnaire provides (photographer, writer, subject's team).
   - Corporate office block (`mag-imprint`): company, full address, email, site.
   - The Fortiora mark (`/brand/logo-fortiora.png`, small, centered) and the
     QR plate (inline, not absolute, at reduced width).
   - Rights line: "© <year> Fortiora Group LLC. All rights reserved. No part of
     this publication may be reproduced or transmitted in any form without prior
     written permission from the publisher."

Right-leaf/left-leaf: after the single cover, leaf 2 shows alone briefly then pairs —
in the spread view, **even leaves are LEFT pages, odd leaves are RIGHT pages** (leaf
2 left + leaf 3 right, etc.). Design contents-style split photos accordingly.

## 4. Page grammar (the `mag-*` vocabulary)

Fixed canvas: **840 × 1120 px** per leaf (`MAG_PAGE_W/H` in `HtmlFlipbook.tsx`).
Everything is laid out at that size; the reader scales it. Inline `style` overrides
are normal and encouraged for art direction on CHILD elements only.

**CRITICAL: never put inline styles on the root `<article>` element.** The
page-flip engine overwrites the page root's `style.cssText` during rendering,
silently deleting every inline property (this is how dark inline backgrounds
once shipped as invisible cream-on-cream). Root-level looks are classes:
`mag-dark` (dark editorial ground with cream type), `mag-pb0` (no bottom
padding, for `mag-darkband` closers). Add new root-level classes to
`globals.css` when needed.

Every leaf is `<article className="mag-page …">`. Two base modes:

- `mag-bleed` — photo page. Children: `img.mag-fill` (cover-fit), optional
  `mag-scrim` (darkening gradient), `mag-overlay` (flex column padding for type),
  `mag-caption-bar` (bottom strip caption), `mag-inset` (small framed second photo),
  `mag-vert` (vertical spine word), `mag-spread-photo is-left / is-right` (one photo
  continued across two leaves).
- `mag-pad` — text page on paper. Cream/linen backgrounds via inline gradient are
  welcome on feature openers.

Type + furniture:

- `mag-kicker` (+ `mag-kicker-light` on photos) — small tracked overline
- `mag-display` — cover-scale display serif (set size inline, 64–84px)
- `mag-h` / `mag-h-sm` / `mag-h-light` — section heads
- `mag-folio` — body serif; `mag-cols` / `mag-cols-3` — column layout;
  `mag-dropcap` — drop cap on first letter
- `mag-pull` — centered pull quote with quote marks; `mag-quote` — left-rule quote
- `mag-list` — credentials list with `<strong>` labels; `mag-note` — small footnote
- `mag-foot` — running footer ("The Caribbean Issue · 06")
- `mag-giant` — huge ghost letter behind content; `mag-num` — big spread number
- `mag-banner` — gold "signature story" ribbon; `mag-darkband` — full-width dark
  motto strip; `mag-toc` — contents list (`<span>` label + `<em>` page)
- `mag-avatar` + `mag-by` + `mag-role` — small portrait block

Palette: paper creams (`#f7f2ea → #efe4d6` gradients), ink, and the house gold
`#e8c56b` / `#8a5a12` for accents. On photos, type is `#fff` / `rgba(244,239,230,…)`.
Use `objectPosition` inline to art-direct crops (faces near top: `center 20%`).

## 5. Assembly checklist

For a new issue with slug `<slug>` (short, lowercase):

1. **Assets** — copy images to `public/issues/<slug>/`, renamed semantically
   (`cover.jpg`, `portrait.jpg`, `studio.jpg`, …). Pick the strongest vertical
   image with headroom for the cover. Reuse the cover (darkened via `filter`)
   for the back cover.
2. **Content** — `src/content/<Name>Pages.tsx` exporting `<Name>Pages()` and
   `<NAME>_TOC` (`{ page, label }[]`, page = 0-based leaf index). Model it on
   `src/content/SajPages.tsx`.
3. **Route** — `src/app/m/<slug>/page.tsx`: metadata (title = issue title + subject,
   real description) and `<HtmlFlipbook title toc>` wrapping the pages. No "Folio"
   in user-facing metadata.
4. **Homepage** — add the issue to `ISSUES` in `src/app/page.tsx` (href, cover src,
   kicker, title, page-count meta).
5. **Sitemap** — add `/m/<slug>` to `src/app/sitemap.ts`.

### QA before calling it done

- [ ] Even number of `<article>` leaves; first and last have `data-density="hard"`.
- [ ] Cover carries the `mag-qr` plate; the issue has a credits/colophon leaf
      with the Fortiora Group LLC imprint (see §3 House furniture).
- [ ] TOC page numbers match actual leaf order; contents-page numbers match too.
- [ ] Run `bun run build` — clean.
- [ ] Open `/m/<slug>` in the browser at desktop size; step through every spread.
      No text overflowing its leaf, no orphaned single words on heads, captions
      legible over photos (add/strengthen `mag-scrim` if not).
- [ ] Cold-read every page for the banned list in §2. If any line sounds like a
      chatbot, rewrite it.
- [ ] Split-spread photos align across the gutter (`is-left` on even leaf,
      `is-right` on the following odd leaf, same image).

## 6. What the user says to start a new issue

Something like:

> New issue. Questionnaire: `<path>`. Images: `<folder path>`.

That's the trigger. Read this document, read the questionnaire, inventory the
images, propose the spine + page map in one short message, then craft the whole
issue in a single pass.
