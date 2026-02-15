import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'チャットボット導入費用の相場｜SaaS vs 自社開発、結局どっちが安い？',
  description:
    'チャットボットの導入費用を徹底比較。SaaS型の月額費用、AI搭載型の初期費用、自社専用開発のコストを表で整理。中小企業にとって最もコスパの良い選択肢を解説します。',
  openGraph: {
    title: 'チャットボット導入費用の相場｜SaaS vs 自社開発、結局どっちが安い？',
    description:
      'チャットボットの導入費用を徹底比較。SaaS型 vs 自社開発のコストと、中小企業にとって最適な選択肢を解説。',
    type: 'article',
  },
  keywords: [
    'チャットボット 導入 費用',
    'チャットボット 相場',
    'AIチャットボット 料金',
    'チャットボット SaaS 自社開発',
    'チャットボット 比較',
    'AI 業務自動化 費用',
  ],
};

export default function ChatbotCostPage() {
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
        <span>チャットボット導入費用</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        チャットボット導入費用の相場
        <br />
        <span className="text-2xl sm:text-3xl">SaaS vs 自社開発、結局どっちが安い？</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-15">2026.02.15</time>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
          コスト比較
        </span>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* リード文 */}
        <p className="text-lg leading-relaxed">
          「チャットボットを導入したいけど、費用がよくわからない」
          <br />
          「SaaSと自社開発、どっちがいいの？」
        </p>
        <p>
          こんな悩みを持つ中小企業の方は多いです。チャットボットの費用は種類によって
          <strong>月額1,500円〜100万円以上</strong>
          と幅が広く、比較が難しいのが実情です。
        </p>
        <p className="text-sm text-gray-500">
          ※この記事は、AI業務自動化の構築支援を行うNEWHELLOが執筆しています。
        </p>
        <p>
          この記事では、チャットボットの3つの導入方法を<strong>費用・特徴・向いている企業</strong>
          の観点から比較し、あなたの会社に最適な選択肢を解説します。
        </p>

        {/* 目次 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
          <p className="font-bold text-base mb-3">📋 この記事でわかること</p>
          <ul className="text-sm space-y-1 mb-0">
            <li>チャットボットの費用相場（初期費用・月額費用）</li>
            <li>SaaS型 vs AI搭載型 vs 自社専用開発の比較表</li>
            <li>3年間のトータルコストシミュレーション</li>
            <li>中小企業が選ぶべき方法と判断基準</li>
          </ul>
        </div>

        {/* セクション1 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          チャットボットの費用は3つの要素で決まる
        </h2>

        <p>チャットボットの費用は、大きく以下の3つで構成されています。</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">費用項目</th>
                <th className="border border-gray-300 px-4 py-2 text-left">内容</th>
                <th className="border border-gray-300 px-4 py-2 text-left">相場</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">初期費用</td>
                <td className="border border-gray-300 px-4 py-2">
                  環境構築、シナリオ設計、AI学習データ登録
                </td>
                <td className="border border-gray-300 px-4 py-2">0〜100万円</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">月額費用</td>
                <td className="border border-gray-300 px-4 py-2">
                  システム利用料、AI処理料、保守
                </td>
                <td className="border border-gray-300 px-4 py-2">1,500円〜50万円</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">オプション費用</td>
                <td className="border border-gray-300 px-4 py-2">
                  外部連携、多言語、有人チャット切替
                </td>
                <td className="border border-gray-300 px-4 py-2">要見積もり</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          問題は、<strong>この相場だけ見ても判断できない</strong>こと。
          SaaS型のチャットボットは月額が安く見えても、3年使い続けると自社開発より高くなるケースがあります。
        </p>

        {/* セクション2 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          3つの導入方法を徹底比較
        </h2>

        <p>チャットボットの導入方法は、大きく3つに分かれます。</p>

        <h3 className="text-xl font-bold mt-8 mb-3">① SaaS型（シナリオ型）</h3>
        <p>
          あらかじめ用意されたテンプレートを使って、選択肢を設定するタイプ。
          月額数千円から始められる手軽さが魅力ですが、
          <strong>想定外の質問に答えられない</strong>のが弱点です。
        </p>
        <ul>
          <li>初期費用: 0〜10万円</li>
          <li>月額費用: 1,500円〜5万円</li>
          <li>向いている: FAQ対応が中心、質問パターンが決まっている企業</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3">② SaaS型（AI搭載型）</h3>
        <p>
          ChatGPTなどのAIを搭載し、自然な会話で回答するタイプ。
          回答精度は高いですが、<strong>月額費用が高く、カスタマイズに限界</strong>があります。
        </p>
        <ul>
          <li>初期費用: 20〜100万円</li>
          <li>月額費用: 10〜50万円</li>
          <li>向いている: 大企業、問い合わせ件数が非常に多い企業</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3">③ 自社専用開発</h3>
        <p>
          自社の業務に合わせて専用のチャットボットを開発するタイプ。
          初期費用はかかりますが、<strong>月額費用が圧倒的に安く、完全にカスタマイズ可能</strong>です。
        </p>
        <ul>
          <li>初期費用: 20〜50万円</li>
          <li>月額費用: 3,000円〜1万円（API利用料のみ）※Claude/GPT APIの従量課金。月間1,000件程度の問い合わせで約3,000〜8,000円が目安</li>
          <li>向いている: 自社の業務に特化した対応が必要な中小企業</li>
        </ul>

        {/* 比較表 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          費用比較表（3年間のトータルコスト）
        </h2>

        <p>
          月額費用は安く見えても、3年間のトータルで考えると結果が変わります。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 px-3 py-2 text-left">比較項目</th>
                <th className="border border-gray-300 px-3 py-2 text-center">
                  SaaS型
                  <br />
                  （シナリオ型）
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center">
                  SaaS型
                  <br />
                  （AI搭載型）
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center bg-orange-50">
                  自社専用開発
                  <br />
                  （NEWHELLO）
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">初期費用</td>
                <td className="border border-gray-300 px-3 py-2 text-center">0〜10万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center">20〜100万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold">
                  30万円〜
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">月額費用</td>
                <td className="border border-gray-300 px-3 py-2 text-center">1〜5万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center">10〜50万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold">
                  3,000円〜1万円
                  <span className="block text-xs font-normal text-gray-500">※API従量課金のみ</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">3年間の総額</td>
                <td className="border border-gray-300 px-3 py-2 text-center">46〜190万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center">380〜1,900万円</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold text-orange-600">
                  41〜66万円
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">カスタマイズ</td>
                <td className="border border-gray-300 px-3 py-2 text-center">△ テンプレ内</td>
                <td className="border border-gray-300 px-3 py-2 text-center">○ ある程度可</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold">
                  ◎ 完全自由
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">回答精度</td>
                <td className="border border-gray-300 px-3 py-2 text-center">△ 定型のみ</td>
                <td className="border border-gray-300 px-3 py-2 text-center">◎ 高い</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold">
                  ◎ 高い
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">解約時のデータ</td>
                <td className="border border-gray-300 px-3 py-2 text-center">✕ 消える</td>
                <td className="border border-gray-300 px-3 py-2 text-center">✕ 消える</td>
                <td className="border border-gray-300 px-3 py-2 text-center bg-orange-50 font-bold">
                  ◎ 自社所有
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold text-sm mb-1">💡 ポイント</p>
          <p className="text-sm mb-0">
            SaaS型は<strong>月額費用がずっとかかり続ける</strong>のに対し、
            自社専用開発は初期費用だけで済みます。
            3年間のトータルで見ると、自社専用開発の方が安くなるケースがほとんどです。
            さらに、解約してもデータとシステムが自社に残ります。
          </p>
        </div>

        {/* セクション3 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          中小企業が選ぶべきはどれ？判断基準
        </h2>

        <p>結論から言うと、以下の基準で選ぶのがおすすめです。</p>

        <div className="space-y-4 my-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">
              🔵 SaaS型（シナリオ型）が向いている場合
            </p>
            <p className="text-sm mb-0">
              FAQが10〜20問程度で、質問パターンが決まっている。
              まずは月1万円以下で試してみたい。
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">
              🔵 SaaS型（AI搭載型）が向いている場合
            </p>
            <p className="text-sm mb-0">
              月間の問い合わせが1,000件以上。自社で開発チームを持つ余裕がない大企業。
              予算が月額10万円以上ある。
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="font-bold text-sm mb-1">
              🟠 自社専用開発が向いている場合
            </p>
            <p className="text-sm mb-0">
              自社の業務に特化したAI対応が必要。
              SaaSの月額費用を払い続けるより、初期投資で長期的にコストを抑えたい。
              データを自社で管理したい。
              <strong>→ 中小企業にはこれが一番おすすめ。</strong>
            </p>
          </div>
        </div>

        {/* セクション4 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          自社専用チャットボットの具体例
        </h2>

        <p>
          NEWHELLOでは、AIエージェント基盤
          <strong>「OpenClaw」</strong>
          を使って、お客様の業務に特化したチャットボットを構築しています。
        </p>

        <h3 className="text-lg font-bold mt-6 mb-3">導入事例イメージ</h3>
        <div className="space-y-3 my-4">
          <div className="bg-white border rounded-lg p-4">
            <p className="font-bold text-sm mb-1">🏥 クリニックの問い合わせ対応</p>
            <p className="text-sm mb-0">
              「診察時間は？」「予約の変更方法は？」などの定型質問をAIが24時間自動返信。
              スタッフは診療に集中できる。
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <p className="font-bold text-sm mb-1">🛒 ECサイトの顧客対応</p>
            <p className="text-sm mb-0">
              「この商品の在庫は？」「返品したい」などの問い合わせをLINEでAIが自動対応。
              深夜・休日の取りこぼしがゼロに。
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <p className="font-bold text-sm mb-1">🏢 社内ヘルプデスク</p>
            <p className="text-sm mb-0">
              「経費精算の方法は？」「Wi-Fiのパスワードは？」などの社内問い合わせをSlackでAIが即回答。
              情シス部門の負担が激減。
            </p>
          </div>
        </div>

        <p>
          いずれも初期費用30万円〜、月額のAPI利用料は数千円程度で運用できます。
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 my-12 text-center">
          <h2 className="text-xl font-bold mb-4">
            「うちの業務にチャットボットって使える？」
            <br />
            まずは無料で相談してみませんか？
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            お問い合わせいただければ、御社の業務内容をヒアリングした上で、
            <br />
            チャットボット導入の費用感と効果を具体的にお伝えします。
          </p>
          <Link
            href="/services#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors no-underline"
          >
            無料で相談する →
          </Link>
        </div>

        {/* まとめ */}
        <h2 className="text-2xl font-bold mt-12 mb-4">まとめ</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <ul className="space-y-2 mb-0 text-sm">
            <li>
              チャットボットの費用は<strong>初期費用・月額費用・オプション費用</strong>の3つで決まる
            </li>
            <li>
              SaaS型は月額が安く見えるが、<strong>3年間のトータルで見ると自社開発の方が安い</strong>ことが多い
            </li>
            <li>
              自社専用開発なら<strong>完全カスタマイズ＋データ自社所有</strong>で長期的にお得
            </li>
            <li>
              中小企業には<strong>「小さく始めて、効果を見てから広げる」</strong>アプローチがおすすめ
            </li>
          </ul>
        </div>
      </div>

      {/* 関連記事 */}
      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-bold mb-4">関連記事</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/ai-cost-comparison"
            className="block p-4 border rounded-lg hover:border-blue-300 transition-colors no-underline text-gray-800"
          >
            <p className="font-medium text-sm mb-1">
              人を雇う vs AIエージェント｜コスト比較
            </p>
            <p className="text-xs text-gray-500 mb-0">
              事務スタッフ採用とAI導入のコストを徹底比較
            </p>
          </Link>
          <Link
            href="/blog/what-is-openclaw"
            className="block p-4 border rounded-lg hover:border-blue-300 transition-colors no-underline text-gray-800"
          >
            <p className="font-medium text-sm mb-1">
              OpenClawとは？ChatGPTとの違い
            </p>
            <p className="text-xs text-gray-500 mb-0">
              AIエージェント基盤OpenClawをわかりやすく解説
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
