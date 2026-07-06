import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const libreCaslon = localFont({
  variable: "--font-libre-caslon",
  src: [
    { path: "../fonts/DdT878IGsGw1aF1JU10PUbTvNNaDMcq_.ttf", weight: "400" },
    { path: "../fonts/DdT578IGsGw1aF1JU10PUbTvNNaDMfID8sdj.ttf", weight: "700" },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  src: [
    { path: "../fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf", weight: "400" },
    { path: "../fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf", weight: "600" },
    { path: "../fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: "REHAN MALIK | Aspirational Luxury",
  description:
    "Discover a curation of luxury fragrances and timepieces. Crafted with passion, our perfumes speak before you say a word.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body-lg bg-onyx-black text-ivory-white">
        {children}
      </body>
    </html>
  );
}
