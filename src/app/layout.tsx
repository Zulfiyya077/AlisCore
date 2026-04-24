import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { NavigationProgress } from "@/components/layout/NavigationProgress";
import { siteConfig } from "@/lib/site";

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
const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.name;
const SITE_TITLE = siteConfig.title;
const SITE_DESCRIPTION = siteConfig.description;

export const metadata: Metadata = {
  // ── Core Meta ──
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "custom software development company",
    "software development services usa",
    "workflow automation services",
    "business process automation company",
    "web application development company",
    "legacy system modernization services",
    "healthcare software development company",
    "startup mvp development company",
    "small business IT solutions",
    "cloud modernization consulting",
    "AlisCore",
    "US IT solutions company",
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
  classification: "Custom Software Development & IT Solutions",

  // ── Base URL & Alternates ──
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "az-AZ": "/?lang=az",
      "es-ES": "/?lang=es",
    },
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
    description:
      "Custom software, automation, and modernization services for US businesses that need scalable systems and measurable growth.",
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: ["az_AZ", "es_ES"],
    images: [
      {
        url: siteConfig.ogImage,
        secureUrl: `${SITE_URL}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Custom Software and IT Solutions`,
        type: "image/png",
      },
      {
        url: siteConfig.logo,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} Logo`,
        type: "image/png",
      },
    ],
    countryName: "United States",
    emails: [siteConfig.email],
    phoneNumbers: [siteConfig.phone.replace(/[^\d+]/g, "")],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "AlisCore helps SMBs streamline operations with custom software, automation, and scalable digital infrastructure.",
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
    "contact": siteConfig.email,
    "reply-to": siteConfig.email,
    "phone": siteConfig.phone,
    "address": siteConfig.location,

    // Crawler Directives
    "revisit-after": "3 days",
    "rating": "General",
    "distribution": "global",
    "coverage": "worldwide",

    // Content Info
    "language": "English",
    "content-language": "en-US",
    "target": "all",
    "audience": "small and medium businesses",
    "doc-type": "Web Page",
    "doc-class": "Published",
    "resource-type": "document",
    "owner": SITE_NAME,
    "copyright": `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`,

    // Design & Theme
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
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
        <Script id="force-light-mode" strategy="beforeInteractive">
          {`
            try {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme-preference', 'light');
            } catch (e) {}
          `}
        </Script>
        <NavigationProgress />
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}