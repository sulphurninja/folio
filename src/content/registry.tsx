import type { ComponentType } from "react";
import type { MagTocItem } from "../components/reader/HtmlFlipbook";
import { EspeyPages, ESPEY_TOC } from "./EspeyPages";
import { SajPages, SAJ_TOC } from "./SajPages";

export type IssueDefinition = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  toc: MagTocItem[];
  Pages: ComponentType;
};

/** Every crafted issue, registered for the publish pipeline. */
export const ISSUE_REGISTRY: Record<string, IssueDefinition> = {
  espey: {
    slug: "espey",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. II · The Legacy Issue",
    description:
      "James Espey — Investor & Chairman, Wiltshire Whisky Distillery, England. Sixty years behind the world's back bar, told in PrimeCrest's Legacy Issue.",
    toc: ESPEY_TOC,
    Pages: EspeyPages,
  },
  saj: {
    slug: "saj",
    title: "Master of the Deal",
    kicker: "Vol. I · The Caribbean Issue",
    description:
      "A banker's discipline, a broker's nerve — the deal-driven world of SAJ Interior Design & Real Estate Services, St. Kitts & Nevis.",
    toc: SAJ_TOC,
    Pages: SajPages,
  },
};
