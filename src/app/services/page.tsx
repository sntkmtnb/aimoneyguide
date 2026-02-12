import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIエージェント開発サービス | AI Money Guide',
  description:
    'あなたのビジネスを自動化するAIエージェントを開発します。チャットボット、業務自動化、カスタムAIアシスタント。',
};

const services = [
  {
    title: 'AIチャットボット構築',
    price: '30万円',
    timeline: '1週間',
    description:
      'あなたのサイトやプラットフォーム専用のAIチャットボット。あなたのデータで学習し、ブランドの声で24時間顧客対応。',
    features: [
      'あなたのビジネスデータで学習',
      'マルチプラットフォーム対応（Web、Slack、Discord等）',
      '自然な会話フロー',
      '分析ダッシュボード付き',
      '必要時は人間にエスカレーション',
    ],
  },
  {
    title: '業務自動化エージェント',
    price: '50万円',
    timeline: '2週間',
    description:
      '繰り返し作業を自動化するAIエージェント。メール処理、データ入力、レポート作成、SNS運用——あなたの時間を奪う作業を代行。',
    features: [
      'カスタムワークフロー自動化',
      'API連携（CRM、メール、DB等）',
      'スケジュール実行＆監視',
      'エラー処理＆通知',
      'ドキュメント＆トレーニング付き',
    ],
    popular: true,
  },
  {
    title: 'カスタムAIアシスタント',
    price: '80万円',
    timeline: '3週間',
    description:
      'あなたのビジネスに完全特化したAIアシスタント。リサーチ、文章作成、分析、顧客管理——デジタル社員を1人雇う感覚。',
    features: [
      'チャットボット＋自動化の全機能',
      'マルチツール連携',
      '長期記憶＆継続学習',
      'カスタム性格＆ブランドボイス',
      '優先サポート＆改善対応',
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
            AIエージェント開発
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            あなたの代わりに
            <br />
            <span className="text-primary">24時間働くAI</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            「わかりません」としか言わないチャットボットではありません。
            <br />
            実際にタスクをこなすAIエージェントを、あなたのビジネスに合わせて構築します。
          </p>
          <a
            href="mailto:hello@ai-money-guide.com?subject=AIエージェント開発のご相談"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            無料相談する →
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-navy">24/7</p>
              <p className="text-gray-500 text-sm">休まず稼働</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">10倍</p>
              <p className="text-gray-500 text-sm">手作業より高速</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">¥0</p>
              <p className="text-gray-500 text-sm">時給という概念なし</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">∞</p>
              <p className="text-gray-500 text-sm">スケーラビリティ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">サービス</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            テンプレートではありません。すべてあなたのビジネスに合わせたカスタム構築です。
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
                    人気No.1
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{s.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold">{s.price}</span>
                  <span className="text-gray-400 text-sm ml-1">〜</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  納期：{s.timeline}
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
                  href="mailto:hello@ai-money-guide.com?subject=AIエージェント開発のご相談"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    s.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-navy hover:bg-gray-200'
                  }`}
                >
                  相談する →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">月額保守サポート</h2>
          <p className="text-gray-500 mb-6">
            ローンチ後も、あなたのエージェントを最高の状態に保ちます。
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 inline-block">
            <p className="text-4xl font-extrabold mb-2">
              10万円<span className="text-lg font-normal text-gray-400">/月</span>
            </p>
            <ul className="text-left text-sm text-gray-600 space-y-2 mt-4">
              <li>✓ パフォーマンス監視＆最適化</li>
              <li>✓ バグ修正＆アップデート</li>
              <li>✓ 新機能リクエスト（月2件まで）</li>
              <li>✓ 優先Slack/Discordサポート</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ご利用の流れ</h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: '無料相談',
                desc: '何を自動化したいか教えてください。一緒に最適なアプローチを考えます。費用は一切かかりません。',
              },
              {
                step: '02',
                title: 'カスタム構築',
                desc: 'あなた専用のAIエージェントをゼロから構築。毎日進捗を共有し、途中でテストもできます。',
              },
              {
                step: '03',
                title: 'ローンチ＆改善',
                desc: 'エージェントが稼働開始。パフォーマンスを監視し、完璧になるまで調整を続けます。',
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
          <h2 className="text-2xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-6">
            {[
              {
                q: 'ChatGPTと何が違うんですか？',
                a: 'ChatGPTは汎用チャットボットです。私たちのエージェントは、あなたの業務フローに特化して構築します。あなたのツールと連携し、文脈を記憶し、実際にアクションを起こします——ただ喋るだけではありません。',
              },
              {
                q: '投資回収はどれくらいで？',
                a: 'ほとんどのお客様が初月でROIを実感しています。週10時間の手作業（時給5,000円換算）を置き換えるだけで、月20万円の削減です。しかもエージェントは眠りません。',
              },
              {
                q: '満足できなかったら？',
                a: '30日以内にエージェントが価値を発揮しなければ、全額返金します。質問は一切しません。',
              },
              {
                q: '技術的な知識は必要ですか？',
                a: 'ゼロで大丈夫です。セットアップ、連携、トレーニング——すべて私たちが対応します。やりたいことを教えていただくだけでOKです。',
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
            自動化、始めませんか？
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            無料15分相談で、AIエージェントがあなたのビジネスをどう変えるかお見せします。
          </p>
          <a
            href="mailto:hello@ai-money-guide.com?subject=AIエージェント開発のご相談"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            無料相談する →
          </a>
        </div>
      </section>
    </div>
  );
}
