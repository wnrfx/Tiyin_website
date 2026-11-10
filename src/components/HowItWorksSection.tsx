import { UserPlus, CreditCard, AudioLines, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../utils/tiyinData';

const STEP_ICONS = [UserPlus, CreditCard, AudioLines, Sparkles];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Как это работает
            </div>
            <h2
              id="how-it-works-heading"
              className="text-stone-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              От установки до первого голосового перевода — всего 4 простых шага
            </h2>
          </div>
          <p className="text-stone-600 text-base sm:text-lg max-w-md">
            Никаких сложных настроек: подключите привычные карты и начните общаться со своим финансовым помощником.
          </p>
        </div>

        {/* 4-step horizontal process */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] ?? Sparkles;
            const isLast = idx === HOW_IT_WORKS_STEPS.length - 1;

            return (
              <li
                key={step.stepNumber}
                className="relative rounded-3xl bg-white border border-stone-200/90 p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 text-[#FF6B00] font-semibold text-lg">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                        Шаг {step.stepNumber}
                      </span>
                      {!isLast && (
                        <ArrowRight
                          aria-hidden="true"
                          className="hidden lg:inline-block w-4 h-4 text-orange-500/70"
                        />
                      )}
                    </div>
                  </div>

                  <h3 className="text-stone-950 text-xl font-semibold mb-2.5">{step.title}</h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-500">
                  <span>{step.detail}</span>
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#F59E0B]" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorksSection;
