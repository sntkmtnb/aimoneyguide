import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'X(Twitter)の投稿・引用RTをAIで自動化する方法｜Python×API実践ガイド',
  description:
    'X(Twitter) APIとAIを組み合わせて、投稿・引用RT・リプライを自動化する方法を解説。Python+Claude APIでキュレーション型X運用を構築。コード全文付き。',
  openGraph: {
    title: 'X(Twitter)の投稿・引用RTをAIで自動化する方法｜Python×API実践ガイド',
    description:
      'X API×AIで投稿・引用RT・リプライを自動化。キュレーション型SNS運用の作り方。',
    type: 'article',
  },
  keywords: [
    'X 自動投稿',
    'Twitter API 自動化',
    'X 引用RT 自動',
    'Twitter bot 作り方',
    'X API Python',
    'SNS運用 自動化',
    'AI SNS投稿',
    'Twitter 自動化 Python',
  ],
};

export default function XAutoPostingPage() {
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
        <span>X投稿・引用RTのAI自動化</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        X(Twitter)の投稿・引用RTをAIで自動化する方法
        <br />
        <span className="text-2xl sm:text-3xl">Python×API実践ガイド</span>
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime="2026-02-17">2026.02.17</time>
        <span className="bg-sky-100 text-sky-700 px-2 py-0.5 rounded text-xs font-medium">
          実践ガイド
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
          SNS運用
        </span>
      </div>

      {/* リード文 */}
      <div className="bg-gradient-to-r from-sky-50 to-green-50 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          「Xの投稿を毎日続けるのがしんどい…」「良い投稿を見つけて引用RTしたいけど時間がない…」<br />
          この記事では、<strong>X(Twitter) APIとAIを組み合わせて、投稿・引用RT・リプライ返信を自動化する仕組み</strong>を
          実際に僕たちが運用しているコードをベースに解説します。
        </p>
        <p className="text-gray-600 text-sm mt-3">
          ⏱ 読了時間：約15分 ｜ 実装時間：約1時間 ｜ 前提：Python基本知識、X APIアカウント
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📖 目次</h2>
        <ol className="space-y-2 text-gray-700">
          <li><a href="#strategy" className="text-primary hover:underline">1. キュレーション型X運用とは？</a></li>
          <li><a href="#architecture" className="text-primary hover:underline">2. 仕組みの全体像</a></li>
          <li><a href="#step1" className="text-primary hover:underline">3. Step 1: X APIの準備</a></li>
          <li><a href="#step2" className="text-primary hover:underline">4. Step 2: 良いポストを自動検索する</a></li>
          <li><a href="#step3" className="text-primary hover:underline">5. Step 3: AIでコメントを生成する</a></li>
          <li><a href="#step4" className="text-primary hover:underline">6. Step 4: 引用RTを自動投稿する</a></li>
          <li><a href="#step5" className="text-primary hover:underline">7. Step 5: リプライ自動返信</a></li>
          <li><a href="#cron" className="text-primary hover:underline">8. cronで定期実行する</a></li>
          <li><a href="#analytics" className="text-primary hover:underline">9. 反応を分析してテーマを改善する</a></li>
          <li><a href="#safety" className="text-primary hover:underline">10. スパム対策とアカウント凍結の回避</a></li>
          <li><a href="#cost" className="text-primary hover:underline">11. 運用コスト</a></li>
        </ol>
      </div>

      {/* 1. キュレーション型X運用 */}
      <section id="strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. キュレーション型X運用とは？
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          X運用の方法は大きく分けて2つあります。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
            <h3 className="font-bold text-red-700 mb-2">❌ オリジナル投稿型</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>毎日ネタを考えて投稿</li>
              <li>ネタ切れとの戦い</li>
              <li>作成に時間がかかる</li>
              <li>当たり外れが大きい</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
            <h3 className="font-bold text-green-700 mb-2">✅ キュレーション型</h3>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>良い投稿を見つけて引用RT</li>
              <li>ネタは他の人が提供してくれる</li>
              <li>コメント追加で付加価値</li>
              <li>安定してコンテンツを出せる</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>キュレーション型のメリット</strong>は、「この人をフォローしておけば最新情報がわかる」
          というポジションが取れること。自分で一から書くより、良いコンテンツを選ぶ目利き力が価値になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 text-sm">
            💡 <strong>僕たちの運用:</strong> AI自動化・業務効率化のテーマで、
            1日8本の引用RTを自動投稿。海外の英語ポストは日本語に翻訳して引用。
            これを<strong>全自動</strong>で回しています。
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
{`┌──────────────┐  検索API   ┌──────────────┐  Claude API  ┌──────────────┐
│   X (Twitter)│ ────────> │   Python     │ ──────────> │  コメント生成 │
│   良い投稿    │           │  スクリプト   │ <────────── │  (AI)        │
└──────────────┘           │              │             └──────────────┘
                           │              │
       引用RT ◄──────────── │              │  投稿API
                           └──────────────┘
                                  ↑
                              cron (定期実行)
                           1日4回 × 2件 = 8件/日`}
          </pre>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>X検索APIで特定キーワードのポストを取得</li>
          <li>Claude APIでポストを評価＋コメント生成</li>
          <li>良いポストに引用RTで投稿</li>
          <li>cronで1日4回自動実行</li>
        </ol>
      </section>

      {/* 3. Step 1: X APIの準備 */}
      <section id="step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Step 1: X APIの準備
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          X APIを使うには、Developer Portalでアプリを作成し、認証情報を取得します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-bold text-gray-900">X Developer Portalにアクセス</p>
              <p className="text-gray-600 text-sm">
                <code className="bg-gray-200 px-1 rounded">developer.x.com</code> でアカウント作成・アプリ登録
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-bold text-gray-900">プランを選ぶ</p>
              <p className="text-gray-600 text-sm">
                無料プラン: 投稿のみ（月1,500ツイート）<br />
                Basicプラン（$200/月）: 検索API＋投稿（月10,000ツイート）
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-bold text-gray-900">認証情報を取得</p>
              <p className="text-gray-600 text-sm">
                API Key、API Secret、Access Token、Access Token Secret の4つ
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># credentials.json</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`{
  "api_key": "YOUR_API_KEY",
  "api_secret": "YOUR_API_SECRET",
  "access_token": "YOUR_ACCESS_TOKEN",
  "access_token_secret": "YOUR_ACCESS_TOKEN_SECRET",
  "bearer_token": "YOUR_BEARER_TOKEN"
}`}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># 必要なPythonライブラリ</p>
          <pre className="text-green-400 text-sm">
{`pip install requests requests-oauthlib anthropic`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 text-sm">
            💰 <strong>プラン選びのコツ:</strong> 引用RTの自動化には検索APIが必要なので、
            <strong>Basicプラン（$200/月）</strong>が必要です。ただし、検索APIなしでも
            特定アカウントのリストから取得する方法もあります（後述）。
          </p>
        </div>
      </section>

      {/* 4. Step 2: 良いポストを自動検索 */}
      <section id="step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Step 2: 良いポストを自動検索する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          X検索APIで、特定のキーワードに合うポストを取得します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># search_posts.py</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`import requests
