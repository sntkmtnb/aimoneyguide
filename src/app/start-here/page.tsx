import { Metadata } from 'next';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Start Here — Your AI Side Hustle Journey Begins',
  description:
    'New to AI Money Guide? Start here. We\'ll show you exactly how to start making money with AI tools, step by step.',
};

export default function StartHerePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Welcome to <span className="text-primary">AI Money Guide</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        You&apos;re here because you want to make real money with AI tools. Good — you&apos;re in the right place.
        This page is your roadmap. Follow the steps below, and you&apos;ll go from curious beginner to
        earning AI side income.
      </p>

      {/* Step 1 */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            1
          </div>
          <h2 className="text-2xl font-bold">Understand the Landscape</h2>
        </div>
        <div className="ml-16">
          <p className="text-gray-600 mb-4">
            AI isn&apos;t just a buzzword — it&apos;s creating real income opportunities for regular people.
            Start by understanding what&apos;s possible:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <Link href="/blog/how-to-make-money-with-ai-2026" className="text-primary hover:underline font-medium">
                How to Make Money with AI in 2026: The Ultimate Guide
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <Link href="/blog/ai-side-hustles-that-work" className="text-primary hover:underline font-medium">
                AI Side Hustles That Actually Work: 15 Proven Ideas
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <Link href="/blog/how-much-earn-ai-side-hustle" className="text-primary hover:underline font-medium">
                How Much Can You Actually Earn? (Real Data)
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            2
          </div>
          <h2 className="text-2xl font-bold">Pick Your Path</h2>
        </div>
        <div className="ml-16">
          <p className="text-gray-600 mb-6">
            There&apos;s no one-size-fits-all. Choose the path that matches your skills, time, and goals:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '✍️',
                title: 'AI Content Business',
                desc: 'Write content for clients using AI tools',
                link: '/category/ai-side-hustles',
                time: '5-10 hrs/week',
                income: '$2K-$10K/mo',
              },
              {
                icon: '🎨',
                title: 'AI Design & Art',
                desc: 'Create and sell designs, art, templates',
                link: '/category/passive-income',
                time: '5-15 hrs/week',
                income: '$500-$5K/mo',
              },
              {
                icon: '🤖',
                title: 'AI Automation Services',
                desc: 'Build chatbots and workflows for businesses',
                link: '/category/tutorials',
                time: '10-20 hrs/week',
                income: '$3K-$15K/mo',
              },
              {
                icon: '📦',
                title: 'AI Digital Products',
                desc: 'Create prompts, templates, courses',
                link: '/category/passive-income',
                time: '10-20 hrs setup',
                income: '$500-$5K/mo passive',
              },
            ].map((path) => (
              <Link
                key={path.title}
                href={path.link}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-2xl mb-2 block">{path.icon}</span>
                <h3 className="font-bold mb-1">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{path.desc}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>⏱ {path.time}</span>
                  <span>💰 {path.income}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            3
          </div>
          <h2 className="text-2xl font-bold">Get the Right Tools</h2>
        </div>
        <div className="ml-16">
          <p className="text-gray-600 mb-4">
            You don&apos;t need to spend hundreds on tools. Here&apos;s our recommended starter stack:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <strong>ChatGPT Plus</strong>
                <span className="text-gray-500 text-sm ml-2">— Your AI brain</span>
              </div>
              <span className="text-sm font-medium text-gray-500">$20/mo</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <strong>Jasper / Writesonic</strong>
                <span className="text-gray-500 text-sm ml-2">— AI writing at scale</span>
              </div>
              <span className="text-sm font-medium text-gray-500">$16-49/mo</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <strong>Canva Pro</strong>
                <span className="text-gray-500 text-sm ml-2">— AI design & graphics</span>
              </div>
              <span className="text-sm font-medium text-gray-500">$13/mo</span>
            </div>
            <Link
              href="/resources"
              className="inline-block text-primary font-semibold hover:underline mt-2"
            >
              See our full recommended tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            4
          </div>
          <h2 className="text-2xl font-bold">Take Action & Stay Updated</h2>
        </div>
        <div className="ml-16">
          <p className="text-gray-600 mb-4">
            The biggest difference between people who make money with AI and those who don&apos;t?
            Taking action. Start with one guide, implement it this week, and build from there.
          </p>
          <p className="text-gray-600 mb-6">
            Join our newsletter to get weekly strategies, new tool discoveries, and income opportunities
            delivered to your inbox:
          </p>
        </div>
      </section>

      <NewsletterSignup
        variant="inline"
        title="Join the AI Money Guide Community"
        description="Get our free AI Side Hustle Starter Kit + weekly strategies to grow your AI income. No spam, ever."
      />
    </div>
  );
}
