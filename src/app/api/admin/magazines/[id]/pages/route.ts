import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db";
import { Magazine } from "@/models";
import { requireAdmin, jsonOk, jsonError } from "@/lib/api";
import { cloudinaryReady, uploadBuffer, destroyAsset } from "@/lib/cloudinary";
import { serialize } from "@/lib/utils";
import type { MagazinePage } from "@/models/Magazine";

type Params = { params: Promise<{ id: string }> };

/** Upload one or more page images (multipart form, field name "files"). */
export async function POST(request: Request, { params }: Params) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  if (!cloudinaryReady()) {
    return jsonError("Cloudinary is not configured. Set CLOUDINARY_* env vars.", 503);
  }
  const { id } = await params;

  await dbConnect();
  const magazine = await Magazine.findById(id);
  if (!magazine) return jsonError("Not found", 404);

  const form = await request.formData();
  const files = form.getAll("files").filter((f): f is File => f instanceof File);
  if (!files.length) return jsonError("No files provided.");

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploaded = await uploadBuffer(buffer, {
      folder: `${process.env.CLOUDINARY_FOLDER || "folio"}/${magazine.slug}`,
    });
    magazine.pages.push({
      url: uploaded.url,
      publicId: uploaded.publicId,
      width: uploaded.width,
      height: uploaded.height,
      caption: "",
    });
  }

  if (!magazine.coverImage && magazine.pages.length) {
    magazine.coverImage = magazine.pages[0].url;
  }

  await magazine.save();
  revalidatePath(`/m/${magazine.slug}`);
  return jsonOk({ item: serialize(magazine) });
}

/** Remove a single page: DELETE with ?pageId=... */
export async function DELETE(request: Request, { params }: Params) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  const { id } = await params;
  const pageId = new URL(request.url).searchParams.get("pageId");
  if (!pageId) return jsonError("pageId is required.");

  await dbConnect();
  const magazine = await Magazine.findById(id);
  if (!magazine) return jsonError("Not found", 404);

  const page = (magazine.pages as MagazinePage[]).find(
    (p) => String(p._id) === pageId,
  );
  if (page?.publicId) await destroyAsset(page.publicId);

  magazine.pages = (magazine.pages as MagazinePage[]).filter(
    (p) => String(p._id) !== pageId,
  );
  if (page && magazine.coverImage === page.url) {
    magazine.coverImage = magazine.pages[0]?.url || "";
  }

  await magazine.save();
  revalidatePath(`/m/${magazine.slug}`);
  return jsonOk({ item: serialize(magazine) });
}
