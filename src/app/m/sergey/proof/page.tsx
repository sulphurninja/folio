import { SergeyPages } from "@/content/SergeyPages";
import "../sergey.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. XIV (Sergey Shayakhmetov).
 * Own cover, shared November back. Fig. 01, the interview printed whole.
 */
export default function SergeyProofSheet() {
  return (
    <main
      data-proof="sergey"
      className="mag-tone-sergey"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <SergeyPages />
    </main>
  );
}
