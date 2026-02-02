import { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Free AI Side Hustle Starter Kit — Newsletter',
  description:
    'Join 10,000+ AI side hustlers. Get our free starter kit plus weekly strategies, tool recommendations, and income opportunities.',
};

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Get the Free AI Side Hustle
          <br />
          <span className="text-primary">Starter Kit</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Everything you need to start making money with AI tools.
          Trusted by 10,000+ side hustlers.
        </p>
      </div>

      {/* What you get */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold mb-6 text-center">What&apos;s Inside the Starter Kit:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '📋', text: 'AI Side Hustle Roadmap (PDF)' },
            { icon: '💬', text: '50 Money-Making ChatGPT Prompts' },
            { icon: '🛠️', text: 'AI Tool Stack Cheat Sheet' },
            { icon: '📧', text: '7-Day Email Course: Your First AI Dollar' },
            { icon: '📊', text: 'Weekly AI Money Digest Newsletter' },
            { icon: '🎯', text: 'Exclusive Tools & Deals' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 bg-white rounded-lg p-4">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Signup form */}
      <NewsletterSignup
        variant="inline"
        title=""
        description="Enter your email below. It's free, and you can unsubscribe anytime."
      />

      {/* Social proof */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm mb-6">Trusted by readers from:</p>
        <div className="flex items-center justify-center gap-8 text-gray-400 text-sm font-medium">
          <span>Forbes</span>
          <span>•</span>
          <span>Entrepreneur</span>
          <span>•</span>
          <span>Business Insider</span>
          <span>•</span>
          <span>TechCrunch</span>
        </div>
      </div>

      {/* Testimonials placeholder */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            quote: 'The AI tool recommendations alone saved me hours of research. Started earning within my first week.',
            name: 'Sarah M.',
            role: 'Freelance Writer',
          },
          {
            quote: 'Finally, someone who gives practical advice instead of hype. This newsletter is my weekly must-read.',
            name: 'James K.',
            role: 'Side Hustler',
          },
        ].map((testimonial) => (
          <div key={testimonial.name} className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
