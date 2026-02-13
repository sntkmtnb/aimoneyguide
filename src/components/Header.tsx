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
          <Link href="/services" className="font-bold text-lg">
            <span className="text-primary">OpenClaw構築代行</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/services#pricing" className="text-gray-600 hover:text-primary transition-colors">
              料金プラン
            </Link>
            <Link href="/services#faq" className="text-gray-600 hover:text-primary transition-colors">
              よくある質問
            </Link>
            <Link href="/blog/openclaw-guide" className="text-gray-600 hover:text-primary transition-colors">
              ガイド
            </Link>
            <Link
              href="/services#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              無料相談する →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
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
            <Link href="/services#pricing" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              料金プラン
            </Link>
            <Link href="/services#faq" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              よくある質問
            </Link>
            <Link href="/blog/openclaw-guide" className="block text-gray-600 hover:text-primary" onClick={() => setMobileOpen(false)}>
              ガイド
            </Link>
            <Link
              href="/services#contact"
              className="block bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary-dark"
              onClick={() => setMobileOpen(false)}
            >
              無料相談する →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
