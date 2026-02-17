import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '問い合わせフォーム→Discord自動通知の作り方｜Next.js×Webhook実践ガイド',
  description:
    'Next.jsの問い合わせフォームからDiscord Webhookで自動通知する仕組みを実装。コード全文＋設定手順付きで、コピペで動く実践ガイド。',
  openGraph: {
    title: '問い合わせフォーム→Discord自動通知の作り方｜Next.js×Webhook実践ガイド',
    description:
      '問い合わせが来たら即Discordに通知。Next.js+Webhook連携をコード付きで解説。',
    type: 'article',
  },
  keywords: [
    '問い合わせフォーム Discord通知',
    'Discord Webhook 問い合わせ',
    'Next.js お問い合わせフォーム',
    'フォーム 自動通知',
    'Discord Webhook 使い方',
    'Webhook 問い合わせ 自動化',
    'Next.js API Route',
    'お問い合わせ 業務効率化',
  ],
};

export default function ContactFormDiscordPage() {
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
        <span>問い合わせフォーム→Discord自動通知</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        問い合わせフォーム→Discord自動通知の作り方
        <br />
        <span className="text-2xl sm:text-3xl">Next.js×Webhook実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-medium">
          ハンズオン
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          「お問い合わせが来たのに気づかなかった…」そんな経験はありませんか？<br />
          この記事では、<strong>Webサイトの問い合わせフォームからDiscordに自動通知する仕組み</strong>を、
          実際のコード付きで解説します。メール通知だと埋もれがちな問い合わせも、
          Discordならチーム全員がリアルタイムで確認できます。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約10分 ｜ 実装時間：約30分
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#why" className="text-primary hover:underline">1. なぜDiscord通知なのか？</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: Discord Webhookを作る</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: お問い合わせフォームを作る</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: API Routeでフォーム→Discordを繋ぐ</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: バリデーションとUX改善</a></li>
          <li><a href="#customize" className="text-primary hover:underline">7. カスタマイズ例</a></li>
          <li><a href="#cost" className="text-primary hover:underline">8. コスト：完全無料</a></li>
          <li><a href="#next" className="text-primary hover:underline">9. 次のステップ：AI自動返信を追加する</a></li>
        </ol>
      </div>

      {/* 1. なぜDiscord通知なのか */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. なぜDiscord通知なのか？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          問い合わせの通知手段として、メール・Slack・LINE・Discordなどがありますが、
          <strong>小規模チームや個人事業主にはDiscordが最適</strong>です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">通知手段</th>
                <th className="border border-gray-200 px-4 py-2 text-left">費用</th>
                <th className="border border-gray-200 px-4 py-2 text-left">設定の簡単さ</th>
                <th className="border border-gray-200 px-4 py-2 text-left">リアルタイム性</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">メール</td>
                <td className="border border-gray-200 px-4 py-2">無料〜</td>
                <td className="border border-gray-200 px-4 py-2">△ SMTP設定が必要</td>
                <td className="border border-gray-200 px-4 py-2">△ 埋もれやすい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Slack</td>
                <td className="border border-gray-200 px-4 py-2">無料〜¥1,050/人/月</td>
                <td className="border border-gray-200 px-4 py-2">○ Webhookで簡単</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">LINE Notify</td>
                <td className="border border-gray-200 px-4 py-2">無料（2025年3月終了）</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-primary">Discord ✅</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">完全無料</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">◎ 最も簡単</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">◎</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700 text-sm">
            💡 <strong>ポイント:</strong> DiscordのWebhookは<strong>URLを1つ取得するだけ</strong>で使えます。
            APIキーの申請もOAuth設定も不要。最もシンプルな通知手段です。
          </p>
        </div>
      </section>

      {/* 2. 仕組みの全体像 */}
      <section id="architecture" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. 仕組みの全体像
        </h2>
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre">
{`┌──────────────┐     POST     ┌──────────────┐    Webhook    ┌──────────────┐
│  お問い合わせ  │ ──────────> │  API Route   │ ──────────> │   Discord    │
│   フォーム     │   JSON      │ (Next.js)    │   Embed      │  チャンネル   │
└──────────────┘             └──────────────┘              └──────────────┘
     ブラウザ                     サーバー                    リアルタイム通知`}
          </pre>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          流れはシンプルです:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>ユーザーがフォームに入力して送信</li>
          <li>Next.jsのAPI Routeがリクエストを受け取る</li>
          <li>API RouteがDiscord WebhookにEmbed形式で転送</li>
          <li>Discordチャンネルに通知が届く（スマホにもプッシュ通知）</li>
        </ol>
        <p className="text-gray-600 text-sm mt-4">
          外部サービスへの登録不要。Next.js + Discord（無料）だけで完結します。
        </p>
      </section>

      {/* 3. Step 1: Discord Webhook */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: Discord Webhookを作る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          まず、通知を受け取るDiscordサーバーにWebhookを作成します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">チャンネル設定を開く</p>
              <p className="text-gray-600 text-sm">通知を受け取りたいチャンネルの⚙️をクリック</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">「連携サービス」→「ウェブフック」</p>
              <p className="text-gray-600 text-sm">左メニューから選択</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">「新しいウェブフック」をクリック</p>
              <p className="text-gray-600 text-sm">名前は「お問い合わせ通知」など、わかりやすいものに</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <p className="font-bold text-gray-900">「ウェブフックURLをコピー」</p>
              <p className="text-gray-600 text-sm">このURLを後で使います。外部に漏れないよう注意！</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># 取得したURLの形式</p>
          <code className="text-green-400 text-sm break-all">
            https://discord.com/api/webhooks/123456789/abcdefg...
          </code>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>補足:</strong> Webhook URLには認証情報が含まれているため、
            環境変数（<code className="bg-gray-200 px-1 rounded">.env.local</code>）で管理するのがベストプラクティスです。
          </p>
        </div>
      </section>

      {/* 4. Step 2: フォーム作成 */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: お問い合わせフォームを作る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          React（Next.js App Router）でフォームコンポーネントを作ります。
          バリデーション付きで、送信中はローディング表示します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// src/components/ContactForm.tsx</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', message: ''
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // バリデーション
  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'お名前は必須です';
    if (!form.email.trim()) e.email = 'メールアドレスは必須です';
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email))
      e.email = '正しいメールアドレスを入力してください';
    if (!form.message.trim()) e.message = 'ご相談内容は必須です';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-2">✅</p>
        <p className="font-bold">送信完了しました！</p>
        <p className="text-sm text-gray-500">
          通常1営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          会社名・屋号（任意）
        </label>
        <input
          type="text"
          value={form.company}
          onChange={e => setForm({...form, company: e.target.value})}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white font-bold
                   py-3 rounded-lg hover:bg-primary/90
                   disabled:opacity-50"
      >
        {status === 'sending' ? '送信中...' : '無料で相談する →'}
      </button>
    </form>
  );
}`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>実装のポイント:</strong>
          </p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>インラインバリデーションで送信前にエラーを表示</li>
            <li>送信中はボタンを無効化（二重送信防止）</li>
            <li>送信完了後はフォームを完了メッセージに差し替え</li>
          </ul>
        </div>
      </section>

      {/* 5. Step 3: API Route */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: API Routeでフォーム→Discordを繋ぐ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここが核心部分です。Next.jsのAPI Route（Route Handler）で、
          フォームの送信データをDiscord Webhookに転送します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// src/app/api/contact/route.ts</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`import { NextRequest, NextResponse } from 'next/server';

