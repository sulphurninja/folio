import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/lib/utils";
import { PUBLISHER } from "@/lib/issue-seo";

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PUBLISHER.name,
    brand: "Fortiora Editions",
    url: PUBLISHER.url,
    email: PUBLISHER.email,
    logo: siteUrl("/brand/logo-fortiora.png"),
    address: PUBLISHER.address,
    description:
      "Fortiora Editions is the digital magazine imprint of Fortiora Group LLC — crafted interactive issues with true page-turning, zoom, and an immersive reading room.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const display = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/g/newsreader-400-700-italic.woff2", weight: "400 700", style: "italic" },
    { path: "./fonts/g/newsreader-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

const serif = localFont({
  variable: "--font-serif",
  src: [
    { path: "./fonts/g/source-serif-4-400-600-italic.woff2", weight: "400 600", style: "italic" },
    { path: "./fonts/g/source-serif-4-400-600.woff2", weight: "400 600", style: "normal" },
  ],
  display: "swap",
});

const sans = localFont({
  variable: "--font-sans",
  src: [
    { path: "./fonts/g/inter-400-700.woff2", weight: "400 700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Fortiora Editions — Magazines, beautifully read",
    template: "%s — Fortiora Editions",
  },
  description:
    "Crafted digital magazines from Fortiora Group — true page-turning, zoom, and an immersive reading room.",
  publisher: PUBLISHER.name,
  creator: PUBLISHER.name,
  openGraph: {
    type: "website",
    siteName: "Fortiora Editions",
    title: "Fortiora Editions — Magazines, beautifully read",
    description:
      "Crafted digital magazines from Fortiora Group — true page-turning, zoom, and an immersive reading room.",
    url: siteUrl(),
    locale: "en_US",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Fortiora Editions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortiora Editions — Magazines, beautifully read",
    description:
      "Crafted digital magazines from Fortiora Group — true page-turning, zoom, and an immersive reading room.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full antialiased">
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
