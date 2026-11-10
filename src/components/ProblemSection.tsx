import { ClockAlert, Users, ShieldAlert } from 'lucide-react';
import { PAIN_POINTS } from '../utils/tiyinData';

const PAIN_ICONS = [ClockAlert, Users, ShieldAlert];

export function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Знакомые каждому трудности
          </div>
          <h2
            id="problem-heading"
            className="text-stone-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Почему ежедневные платежи до сих пор отнимают столько времени и нервов?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            В Узбекистане мы пользуемся картами и переводами каждый день, но рутинные операции по-прежнему требуют десятков лишних действий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = PAIN_ICONS[idx] ?? ClockAlert;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF6B00]">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-stone-200/70 text-stone-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-stone-950 text-xl sm:text-2xl font-semibold leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80">
                  <p className="text-sm italic text-stone-500">{item.exampleQuote}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
