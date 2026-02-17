import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '社内FAQ chatbotの作り方｜Slack×Claude API実践ガイド',
  description:
    '社内ナレッジをAIに学習させ、SlackやTeamsで質問できるFAQ chatbotを構築。マニュアル検索の時間をゼロに。コード全文付き実践ガイド。',
  openGraph: {
    title: '社内FAQ chatbotの作り方｜Slack×Claude API実践ガイド',
    description:
      '社内の「これどうやるんだっけ？」をAIが即回答。Slack×Claude APIでFAQ bot構築。',
    type: 'article',
  },
  keywords: [
    '社内FAQ chatbot',
    'Slack bot AI',
    '社内チャットボット 作り方',
    'Claude API Slack',
    'FAQ bot 自作',
    '社内ナレッジ AI',
    'Slack bot 作り方',
    'Teams chatbot AI',
  ],
};

export default function SlackFaqChatbotPage() {
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
        <span>社内FAQ chatbot</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        社内FAQ chatbotの作り方
        <br />
        <span className="text-2xl sm:text-3xl">Slack×Claude API実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">
          社内DX
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          「経費精算のやり方は？」「有給の申請方法は？」「このツールの使い方は？」<br />
          社内で毎日繰り返される同じ質問。マニュアルはあるけど<strong>誰も読まない</strong>。
          結局、詳しい人に聞く。その人の時間が奪われる。<br />
          この記事では、<strong>社内のナレッジをAIに学習させ、Slackで質問できるFAQ chatbot</strong>を
          コード付きで構築します。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約15分 ｜ 実装時間：約2時間 ｜ 前提：Slackワークスペース（無料プランでOK）
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#why" className="text-primary hover:underline">1. 社内FAQの課題</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: ナレッジベースを準備する</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: Slack Appを作成する</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: AIで回答を生成する</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: 全体を統合する</a></li>
          <li><a href="#knowledge" className="text-primary hover:underline">7. ナレッジの管理と更新</a></li>
          <li><a href="#usecases" className="text-primary hover:underline">8. 活用シーン別カスタマイズ</a></li>
          <li><a href="#teams" className="text-primary hover:underline">9. Microsoft Teams版</a></li>
          <li><a href="#cost" className="text-primary hover:underline">10. 運用コスト</a></li>
        </ol>
      </div>

      {/* 1. 課題 */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. 社内FAQの課題
        </h2>

        <div className="bg-red-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-red-700 mb-3">📊 こんな経験ありませんか？</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">1.8時間</span>
              <span className="text-gray-700 text-sm">社員1人あたりの「情報探し」に費やす時間/日（McKinsey調査）</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">5回</span>
              <span className="text-gray-700 text-sm">同じ質問が別の人から来る平均回数/週</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">67%</span>
              <span className="text-gray-700 text-sm">の社員が「社内マニュアルが見つからない・見にくい」と回答</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <h4 className="font-bold text-red-700 text-sm mb-2">❌ 現状の問題</h4>
            <ul className="text-gray-600 text-xs space-y-1 list-disc list-inside">
              <li>マニュアルがNotionの奥底に埋もれてる</li>
              <li>結局「○○さんに聞く」が最速になる</li>
              <li>詳しい人の時間が奪われ続ける</li>
              <li>新人が同じ質問を何度もする</li>
              <li>退職者のナレッジが消える</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h4 className="font-bold text-green-700 text-sm mb-2">✅ FAQ bot導入後</h4>
            <ul className="text-gray-600 text-xs space-y-1 list-disc list-inside">
              <li>Slackで質問→AIが即回答</li>
              <li>マニュアルの該当箇所を引用表示</li>
              <li>24時間回答可能（夜勤・海外拠点も）</li>
              <li>同じ質問はAIが何度でも対応</li>
              <li>ナレッジが組織に蓄積される</li>
            </ul>
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
{`┌──────────┐ メンション ┌──────────┐  検索   ┌──────────┐
│  Slack   │ ───────> │  サーバー  │ ────> │ ナレッジ  │
│  社員     │          │ (Express) │       │   ベース   │
│          │ <─────── │           │       │(Markdown) │
│          │  回答     │           │       └──────────┘
└──────────┘          │           │
                      │  Claude   │
                      │   API     │
                      │  (回答生成)│
                      └──────────┘`}
          </pre>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>社員がSlackでbotにメンションして質問</li>
          <li>サーバーがナレッジベース（Markdownファイル）を検索</li>
          <li>関連するナレッジをClaude APIに渡して回答を生成</li>
          <li>Slackに回答を返信（出典のドキュメント名付き）</li>
        </ol>
      </section>

      {/* 3. Step 1: ナレッジベース */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: ナレッジベースを準備する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AIに回答させるには、まず<strong>社内の情報をテキストデータとして整理</strong>する必要があります。
          Markdownファイルで管理するのが最もシンプルです。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># ナレッジベースのディレクトリ構成</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`knowledge/
├── 総務/
│   ├── 経費精算.md
│   ├── 有給申請.md
│   ├── 出張申請.md
│   └── 備品購入.md
├── IT/
│   ├── PC初期設定.md
│   ├── VPN接続方法.md
│   ├── Slack使い方.md
│   └── パスワード変更.md
├── 人事/
│   ├── 評価制度.md
│   ├── 福利厚生.md
│   └── 入社手続き.md
└── 営業/
    ├── 見積もり手順.md
    ├── 契約フロー.md
    └── CRM操作方法.md`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># knowledge/総務/経費精算.md の例</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`# 経費精算の方法

## 申請手順
1. freee経費精算にログイン
2. 「経費申請」→「新規作成」
3. 領収書の写真をアップロード
4. 勘定科目を選択（迷ったら「消耗品費」）
5. 上長に承認申請

## 締め日
- 毎月25日締め、翌月10日払い
- 25日を過ぎた分は翌々月になります

## よくある質問
Q. 領収書をなくした場合は？
A. 出金伝票で代用可能。上長の承認が必要。

Q. クレジットカード明細でもOK？
A. 3,000円以下ならOK。それ以上は領収書必須。`}
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>既存のドキュメントの活用:</strong> NotionやGoogle Docsに既にマニュアルがあれば、
            エクスポートしてMarkdownに変換するだけ。ゼロから書く必要はありません。
            Notionなら「エクスポート」→「Markdown」で一括出力可能。
          </p>
        </div>
      </section>

      {/* 4. Step 2: Slack App */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: Slack Appを作成する
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">Slack APIにアクセス</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">api.slack.com/apps</code> → 「Create New App」→ 「From scratch」
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">Bot Token Scopesを設定</p>
              <p className="text-gray-600 text-sm">
                OAuth &amp; Permissions → 以下のスコープを追加:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 mt-2">
                <pre className="text-green-400 text-xs">
{`app_mentions:read   # メンション検知
chat:write          # メッセージ送信
channels:history    # チャンネル履歴
im:history          # DM履歴`}
                </pre>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">Event Subscriptionsを有効化</p>
              <p className="text-gray-600 text-sm">
                Request URL にサーバーのURLを設定。イベント: <code className="bg-gray-200 px-1 rounded">app_mention</code> を追加。
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <p className="font-bold text-gray-900">ワークスペースにインストール</p>
              <p className="text-gray-600 text-sm">
                「Install to Workspace」→ 許可 → Bot User OAuth Tokenをコピー
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># .env に保存</p>
          <pre className="text-green-400 text-sm">
{`SLACK_BOT_TOKEN=xoxb-xxxxxxxxxxxx
SLACK_SIGNING_SECRET=xxxxxxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx`}
          </pre>
        </div>
      </section>

      {/* 5. Step 3: AI回答生成 */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: AIで回答を生成する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ナレッジベースを検索し、関連するドキュメントをClaude APIに渡して回答を生成します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// knowledge.js — ナレッジ検索</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const fs = require('fs');
const path = require('path');

const KNOWLEDGE_DIR = './knowledge';

/**
 * ナレッジベースからキーワードマッチで関連文書を検索
 */
function searchKnowledge(query) {
  const results = [];
  const files = getAllMarkdownFiles(KNOWLEDGE_DIR);

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.md');

    // シンプルなキーワードマッチ（本番ではベクトル検索推奨）
    const queryWords = query
      .toLowerCase()
      .split(/\\s+/)
      .filter(w => w.length > 1);

    let score = 0;
    for (const word of queryWords) {
      const regex = new RegExp(word, 'gi');
      const matches = content.match(regex);
      if (matches) score += matches.length;
    }

    if (score > 0) {
      results.push({
        fileName,
        filePath: filePath.replace(KNOWLEDGE_DIR + '/', ''),
        content,
        score,
      });
    }
  }

  // スコア順にソートして上位3件
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 3);
}

function getAllMarkdownFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

module.exports = { searchKnowledge };`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// ai-answer.js — Claude APIで回答生成</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const Anthropic = require('@anthropic-ai/sdk');
const { searchKnowledge } = require('./knowledge');

const anthropic = new Anthropic();

const SYSTEM_PROMPT = \`あなたは社内FAQ AIアシスタントです。
社員からの質問に、提供されたナレッジベースの情報をもとに回答します。

ルール:
- ナレッジベースに情報がある場合はそれに基づいて回答
- 情報がない場合は「この件についてはナレッジベースに
  情報がありません。担当部署にお問い合わせください」と回答
- 回答の末尾に出典（参照したドキュメント名）を記載
- 推測や憶測で回答しない
- 簡潔に、でも必要な情報は漏らさず
- Slackのマークダウン形式で返す（*太字*、箇条書き等）\`;

async function generateAnswer(question) {
  // ナレッジベースを検索
  const docs = searchKnowledge(question);

  if (docs.length === 0) {
    return {
      answer: 'この件についてはナレッジベースに情報が'
        + 'ありません。\\n担当部署にお問い合わせください。',
      sources: [],
    };
  }

  // 関連ドキュメントをコンテキストとして構築
  const context = docs
    .map(d => '--- ' + d.filePath + ' ---\\n' + d.content)
    .join('\\n\\n');

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    system: SYSTEM_PROMPT,
    messages: [{
      role: 'user',
      content: '【社内ナレッジ】\\n' + context
        + '\\n\\n【質問】\\n' + question,
    }],
  });

  return {
    answer: response.content[0].text,
    sources: docs.map(d => d.filePath),
  };
}

module.exports = { generateAnswer };`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>ポイント:</strong> 回答は必ずナレッジベースの情報に基づく（RAG: Retrieval-Augmented Generation）。
            AIの「ハルシネーション」（もっともらしいウソ）を防ぎ、正確な社内情報を提供します。
          </p>
        </div>
      </section>

      {/* 6. Step 4: 統合 */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: 全体を統合する
        </h2>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2">// server.js — Slack FAQ Bot</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`const express = require('express');
const crypto = require('crypto');
const { generateAnswer } = require('./ai-answer');
require('dotenv').config();

const app = express();

// Slack署名検証
function verifySlackSignature(req, res, buf) {
  const timestamp = req.headers['x-slack-request-timestamp'];
  const signature = req.headers['x-slack-signature'];

  const sigBase = 'v0:' + timestamp + ':' + buf.toString();
  const mySignature = 'v0=' + crypto
    .createHmac('sha256', process.env.SLACK_SIGNING_SECRET)
    .update(sigBase)
    .digest('hex');

  if (mySignature !== signature) {
    throw new Error('Invalid Slack signature');
  }
}

app.use(express.json({ verify: verifySlackSignature }));

// Slackイベントエンドポイント
app.post('/slack/events', async (req, res) => {
  // URL検証（初回のみ）
  if (req.body.type === 'url_verification') {
    return res.json({ challenge: req.body.challenge });
  }

  // イベント処理
  const event = req.body.event;
  if (!event || event.type !== 'app_mention') {
    return res.status(200).send('ok');
  }

  // 即座に200を返す（3秒ルール）
  res.status(200).send('ok');

  // メンション部分を除去して質問を抽出
  const question = event.text
    .replace(/<@[A-Z0-9]+>/g, '')
    .trim();

  if (!question) {
    await postToSlack(
      event.channel,
      '質問をどうぞ！例: 「経費精算のやり方は？」',
      event.ts
    );
    return;
  }

  // 「考え中...」のリアクション
  await addReaction(event.channel, event.ts, 'hourglass');

  try {
    // AI回答を生成
    const { answer, sources } = await generateAnswer(question);

    // 出典情報を追加
    let response = answer;
    if (sources.length > 0) {
      response += '\\n\\n'
        + '_📄 参照: ' + sources.join(', ') + '_';
    }

    // Slackに回答を投稿（スレッド返信）
    await postToSlack(event.channel, response, event.ts);
  } catch (error) {
    console.error('Error:', error);
    await postToSlack(
      event.channel,
      'エラーが発生しました。管理者に連絡してください。',
      event.ts
    );
  }

  // リアクション削除
  await removeReaction(event.channel, event.ts, 'hourglass');
  await addReaction(event.channel, event.ts, 'white_check_mark');
});

// Slackメッセージ送信
async function postToSlack(channel, text, threadTs) {
  await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + process.env.SLACK_BOT_TOKEN,
    },
    body: JSON.stringify({
      channel,
      text,
      thread_ts: threadTs,  // スレッド返信
    }),
  });
}

