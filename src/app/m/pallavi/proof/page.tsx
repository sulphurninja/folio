import { PallaviPages } from "@/content/PallaviPages";
import "../pallavi.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (Pallavi Pande). Pallavi runs on its
 * own `.pl-*` system, so it gets a dedicated proof route that imports
 * pallavi.css rather than the shared sheet.
 */
export default function PallaviProofSheet() {
  return (
    <main
      data-proof="pallavi"
      className="mag-tone-pallavi"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <PallaviPages />
    </main>
  );
}
