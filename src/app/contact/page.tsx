import { Mail, Phone } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import type { ContactLeadFormLabels } from '@/components/forms/ContactLeadForm';
import { ContactLeadForm } from '@/components/forms/ContactLeadForm';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact AlisCore to discuss custom software, workflow automation, modernization, or product delivery needs.',
  path: '/contact',
  keywords: ['contact software development company', 'book strategy call', 'workflow automation consultation'],
});

const contactFormLabels: ContactLeadFormLabels = {
  name: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  message: 'Message',
  send: 'Send inquiry',
  sending: 'Sending...',
  success: 'Your inquiry has been sent successfully.',
  error: 'We could not send your inquiry right now. Please try again shortly.',
  turnstileRequired: 'Please complete the security check before submitting.',
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AlisCore',
    description:
      'Contact AlisCore to discuss custom software, workflow automation, modernization, or product delivery needs.',
    url: `${siteConfig.url}/contact`,
  };

  return (
    <PageShell>
      <JsonLd data={contactSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
            Contact
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950">
            Start with a focused conversation about your goals, bottlenecks, and timeline
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            The fastest way to start is by sharing your business context and current
            challenge. From there, AlisCore can recommend the best next step.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="premium-panel rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-zinc-950">Send an inquiry</h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Share enough context for a senior engineer to understand scope, urgency, and constraints.
            </p>
            <div className="mt-8">
              <ContactLeadForm leadSource="contact_page_form" labels={contactFormLabels} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">Direct contact</h2>
              <p className="mt-4 leading-7 text-zinc-600">
                Prefer email or phone first? Reach out directly and reference your timeline and industry.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-2xl bg-zinc-100 px-4 py-4 text-zinc-700 transition-colors hover:bg-zinc-200"
                >
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-3 rounded-2xl bg-zinc-100 px-4 py-4 text-zinc-700 transition-colors hover:bg-zinc-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-zinc-50 to-zinc-100 p-8 ring-1 ring-zinc-300/50">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">Prefer a live call?</p>
              <h3 className="mt-3 text-xl font-semibold text-zinc-950">Book a strategy call</h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Use the calendar link to pick a time that works for your team.
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern mt-6 inline-flex rounded-xl px-6 py-3 font-semibold text-white"
              >
                Open booking
              </a>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-zinc-950">What to include</h2>
              <div className="mt-6 space-y-4">
                {[
                  'A short description of the business problem',
                  'Your timeline and any launch constraints',
                  'The systems, tools, or workflows involved',
                  'Any idea of budget or delivery expectations',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-4 text-zinc-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
