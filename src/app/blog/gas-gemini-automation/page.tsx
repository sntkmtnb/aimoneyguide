import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google Workspace×AIで業務を自動化する方法｜GAS+Gemini活用ガイド',
  description:
    'Google Apps Script（GAS）とGemini APIを組み合わせて業務を自動化する方法を解説。メール自動返信、スプレッドシート自動集計、承認フロー自動化の具体例付き。',
  openGraph: {
    title: 'Google Workspace×AIで業務を自動化する方法｜GAS+Gemini活用ガイド',
    description:
      'GAS+Gemini APIで業務自動化。メール返信、データ集計、承認フローの自動化を具体例付きで解説。',
    type: 'article',
  },
  keywords: [
    'GAS 業務自動化',
    'Google Workspace AI',
    'Gemini API GAS',
    'Google Apps Script 活用',
    'スプレッドシート 自動化',
    'メール 自動返信 AI',
    '業務効率化 Google',
  ],
};

export default function GasGeminiAutomationPage() {
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
        <span>GAS+Gemini活用ガイド</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        Google Workspace×AIで業務を自動化する方法
        <br />
        <span className="text-2xl sm:text-3xl">GAS+Gemini活用ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-15">2026.02.15</time>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
          活用ガイド
        </span>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* リード文 */}
        <p className="text-lg leading-relaxed">
          Google Workspaceを使っているのに、まだ手作業でメール返信やデータ転記をしていませんか？
        </p>
        <p>
          <strong>Google Apps Script（GAS）</strong>と<strong>Gemini API</strong>
          を組み合わせれば、これまで人間がやっていたルーチンワークの大部分を自動化できます。
          しかも追加費用はほぼゼロ。Google Workspaceを契約しているなら、今すぐ始められます。
        </p>
        <p className="text-sm text-gray-500">
          ※この記事は、AI業務自動化の構築支援を行うNEWHELLOが執筆しています。
        </p>

        {/* 目次 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
          <p className="font-bold text-base mb-3">📋 この記事でわかること</p>
          <ul className="text-sm space-y-1 mb-0">
            <li>GAS+AIでどんな業務が自動化できるか</li>
            <li>5つの具体的な自動化パターンと効果</li>
            <li>自分でやる場合 vs 外注する場合の判断基準</li>
            <li>導入時の注意点とセキュリティ対策</li>
          </ul>
        </div>

        {/* セクション1 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          GAS×Gemini APIで何ができる？
        </h2>

        <p>
          GAS（Google Apps Script）は、Google Workspaceの各サービスを
          プログラムで操作できる無料のツールです。スプレッドシート、Gmail、
          カレンダー、ドライブなど、すべてをつなげて自動処理できます。
        </p>
        <p>
          ここに<strong>Gemini API</strong>（GoogleのAI）を組み合わせると、
          単純な自動化だけでなく、<strong>「考える」処理</strong>も自動化できるようになります。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">GASだけでできること</th>
                <th className="border border-gray-300 px-4 py-2 text-left">GAS+AIでできること</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  データの転記・集計
                </td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  データの<strong>分析・要約</strong>まで自動化
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  定型メールの自動送信
                </td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  内容に合わせた<strong>返信文の自動生成</strong>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  フォーム回答の通知
                </td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  回答内容の<strong>自動分類・優先度判定</strong>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  ファイルの整理・移動
                </td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  ファイル内容を読んで<strong>自動タグ付け</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          つまり、GASが「手足」、AIが「頭脳」の役割を果たします。
          この組み合わせで、<strong>今まで人間にしかできなかった判断を含む業務</strong>
          まで自動化できるようになります。
        </p>

        {/* セクション2 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          すぐに使える5つの自動化パターン
        </h2>

        {/* パターン1 */}
        <div className="bg-white border rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            メール自動返信（AI下書き生成）
          </h3>
          <p className="text-sm mb-2">
            <strong>課題:</strong> 問い合わせメールに1通ずつ返信を書くのに時間がかかる
          </p>
          <p className="text-sm mb-2">
            <strong>自動化の仕組み:</strong>
          </p>
          <ol className="text-sm space-y-1">
            <li>Gmailに問い合わせメールが届く</li>
            <li>GASがメール本文をGemini APIに送信</li>
            <li>AIが内容を理解し、適切な返信文を生成</li>
            <li>下書きとしてGmailに保存（人間が確認して送信）</li>
          </ol>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm mb-0">
              <strong>✅ 効果:</strong> 返信作成時間が1通10分→1分に短縮。1日20通なら<strong>月間60時間の削減</strong>。
            </p>
          </div>
        </div>

        {/* パターン2 */}
        <div className="bg-white border rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            スプレッドシート自動集計+レポート生成
          </h3>
          <p className="text-sm mb-2">
            <strong>課題:</strong> 毎週月曜に各部門のデータを集めて週次レポートを作るのが大変
          </p>
          <p className="text-sm mb-2">
            <strong>自動化の仕組み:</strong>
          </p>
          <ol className="text-sm space-y-1">
            <li>GASが毎週月曜朝7時に自動実行（時間トリガー）</li>
            <li>各部門のスプレッドシートからデータを収集</li>
            <li>集計してグラフを自動生成</li>
            <li>AIがデータの傾向を分析し、コメントを自動追加</li>
            <li>完成したレポートをメールで関係者に自動送信</li>
          </ol>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm mb-0">
              <strong>✅ 効果:</strong> レポート作成2時間→0分（完全自動）。月曜朝にはもう完成している。
            </p>
          </div>
        </div>

        {/* パターン3 */}
        <div className="bg-white border rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            問い合わせ内容の自動分類+振り分け
          </h3>
          <p className="text-sm mb-2">
            <strong>課題:</strong> Googleフォームの問い合わせを手動で読んで、担当部門に振り分けている
          </p>
          <p className="text-sm mb-2">
            <strong>自動化の仕組み:</strong>
          </p>
          <ol className="text-sm space-y-1">
            <li>フォームに回答が送信される</li>
            <li>GASが回答内容をAIに送信</li>
            <li>AIが「技術的な質問」「料金の質問」「クレーム」などに自動分類</li>
            <li>分類結果に応じて担当者にメール通知+スプレッドシートに記録</li>
          </ol>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm mb-0">
              <strong>✅ 効果:</strong> 振り分け作業が即時完了。対応漏れゼロ。クレームは即座にアラート。
            </p>
          </div>
        </div>

        {/* パターン4 */}
        <div className="bg-white border rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            社内申請・承認フローの自動化
          </h3>
          <p className="text-sm mb-2">
            <strong>課題:</strong> 経費精算や休暇申請がメールベースで、承認状況が把握しにくい
          </p>
          <p className="text-sm mb-2">
            <strong>自動化の仕組み:</strong>
          </p>
          <ol className="text-sm space-y-1">
            <li>Googleフォームで申請を受付</li>
            <li>GASが申請内容をスプレッドシートに記録</li>
            <li>承認者にメール通知（ワンクリック承認ボタン付き）</li>
            <li>承認/却下の結果を申請者に自動通知</li>
            <li>月次で承認履歴を自動集計</li>
          </ol>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm mb-0">
              <strong>✅ 効果:</strong> 紙やメールでのやり取りが不要に。スマホで完結。承認履歴も自動保存。
            </p>
          </div>
        </div>

        {/* パターン5 */}
        <div className="bg-white border rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            議事録の自動要約+タスク抽出
          </h3>
          <p className="text-sm mb-2">
            <strong>課題:</strong> 会議の議事録をGoogleドキュメントに書くが、要約やタスク整理に時間がかかる
          </p>
          <p className="text-sm mb-2">
            <strong>自動化の仕組み:</strong>
          </p>
          <ol className="text-sm space-y-1">
            <li>会議後、議事録をGoogleドキュメントに記録</li>
            <li>GASがドキュメントの内容をAIに送信</li>
            <li>AIが「要約」「決定事項」「次のタスク」を自動抽出</li>
            <li>タスクをGoogleカレンダーに自動登録+担当者にメール通知</li>
          </ol>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm mb-0">
              <strong>✅ 効果:</strong> 議事録整理30分→3分。タスクの抜け漏れ防止。参加者全員が即座に確認可能。
            </p>
          </div>
        </div>

        {/* セクション3 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          自分でやる？外注する？判断基準
        </h2>

        <p>
          GASは無料で使えるので、プログラミング経験がある方なら自分で構築できます。
          ただし、AI連携やセキュリティ設定を含む本格的な自動化は、専門知識が必要です。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">比較項目</th>
                <th className="border border-gray-300 px-4 py-2 text-center">自分でやる</th>
                <th className="border border-gray-300 px-4 py-2 text-center">外注する</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">費用</td>
                <td className="border border-gray-300 px-4 py-2 text-center">無料（自分の時間）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">10〜50万円</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">必要なスキル</td>
                <td className="border border-gray-300 px-4 py-2 text-center">JavaScript基礎+API知識</td>
                <td className="border border-gray-300 px-4 py-2 text-center">不要</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">構築期間</td>
                <td className="border border-gray-300 px-4 py-2 text-center">数週間〜数ヶ月</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1〜2週間</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">AI連携の難易度</td>
                <td className="border border-gray-300 px-4 py-2 text-center">高い（API設計が必要）</td>
                <td className="border border-gray-300 px-4 py-2 text-center">お任せ</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">保守・改善</td>
                <td className="border border-gray-300 px-4 py-2 text-center">自分で対応</td>
                <td className="border border-gray-300 px-4 py-2 text-center">依頼可能</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold text-sm mb-1">💡 判断のポイント</p>
          <p className="text-sm mb-0">
            「メール通知を1つ自動化したい」程度なら自分でOK。
            <strong>複数の業務をまとめて自動化したい、AI連携もしたい</strong>
            という場合は、外注した方が圧倒的に速いです。
            構築に数ヶ月かけるより、専門家に1-2週間で作ってもらった方が、
            その分の時間で本業に集中できます。
          </p>
        </div>

        {/* セクション4 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          導入時の注意点
        </h2>

        <div className="space-y-4 my-6">
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">⚠️ セキュリティ・権限管理</p>
            <p className="text-sm mb-0">
              GASはGoogle Workspaceのデータにアクセスするため、権限設定が重要です。
              誰がどのデータにアクセスできるかを明確にし、
              管理者がコントロールできる状態を維持しましょう。
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">⚠️ AI出力の検証</p>
            <p className="text-sm mb-0">
              AIの生成する文章は100%正確とは限りません。
              特にメール返信の自動化は、<strong>最初は「下書き」として保存→人間が確認</strong>
              の運用がおすすめです。精度が安定してから完全自動化に切り替えましょう。
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">⚠️ GASの実行制限</p>
            <p className="text-sm mb-0">
              GASには1日の実行時間や回数に制限があります（無料版: 6分/回、90分/日）。
              大量のデータ処理が必要な場合は、処理を分割するなどの工夫が必要です。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-12 text-center">
          <h2 className="text-xl font-bold mb-4">
            「Google Workspaceの自動化、やってみたいけど自分では難しそう」
            <br />
            そんな方はNEWHELLOにお任せください
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            ヒアリングから実装まで、伴走しながら進めます。
            <br />
            まずは「何が自動化できるか」の洗い出しから始めましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/services#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors no-underline"
            >
              無料で相談する →
            </Link>
            <Link
              href="/blog/chatbot-cost"
              className="inline-block text-sm text-gray-500 hover:text-gray-700 no-underline"
            >
              費用の目安を見る →
            </Link>
          </div>
        </div>

        {/* まとめ */}
        <h2 className="text-2xl font-bold mt-12 mb-4">まとめ</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <ul className="space-y-2 mb-0 text-sm">
            <li>
              GASは<strong>Google Workspaceユーザーなら無料</strong>で使える自動化ツール
            </li>
            <li>
              Gemini APIと組み合わせれば、<strong>判断を含む業務</strong>まで自動化可能
            </li>
            <li>
              メール返信、レポート生成、問い合わせ振り分け、承認フロー、議事録要約の<strong>5パターン</strong>がすぐに使える
            </li>
            <li>
              簡単な自動化は自分で、<strong>AI連携を含む本格的な自動化は外注</strong>が効率的
            </li>
            <li>
              セキュリティ・権限管理とAI出力の検証は必ず行う
            </li>
          </ul>
        </div>
      </div>

      {/* 関連記事 */}
      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-bold mb-4">関連記事</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/chatbot-cost"
            className="block p-4 border rounded-lg hover:border-blue-300 transition-colors no-underline text-gray-800"
          >
            <p className="font-medium text-sm mb-1">
              チャットボット導入費用の相場
            </p>
            <p className="text-xs text-gray-500 mb-0">
              SaaS vs 自社開発、結局どっちが安い？
            </p>
          </Link>
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
        </div>
      </div>
    </article>
  );
}
