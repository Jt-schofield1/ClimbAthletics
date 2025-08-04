import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "C.L.I.M.B. Athletics – Elite QB & WR Training in DC",
  description: "Quarterback & Wide Receiver coaching, Chalk Talk strategy, and elite athlete mentorship in the DMV.",
  keywords: ["quarterback training", "wide receiver training", "football coaching", "Washington DC", "DMV", "athlete development"],
  authors: [{ name: "C.L.I.M.B. Athletics" }],
  creator: "C.L.I.M.B. Athletics",
  openGraph: {
    title: "C.L.I.M.B. Athletics – Elite QB & WR Training in DC",
    description: "Quarterback & Wide Receiver coaching, Chalk Talk strategy, and elite athlete mentorship in the DMV.",
    url: "https://www.climbathletics.com",
    siteName: "C.L.I.M.B. Athletics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "C.L.I.M.B. Athletics Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C.L.I.M.B. Athletics – Elite QB & WR Training in DC",
    description: "Quarterback & Wide Receiver coaching, Chalk Talk strategy, and elite athlete mentorship in the DMV.",
    images: ["/og-image.png"],
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
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
