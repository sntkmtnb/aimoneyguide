import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
};

export default function TokushohoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>
        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1">販売業者</p>
            <p>篠塚基伸（個人事業）</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">運営責任者</p>
            <p>篠塚基伸</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">所在地</p>
            <p>ご請求いただいた方に遅滞なく開示いたします</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">電話番号</p>
            <p>ご請求いただいた方に遅滞なく開示いたします</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">メールアドレス</p>
            <p>お問い合わせフォームよりご連絡ください</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">販売URL</p>
            <p>https://ai-money-guide.com</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">販売価格</p>
            <p>各サービスページに記載</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>AIアシスタント構築：300,000円（税込）〜</li>
              <li>業務自動化：500,000円（税込）〜</li>
              <li>フルカスタム構築：800,000円（税込）〜</li>
              <li>月額保守サポート：100,000円（税込）/月</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">販売価格以外の必要料金</p>
            <p>サーバー費用（月額約1,000〜5,000円程度）、AI API利用料（月額利用量による）が別途発生する場合があります。事前にお見積もりにてご案内いたします。</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">お支払い方法</p>
            <p>銀行振込</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">お支払い時期</p>
            <p>ご契約後、着手前にお支払いいただきます</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">サービス提供時期</p>
            <p>お支払い確認後、1〜3週間以内（プランにより異なります）</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">返品・キャンセルについて</p>
            <p>
              納品後30日以内に、AIエージェントが仕様通りに動作しない場合は全額返金いたします。
              お客様都合による返品・キャンセルの場合、着手前であれば全額返金、着手後は進捗に応じて協議の上対応いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
