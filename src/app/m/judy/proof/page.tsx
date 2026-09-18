import { JudyPages } from "@/content/JudyPages";
import "../judy.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for Judy. Cover and back keep the flagship lockup;
 * interiors run on the shared kit (kit.css) themed `.kt-judy`.
 */
export default function JudyProofSheet() {
  return (
    <main
      data-proof="judy"
      className="mag-tone-judy"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <JudyPages />
    </main>
  );
}
