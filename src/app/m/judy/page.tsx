import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { JudyPages, JUDY_TOC } from "@/content/JudyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./judy.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Judy Stevens",
  description:
    "Judy Stevens — Scholar & Educator, Adult Development & Wisdom. Five decades shaping the field and pioneering online education, told in PrimeCrest's September Issue.",
  slug: "judy",
  ogImage: siteUrl("/issues/judy/og.jpg"),
  kicker: "PrimeCrest · Vol. II · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function JudyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The September Issue · Vol. II" toc={JUDY_TOC} tone="judy" pdfHref="/pdf/judy.pdf">
        <JudyPages />
      </HtmlFlipbook>
    </>
  );
}
