import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Industries',
  description:
    'Explore how AlisCore approaches healthcare, e-commerce, and startup product delivery with industry-specific software and automation services.',
  path: '/industries',
  keywords: ['industry software solutions', 'healthcare software development', 'ecommerce automation services'],
});

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industries | AlisCore',
  description:
    'Industry-specific technology solutions across healthcare, e-commerce, and startup MVP delivery.',
  url: `${siteConfig.url}/industries`,
};

export default async function IndustriesPage() {
  const contentProvider = getContentProvider();
  const industryPages = await contentProvider.getIndustries();

  return (
    <PageShell>
      <JsonLd data={industriesSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
            Industries
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950">
            Network-first industry solutions built around real operational bottlenecks
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            We focus on industries where network reliability, access control, and secure IT operations
            directly affect uptime, revenue, and service quality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {industryPages.map((industry) => (
              <article key={industry.slug} className="premium-panel rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-zinc-950">{industry.title}</h2>
                <p className="mt-4 leading-7 text-zinc-600">{industry.summary}</p>
                <div className="mt-6 space-y-3">
                  {industry.challenges.slice(0, 2).map((item) => (
                    <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-3 text-zinc-600">
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700"
                >
                  Explore industry page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