import json
import random

# 認証情報を読み込み
with open('credentials.json') as f:
    creds = json.load(f)

BEARER_TOKEN = creds['bearer_token']

# 検索テーマ（ランダムに選択）
SEARCH_THEMES = [
    {
        'name': 'AI自動化',
        'query': '(AI 自動化 OR AI 業務効率化) lang:ja'
                 ' -is:retweet min_faves:10',
    },
    {
        'name': 'AIツール',
        'query': '(Claude OR ChatGPT OR Cursor) (便利 OR すごい'
                 ' OR 使ってみた) lang:ja -is:retweet min_faves:5',
    },
    {
        'name': '海外AI活用',
        'query': '(AI agent OR AI automation OR no-code AI)'
                 ' -is:retweet min_faves:20',
    },
    {
        'name': 'GAS/ノーコード',
        'query': '(GAS OR Zapier OR Make) (自動化 OR 効率化)'
                 ' lang:ja -is:retweet min_faves:5',
    },
]

def search_posts(theme=None):
    """テーマに基づいてポストを検索"""
    if theme is None:
        theme = random.choice(SEARCH_THEMES)

    url = 'https://api.twitter.com/2/tweets/search/recent'
    headers = {
        'Authorization': f'Bearer {BEARER_TOKEN}',
    }
    params = {
        'query': theme['query'],
        'max_results': 20,
        'tweet.fields': 'public_metrics,author_id,lang,created_at',
        'expansions': 'author_id',
        'user.fields': 'username,name,public_metrics',
    }

    res = requests.get(url, headers=headers, params=params)
    if res.status_code != 200:
        raise Exception(f'Search API error: {res.status_code}')

    data = res.json()
    tweets = data.get('data', [])

    # エンゲージメント順にソート
    tweets.sort(
        key=lambda t: (
            t['public_metrics']['like_count']
            + t['public_metrics']['retweet_count'] * 3
        ),
        reverse=True,
    )

    return tweets[:10], theme['name']  # 上位10件`}
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700 text-sm">
            📌 <strong>検索クエリのコツ:</strong>
          </p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1 list-disc list-inside">
            <li><code className="bg-gray-200 px-1 rounded">-is:retweet</code>: RTを除外（オリジナル投稿のみ）</li>
            <li><code className="bg-gray-200 px-1 rounded">min_faves:10</code>: いいね10以上（質のフィルター）</li>
            <li><code className="bg-gray-200 px-1 rounded">lang:ja</code>: 日本語ポストに限定</li>
            <li>テーマをランダム選択で、偏りなくキュレーション</li>
          </ul>
        </div>
      </section>

      {/* 5. Step 3: AIでコメント生成 */}
      <section id="step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Step 3: AIでコメントを生成する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          見つけたポストに対して、Claude APIで引用コメントを生成します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># generate_comment.py</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`import anthropic

