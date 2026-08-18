import { notFound } from "next/navigation";
import { Flipbook } from "@/components/reader/Flipbook";
import { getPublishedMagazine, recordMagazineView } from "@/lib/queries";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mag = await getPublishedMagazine(slug).catch(() => null);
  if (!mag) return { title: "Issue not found" };
  return {
    title: mag.title,
    description: mag.description || mag.issueLabel,
  };
}

export default async function MagazineReader({ params }: Props) {
  const { slug } = await params;
  const magazine = await getPublishedMagazine(slug).catch(() => null);
  if (!magazine) notFound();
  await recordMagazineView(slug).catch(() => {});
  return <Flipbook magazine={magazine} />;
}
