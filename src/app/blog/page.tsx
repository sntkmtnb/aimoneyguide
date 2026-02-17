import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ブログ｜NEWHELLO - OpenClaw構築代行',
  description: 'AI業務自動化・OpenClawに関するお役立ち記事。導入ガイド、コスト比較、活用事例など。',
};

const posts = [
  {
    slug: 'line-ai-chatbot',
    title: 'LINE公式アカウントにAI自動応答を導入する方法｜Webhook×Claude API実践ガイド',
    description: 'LINE Messaging APIとClaude APIでAI自動応答を実装。美容室・クリニック・ECの活用例付き。コード全文で解説。',
    date: '2026年2月17日',
    tags: ['LINE', 'Claude API', 'チャットボット'],
  },
  {
    slug: 'x-auto-posting',
    title: 'X(Twitter)の投稿・引用RTをAIで自動化する方法｜Python×API実践ガイド',
    description: 'X APIとAIを組み合わせて、引用RT・リプライを自動化。キュレーション型SNS運用をコード全文付きで解説。',
    date: '2026年2月17日',
    tags: ['X/Twitter', 'Python', 'SNS自動化'],
  },
  {
    slug: 'ai-auto-reply-bot',
    title: 'Claude APIで問い合わせ自動返信botを作る方法｜Discord×AI実践ガイド',
    description: 'Discord Webhookで届いた問い合わせに、Claude APIで自動返信。一次返信の自動化で対応速度を劇的に改善。コード全文付き。',
    date: '2026年2月17日',
    tags: ['Claude API', 'AI自動化', 'ハンズオン'],
  },
  {
    slug: 'contact-form-discord',
    title: '問い合わせフォーム→Discord自動通知の作り方｜Next.js×Webhook実践ガイド',
    description: 'Webサイトの問い合わせフォームからDiscordに自動通知する仕組みを実装。コード全文＋設定手順付きで、コピペで動く実践ガイド。',
    date: '2026年2月17日',
    tags: ['Discord', 'Webhook', 'ハンズオン'],
  },
  {
    slug: 'gas-gemini-automation',
    title: 'Google Workspace×AIで業務を自動化する方法｜GAS+Gemini活用ガイド',
    description: 'GAS+Gemini APIで業務自動化。メール返信、データ集計、承認フロー、議事録要約の5パターンを具体例付きで解説。',
    date: '2026年2月15日',
    tags: ['Google Workspace', 'GAS', 'Gemini', '活用ガイド'],
  },
  {
    slug: 'chatbot-cost',
    title: 'チャットボット導入費用の相場｜SaaS vs 自社開発、結局どっちが安い？',
    description: 'チャットボットの導入費用を徹底比較。SaaS型の月額費用、AI搭載型の初期費用、自社専用開発のコスト。3年間のトータルで見ると意外な結果に。',
    date: '2026年2月15日',
    tags: ['チャットボット', 'コスト比較', '中小企業'],
  },
  {
    slug: 'what-is-openclaw',
    title: 'OpenClawとは？ChatGPTとの違いをわかりやすく解説',
    description: 'ChatGPTは「聞けば答えるAI」、OpenClawは「自分で考えて動くAI」。その違いと導入メリットを中小企業向けに解説。',
    date: '2026年2月13日',
    tags: ['OpenClaw', 'ChatGPT', '入門'],
  },
  {
    slug: 'ai-cost-comparison',
    title: '人を雇う vs AIエージェント｜中小企業が知るべきコスト比較',
    description: '事務スタッフ採用とAIエージェント導入のコストを徹底比較。3年間で880万円の差。',
    date: '2026年2月13日',
    tags: ['コスト比較', 'AI導入', '中小企業'],
  },
  {
    slug: 'openclaw-guide',
    title: 'OpenClawで業務自動化する方法｜技術知識ゼロでもできる完全ガイド',
    description: 'プログラミング不要でAIエージェントを業務に導入する方法を解説。問い合わせ対応からSNS運用まで24時間自動化。',
    date: '2026年2月12日',
    tags: ['OpenClaw', '導入ガイド', '業務自動化'],
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/services" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">›</span>
        <span>ブログ</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        ブログ
      </h1>
      <p className="text-gray-500 mb-12">
        AI業務自動化・OpenClawに関するお役立ち記事
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3">{post.description}</p>
            <p className="text-gray-400 text-xs">{post.date}</p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          業務自動化について相談してみませんか？
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          「うちの業務でもAI化できる？」お気軽にどうぞ。
        </p>
        <Link
          href="/services#contact"
          className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          無料相談する →
        </Link>
      </div>
    </div>
  );
}
