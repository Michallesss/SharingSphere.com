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
  description: "",
};

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
