import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { client, queries } from "@/lib/sanity";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export async function generateMetadata(): Promise<Metadata> {
  const seo = await client.fetch(queries.seo).catch(() => null);
  return {
    title: seo?.metaTitle || "Sumaita Islam — Web Designer & AI/ML Enthusiast",
    description:
      seo?.metaDescription ||
      "Passionate about coding, AI, machine learning, and modern web development.",
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.metaTitle || "Sumaita Islam — Portfolio",
      description: seo?.metaDescription,
      images: seo?.image ? [seo.image] : [],
    },
    metadataBase: new URL(seo?.url || "https://example.com"),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
