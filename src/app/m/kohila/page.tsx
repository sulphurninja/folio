import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { KohilaPages, KOHILA_TOC } from "@/content/KohilaPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./kohila.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 · Kohila Sivas",
  description:
    "Kohila Sivas, Founder & Master Coach, Wholistic SuccessCodes. Two decades on readiness before performance, told in PrimeCrest's September Issue.",
  slug: "kohila",
  ogImage: siteUrl("/issues/kohila/og.jpg"),
  kicker: "PrimeCrest · Vol. VI · The September Issue",
};

export const metadata = issueMetadata(SEO);

export default function KohilaIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The September Issue · Vol. VI" toc={KOHILA_TOC} tone="kohila" pdfHref="/pdf/kohila.pdf">
        <KohilaPages />
      </HtmlFlipbook>
    </>
  );
}
