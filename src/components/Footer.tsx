import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-primary">AI</span> Money Guide
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Your practical guide to making money with AI tools. No hype, just results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/start-here" className="hover:text-white transition-colors">Start Here</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/ai-side-hustles" className="hover:text-white transition-colors">Side Hustle Guides</Link></li>
              <li><Link href="/category/ai-tools" className="hover:text-white transition-colors">AI Tool Reviews</Link></li>
              <li><Link href="/category/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="/category/passive-income" className="hover:text-white transition-colors">Passive Income</Link></li>
              <li><Link href="/category/income-reports" className="hover:text-white transition-colors">Income Reports</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Affiliate Disclaimer</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI Money Guide. All rights reserved.</p>
          <p className="mt-2">
            This site contains affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
