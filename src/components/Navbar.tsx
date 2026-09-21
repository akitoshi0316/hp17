import { useState, useEffect } from 'react';
import { Sun, Moon, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          className={`glass-panel rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg border transition-all duration-300 ${
            isScrolled
              ? 'border-gray-300/80 dark:border-gray-700/80 shadow-xl'
              : 'border-gray-200/50 dark:border-gray-800/50'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border border-sky-500/40 bg-black flex-shrink-0">
              <img
                src="/hp17-logo.jpg"
                alt="hp17 GROUP Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-gray-900 dark:text-white flex items-center gap-1.5">
                hp17
                <span className="text-sky-600 dark:text-sky-400 text-xs px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 font-bold tracking-normal">
                  GROUP
                </span>
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1 font-medium tracking-tight">
                総合ソフトウェア開発チーム
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700 dark:text-gray-300">
            <a href="#products" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" id="nav-link-products">
              提供中のサービス
            </a>
            <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" id="nav-link-about">
              グループについて
            </a>
            <a href="#tech" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" id="nav-link-tech">
              使用技術
            </a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" id="nav-link-contact">
              お問い合わせ
            </a>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
              className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Contact CTA Button */}
            <a
              href="#contact"
              id="header-cta-button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-semibold text-sm shadow-md hover:shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              連絡・フィードバック
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              className="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-3 glass-panel rounded-2xl p-5 shadow-2xl border border-gray-200/60 dark:border-gray-800/60 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              <a
                href="#products"
                onClick={closeMenu}
                className="py-2.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              >
                提供中のサービス
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="py-2.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              >
                グループについて
              </a>
              <a
                href="#tech"
                onClick={closeMenu}
                className="py-2.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              >
                使用技術
              </a>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors text-left cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                  <span>{isDark ? 'ライトモードに切替' : 'ダークモードに切替'}</span>
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                  {isDark ? 'LIGHT' : 'DARK'}
                </span>
              </button>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                お問い合わせ・フィードバック
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
