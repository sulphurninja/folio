import { dbConnect } from "@/lib/db";
import { serialize } from "@/lib/utils";
import { Magazine } from "@/models";

export type PublicPage = {
  _id: string;
  url: string;
  width: number;
  height: number;
  caption?: string;
};

export type PublicMagazine = {
  _id: string;
  title: string;
  slug: string;
  issueLabel: string;
  description: string;
  coverImage: string;
  pages: PublicPage[];
  kind?: "images" | "html";
  pagesHtml?: string[];
  toc?: { page: number; label: string }[];
  ogImage?: string;
  publishedAt?: string | null;
  views: number;
  createdAt?: string;
};

export async function getPublishedMagazines() {
  await dbConnect();
  const items = await Magazine.find({ published: true })
    .sort({ publishedAt: -1, createdAt: -1 })
    .select("title slug issueLabel description coverImage publishedAt views kind pagesHtml pages")
    .lean();
  return serialize<PublicMagazine[]>(items);
}

export async function getPublishedMagazine(slug: string) {
  await dbConnect();
  const item = await Magazine.findOne({ slug, published: true }).lean();
  return item ? serialize<PublicMagazine>(item) : null;
}

export async function recordMagazineView(slug: string) {
  await dbConnect();
  await Magazine.updateOne({ slug, published: true }, { $inc: { views: 1 } });
}
