import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'OpenClaw構築代行 | AIエージェント開発',
  description:
    'NEWHELLOのOpenClaw構築代行。あなた専用のAIエージェントを構築。Discord/LINE/メール連携、業務自動化。構築から運用まで全部やります。',
};

const services = [
  {
    title: 'AIアシスタント構築',
    price: '30万円〜（税込）',
    timeline: '約1週間',
    tagline: '自動化 1業務',
    description:
      '1つの業務をAIで自動化します。例：LINEの問い合わせに自動回答、メールの自動分類など。',
    features: [
      '自動化する業務：1つ',
      'ツール連携：1つ（LINE or メール or Discord等）',
      'よくある質問への自動回答',
      'あなた専用の性格・話し方に設定',
      '納品後1週間の調整サポート',
    ],
  },
  {
    title: '業務自動化パック',
    price: '50万円〜（税込）',
    timeline: '約2週間',
    tagline: '自動化 最大3業務',
    description:
      '複数の業務をまとめて自動化。例：①メール自動返信 ②スプレッドシート記録 ③Slack通知',
    features: [
      '自動化する業務：最大3つ',
      'ツール連携：最大3つ（Gmail+Sheets+Slack等）',
      '定期実行タスク（日次レポート、週次集計等）',
      'メールの自動分類・下書き作成',
      'エラー時の即通知',
      '納品後2週間の調整サポート',
    ],
    popular: true,
  },
  {
    title: 'フルカスタム構築',
    price: '80万円〜（税込）',
    timeline: '約3週間',
    tagline: '自動化 最大5業務＋長期記憶',
    description:
      '業務全体をAIに任せる。例：メール対応＋カレンダー管理＋SNS投稿＋顧客管理＋レポート作成を1つのAIが担当。',
    features: [
      '自動化する業務：最大5つ',
      'ツール連携：最大5つ',
      '長期記憶（過去のやり取りを記憶して賢くなる）',
      '複数AIの連携（役割分担して協力）',
      'ブランドに合った話し方・性格設計',
      '運用設計書＆納品後1ヶ月の優先サポート',
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
            AIがあなたの業務を
            <br />
            <span className="text-primary">24時間自動化</span>
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
          <p className="text-gray-400 text-sm mt-4">※ 相談は無料です。次のステップはすべてお客様のペースで。</p>
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
      <section id="pricing" className="py-20">
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
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                {s.tagline && (
                  <p className="text-primary text-xs font-semibold mb-3">{s.tagline}</p>
                )}
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
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  このプランで相談する →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-4">導入イメージ</h2>
          <p className="text-gray-500 text-center mb-10">こんな使い方ができます</p>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-100 text-navy text-xs font-bold px-2 py-1 rounded">AIアシスタント構築（30万円〜）</span>
                <span className="text-gray-400 text-xs">自動化1業務</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">都内・美容室経営（開業3年目）</span> — LINEで予約の問い合わせが来たら、AIが空き時間を確認して自動で返信。
              </p>
              <p className="text-xs text-gray-500 italic">
                「今まで1日20件の予約電話に出てたのが、LINEで自動完結するようになりました」
              </p>
            </div>

            <div className="bg-white rounded-xl border border-primary/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">業務自動化パック（50万円〜）</span>
                <span className="text-gray-400 text-xs">自動化3業務</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">アパレルEC運営（月商300万円）</span> — ①注文メールが来たら自動でスプレッドシートに記録 → ②在庫が少なくなったらSlackに通知 → ③毎週月曜に売上レポートを自動作成。
              </p>
              <p className="text-xs text-gray-500 italic">
                「週5時間かかってた事務作業がゼロになりました」
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-100 text-navy text-xs font-bold px-2 py-1 rounded">フルカスタム構築（80万円〜）</span>
                <span className="text-gray-400 text-xs">自動化5業務</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">経営コンサルタント（独立5年目・顧客15社）</span> — ①メール対応 ②カレンダー管理 ③議事録作成 ④請求書発行 ⑤SNS投稿。全部AIが自動で処理。
              </p>
              <p className="text-xs text-gray-500 italic">
                「事務スタッフ1人分の仕事をAIが24時間やってくれています」
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">※ 上記はサービスの活用イメージです</p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark transition-colors"
            >
              自分の業務でも使えるか相談する →
            </a>
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="pb-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm">
            ※ 上限を超える業務の追加：<span className="font-semibold text-navy">1業務あたり＋10万円</span>
          </p>
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
              <li>✓ 週1回のAI動作チェック＆改善レポート</li>
              <li>✓ 不具合の修正（48時間以内に対応）</li>
              <li>✓ 新しい自動化の追加（月2件まで）</li>
              <li>✓ ツールのアップデート対応</li>
              <li>✓ チャットでの優先サポート（平日24時間以内返信）</li>
              <li>✓ いつでも解約OK（縛りなし）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg font-semibold mb-4">
            どのプランが合うかわからない？
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            無料で相談して決める →
          </a>
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
                <span className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
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
          <h2 className="text-2xl font-bold mb-4">私たち自身がOpenClawで動いています</h2>
          <p className="text-gray-500 mb-8">
            あなたに提供するのと同じ仕組みを、私たち自身が毎日使っています。
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <h3 className="font-bold mb-2">📩 お問い合わせ対応</h3>
              <p className="text-gray-600 text-sm">
                このサイトのフォームから送信された内容は、AIが受信しDiscordに即通知。24時間体制で問い合わせを逃しません。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <h3 className="font-bold mb-2">📱 SNS運用</h3>
              <p className="text-gray-600 text-sm">
                Xの投稿スケジュール管理、リプライ対応、エンゲージメント分析。すべてOpenClawのAIエージェントが自動実行。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <h3 className="font-bold mb-2">📊 データ管理</h3>
              <p className="text-gray-600 text-sm">
                リード情報の整理、プロジェクト管理、チームへの連携。手動作業をほぼゼロに。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-left">
              <h3 className="font-bold mb-2">🔔 リアルタイム通知</h3>
              <p className="text-gray-600 text-sm">
                重要なメール、問い合わせ、アラートをAIが判断して即座に通知。見逃しゼロ。
              </p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-xl border-2 border-primary/20 p-6 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              💡 <strong>新サービスのため、現在モニター企業を募集中です。</strong>
              <br />
              <span className="text-gray-500">最初の導入事例として、特別価格でご提供します。</span>
            </p>
            <a href="#contact" className="inline-block mt-3 text-primary font-semibold text-sm hover:underline">
              モニター詳細を聞く →
            </a>
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

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-4">人を雇うのと何が違う？</h2>
          <p className="text-gray-500 text-center mb-8">同じ業務を任せた場合の比較です</p>

          {/* Desktop: table view */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 text-sm">
              <div className="p-4 bg-gray-50 font-semibold text-gray-700"></div>
              <div className="p-4 bg-gray-50 font-semibold text-gray-700 text-center">正社員を雇う</div>
              <div className="p-4 bg-primary/10 font-semibold text-primary text-center">AIエージェント</div>

              <div className="p-4 border-t font-medium text-gray-700">月額コスト</div>
              <div className="p-4 border-t text-gray-500 text-center">30万円〜<br/><span className="text-xs">（給与+社保+交通費）</span></div>
              <div className="p-4 border-t text-primary text-center font-semibold">保守10万円/月<br/><span className="text-xs font-normal text-gray-500">（構築費は初回のみ）</span></div>

              <div className="p-4 border-t font-medium text-gray-700">稼働時間</div>
              <div className="p-4 border-t text-gray-500 text-center">8時間/日</div>
              <div className="p-4 border-t text-primary text-center font-semibold">24時間365日</div>

              <div className="p-4 border-t font-medium text-gray-700">立ち上がり</div>
              <div className="p-4 border-t text-gray-500 text-center">3ヶ月〜<br/><span className="text-xs">（採用+研修）</span></div>
              <div className="p-4 border-t text-primary text-center font-semibold">1〜3週間</div>

              <div className="p-4 border-t font-medium text-gray-700">退職リスク</div>
              <div className="p-4 border-t text-gray-500 text-center">あり</div>
              <div className="p-4 border-t text-primary text-center font-semibold">なし</div>

              <div className="p-4 border-t font-medium text-gray-700">解約</div>
              <div className="p-4 border-t text-gray-500 text-center">解雇規制あり</div>
              <div className="p-4 border-t text-primary text-center font-semibold">いつでも可能</div>

              <div className="p-4 border-t font-medium text-gray-700">年間コスト</div>
              <div className="p-4 border-t text-gray-500 text-center">360万円〜<br/><span className="text-xs">（30万×12ヶ月）</span></div>
              <div className="p-4 border-t text-primary text-center font-semibold">170万円〜<br/><span className="text-xs font-normal text-gray-500">（構築50万+保守10万×12）</span></div>
            </div>
          </div>

          {/* Mobile: card view */}
          <div className="md:hidden space-y-4">
            {[
              { label: '月額コスト', human: '30万円〜', humanSub: '給与+社保+交通費', ai: '保守10万円/月', aiSub: '構築費は初回のみ' },
              { label: '稼働時間', human: '8時間/日', humanSub: '', ai: '24時間365日', aiSub: '' },
              { label: '立ち上がり', human: '3ヶ月〜', humanSub: '採用+研修', ai: '1〜3週間', aiSub: '' },
              { label: '退職リスク', human: 'あり', humanSub: '', ai: 'なし', aiSub: '' },
              { label: '解約', human: '解雇規制あり', humanSub: '', ai: 'いつでも可能', aiSub: '' },
              { label: '年間コスト', human: '360万円〜', humanSub: '30万×12ヶ月', ai: '170万円〜', aiSub: '構築50万+保守10万×12' },
            ].map((row) => (
              <div key={row.label} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">{row.label}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">正社員</p>
                    <p className="text-sm text-gray-600">{row.human}</p>
                    {row.humanSub && <p className="text-xs text-gray-400">{row.humanSub}</p>}
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-xs text-primary font-semibold mb-1">AI</p>
                    <p className="text-sm text-primary font-semibold">{row.ai}</p>
                    {row.aiSub && <p className="text-xs text-gray-500">{row.aiSub}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 bg-green-50 rounded-xl p-4">
            <p className="text-green-800 font-bold text-lg">年間190万円のコスト削減</p>
            <p className="text-green-600 text-sm">正社員360万円 → AI170万円</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">よくある質問</h2>
          <Accordion
            items={[
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
                a: 'はい。15分の無料相談で、あなたの業務に合った提案をいたします。ご納得いただけなければ、契約する必要はまったくありません。次のステップはすべてお客様のペースで進めます。',
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
            ]}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xl font-bold mb-2">まずは15分の無料相談から</p>
          <p className="text-white/80 text-sm mb-6">あなたの業務に合ったプランをご提案します</p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            無料で相談する →
          </a>
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
            <span className="text-sm text-gray-400">※ 次のステップはすべてお客様のペースで進めます。</span>
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold mb-6 text-center">運営者情報</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-sm text-gray-600 space-y-2">
            <p><span className="font-semibold text-gray-800">サービス名：</span>OpenClaw構築代行</p>
            <p><span className="font-semibold text-gray-800">運営：</span>NEWHELLO（<a href="https://newhello.jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://newhello.jp/</a>）</p>
            <p><span className="font-semibold text-gray-800">代表：</span>篠塚 基伸</p>
            <p><span className="font-semibold text-gray-800">事業内容：</span>AIエージェント開発・業務自動化の設計と構築</p>
            <p><span className="font-semibold text-gray-800">お問い合わせ：</span>上記フォームよりお願いします</p>
            <p><span className="font-semibold text-gray-800">X（Twitter）：</span><a href="https://x.com/ai_money_guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ai_money_guide</a></p>
          </div>
        </div>
      </section>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="#contact"
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-4 text-lg shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-colors"
        >
          無料で相談する →
        </a>
      </div>
      {/* Spacer for sticky CTA on mobile */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
