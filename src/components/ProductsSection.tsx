import { Layers, Keyboard, Droplets, CalendarCheck, Check, ExternalLink } from 'lucide-react';
import { HP17_PRODUCTS } from '../data/products.ts';
import { ProductItem } from '../types.ts';

export default function ProductsSection() {
  const getProductIcon = (iconName: ProductItem['iconName']) => {
    switch (iconName) {
      case 'DeckStudy':
        return <Layers className="w-7 h-7" />;
      case 'TypingPro':
        return <Keyboard className="w-7 h-7" />;
      case 'WaterWeber':
        return <Droplets className="w-7 h-7" />;
      case 'TaskChecker':
        return <CalendarCheck className="w-7 h-7" />;
    }
  };

  return (
    <section
      id="products"
      className="py-24 bg-white dark:bg-[#0d1527]/50 relative border-t border-gray-100 dark:border-gray-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            OUR PRODUCTS
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            提供中のWebサービス
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            hp17グループが制作・公開している4つの無料Webサービスです。ブラウザから今すぐご利用いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HP17_PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="glass-panel rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-sky-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {getProductIcon(product.iconName)}
                </div>

                {/* Subtitle tag */}
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                  {product.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300 mb-6 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8 pt-0">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`launch-btn-${product.id}`}
                  className={`w-full py-3.5 px-6 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-95`}
                >
                  <span>アプリを使ってみる</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
