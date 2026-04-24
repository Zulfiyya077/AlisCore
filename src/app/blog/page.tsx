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
    'Read practical insights from AlisCore on network administration, IT support operations, cybersecurity, and infrastructure reliability.',
  path: '/blog',
  keywords: ['software strategy blog', 'workflow automation blog', 'legacy modernization insights'],
});

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'AlisCore Blog',
  description:
    'Insights on network administration, helpdesk operations, cybersecurity, and business continuity.',
  url: `${siteConfig.url}/blog`,
};

export default async function BlogPage() {
  const contentProvider = getContentProvider();
  const blogPosts = await contentProvider.getBlogPosts();

  return (
    <PageShell>
      <JsonLd data={blogSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
            Blog
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950 dark:text-white">
            Practical insights for network administration and IT operations
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            These articles answer common operational questions around network stability, support process maturity,
            security baseline controls, and business continuity readiness.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="premium-panel rounded-3xl p-8">
                <div className="mb-4 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 font-semibold text-zinc-700 ring-1 ring-zinc-300/60 dark:bg-zinc-900/70 dark:text-zinc-300 dark:ring-zinc-700/60">
                    {post.category}
                  </span>
                  <span>{post.publishedAt}</span>
                </div>
                <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">{post.title}</h2>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {post.targetKeyword}
                  </span>
                  {post.supportingKeywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
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
