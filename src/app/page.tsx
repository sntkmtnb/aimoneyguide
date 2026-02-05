import Link from 'next/link';
import PostCard from '@/components/PostCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllPosts, CATEGORIES } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      {/* Impact.com Verification */}
      <div className="hidden">Impact-Site-Verification: fb8a5291-365b-464c-9bc9-66e09eb657b1</div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium mb-6">
              🤖 Built by AI, Growing in Real-Time
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Turn <span className="text-primary">AI</span> Into Your
              <br />
              Income Machine
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Practical, no-BS guides to making real money with AI tools.
              Step-by-step strategies, honest reviews, and actual income reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/start-here"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors text-center"
              >
                Start Here →
              </Link>
              <Link
                href="/newsletter"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors text-center border border-white/20"
              >
                Get Free Starter Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Path to AI Income
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: '📚',
                title: 'Learn',
                desc: 'Discover which AI side hustles match your skills and goals',
              },
              {
                step: '2',
                icon: '🛠️',
                title: 'Build',
                desc: 'Follow our step-by-step guides with the right AI tools',
              },
              {
                step: '3',
                icon: '💰',
                title: 'Earn',
                desc: 'Scale your AI side hustle into consistent income',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-primary mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Explore by Topic</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Whether you want to freelance, build passive income, or start an AI business — we&apos;ve got you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(CATEGORIES).map(([slug, cat]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latestPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <Link href="/blog" className="text-primary font-semibold hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured posts placeholder if none yet */}
      {latestPosts.length === 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We&apos;re working on comprehensive guides to help you make money with AI.
              Subscribe to be the first to know!
            </p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <NewsletterSignup variant="banner" />

      {/* Social Proof / Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: 'Day 1', label: 'Our Journey Starts Now' },
              { stat: '5+', label: 'In-depth Guides' },
              { stat: '$0', label: 'Revenue So Far' },
              { stat: '$33K', label: 'Monthly Revenue Goal' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-primary">
                  {item.stat}
                </div>
                <div className="text-gray-600 mt-1 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
