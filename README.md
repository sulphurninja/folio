# Folio

Interactive digital magazines — true page-turning, zoom, and a reading room built for print that lives on the web.

## Stack

Next.js 16, MongoDB, JWT, Cloudinary, Bun, TypeScript, Tailwind.

## Setup

```bash
bun install
cp .env.example .env.local
# fill MONGODB_URI, JWT_SECRET, Cloudinary
bun run seed
bun run dev
```

The reading room runs at [http://localhost:3001](http://localhost:3001).

**Desk (admin):** `/admin` — seed credentials are in `.env.local` (`ADMIN_SEED_*`).

Upload page images in reading order. The first page becomes the cover. Drag a page corner in the reader to fold and turn it.
