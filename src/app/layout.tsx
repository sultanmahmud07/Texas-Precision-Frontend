import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono, Oswald, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';
import MobileNavbar from "@/components/shared/Navbar/BottomNavbar";
const geistOswald = Oswald({
      variable: "--font-geist-oswald",
      subsets: ["latin"],
});
const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
      subsets: ["latin"],
});
// 2. Initialize Montserrat
const montserrat = Montserrat({
      variable: "--font-montserrat",
      subsets: ["latin"],
});
export const metadata: Metadata = {
      metadataBase: new URL('https://www.nativeways.com'),
      title: {
            default: "Texas Precision Roofing | Employee Pricing from $7,999 | DFW's Trusted Roofing Company",
            template: "%s | Texas Precision Roofing",
      },
      description: "Get employee pricing on your new roof from Texas Precision Roofing. DFW's trusted roofing contractor. Starting at $7,999. No games, no gimmicks.",
      keywords: [
            "roofing services",
            "rooftop experiences",
      ],
      openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://www.nativeways.com",
            siteName: "Texas Precision Roofing",
            title: "Texas Precision Roofing | Employee Pricing from $7,999 | DFW's Trusted Roofing Company",
            description: "Experience top-quality roofing services in the DFW area with Texas Precision Roofing. We offer employee pricing starting at $7,999 for residential and commercial roofing projects. Trust our expert team for reliable, durable, and affordable roofing solutions.",
            images: [
                  {
                        url: "/images/og-main.jpg",
                        width: 1200,
                        height: 630,
                        alt: "Texas Precision Roofing",
                  },
            ],
      },
      twitter: {
            card: "summary_large_image",
            title: "Texas Precision Roofing | Employee Pricing from $7,999 | DFW's Trusted Roofing Company",
            description: "Experience top-quality roofing services in the DFW area with Texas Precision Roofing. We offer employee pricing starting at $7,999 for residential and commercial roofing projects. Trust our expert team for reliable, durable, and affordable roofing solutions.",
            images: ["/images/og-main.jpg"],
      },
      icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png",
      },
      robots: {
            index: true,
            follow: true,
            googleBot: {
                  index: true,
                  follow: true,
                  'max-video-preview': -1,
                  'max-image-preview': 'large',
                  'max-snippet': -1,
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
                       className={`${geistOswald.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
                  >
                        <NextTopLoader
                              color="#023047"
                              height={4}
                        />
                        {children}
                        <MobileNavbar />
                        <Toaster position="bottom-right" richColors />
                  </body>
            </html>
      );
}