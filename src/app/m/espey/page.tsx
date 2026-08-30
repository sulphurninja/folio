import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { EspeyPages, ESPEY_TOC } from "@/content/EspeyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";

const SEO = {
  title: "Ego Trip — James Espey OBE",
  description:
    "Baileys, Malibu, Johnnie Walker Blue Label, Chivas 18 — sixty years behind the world's back bar, told by the man who poured it.",
  slug: "espey",
  ogImage: siteUrl("/issues/espey/og.jpg"),
  kicker: "Vol. II · The Legacy Issue",
};

export const metadata = issueMetadata(SEO);

export default function EspeyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="Ego Trip" toc={ESPEY_TOC}>
        <EspeyPages />
      </HtmlFlipbook>
    </>
  );
}
