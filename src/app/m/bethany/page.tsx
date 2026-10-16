import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { BethanyPages, BETHANY_TOC } from "@/content/BethanyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./bethany.css";

const SEO = {
  title: "Top 10 Unstoppable Leaders Making a Difference in 2026 · Nick Hill",
  description:
    "Nick Hill, President & Chief Executive Officer, Bethany Children's Home, Philadelphia, Pennsylvania. He started as Cottage Support Staff and came up through the programs, told in PrimeCrest's October Issue.",
  slug: "bethany",
  ogImage: siteUrl("/issues/bethany/og.jpg"),
  kicker: "PrimeCrest · Vol. VII · The October Issue",
};

export const metadata = issueMetadata(SEO);

export default function BethanyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The October Issue · Vol. VII" toc={BETHANY_TOC} tone="bethany" pdfHref="/pdf/bethany.pdf">
        <BethanyPages />
      </HtmlFlipbook>
    </>
  );
}
