import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
});

const fontClass = cn("min-h-screen bg-background font-sans antialiased", fontSans.variable);

export const metadata: Metadata = {
  title: "SharingShare",
  description: "Share things with others.",
  referrer: 'origin-when-cross-origin',
  keywords: ['sharing', 'share', 'thing', 'stuff'],
  category: 'Service provider',
  authors: [{ name: 'Michał Wieczorek', url: 'https://github.com/Michallesss' }, { name: 'Antoni Kijjaroentorn', url: 'https://github.com/modern-tony'}],
  manifest: 'url',
  robots: 'index, follow',
  openGraph: {},
  // appLinks: {}, 
}; // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontClass}>{children}</body>
    </html>
  );
}
