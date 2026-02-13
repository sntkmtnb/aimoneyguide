import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenClawとは？ChatGPTとの違いをわかりやすく解説',
  description:
    'OpenClawとChatGPTの違いを中小企業向けにわかりやすく解説。「質問に答えるAI」と「自分で動くAI」の差、導入メリット、活用事例まで。',
  openGraph: {
    title: 'OpenClawとは？ChatGPTとの違いをわかりやすく解説',
    description:
      'ChatGPTは「聞けば答えるAI」、OpenClawは「自分で考えて動くAI」。その違いと導入メリットを解説。',
    type: 'article',
  },
  keywords: ['OpenClaw とは', 'OpenClaw ChatGPT 違い', 'AIエージェント', 'OpenClaw 解説', '業務自動化 AI'],
};

export default function WhatIsOpenClawPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/services" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-primary">
          ブログ
        </Link>
        <span className="mx-2">›</span>
        <span>OpenClawとは</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
        OpenClawとは？
        <br />
        <span className="text-primary">ChatGPTとの違いをわかりやすく解説</span>
      </h1>

      <p className="text-gray-500 text-sm mb-8">2026年2月13日 · NEWHELLO</p>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

        {/* 導入 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          「OpenClawって何？ ChatGPTと何が違うの？」
        </h2>
        <p>
          最近「AIエージェント」という言葉を耳にする機会が増えました。
          その中でも注目されているのが<strong>OpenClaw</strong>というオープンソースのAIエージェント基盤です。
        </p>
        <p>
          「ChatGPTとどう違うの？」「うちの会社でも使えるの？」
          そんな疑問を持つ方に向けて、専門用語を使わずにわかりやすく解説します。
        </p>

        {/* ChatGPTとは */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          まず、ChatGPTをおさらい
        </h2>
        <p>
          ChatGPTは、OpenAIが作った<strong>「質問に答えてくれるAI」</strong>です。
          テキストを入力すると、賢い回答を返してくれます。
        </p>
        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <p className="font-semibold text-gray-900 mb-2">ChatGPTでできること</p>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>✅ 質問に答える（「○○について教えて」）</li>
            <li>✅ 文章を書く（メール、企画書、ブログ記事）</li>
            <li>✅ 翻訳する</li>
            <li>✅ アイデア出し</li>
            <li>✅ プログラムのコードを書く</li>
          </ul>
        </div>
        <p>
          とても便利ですが、<strong>人間が毎回「聞く」必要があります</strong>。
          ChatGPTは自分からは動きません。あくまで「聞かれたら答える」AIです。
        </p>

        {/* OpenClawとは */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          OpenClawとは？
        </h2>
        <p>
          OpenClawは、<strong>「自分で考えて、自分で動くAI」</strong>を作るためのオープンソース基盤です。
        </p>
        <p>
          ChatGPTが「聞かれたら答える秘書」だとすると、
          OpenClawは<strong>「指示しなくても自分で仕事を進める従業員」</strong>のようなものです。
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-gray-900 mb-2">OpenClawでできること</p>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>🤖 LINEやメールの問い合わせに<strong>自動で返信</strong></li>
            <li>🤖 注文が来たら<strong>自動でスプレッドシートに記録</strong></li>
            <li>🤖 在庫が減ったら<strong>自動でSlackに通知</strong></li>
            <li>🤖 毎朝の売上レポートを<strong>自動で作成して送信</strong></li>
            <li>🤖 SNSに<strong>自動で定期投稿</strong></li>
            <li>🤖 予約のダブルブッキングを<strong>自動でチェック</strong></li>
          </ul>
        </div>
        <p>
          ポイントは「<strong>自動で</strong>」という部分。
          一度設定すれば、24時間365日、人間の指示なしで動き続けます。
        </p>

        {/* 比較表 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          ChatGPT vs OpenClaw 比較表
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">比較項目</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-900 border-b">💬 ChatGPT</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-900 border-b">🤖 OpenClaw</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">一言で言うと</td>
                <td className="px-4 py-3 text-center">聞けば答えるAI</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">自分で動くAI</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">動き方</td>
                <td className="px-4 py-3 text-center">人が質問 → AIが回答</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">自動で判断 → 自動で実行</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">稼働時間</td>
                <td className="px-4 py-3 text-center">人が使っている時だけ</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">24時間365日</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">他のツールとの連携</td>
                <td className="px-4 py-3 text-center">基本的にチャット画面内</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">LINE、メール、Slack、スプレッドシート等</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">記憶</td>
                <td className="px-4 py-3 text-center">会話ごとにリセット</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">長期記憶あり（文脈を覚える）</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">カスタマイズ</td>
                <td className="px-4 py-3 text-center">プロンプトで調整</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">業務に合わせてフル構築可能</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">料金体系</td>
                <td className="px-4 py-3 text-center">月額20ドル〜</td>
                <td className="px-4 py-3 text-center">オープンソース（無料）+ API利用料</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* たとえ話 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          わかりやすい例え：レストランで考える
        </h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">💬 ChatGPT = 優秀なウェイター</h3>
            <p className="text-gray-600 text-sm">
              お客さんが「おすすめは？」と聞いたら完璧に答える。
              でも、聞かれるまで立ってるだけ。
              料理を運んだり、片付けたり、予約を管理したりはしない。
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">🤖 OpenClaw = 店長代理</h3>
            <p className="text-gray-600 text-sm">
              予約の電話に自動で対応し、食材の在庫を管理し、
              売上を毎日まとめて報告する。
              お客さんからのLINEにも自動で返信。
              オーナーは本来の仕事（メニュー開発や接客）に集中できる。
            </p>
          </div>
        </div>

        {/* どんな会社に向いているか */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          OpenClawが向いている会社
        </h2>
        <div className="space-y-3 my-6">
          <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700 text-sm">毎日同じ作業を繰り返している（メール返信、データ入力、報告書作成）</p>
          </div>
          <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700 text-sm">人を雇いたいけどコストが合わない</p>
          </div>
          <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700 text-sm">営業時間外の問い合わせに対応できていない</p>
          </div>
          <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700 text-sm">ChatGPTを使ってるけど、業務に組み込めていない</p>
          </div>
          <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700 text-sm">DXに興味はあるけど、何から始めればいいかわからない</p>
          </div>
        </div>

        {/* よくある質問 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          よくある質問
        </h2>
        <div className="space-y-4 my-8">
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. プログラミングの知識は必要？</p>
            <p className="text-gray-600 text-sm">
              A. お客様側は一切不要です。「こういう作業を自動化したい」と伝えていただければ、構築から設定まで全部対応します。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. ChatGPTと併用できる？</p>
            <p className="text-gray-600 text-sm">
              A. はい。OpenClawの中でChatGPT（GPT-4）やClaude等のAIモデルを使います。ChatGPTの「頭脳」に、OpenClawの「手足」をつけるイメージです。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. セキュリティは大丈夫？</p>
            <p className="text-gray-600 text-sm">
              A. OpenClawはお客様専用のサーバーで動くので、データが外部に漏れるリスクは最小限です。オープンソースなので、コードも公開されています。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. 月額いくらくらいかかる？</p>
            <p className="text-gray-600 text-sm">
              A. 初期構築費とは別に、サーバー代（月1,000〜5,000円）とAI API利用料（月500〜30,000円、利用量次第）がかかります。人を雇うよりずっと安く済みます。
            </p>
          </div>
        </div>

        {/* まとめ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          まとめ：ChatGPTは「頭脳」、OpenClawは「頭脳+手足」
        </h2>
        <p>
          ChatGPTは素晴らしいAIです。でも、業務を<strong>自動化</strong>するには「手足」が必要です。
        </p>
        <p>
          OpenClawは、ChatGPTのようなAIの頭脳に、LINE・メール・スプレッドシートなどの
          「手足」をつけて、<strong>24時間自動で業務をこなす仕組み</strong>を作れるツールです。
        </p>
        <p>
          「ChatGPTは使ってるけど、業務に活かしきれていない」<br />
          そんな方にとって、OpenClawは次のステップになるはずです。
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-3">
            OpenClawで業務を自動化しませんか？
          </h3>
          <p className="mb-6 opacity-90">
            「うちの業務でも使える？」<br />
            そんな疑問に無料でお答えします。
          </p>
          <Link
            href="/services#contact"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            無料相談する →
          </Link>
        </div>

        {/* 関連記事 */}
        <div className="border-t pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">関連記事</h3>
          <div className="space-y-3">
            <Link
              href="/blog/openclaw-guide"
              className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            >
              <p className="font-semibold text-gray-900">
                OpenClawで業務自動化する方法｜技術知識ゼロでもできる完全ガイド
              </p>
              <p className="text-sm text-gray-500 mt-1">具体的な導入手順と活用事例を解説</p>
            </Link>
            <Link
              href="/blog/ai-cost-comparison"
              className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            >
              <p className="font-semibold text-gray-900">
                人を雇う vs AIエージェント｜中小企業が知るべきコスト比較
              </p>
              <p className="text-sm text-gray-500 mt-1">3年間で880万円の差が出るコスト比較</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
