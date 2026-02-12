import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL =
  'https://discord.com/api/webhooks/1471516970858840086/cmDNAWvApLAwXIGQ7Bb6v0G3sJqj0DJ55GpYpcHVe_bFYUAYGiqp7Bc18CBWqJkDSJkB';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: '全項目を入力してください' }, { status: 400 });
    }

    // Discord Webhookに送信
    const discordMessage = {
      embeds: [
        {
          title: '📩 新規お問い合わせ',
          color: 0x00d4ff,
          fields: [
            { name: 'お名前', value: name, inline: true },
            { name: 'メール', value: email, inline: true },
            { name: 'ご相談内容', value: message },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordMessage),
    });

    if (!webhookRes.ok) {
      console.error('Webhook error:', await webhookRes.text());
      return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 });
  }
}
