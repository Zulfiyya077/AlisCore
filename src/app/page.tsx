import type { Metadata } from 'next';
import Script from 'next/script';
import HomeClient from './HomeClient';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.name;
const SITE_PHONE = siteConfig.phone;
const SITE_EMAIL = siteConfig.email;
const SITE_LOGO = `${SITE_URL}${siteConfig.logo}`;
const SITE_IMAGE = `${SITE_URL}${siteConfig.ogImage}`;

export const metadata: Metadata = createPageMetadata({
  title: 'Home',
  description: siteConfig.description,
  path: '/',
  keywords: [
    'custom software development company',
    'workflow automation services',
    'small business IT solutions',
  ],
});

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: siteConfig.description,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['en-US', 'az-AZ', 'es-ES'],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: siteConfig.legalName,
  url: SITE_URL,
  logo: SITE_LOGO,
  image: [SITE_IMAGE, SITE_LOGO],
  description: siteConfig.description,
  areaServed: 'United States',
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description:
            'Custom business software built to streamline operations, automate workflows, and support growth.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
          description:
            'Modern web applications for internal operations, customer experiences, and SaaS products.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Workflow Automation',
          description:
            'Automation services that reduce manual work, remove bottlenecks, and connect business systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legacy System Modernization',
          description:
            'Modernization and cloud transition for outdated systems that limit performance and scale.',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does AlisCore help businesses with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'AlisCore helps small and mid-sized businesses build custom software, automate workflows, modernize legacy systems, and improve digital operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is AlisCore best suited for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'AlisCore is best suited for growing businesses that need a strategic technology partner to improve efficiency, launch new products, or modernize business-critical systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do projects usually start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Most engagements start with a discovery call where we review business goals, current bottlenecks, timelines, and the best technical approach.',
      },
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: SITE_IMAGE,
  },
  inLanguage: 'en-US',
  dateModified: new Date().toISOString().split('T')[0],
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <HomeClient />
    </>
  );
}