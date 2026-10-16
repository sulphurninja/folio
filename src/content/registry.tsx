import type { ComponentType } from "react";
import type { MagTocItem } from "../components/reader/HtmlFlipbook";
import { BethanyPages, BETHANY_TOC } from "./BethanyPages";
import { EspeyPages, ESPEY_TOC } from "./EspeyPages";
import { JoanPages, JOAN_TOC } from "./JoanPages";
import { JudyPages, JUDY_TOC } from "./JudyPages";
import { KohilaPages, KOHILA_TOC } from "./KohilaPages";
import { FoskarisPages, FOSKARIS_TOC } from "./FoskarisPages";
import { KatiePages, KATIE_TOC } from "./KatiePages";
import { NicholePages, NICHOLE_TOC } from "./NicholePages";
import { PallaviPages, PALLAVI_TOC } from "./PallaviPages";
import { SajPages, SAJ_TOC } from "./SajPages";
import { VineetPages, VINEET_TOC } from "./VineetPages";

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
  bethany: {
    slug: "bethany",
    title: "Top 10 Unstoppable Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. III · The October Issue",
    description:
      "Nick Hill — President & Chief Executive Officer, Bethany Children's Home, Philadelphia, Pennsylvania. He started as Cottage Support Staff and came up through the programs.",
    toc: BETHANY_TOC,
    Pages: BethanyPages,
  },
  espey: {
    slug: "espey",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. I · The September Issue",
    description:
      "James Espey — Investor & Chairman, Wiltshire Whisky Distillery, England. Sixty years behind the world's back bar, told in PrimeCrest's September Issue.",
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
  judy: {
    slug: "judy",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. II · The September Issue",
    description:
      "Judy Stevens — Scholar & Educator, Adult Development & Wisdom. Five decades shaping the field and pioneering online education, told in PrimeCrest's September Issue.",
    toc: JUDY_TOC,
    Pages: JudyPages,
  },
  kohila: {
    slug: "kohila",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. IV · The September Issue",
    description:
      "Kohila Sivas, Founder & Master Coach, Wholistic SuccessCodes. Two decades on readiness before performance, told in PrimeCrest's September Issue.",
    toc: KOHILA_TOC,
    Pages: KohilaPages,
  },
  foskaris: {
    slug: "foskaris",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. IV · The September Issue",
    description:
      "Penny Foskaris — Founder, Red Light Pro Devices & Foskaris Wellness, Anaheim Hills, California. The room she could not find, and the light her clients could take home.",
    toc: FOSKARIS_TOC,
    Pages: FoskarisPages,
  },
  pallavi: {
    slug: "pallavi",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. V · The September Issue",
    description:
      "Pallavi Pande — Mompreneur, Owner & Founder, Dtocs & Dtocs Consulting, Portland, Oregon. Banana leaves, a kitchen sink, and two companies that treat disposable tableware as a design problem.",
    toc: PALLAVI_TOC,
    Pages: PallaviPages,
  },
  joan: {
    slug: "joan",
    title: "Top 10 Unstoppable Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. II · The September Issue",
    description:
      "Joan Gillman — Science Teacher, The Browning School, New York. Forty-four years in the science classroom, the Green Team, and the work of making room for wonder.",
    toc: JOAN_TOC,
    Pages: JoanPages,
  },
  vineet: {
    slug: "vineet",
    title: "The September Issue — Vineet Trakroo",
    kicker: "PrimeCrest · The September Issue · 2026",
    description:
      "Vineet Trakroo — CEO & Chief Evolution Officer, Evolution Strategy Advisors LLP. Growth, strategy, execution, and future readiness, in PrimeCrest's September Issue.",
    toc: VINEET_TOC,
    Pages: VineetPages,
  },
  katie: {
    slug: "katie",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. IX · The October Issue",
    description:
      "Katie Holmes — Founder & CEO, Brand Studio Creative. Branding with Heart, and the owners who start sharing their businesses again.",
    toc: KATIE_TOC,
    Pages: KatiePages,
  },
  nichole: {
    slug: "nichole",
    title: "Top 10 Unstoppable Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. III · The September Issue",
    description:
      "Dr. Nichole Pettway — Deputy Director at Building Opportunities for Self-Sufficiency, California. WERC, the Trauma Recovery Center, and the Pre-trial Expansion Program.",
    toc: NICHOLE_TOC,
    Pages: NicholePages,
  },
};
