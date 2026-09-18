import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { FoskarisPages, FOSKARIS_TOC } from "@/content/FoskarisPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./foskaris.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Penny Foskaris",
  description:
    "Penny Foskaris — Founder, Red Light Pro Devices & Foskaris Wellness, Anaheim Hills, California. The room she could not find, and the light her clients could take home, told in PrimeCrest's September Issue.",
  slug: "foskaris",
  ogImage: siteUrl("/issues/foskaris/og.jpg"),
  kicker: "PrimeCrest · Vol. IV · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function FoskarisIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest — The September Issue · Vol. IV" toc={FOSKARIS_TOC} tone="foskaris" pdfHref="/pdf/foskaris.pdf">
        <FoskarisPages />
      </HtmlFlipbook>
    </>
  );
}
