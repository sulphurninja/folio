import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { JoanPages, JOAN_TOC } from "@/content/JoanPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./joan.css";

const SEO = {
  title: "Top 10 Unstoppable Leaders Making a Difference in 2026 — Joan Gillman",
  description:
    "Joan Gillman — Science Teacher, The Browning School, New York. Forty-four years in the science classroom, the Green Team, and the work of making room for wonder.",
  slug: "joan",
  ogImage: siteUrl("/issues/joan/og.jpg"),
  kicker: "PrimeCrest · Vol. II · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function JoanIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The September Issue · Vol. II" toc={JOAN_TOC} tone="joan" pdfHref="/pdf/joan.pdf">
        <JoanPages />
      </HtmlFlipbook>
    </>
  );
}
