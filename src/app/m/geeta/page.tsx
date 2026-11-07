import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { GeetaPages, GEETA_TOC } from "@/content/GeetaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./geeta.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Dr. Geeta Grewal",
  description:
    "Dr. Geeta Grewal — Founder & CMD, 9 Muses Wellness. Advancing Aesthetic Medicine Through Science, Safety & Natural-Looking Results: a surgical oncologist's case for aesthetics as repair, told in PrimeCrest's November Issue.",
  slug: "geeta",
  ogImage: siteUrl("/issues/geeta/og.jpg"),
  kicker: "PrimeCrest · Vol. XI · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function GeetaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. XI" toc={GEETA_TOC} tone="geeta" pdfHref="/pdf/geeta.pdf">
        <GeetaPages />
      </HtmlFlipbook>
    </>
  );
}
