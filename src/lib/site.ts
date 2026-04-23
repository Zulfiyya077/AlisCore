export const siteConfig = {
  name: 'AlisCore',
  legalName: 'AlisCore IT Solutions',
  title: 'AlisCore | Custom Software, Automation, and IT Solutions',
  description:
    'AlisCore helps growing US businesses modernize operations with custom software, workflow automation, cloud modernization, and scalable digital solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aliscore.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@aliscore.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1-571-315-9611',
  location: 'United States',
  ogImage: '/opengraph-image',
  logo: '/icon',
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL || 'https://calendly.com/aliscore/strategy-call',
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL || 'AlisCore <onboarding@resend.dev>',
  contactToEmail: process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@aliscore.com',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
} as const;
