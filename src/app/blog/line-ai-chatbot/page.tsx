import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LINE公式アカウントにAI自動応答を導入する方法｜Webhook×Claude API実践ガイド',
  description:
    'LINE公式アカウントにClaude APIでAI自動応答を実装する方法を解説。Webhook設定からコード実装まで、コピペで動く実践ガイド。美容室・クリニック・ECの活用例付き。',
  openGraph: {
    title: 'LINE公式アカウントにAI自動応答を導入する方法｜Webhook×Claude API実践ガイド',
    description:
      'LINE公式にAI自動応答を導入。24時間対応で顧客満足度UP。コード全文付き実践ガイド。',
    type: 'article',
  },
  keywords: [
    'LINE公式 AI自動応答',
    'LINE Messaging API',
    'LINE bot 作り方',
    'LINE 自動返信 AI',
    'Claude API LINE',
    'LINE公式アカウント 自動化',
    'LINE チャットボット 作成',
    'LINE Webhook 設定',
  ],
};

export default function LineAiChatbotPage() {
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
        <span>LINE公式×AI自動応答</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        LINE公式アカウントにAI自動応答を導入する方法
        <br />
        <span className="text-2xl sm:text-3xl">Webhook×Claude API実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium">
          LINE
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          LINE公式アカウントを持っているけど、<strong>メッセージの返信が追いつかない</strong>。
          営業時間外の問い合わせに対応できていない。そんな悩みはありませんか？<br />
          この記事では、LINE公式アカウントに<strong>AI（Claude API）で自動応答する仕組み</strong>を、
          実際のコード付きで構築します。美容室・クリニック・ECサイトなど、あらゆる業種で使えます。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約15分 ｜ 実装時間：約1〜2時間 ｜ 前提：LINE公式アカウント（無料で作成可能）
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#why" className="text-primary hover:underline">1. なぜLINE公式にAI応答が必要なのか？</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: LINE公式アカウント+Messaging APIの準備</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: Webhookサーバーを構築する</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: Claude APIでAI応答を生成する</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: 全体を統合する</a></li>
          <li><a href="#usecases" className="text-primary hover:underline">7. 業種別ユースケース</a></li>
          <li><a href="#safety" className="text-primary hover:underline">8. 安全対策：人間エスカレーションのルール</a></li>
          <li><a href="#cost" className="text-primary hover:underline">9. 運用コスト</a></li>
          <li><a href="#next" className="text-primary hover:underline">10. さらなる発展</a></li>
        </ol>
      </div>

      {/* 1. なぜ必要か */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. なぜLINE公式にAI応答が必要なのか？
        </h2>

        <div className="bg-green-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-green-700 mb-3">📊 LINEの圧倒的な普及率</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">9,700万人</span>
              <span className="text-gray-700 text-sm">日本国内のLINEユーザー数（人口の約77%）</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">86%</span>
              <span className="text-gray-700 text-sm">の日本人がLINEを毎日使っている</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">70%</span>
              <span className="text-gray-700 text-sm">のユーザーが「企業からのLINEメッセージを見る」</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          メールの開封率が20%前後に対し、LINEは<strong>開封率70%以上</strong>。
          お客様との接点として、LINEは最強のチャネルです。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          しかし問題は<strong>返信の対応コスト</strong>。営業時間内でも即レスは難しく、
          営業時間外はそもそも対応できません。ここをAIで自動化します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <h4 className="font-bold text-red-700 text-sm mb-2">❌ AI導入前</h4>
            <ul className="text-gray-600 text-xs space-y-1 list-disc list-inside">
              <li>返信まで平均3時間</li>
              <li>営業時間外は翌営業日対応</li>
              <li>同じ質問に何度も手動で回答</li>
              <li>スタッフの負担が大きい</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h4 className="font-bold text-green-700 text-sm mb-2">✅ AI導入後</h4>
            <ul className="text-gray-600 text-xs space-y-1 list-disc list-inside">
              <li>返信まで平均5秒</li>
              <li>24時間365日自動対応</li>
              <li>FAQ系は完全自動</li>
              <li>スタッフは複雑な案件だけ対応</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. 仕組みの全体像 */}
      <section id="architecture" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. 仕組みの全体像
        </h2>
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre">
{`┌──────────┐  Webhook  ┌──────────┐  Claude   ┌──────────┐
│   LINE   │ ───────> │  サーバー  │  API     │   AI     │
│  ユーザー  │          │ (Express) │ ──────> │ 応答生成  │
│          │ <─────── │           │ <────── │          │
│          │  Reply   │           │         │          │
└──────────┘  API     └──────────┘         └──────────┘
                           │
                      ┌────┴────┐
                      │ 会話履歴  │
                      │ (メモリ)  │
                      └─────────┘`}
          </pre>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>ユーザーがLINE公式アカウントにメッセージを送る</li>
          <li>LINEのWebhookがサーバーにリクエストを転送</li>
          <li>サーバーがClaude APIにメッセージを送り、AI応答を生成</li>
          <li>LINE Reply APIで応答をユーザーに返信</li>
          <li>会話履歴を保持し、文脈を理解した応答を実現</li>
        </ol>
      </section>

      {/* 3. Step 1: LINE準備 */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: LINE公式アカウント+Messaging APIの準備
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">LINE公式アカウントを作成</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">manager.line.biz</code> → 「アカウント作成」（無料）
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">LINE Developers でチャネル作成</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">developers.line.biz</code> → プロバイダー作成 → 「Messaging API」チャネルを追加
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">チャネルアクセストークンを発行</p>
              <p className="text-gray-600 text-sm">
                Messaging API設定 → 「チャネルアクセストークン（長期）」を発行
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <p className="font-bold text-gray-900">応答設定を変更</p>
              <p className="text-gray-600 text-sm">
                LINE公式アカウント管理画面 → 応答設定 →「応答メッセージ: オフ」「Webhook: オン」
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># .env に保存する認証情報</p>
          <pre className="text-green-400 text-sm">
{`LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
LINE_CHANNEL_SECRET=your_channel_secret
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            💡 <strong>ポイント:</strong> LINE公式アカウントは<strong>無料プラン（コミュニケーションプラン）</strong>で
            月200通まで送信可能。AI自動応答なら十分なケースが多いです。
            月200通を超える場合はライトプラン（月¥5,000、5,000通）に。
          </p>
        </div>
      </section>

      {/* 4. Step 2: Webhookサーバー */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: Webhookサーバーを構築する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Node.js（Express）でWebhookサーバーを構築します。
          LINEからのWebhookリクエストを受け取り、署名を検証します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># プロジェクト初期化</p>
          <pre className="text-green-400 text-sm">
{`mkdir line-ai-bot && cd line-ai-bot
npm init -y
npm install express @line/bot-sdk anthropic dotenv`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// server.js — Webhookサーバー</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const express = require('express');
const crypto = require('crypto');
const { handleMessage } = require('./handler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// LINE署名検証ミドルウェア
function validateSignature(req, res, buf) {
  const signature = req.headers['x-line-signature'];
  if (!signature) return;

  const hash = crypto
    .createHmac('SHA256', process.env.LINE_CHANNEL_SECRET)
    .update(buf)
    .digest('base64');

  if (hash !== signature) {
    throw new Error('Invalid signature');
  }
}

app.use(express.json({
  verify: validateSignature,
}));

// Webhook エンドポイント
app.post('/webhook', async (req, res) => {
  // LINEからの接続確認（空イベント）
  if (!req.body.events || req.body.events.length === 0) {
    return res.status(200).json({ ok: true });
  }

  // 各イベントを処理
  const results = await Promise.all(
    req.body.events
      .filter(event => event.type === 'message'
                    && event.message.type === 'text')
      .map(event => handleMessage(event))
  );

  res.status(200).json({ results });
});

// ヘルスチェック
app.get('/', (req, res) => {
  res.json({ status: 'LINE AI Bot is running' });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});`}
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>署名検証は必須。</strong> LINEのWebhookは誰でもPOSTできてしまうため、
            チャネルシークレットで署名を検証し、正規のリクエストのみ処理します。
            これを省略するとセキュリティリスクになります。
          </p>
        </div>
      </section>

      {/* 5. Step 3: Claude APIで応答生成 */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: Claude APIでAI応答を生成する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          メッセージハンドラーを作ります。会話履歴を保持し、文脈を理解した応答を生成します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// handler.js — メッセージ処理+AI応答</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const anthropic = new Anthropic();

// 会話履歴（メモリ内保持。本番ではRedis等を推奨）
const conversationHistory = new Map();
const MAX_HISTORY = 10; // 直近10往復まで保持

// 業種に合わせてカスタマイズするシステムプロンプト
const SYSTEM_PROMPT = \`あなたは親切なカスタマーサポートAIです。
LINE公式アカウントでお客様の質問に答えます。

ルール:
- 丁寧語で、でも堅すぎないフレンドリーなトーン
- 回答は簡潔に（LINEなので3-5行以内）
- わからないことは「担当者に確認いたします」と返す
- 予約や見積もりの具体的な金額は提示しない
- 営業時間やアクセスなどの基本情報は即答
- 緊急性が高い内容は「お急ぎの場合はお電話ください」と案内

お店の情報:
- 営業時間: 10:00-19:00（土日祝休み）
- 電話: 03-XXXX-XXXX
- 住所: 東京都○○区○○
※ 上記は例です。実際のお店の情報に置き換えてください。\`;

async function handleMessage(event) {
  const userId = event.source.userId;
  const userMessage = event.message.text;
  const replyToken = event.replyToken;

  // 会話履歴を取得（なければ新規作成）
  if (!conversationHistory.has(userId)) {
    conversationHistory.set(userId, []);
  }
  const history = conversationHistory.get(userId);

  // ユーザーメッセージを履歴に追加
  history.push({ role: 'user', content: userMessage });

  // 履歴が長すぎたら古いものを削除
  while (history.length > MAX_HISTORY * 2) {
    history.shift();
  }

  try {
    // Claude APIでAI応答を生成
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: history,
    });

    const aiReply = response.content[0].text;

    // AI応答を履歴に追加
    history.push({ role: 'assistant', content: aiReply });

    // LINE Reply APIで返信
    await replyToLine(replyToken, aiReply);

    return { success: true };
  } catch (error) {
    console.error('AI response error:', error);

    // エラー時はフォールバックメッセージ
    await replyToLine(
      replyToken,
      'ご返信ありがとうございます。'
      + '担当者より改めてご連絡いたします。'
      + '少々お待ちくださいませ。'
    );

    return { success: false, error: error.message };
  }
}

async function replyToLine(replyToken, text) {
  const url = 'https://api.line.me/v2/bot/message/reply';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + process.env.LINE_CHANNEL_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      replyToken,
      messages: [{ type: 'text', text }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('LINE Reply error:', err);
    throw new Error(err);
  }
}

module.exports = { handleMessage };`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>会話履歴（メモリ）のポイント:</strong>
          </p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>ユーザーIDごとに会話履歴を保持（文脈を理解した応答が可能）</li>
            <li>直近10往復まで保持（トークン節約）</li>
            <li>本番環境ではRedisやDBでの永続化を推奨</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">会話例</h3>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-green-400 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs text-sm">
                予約したいんですけど
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs text-sm">
                ご連絡ありがとうございます！ご予約のご希望ですね😊<br /><br />
                ご希望の日時と、ご利用内容をお教えいただけますか？<br />
                空き状況をお調べいたします。
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-400 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs text-sm">
                来週の水曜日の午後って空いてますか？
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs text-sm">
                来週水曜日の午後ですね！確認いたしますので少々お待ちください。<br /><br />
                担当者より空き状況を折り返しご連絡いたします🙏
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-3 text-center">
            ※ AIが文脈を理解して自然な会話を継続
          </p>
        </div>
      </section>

      {/* 6. Step 4: 全体統合 */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: 全体を統合する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          サーバーをデプロイし、LINE DevelopersにWebhook URLを設定します。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">デプロイ方法</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">🆓 無料: Railway / Render</h4>
            <p className="text-gray-600 text-sm mb-2">
              GitHubリポジトリを接続するだけで自動デプロイ。無料枠で小規模運用に十分。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs">
{`# Railwayの場合
npm install -g @railway/cli
railway login
railway init
railway up`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h4 className="font-bold text-gray-900 mb-2">💪 本番: VPS (月¥1,000〜)</h4>
            <p className="text-gray-600 text-sm mb-2">
              安定稼働にはVPSがおすすめ。pm2でプロセス管理。
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-green-400 text-xs">
{`npm install -g pm2
pm2 start server.js --name line-ai-bot
pm2 save
pm2 startup`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Webhook URL設定</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">LINE Developers → Messaging API設定</p>
              <p className="text-gray-600 text-sm">チャネルの設定画面を開く</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">Webhook URLを入力</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">https://your-server.com/webhook</code>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">「Webhookの利用」をオンに</p>
              <p className="text-gray-600 text-sm">「検証」ボタンで接続確認</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <p className="font-bold text-gray-900">「応答メッセージ」をオフに</p>
              <p className="text-gray-600 text-sm">デフォルトの自動応答をオフにして、Webhook経由の応答のみにする</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 業種別ユースケース */}
      <section id="usecases" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. 業種別ユースケース
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          システムプロンプトをカスタマイズするだけで、あらゆる業種に対応できます。
        </p>

        <div className="space-y-6">
          {/* 美容室 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">💇 美容室・ネイルサロン</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-xs mb-2">対応できる質問:</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>メニューと料金の案内</li>
                  <li>空き状況の一次回答</li>
                  <li>アクセス・駐車場の案内</li>
                  <li>キャンセルポリシーの説明</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">プロンプト例:</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs whitespace-pre-wrap">
{`あなたは美容室○○の
受付AIアシスタントです。
メニュー: カット ¥4,400
カラー ¥6,600〜
パーマ ¥8,800〜`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* クリニック */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🏥 クリニック・歯科医院</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-xs mb-2">対応できる質問:</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>診療時間・休診日の案内</li>
                  <li>初診の持ち物の案内</li>
                  <li>診療科目の説明</li>
                  <li>予約の一次受付</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">重要なルール:</p>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-red-700 text-xs font-bold">
                    ⚠️ 医療相談・診断は絶対にしない。
                    症状について聞かれたら「ご来院の上、医師にご相談ください」と案内。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EC */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🛒 ECサイト・通販</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-xs mb-2">対応できる質問:</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>注文状況の確認案内</li>
                  <li>返品・交換ポリシーの説明</li>
                  <li>送料・配送日数の案内</li>
                  <li>商品の基本情報</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">プロンプト例:</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs whitespace-pre-wrap">
{`あなたは○○ショップの
カスタマーサポートAIです。
送料: 全国一律 ¥550
(¥5,000以上で送料無料)
返品: 到着7日以内・未使用品`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* 飲食 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🍽️ 飲食店・レストラン</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-xs mb-2">対応できる質問:</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>営業時間・定休日</li>
                  <li>予約の空き確認</li>
                  <li>メニュー・コース案内</li>
                  <li>アレルギー対応の確認</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">活用ポイント:</p>
                <p className="text-gray-600 text-xs">
                  予約の一次受付をAIが対応し、確定は人間が電話で確認。
                  ピーク時間帯の電話対応を大幅に削減できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 安全対策 */}
      <section id="safety" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. 安全対策：人間エスカレーションのルール
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AIに全てを任せるのは危険です。<strong>「AIが対応すべき範囲」と「人間に引き継ぐ範囲」</strong>を
          明確に決めておく必要があります。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">内容</th>
                <th className="border border-gray-200 px-4 py-2 text-center">AI対応</th>
                <th className="border border-gray-200 px-4 py-2 text-left">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">営業時間・アクセス案内</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-bold">✅ OK</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">定型情報、間違えにくい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">FAQ（よくある質問）</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-bold">✅ OK</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">事前にプロンプトに組み込める</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">予約の一次受付</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-green-600 font-bold">✅ OK</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">希望日時を聞くだけ</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">予約の確定</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">空き状況の確認が必要</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">クレーム対応</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">感情的な対応が必要</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">見積もり・料金交渉</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">間違った金額提示のリスク</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">医療・法律の相談</td>
                <td className="border border-gray-200 px-4 py-2 text-center text-red-600 font-bold">❌ NG</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-600">専門家が対応すべき</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// エスカレーション判定をプロンプトに組み込む</p>
          <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`// システムプロンプトに追加:
// 「以下のケースでは必ず
//   "担当者にお繋ぎいたします"と回答:
//   - クレーム、不満、怒りの表現
//   - 具体的な金額の交渉
//   - 医療・法律に関する相談
//   - "人間と話したい"という要望
//   - 3回以上同じ質問が繰り返された場合」`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            ⚠️ <strong>鉄則:</strong> AIの応答メッセージの末尾に「※ AIによる自動応答です」と
            入れるかどうかは業種次第ですが、<strong>聞かれたら正直に答える</strong>のが信頼のコツです。
          </p>
        </div>
      </section>

      {/* 9. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. 運用コスト
        </h2>
        <div className="bg-green-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">月間200件のメッセージを処理した場合:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">LINE公式アカウント（コミュニケーションプラン）</span>
              <span className="font-bold text-gray-900">¥0（月200通まで無料）</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Claude API（200回のAI応答生成）</span>
              <span className="font-bold text-gray-900">約 ¥200</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">サーバー（Railway無料枠 or VPS）</span>
              <span className="font-bold text-gray-900">¥0〜1,000</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-bold text-lg">合計</span>
              <span className="text-3xl font-bold text-green-600">¥200〜1,200/月</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 比較: パートスタッフ vs AI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">パートスタッフ（LINE返信担当）</p>
              <p className="text-2xl font-bold text-red-600">¥80,000/月</p>
              <p className="text-gray-400 text-xs">時給1,200円×3h×22日</p>
              <p className="text-gray-400 text-xs">営業時間内のみ対応</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">AI自動応答</p>
              <p className="text-2xl font-bold text-green-600">¥1,200/月</p>
              <p className="text-gray-400 text-xs">24時間365日対応</p>
              <p className="text-gray-400 text-xs">応答速度5秒以内</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            コスト差は<strong>約67倍</strong>。しかもAIは24時間・即レス。
          </p>
        </div>
      </section>

      {/* 10. 発展 */}
      <section id="next" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. さらなる発展
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📅 Googleカレンダー連携</h3>
            <p className="text-gray-600 text-sm">
              AIが予約希望を聞き取り、Googleカレンダーの空き状況をリアルタイムで確認。
              空いていればそのまま予約確定まで自動化。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📊 顧客データベース連携</h3>
            <p className="text-gray-600 text-sm">
              リピーターのお客様の過去の予約履歴や好みをAIが参照。
              「前回と同じメニューでよろしいですか？」といったパーソナルな対応が可能に。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">🖼️ 画像認識</h3>
            <p className="text-gray-600 text-sm">
              Claude APIはマルチモーダル対応。お客様が「こんな髪型にしたい」と画像を送れば、
              AIが内容を理解して対応。ECサイトなら商品の写真から在庫確認も。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📨 プッシュ通知</h3>
            <p className="text-gray-600 text-sm">
              予約のリマインダー、新商品のお知らせ、季節のキャンペーン情報などを
              AIが最適なタイミングで自動配信。
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
              <span className="text-gray-700">LINE Webhook + Claude APIで<strong>24時間AI自動応答</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">会話履歴を保持して<strong>文脈を理解した応答</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">美容室・クリニック・EC・飲食店など<strong>あらゆる業種に対応</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">月200件でも<strong>¥1,200以下</strong>の運用コスト</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">人間エスカレーションルールで<strong>安全運用</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「うちのLINE公式にもAI応答を入れたい」
        </h2>
        <p className="text-gray-600 mb-6">
          業種に合わせたカスタマイズ、Googleカレンダー連携、顧客管理まで、
          あなたのビジネスに最適なLINE AI応答をご提案します。
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
            href="/blog/ai-auto-reply-bot"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">Claude APIで問い合わせ自動返信botを作る方法</p>
            <p className="text-gray-500 text-xs mt-1">メールでのAI自動返信を実装</p>
          </Link>
          <Link
            href="/blog/contact-form-discord"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">問い合わせフォーム→Discord自動通知の作り方</p>
            <p className="text-gray-500 text-xs mt-1">Webhook連携の基本をマスター</p>
          </Link>
          <Link
            href="/blog/chatbot-cost"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">チャットボット導入費用の相場</p>
            <p className="text-gray-500 text-xs mt-1">SaaS vs 自社開発、どっちが安い？</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
