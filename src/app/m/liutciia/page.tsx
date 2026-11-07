import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { LiutciiaPages, LIUTCIIA_TOC } from "@/content/LiutciiaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./liutciia.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Liutciia Berkutova",
  description:
    "Liutciia Berkutova, Founder of WorldZen. Eighteen years. A world of reinvention. One belief: freedom begins with an idea in your mind. From a girl in Izhevsk to the founder of an international company without borders, in her own words, in PrimeCrest's November Issue.",
  slug: "liutciia",
  ogImage: siteUrl("/issues/liutciia/og.jpg"),
  kicker: "PrimeCrest · Vol. XIII · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function LiutciiaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. XIII" toc={LIUTCIIA_TOC} tone="liutciia" pdfHref="/pdf/liutciia.pdf">
        <LiutciiaPages />
      </HtmlFlipbook>
    </>
  );
}
