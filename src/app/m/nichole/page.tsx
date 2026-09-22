import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { NicholePages, NICHOLE_TOC } from "@/content/NicholePages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./nichole.css";

const SEO = {
  title: "Top 10 Unstoppable Leaders Making a Difference in 2026 — Dr. Nichole Pettway",
  description:
    "Dr. Nichole Pettway — Deputy Director at Building Opportunities for Self-Sufficiency, California. WERC, the Trauma Recovery Center, and the Pre-trial Expansion Program, in PrimeCrest's September Issue.",
  slug: "nichole",
  ogImage: siteUrl("/issues/nichole/cover.jpg"),
  kicker: "PrimeCrest · Vol. III · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function NicholeIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook
        title="PrimeCrest · The September Issue · Vol. III"
        toc={NICHOLE_TOC}
        tone="nichole"
        pdfHref="/pdf/nichole.pdf"
      >
        <NicholePages />
      </HtmlFlipbook>
    </>
  );
}
