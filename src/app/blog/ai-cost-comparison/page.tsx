import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '人を雇う vs AIエージェント｜中小企業が知るべきコスト比較',
  description:
    '事務スタッフを雇う場合とAIエージェントを導入する場合のコストを徹底比較。月額費用、導入スピード、対応品質の違いを解説。中小企業の業務自動化に最適な選択肢とは。',
  openGraph: {
    title: '人を雇う vs AIエージェント｜中小企業が知るべきコスト比較',
    description:
      '事務スタッフ採用とAIエージェント導入のコストを徹底比較。中小企業の業務自動化に最適な選択肢を解説。',
    type: 'article',
  },
  keywords: ['AI 業務自動化 コスト', 'AIエージェント 費用', 'AI導入 中小企業', '業務自動化 比較', '人件費 削減 AI'],
};

export default function AiCostComparisonPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/services" className="hover:text-primary">
          トップ
        </Link>
        <span className="mx-2">›</span>
        <Link href="/blog/openclaw-guide" className="hover:text-primary">
          ブログ
        </Link>
        <span className="mx-2">›</span>
        <span>コスト比較</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
        人を雇う vs AIエージェント
        <br />
        <span className="text-primary">中小企業が知るべきコスト比較</span>
      </h1>

      <p className="text-gray-500 text-sm mb-8">2026年2月13日 · NEWHELLO</p>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {/* 導入 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          「人が足りない」は、もう採用だけでは解決できない
        </h2>
        <p>
          帝国データバンクの調査によると、2025年時点で<strong>中小企業の約7割が「人手不足」</strong>を感じています。
          特に事務・カスタマーサポート・データ入力などの定型業務は、採用しても定着率が低く、教育コストもかさみます。
        </p>
        <p>
          「もう一人雇いたいけど、コストが合わない」——そう感じている経営者の方に、
          もう一つの選択肢として<strong>AIエージェントの導入</strong>を提案します。
        </p>
        <p>
          この記事では、事務スタッフを1名採用する場合と、AIエージェントを導入する場合の
          コストを具体的な数字で比較します。
        </p>

        {/* セクション2: 人を雇うコスト */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          事務スタッフを1名雇う場合のコスト
        </h2>
        <p>
          正社員を1名採用する場合、給与以外にも多くのコストが発生します。
          意外と見落としがちな「隠れコスト」を含めて整理しましょう。
        </p>

        {/* コスト表1 */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">項目</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">月額（目安）</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">年額</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">基本給</td>
                <td className="px-4 py-3 text-right">22万円</td>
                <td className="px-4 py-3 text-right">264万円</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">社会保険料（会社負担分）</td>
                <td className="px-4 py-3 text-right">3.3万円</td>
                <td className="px-4 py-3 text-right">39.6万円</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">通勤手当</td>
                <td className="px-4 py-3 text-right">1.5万円</td>
                <td className="px-4 py-3 text-right">18万円</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">採用コスト（求人広告・面接等）</td>
                <td className="px-4 py-3 text-right">—</td>
                <td className="px-4 py-3 text-right">30〜50万円</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">教育・研修コスト</td>
                <td className="px-4 py-3 text-right">—</td>
                <td className="px-4 py-3 text-right">10〜20万円</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">備品（PC・デスク等）</td>
                <td className="px-4 py-3 text-right">—</td>
                <td className="px-4 py-3 text-right">10〜15万円</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">退職リスク（再採用コスト）</td>
                <td className="px-4 py-3 text-right">—</td>
                <td className="px-4 py-3 text-right">30〜50万円</td>
              </tr>
              <tr className="bg-primary/5 font-bold">
                <td className="px-4 py-3">合計</td>
                <td className="px-4 py-3 text-right">約28万円/月</td>
                <td className="px-4 py-3 text-right">約400〜460万円</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          給与22万円のスタッフでも、実際の総コストは<strong>月28万円、年間400万円以上</strong>になります。
          さらに、採用して戦力になるまで<strong>最低3ヶ月</strong>はかかり、
          1年以内に退職するリスクも考慮すると、実質的なコストはさらに高くなります。
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r-lg">
          <p className="text-amber-800 font-semibold mb-1">⚠️ 見落としがちなリスク</p>
          <p className="text-amber-700 text-sm">
            事務スタッフの平均離職率は約15%。1年以内に退職した場合、
            採用・教育コスト（40〜70万円）が丸ごと無駄になります。
          </p>
        </div>

        {/* セクション3: AIエージェントのコスト */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          AIエージェントを導入する場合のコスト
        </h2>
        <p>
          AIエージェント（OpenClaw等）を使った業務自動化の場合、
          コスト構造は大きく異なります。
        </p>

        {/* コスト表2 */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">項目</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">金額</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">初期構築費（1回のみ）</td>
                <td className="px-4 py-3 text-right">30〜80万円</td>
                <td className="px-4 py-3 text-gray-500">業務数・複雑度による</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">月額保守費</td>
                <td className="px-4 py-3 text-right">5〜10万円/月</td>
                <td className="px-4 py-3 text-gray-500">動作監視・調整・改善</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">サーバー費用</td>
                <td className="px-4 py-3 text-right">0.3〜0.5万円/月</td>
                <td className="px-4 py-3 text-gray-500">クラウドVPS</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">AI API利用料</td>
                <td className="px-4 py-3 text-right">0.5〜3万円/月</td>
                <td className="px-4 py-3 text-gray-500">利用量による</td>
              </tr>
              <tr className="bg-primary/5 font-bold">
                <td className="px-4 py-3">年間合計（初年度）</td>
                <td className="px-4 py-3 text-right">約100〜240万円</td>
                <td className="px-4 py-3 text-gray-500">2年目〜は70〜160万円</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          初期構築費はかかりますが、<strong>年間コストは人を雇う場合の1/2〜1/4</strong>です。
          しかも2年目以降は構築費がなくなるため、さらにコストが下がります。
        </p>

        {/* セクション4: 比較表 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          徹底比較：人 vs AIエージェント
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">比較項目</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-900 border-b">👤 事務スタッフ</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-900 border-b">🤖 AIエージェント</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">年間コスト</td>
                <td className="px-4 py-3 text-center">400〜460万円</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">100〜240万円</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">稼働時間</td>
                <td className="px-4 py-3 text-center">1日8時間</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">24時間365日</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">導入スピード</td>
                <td className="px-4 py-3 text-center">1〜3ヶ月</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">1〜4週間</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">教育・研修</td>
                <td className="px-4 py-3 text-center">必要（3ヶ月〜）</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">不要</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">品質のばらつき</td>
                <td className="px-4 py-3 text-center">体調・モチベに依存</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">常に一定</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">退職リスク</td>
                <td className="px-4 py-3 text-center">あり</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">なし</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">複雑な判断</td>
                <td className="px-4 py-3 text-center text-green-600 font-semibold">得意</td>
                <td className="px-4 py-3 text-center">苦手（人の監視が必要）</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">感情・共感</td>
                <td className="px-4 py-3 text-center text-green-600 font-semibold">できる</td>
                <td className="px-4 py-3 text-center">限定的</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">スケーラビリティ</td>
                <td className="px-4 py-3 text-center">追加採用が必要</td>
                <td className="px-4 py-3 text-center text-primary font-semibold">設定変更だけ</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* セクション5: どんな業務がAI向きか */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          どんな業務がAIに向いている？
        </h2>
        <p>
          すべての業務をAIに任せるべきではありません。
          <strong>「繰り返し」「ルール化できる」「大量処理」</strong>の3条件を満たす業務がAI向きです。
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-800 mb-3">✅ AIが得意な業務</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>📧 メールの一次対応・振り分け</li>
              <li>📊 データ入力・集計・レポート作成</li>
              <li>💬 LINEやチャットの定型問い合わせ対応</li>
              <li>📱 SNSの定期投稿</li>
              <li>📅 予約管理・スケジュール調整</li>
              <li>🔔 在庫アラート・通知の自動送信</li>
              <li>📄 請求書・見積書の自動生成</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">👤 人が向いている業務</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>🤝 クレーム対応（感情的な判断が必要）</li>
              <li>💡 企画・戦略立案</li>
              <li>🗣️ 対面の営業・商談</li>
              <li>🎨 クリエイティブな判断</li>
              <li>⚖️ 法務・コンプライアンス判断</li>
              <li>👥 チームマネジメント</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            💡 ベストプラクティス：人とAIの「ハイブリッド運用」
          </h3>
          <p className="text-gray-700 text-sm">
            最も効果的なのは、AIに定型業務を任せて、人間は「人にしかできない仕事」に集中すること。
            例えば、問い合わせの80%はAIが自動対応し、残り20%の複雑なケースだけ人が対応する。
            これだけで<strong>対応時間を5分の1</strong>に減らせます。
          </p>
        </div>

        {/* セクション6: 具体的なシミュレーション */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          3年間のコストシミュレーション
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">期間</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">👤 事務スタッフ</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">🤖 AIエージェント</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900 border-b">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">1年目</td>
                <td className="px-4 py-3 text-right">430万円</td>
                <td className="px-4 py-3 text-right">170万円</td>
                <td className="px-4 py-3 text-right text-primary font-semibold">▲260万円</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3">2年目</td>
                <td className="px-4 py-3 text-right">860万円</td>
                <td className="px-4 py-3 text-right">290万円</td>
                <td className="px-4 py-3 text-right text-primary font-semibold">▲570万円</td>
              </tr>
              <tr className="bg-primary/5 font-bold">
                <td className="px-4 py-3">3年目</td>
                <td className="px-4 py-3 text-right">1,290万円</td>
                <td className="px-4 py-3 text-right">410万円</td>
                <td className="px-4 py-3 text-right text-primary">▲880万円</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          3年間で<strong>約880万円の差</strong>。しかもAIエージェントは24時間稼働で、退職もしません。
          長く使うほど、コスト面でのメリットは大きくなります。
        </p>

        {/* セクション7: 導入の不安を解消 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          「でも、AIって難しくない？」への回答
        </h2>

        <div className="space-y-4 my-8">
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. 技術的な知識が必要では？</p>
            <p className="text-gray-600 text-sm">
              A. 一切不要です。「こんな作業を自動化したい」と伝えていただければ、設計から構築・テスト・納品まですべて対応します。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. AIが間違えたらどうする？</p>
            <p className="text-gray-600 text-sm">
              A. 重要な判断は人間が確認するフローを組み込みます。AIが自動処理する範囲と、人が確認する範囲を事前に設計します。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. 導入後のサポートは？</p>
            <p className="text-gray-600 text-sm">
              A. 月額保守プランで、動作監視・調整・改善を継続的に行います。「作って終わり」ではありません。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-1">Q. 小さく始められる？</p>
            <p className="text-gray-600 text-sm">
              A. はい。まずは1つの業務（例：メール対応だけ）から始めて、効果を確認してから拡張できます。
            </p>
          </div>
        </div>

        {/* まとめ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          まとめ：まずは「1つの業務」から試してみませんか？
        </h2>
        <p>
          人を雇うことが悪いわけではありません。でも、
          <strong>「繰り返しの定型業務」に年間400万円以上払い続ける</strong>のは、本当にベストな選択でしょうか？
        </p>
        <p>
          AIエージェントなら、同じ業務を<strong>1/3のコストで、24時間、ミスなく</strong>処理できます。
          浮いたコストと時間で、人間にしかできない仕事に集中する。
          それが、中小企業の新しい働き方です。
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-3">
            まずは無料相談から
          </h3>
          <p className="mb-6 opacity-90">
            「うちの業務でもAI化できる？」<br />
            そんな疑問にお答えします。お気軽にどうぞ。
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
          <Link
            href="/blog/openclaw-guide"
            className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
          >
            <p className="font-semibold text-gray-900">
              OpenClawで業務自動化する方法｜技術知識ゼロでもできる完全ガイド
            </p>
            <p className="text-sm text-gray-500 mt-1">
              具体的な導入手順と活用事例を解説
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
