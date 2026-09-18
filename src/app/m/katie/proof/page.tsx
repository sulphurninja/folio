import { KatiePages } from "@/content/KatiePages";
import "../katie.css";

export const dynamic = "force-static";

export default function KatieProofSheet() {
  return (
    <main
      data-proof="katie"
      className="mag-tone-katie"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <KatiePages />
    </main>
  );
}
