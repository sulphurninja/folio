import { siteUrl } from "@/lib/utils";

export default function sitemap() {
  return [
    { url: siteUrl("/"), lastModified: new Date() },
    { url: siteUrl("/m/saj"), lastModified: new Date() },
  ];
}
