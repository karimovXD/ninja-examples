import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Watch your future project with API Ninja",
  icons: "/assets/logos/window.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
