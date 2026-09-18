import { NicholePages } from "@/content/NicholePages";
import "../nichole.css";

export const dynamic = "force-static";

export default function NicholeProofSheet() {
  return (
    <main
      data-proof="nichole"
      className="mag-tone-nichole"
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <NicholePages />
    </main>
  );
}
