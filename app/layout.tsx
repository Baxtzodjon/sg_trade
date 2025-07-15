import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { playfairDisplay, radioCanada, } from "./fonts";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "SG Trade — Smart Global Trading Platform",
  description: "SG Trade is a cutting-edge platform providing seamless trading experience for global assets. Secure. Fast. Intelligent.",
  keywords: ["SG Trade", "Global Trading", "Crypto", "Forex", "Stocks", "Smart Trading Platform"],
  authors: [{ name: "SG Dev Team", url: "https://sgtrade.com" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SG Trade — Smart Global Trading Platform",
    description: "Trade smarter with SG Trade. A reliable and intuitive platform for global markets.",
    url: "https://sgtrade.com",
    siteName: "SG Trade",
    images: [
      {
        url: "https://sgtrade.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SG Trade Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SG Trade — Smart Global Trading Platform",
    description: "Secure. Fast. Intelligent trading experience.",
    images: ["https://sgtrade.com/twitter-card.jpg"],
    creator: "@sgtrade",
  },
  metadataBase: new URL("https://sgtrade.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${radioCanada.variable} antialiased`}
      >

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
