import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { JonEricPages, JONERIC_TOC } from "@/content/JonEricPages";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";
import { siteUrl } from "@/lib/utils";
import "./joneric.css";
import "../november/house.css";

const SEO = {
  title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026 — Jon Eric McPike",
  description:
    "Jon Eric McPike — Senior Healthcare Consultant, Remarkable Unlimited; creator of The Leadership Superpower Matrix™; author and keynote speaker. From Gratitude to Growth: The 3.2.1. Way, told in PrimeCrest's November Issue.",
  slug: "joneric",
  ogImage: siteUrl("/issues/joneric/og.jpg"),
  kicker: "PrimeCrest · Vol. XII · The November Issue",
};

export const metadata = issueMetadata(SEO);

export default function JonEricIssuePage() {
  return (
    <>
      <IssueJsonLdScript input={SEO} />
      <HtmlFlipbook title="PrimeCrest · The November Issue · Vol. XII" toc={JONERIC_TOC} tone="joneric" pdfHref="/pdf/joneric.pdf">
        <JonEricPages />
      </HtmlFlipbook>
    </>
  );
}
