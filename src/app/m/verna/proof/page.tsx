import { VernaPages } from "@/content/VernaPages";
import "../verna.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. XV (Verna Felder). Own cover,
 * shared November back. Closed vf-* interiors: the four-deck thumb index,
 * drawn cards, and the interview printed whole.
 */
export default function VernaProofSheet() {
  return (
    <main
      data-proof="verna"
      className="mag-tone-verna"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <VernaPages />
    </main>
  );
}
