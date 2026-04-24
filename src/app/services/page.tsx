import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore AlisCore services for custom software, workflow automation, web applications, and modernization.',
  path: '/services',
  keywords: ['custom software development services', 'workflow automation services', 'web application development'],
});

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Services | AlisCore',
  description:
    'Explore AlisCore services for custom software, workflow automation, web applications, and modernization.',
  url: `${siteConfig.url}/services`,
};

export default async function ServicesPage() {
  const contentProvider = getContentProvider();
  const servicePages = await contentProvider.getServices();

  return (
    <PageShell>
      <JsonLd data={servicesSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
            Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950">
            IT infrastructure services built for secure and reliable operations
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {siteConfig.name} supports SMB teams with network setup, system administration,
            helpdesk operations, and cybersecurity improvements that reduce downtime.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {servicePages.map((service) => (
              <article key={service.slug} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-zinc-950">{service.title}</h2>
                <p className="mt-4 leading-7 text-zinc-600">{service.summary}</p>
                <div className="mt-6 space-y-3">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="rounded-2xl bg-zinc-100 px-4 py-3 text-zinc-600">
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700"
                >
                  Explore service
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
