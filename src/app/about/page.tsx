import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn how AlisCore approaches strategy, delivery, and business-focused software execution for growing companies.',
  path: '/about',
  keywords: ['about AlisCore', 'software delivery partner', 'business-first technology partner'],
});

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About AlisCore',
    description:
      'Learn how AlisCore approaches strategy, delivery, and business-focused software execution for growing companies.',
    url: `${siteConfig.url}/about`,
  };

  const pillars = [
    {
      title: 'Business-first thinking',
      description:
        'Every engagement starts with operational goals, bottlenecks, and growth priorities instead of jumping straight into code.',
    },
    {
      title: 'Senior-led execution',
      description:
        'Discovery, scoping, and delivery are handled with a high-accountability model designed for speed and clarity.',
    },
    {
      title: 'Scalable systems',
      description:
        'AlisCore focuses on maintainable systems that support future change instead of creating expensive technical shortcuts.',
    },
  ];

  return (
    <PageShell>
      <JsonLd data={aboutSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
            About AlisCore
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950 dark:text-white">
            A network-first IT partner for companies that need uptime, security, and predictable support
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            AlisCore is positioned to help growing businesses modernize operations, launch
            software products, and replace inefficient workflows with scalable digital systems.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">{pillar.title}</h2>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">How engagements typically start</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                'Discovery call to understand goals and constraints',
                'Scope and solution direction aligned around business impact',
                'Execution plan shaped for delivery speed and long-term maintainability',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-4 text-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn-modern mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
