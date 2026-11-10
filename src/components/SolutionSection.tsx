import { Sparkles, Check, Mic } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { SOLUTION_CONTENT } from '../utils/tiyinData';

export function SolutionSection() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1A1614] via-[#14110F] to-[#231912] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-orange-500/20 overflow-hidden">
          {/* Decorative concentric eye watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 opacity-10"
          >
            <LogoIcon className="w-96 h-96" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-amber-300 text-xs sm:text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-[#FF8A00]" />
                <span>{SOLUTION_CONTENT.eyebrow}</span>
              </div>

              <h2
                id="solution-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6"
                style={{ letterSpacing: '-0.025em' }}
              >
                {SOLUTION_CONTENT.headline}
              </h2>

              {/* One clear paragraph introducing Tiyin as the answer */}
              <p className="text-stone-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
                {SOLUTION_CONTENT.paragraph}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                {SOLUTION_CONTENT.highlights.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-amber-300 to-[#FF6B00] bg-clip-text text-transparent">
                      {item.value}
                    </div>
                    <div className="text-sm text-stone-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proactive context card preview */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <LogoIcon className="w-9 h-9 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Проактивная подсказка Tiyin</div>
                    <div className="text-xs text-amber-300">Обработано локально на устройстве</div>
                  </div>
                </div>

                <div className="rounded-xl bg-black/40 p-4 border border-white/10 text-sm text-stone-200 leading-relaxed">
                  «Завтра 5-е число — день оплаты детского сада (1 500 000 сум) и домашнего
                  интернета Uztelecom (180 000 сум). Подготовить оба платежа?»
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs text-stone-300">
                    <Mic className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>«Да, Тийин, оплати»</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Готово к подтверждению</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
