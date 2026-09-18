import { FoskarisPages } from "@/content/FoskarisPages";
import "../foskaris.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (Penny Foskaris). House cover
 * and back. Closed interiors: contents spread, two-column stories, splits.
 */
export default function FoskarisProofSheet() {
  return (
    <main
      data-proof="foskaris"
      className="mag-tone-foskaris"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <FoskarisPages />
    </main>
  );
}
