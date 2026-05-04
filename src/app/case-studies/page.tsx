import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Representative case studies from AlisCore across healthcare, e-commerce, and startup product delivery.',
  path: '/case-studies',
  keywords: ['software case studies', 'healthcare software case study', 'startup MVP case study'],
});

const caseStudiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies | AlisCore',
  description:
    'Representative case studies from AlisCore across healthcare, e-commerce, and startup product delivery.',
  url: `${siteConfig.url}/case-studies`,
};

export default async function CaseStudiesPage() {
  const contentProvider = getContentProvider();
  const caseStudies = await contentProvider.getCaseStudies();

  return (
    <PageShell>
      <JsonLd data={caseStudiesSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
            Case Studies
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Representative engagements that show how AlisCore solves business problems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These case studies illustrate the type of operational and product challenges
            AlisCore is positioned to solve for growing businesses.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Cover image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-900 backdrop-blur-sm ring-1 ring-emerald-900/15">
                    {caseStudy.industry}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8">
                  <h2 className="text-2xl font-semibold">{caseStudy.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600">{caseStudy.summary}</p>
                  <div className="mt-6 text-sm text-slate-500">Timeline: {caseStudy.timeline}</div>
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900"
                  >
                    Read case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </PageShell>
  );
}
