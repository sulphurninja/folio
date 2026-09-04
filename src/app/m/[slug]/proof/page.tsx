import { notFound } from "next/navigation";
import { ISSUE_REGISTRY } from "@/content/registry";
import "@/app/m/vineet/vineet.css";

export const dynamic = "force-static";

/**
 * Flat proof sheet. The flipbook hides its source leaves, so art direction is
 * checked here: every page rendered at the design canvas, in reading order.
 */
export default async function ProofSheet({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = ISSUE_REGISTRY[slug];
  if (!issue) notFound();
  const { Pages } = issue;

  return (
    <main
      data-proof={slug}
      className={`mag-tone-${slug}`}
      style={{ background: "#2a2a2a", padding: 0, display: "block" }}
    >
      <Pages />
    </main>
  );
}
