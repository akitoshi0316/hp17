import { Users, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas.tsx';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden" id="hero">
      <ParticleCanvas isDark={isDark} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              4つのWebプロダクトを公開中
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              アイデアを形に、
              <br className="hidden sm:inline" />
              <span className="gradient-text">便利を日常へ。</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              hp17グループは、日常を快適にする便利ツールや学習アプリを企画・制作する総合ソフトウェア開発チームです。現在4つのオリジナルWebサービスを無料公開しています。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                id="hero-btn-products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-bold text-center shadow-lg shadow-sky-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>サービス一覧を見る</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                id="hero-btn-about"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-gray-300 dark:border-gray-700 font-bold text-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Users className="w-4 h-4 text-sky-500" />
                グループ概要
              </a>
            </div>

            {/* App Highlights Counter */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">4</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  公開中のWebアプリ
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  Webで即時利用可能
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">0 円</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  基本利用料（完全無料）
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Interactive Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              {/* Ambient Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl blur-2xl opacity-25 dark:opacity-40"></div>

              {/* Terminal Mockup */}
              <div className="relative rounded-2xl bg-white/95 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden text-left font-mono transition-colors duration-300">
                {/* Terminal top bar */}
                <div className="bg-gray-100/90 dark:bg-[#1e293b]/90 px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 font-medium">hp17-services.json</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                    ONLINE
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-6 text-xs sm:text-sm space-y-3.5 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <p className="text-gray-400 dark:text-gray-500 text-xs">// hp17 Active Services List</p>
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-sky-600 dark:text-sky-300 font-semibold">activeApps</span> = [
                  </div>
                  <div className="pl-4 space-y-1">
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      &apos;1. hp17 Deck Study&apos;,
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      &apos;2. hp17 Typing Pro&apos;,
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      &apos;3. hp17 Water Weber&apos;,
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      &apos;4. hp17 Task Checker&apos;
                    </p>
                  </div>
                  <p>];</p>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800/80 space-y-2.5">
                    <a
                      href="https://hp17-deck-study.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-gray-800 dark:text-sky-200 border border-gray-200/60 dark:border-transparent transition-colors group"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Deck Study
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:underline">
                        READY <ExternalLink className="w-3 h-3 opacity-70" />
                      </span>
                    </a>

                    <a
                      href="https://hp17-typing-pro.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-gray-800 dark:text-sky-200 border border-gray-200/60 dark:border-transparent transition-colors group"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Typing Pro
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:underline">
                        READY <ExternalLink className="w-3 h-3 opacity-70" />
                      </span>
                    </a>

                    <a
                      href="https://hp17-water-weber.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-gray-800 dark:text-sky-200 border border-gray-200/60 dark:border-transparent transition-colors group"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Water Weber
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:underline">
                        READY <ExternalLink className="w-3 h-3 opacity-70" />
                      </span>
                    </a>

                    <a
                      href="https://hp17-task-checker.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-gray-800 dark:text-sky-200 border border-gray-200/60 dark:border-transparent transition-colors group"
                    >
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Task Checker
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:underline">
                        READY <ExternalLink className="w-3 h-3 opacity-70" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
