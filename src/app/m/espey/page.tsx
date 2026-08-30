import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { EspeyPages, ESPEY_TOC } from "@/content/EspeyPages";

export const metadata = {
  title: "Ego Trip — James Espey OBE",
  description:
    "Baileys, Malibu, Johnnie Walker Blue Label, Chivas 18 — sixty years behind the world's back bar, told by the man who poured it.",
};

export default function EspeyIssuePage() {
  return (
    <HtmlFlipbook title="Ego Trip" toc={ESPEY_TOC}>
      <EspeyPages />
    </HtmlFlipbook>
  );
}
