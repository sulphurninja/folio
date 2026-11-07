import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { SergeyPages, SERGEY_TOC } from "@/content/SergeyPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./sergey.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Sergey Shayakhmetov",
  description:
    "Sergey Shayakhmetov — Founder & CEO, Longevium. The longevity mindset: on AI, ambition and building a longevity ecosystem of clinics, AI tools for doctors, EEG-based brain assessment and research, told in PrimeCrest's November Issue.",
  slug: "sergey",
  ogImage: siteUrl("/issues/sergey/og.jpg"),
  kicker: "PrimeCrest · Vol. XIV · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function SergeyIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. XIV" toc={SERGEY_TOC} tone="sergey" pdfHref="/pdf/sergey.pdf">
        <SergeyPages />
      </HtmlFlipbook>
    </>
  );
}
