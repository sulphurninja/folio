import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { PallaviPages, PALLAVI_TOC } from "@/content/PallaviPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Pallavi Pande",
  description:
    "Pallavi Pande — Mompreneur, Owner & Founder, Dtocs & Dtocs Consulting, Portland, Oregon. Banana leaves, a kitchen sink, and two companies that treat disposable tableware as a design problem.",
  slug: "pallavi",
  ogImage: siteUrl("/issues/pallavi/og.jpg"),
  kicker: "PrimeCrest · Vol. VI · The Table Issue",
};

export const metadata = issueMetadata(SEO);

export default function PallaviIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The Table Issue" toc={PALLAVI_TOC} tone="pallavi">
        <PallaviPages />
      </HtmlFlipbook>
    </>
  );
}
