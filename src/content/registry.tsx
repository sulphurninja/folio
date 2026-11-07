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
import { BhatiaPages, BHATIA_TOC } from "./BhatiaPages";
import { EricaPages, ERICA_TOC } from "./EricaPages";
import { GeetaPages, GEETA_TOC } from "./GeetaPages";
import { JonEricPages, JONERIC_TOC } from "./JonEricPages";
import { LiutciiaPages, LIUTCIIA_TOC } from "./LiutciiaPages";
import { SergeyPages, SERGEY_TOC } from "./SergeyPages";
import { VernaPages, VERNA_TOC } from "./VernaPages";

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
    kicker: "PrimeCrest · Vol. VII · The October Issue",
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
    kicker: "PrimeCrest · Vol. VIII · The October Issue",
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
    kicker: "PrimeCrest · Vol. VI · The October Issue",
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
  bhatia: {
    slug: "bhatia",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. IX · The November Issue",
    description:
      "Dr. Rabiaah Bhatia — Professor of Practice at Amity University, Board of Advisor at Rise Institute and HR Business Partner at BRK Cart. Eighteen years in industry, a classroom in 2015, and eight answers on speaking for an organization, in PrimeCrest's November Issue.",
    toc: BHATIA_TOC,
    Pages: BhatiaPages,
  },
  erica: {
    slug: "erica",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. X · The November Issue",
    description:
      "Erica Lanka Borba (Erica Lanka) — Brazilian travel & lifestyle content creator, musical artist and social media personality. Beyond Borders: celebrating Sri Lanka through music, travel, culture and human connection, in PrimeCrest's November Issue.",
    toc: ERICA_TOC,
    Pages: EricaPages,
  },
  geeta: {
    slug: "geeta",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. XI · The November Issue",
    description:
      "Dr. Geeta Grewal — Founder & CMD, 9 Muses Wellness. Advancing Aesthetic Medicine Through Science, Safety & Natural-Looking Results: a surgical oncologist's case for aesthetics as repair, told in PrimeCrest's November Issue.",
    toc: GEETA_TOC,
    Pages: GeetaPages,
  },
  joneric: {
    slug: "joneric",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. XII · The November Issue",
    description:
      "Jon Eric McPike — Senior Healthcare Consultant, Remarkable Unlimited; creator of The Leadership Superpower Matrix™; author and keynote speaker. From Gratitude to Growth: The 3.2.1. Way, told in PrimeCrest's November Issue.",
    toc: JONERIC_TOC,
    Pages: JonEricPages,
  },
  liutciia: {
    slug: "liutciia",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. XIII · The November Issue",
    description:
      "Liutciia Berkutova, Founder of WorldZen. Eighteen years. A world of reinvention. One belief: freedom begins with an idea in your mind. From a village girl to the founder of an international company without borders, in her own words, in PrimeCrest's November Issue.",
    toc: LIUTCIIA_TOC,
    Pages: LiutciiaPages,
  },
  sergey: {
    slug: "sergey",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. XIV · The November Issue",
    description:
      "Sergey Shayakhmetov — Founder & CEO, Longevium. The longevity mindset: on AI, ambition and building a longevity ecosystem of clinics, AI tools for doctors, EEG-based brain assessment and research, told in PrimeCrest's November Issue.",
    toc: SERGEY_TOC,
    Pages: SergeyPages,
  },
  verna: {
    slug: "verna",
    title: "Top 10 Unstoppable Business Leaders Making a Difference in 2026",
    kicker: "PrimeCrest · Vol. XV · The November Issue",
    description:
      "Verna Felder — educator of more than 20 years, author, founder of Urban School Transformation and co-creator of Can You Survive Poverty? The Game™. The field trip, the families behind the absences, and the game built to bring their choices into the room, in PrimeCrest's November Issue.",
    toc: VERNA_TOC,
    Pages: VernaPages,
  },
};
