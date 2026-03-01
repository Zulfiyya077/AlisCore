import Script from 'next/script';
import HomeClient from './HomeClient';

// ─── Constants ──────────────────────────────────────────────
const SITE_URL = "https://backbonix.com";
const SITE_NAME = "BackBonix";
const SITE_PHONE = "+1-571-315-9611";
const SITE_EMAIL = "backbonix@gmail.com";
const SITE_LOGO = `${SITE_URL}/images/backbonix-logo.png`;
const SITE_IMAGE = `${SITE_URL}/images/backbonix-og.png`;

// ─── 1. WebSite Schema (Sitelinks Search Box) ──────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": SITE_NAME,
  "url": SITE_URL,
  "description": "Enterprise IT infrastructure, cybersecurity, structured cabling & video surveillance solutions in Northern Virginia.",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": ["en-US", "az-AZ", "es-ES"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// ─── 2. LocalBusiness Schema (Google Business Profile) ──────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  "name": SITE_NAME,
  "alternateName": "BackBonix IT Solutions",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": SITE_LOGO,
    "width": 512,
    "height": 512,
    "caption": `${SITE_NAME} — Enterprise IT Infrastructure Solutions`
  },
  "image": [SITE_IMAGE, SITE_LOGO],
  "description": "BackBonix is a premier IT infrastructure and cybersecurity firm serving Northern Virginia, Washington D.C., and the greater DMV area. We specialize in enterprise network architecture, advanced security systems, structured cabling, and mission-critical IT deployments for businesses of all sizes.",
  "telephone": SITE_PHONE,
  "email": SITE_EMAIL,
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fairfax",
    "addressLocality": "Fairfax",
    "addressRegion": "VA",
    "postalCode": "20171",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.8462,
    "longitude": -77.3064
  },
  "hasMap": "https://maps.google.com/?q=Fairfax+VA+20171",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Fairfax",
      "sameAs": "https://en.wikipedia.org/wiki/Fairfax,_Virginia"
    },
    {
      "@type": "State",
      "name": "Virginia",
      "sameAs": "https://en.wikipedia.org/wiki/Virginia"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Washington D.C. Metropolitan Area"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 38.8462,
      "longitude": -77.3064
    },
    "geoRadius": "80467"
  },
  "priceRange": "$$-$$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Wire Transfer"],
  "currenciesAccepted": "USD",
  "knowsAbout": [
    "Network Security",
    "IT Infrastructure",
    "Cybersecurity",
    "Video Surveillance",
    "Structured Cabling",
    "Enterprise Networking",
    "Firewall Configuration",
    "Cloud Infrastructure",
    "Data Center Solutions"
  ],
  "knowsLanguage": ["en", "az", "es"],
  "slogan": "Building the Backbone of Your Digital Future",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Enterprise Client"
      },
      "reviewBody": "BackBonix delivered exceptional IT infrastructure for our corporate office. Their team's expertise in network security and structured cabling transformed our operations."
    }
  ],
  "sameAs": [
    "https://www.backbonix.com"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": SITE_PHONE,
      "contactType": "sales",
      "email": SITE_EMAIL,
      "availableLanguage": ["English", "Azerbaijani", "Spanish"],
      "areaServed": "US",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": SITE_PHONE,
      "contactType": "technical support",
      "email": SITE_EMAIL,
      "availableLanguage": ["English"],
      "areaServed": "US"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Infrastructure Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Security Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Network Security Assessment & Implementation",
              "description": "Comprehensive network security audit, firewall deployment, intrusion detection/prevention systems, and ongoing security monitoring."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Surveillance Systems",
              "description": "Enterprise-grade IP camera systems installation, NVR configuration, remote monitoring setup, and analytics integration."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Infrastructure Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Infrastructure Design & Deployment",
              "description": "End-to-end IT infrastructure architecture, server room design, virtualization, and cloud-hybrid solutions."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Structured Cabling",
              "description": "Cat6/Cat6A structured cabling, fiber optic installation, cable management, and TIA/EIA compliant deployments."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Wireless Networks",
              "description": "Wi-Fi 6/6E access point deployment, site surveys, heat mapping, and seamless roaming configuration."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Network Design & Configuration",
              "description": "VLAN architecture, switch stacking, SD-WAN deployment, and multi-site VPN connectivity solutions."
            }
          }
        ]
      }
    ]
  }
};

