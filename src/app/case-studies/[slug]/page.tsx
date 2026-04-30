import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const contentProvider = getContentProvider();
  const caseStudies = await contentProvider.getCaseStudies();

  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const caseStudy = await contentProvider.getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return createPageMetadata({
    title: caseStudy.seoTitle,
    description: caseStudy.seoDescription,
    path: `/case-studies/${caseStudy.slug}`,
    type: 'article',
    keywords: [caseStudy.title, caseStudy.industry, 'case study'],
  });
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const caseStudy = await contentProvider.getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.seoDescription,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    about: caseStudy.industry,
    mainEntityOfPage: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={caseStudySchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
            {caseStudy.industry}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {caseStudy.summary}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Challenge</h2>
              <p className="mt-4 leading-8 text-slate-600">{caseStudy.challenge}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Solution approach</h2>
              <p className="mt-4 leading-8 text-slate-600">{caseStudy.solution}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Results</h2>
              <div className="mt-5 space-y-3">
                {caseStudy.results.map((result) => (
                  <div key={result} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-600">
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
                Engagement Snapshot
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-sm text-slate-500">Services involved</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {caseStudy.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Timeline</div>
                  <div className="mt-1 font-semibold text-slate-950">{caseStudy.timeline}</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-modern mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
              >
                Discuss a similar project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
