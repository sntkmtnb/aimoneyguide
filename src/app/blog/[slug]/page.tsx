import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, CATEGORIES } from '@/lib/posts';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import NewsletterSignup from '@/components/NewsletterSignup';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const category = CATEGORIES[post.category];
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Article structured data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Money Guide',
      url: 'https://ai-money-guide.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category?.name || post.category, href: `/category/${post.category}` },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header className="mb-10">
          <Link
            href={`/category/${post.category}`}
            className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 hover:bg-primary/20 transition-colors"
          >
            {category?.icon} {category?.name || post.category}
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Affiliate Disclosure */}
        <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mb-8 text-sm text-gray-600">
          <strong>Disclosure:</strong> This article may contain affiliate links. If you purchase
          through these links, we may earn a commission at no extra cost to you. We only recommend
          tools we&apos;ve personally tested.
        </div>

        {/* Table of Contents */}
        <TableOfContents content={post.content} />

        {/* Article Content */}
        <div className="prose max-w-none">
          {/* In production, this would render MDX. For now, render markdown as paragraphs */}
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              const text = block.replace('## ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return <h2 key={i} id={id}>{text}</h2>;
            }
            if (block.startsWith('### ')) {
              const text = block.replace('### ', '');
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return <h3 key={i} id={id}>{text}</h3>;
            }
            if (block.startsWith('- ')) {
              return (
                <ul key={i}>
                  {block.split('\n').map((line, j) => (
                    <li key={j}>{line.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block}</p>;
          })}
        </div>

        {/* In-article CTA */}
        <NewsletterSignup variant="inline" />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-8 pt-8 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-500">Tags:</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag}`}
                className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
