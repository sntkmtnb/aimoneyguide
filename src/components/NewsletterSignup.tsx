'use client';

import { useState } from 'react';

interface Props {
  variant?: 'inline' | 'banner' | 'sidebar';
  title?: string;
  description?: string;
}

export default function NewsletterSignup({
  variant = 'inline',
  title = 'Get the Free AI Side Hustle Starter Kit',
  description = 'Join 10,000+ AI side hustlers. Get our best guides, tool recommendations, and income strategies delivered weekly.',
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Connect to email service (ConvertKit, Beehiiv, etc.)
    // For now, simulate success
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
  };

  if (variant === 'banner') {
    return (
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-blue-100 mb-8 text-lg">{description}</p>
          {status === 'success' ? (
            <div className="bg-white/20 rounded-lg p-6">
              <p className="text-xl font-semibold">🎉 You&apos;re in! Check your email for the Starter Kit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-dark transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Get Free Kit →'}
              </button>
            </form>
          )}
          <p className="text-blue-200 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {status === 'success' ? (
          <p className="text-green font-semibold">🎉 Check your email!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Get Free Guide →'}
            </button>
          </form>
        )}
      </div>
    );
  }

  // inline variant
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {status === 'success' ? (
          <p className="text-green font-semibold text-lg">🎉 You&apos;re in! Check your email for the Starter Kit.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Get Free Kit →'}
            </button>
          </form>
        )}
        <p className="text-gray-400 text-sm mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
