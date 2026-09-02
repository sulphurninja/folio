import { ISSUE_REGISTRY } from "@/content/registry";
import { siteUrl } from "@/lib/utils";
import { getPublishedMagazines } from "@/lib/queries";

export default async function sitemap() {
  const staticEntries = [
    { url: siteUrl("/"), lastModified: new Date() },
    ...Object.keys(ISSUE_REGISTRY).map((slug) => ({
      url: siteUrl(`/m/${slug}`),
      lastModified: new Date(),
    })),
  ];
  const known = new Set(Object.keys(ISSUE_REGISTRY));
  const db = await getPublishedMagazines().catch(() => []);
  const dbEntries = db
    .filter((m) => !known.has(m.slug))
    .map((m) => ({
      url: siteUrl(`/m/${m.slug}`),
      lastModified: m.publishedAt ? new Date(m.publishedAt) : new Date(),
    }));
  return [...staticEntries, ...dbEntries];
}
