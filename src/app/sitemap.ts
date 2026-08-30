import { siteUrl } from "@/lib/utils";
import { getPublishedMagazines } from "@/lib/queries";

export default async function sitemap() {
  const staticEntries = [
    { url: siteUrl("/"), lastModified: new Date() },
    { url: siteUrl("/m/saj"), lastModified: new Date() },
    { url: siteUrl("/m/espey"), lastModified: new Date() },
  ];
  const db = await getPublishedMagazines().catch(() => []);
  const dbEntries = db
    .filter((m) => !["saj", "espey"].includes(m.slug))
    .map((m) => ({
      url: siteUrl(`/m/${m.slug}`),
      lastModified: m.publishedAt ? new Date(m.publishedAt) : new Date(),
    }));
  return [...staticEntries, ...dbEntries];
}
