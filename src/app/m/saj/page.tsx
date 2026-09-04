import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { SajPages, SAJ_TOC } from "@/content/SajPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";

const SEO = {
  title: "Master of the Deal — Shermel A. Jeffers Chandwani",
  description:
    "A banker's discipline, a broker's nerve — the deal-driven world of SAJ Interior Design & Real Estate Services, St. Kitts & Nevis.",
  slug: "saj",
  ogImage: siteUrl("/issues/saj/og.jpg"),
  kicker: "Vol. I · The Caribbean Issue",
};

export const metadata = issueMetadata(SEO);

export default function SajIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="Master of the Deal" toc={SAJ_TOC} tone="saj">
        <SajPages />
      </HtmlFlipbook>
    </>
  );
}
