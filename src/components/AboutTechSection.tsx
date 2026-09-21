import { Zap, UserCheck, Code, Server, Quote, Sparkles } from 'lucide-react';
import { TECH_STACK } from '../data/products.ts';

export default function AboutTechSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-100/80 dark:bg-[#0d1527]/30 relative border-t border-gray-200/60 dark:border-gray-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
                ABOUT HP17 GROUP
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                hp17グループとは
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base font-normal">
              hp17グループは、有用で軽快なWebアプリケーションやツールを開発するモノづくりプロジェクトチームです。「誰もが使いやすく、便利で役立つソフトウェア」を目指し、日々新しいアイデアの開発・改善に取り組んでいます。
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    スピーディな開発・即時利用
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Vercel等のモダンなクラウド環境を活用し、ブラウザを開くだけで即座に使えるサービスを構築。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    ユーザー本位のシンプルなUI
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    複雑な初期設定を排除し、アクセスして直感的に目的を果たせる設計にこだわっています。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Column */}
          <div
            id="tech"
            className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-6"
          >
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4 flex items-center justify-between">
              <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                開発テクノロジー (Tech Stack)
              </h4>
              <Code className="w-5 h-5 text-sky-500" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Code className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  FRONTEND &amp; UI
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-gray-200/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  AI &amp; PROTOTYPING
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-lg bg-gray-200/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Server className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  HOSTING &amp; INFRA
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.infra.map((infra) => (
                  <span
                    key={infra}
                    className="px-3.5 py-1.5 rounded-lg bg-gray-200/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    {infra}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Quote className="w-3.5 h-3.5 text-sky-500" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  GROUP PHILOSOPHY
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic bg-sky-50/50 dark:bg-sky-950/30 p-4 rounded-xl border border-sky-100 dark:border-sky-900/50">
                &ldquo;{TECH_STACK.philosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
