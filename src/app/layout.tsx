import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Balumuri | AI & App Developer",
  description: "Portfolio of Vivek Balumuri, an AI & App Developer building intelligent apps that solve real-world problems. Discover case studies on innovative digital experiences.",
  openGraph: {
    title: "Vivek Balumuri | AI & App Developer",
    description: "Building intelligent apps that solve real-world problems.",
    url: "https://vivekbalumuri.com",
    siteName: "Vivek Balumuri Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Vivek Balumuri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Balumuri | AI & App Developer",
    description: "Building intelligent apps that solve real-world problems.",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"],
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#121212]`}>
        {children}
      </body>
    </html>
  );
}
