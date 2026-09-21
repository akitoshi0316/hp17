import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { ContactFormData } from '../types.ts';

const TARGET_EMAIL = 'hp17.host@proton.me';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    targetApp: 'general',
    message: ''
  });

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', desc: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTargetAppName = (key: string) => {
    switch (key) {
      case 'deck-study':
        return 'hp17 Deck Study';
      case 'typing-pro':
        return 'hp17 Typing Pro';
      case 'water-weber':
        return 'hp17 Water Weber';
      default:
        return '全般 / その他';
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send directly to hp17.host@proton.me using standard FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `【hp17 GROUP お問い合わせ】${formData.name}様より (${getTargetAppName(formData.targetApp)})`,
          _replyto: formData.email,
          _template: 'table',
          お名前: formData.name,
          返信先メール: formData.email,
          対象サービス: getTargetAppName(formData.targetApp),
          メッセージ: formData.message,
          送信日時: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
        })
      });

      if (response.ok) {
        setToastMessage({
          title: '送信完了',
          desc: 'お問い合わせを受け付けました。メッセージをお送りいただきありがとうございます！',
          isError: false
        });
        setFormData({
          name: '',
          email: '',
          targetApp: 'general',
          message: ''
        });
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch {
      // Fallback to mailto if network blocked
      const subject = encodeURIComponent(`【hp17 お問い合わせ】${formData.name}様より (${getTargetAppName(formData.targetApp)})`);
      const body = encodeURIComponent(
        `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n対象サービス: ${getTargetAppName(formData.targetApp)}\n\n【メッセージ】\n${formData.message}`
      );
      window.open(`mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`, '_blank');

      setToastMessage({
        title: 'メーラーを起動しました',
        desc: 'メール送信クライアントを開きました。内容をご確認のうえ送信してください。',
        isError: false
      });
    } finally {
      setIsSubmitting(false);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-transparent to-sky-500/10 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            CONTACT &amp; FEEDBACK
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            ご意見・お問い合わせ
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            各サービスへのご要望・不具合報告や、開発に関するご連絡はこちらからお気軽にどうぞ。
          </p>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                お名前 / ニックネーム <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例: hp17ユーザー"
                className="w-full px-4 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@hp17.app"
                className="w-full px-4 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="target-app" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
              対象サービス
            </label>
            <select
              id="target-app"
              value={formData.targetApp}
              onChange={(e) => setFormData({ ...formData, targetApp: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-sm cursor-pointer"
            >
              <option value="general">全般 / その他</option>
              <option value="deck-study">hp17 Deck Study</option>
              <option value="typing-pro">hp17 Typing Pro</option>
              <option value="water-weber">hp17 Water Weber</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">
              メッセージ・ご意見 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="改善のご要望や不具合、新機能のアイディアなどをご記入ください。"
              className="w-full px-4 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-sm resize-y"
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              id="contact-submit-btn"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-bold text-base shadow-xl hover:shadow-sky-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto cursor-pointer disabled:opacity-75"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? '送信中...' : '送信する'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Notification Toast Message Box */}
      <div
        id="toast"
        className={`fixed bottom-6 right-6 z-50 glass-panel border ${
          toastMessage.isError ? 'border-red-500/50' : 'border-emerald-500/50'
        } p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 transition-all duration-500 max-w-sm ${
          toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`w-10 h-10 rounded-xl ${
          toastMessage.isError ? 'bg-red-500' : 'bg-emerald-500'
        } text-white flex items-center justify-center shrink-0 shadow-md`}>
          {toastMessage.isError ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <CheckCircle2 className="w-5 h-5" />
          )}
        </div>
        <div className="pr-2">
          <h5 className="font-bold text-sm text-gray-900 dark:text-white">{toastMessage.title}</h5>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {toastMessage.desc}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setToastVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 cursor-pointer"
          aria-label="閉じる"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
