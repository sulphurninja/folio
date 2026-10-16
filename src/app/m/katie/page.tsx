import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { KatiePages, KATIE_TOC } from "@/content/KatiePages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./katie.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Katie Holmes",
  description:
    "Katie Holmes — Founder & CEO, Brand Studio Creative. Branding with Heart, told in PrimeCrest's October Issue.",
  slug: "katie",
  ogImage: siteUrl("/issues/katie/cover.jpg"),
  kicker: "PrimeCrest · Vol. VI · The October Issue",
};

export const metadata = issueMetadata(SEO);

export default function KatieIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook
        title="PrimeCrest · The October Issue · Vol. VI"
        toc={KATIE_TOC}
        tone="katie"
        pdfHref="/pdf/katie.pdf"
      >
        <KatiePages />
      </HtmlFlipbook>
    </>
  );
}
