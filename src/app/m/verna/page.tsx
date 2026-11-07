import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { VernaPages, VERNA_TOC } from "@/content/VernaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./verna.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Verna Felder",
  description:
    "Verna Felder, educator of more than 20 years, author, founder of Urban School Transformation and co-creator of Can You Survive Poverty? The Game™. The field trip, the families behind the absences, and the game built to bring their choices into the room, in PrimeCrest's November Issue.",
  slug: "verna",
  ogImage: siteUrl("/issues/verna/og.jpg"),
  kicker: "PrimeCrest · Vol. XV · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function VernaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. XV" toc={VERNA_TOC} tone="verna" pdfHref="/pdf/verna.pdf">
        <VernaPages />
      </HtmlFlipbook>
    </>
  );
}
