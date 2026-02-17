import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Claude APIで問い合わせ自動返信botを作る方法｜Discord×AI実践ガイド',
  description:
    'Discord Webhookで届いた問い合わせに、Claude APIで自動返信する仕組みを構築。一次返信の自動化で対応速度を劇的に改善。コード全文付き。',
  openGraph: {
    title: 'Claude APIで問い合わせ自動返信botを作る方法｜Discord×AI実践ガイド',
    description:
      '問い合わせにAIが即座に一次返信。Claude API×Discord連携をコード付きで解説。',
    type: 'article',
  },
  keywords: [
    'Claude API 自動返信',
    'AI 問い合わせ 自動化',
    'チャットボット 自作',
    'Discord bot AI',
    'Claude API 使い方',
    '問い合わせ対応 自動化',
    'AI自動返信 作り方',
    'Next.js Claude API',
  ],
};

export default function AiAutoReplyBotPage() {
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
        <span>Claude APIで問い合わせ自動返信bot</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        Claude APIで問い合わせ自動返信botを作る方法
        <br />
        <span className="text-2xl sm:text-3xl">Discord×AI実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-medium">
          AI活用
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          <Link href="/blog/contact-form-discord" className="text-primary underline">前回の記事</Link>では、
          問い合わせフォームからDiscordに自動通知する仕組みを作りました。<br />
          今回はその<strong>続編</strong>として、届いた問い合わせに<strong>Claude API（AI）で自動返信</strong>する機能を追加します。
          お客様を待たせず、24時間即座に一次返信できる仕組みです。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約12分 ｜ 実装時間：約45分 ｜ 前提：<Link href="/blog/contact-form-discord" className="text-primary underline">前回の記事</Link>の実装済み環境
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#why-auto-reply" className="text-primary hover:underline">1. なぜ自動返信が必要なのか？</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: Claude APIの準備</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: AIで問い合わせを分析する</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: 自動返信メールを送る</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: 全体を統合する</a></li>
          <li><a href="#prompt" className="text-primary hover:underline">7. プロンプト設計のコツ</a></li>
          <li><a href="#safety" className="text-primary hover:underline">8. 安全対策：AIに任せていいライン</a></li>
          <li><a href="#cost" className="text-primary hover:underline">9. 運用コスト</a></li>
          <li><a href="#next" className="text-primary hover:underline">10. さらなる発展</a></li>
        </ol>
      </div>

      {/* 1. なぜ自動返信が必要なのか */}
      <section id="why-auto-reply" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. なぜ自動返信が必要なのか？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          問い合わせへの返信速度は、成約率に直結します。
        </p>

        <div className="bg-red-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-red-700 mb-3">📊 衝撃のデータ</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">78%</span>
              <span className="text-gray-700 text-sm">の顧客は「最初に返信してきた企業」から購入する（Lead Connect調査）</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">5分</span>
              <span className="text-gray-700 text-sm">以内に返信すると、30分後に返信した場合と比べて成約率が<strong>21倍</strong>（InsideSales.com）</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">50%</span>
              <span className="text-gray-700 text-sm">以上の問い合わせは営業時間外に届く</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          つまり、<strong>夜中でも休日でも即座に返信できる仕組み</strong>があれば、
          それだけで競合に差をつけられます。人を雇わなくても、AIなら24時間対応可能です。
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            💡 <strong>ここで作るもの:</strong> 問い合わせが届いたら、AIが内容を読み取って
            「ご連絡ありがとうございます。〇〇についてですね。担当より改めてご連絡いたします」
            という<strong>パーソナライズされた一次返信</strong>を自動で送るシステムです。
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
{`┌──────────┐  POST  ┌──────────┐ Webhook ┌──────────┐
│ フォーム  │ ────> │ API Route│ ──────> │ Discord  │
└──────────┘       │          │         └──────────┘
                   │          │
                   │  Claude  │  メール   ┌──────────┐
                   │   API    │ ──────> │ お客様   │
                   │ (分析)   │  自動返信  └──────────┘
                   └──────────┘`}
          </pre>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <Link href="/blog/contact-form-discord" className="text-primary underline">前回</Link>の仕組みに、2つの処理を追加します:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>フォーム送信 → Discord通知（前回と同じ）</li>
          <li><strong className="text-purple-600">Claude APIで問い合わせ内容を分析</strong></li>
          <li><strong className="text-orange-600">分析結果をもとに自動返信メールを送信</strong></li>
        </ol>
      </section>

      {/* 3. Step 1: Claude APIの準備 */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: Claude APIの準備
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Anthropicのアカウントを作成し、APIキーを取得します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">Anthropicコンソールにアクセス</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">console.anthropic.com</code> でアカウント作成
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">APIキーを生成</p>
              <p className="text-gray-600 text-sm">Settings → API Keys → Create Key</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">環境変数に設定</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">.env.local</code> にキーを追加
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># .env.local に追加</p>
          <pre className="text-green-400 text-sm">
{`ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            💰 <strong>料金目安:</strong> Claude 3.5 Sonnetの場合、1回の問い合わせ分析+返信生成で約<strong>¥0.5〜1.5</strong>。
            月100件の問い合わせでも<strong>月¥150以下</strong>です。
          </p>
        </div>
      </section>

      {/* 4. Step 2: AIで問い合わせを分析 */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: AIで問い合わせを分析する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Claude APIに問い合わせ内容を送り、「カテゴリ分類」と「返信文の生成」を行います。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// src/lib/ai-analyze.ts</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

interface AnalysisResult {
  category: string;       // 問い合わせカテゴリ
  urgency: 'high' | 'medium' | 'low';
  summary: string;        // 要約（社内向け）
  replyDraft: string;     // 自動返信文（お客様向け）
}

export async function analyzeInquiry(
  name: string,
  email: string,
  company: string,
  message: string
): Promise<AnalysisResult> {

  const systemPrompt = \`あなたはカスタマーサポートAIです。
問い合わせ内容を分析し、以下のJSON形式で返してください。

{
  "category": "見積もり依頼" | "技術相談" | "サービス質問" | "その他",
  "urgency": "high" | "medium" | "low",
  "summary": "社内向け要約（50文字以内）",
  "replyDraft": "お客様への一次返信文（丁寧語、200文字以内）"
}

返信文のルール:
- お名前を含める（「○○様」）
- 問い合わせ内容に触れる（オウム返しではなく要点を）
- 「担当より改めてご連絡いたします」で締める
- 営業的な売り込みは入れない
- 温かみのある、でもプロフェッショナルなトーン\`;

  const res = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: \`【問い合わせ情報】
お名前: \${name}
会社名: \${company || '未記入'}
メール: \${email}
内容:
\${message}\`,
      }],
    }),
  });

  if (!res.ok) {
    throw new Error(\`Claude API error: \${res.status}\`);
  }

  const data = await res.json();
  const text = data.content[0].text;

  // JSONを抽出
  const jsonMatch = text.match(/\\{[\\s\\S]*\\}/);
  if (!jsonMatch) throw new Error('AI response parse error');

  return JSON.parse(jsonMatch[0]);
}`}
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>ポイント:</strong> レスポンスをJSON形式で指定することで、
            プログラムで扱いやすい構造化データを得られます。
            <code className="bg-gray-200 px-1 rounded">claude-sonnet-4-20250514</code>は高速かつ安価で、
            こうした分類・生成タスクに最適です。
          </p>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">実行例</h3>
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2">// 問い合わせ例</p>
          <pre className="text-yellow-300 text-sm whitespace-pre-wrap mb-4">
{`お名前: 田中太郎
会社名: 株式会社サンプル
内容: Webサイトの問い合わせ対応を自動化したいのですが、
      費用感とスケジュール感を教えてください。`}
          </pre>
          <p className="text-gray-400 text-xs mb-2">// AIの分析結果</p>
          <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`{
  "category": "見積もり依頼",
  "urgency": "high",
  "summary": "Web問い合わせ自動化の費用・スケジュール見積もり依頼",
  "replyDraft": "田中様\\n\\nお問い合わせいただきありがとうございます。
Webサイトの問い合わせ対応の自動化について、費用感と
スケジュールのご相談ですね。\\n\\n内容を確認いたしましたので、
担当より1営業日以内に詳細をご連絡いたします。
少々お待ちくださいませ。"
}`}
          </pre>
        </div>
      </section>

      {/* 5. Step 3: 自動返信メール */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: 自動返信メールを送る
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AIが生成した返信文を、メールでお客様に送ります。
          ここではResend（無料枠で月100通）を使います。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># インストール</p>
          <pre className="text-green-400 text-sm">
{`npm install resend`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// src/lib/send-reply.ts</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAutoReply(
  to: string,
  customerName: string,
  replyText: string
) {
  const { error } = await resend.emails.send({
    from: 'NEWHELLO <noreply@openclaw.newhello.jp>',
    to,
    subject: \`【NEWHELLO】お問い合わせありがとうございます\`,
    html: \`
      <div style="font-family: sans-serif; max-width: 600px;
                  margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #00d4ff;
                   padding-bottom: 10px;">
          お問い合わせありがとうございます
        </h2>
        <div style="white-space: pre-wrap; line-height: 1.8;
                    color: #555; margin: 20px 0;">
          \${replyText}
        </div>
        <hr style="border: none; border-top: 1px solid #eee;
                   margin: 30px 0;" />
        <p style="color: #999; font-size: 12px;">
          ※ このメールはAIによる自動返信です。<br />
          　担当者より改めてご連絡いたします。<br /><br />
          NEWHELLO - OpenClaw構築代行<br />
          https://openclaw.newhello.jp
        </p>
      </div>
    \`,
  });

  if (error) {
    console.error('Email send error:', error);
    throw error;
  }
}`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># .env.local に追加</p>
          <pre className="text-green-400 text-sm">
{`RESEND_API_KEY=re_xxxxxxxxxxxxx`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>なぜResendか:</strong>
          </p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>月100通まで無料</li>
            <li>npm パッケージで簡単に使える</li>
            <li>独自ドメインのメール送信に対応</li>
            <li>SendGridやAmazon SESより設定がシンプル</li>
          </ul>
        </div>
      </section>

      {/* 6. Step 4: 全体統合 */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: 全体を統合する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          前回のAPI Routeに、AI分析と自動返信を組み込みます。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// src/app/api/contact/route.ts（完成版）</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`import { NextRequest, NextResponse } from 'next/server';
import { analyzeInquiry } from '@/lib/ai-analyze';
import { sendAutoReply } from '@/lib/send-reply';

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // ① Discord通知（前回と同じ）
    const fields = [
      { name: 'お名前', value: name, inline: true },
      { name: 'メール', value: email, inline: true },
    ];
    if (company) {
      fields.push({
        name: '会社名', value: company, inline: true
      });
    }
    fields.push({
      name: 'ご相談内容', value: message, inline: false
    });

    // ② AI分析（並列実行で高速化）
    const [webhookRes, analysis] = await Promise.all([
      // Discord通知
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: '📩 新規お問い合わせ',
            color: 0x00d4ff,
            fields,
            timestamp: new Date().toISOString(),
          }],
        }),
      }),
      // AI分析
      analyzeInquiry(name, email, company, message),
    ]);

    if (!webhookRes.ok) {
      console.error('Webhook error');
    }

    // ③ AI分析結果もDiscordに通知
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '🤖 AI分析結果',
          color: analysis.urgency === 'high'
            ? 0xff0000 : analysis.urgency === 'medium'
            ? 0xffaa00 : 0x00cc00,
          fields: [
            { name: 'カテゴリ', value: analysis.category,
              inline: true },
            { name: '緊急度', value: analysis.urgency,
              inline: true },
            { name: '要約', value: analysis.summary,
              inline: false },
            { name: '自動返信（送信済み）',
              value: analysis.replyDraft, inline: false },
          ],
        }],
      }),
    });

    // ④ 自動返信メール送信
    await sendAutoReply(email, name, analysis.replyDraft);

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

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="text-gray-700 text-sm">
            🚀 <strong>パフォーマンスTip:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">Promise.all</code>でDiscord通知とAI分析を
            <strong>並列実行</strong>しています。直列だと約3秒かかるところを、
            約1.5秒に短縮できます。
          </p>
        </div>
      </section>

      {/* 7. プロンプト設計 */}
      <section id="prompt" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. プロンプト設計のコツ
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自動返信の品質は、プロンプトの設計で決まります。以下のポイントを押さえましょう。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🎯 出力形式を明確に指定する</h3>
            <p className="text-gray-600 text-sm mb-3">
              JSON形式で出力を指定すると、プログラムで確実にパースできます。
              フリーテキストだと後処理が不安定になります。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs whitespace-pre-wrap">
{`✅ 良い例: "以下のJSON形式で返してください: { ... }"
❌ 悪い例: "分析結果を教えてください"`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🚫 やってはいけないことを明記する</h3>
            <p className="text-gray-600 text-sm mb-3">
              「やらないこと」を書くと、想定外の返信を防げます。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs whitespace-pre-wrap">
{`- 営業的な売り込みは入れない
- 具体的な金額を提示しない
- 納期を約束しない
- 技術的な詳細に踏み込まない`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📏 文字数制限をかける</h3>
            <p className="text-gray-600 text-sm">
              「200文字以内」のように制限をかけないと、AIが長文を生成してしまいます。
              一次返信は短く、要点だけ。詳細は担当者からのフォローで伝えます。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🔄 カテゴリは固定値で定義する</h3>
            <p className="text-gray-600 text-sm">
              「見積もり依頼」「技術相談」「サービス質問」「その他」のように
              選択肢を限定すると、後続の処理（振り分け、優先度判定）が安定します。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 安全対策 */}
      <section id="safety" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. 安全対策：AIに任せていいライン
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">タスク</th>
                <th className="border border-gray-200 px-4 py-2 text-center">AI自動化</th>
                <th className="border border-gray-200 px-4 py-2 text-left">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">一次返信「受け取りました」</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-bold">✅ OK</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">リスク低、速度重要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">カテゴリ分類・優先度判定</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-bold">✅ OK</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">社内向け、間違えても修正可能</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">見積もり金額の提示</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">誤った金額提示は信用問題</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">契約条件の回答</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">法的リスク</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">技術的な詳細回答</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-yellow-600 font-bold">⚠️ 要検討</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">FAQ程度ならOK、個別案件は人間</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            ⚠️ <strong>鉄則:</strong> AIの自動返信には必ず
            「このメールはAIによる自動返信です」と明記してください。
            お客様に誤解を与えないことが、信頼の第一歩です。
          </p>
        </div>
      </section>

      {/* 9. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. 運用コスト
        </h2>
        <div className="bg-green-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">月間100件の問い合わせを処理した場合:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Claude API（100回の分析+生成）</span>
              <span className="font-bold text-gray-900">約 ¥100</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Resend（メール送信100通）</span>
              <span className="font-bold text-gray-900">¥0（無料枠）</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Discord Webhook</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Vercel（ホスティング）</span>
              <span className="font-bold text-gray-900">¥0（無料枠）</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-bold text-lg">合計</span>
              <span className="text-3xl font-bold text-green-600">約 ¥100/月</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 比較: 人件費 vs AI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">パート（問い合わせ対応）</p>
              <p className="text-2xl font-bold text-red-600">¥120,000/月</p>
              <p className="text-gray-400 text-xs">時給1,200円×5h×20日</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">AI自動返信</p>
              <p className="text-2xl font-bold text-green-600">¥100/月</p>
              <p className="text-gray-400 text-xs">24時間365日稼働</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            コスト差は<strong>約1,200倍</strong>。しかもAIは24時間対応。
          </p>
        </div>
      </section>

      {/* 10. 発展 */}
      <section id="next" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. さらなる発展
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          基本形ができたら、さらに高度な自動化に発展させられます。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📊 CRM連携</h3>
            <p className="text-gray-600 text-sm">
              問い合わせデータをNotionやスプレッドシートに自動記録。
              カテゴリ別の集計、対応ステータス管理が可能に。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🔄 FAQ自動回答</h3>
            <p className="text-gray-600 text-sm">
              よくある質問にはAIが詳細回答。人間が対応すべき案件だけをエスカレーション。
              対応コストをさらに削減。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🌐 多言語対応</h3>
            <p className="text-gray-600 text-sm">
              Claude APIは多言語対応。英語や中国語の問い合わせにも、
              相手の言語で自動返信可能。インバウンド対応に最適。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📱 LINE/チャット対応</h3>
            <p className="text-gray-600 text-sm">
              同じAI分析ロジックを、LINEやWebチャットにも適用。
              全チャネルで統一された自動返信を実現。
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
              <span className="text-gray-700">Claude APIで問い合わせ内容を<strong>自動分析+返信生成</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">Discord通知 + メール自動返信の<strong>ダブル通知体制</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">プロンプト設計で<strong>返信品質をコントロール</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">月間100件でも<strong>約¥100</strong>の運用コスト</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">CRM連携・FAQ自動回答・多言語対応への<strong>拡張も容易</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「自社に合ったAI自動返信を導入したい」
        </h2>
        <p className="text-gray-600 mb-6">
          問い合わせ対応だけでなく、受注管理・顧客フォロー・レポート作成まで、
          あなたの業務に合わせたAI自動化をご提案します。
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
            href="/blog/contact-form-discord"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">問い合わせフォーム→Discord自動通知の作り方</p>
            <p className="text-gray-500 text-xs mt-1">【前編】まずはDiscord通知から始めよう</p>
          </Link>
          <Link
            href="/blog/gas-gemini-automation"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">Google Workspace×AIで業務を自動化する方法</p>
            <p className="text-gray-500 text-xs mt-1">GAS+Gemini APIで業務自動化する具体例</p>
          </Link>
          <Link
            href="/blog/ai-cost-comparison"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">人を雇う vs AIエージェント｜コスト比較</p>
            <p className="text-gray-500 text-xs mt-1">3年間で880万円の差</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
