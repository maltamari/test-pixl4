import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import Navbar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pixl4.com'),
  title: {
    default: "PIXL4 | Digital Agency",
    template: "%s | PIXL4",
  },
  description: "PIXL4 is a premium digital agency crafting unusual and phenomenal web experiences.",
  openGraph: {
    title: "PIXL4 | Digital Agency",
    description: "Premium digital agency crafting unusual and phenomenal web experiences.",
    url: "/",
    siteName: "PIXL4",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXL4 | Digital Agency",
    description: "Premium digital agency crafting unusual and phenomenal web experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${bebas.variable} ${geistMono.variable} antialiased bg-[#e8e8e8]`}
      >
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />

        {/* Global JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Using dangerouslySetInnerHTML is required and perfectly safe here for static structured data
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PIXL4",
              "url": "https://pixl4.com",
              "logo": "https://pixl4.com/logo.png",
              "sameAs": [
                "https://twitter.com/pixl4",
                "https://instagram.com/pixl4"
              ]
            })
          }}
        />
      </body>

    </html>
  );
}
