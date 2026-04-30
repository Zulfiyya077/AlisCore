import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

interface IndustryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const contentProvider = getContentProvider();
  const industryPages = await contentProvider.getIndustries();

  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const industry = await contentProvider.getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return createPageMetadata({
    title: industry.seoTitle,
    description: industry.seoDescription,
    path: `/industries/${industry.slug}`,
    keywords: [industry.title, 'industry software solutions', 'workflow automation'],
  });
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const industry = await contentProvider.getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const industrySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${industry.title} | AlisCore`,
    description: industry.seoDescription,
    url: `${siteConfig.url}/industries/${industry.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={industrySchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/industries" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700">
            <ArrowLeft className="h-4 w-4" />
            Back to industries
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
            Industry Focus
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950">
            {industry.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">{industry.hero}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div className="space-y-8">
            <div className="rounded-3xl bg-gradient-to-r from-zinc-50 to-zinc-100 p-8 ring-1 ring-zinc-300/50">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Why this niche matters
              </div>
              <p className="mt-4 text-lg leading-8 text-zinc-600">{industry.summary}</p>
            </div>

            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">Common challenges</h2>
              <div className="mt-5 space-y-3">
                {industry.challenges.map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-3 text-zinc-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">AlisCore approach</h2>
              <div className="mt-5 space-y-3">
                {industry.solutions.map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-3 text-zinc-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="premium-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">Why AlisCore is a fit</h2>
              <div className="mt-5 space-y-3">
                {industry.whyAlisCore.map((item) => (
                  <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-3 text-zinc-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-zinc-950 to-zinc-900 p-8 text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
                Strategic fit
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Looking for a partner that understands both execution and positioning?
              </h2>
              <p className="mt-4 leading-7 text-zinc-300">
                AlisCore approaches industry pages as more than SEO assets. They are also
                sales tools that align your offer with specific operational pain points.
              </p>
              <Link
                href="/contact"
                className="btn-modern mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
              >
                Talk about your industry use case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