// 環境変数からWebhook URLを取得
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, message } = await req.json();

    // 必須チェック（サーバーサイド）
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // Discord Embed形式でメッセージを組み立て
    const fields = [
      { name: 'お名前', value: name, inline: true },
      { name: 'メール', value: email, inline: true },
    ];
    if (company) {
      fields.push({
        name: '会社名・屋号', value: company, inline: true
      });
    }
    fields.push({
      name: 'ご相談内容', value: message, inline: false
    });

    const discordMessage = {
      embeds: [{
        title: '📩 新規お問い合わせ',
        color: 0x00d4ff,   // 水色
        fields,
        timestamp: new Date().toISOString(),
      }],
    };

    // Discord Webhookに送信
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordMessage),
    });

    if (!res.ok) {
      console.error('Webhook error:', await res.text());
      return NextResponse.json(
        { error: '送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json(
      { error: 'サーバーエラー' },
      { status: 500 }
    );
  }
}`}
          </pre>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          環境変数の設定:
        </p>
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># .env.local</p>
          <pre className="text-green-400 text-sm">
{`DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/あなたのID/あなたのトークン`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            ⚠️ <strong>セキュリティ注意:</strong> Webhook URLをフロントエンドのコードに直接書かないでください。
            必ずAPI Route（サーバーサイド）経由で送信し、<code className="bg-gray-200 px-1 rounded">.env.local</code>で管理します。
          </p>
        </div>
      </section>

      {/* 6. Step 4: バリデーション */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: バリデーションとUX改善
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          実用レベルにするために、以下のUX改善を追加します。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📝 インラインバリデーション</h3>
            <p className="text-gray-600 text-sm mb-3">
              送信ボタンを押す前に、各フィールドのエラーを即座に表示。
              メールアドレスは正規表現でフォーマットチェック。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs">
{`// メールアドレスの形式チェック
if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
  errors.email = '正しいメールアドレスを入力してください';
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">⏳ ローディング状態</h3>
            <p className="text-gray-600 text-sm mb-3">
              送信中はボタンを「送信中...」に変更＋無効化。二重送信を防止。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs">
{`<button disabled={status === 'sending'}>
  {status === 'sending' ? '送信中...' : '無料で相談する →'}
</button>`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">✅ 完了画面</h3>
            <p className="text-gray-600 text-sm">
              送信成功後はフォームを非表示にし、完了メッセージを表示。
              ユーザーに「ちゃんと届いた」という安心感を与えます。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🛡️ サーバーサイドバリデーション</h3>
            <p className="text-gray-600 text-sm">
              フロントだけでなく、API Route側でも必須チェックを実施。
              不正なリクエストを弾くための二重防御です。
            </p>
          </div>
        </div>
      </section>

      {/* 7. カスタマイズ例 */}
      <section id="customize" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. カスタマイズ例
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          基本形ができたら、用途に合わせてカスタマイズできます。
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🎨 Embedの色を変える
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              <code className="bg-gray-200 px-1 rounded">color</code>の値を変更するだけで、
              通知の印象を変えられます。
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <pre className="text-green-400 text-sm">
{`// 色の例
color: 0x00d4ff,  // 水色（デフォルト）
color: 0xff6b00,  // オレンジ（緊急用）
color: 0x00c853,  // 緑（成功通知）
color: 0x7c4dff,  // 紫（VIP問い合わせ）`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              📋 フィールドを追加する
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              電話番号、予算、希望納期など、必要なフィールドを自由に追加。
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <pre className="text-green-400 text-sm">
{`// 予算フィールドを追加
fields.push({
  name: '想定予算',
  value: budget || '未回答',
  inline: true,
});`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🔔 メンション付き通知
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              特定のロールやユーザーにメンションして、確実に気づかせる。
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <pre className="text-green-400 text-sm">
{`const discordMessage = {
  content: '<@&123456789> 新しい問い合わせです！',
  embeds: [{ /* ... */ }],
};`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              📊 スプレッドシート連携
            </h3>
            <p className="text-gray-600 text-sm">
              Discord通知と同時に、Google スプレッドシートにも記録すれば、
              問い合わせの管理・分析が簡単に。Google Sheets APIまたはGASと組み合わせて実現できます。
            </p>
          </div>
        </div>
      </section>

      {/* 8. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. コスト：完全無料
        </h2>
        <div className="bg-green-50 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">¥0</p>
              <p className="text-sm text-gray-600">Discord Webhook</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">¥0</p>
              <p className="text-sm text-gray-600">Next.js API Route</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">¥0</p>
              <p className="text-sm text-gray-600">Vercel（無料枠）</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            Vercelの無料枠（100GB帯域/月）で十分運用可能。
            月間1,000件の問い合わせが来ても無料です。
          </p>
        </div>
      </section>

      {/* 9. 次のステップ */}
      <section id="next" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. 次のステップ：AI自動返信を追加する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          今回作った仕組みに<strong>AI自動返信</strong>を追加すると、さらに強力になります。
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-3">発展形のイメージ:</h3>
          <div className="bg-white rounded-lg p-4">
            <pre className="text-gray-700 text-sm whitespace-pre-wrap">
{`1. ユーザーが問い合わせ送信
2. Discord に通知（← 今回作ったもの）
3. Claude API で問い合わせ内容を分析
4. 自動で一次返信メールを送信
5. 対応が必要な場合はDiscordで担当者にメンション`}
            </pre>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            この発展形については、次回の記事で詳しく解説します。
          </p>
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
              <span className="text-gray-700">Discord Webhookは<strong>URL取得だけ</strong>で使える最もシンプルな通知手段</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">Next.js API Routeで<strong>セキュアに</strong>フォーム→Discord連携</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">バリデーション・ローディング・完了画面で<strong>UXも万全</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">運用コストは<strong>完全無料</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">AI自動返信への<strong>拡張も簡単</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「設定がうまくいかない」「もっと高度なことをしたい」
        </h2>
        <p className="text-gray-600 mb-6">
          Discord通知だけでなく、AI自動返信・顧客管理・CRM連携まで、
          あなたの業務に合わせた自動化をご提案します。
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
            href="/blog/gas-gemini-automation"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">Google Workspace×AIで業務を自動化する方法</p>
            <p className="text-gray-500 text-xs mt-1">GAS+Gemini APIで業務自動化する具体例</p>
          </Link>
          <Link
            href="/blog/what-is-openclaw"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">OpenClawとは？ChatGPTとの違いをわかりやすく解説</p>
            <p className="text-gray-500 text-xs mt-1">「自分で動くAI」の仕組みと導入メリット</p>
          </Link>
          <Link
            href="/blog/openclaw-guide"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">OpenClawで業務自動化する方法｜完全ガイド</p>
            <p className="text-gray-500 text-xs mt-1">技術知識ゼロでもできる導入ステップ</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
