import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm border border-sky-500/30 bg-black flex-shrink-0">
              <img
                src="/hp17-logo.jpg"
                alt="hp17 GROUP Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-black text-gray-900 dark:text-white tracking-wider">hp17 GROUP</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#products" className="hover:text-sky-600 dark:hover:text-white transition-colors">
              プロダクト
            </a>
            <a href="#about" className="hover:text-sky-600 dark:hover:text-white transition-colors">
              グループ概要
            </a>
            <a href="#tech" className="hover:text-sky-600 dark:hover:text-white transition-colors">
              使用技術
            </a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-white transition-colors">
              お問い合わせ
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>&copy; {new Date().getFullYear()} hp17 Group. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="ページトップへ戻る"
              title="ページトップへ戻る"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
