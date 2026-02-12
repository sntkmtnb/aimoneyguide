import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenClaw構築代行 | AIエージェント開発',
  description:
    'OpenClawであなた専用のAIエージェントを構築。Discord/LINE/メール連携、業務自動化、カスタムアシスタント。構築から運用まで全部やります。',
};

const services = [
  {
    title: 'OpenClaw AIアシスタント構築',
    price: '30万円',
    timeline: '1週間',
    description:
      '今注目のOpenClawで、あなた専用のAIアシスタントを構築。Discord/Slack/LINE/メールと連携し、24時間あなたの代わりに働く「デジタル社員」を作ります。',
    features: [
      'OpenClawのセットアップ＆VPSサーバー構築',
      'あなた専用の性格・知識設定（SOUL.md）',
      'Discord / Slack / LINE / メール連携',
      'スキル追加（カレンダー、検索、FAQ対応等）',
      'カスタムcronジョブで定期タスク自動実行',
    ],
  },
  {
    title: 'OpenClaw 業務自動化エージェント',
    price: '50万円',
    timeline: '2週間',
    description:
      'メール自動返信、データ入力・集計、SNS運用——繰り返し作業をOpenClawエージェントが自律的に処理。VPS上で24時間稼働します。',
    features: [
      'OpenClawベースの自律型AIエージェント',
      'Gmail/Outlook/Google Sheets/Notion等とAPI連携',
      'cronスケジューラーで定期実行（VPS 24時間稼働）',
      'エラー時はSlack/メールで即通知',
      'RAG構成であなたのデータを学習',
    ],
    popular: true,
  },
  {
    title: 'OpenClaw フルカスタム構築',
    price: '80万円',
    timeline: '3週間',
    description:
      '複数エージェント連携、独自スキル開発、運用設計まで。メールを見て→カレンダー確認→Slack通知まで全自動の「デジタル社員」。',
    features: [
      'チャットボット＋自動化の全機能を統合',
      '長期記憶（会話の文脈を記憶・学習）',
      '複数エージェント連携＆独自スキル開発',
      'カスタム性格・ブランドボイス設計',
      '運用設計＆優先サポート付き',
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
            OpenClaw構築代行
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            OpenClawで
            <br />
            <span className="text-primary">デジタル社員を雇う</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discord、LINE、メール——あなたの代わりに24時間対応するAIエージェントを構築します。
            <br />
            技術知識ゼロでOK。構築から運用まで全部やります。
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
          <h2 className="text-3xl font-bold text-center mb-4">あなたがやることは3つだけ</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">構築も運用も全部こちらでやります。あなたは教えるだけ。</p>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: '15分の無料相談',
                desc: '「何を自動化したいか」を教えてください。メール対応？データ入力？SNS？一緒に最適なプランを決めます。技術知識はゼロで大丈夫です。',
              },
              {
                step: '02',
                title: '使っているツールを教える',
                desc: 'Gmail、Slack、Notion、スプレッドシート…普段使っているツールを教えてください。それだけで、あとは全部こちらで構築します。毎日進捗を共有するので、確認するだけでOK。',
              },
              {
                step: '03',
                title: '使い方レクチャーを受ける（30分）',
                desc: '完成したAIエージェントの使い方をお見せします。30日間の調整期間付きなので、「ここをこうしてほしい」があればすぐ対応します。',
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
