import { Metadata } from 'next';
import PostCard from '@/components/PostCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — AI Side Hustle Guides, Reviews & Tutorials',
  description:
    'Browse all our guides on making money with AI tools. Side hustle strategies, tool reviews, tutorials, and real income reports.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl">
        Practical guides, honest tool reviews, and proven strategies to make money with AI.
      </p>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">📝</p>
          <h2 className="text-2xl font-bold mb-2">Articles coming soon!</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re crafting comprehensive guides to help you earn with AI.
          </p>
          <NewsletterSignup variant="inline" />
        </div>
      )}

      {posts.length > 0 && (
        <div className="mt-16">
          <NewsletterSignup variant="inline" />
        </div>
      )}
    </div>
  );
}
