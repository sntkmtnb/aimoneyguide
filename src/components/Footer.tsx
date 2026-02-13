import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/services" className="text-xl font-bold text-white">
              <span className="text-primary">OpenClaw構築代行</span>
              <span className="text-gray-400 text-xs ml-1">by NEWHELLO</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              OpenClawでAIエージェントを構築。あなたの業務を24時間自動化します。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">OpenClaw構築代行</Link></li>
              <li><Link href="/services#contact" className="hover:text-white transition-colors">無料相談する</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ・法的情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#contact" className="hover:text-white transition-colors">お問い合わせフォーム</Link></li>
              <li><a href="https://x.com/ai_money_guide" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X（Twitter）</a></li>
              <li><Link href="/legal/tokushoho" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NEWHELLO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
