import { EricaPages } from "@/content/EricaPages";
import "../erica.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. X (Erica Lanka Borba).
 * Airmail system: stamps, postmarks, die-cut studio stickers on colour fields.
 */
export default function EricaProofSheet() {
  return (
    <main
      data-proof="erica"
      className="mag-tone-erica"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <EricaPages />
    </main>
  );
}
