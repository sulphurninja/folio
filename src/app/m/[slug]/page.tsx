import { notFound } from "next/navigation";
import { Flipbook } from "@/components/reader/Flipbook";
import { HtmlFlipbook } from "@/components/reader/HtmlFlipbook";
import { getPublishedMagazine, recordMagazineView } from "@/lib/queries";
import { issueMetadata, IssueJsonLdScript } from "@/lib/issue-seo";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mag = await getPublishedMagazine(slug).catch(() => null);
  if (!mag) return { title: "Issue not found" };
  return issueMetadata({
    title: mag.title,
    description: mag.description || mag.issueLabel,
    slug: mag.slug,
    ogImage: mag.ogImage || mag.coverImage,
    kicker: mag.issueLabel,
  });
}

export default async function MagazineReader({ params }: Props) {
  const { slug } = await params;
  const magazine = await getPublishedMagazine(slug).catch(() => null);
  if (!magazine) notFound();
  await recordMagazineView(slug).catch(() => {});

  const jsonLd = (
    <IssueJsonLdScript
      input={{
        title: magazine.title,
        description: magazine.description || magazine.issueLabel,
        slug: magazine.slug,
        ogImage: magazine.ogImage || magazine.coverImage,
        datePublished: magazine.publishedAt,
      }}
    />
  );

  if (magazine.kind === "html" && magazine.pagesHtml?.length) {
    return (
      <>
        {jsonLd}
        <HtmlFlipbook title={magazine.title} toc={magazine.toc || []}>
          <div dangerouslySetInnerHTML={{ __html: magazine.pagesHtml.join("") }} />
        </HtmlFlipbook>
      </>
    );
  }

  return (
    <>
      {jsonLd}
      <Flipbook magazine={magazine} />
    </>
  );
}
