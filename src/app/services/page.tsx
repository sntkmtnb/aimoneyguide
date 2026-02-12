import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'OpenClaw構築代行 | AIエージェント開発',
  description:
    'OpenClawであなた専用のAIエージェントを構築。Discord/LINE/メール連携、業務自動化。構築から運用まで全部やります。',
};

const services = [
  {
    title: 'AIアシスタント構築',
    price: '30万円〜',
    timeline: '約1週間',
    description:
      'あなた専用のAIアシスタントを作ります。Discord・LINE・メールなど、普段お使いのツールと連携して、24時間自動で対応します。',
    features: [
      'あなた専用のAIアシスタントを構築',
      '性格・知識・話し方をカスタマイズ',
      'Discord / LINE / メールと連携',
      'よくある質問への自動回答',
      'スケジュール管理や検索もおまかせ',
    ],
  },
  {
    title: '業務自動化',
    price: '50万円〜',
    timeline: '約2週間',
    description:
      'メールの返信、データ入力、SNS投稿など——毎日の繰り返し作業をAIが自動でこなします。サーバー上で24時間休まず動きます。',
    features: [
      'メールの自動分類・下書き作成',
      'スプレッドシートへの自動入力・集計',
      'SNSの定期投稿・返信',
      'エラーが起きたら即通知',
      '24時間365日、自動で稼働',
    ],
    popular: true,
  },
  {
    title: 'フルカスタム構築',
    price: '80万円〜',
    timeline: '約3週間',
    description:
      '複数のツールをまたいで判断・実行する「デジタル社員」。メールを確認→予定を調整→チームに連絡、まで全自動。',
    features: [
      '上記すべての機能を統合',
      '会話の内容を記憶して成長するAI',
      '複数ツールをまたいだ自動ワークフロー',
      'あなたのブランドに合った話し方・性格設計',
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
          <p className="text-primary font-semibold mb-4 text-sm tracking-wide">
            OpenClaw 構築代行
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            雑務に追われる毎日、
            <br />
            <span className="text-primary">終わりにしませんか？</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            メール対応、データ入力、SNS運用——
            <br />
            毎日の繰り返し作業を、AIが24時間あなたの代わりにこなします。
            <br />
            <span className="text-white font-semibold">技術知識は一切不要。構築から運用まで、すべてお任せください。</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            まずは無料で相談する →
          </a>
          <p className="text-gray-400 text-sm mt-4">※ 相談は無料です。しつこい営業は一切しません。</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm mb-4">安心してご利用いただける理由</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl font-bold text-navy">24時間365日</p>
              <p className="text-gray-500 text-xs">休まず稼働</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">追加人件費¥0</p>
              <p className="text-gray-500 text-xs">固定コストで運用</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">無料相談</p>
              <p className="text-gray-500 text-xs">納得してから契約</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">月5社限定</p>
              <p className="text-gray-500 text-xs">丁寧な構築のため</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">料金プラン</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            すべて、あなたのビジネスに合わせたオーダーメイドです。
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
                <div className="mb-2">
                  <span className="text-3xl font-extrabold">{s.price}</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  納期の目安：{s.timeline}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    s.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-navy hover:bg-gray-200'
                  }`}
                >
                  このプランで相談する →
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
            完成後も、AIの調子を見ながら改善を続けます。
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 inline-block">
            <p className="text-4xl font-extrabold mb-2">
              10万円<span className="text-lg font-normal text-gray-400">/月</span>
            </p>
            <ul className="text-left text-sm text-gray-600 space-y-2 mt-4">
              <li>✓ AIの動作チェック＆改善</li>
              <li>✓ 不具合の修正＆アップデート</li>
              <li>✓ 新しい機能の追加（月2件まで）</li>
              <li>✓ チャットでの優先サポート</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            あなたがやることは3つだけ
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            構築も運用も全部こちらでやります。あなたは教えるだけ。
          </p>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: '15分の無料相談',
                desc: '「何を自動化したいか」を教えてください。メール対応？データ入力？SNS？一緒に最適なプランを決めます。技術のことは何も知らなくて大丈夫です。',
              },
              {
                step: '02',
                title: '普段使っているツールを教える',
                desc: 'Gmail、LINE、Slack、スプレッドシート…いつも使っているツールの名前を教えてください。それだけで、あとは全部こちらで作ります。毎日「今日はここまで進みました」と報告するので、確認するだけでOKです。',
              },
              {
                step: '03',
                title: '使い方の説明を受ける（30分）',
                desc: '完成したAIの使い方をお見せします。操作はとても簡単です。30日間の調整期間付きなので、「ここを変えてほしい」があればすぐ対応します。',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-4xl font-extrabold text-primary/20">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">実績</h2>
          <p className="text-gray-500 mb-8">
            私たちのサービス自体が、OpenClawで動いています。
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-left max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-3">🤖 このサイトの裏側</h3>
            <p className="text-gray-600 text-sm mb-4">
              お問い合わせフォームから送信された内容は、OpenClawのAIエージェントが受信し、
              Discordに即座に通知します。24時間体制で問い合わせを逃しません。
            </p>
            <p className="text-gray-600 text-sm">
              SNSの投稿管理、リード情報の整理、チームへの連携——すべてOpenClawのエージェントが自動で行っています。
              <span className="font-semibold text-navy">つまり、あなたに提供するサービスと同じ仕組みを、私たち自身が毎日使っています。</span>
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-4">活用例</h2>
          <p className="text-gray-500 text-center mb-10">さまざまな業種でお使いいただけます</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🏪', industry: 'EC・小売', example: '注文確認メールの自動送信、在庫アラート、カゴ落ちフォロー' },
              { icon: '🏢', industry: 'コンサル・士業', example: 'クライアント対応の自動化、レポートの定期配信' },
              { icon: '🏥', industry: 'クリニック・サロン', example: '予約受付、リマインダー送信、アフターフォロー' },
              { icon: '🎓', industry: '教育・スクール', example: '生徒からの質問に自動回答、出欠管理' },
              { icon: '🏗', industry: '建設・製造', example: '日報の自動集計、資材発注のアラート' },
              { icon: '💼', industry: 'フリーランス', example: 'メール返信、請求書管理、SNS投稿の自動化' },
            ].map((item) => (
              <div key={item.industry} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-navy">{item.industry}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.example}</p>
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
                q: 'ChatGPTとは何が違うんですか？',
                a: 'ChatGPTは汎用のチャットツールです。私たちが作るのは、あなたの業務に特化したAIです。あなたのメールやカレンダー、データと連携して、実際に作業をこなします。「ただ喋るだけ」ではありません。',
              },
              {
                q: '費用はいつ回収できますか？',
                a: '多くの場合、1〜2ヶ月で元が取れます。たとえば、毎週10時間の手作業をAIに任せれば、月20万円以上の人件費が浮く計算です。',
              },
              {
                q: '契約前に詳しく相談できますか？',
                a: 'はい。15分の無料相談で、あなたの業務に合った提案をいたします。ご納得いただけなければ、契約する必要はまったくありません。しつこい営業も一切しません。',
              },
              {
                q: 'パソコンに詳しくなくても大丈夫ですか？',
                a: 'はい、まったく問題ありません。セットアップ、設定、連携——すべてこちらで対応します。あなたは「こういうことをやりたい」と教えてくださるだけでOKです。',
              },
              {
                q: 'データのセキュリティは大丈夫ですか？',
                a: 'はい。通信はすべてSSLで暗号化されています。お預かりしたデータは厳重に管理し、第三者に提供することは一切ありません。ご希望があれば秘密保持契約（NDA）も締結します。',
              },
              {
                q: 'キャンセルはできますか？',
                a: '着手前であればキャンセル可能です。着手後は進捗に応じてご相談の上対応いたします。月額保守はいつでも解約できます。',
              },
              {
                q: '最低契約期間はありますか？',
                a: 'ありません。月額保守サポートはいつでも解約可能です。構築費用は一括払いで、追加の縛りは一切ありません。',
              },
              {
                q: 'OpenClawとは何ですか？',
                a: 'OpenClawは、AIエージェントを簡単に構築・運用できるオープンソースのプラットフォームです。Discord、LINE、メールなど様々なツールと連携でき、24時間自動で動かすことができます。',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
            無料相談する
          </h2>
          <p className="text-gray-300 text-lg mb-8 text-center">
            まずはお気軽にご相談ください。24時間以内にご返信します。
            <br />
            <span className="text-sm text-gray-400">※ しつこい営業は一切しません。</span>
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold mb-6 text-center">運営者情報</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-sm text-gray-600 space-y-2">
            <p><span className="font-semibold text-gray-800">サービス名：</span>AI Money Guide</p>
            <p><span className="font-semibold text-gray-800">運営：</span>NEWHELLO（篠塚基伸 個人事業）</p>
            <p><span className="font-semibold text-gray-800">運営母体：</span><a href="https://newhello.jp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://newhello.jp</a></p>
            <p><span className="font-semibold text-gray-800">事業内容：</span>ソフトウェア開発・AIエージェント構築</p>
            <p><span className="font-semibold text-gray-800">お問い合わせ：</span>上記フォームよりお願いします</p>
            <p><span className="font-semibold text-gray-800">X（Twitter）：</span><a href="https://x.com/ai_money_guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ai_money_guide</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
