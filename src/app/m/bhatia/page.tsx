import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { BhatiaPages, BHATIA_TOC } from "@/content/BhatiaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./bhatia.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Dr. Rabiaah Bhatia",
  description:
    "Dr. Rabiaah Bhatia — Professor of Practice at Amity University, Board of Advisor at Rise Institute and HR Business Partner at BRK Cart. Eighteen years in industry, a classroom in 2015, and eight answers on speaking for an organization, in PrimeCrest's November Issue.",
  slug: "bhatia",
  ogImage: siteUrl("/issues/bhatia/og.jpg"),
  kicker: "PrimeCrest · Vol. IX · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function BhatiaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. IX" toc={BHATIA_TOC} tone="bhatia" pdfHref="/pdf/bhatia.pdf">
        <BhatiaPages />
      </HtmlFlipbook>
    </>
  );
}
