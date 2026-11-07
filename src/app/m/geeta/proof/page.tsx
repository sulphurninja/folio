import { GeetaPages } from "@/content/GeetaPages";
import "../geeta.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. XI (Dr. Geeta Grewal).
 * Own cover, shared November back. Interiors in the closed gg-* system.
 */
export default function GeetaProofSheet() {
  return (
    <main
      data-proof="geeta"
      className="mag-tone-geeta"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <GeetaPages />
    </main>
  );
}
