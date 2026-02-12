'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', company: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-2xl mb-2">✅</p>
        <p className="text-lg font-bold text-green-800">送信完了！</p>
        <p className="text-green-600 mt-2">
          24時間以内にご連絡します。お待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="山田太郎"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white text-gray-900"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          会社名・屋号 <span className="text-gray-500 text-xs">（任意）</span>
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="例: 株式会社〇〇、〇〇事務所"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white text-gray-900"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="example@mail.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white text-gray-900"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="例: 顧客対応を自動化したい、SNS運用をAIに任せたい、など"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none bg-white text-gray-900"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {status === 'sending' ? '送信中...' : '無料相談を申し込む →'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          送信に失敗しました。もう一度お試しください。
        </p>
      )}
    </form>
  );
}
