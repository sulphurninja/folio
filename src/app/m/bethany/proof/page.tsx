import { BethanyPages } from "@/content/BethanyPages";
import "../bethany.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet for the September Issue (Nick Hill). Closed `.bc-*`
 * system: civic cover, steel interiors, two-page Fortiora ad. Imports
 * bethany.css only. No shared kit.
 */
export default function BethanyProofSheet() {
  return (
    <main
      data-proof="bethany"
      className="mag-tone-bethany"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <BethanyPages />
    </main>
  );
}
