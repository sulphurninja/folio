import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { BethanyPages, BETHANY_TOC } from "@/content/BethanyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./bethany.css";

const SEO = {
  title: "Top 10 Unstoppable Leaders Making a Difference in 2026 · Nick Hill",
  description:
    "Nick Hill, President & Chief Executive Officer, Bethany Children's Home, Philadelphia, Pennsylvania. Twelve years from the cottage floor to the chair, told in PrimeCrest's September Issue.",
  slug: "bethany",
  ogImage: siteUrl("/issues/bethany/og.jpg"),
  kicker: "PrimeCrest · Vol. III · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function BethanyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The September Issue · Vol. III" toc={BETHANY_TOC} tone="bethany" pdfHref="/pdf/bethany.pdf">
        <BethanyPages />
      </HtmlFlipbook>
    </>
  );
}
