import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "BackBonix - Professional IT Infrastructure & Network Security Solutions",
  description: "Professional IT infrastructure solutions in Fairfax, VA. Network security, video surveillance, IT infrastructure management. Call +1 (571) 315-9611 for expert IT services.",
  keywords: "IT infrastructure Fairfax VA, network security Virginia, video surveillance, IT solutions, network setup, professional IT services, BackBonix, Fairfax IT company, Virginia IT services",
  authors: [{ name: "BackBonix" }],
  creator: "BackBonix",
  publisher: "BackBonix",
  icons: {
    icon: "/images/Screenshot 2025-06-20 184620.png",
    apple: "/images/Screenshot 2025-06-20 184620.png",
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
  openGraph: {
    type: "website",
    url: "https://backbonix.com/",
    title: "BackBonix - Professional IT Infrastructure Solutions",
    description: "Professional IT infrastructure, network security, and video surveillance solutions in Fairfax, VA. Expert IT services for your business.",
    images: [
      {
        url: "https://backbonix.com/images/Screenshot 2025-06-20 184620.png",
        width: 1200,
        height: 630,
        alt: "BackBonix IT Infrastructure Solutions"
      }
    ],
    siteName: "BackBonix",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BackBonix - Professional IT Infrastructure Solutions",
    description: "Professional IT infrastructure, network security, and video surveillance solutions in Fairfax, VA.",
    images: ["https://backbonix.com/images/Screenshot 2025-06-20 184620.png"],
  },
  other: {
    "contact": "backbonix@gmail.com",
    "phone": "+1 (571) 315-9611",
    "address": "Fairfax, VA 20171",
    "geo.region": "US-VA",
    "geo.placename": "Fairfax",
    "geo.position": "38.8462;-77.3064",
    "ICBM": "38.8462, -77.3064",
    "revisit-after": "7 days",
    "language": "English",
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}