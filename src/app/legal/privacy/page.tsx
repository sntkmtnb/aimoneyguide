import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>AI Money Guide（以下「当サービス」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。</p>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">1. 収集する情報</h2>
            <p>当サービスでは、以下の情報をお客様からご提供いただく場合があります。</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>お問い合わせ内容</li>
              <li>サービス提供に必要な業務情報（ツールのアカウント連携情報等）</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">2. 情報の利用目的</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>サービスの提供・運営</li>
              <li>お問い合わせへの対応</li>
              <li>サービス改善のための分析</li>
              <li>重要なお知らせの送付</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">3. 情報の管理</h2>
            <p>
              お客様の個人情報は、SSL暗号化通信により保護されます。
              お預かりしたデータは厳重に管理し、不正アクセス、紛失、漏洩の防止に努めます。
              サービス提供に必要な範囲を超えてデータを保持することはありません。
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">4. 第三者への提供</h2>
            <p>
              お客様の個人情報を、以下の場合を除き第三者に提供することはありません。
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>サービス提供に必要な外部ツール（AI API等）との連携に必要な場合</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">5. 秘密保持契約（NDA）</h2>
            <p>
              ご希望のお客様とは、秘密保持契約（NDA）を締結いたします。
              お気軽にお申し付けください。
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">6. Cookieの使用</h2>
            <p>
              当サイトでは、Google Analyticsを使用してアクセス状況を分析しています。
              Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることができます。
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">7. ポリシーの変更</h2>
            <p>
              本ポリシーの内容は、必要に応じて変更することがあります。
              変更後のポリシーは、当サイトに掲載した時点で効力を生じます。
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">8. お問い合わせ</h2>
            <p>
              プライバシーに関するお問い合わせは、
              <a href="/services#contact" className="text-blue-600 hover:underline">お問い合わせフォーム</a>
              よりお願いいたします。
            </p>
          </div>

          <p className="text-gray-400 text-xs mt-8">制定日：2026年2月12日</p>
        </div>
      </div>
    </div>
  );
}
