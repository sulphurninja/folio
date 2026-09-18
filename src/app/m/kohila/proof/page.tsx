import { KohilaPages } from "@/content/KohilaPages";
import "../kohila.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (Kohila Sivas). Kohila runs on its
 * own `.kh-*` system, so it gets a dedicated proof route that imports
 * kohila.css rather than the shared sheet.
 */
export default function KohilaProofSheet() {
  return (
    <main
      data-proof="kohila"
      className="mag-tone-kohila"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <KohilaPages />
    </main>
  );
}
