import { LiutciiaPages } from "@/content/LiutciiaPages";
import "../liutciia.css";
import "../../november/house.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the November Issue, Vol. XIII (Liutciia Berkutova).
 * Every leaf in order, for QA and PDF export.
 */
export default function LiutciiaProofSheet() {
  return (
    <main
      data-proof="liutciia"
      className="mag-tone-liutciia"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <LiutciiaPages />
    </main>
  );
}
