import { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Recommended AI Tools & Resources',
  description:
    'Our curated list of the best AI tools for making money. Every tool personally tested and reviewed.',
};

interface Tool {
  name: string;
  description: string;
  price: string;
  category: string;
  rating: string;
  url: string;
}

const tools: Record<string, Tool[]> = {
  '✍️ AI Writing Tools': [
    { name: 'Jasper AI', description: 'Best all-round AI writing tool for long-form content and marketing copy', price: 'From $49/mo', category: 'writing', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Writesonic', description: 'Best budget AI writer with strong SEO features', price: 'From $16/mo', category: 'writing', rating: '⭐⭐⭐⭐½', url: '#' },
    { name: 'Copy.ai', description: 'Excellent for short-form copywriting and sales copy', price: 'From $36/mo', category: 'writing', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'ChatGPT Plus', description: 'Essential AI assistant for everything', price: '$20/mo', category: 'writing', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Claude Pro', description: 'Best for nuanced, long-form writing tasks', price: '$20/mo', category: 'writing', rating: '⭐⭐⭐⭐⭐', url: '#' },
  ],
  '🔍 AI SEO Tools': [
    { name: 'Surfer SEO', description: 'AI-powered content optimization for ranking on Google', price: 'From $69/mo', category: 'seo', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Semrush', description: 'All-in-one SEO toolkit with AI features', price: 'From $130/mo', category: 'seo', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Clearscope', description: 'AI content optimization for enterprise teams', price: 'From $170/mo', category: 'seo', rating: '⭐⭐⭐⭐', url: '#' },
  ],
  '🎨 AI Design Tools': [
    { name: 'Midjourney', description: 'Best AI image generation for commercial quality art', price: 'From $10/mo', category: 'design', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Canva Pro', description: 'All-in-one design with powerful AI features', price: '$13/mo', category: 'design', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Leonardo AI', description: 'AI image generation with fine-tuning control', price: 'Free tier available', category: 'design', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'Adobe Firefly', description: 'AI generation integrated with Adobe Creative Suite', price: 'Included with CC', category: 'design', rating: '⭐⭐⭐⭐', url: '#' },
  ],
  '🎬 AI Video & Audio Tools': [
    { name: 'Runway ML', description: 'AI video editing and generation', price: 'From $12/mo', category: 'video', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'Synthesia', description: 'Create AI-generated videos with virtual avatars', price: 'From $22/mo', category: 'video', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'ElevenLabs', description: 'Best AI voice generation and cloning', price: 'From $5/mo', category: 'audio', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Murf AI', description: 'Professional AI voiceover for content creators', price: 'From $19/mo', category: 'audio', rating: '⭐⭐⭐⭐', url: '#' },
  ],
  '⚡ AI Automation Tools': [
    { name: 'Make.com', description: 'Visual automation builder with AI integrations', price: 'Free tier available', category: 'automation', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Zapier', description: 'Connect apps and automate workflows with AI', price: 'Free tier available', category: 'automation', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'n8n', description: 'Open-source workflow automation with AI nodes', price: 'Free (self-hosted)', category: 'automation', rating: '⭐⭐⭐⭐', url: '#' },
  ],
  '💻 AI App Building': [
    { name: 'Lovable', description: 'Build full web apps from text descriptions', price: 'Free tier available', category: 'dev', rating: '⭐⭐⭐⭐', url: '#' },
    { name: 'Cursor', description: 'AI-powered code editor for developers', price: 'From $20/mo', category: 'dev', rating: '⭐⭐⭐⭐⭐', url: '#' },
    { name: 'Replit', description: 'AI coding assistant with instant deployment', price: 'Free tier available', category: 'dev', rating: '⭐⭐⭐⭐', url: '#' },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4">Recommended Tools & Resources</h1>
      <p className="text-xl text-gray-600 mb-4">
        Every tool on this page has been personally tested. We only recommend what we actually use and believe in.
      </p>
      <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mb-12 text-sm text-gray-600">
        <strong>Affiliate disclosure:</strong> Some links on this page are affiliate links. We earn a commission
        if you make a purchase, at no extra cost to you. This supports our free content.
      </div>

      {Object.entries(tools).map(([category, categoryTools]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="space-y-4">
            {categoryTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg">{tool.name}</h3>
                      <span className="text-sm">{tool.rating}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{tool.description}</p>
                    <span className="text-sm font-medium text-gray-500">{tool.price}</span>
                  </div>
                  <a
                    href={tool.url}
                    className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors text-center whitespace-nowrap"
                    rel="noopener noreferrer sponsored"
                  >
                    Try {tool.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <NewsletterSignup
        variant="inline"
        title="Get Our Free AI Tool Stack Guide"
        description="Download our complete guide to building the perfect AI tool stack for your side hustle. Includes pricing comparisons and setup tutorials."
      />
    </div>
  );
}