// ─── 3. Service Schema (Rich Results) ───────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BackBonix IT Services",
  "description": "Complete range of enterprise IT infrastructure and cybersecurity services",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Network Security & Cybersecurity",
        "description": "Enterprise-grade firewall configuration (Fortinet, Palo Alto, Cisco ASA), intrusion detection & prevention systems (IDS/IPS), endpoint security, and 24/7 threat monitoring for complete network protection.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "Cybersecurity Services",
        "termsOfService": `${SITE_URL}/#contact`,
        "category": "Network Security"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "IT Infrastructure Design & Management",
        "description": "Complete IT infrastructure lifecycle management — from initial architecture design and server deployment to ongoing monitoring, maintenance, and optimization. Expertise in VMware, Hyper-V, and cloud-hybrid environments.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "IT Infrastructure Services",
        "category": "IT Infrastructure"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Video Surveillance & CCTV Systems",
        "description": "High-resolution IP camera systems (Hikvision, Dahua, Axis), NVR/DVR configuration, cloud-based remote access, AI-powered video analytics, and license plate recognition (LPR) installation.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "Security Camera Installation",
        "category": "Video Surveillance"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Structured Cabling Solutions",
        "description": "TIA/EIA-568 compliant structured cabling installations including Cat5e, Cat6, Cat6A copper cabling and single/multi-mode fiber optic runs. Complete with cable management, labeling, testing, and certification.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "Structured Cabling",
        "category": "Cabling Infrastructure"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Enterprise Wireless Network Deployment",
        "description": "Wi-Fi 6/6E enterprise access point deployment (Cisco Meraki, Aruba, Ubiquiti), professional RF site surveys, heat map analysis, seamless roaming configuration, and high-density venue solutions.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "Wireless Networking",
        "category": "Wireless Networks"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Network Architecture & Configuration",
        "description": "Enterprise network design including VLAN segmentation, switch stacking & configuration (Cisco, Juniper, HP), SD-WAN deployment, site-to-site VPN, BGP/OSPF routing, and multi-location connectivity management.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Northern Virginia, Washington D.C., DMV Area",
        "serviceType": "Network Engineering",
        "category": "Network Design"
      }
    }
  ]
};

// ─── 4. FAQPage Schema (Rich FAQ Results in Google) ─────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What IT infrastructure services does BackBonix provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BackBonix provides comprehensive IT infrastructure services including network security & cybersecurity, structured cabling (Cat6/Cat6A/Fiber), video surveillance systems, enterprise wireless network deployment, IT infrastructure design & management, and network architecture & configuration. We serve businesses of all sizes across Northern Virginia, Washington D.C., and the DMV area."
      }
    },
    {
      "@type": "Question",
      "name": "Where is BackBonix located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BackBonix is headquartered in Fairfax, Virginia (VA 20171). We serve the entire Northern Virginia region, Washington D.C., Maryland, and the surrounding DMV metropolitan area within a 50-mile radius."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact BackBonix for a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact BackBonix by calling +1 (571) 315-9611 during business hours (Mon-Fri 9AM-6PM, Sat 9AM-2PM), emailing backbonix@gmail.com, or filling out the contact form on our website at backbonix.com. We offer free initial consultations for all new clients."
      }
    },
    {
      "@type": "Question",
      "name": "What brands and vendors does BackBonix work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BackBonix is an authorized partner and certified installer for leading IT vendors including Cisco, Fortinet, Palo Alto Networks, Hikvision, Dahua, Axis Communications, Cisco Meraki, Aruba Networks, Ubiquiti, VMware, and Microsoft. We select the best technology for each client's specific needs and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Does BackBonix provide 24/7 IT support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, BackBonix offers managed IT support with 24/7 network monitoring, emergency response services, and proactive maintenance. Our technical support team is available during business hours for standard requests, with after-hours emergency support available for critical issues under our managed services agreements."
      }
    }
  ]
};

// ─── 5. BreadcrumbList Schema ───────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    }
  ]
};

// ─── 6. WebPage Schema ──────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  "url": SITE_URL,
  "name": "BackBonix | Enterprise IT Infrastructure & Cybersecurity Solutions",
  "description": "Enterprise IT infrastructure, cybersecurity, structured cabling & video surveillance solutions. Serving Northern Virginia, Washington D.C. & surrounding areas.",
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "about": { "@id": `${SITE_URL}/#organization` },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": SITE_IMAGE
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "inLanguage": "en-US",
  "breadcrumb": { "@id": `${SITE_URL}/#breadcrumb` },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"]
  }
};

// ─── Google Analytics ───────────────────────────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ─── Page Component ─────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Structured Data — Server-side rendered for maximum SEO */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Google Analytics */}
      {GA_ID && GA_ID !== 'GA_MEASUREMENT_ID' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Client-side interactive content */}
      <HomeClient />
    </>
  );
}