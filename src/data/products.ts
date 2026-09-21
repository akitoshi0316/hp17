import { ProductItem } from '../types.ts';

export const HP17_PRODUCTS: ProductItem[] = [
  {
    id: 'deck-study',
    name: 'hp17 Deck Study',
    category: '暗記＆学習ツール',
    categoryEn: 'MEMORIZATION & STUDY',
    description: '効率的な学習と記憶の定着をサポートするフラッシュカード・単語帳Webツール。直感的なカード作成とスムーズな復習が行えます。',
    features: [
      '単語帳・暗記デッキの自由作成',
      '反復学習用フラッシュカードUI',
      'インストール不要で即時利用'
    ],
    url: 'https://hp17-deck-study.vercel.app',
    accentColor: '#0284c7',
    gradient: 'from-blue-500 to-indigo-600',
    badgeBg: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800',
    iconName: 'DeckStudy'
  },
  {
    id: 'typing-pro',
    name: 'hp17 Typing Pro',
    category: 'スキルアップツール',
    categoryEn: 'SKILL TRAINING',
    description: 'タイピング速度と正確性を正確に計測・トレーニングできる練習Webアプリ。スコアの向上を目指して楽しく練習できます。',
    features: [
      'スピード＆正確性のリアルタイム判定',
      '快適でレスポンシブな操作感',
      '初心者から上級者まで対応'
    ],
    url: 'https://hp17-typing-pro.vercel.app',
    accentColor: '#10b981',
    gradient: 'from-emerald-500 to-teal-600',
    badgeBg: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800',
    iconName: 'TypingPro'
  },
  {
    id: 'water-weber',
    name: 'hp17 Water Weber',
    category: 'スマホ水抜きユーティリティ',
    categoryEn: 'SPEAKER EJECTION UTILITY',
    description: 'スマホのスピーカーに溜まった水滴を、特定の重低音波と振動を利用して排出・水抜きするWebツール。水濡れや水没時のトラブル応急処置をサポートします。',
    features: [
      '低音波・周波数振動による効率的な水抜き',
      'アプリのインストール不要で即時実行',
      'スピーカーの水濡れ・音こもりトラブル対策'
    ],
    url: 'https://hp17-water-weber.vercel.app',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-600',
    badgeBg: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800',
    iconName: 'WaterWeber'
  }
];

export const TECH_STACK = {
  frontend: ['HTML5 / Modern JS', 'React / Next.js', 'TypeScript', 'Tailwind CSS'],
  aiTools: ['Gemini', 'Lovable'],
  infra: ['Vercel', 'GitHub Actions'],
  philosophy: 'シンプルで役立つWebアプリを、最高の手触りでつくる。'
};
