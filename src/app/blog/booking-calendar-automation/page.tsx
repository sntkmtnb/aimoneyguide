import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '予約管理をGoogleカレンダーで自動化する方法｜GAS×フォーム実践ガイド',
  description:
    'Googleフォーム+GAS+Googleカレンダーで予約管理を完全自動化。予約受付→空き確認→カレンダー登録→確認メール送信まで、コード全文付きで解説。',
  openGraph: {
    title: '予約管理をGoogleカレンダーで自動化する方法｜GAS×フォーム実践ガイド',
    description:
      '予約管理を無料で自動化。Googleカレンダー+GASでダブルブッキングも防止。',
    type: 'article',
  },
  keywords: [
    '予約管理 自動化',
    'Googleカレンダー 予約システム',
    'GAS 予約管理',
    '予約フォーム 自動化',
    'Googleフォーム 予約',
    '予約システム 無料',
    '予約 ダブルブッキング 防止',
    'Google カレンダー API GAS',
  ],
};

export default function BookingCalendarAutomationPage() {
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
        <span>予約管理をGoogleカレンダーで自動化</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        予約管理をGoogleカレンダーで自動化する方法
        <br />
        <span className="text-2xl sm:text-3xl">GAS×フォーム実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-medium">
          予約管理
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          予約の電話対応、手帳やExcelでの管理、ダブルブッキングの不安…。
          <strong>予約管理は最もコスパよく自動化できる業務</strong>の一つです。<br />
          この記事では、<strong>Googleフォーム+GAS+Googleカレンダー</strong>だけで
          予約管理を完全自動化する方法を、コード付きで解説します。追加費用ゼロ。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約12分 ｜ 実装時間：約1時間 ｜ 前提：Googleアカウント（無料でOK）
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#why" className="text-primary hover:underline">1. 予約管理の課題と自動化のメリット</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: 予約フォームを作る</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: GASで予約をカレンダーに自動登録</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: ダブルブッキング防止</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: 確認メールの自動送信</a></li>
          <li><a href="#step5" className="text-primary hover:underline">7. Step 5: リマインダーの自動送信</a></li>
          <li><a href="#usecases" className="text-primary hover:underline">8. 業種別カスタマイズ</a></li>
          <li><a href="#cost" className="text-primary hover:underline">9. 運用コスト</a></li>
          <li><a href="#next" className="text-primary hover:underline">10. さらなる発展</a></li>
        </ol>
      </div>

      {/* 1. 予約管理の課題 */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. 予約管理の課題と自動化のメリット
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h3 className="font-bold text-red-700 mb-2">❌ 手動管理の問題</h3>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li>電話対応に1件5〜10分かかる</li>
              <li>ダブルブッキングのリスク</li>
              <li>営業時間外は予約受付できない</li>
              <li>予約台帳の記入ミス</li>
              <li>リマインダーの送り忘れ</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">✅ 自動化のメリット</h3>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li>24時間予約受付</li>
              <li>ダブルブッキングゼロ</li>
              <li>カレンダーに自動登録</li>
              <li>確認メール自動送信</li>
              <li>前日リマインダー自動送信</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-blue-700 mb-3">📊 予約自動化の効果</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-600">80%</span>
              <span className="text-gray-700 text-sm">の予約電話対応が不要に</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-600">0件</span>
              <span className="text-gray-700 text-sm">ダブルブッキング（自動チェック）</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-600">30%</span>
              <span className="text-gray-700 text-sm">の無断キャンセル減少（リマインダー効果）</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 全体像 */}
      <section id="architecture" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. 仕組みの全体像
        </h2>
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre">
{`┌──────────┐  送信   ┌──────────┐  GAS    ┌──────────┐
│ Google   │ ────> │ スプレッド │ ────> │ Google   │
│ フォーム  │       │  シート   │       │カレンダー │
└──────────┘       └──────────┘       └──────────┘
  お客様が入力         予約データ蓄積       自動で予定登録
                        │
                   ┌────┴────┐
                   │  GAS     │
                   │ スクリプト │
                   └────┬────┘
                        │
              ┌─────────┼─────────┐
              ▼         ▼         ▼
         確認メール  リマインダー  ダブルブッキング
          自動送信    前日通知      チェック`}
          </pre>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>使うツールはGoogleだけ。</strong>
          Googleフォーム、スプレッドシート、カレンダー、GAS（Google Apps Script）。
          すべて無料で、追加のサービスへの登録は不要です。
        </p>
      </section>

      {/* 3. Step 1: フォーム作成 */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: 予約フォームを作る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Googleフォームで予約フォームを作り、スプレッドシートに回答を記録します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">Googleフォームを作成</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">forms.google.com</code> → 「空白のフォーム」
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">必要なフィールドを追加</p>
              <p className="text-gray-600 text-sm">以下を推奨:</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h4 className="font-bold text-gray-900 mb-3">推奨フィールド</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">フォームの種類</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">お名前</td>
                  <td className="border border-gray-200 px-3 py-2">記述式（短文）</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">必須</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">メールアドレス</td>
                  <td className="border border-gray-200 px-3 py-2">記述式（短文）</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">必須・確認メール送信先</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">電話番号</td>
                  <td className="border border-gray-200 px-3 py-2">記述式（短文）</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">任意</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">希望日</td>
                  <td className="border border-gray-200 px-3 py-2">日付</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">必須</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">希望時間帯</td>
                  <td className="border border-gray-200 px-3 py-2">プルダウン</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">10:00, 11:00... 等</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">メニュー/内容</td>
                  <td className="border border-gray-200 px-3 py-2">ラジオボタン</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">業種に合わせて</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">備考</td>
                  <td className="border border-gray-200 px-3 py-2">段落（長文）</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500">任意</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <div>
            <p className="font-bold text-gray-900">スプレッドシートにリンク</p>
            <p className="text-gray-600 text-sm">
              フォーム「回答」タブ → スプレッドシートアイコン → 「新しいスプレッドシートを作成」
            </p>
          </div>
        </div>
      </section>

      {/* 4. Step 2: カレンダー自動登録 */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: GASで予約をカレンダーに自動登録
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          フォームが送信されたら、GASが自動でGoogleカレンダーに予定を作成します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// GASスクリプト — カレンダー自動登録</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`// カレンダーIDを設定（自分のカレンダーまたは予約用カレンダー）
const CALENDAR_ID = 'primary'; // または 'xxx@group.calendar.google.com'
const SLOT_DURATION_MIN = 60;  // 1枠の所要時間（分）

/**
 * フォーム送信時に自動実行されるトリガー関数
 */
function onFormSubmit(e) {
  const response = e.namedValues;

  const name     = response['お名前'][0];
  const email    = response['メールアドレス'][0];
  const phone    = response['電話番号'] ? response['電話番号'][0] : '';
  const date     = response['希望日'][0];
  const time     = response['希望時間帯'][0];
  const menu     = response['メニュー'][0];
  const note     = response['備考'] ? response['備考'][0] : '';

  // 日時をパース
  const startTime = parseDateTime(date, time);
  const endTime = new Date(
    startTime.getTime() + SLOT_DURATION_MIN * 60 * 1000
  );

  // ダブルブッキングチェック
  if (isSlotTaken(startTime, endTime)) {
    // 空いていない場合 → お断りメール
    sendDeclineEmail(email, name, date, time);
    markAsDeclined(e.range.getRow());
    return;
  }

  // Googleカレンダーに予定を作成
  const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  const event = calendar.createEvent(
    '【予約】' + name + '様 - ' + menu,
    startTime,
    endTime,
    {
      description: [
        'お名前: ' + name,
        'メール: ' + email,
        '電話: ' + phone,
        'メニュー: ' + menu,
        '備考: ' + note,
      ].join('\\n'),
      location: '',  // 必要なら住所を設定
    }
  );

  // 確認メールを送信
  sendConfirmationEmail(email, name, date, time, menu);

  // スプレッドシートにステータスを記録
  markAsConfirmed(e.range.getRow(), event.getId());
}

/**
 * 日付と時間の文字列をDateオブジェクトに変換
 */
function parseDateTime(dateStr, timeStr) {
  // "2026/02/20" + "14:00" → Date
  const parts = dateStr.split('/');
  const timeParts = timeStr.split(':');
  return new Date(
    parseInt(parts[0]),
    parseInt(parts[1]) - 1,
    parseInt(parts[2]),
    parseInt(timeParts[0]),
    parseInt(timeParts[1]) || 0
  );
}`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>GASの設定手順:</strong>
          </p>
          <ol className="text-gray-600 text-sm mt-2 space-y-1 list-decimal list-inside">
            <li>スプレッドシートを開く → 「拡張機能」→「Apps Script」</li>
            <li>上のコードを貼り付け</li>
            <li>「トリガー」→「トリガーを追加」→ 関数: onFormSubmit / イベント: フォーム送信時</li>
            <li>初回実行時にGoogleカレンダーへのアクセス許可を求められるので「許可」</li>
          </ol>
        </div>
      </section>

      {/* 5. Step 3: ダブルブッキング防止 */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: ダブルブッキング防止
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          予約を登録する前に、<strong>同じ時間帯に既存の予定がないか</strong>をチェックします。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// ダブルブッキングチェック関数</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`/**
 * 指定時間帯にすでに予定があるかチェック
 */
function isSlotTaken(startTime, endTime) {
  const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  const events = calendar.getEvents(startTime, endTime);

  // 「予約」を含むイベントがあればダブルブッキング
  return events.some(
    event => event.getTitle().includes('【予約】')
  );
}

/**
 * 予約不可メールを送信
 */
function sendDeclineEmail(email, name, date, time) {
  const subject = '【ご予約について】' + date + ' ' + time;
  const body = name + '様\\n\\n'
    + 'ご予約のお申し込みありがとうございます。\\n'
    + '大変申し訳ございませんが、ご希望の日時は\\n'
    + '既にご予約が入っております。\\n\\n'
    + '別の日時でのご予約を検討いただけますと幸いです。\\n'
    + 'ご不明な点はお気軽にお問い合わせください。\\n\\n'
    + '-----\\n'
    + 'ご予約フォーム: [フォームURLをここに]';

  MailApp.sendEmail(email, subject, body);
}

/**
 * スプレッドシートにステータスを記録
 */
function markAsConfirmed(row, eventId) {
  const sheet = SpreadsheetApp.getActiveSheet();
  // ステータス列（例: H列）に「確定」と記録
  sheet.getRange(row, 8).setValue('確定');
  sheet.getRange(row, 9).setValue(eventId);
}

function markAsDeclined(row) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(row, 8).setValue('不可（時間重複）');
}`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            ⚠️ <strong>注意:</strong> カレンダーの予定タイトルに「【予約】」を含むものだけをチェックしています。
            プライベートの予定とは区別されるので、同じカレンダーで個人の予定も管理できます。
          </p>
        </div>
      </section>

      {/* 6. Step 4: 確認メール */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: 確認メールの自動送信
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          予約が確定したら、お客様に確認メールを自動送信します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// 確認メール送信関数</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`function sendConfirmationEmail(email, name, date, time, menu) {
  const subject = '【予約確定】' + date + ' ' + time + ' のご予約';

  const body = name + '様\\n\\n'
    + 'ご予約ありがとうございます！\\n'
    + '以下の内容で予約を確定いたしました。\\n\\n'
    + '━━━━━━━━━━━━━━━━━━━━\\n'
    + '📅 日時: ' + date + ' ' + time + '\\n'
    + '📋 内容: ' + menu + '\\n'
    + '━━━━━━━━━━━━━━━━━━━━\\n\\n'
    + '■ キャンセルについて\\n'
    + '前日の18:00までにご連絡ください。\\n'
    + '当日キャンセルはキャンセル料が\\n'
    + '発生する場合があります。\\n\\n'
    + '■ アクセス\\n'
    + '東京都○○区○○ 1-2-3\\n'
    + '○○駅 徒歩5分\\n\\n'
    + 'ご不明な点はお気軽にご連絡ください。\\n'
    + 'お会いできることを楽しみにしております！\\n\\n'
    + '-----\\n'
    + '○○（店舗名）\\n'
    + 'TEL: 03-XXXX-XXXX';

  MailApp.sendEmail(email, subject, body);
}`}
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>GASのMailApp:</strong> Googleアカウントのメールアドレスから直接送信されます。
            1日100通まで（Google Workspace の場合は1,500通）送信可能。
            予約管理には十分な量です。
          </p>
        </div>
      </section>

      {/* 7. Step 5: リマインダー */}
      <section id="step5" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Step 5: リマインダーの自動送信
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          予約の前日にリマインダーメールを自動送信。無断キャンセルを<strong>最大30%削減</strong>できます。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// リマインダー送信（毎日18時に実行）</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`/**
 * 翌日の予約にリマインダーを送信
 * トリガー: 時間ベース → 毎日18時
 */
function sendReminders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = Utilities.formatDate(
    tomorrow, 'Asia/Tokyo', 'yyyy/MM/dd'
  );

  // ヘッダー行をスキップ（i=1から）
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const date = row[3];   // 希望日（D列）
    const status = row[7]; // ステータス（H列）

    if (status !== '確定') continue;

    // 日付を比較
    const dateStr = Utilities.formatDate(
      new Date(date), 'Asia/Tokyo', 'yyyy/MM/dd'
    );
    if (dateStr !== tomorrowStr) continue;

    const name  = row[0];  // お名前
    const email = row[1];  // メール
    const time  = row[4];  // 時間
    const menu  = row[5];  // メニュー

    const subject = '【明日のご予約リマインダー】'
                  + tomorrowStr + ' ' + time;
    const body = name + '様\\n\\n'
      + '明日のご予約のリマインダーです。\\n\\n'
      + '📅 日時: ' + tomorrowStr + ' ' + time + '\\n'
      + '📋 内容: ' + menu + '\\n\\n'
      + 'お会いできることを楽しみにしております！\\n\\n'
      + '※ キャンセルの場合は本日18:00まで'
      + 'にご連絡ください。';

    MailApp.sendEmail(email, subject, body);

    // リマインダー送信済みフラグ
    sheet.getRange(i + 1, 10).setValue('リマインダー送信済み');
  }
}`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>トリガー設定:</strong> GASの「トリガー」→「トリガーを追加」→
            関数: sendReminders / 時間ベース / 毎日 / 午後6時〜7時。
            これで毎日自動実行されます。
          </p>
        </div>
      </section>

      {/* 8. 業種別カスタマイズ */}
      <section id="usecases" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. 業種別カスタマイズ
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">💇 美容室・ネイルサロン</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>メニュー: カット / カラー / パーマ / ネイル等を選択式に</li>
              <li>所要時間: メニューごとに異なる（カット60分、カラー120分等）</li>
              <li>担当者指名: スタッフ名を選択肢に追加、カレンダーを分ける</li>
              <li>LINE連携: 確認・リマインダーをLINEで送信（開封率UP）</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🏥 クリニック・歯科</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>診療科目: 内科 / 皮膚科 / 歯科検診等を選択式に</li>
              <li>初診/再診: 初診は問診票フォームへの誘導を追加</li>
              <li>保険証: 確認メールに「保険証をお持ちください」を記載</li>
              <li>枠制限: 1時間あたりの予約上限を設定（医師の対応可能数）</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🍽️ 飲食店・レストラン</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>人数: 1名〜の選択肢。大人数はお電話でと案内</li>
              <li>コース: ランチ / ディナー / コース料理の選択</li>
              <li>アレルギー: 備考欄でアレルギー情報を事前収集</li>
              <li>席種: カウンター / テーブル / 個室の希望</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🏋️ ジム・スタジオ・教室</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>レッスン: ヨガ / ピラティス / パーソナルトレーニング等</li>
              <li>定員管理: 1枠あたりの定員をチェック（グループレッスン向け）</li>
              <li>回数券: 残り回数をスプレッドシートで管理</li>
              <li>インストラクター: 担当者別のカレンダーで管理</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. 運用コスト
        </h2>
        <div className="bg-green-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">月間100件の予約を処理した場合:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Googleフォーム</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Googleスプレッドシート</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Googleカレンダー</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">GAS（スクリプト実行）</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">メール送信（MailApp）</span>
              <span className="font-bold text-gray-900">¥0（1日100通まで）</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-bold text-lg">合計</span>
              <span className="text-4xl font-bold text-green-600">¥0/月</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 比較: 予約管理SaaS vs 自作</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">予約SaaS<br />(STORES予約等)</p>
              <p className="text-2xl font-bold text-red-600">¥8,000〜/月</p>
              <p className="text-gray-400 text-xs">月額固定費</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">電話受付<br />(パートスタッフ)</p>
              <p className="text-2xl font-bold text-red-600">¥60,000/月</p>
              <p className="text-gray-400 text-xs">時給1,200円×2.5h×20日</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">Google<br />自動化（本記事）</p>
              <p className="text-2xl font-bold text-green-600">¥0/月</p>
              <p className="text-gray-400 text-xs">24時間自動受付</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. 発展 */}
      <section id="next" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. さらなる発展
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🤖 AI応答との組み合わせ</h3>
            <p className="text-gray-600 text-sm">
              <Link href="/blog/line-ai-chatbot" className="text-primary underline">LINE AI自動応答</Link>と組み合わせれば、
              LINEで「予約したい」と言われたらAIがヒアリング → Googleカレンダーに自動登録まで完全自動化。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📱 Webサイトへの埋め込み</h3>
            <p className="text-gray-600 text-sm">
              Googleフォームをiframeでサイトに埋め込み。もしくはNext.jsで独自フォームを作り、
              GAS Web Appに送信する方法も。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📊 予約分析ダッシュボード</h3>
            <p className="text-gray-600 text-sm">
              スプレッドシートに蓄積されたデータから、曜日別・時間帯別の予約傾向を分析。
              Googleデータポータルで可視化すれば、空き枠の最適化に活用できます。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🔄 キャンセル待ち機能</h3>
            <p className="text-gray-600 text-sm">
              満枠の時間帯にキャンセル待ちリストを作成。キャンセルが出たら
              自動でキャンセル待ちの方にメール通知。機会損失を最小限に。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          まとめ
        </h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">Googleフォーム+GAS+カレンダーで<strong>予約管理を完全自動化</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">ダブルブッキング<strong>自動チェック</strong>で安心</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">確認メール＋前日リマインダーを<strong>自動送信</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">美容室・クリニック・飲食店・教室など<strong>あらゆる業種に対応</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">運用コストは<strong>完全無料</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「予約管理の自動化を導入したい」
        </h2>
        <p className="text-gray-600 mb-6">
          フォーム設計から、LINE連携、AI応答の追加まで、
          あなたのビジネスに最適な予約システムをご提案します。
        </p>
        <Link
          href="/services#contact"
          className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          無料で相談する →
        </Link>
      </section>

      {/* 関連記事 */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-4">📚 関連記事</h2>
        <div className="space-y-3">
          <Link
            href="/blog/line-ai-chatbot"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">LINE公式アカウントにAI自動応答を導入する方法</p>
            <p className="text-gray-500 text-xs mt-1">LINE×AI連携で24時間自動対応</p>
          </Link>
          <Link
            href="/blog/gas-gemini-automation"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">Google Workspace×AIで業務を自動化する方法</p>
            <p className="text-gray-500 text-xs mt-1">GAS+Gemini APIで業務自動化する具体例</p>
          </Link>
          <Link
            href="/blog/contact-form-discord"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">問い合わせフォーム→Discord自動通知の作り方</p>
            <p className="text-gray-500 text-xs mt-1">Webhook連携の基本をマスター</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
