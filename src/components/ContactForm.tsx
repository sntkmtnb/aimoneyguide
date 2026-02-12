'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'お名前を入力してください';
    if (!form.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!validateEmail(form.email)) {
      newErrors.email = '正しいメールアドレスの形式で入力してください';
    }
    if (!form.message.trim()) newErrors.message = 'ご相談内容を入力してください';
    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const newErrors = validate();
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

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
        setErrors({});
        setTouched({});
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

  const fieldClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border outline-none bg-white text-gray-900 transition-colors ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
        : 'border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto" noValidate>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onBlur={() => handleBlur('name')}
          placeholder="山田太郎"
          className={fieldClass('name')}
        />
        {touched.name && errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
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
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onBlur={() => handleBlur('email')}
          placeholder="example@mail.com"
          className={fieldClass('email')}
        />
        {touched.email && errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-1">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onBlur={() => handleBlur('message')}
          placeholder="例: 顧客対応を自動化したい、SNS運用をAIに任せたい、など"
          className={`${fieldClass('message')} resize-none`}
        />
        {touched.message && errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            送信中...
          </span>
        ) : (
          '無料相談を申し込む →'
        )}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          送信に失敗しました。もう一度お試しください。
        </p>
      )}
      <p className="text-gray-500 text-xs text-center">
        ※ 次のステップはすべてお客様のペースで進めます。
      </p>
    </form>
  );
}