client = anthropic.Anthropic()  # ANTHROPIC_API_KEY環境変数から自動取得

SYSTEM_PROMPT = """あなたはAI活用・業務自動化の専門家です。
Xの引用RTに付けるコメントを生成してください。

ルール:
- 120文字以内（短く、インパクトのある一言）
- 元ポストの良い点を具体的に触れる
- 自分の知見や経験を1つ添える
- 絵文字は1-2個まで
- ハッシュタグは付けない
- 「素晴らしい！」「いいですね！」だけの薄いコメントは禁止
- 英語ポストの場合は日本語に翻訳してコメントする

トーンの例:
- 「これ実際に導入したけど、○○の部分が特に効いた」
- 「○○が面白い。うちでは△△に応用してる」
- 「🇺🇸→🇯🇵 要約すると○○。日本でも十分使える」
"""

def generate_comment(tweet_text: str, is_english: bool = False):
    """ポストに対する引用コメントを生成"""

    user_msg = f"""以下のポストに対する引用RTコメントを生成してください。

【ポスト内容】
{tweet_text}

{'※ 英語ポストです。日本語で翻訳要約+コメントしてください。' if is_english else ''}

120文字以内のコメントのみを出力してください。"""

    response = client.messages.create(
        model='claude-sonnet-4-20250514',
        max_tokens=200,
        system=SYSTEM_PROMPT,
        messages=[{'role': 'user', 'content': user_msg}],
    )

    return response.content[0].text.strip()`}
          </pre>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">生成例</h3>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">元ポスト（日本語）:</p>
            <p className="text-gray-700 text-sm mb-3 italic">
              「ChatGPTで議事録の要約を自動化したら、会議後の作業が30分→5分になった。もう戻れない。」
            </p>
            <p className="text-gray-500 text-xs mb-2">AIが生成した引用コメント:</p>
            <p className="text-gray-900 font-medium text-sm">
              「議事録要約、うちではGAS+Geminiで完全自動化してる。会議のGoogleMeet録画から自動で文字起こし→要約→Slack通知まで。人の手ゼロ 🔥」
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-gray-500 text-xs mb-2">元ポスト（英語）:</p>
            <p className="text-gray-700 text-sm mb-3 italic">
              {'"Just shipped an AI agent that handles customer support tickets. 80% resolution rate without human intervention."'}
            </p>
            <p className="text-gray-500 text-xs mb-2">AIが生成した引用コメント:</p>
            <p className="text-gray-900 font-medium text-sm">
              「🇺🇸→🇯🇵 AIエージェントでカスタマーサポートを自動化、人間なしで80%解決。日本でも問い合わせ対応のAI化は効果大。一次返信だけでも自動化すると対応速度が劇的に変わる」
            </p>
          </div>
        </div>
      </section>

      {/* 6. Step 4: 引用RT投稿 */}
      <section id="step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Step 4: 引用RTを自動投稿する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          OAuth 1.0aで認証し、引用RT（コメント付きリツイート）を投稿します。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># post_quote.py</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`from requests_oauthlib import OAuth1Session
