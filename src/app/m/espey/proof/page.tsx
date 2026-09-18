import { EspeyPages } from "@/content/EspeyPages";
import "../espey.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (James Espey). Espey runs on its own
 * `.es-*` system, so it gets a dedicated proof route that imports espey.css
 * rather than the shared sheet.
 */
export default function EspeyProofSheet() {
  return (
    <main
      data-proof="espey"
      className="mag-tone-espey"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <EspeyPages />
    </main>
  );
}
