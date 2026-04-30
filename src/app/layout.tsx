import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// ─── Fonts ──────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

// ─── Viewport Configuration ─────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
  colorScheme: "light",
};

// ─── SEO Metadata ───────────────────────────────────────────
const SITE_URL = "https://backbonix.com";
const SITE_NAME = "BackBonix";
const SITE_TITLE = "BackBonix | Enterprise IT Infrastructure & Cybersecurity Solutions";
const SITE_DESCRIPTION =
  "BackBonix delivers enterprise-grade IT infrastructure, network security, structured cabling, and video surveillance solutions across Northern Virginia. Trusted by leading organizations for mission-critical deployments. Contact us: +1 (571) 315-9611";

export const metadata: Metadata = {
  // ── Core Meta ──
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IT infrastructure solutions",
    "network security services",
    "cybersecurity consulting",
    "video surveillance systems",
    "structured cabling",
    "enterprise networking",
    "IT consulting Fairfax VA",
    "managed IT services Virginia",
    "network design and implementation",
    "firewall configuration",
    "IP camera installation",
    "wireless network deployment",
    "data center solutions",
    "BackBonix",
    "Northern Virginia IT company",
    "Washington DC IT services",
  ],
  authors: [
    { name: SITE_NAME, url: SITE_URL },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "IT Infrastructure & Network Security Services",

  // ── Base URL & Alternates ──
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "az-AZ": "/?lang=az",
      "es-ES": "/?lang=es",
    },
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },

  // ── Icons & Manifest ──
  icons: {
    icon: [
      { url: "/images/backbonix-logo.png", sizes: "any" },
      { url: "/images/backbonix-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/backbonix-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/backbonix-logo.png", sizes: "180x180" },
    ],
    shortcut: "/images/backbonix-logo.png",
  },

  // ── Robots & Crawling ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── OpenGraph (Facebook, LinkedIn, etc.) ──
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: "Enterprise IT infrastructure, cybersecurity, structured cabling & video surveillance solutions. Serving Northern Virginia, Washington D.C. & surrounding areas since 2020.",
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: ["az_AZ", "es_ES"],
    images: [
      {
        url: "/images/backbonix-og.png",
        secureUrl: `${SITE_URL}/images/backbonix-og.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Enterprise IT Infrastructure & Cybersecurity Solutions`,
        type: "image/png",
      },
      {
        url: "/images/backbonix-logo.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} Logo`,
        type: "image/png",
      },
    ],
    countryName: "United States",
    emails: ["backbonix@gmail.com"],
    phoneNumbers: ["+15713159611"],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: "Enterprise IT infrastructure, cybersecurity & video surveillance solutions in Northern Virginia. Trusted by leading organizations.",
    images: {
      url: "/images/backbonix-og.png",
      alt: `${SITE_NAME} — Enterprise IT Infrastructure Solutions`,
    },
    creator: "@backbonix",
    site: "@backbonix",
  },

  // ── Verification (replace with real IDs when available) ──
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },

  // ── Additional Meta Tags ──
  other: {
    // Contact & Business
    "contact": "backbonix@gmail.com",
    "reply-to": "backbonix@gmail.com",
    "phone": "+1 (571) 315-9611",
    "address": "Fairfax, VA 20171, United States",

    // Geo Targeting
    "geo.region": "US-VA",
    "geo.placename": "Fairfax, Virginia",
    "geo.position": "38.8462;-77.3064",
    "ICBM": "38.8462, -77.3064",

    // Crawler Directives
    "revisit-after": "3 days",
    "rating": "General",
    "distribution": "global",
    "coverage": "worldwide",

    // Content Info
    "language": "English",
    "content-language": "en-US",
    "target": "all",
    "audience": "all",
    "doc-type": "Web Page",
    "doc-class": "Published",
    "resource-type": "document",
    "owner": SITE_NAME,
    "copyright": `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`,

    // Design & Theme
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": SITE_NAME,
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
  },
};

// ─── Root Layout ────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}