import json
import time
import random

with open('credentials.json') as f:
    creds = json.load(f)

oauth = OAuth1Session(
    creds['api_key'],
    client_secret=creds['api_secret'],
    resource_owner_key=creds['access_token'],
    resource_owner_secret=creds['access_token_secret'],
)

def post_quote_tweet(tweet_id: str, comment: str):
    """引用RTを投稿"""
    url = 'https://api.twitter.com/2/tweets'

    # 引用RT = コメント + 元ツイートのURL
    quote_url = f'https://twitter.com/i/status/{tweet_id}'
    payload = {
        'text': comment,
        'quote_tweet_id': tweet_id,
    }

    res = oauth.post(url, json=payload)

    if res.status_code == 201:
        data = res.json()
        print(f'✅ 引用RT成功: {data["data"]["id"]}')
        return data['data']['id']
    else:
        print(f'❌ エラー: {res.status_code} {res.text}')
        return None

def run_curation(num_quotes=2):
    """メインフロー: 検索→AI分析→引用RT"""
    tweets, theme_name = search_posts()
    posted = 0
    done_ids = load_done_ids()  # 重複防止

    for tweet in tweets:
        if posted >= num_quotes:
            break
        if tweet['id'] in done_ids:
            continue

        # 英語判定
        is_english = tweet.get('lang', 'ja') != 'ja'

        # AIコメント生成
        comment = generate_comment(
            tweet['text'], is_english
        )

        # 投稿
        result = post_quote_tweet(tweet['id'], comment)
        if result:
            save_done_id(tweet['id'])
            posted += 1

            # スパム対策: 投稿間に15-30秒のランダム間隔
            if posted < num_quotes:
                wait = random.randint(15, 30)
                print(f'⏳ {wait}秒待機...')
                time.sleep(wait)

    print(f'🎉 {theme_name}テーマで{posted}件の引用RT完了')

def load_done_ids():
    """投稿済みIDを読み込み（重複防止）"""
    try:
        with open('done_ids.txt') as f:
            return set(f.read().strip().split('\\n'))
    except FileNotFoundError:
        return set()

def save_done_id(tweet_id):
    """投稿済みIDを記録"""
    with open('done_ids.txt', 'a') as f:
        f.write(tweet_id + '\\n')`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 text-sm">
            ✅ <strong>重複防止:</strong>{' '}
            <code className="bg-gray-200 px-1 rounded">done_ids.txt</code>に投稿済みのツイートIDを記録。
            同じポストを2回引用しないように制御しています。
          </p>
        </div>
      </section>

      {/* 7. Step 5: リプライ自動返信 */}
      <section id="step5" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Step 5: リプライ自動返信
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自分の投稿にリプライが来たら、AIで自動返信する仕組みも作れます。
          ただし、<strong>これには注意が必要</strong>です。
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-gray-700 text-sm font-bold mb-2">
            ⚠️ 重要: 自動返信のルール
          </p>
          <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
            <li><strong>初回の一次返信のみ自動化OK</strong>（お礼＋簡単なコメント）</li>
            <li><strong>2回目以降のやりとりは手動</strong>（会話の自動化はBANリスク大）</li>
            <li>「ありがとうございます！」だけの返信を連発しない</li>
            <li>相手の投稿内容に触れたパーソナルな返信にする</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># auto_reply.py（一次返信のみ）</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`def check_and_reply_mentions():
    """自分へのメンション・リプライをチェックして一次返信"""
    url = 'https://api.twitter.com/2/users/me/mentions'
    headers = {
        'Authorization': f'Bearer {BEARER_TOKEN}',
    }
    params = {
        'max_results': 10,
        'tweet.fields': 'public_metrics,in_reply_to_user_id',
    }

    res = requests.get(url, headers=headers, params=params)
    mentions = res.json().get('data', [])

    replied_ids = load_replied_ids()

    for mention in mentions:
        if mention['id'] in replied_ids:
            continue

        # AIで返信を生成
        reply_text = generate_reply(mention['text'])

        # リプライ投稿
        payload = {
            'text': reply_text,
            'reply': {
                'in_reply_to_tweet_id': mention['id']
            },
        }
        res = oauth.post(
            'https://api.twitter.com/2/tweets',
            json=payload
        )

        if res.status_code == 201:
            save_replied_id(mention['id'])
            print(f'✅ リプライ送信: {mention["id"]}')

        # スパム対策: 間隔を空ける
        time.sleep(random.randint(20, 45))`}
          </pre>
        </div>
      </section>

      {/* 8. cron設定 */}
      <section id="cron" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. cronで定期実行する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          スクリプトをcronで定期実行すれば、完全自動運用の完成です。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2"># crontab -e</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`# 引用RT: 1日4回 × 2件 = 8件/日
