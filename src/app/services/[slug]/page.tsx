import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const contentProvider = getContentProvider();
  const servicePages = await contentProvider.getServices();

  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const service = await contentProvider.getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: [service.title, 'custom software services', 'workflow automation'],
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const service = await contentProvider.getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.seoDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: service.title,
    areaServed: 'United States',
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={serviceSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
            Service Detail
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.hero}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div className="space-y-8">
            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">The business problem</h2>
              <p className="mt-4 leading-8 text-slate-600">{service.problem}</p>
            </div>

            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">How AlisCore approaches it</h2>
              <p className="mt-4 leading-8 text-slate-600">{service.solution}</p>
            </div>

            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">Typical deliverables</h2>
              <div className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">Best fit for</h2>
              <div className="mt-5 space-y-3">
                {service.idealFor.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">Expected outcomes</h2>
              <div className="mt-5 space-y-3">
                {service.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-zinc-50 to-emerald-50/50 p-8 ring-1 ring-emerald-900/10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
                What happens next
              </div>
              <div className="mt-5 space-y-3">
                {[
                  'We review your current systems, constraints, and business goals.',
                  'We identify the fastest path to an effective scope.',
                  'You get a clearer direction for delivery, timeline, and technical approach.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 px-4 py-3 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-modern mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
