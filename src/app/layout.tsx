import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://billingss.com"),
  title: {
    default: "Billingss — POS, Cloud Billing & Business Intelligence",
    template: "%s | Billingss",
  },
  description:
    "Billingss builds next-generation POS billing, restaurant management, entertainment solutions, and cloud-native automation for modern businesses.",
  keywords: [
    "POS billing",
    "restaurant management",
    "cloud billing",
    "inventory",
    "QR ordering",
    "analytics",
    "Billingss",
  ],
  authors: [{ name: "Billingss" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://billingss.com",
    siteName: "Billingss",
    title: "Billingss — Premium Billing & Operations Software",
    description:
      "Modern technology for POS, restaurants, entertainment, and scalable cloud billing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billingss",
    description: "Premium billing and operations software for ambitious teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
