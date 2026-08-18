import { v2 as cloudinary } from "cloudinary";

let configured = false;

export function cloudinaryReady() {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET,
  );
}

function getCloudinary() {
  if (!configured) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
    configured = true;
  }
  return cloudinary;
}

export async function uploadBuffer(
  buffer: Buffer,
  options: { folder?: string; publicIdPrefix?: string } = {},
) {
  const cl = getCloudinary();
  const folder = options.folder || process.env.CLOUDINARY_FOLDER || "folio";
  return new Promise<{
    url: string;
    publicId: string;
    width: number;
    height: number;
  }>((resolve, reject) => {
    const stream = cl.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error || !result) return reject(error || new Error("Upload failed"));
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
        });
      },
    );
    stream.end(buffer);
  });
}

export async function destroyAsset(publicId: string) {
  const cl = getCloudinary();
  try {
    await cl.uploader.destroy(publicId, { resource_type: "image" });
  } catch {
    // Non-fatal: orphaned assets can be cleaned in the Cloudinary console.
  }
}
