import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { SajPages, SAJ_TOC } from "@/content/SajPages";

export const metadata = {
  title: "Master of the Deal — Shermel A. Jeffers Chandwani",
  description: "A profile of SAJ Interior Design & Real Estate Services.",
};

export default function SajIssuePage() {
  return (
    <HtmlFlipbook title="Master of the Deal" toc={SAJ_TOC}>
      <SajPages />
    </HtmlFlipbook>
  );
}
