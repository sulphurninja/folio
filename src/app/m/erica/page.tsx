import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { EricaPages, ERICA_TOC } from "@/content/EricaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./erica.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Erica Lanka Borba",
  description:
    "Erica Lanka Borba (Erica Lanka) — Brazilian travel & lifestyle content creator, musical artist and social media personality. Beyond Borders: celebrating Sri Lanka through music, travel, culture and human connection, in PrimeCrest's November Issue.",
  slug: "erica",
  ogImage: siteUrl("/issues/erica/og.jpg"),
  kicker: "PrimeCrest · Vol. X · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function EricaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. X" toc={ERICA_TOC} tone="erica" pdfHref="/pdf/erica.pdf">
        <EricaPages />
      </HtmlFlipbook>
    </>
  );
}
