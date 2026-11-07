import { BhatiaPages } from "@/content/BhatiaPages";
import "../bhatia.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. IX (Dr. Rabiaah Bhatia).
 * Own cover, shared November back. Closed bh-* interiors.
 */
export default function BhatiaProofSheet() {
  return (
    <main
      data-proof="bhatia"
      className="mag-tone-bhatia"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <BhatiaPages />
    </main>
  );
}
