import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Blog',
  description:
    'Read practical insights from AlisCore on software strategy, workflow automation, discovery, and modernization.',
  path: '/blog',
  keywords: ['software strategy blog', 'workflow automation blog', 'legacy modernization insights'],
});

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'AlisCore Blog',
  description:
    'Insights on custom software, workflow automation, discovery, and digital modernization.',
  url: `${siteConfig.url}/blog`,
};

export default async function BlogPage() {
  const contentProvider = getContentProvider();
  const blogPosts = await contentProvider.getBlogPosts();

  return (
    <PageShell>
      <JsonLd data={blogSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900">
            Blog
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Practical insights for businesses planning software, automation, and modernization
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These articles are designed to build trust, answer common buyer questions, and
            support high-intent SEO topics around AlisCore&apos;s core services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="premium-panel rounded-3xl p-8"
              >
                <div className="mb-4 flex items-center gap-3 text-sm text-slate-500">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 font-semibold text-emerald-900 ring-1 ring-emerald-900/15">
                    {post.category}
                  </span>
                  <span>{post.publishedAt}</span>
                </div>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900"
                >
                  Read article
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
