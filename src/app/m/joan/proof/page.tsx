import { JoanPages } from "@/content/JoanPages";
import "../joan.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (Joan Gillman). Joan runs on its own
 * `.jn-*` system, so it gets a dedicated proof route that imports joan.css
 * rather than the shared sheet (which loads Vineet's `.pc-*`).
 */
export default function JoanProofSheet() {
  return (
    <main
      data-proof="joan"
      className="mag-tone-joan"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <JoanPages />
    </main>
  );
}
