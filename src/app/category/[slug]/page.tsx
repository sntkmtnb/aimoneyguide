import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostCard from '@/components/PostCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getPostsByCategory, CATEGORIES } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES[slug];
  if (!category) return {};

  return {
    title: `${category.name} — AI Money Guide`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES[slug];

  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: category.name },
        ]}
      />

      <div className="mb-12">
        <span className="text-4xl mb-4 block">{category.icon}</span>
        <h1 className="text-4xl font-extrabold mb-4">{category.name}</h1>
        <p className="text-gray-600 text-lg max-w-2xl">{category.description}</p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <p className="text-4xl mb-4">{category.icon}</p>
          <h2 className="text-2xl font-bold mb-2">Articles coming soon!</h2>
          <p className="text-gray-600">
            We&apos;re working on {category.name.toLowerCase()} content. Stay tuned!
          </p>
        </div>
      )}

      <div className="mt-16">
        <NewsletterSignup variant="inline" />
      </div>
    </div>
  );
}
