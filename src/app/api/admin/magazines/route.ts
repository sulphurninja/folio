import { dbConnect } from "@/lib/db";
import { Magazine } from "@/models";
import { requireAdmin, jsonOk, jsonError } from "@/lib/api";
import { slugify, serialize } from "@/lib/utils";

export async function GET() {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  await dbConnect();
  const items = await Magazine.find().sort({ updatedAt: -1 }).lean();
  return jsonOk({ items: serialize(items) });
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return jsonError("Unauthorized", 401);
  const body = await request.json().catch(() => ({}));
  const title = String(body.title || "").trim();
  if (!title) return jsonError("Title is required.");

  await dbConnect();
  let slug = slugify(title);
  if (await Magazine.exists({ slug })) {
    slug = `${slug}-${Date.now().toString(36)}`;
  }
  const magazine = await Magazine.create({
    title,
    slug,
    issueLabel: String(body.issueLabel || "").trim(),
    description: String(body.description || "").trim(),
  });
  return jsonOk({ item: serialize(magazine) }, { status: 201 });
}
