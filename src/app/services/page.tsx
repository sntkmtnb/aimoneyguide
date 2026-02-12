import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Agent Development Services',
  description:
    'Custom AI agents that automate your business. Chatbots, workflow automation, and intelligent assistants — built by AI, for your business.',
};

const services = [
  {
    title: 'AI Chatbot Setup',
    price: '$3,000',
    timeline: '1 week',
    description:
      'A custom AI chatbot for your website or platform. Trained on your data, speaks your brand voice, handles customer inquiries 24/7.',
    features: [
      'Custom trained on your business data',
      'Multi-platform (website, Slack, Discord)',
      'Natural conversation flow',
      'Analytics dashboard',
      'Handoff to human when needed',
    ],
  },
  {
    title: 'Business Automation Agent',
    price: '$5,000',
    timeline: '2 weeks',
    description:
      'An AI agent that automates repetitive workflows. Email processing, data entry, report generation, social media — whatever eats your time.',
    features: [
      'Custom workflow automation',
      'API integrations (CRM, email, databases)',
      'Scheduled tasks & monitoring',
      'Error handling & notifications',
      'Documentation & training',
    ],
    popular: true,
  },
  {
    title: 'Custom AI Assistant',
    price: '$8,000',
    timeline: '3 weeks',
    description:
      'A full-featured AI assistant tailored to your business. Research, writing, analysis, customer management — your digital employee.',
    features: [
      'Everything in Chatbot + Automation',
      'Multi-tool integration',
      'Long-term memory & learning',
      'Custom personality & brand voice',
      'Priority support & iteration',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
            AI Agent Development
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            AI Agents That Actually
            <br />
            <span className="text-primary">Work For You</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We build custom AI agents that automate your business operations.
            Not chatbots that say "I don't understand" — real agents that get things done.
          </p>
          <a
            href="mailto:hello@ai-money-guide.com?subject=AI%20Agent%20Inquiry"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Get a Free Consultation →
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-navy">24/7</p>
              <p className="text-gray-500 text-sm">Always Running</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">10x</p>
              <p className="text-gray-500 text-sm">Faster Than Manual</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">$0</p>
              <p className="text-gray-500 text-sm">Per Hour Salary</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">∞</p>
              <p className="text-gray-500 text-sm">Scalability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Pick what fits your business. Every agent is custom-built, not a template.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-8 flex flex-col ${
                  s.popular
                    ? 'border-primary shadow-lg shadow-primary/10 relative'
                    : 'border-gray-200'
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{s.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold">{s.price}</span>
                  <span className="text-gray-400 text-sm ml-1">starting</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  Delivery: {s.timeline}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green mt-0.5">✓</span>
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@ai-money-guide.com?subject=AI%20Agent%20Inquiry"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    s.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-navy hover:bg-gray-200'
                  }`}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ongoing Support</h2>
          <p className="text-gray-500 mb-6">
            After launch, keep your agent running at peak performance.
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 inline-block">
            <p className="text-4xl font-extrabold mb-2">
              $1,000<span className="text-lg font-normal text-gray-400">/month</span>
            </p>
            <ul className="text-left text-sm text-gray-600 space-y-2 mt-4">
              <li>✓ Performance monitoring & optimization</li>
              <li>✓ Bug fixes & updates</li>
              <li>✓ New feature requests (2/month)</li>
              <li>✓ Priority Slack/Discord support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Tell us what you need automated. We\'ll figure out the best approach together. No commitment.',
              },
              {
                step: '02',
                title: 'Custom Build',
                desc: 'We build your AI agent from scratch. You get daily updates and can test throughout.',
              },
              {
                step: '03',
                title: 'Launch & Iterate',
                desc: 'Your agent goes live. We monitor performance and make adjustments until it\'s perfect.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-4xl font-extrabold text-primary/20">{item.step}</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What makes your agents different from ChatGPT?',
                a: 'ChatGPT is a general chatbot. Our agents are purpose-built for your specific business workflow. They connect to your tools, remember context, and take action — not just talk.',
              },
              {
                q: 'How long until I see ROI?',
                a: 'Most clients see ROI within the first month. If your agent replaces even 10 hours/week of manual work at $50/hr, that\'s $2,000/month saved — and the agent never sleeps.',
              },
              {
                q: 'What if I\'m not satisfied?',
                a: 'We iterate until you\'re happy. If the agent doesn\'t deliver value within 30 days, we\'ll refund you. No questions asked.',
              },
              {
                q: 'Do I need technical knowledge?',
                a: 'Zero. We handle everything — setup, integration, training. You just tell us what you want automated.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Automate?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free 15-minute call. We'll map out exactly how an AI agent
            can save you time and money.
          </p>
          <a
            href="mailto:hello@ai-money-guide.com?subject=AI%20Agent%20Consultation"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Book Free Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
