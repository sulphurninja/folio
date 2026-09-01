import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { EspeyPages, ESPEY_TOC } from "@/content/EspeyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — James Espey",
  description:
    "James Espey — Investor & Chairman, Wiltshire Whisky Distillery, England. Sixty years behind the world's back bar, told in PrimeCrest's Legacy Issue.",
  slug: "espey",
  ogImage: siteUrl("/issues/espey/og.jpg"),
  kicker: "PrimeCrest · Vol. II · The Legacy Issue",
};

export const metadata = issueMetadata(SEO);

export default function EspeyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The Legacy Issue" toc={ESPEY_TOC}>
        <EspeyPages />
      </HtmlFlipbook>
    </>
  );
}
