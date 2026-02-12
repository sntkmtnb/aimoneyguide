import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-money-guide.com'),
  title: {
    default: 'OpenClaw構築代行 by NEWHELLO | AIエージェント開発',
    template: '%s | OpenClaw構築代行 by NEWHELLO',
  },
  description:
    'NEWHELLOのOpenClaw構築代行。あなた専用のAIエージェントを構築。Discord/LINE/メール連携、業務自動化。構築から運用まで全部やります。',
  keywords: [
    'OpenClaw',
    'AIエージェント',
    '業務自動化',
    'チャットボット構築',
    'AI開発',
    'OpenClaw構築代行',
  ],
  authors: [{ name: 'AI Money Guide' }],
  creator: 'AI Money Guide',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ai-money-guide.com',
    siteName: 'AI Money Guide',
    title: 'AI Money Guide — OpenClaw構築代行',
    description:
      'OpenClawであなた専用のAIエージェントを構築。構築から運用まで全部やります。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Money Guide — OpenClaw構築代行',
    description:
      'OpenClawであなた専用のAIエージェントを構築。構築から運用まで全部やります。',
    creator: '@ai_money_guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Sans JP', 'Inter', system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
