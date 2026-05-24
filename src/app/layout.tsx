import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  variable: "--font-geist-sans",
  src: "./fonts/geist-latin.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aspen Pharmaceuticals Pvt. Ltd. | Pharmaceutical Excellence Since 2010",
  description:
    "Aspen Pharmaceuticals Pvt. Ltd. is an independent Indian pharmaceutical company delivering quality healthcare solutions through trusted manufacturing partnerships across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
