import mongoose, { Schema, type InferSchemaType } from "mongoose";

const PageSchema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, default: "" },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    caption: { type: String, default: "" },
  },
  { _id: true },
);

const MagazineSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    issueLabel: { type: String, default: "" },
    description: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    pages: { type: [PageSchema], default: [] },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date, default: null },
    views: { type: Number, default: 0 },
  },
  { timestamps: true },
);

MagazineSchema.index({ published: 1, publishedAt: -1 });

export type MagazinePage = InferSchemaType<typeof PageSchema> & { _id: string };
export type MagazineDoc = InferSchemaType<typeof MagazineSchema>;

export const Magazine =
  mongoose.models.Magazine || mongoose.model("Magazine", MagazineSchema);