// リアクション追加/削除
async function addReaction(channel, ts, emoji) {
  await fetch('https://slack.com/api/reactions.add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + process.env.SLACK_BOT_TOKEN,
    },
    body: JSON.stringify({
      channel, timestamp: ts, name: emoji
    }),
  });
}

async function removeReaction(channel, ts, emoji) {
  await fetch('https://slack.com/api/reactions.remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + process.env.SLACK_BOT_TOKEN,
    },
    body: JSON.stringify({
      channel, timestamp: ts, name: emoji
    }),
  });
}

app.listen(3000, () => {
  console.log('FAQ Bot running on port 3000');
});`}
          </pre>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="text-gray-700 text-sm">
            🎯 <strong>UXのポイント:</strong>
          </p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>質問中は⏳リアクション → 回答後に✅に変更（処理中が分かる）</li>
            <li>スレッド返信でチャンネルを汚さない</li>
            <li>出典ドキュメント名を表示（信頼性の担保）</li>
          </ul>
        </div>
      </section>

      {/* 7. ナレッジ管理 */}
      <section id="knowledge" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. ナレッジの管理と更新
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FAQ botの品質は<strong>ナレッジベースの鮮度</strong>で決まります。定期的な更新の仕組みを作りましょう。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📝 GitHub管理（推奨）</h3>
            <p className="text-gray-600 text-sm">
              ナレッジのMarkdownファイルをGitHubリポジトリで管理。
              更新はプルリクエストで行い、レビュー→マージで品質を担保。
              マージ時にサーバーが自動更新（webhook経由）。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">📊 回答できなかった質問のログ</h3>
            <p className="text-gray-600 text-sm">
              「ナレッジベースに情報がありません」と回答した質問を記録。
              週次でレビューし、必要なドキュメントを追加。
              <strong>botが答えられない質問 = 足りないナレッジ</strong>を可視化。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">👍👎 フィードバック機能</h3>
            <p className="text-gray-600 text-sm">
              回答メッセージに👍👎のリアクションボタンを追加。
              👎が多い回答は人間がレビューし、ナレッジを修正。
              継続的な品質改善ループを実現。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 活用シーン */}
      <section id="usecases" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. 活用シーン別カスタマイズ
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">🏢 総務・バックオフィス</h3>
            <p className="text-gray-600 text-sm mb-2">経費精算、有給申請、備品購入、入退社手続き</p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-gray-500 text-xs">会話例:</p>
              <p className="text-gray-700 text-sm mt-1"><strong>社員:</strong> @faq-bot 経費精算の締め日いつ？</p>
              <p className="text-gray-700 text-sm"><strong>bot:</strong> 毎月25日締め、翌月10日払いです。25日を過ぎた分は翌々月になります。<br /><em>📄 参照: 総務/経費精算.md</em></p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">💻 IT・情シス</h3>
            <p className="text-gray-600 text-sm mb-2">PC設定、VPN接続、ツール操作、トラブルシューティング</p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-gray-500 text-xs">会話例:</p>
              <p className="text-gray-700 text-sm mt-1"><strong>社員:</strong> @faq-bot VPN繋がらないんだけど</p>
              <p className="text-gray-700 text-sm"><strong>bot:</strong> VPN接続のトラブルシューティング:<br />1. まずWi-Fiが接続されているか確認<br />2. VPNクライアントを再起動<br />3. それでも繋がらない場合は情シス(内線: 1234)へ<br /><em>📄 参照: IT/VPN接続方法.md</em></p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">📚 新人オンボーディング</h3>
            <p className="text-gray-600 text-sm mb-2">入社手続き、ツール設定、社内ルール、自己紹介</p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-gray-500 text-xs">会話例:</p>
              <p className="text-gray-700 text-sm mt-1"><strong>新入社員:</strong> @faq-bot Slackのプロフィール何書けばいい？</p>
              <p className="text-gray-700 text-sm"><strong>bot:</strong> Slackプロフィールの設定:<br />・表示名: 名前（チーム名）<br />・ステータス: 「入社○日目！」等<br />・自己紹介: #self-introduction チャンネルに投稿<br /><em>📄 参照: IT/Slack使い方.md</em></p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">📞 カスタマーサポート（社内向け）</h3>
            <p className="text-gray-600 text-sm mb-2">商品情報、対応マニュアル、エスカレーション手順</p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-gray-500 text-xs">会話例:</p>
              <p className="text-gray-700 text-sm mt-1"><strong>CS担当:</strong> @faq-bot 返品の条件って？</p>
              <p className="text-gray-700 text-sm"><strong>bot:</strong> 返品条件:<br />・到着後7日以内<br />・未使用・未開封品に限る<br />・お客様都合の場合は送料お客様負担<br />・不良品は着払いで受付<br /><em>📄 参照: 営業/返品ポリシー.md</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Teams版 */}
      <section id="teams" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. Microsoft Teams版
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Teamsをお使いの場合も、同じ仕組みで構築可能です。
          AI回答生成の部分はそのまま流用し、Slack APIの部分をTeams Bot Frameworkに置き換えます。
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
          <h3 className="font-bold text-gray-900 mb-3">Slack vs Teams の違い</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Slack</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Bot作成</td>
                  <td className="border border-gray-200 px-3 py-2">Slack API</td>
                  <td className="border border-gray-200 px-3 py-2">Bot Framework + Azure</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">イベント受信</td>
                  <td className="border border-gray-200 px-3 py-2">Events API</td>
                  <td className="border border-gray-200 px-3 py-2">Bot Framework Webhook</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">メッセージ送信</td>
                  <td className="border border-gray-200 px-3 py-2">chat.postMessage</td>
                  <td className="border border-gray-200 px-3 py-2">Activity.sendActivity</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">費用</td>
                  <td className="border border-gray-200 px-3 py-2">無料プランでOK</td>
                  <td className="border border-gray-200 px-3 py-2">Microsoft 365必須</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>どちらでも構築可能です。</strong> Slackの方が開発がシンプルですが、
            社内でTeamsを使っている場合はTeams版をお選びください。
            AI回答ロジックは100%共通で使えます。
          </p>
        </div>
      </section>

      {/* 10. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. 運用コスト
        </h2>
        <div className="bg-green-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">社員50名、月間500件の質問を処理した場合:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Slack（無料プラン）</span>
              <span className="font-bold text-gray-900">¥0</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Claude API（500回の回答生成）</span>
              <span className="font-bold text-gray-900">約 ¥500</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">VPSサーバー</span>
              <span className="font-bold text-gray-900">¥1,000〜3,000</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-bold text-lg">合計</span>
              <span className="text-3xl font-bold text-green-600">¥1,500〜3,500/月</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 比較: 人間 vs FAQ Bot</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">総務担当者の対応時間</p>
              <p className="text-2xl font-bold text-red-600">月40時間</p>
              <p className="text-gray-400 text-xs">1件5分×500件/月=約40時間</p>
              <p className="text-gray-400 text-xs">人件費換算: 約¥100,000</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm mb-1">FAQ Bot</p>
              <p className="text-2xl font-bold text-green-600">¥3,500/月</p>
              <p className="text-gray-400 text-xs">24時間即回答</p>
              <p className="text-gray-400 text-xs">人間は複雑な案件だけに集中</p>
            </div>
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
              <span className="text-gray-700">社内ナレッジをMarkdownで管理し<strong>AIが即回答</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">RAG方式で<strong>正確な情報に基づく回答</strong>（ハルシネーション防止）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">Slack/Teams両対応、<strong>スレッド返信+出典表示</strong>で実用的</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">月500件対応でも<strong>¥3,500以下</strong>の運用コスト</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">フィードバック機能で<strong>継続的に品質向上</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「社内のナレッジ共有をAIで効率化したい」
        </h2>
        <p className="text-gray-600 mb-6">
          既存のマニュアルやドキュメントを活用して、
          あなたの会社専用のFAQ botを構築します。
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
            <p className="text-gray-500 text-xs mt-1">AI×Webhook連携の基本</p>
          </Link>
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
        </div>
      </section>
    </article>
  );
}
