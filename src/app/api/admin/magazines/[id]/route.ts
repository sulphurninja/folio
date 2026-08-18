import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db";
import { Magazine } from "@/models";
import { requireAdmin, jsonOk, jsonError } from "@/lib/api";
import { serialize } from "@/lib/utils";
import { destroyAsset } from "@/lib/cloudinary";
import type { MagazinePage } from "@/models/Magazine";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  const { id } = await params;
  await dbConnect();
  const item = await Magazine.findById(id).lean();
  if (!item) return jsonError("Not found", 404);
  return jsonOk({ item: serialize(item) });
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  const { id } = await params;
  const body = await request.json().catch(() => ({}));

  await dbConnect();
  const magazine = await Magazine.findById(id);
  if (!magazine) return jsonError("Not found", 404);

  if (typeof body.title === "string" && body.title.trim()) magazine.title = body.title.trim();
  if (typeof body.issueLabel === "string") magazine.issueLabel = body.issueLabel.trim();
  if (typeof body.description === "string") magazine.description = body.description.trim();
  if (typeof body.coverImage === "string") magazine.coverImage = body.coverImage;

  if (Array.isArray(body.pagesMeta)) {
    for (const meta of body.pagesMeta as Array<{ _id?: string; caption?: string }>) {
      if (!meta?._id) continue;
      const page = (magazine.pages as Array<{ _id: unknown; caption?: string }>).find(
        (p) => String(p._id) === String(meta._id),
      );
      if (page && typeof meta.caption === "string") page.caption = meta.caption;
    }
  }

  if (typeof body.published === "boolean") {
    magazine.published = body.published;
    if (body.published && !magazine.publishedAt) magazine.publishedAt = new Date();
  }

  // Reorder: client sends the full list of page ids in the new order.
  if (Array.isArray(body.pageOrder)) {
    const byId = new Map(
      magazine.pages.map((p: MagazinePage) => [String(p._id), p]),
    );
    const reordered = body.pageOrder
      .map((pid: string) => byId.get(String(pid)))
      .filter(Boolean);
    if (reordered.length === magazine.pages.length) {
      magazine.pages = reordered;
    }
  }

  await magazine.save();
  revalidatePath("/");
  revalidatePath(`/m/${magazine.slug}`);
  return jsonOk({ item: serialize(magazine) });
}

export async function DELETE(_req: Request, { params }: Params) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  const { id } = await params;
  await dbConnect();
  const magazine = await Magazine.findByIdAndDelete(id);
  if (magazine) {
    for (const page of magazine.pages as MagazinePage[]) {
      if (page.publicId) await destroyAsset(page.publicId);
    }
    revalidatePath("/");
  }
  return jsonOk();
}
