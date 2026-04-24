import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { JsonLd } from '@/components/common/JsonLd';
import { PageShell } from '@/components/common/PageShell';
import { getContentProvider } from '@/lib/content-provider';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const contentProvider = getContentProvider();
  const blogPosts = await contentProvider.getBlogPosts();

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const post = await contentProvider.getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: [post.targetKeyword, ...post.supportingKeywords, post.category, 'network administration services'],
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const contentProvider = getContentProvider();
  const post = await contentProvider.getBlogPostBySlug(slug);
  const services = await contentProvider.getServices();

  if (!post) {
    notFound();
  }

  const relatedServices = services.filter((service) => post.relatedServiceSlugs.includes(service.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
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
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={articleSchema} />

      <section className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <div className="mb-4 flex items-center gap-3 text-sm text-zinc-500">
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-semibold text-zinc-700 ring-1 ring-zinc-300/60">
              {post.category}
            </span>
            <span>{post.publishedAt}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-950">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">{post.summary}</p>
        </div>
      </section>

      <article className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-panel rounded-3xl p-8 sm:p-10">
            <p className="border-l-4 border-zinc-500 pl-5 text-lg leading-8 text-zinc-600">
              {post.excerpt}
            </p>
            <div className="article-content mt-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold text-zinc-950">Related services</h3>
              <p className="mt-2 text-sm text-zinc-600">
                If this topic matches your current priority, start with one of these service tracks:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-zinc-50 to-zinc-100 p-6 ring-1 ring-zinc-300/60">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Next step
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                Want to apply this thinking to your business?
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">
                If you are evaluating network upgrades, support process maturity, cybersecurity controls,
                or disaster recovery priorities, AlisCore can help shape the right next move.
              </p>
              <Link
                href="/contact"
                className="btn-modern mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
              >
                Start a strategy conversation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
