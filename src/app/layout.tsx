import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperClient from "@/components/layout/wrapperClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lagos Onchain Summit 2024",
  description:
    "Join us for the premier blockchain and Web3 event in Lagos, Nigeria. Explore the future of decentralized technology, network with industry leaders, and be part of the onchain revolution.",
  keywords: [
    "blockchain",
    "Web3",
    "cryptocurrency",
    "Lagos",
    "Nigeria",
    "tech conference",
    "Onchain Summit",
  ],
  authors: [{ name: "Lagos Onchain Summit Team" }],
  openGraph: {
    title: "Lagos Onchain Summit 2024",
    description:
      "Experience the future of blockchain and Web3 in Lagos, Nigeria",
    url: "https://lagosonchainsummit.com", // Replace with your actual website URL
    siteName: "Lagos Onchain Summit",
    images: [
      {
        url: "https://lagosonchainsummit.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Lagos Onchain Summit 2024",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagos Onchain Summit 2024",
    description: "Join the premier blockchain and Web3 event in Lagos, Nigeria",
    images: ["https://lagosonchainsummitsummit.com/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "h-full bg-lagos-black text-white"}>
        <WrapperClient>{children}</WrapperClient>
      </body>
    </html>
  );
}