0 8  * * * cd /path/to/scripts && python3 curator.py
0 12 * * * cd /path/to/scripts && python3 curator.py
0 17 * * * cd /path/to/scripts && python3 curator.py
0 21 * * * cd /path/to/scripts && python3 curator.py

# リプライチェック: 1日3回
30 9  * * * cd /path/to/scripts && python3 auto_reply.py
30 14 * * * cd /path/to/scripts && python3 auto_reply.py
30 20 * * * cd /path/to/scripts && python3 auto_reply.py`}
          </pre>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">📊 運用スケジュール例</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-left">時刻</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">内容</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">件数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">8:00</td>
                  <td className="border border-gray-300 px-3 py-2">引用RT</td>
                  <td className="border border-gray-300 px-3 py-2">2件</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">9:30</td>
                  <td className="border border-gray-300 px-3 py-2">リプライチェック</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">12:00</td>
                  <td className="border border-gray-300 px-3 py-2">引用RT</td>
                  <td className="border border-gray-300 px-3 py-2">2件</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">14:30</td>
                  <td className="border border-gray-300 px-3 py-2">リプライチェック</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">17:00</td>
                  <td className="border border-gray-300 px-3 py-2">引用RT</td>
                  <td className="border border-gray-300 px-3 py-2">2件</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">20:30</td>
                  <td className="border border-gray-300 px-3 py-2">リプライチェック</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">21:00</td>
                  <td className="border border-gray-300 px-3 py-2">引用RT</td>
                  <td className="border border-gray-300 px-3 py-2">2件</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            → 計8件/日の引用RT + リプライ自動返信
          </p>
        </div>
      </section>

      {/* 9. 分析 */}
      <section id="analytics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. 反応を分析してテーマを改善する
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自動化して終わりではありません。<strong>データを見てテーマを改善し続ける</strong>のが重要です。
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-2"># analyze_performance.py</p>
          <pre className="text-green-400 text-sm whitespace-pre">
{`def analyze_daily_performance():
    """前日の投稿パフォーマンスを分析"""
    # 自分の直近ツイートを取得
    url = 'https://api.twitter.com/2/users/me/tweets'
    params = {
        'max_results': 20,
        'tweet.fields': 'public_metrics,created_at',
    }
    res = requests.get(url, headers=headers, params=params)
    tweets = res.json().get('data', [])

    # テーマ別にスコア集計
    theme_scores = {}
    for tweet in tweets:
        metrics = tweet['public_metrics']
        score = (
            metrics['like_count'] * 1
            + metrics['retweet_count'] * 3
            + metrics['reply_count'] * 2
            + metrics['impression_count'] * 0.01
        )
        theme = detect_theme(tweet['text'])  # テーマ推定
        if theme not in theme_scores:
            theme_scores[theme] = []
        theme_scores[theme].append(score)

    # 平均スコアでランキング
    ranking = sorted(
        theme_scores.items(),
        key=lambda x: sum(x[1]) / len(x[1]),
        reverse=True,
    )

    print('📊 テーマ別パフォーマンス:')
    for theme, scores in ranking:
        avg = sum(scores) / len(scores)
        print(f'  {theme}: 平均スコア {avg:.1f} ({len(scores)}件)')`}
          </pre>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="text-gray-700 text-sm">
            🔄 <strong>改善サイクル:</strong> 毎日スコアを記録 → 週1でテーマを見直し →
            反応が悪いテーマを差し替え → 新テーマを試す。
            このPDCAを自動化することで、<strong>投稿の質が勝手に上がっていく</strong>仕組みになります。
          </p>
        </div>
      </section>

      {/* 10. スパム対策 */}
      <section id="safety" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          10. スパム対策とアカウント凍結の回避
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          X APIの自動化で<strong>最も重要なのがスパム対策</strong>です。
          以下のルールを守らないと、アカウント凍結のリスクがあります。
        </p>

        <div className="space-y-4">
          <div className="bg-white border-2 border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-700 mb-2">🚫 やってはいけないこと</h3>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li><strong>1日10件以上の引用RT</strong> → スパム判定リスク大</li>
              <li><strong>投稿間隔が短すぎる</strong>（5秒間隔で連投など）</li>
              <li><strong>同じコメントの使い回し</strong> → 明らかなbot判定</li>
              <li><strong>リプライの連続自動化</strong> → 会話のbot化はNG</li>
              <li><strong>フォロー/アンフォローの自動化</strong> → 最も凍結リスクが高い</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-700 mb-2">✅ 安全な運用ルール</h3>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li><strong>引用RTは1日8件まで</strong>（余裕を持って）</li>
              <li><strong>投稿間隔は15-30秒以上</strong>ランダムに空ける</li>
              <li><strong>毎回AIで新規コメント生成</strong>（テンプレ禁止）</li>
              <li><strong>リプ返し（会話の2往復目以降）は手動</strong></li>
              <li><strong>定期的に手動投稿も混ぜる</strong>（100%自動は不自然）</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <p className="text-gray-700 text-sm">
            ⚠️ <strong>鉄則:</strong> 自動化は「出会い」（発見・最初の接触）まで。
            「会話」（やりとり）は人間がやる。このラインを守れば安全に運用できます。
          </p>
        </div>
      </section>

      {/* 11. コスト */}
      <section id="cost" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          11. 運用コスト
        </h2>
        <div className="bg-green-50 rounded-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">月間コスト（1日8件 × 30日 = 240件/月）:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">X API Basicプラン</span>
              <span className="font-bold text-gray-900">$200/月（約¥30,000）</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">Claude API（240回のコメント生成）</span>
              <span className="font-bold text-gray-900">約 ¥200</span>
            </div>
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-700">VPSサーバー（cron実行用）</span>
              <span className="font-bold text-gray-900">¥1,000〜3,000</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-bold text-lg">合計</span>
              <span className="text-2xl font-bold text-green-600">約 ¥31,200〜33,200/月</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 X API無料プランで始める場合</h3>
          <p className="text-gray-700 text-sm mb-3">
            検索APIが使えない無料プランでも、<strong>リスト機能</strong>を使えば代替可能です:
          </p>
          <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
            <li>フォローしているアカウントの直近ポストを取得（List Tweets API）</li>
            <li>エンゲージメントの高いポストをフィルタリング</li>
            <li>AIでコメント生成 → 引用RT</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            この方法なら<strong>月額¥1,200〜3,200</strong>で運用可能です。
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
              <span className="text-gray-700"><strong>キュレーション型</strong>で「情報通ポジション」を確立</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">X検索API + Claude APIで<strong>自動キュレーション</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">cronで<strong>1日8件の引用RTを完全自動化</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">パフォーマンス分析で<strong>テーマを自動改善</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✅</span>
              <span className="text-gray-700">スパム対策を徹底して<strong>安全運用</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-500/10 to-green-500/10 rounded-xl p-8 text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          「自社のSNS運用をAIで自動化したい」
        </h2>
        <p className="text-gray-600 mb-6">
          X/Twitter以外にも、Instagram・LINE・メルマガなど、
          あらゆるSNS・マーケティングチャネルのAI自動化をご提案します。
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
            <p className="text-gray-500 text-xs mt-1">Webhook連携の基本をマスター</p>
          </Link>
          <Link
            href="/blog/ai-auto-reply-bot"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <p className="font-bold text-gray-900 text-sm">Claude APIで問い合わせ自動返信botを作る方法</p>
            <p className="text-gray-500 text-xs mt-1">AI×Discord連携で24時間自動対応</p>
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
