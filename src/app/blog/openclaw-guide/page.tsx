import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenClawで業務自動化する方法｜技術知識ゼロでもできる完全ガイド',
  description:
    'プログラミング不要でAIエージェントを業務に導入する方法を解説。問い合わせ対応、データ入力、レポート作成、SNS運用を24時間自動化。',
  openGraph: {
    title: 'OpenClawで業務自動化する方法｜技術知識ゼロでもできる完全ガイド',
    description:
      'プログラミング不要でAIエージェントを業務に導入。問い合わせ対応からSNS運用まで24時間自動化。',
    type: 'article',
  },
};

export default function OpenClawGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/services" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">›</span>
        <span>ブログ</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
        OpenClawで業務自動化する方法
        <br />
        <span className="text-2xl sm:text-3xl text-gray-600">
          技術知識ゼロでもできる完全ガイド
        </span>
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        2026年2月13日 · NEWHELLO
      </p>

      {/* Lead */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10 text-gray-700 leading-relaxed space-y-3">
        <p>「業務を自動化したいけど、プログラミングなんてできない」</p>
        <p>
          「ChatGPTは使ってるけど、実際の業務に組み込む方法がわからない」
        </p>
        <p>
          そんな方に向けて、<strong>OpenClaw</strong>
          というAIエージェント基盤を使った業務自動化の方法を解説します。
        </p>
      </div>

      {/* What is OpenClaw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-primary pl-4">
          OpenClawとは？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          OpenClawは、AIエージェントを構築・運用できるオープンソースのプラットフォームです。
          普通のチャットボットとの違いを見てみましょう。
        </p>

        {/* Comparison - mobile friendly list format */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">💬 ChatGPT</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>質問に答えるだけ</li>
                <li>ツール連携なし（手動コピペ）</li>
                <li>使ってる時だけ動く</li>
                <li>カスタマイズ限定的</li>
                <li>セッションごとにリセット</li>
              </ul>
            </div>
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4">
              <h3 className="font-bold text-primary mb-2">🤖 OpenClaw</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>質問に答える＋<strong>実際に作業する</strong></li>
                <li>LINE・メール・Slack等と<strong>自動連携</strong></li>
                <li><strong>24時間365日</strong>稼働</li>
                <li>性格・知識・話し方まで自由</li>
                <li><strong>過去のやり取りを記憶</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          一言で言うと、ChatGPTが「賢い相談相手」なら、OpenClawは
          <strong>「24時間働くデジタル社員」</strong>です。
        </p>
      </section>

      {/* What can be automated */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
          どんな業務を自動化できる？
        </h2>

        <div className="space-y-8">
          {[
            {
              num: '1',
              title: '問い合わせ対応（LINE・メール）',
              desc: 'お客さんからの「営業時間は？」「予約できますか？」といった質問に、AIが自動で回答。人間が対応するのは、複雑な相談だけ。',
              effect:
                '1日20件の問い合わせ対応 → 人間が対応するのは2〜3件だけに',
            },
            {
              num: '2',
              title: 'データ入力・記録',
              desc: '注文メールが来たら、自動でスプレッドシートに記録。手作業のコピペがゼロに。',
              effect: '週5時間の事務作業 → ゼロ',
            },
            {
              num: '3',
              title: 'レポート作成',
              desc: '毎週月曜の朝、先週の売上レポートが自動で届く。集計も分析もAIがやる。',
              effect: '月曜の朝2時間の集計作業 → 自動',
            },
            {
              num: '4',
              title: 'SNS運用',
              desc: '毎日の投稿、リプライへの返信、フォロワーとのコミュニケーション。AIが24時間対応。',
              effect: 'SNS運用の工数 → 月10時間削減',
            },
            {
              num: '5',
              title: '在庫管理・アラート',
              desc: '在庫が一定数を下回ったら、Slackやメールで自動通知。発注忘れを防ぐ。',
              effect: '在庫切れによる機会損失 → ほぼゼロ',
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.num}. {item.title}
              </h3>
              <p className="text-gray-700 mb-3">{item.desc}</p>
              <div className="bg-green-50 text-green-800 text-sm rounded-lg px-4 py-2 font-medium">
                📈 効果: {item.effect}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
          導入の流れ（3ステップ）
        </h2>

        <div className="space-y-6">
          {[
            {
              step: 'STEP 1',
              title: '何を自動化するか決める',
              time: '15分',
              desc: '「どの作業が面倒か」を教えてください。技術的なことは何も知らなくて大丈夫です。',
            },
            {
              step: 'STEP 2',
              title: '構築',
              time: '1〜3週間',
              desc: 'あとは全部こちらでやります。毎日「ここまで進みました」と報告するので、確認するだけ。',
            },
            {
              step: 'STEP 3',
              title: '使い方を覚える',
              time: '30分',
              desc: '完成したAIの操作方法をお見せします。難しい操作はありません。',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-20 text-center">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.step}
                </span>
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-primary pl-4">
          費用の目安
        </h2>

        <div className="space-y-3 mb-6">
          {[
            {
              plan: 'ライト',
              detail: '1業務を自動化',
              price: '30万円〜（税込）',
            },
            {
              plan: 'スタンダード',
              detail: '最大3業務を自動化',
              price: '50万円〜（税込）',
            },
            {
              plan: 'プレミアム',
              detail: '最大5業務＋長期記憶',
              price: '80万円〜（税込）',
            },
          ].map((item) => (
            <div
              key={item.plan}
              className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3"
            >
              <div>
                <span className="font-bold text-gray-900">{item.plan}</span>
                <span className="text-gray-500 text-sm ml-2">
                  {item.detail}
                </span>
              </div>
              <span className="font-bold text-primary">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">
            💡「人を1人雇う」と比較すると
          </h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              正社員: <strong>年間360万円</strong>（給与+社保）
            </li>
            <li>
              AI: <strong>年間170万円</strong>（構築50万+保守10万×12）
            </li>
            <li className="text-primary font-bold">
              → 年間190万円のコスト削減
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
          よくある質問
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'パソコンに詳しくなくても大丈夫？',
              a: 'はい。セットアップから運用まで全部こちらで対応します。',
            },
            {
              q: '今使ってるツール（LINE、Gmail等）はそのまま使える？',
              a: 'はい。今のツールをそのまま使いながら、AIを追加するだけです。',
            },
            {
              q: 'セキュリティは大丈夫？',
              a: '通信はすべてSSL暗号化。NDA（秘密保持契約）も対応します。',
            },
          ].map((item) => (
            <div
              key={item.q}
              className="border border-gray-200 rounded-lg p-4"
            >
              <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
              <p className="text-gray-700 text-sm">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          「この作業、誰かやってくれないかな」
        </h2>
        <p className="text-gray-300 mb-6">
          そう思ったことがある方は、まずは無料相談からどうぞ。
        </p>
        <Link
          href="/services#contact"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          無料相談する（30秒）
        </Link>
      </section>

      {/* Footer nav */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="text-primary hover:underline text-sm"
        >
          ← サービス一覧に戻る
        </Link>
      </div>
    </article>
  );
}
