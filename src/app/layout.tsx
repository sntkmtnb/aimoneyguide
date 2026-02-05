import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-money-guide.com'),
  title: {
    default: 'AI Money Guide — Turn AI Into Income',
    template: '%s | AI Money Guide',
  },
  description:
    'Your practical guide to making money with AI tools. No hype, just proven strategies, honest tool reviews, and real income reports.',
  keywords: [
    'AI side hustles',
    'make money with AI',
    'AI tools',
    'AI freelancing',
    'passive income AI',
    'ChatGPT money',
  ],
  authors: [{ name: 'AI Money Guide' }],
  creator: 'AI Money Guide',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-money-guide.com',
    siteName: 'AI Money Guide',
    title: 'AI Money Guide — Turn AI Into Income',
    description:
      'Your practical guide to making money with AI tools. No hype, just proven strategies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Money Guide — Turn AI Into Income',
    description:
      'Your practical guide to making money with AI tools. No hype, just proven strategies.',
    creator: '@aimoneyguide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Money Guide',
  url: 'https://ai-money-guide.com',
  logo: 'https://ai-money-guide.com/logo.png',
  sameAs: [
    'https://twitter.com/aimoneyguide',
    'https://youtube.com/@aimoneyguide',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G8YX0WD13M" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-G8YX0WD13M');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
