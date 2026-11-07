import { JonEricPages } from "@/content/JonEricPages";
import "../joneric.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. XII (Jon Eric McPike).
 * Own cover, shared November back, the interview printed whole.
 */
export default function JonEricProofSheet() {
  return (
    <main
      data-proof="joneric"
      className="mag-tone-joneric"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <JonEricPages />
    </main>
  );
}
