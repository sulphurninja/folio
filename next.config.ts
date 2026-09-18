import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep the dev-tools badge out of proof screenshots and printed PDFs. */
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
