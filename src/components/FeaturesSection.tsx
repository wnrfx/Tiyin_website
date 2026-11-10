import {
  CalendarCheck2,
  Mic,
  ScanText,
  Cpu,
  ShieldCheck,
  PiggyBank,
  type LucideIcon,
} from 'lucide-react';
import { FEATURES_LIST, type FeatureItem } from '../utils/tiyinData';

const ICON_MAP: Record<FeatureItem['iconName'], LucideIcon> = {
  calendar: CalendarCheck2,
  mic: Mic,
  scan: ScanText,
  cpu: Cpu,
  shieldCheck: ShieldCheck,
  piggyBank: PiggyBank,
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Возможности Tiyin
          </div>
          <h2
            id="features-heading"
            className="text-stone-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Всё для спокойного управления личными и семейными финансами
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Шесть ключевых функций, которые превращают рутинные переводы и оплату квитанций в простой разговор с вашим телефоном.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_LIST.map((feature) => {
            const IconComponent = ICON_MAP[feature.iconName];
            return (
              <article
                key={feature.id}
                className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#F59E0B] text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-500/10 text-orange-800 border border-orange-500/15">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-stone-950 text-xl sm:text-2xl font-semibold leading-snug mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-stone-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {feature.highlight && (
                  <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-medium text-orange-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                    <span>{feature.highlight}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
