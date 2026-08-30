import type { Metadata } from "next";
import { Newsreader, Source_Serif_4, Inter } from "next/font/google";
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

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
