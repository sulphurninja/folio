export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Converts Mongoose documents (ObjectIds, Dates) into plain JSON for the
 * React boundary. The generic reflects the serialized shape, not the input.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serialize<T = any>(doc: unknown): T {
  return JSON.parse(JSON.stringify(doc)) as T;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const PROD_URL = "https://folio-one-lemon.vercel.app";

export function siteUrl(path = "") {
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (vercel
      ? `https://${vercel}`
      : process.env.NODE_ENV === "production"
        ? PROD_URL
        : "http://localhost:3001");
  return `${base.replace(/\/$/, "")}${path}`;
}

export function formatDate(value?: string | Date | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Cloudinary URLs can be resized on the fly; others pass through. */
export function thumbUrl(url: string, width = 240) {
  if (url.includes("res.cloudinary.com") && url.includes("/upload/")) {
    return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
  }
  if (url.includes("images.unsplash.com")) {
    const u = new URL(url);
    u.searchParams.set("w", String(width));
    u.searchParams.set("q", "60");
    return u.toString();
  }
  return url;
}
