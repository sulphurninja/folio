import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { VineetPages, VINEET_TOC } from "@/content/VineetPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./vineet.css";

const SEO = {
  title: "The September Issue — Vineet Trakroo",
  description:
    "Vineet Trakroo — CEO & Chief Evolution Officer, Evolution Strategy Advisors LLP. Growth, strategy, execution, and future readiness, in PrimeCrest's September Issue.",
  slug: "vineet",
  ogImage: siteUrl("/issues/vineet/og.jpg"),
  kicker: "PrimeCrest · The September Issue · 2026",
};

export const metadata = issueMetadata(SEO);

export default function VineetIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The September Issue" toc={VINEET_TOC} tone="vineet">
        <VineetPages />
      </HtmlFlipbook>
    </>
  );
}
