import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { EspeyPages, ESPEY_TOC } from "@/content/EspeyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./espey.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — James Espey",
  description:
    "James Espey — Investor & Chairman, Wiltshire Whisky Distillery, England. Sixty years behind the world's back bar, told in PrimeCrest's September Issue.",
  slug: "espey",
  ogImage: siteUrl("/issues/espey/og.jpg"),
  kicker: "PrimeCrest · Vol. I · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function EspeyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook
        title="PrimeCrest · The September Issue · Vol. I"
        toc={ESPEY_TOC}
        tone="espey"
        pdfHref="/pdf/espey.pdf"
      >
        <EspeyPages />
      </HtmlFlipbook>
    </>
  );
}
