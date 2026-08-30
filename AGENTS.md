<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Magazine crafting

This repo is a digital magazine (flipbook) studio. When the user asks to craft a
new issue — typically by providing a path to images and a filled questionnaire —
read `docs/MAGAZINE_SYSTEM.md` FIRST and follow it exactly. It defines the intake,
the house writing voice (the copy must read human-written, never AI), the page
architecture, the `mag-*` design vocabulary, and the assembly + QA checklist.
The blank intake form lives at `docs/QUESTIONNAIRE.md`. The reference
implementation is `src/content/SajPages.tsx` (issue at `/m/saj`).
