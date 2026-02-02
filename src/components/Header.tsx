'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">AI</span>
            <span className="text-navy">Money Guide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/start-here" className="text-gray-600 hover:text-primary transition-colors">
              Start Here
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/newsletter"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get Free Guide →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 space-y-3">
            <Link href="/start-here" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              Start Here
            </Link>
            <Link href="/blog" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/resources" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link
              href="/newsletter"
              className="block bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary-dark"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Guide →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
