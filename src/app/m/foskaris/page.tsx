import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { FoskarisPages, FOSKARIS_TOC } from "@/content/FoskarisPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Penny Foskaris",
  description:
    "Penny Foskaris — Founder, Red Light Pro Devices & Foskaris Wellness, Anaheim Hills, California. The room she could not find, and the light her clients could take home.",
  slug: "foskaris",
  ogImage: siteUrl("/issues/foskaris/og.jpg"),
  kicker: "PrimeCrest · Vol. VIII · The Vitality Issue",
};

export const metadata = issueMetadata(SEO);

export default function FoskarisIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The Vitality Issue" toc={FOSKARIS_TOC} tone="foskaris">
        <FoskarisPages />
      </HtmlFlipbook>
    </>
  );
}
