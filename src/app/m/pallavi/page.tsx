import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { PallaviPages, PALLAVI_TOC } from "@/content/PallaviPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./pallavi.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 · Pallavi Pande",
  description:
    "Pallavi Pande, Founder & Owner of DTOCS & DTOCS Consulting, Portland, Oregon. Banana leaves, a kitchen sink, and two companies that took more than twenty million single-use pieces off the table, in PrimeCrest's September Issue.",
  slug: "pallavi",
  ogImage: siteUrl("/issues/pallavi/og.jpg"),
  kicker: "PrimeCrest · Vol. V · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function PallaviIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The September Issue · Vol. V" toc={PALLAVI_TOC} tone="pallavi" pdfHref="/pdf/pallavi.pdf">
        <PallaviPages />
      </HtmlFlipbook>
    </>
  );
}
