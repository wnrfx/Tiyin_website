import { CheckCircle2, CreditCard } from 'lucide-react';
import { SUPPORTED_PAYMENT_RAILS, type PaymentRail } from '../utils/tiyinData';

function RailLogoPlaceholder({ id }: { id: PaymentRail['id'] }) {
  if (id === 'click') {
    return (
      <div className="flex items-center gap-3">
        <span className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 border border-[#00AAFF]/25 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="14" stroke="#00AAFF" strokeWidth="4" />
            <circle cx="20" cy="20" r="5" fill="#00AAFF" />
          </svg>
        </span>
        <div>
          <span className="text-2xl font-bold tracking-tight text-stone-950">CLICK</span>
          <span className="block text-[11px] font-medium text-[#0088CC]">Click Up • Платежи</span>
        </div>
      </div>
    );
  }

  if (id === 'payme') {
    return (
      <div className="flex items-center gap-3">
        <span className="w-12 h-12 rounded-2xl bg-[#14C5C0]/10 border border-[#14C5C0]/25 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden="true">
            <rect x="6" y="10" width="28" height="20" rx="5" stroke="#0FA6A2" strokeWidth="3.5" />
            <path d="M6 17H34" stroke="#0FA6A2" strokeWidth="3.5" />
            <circle cx="27" cy="24" r="2.5" fill="#0FA6A2" />
          </svg>
        </span>
        <div>
          <span className="text-2xl font-bold tracking-tight text-stone-950">Payme</span>
          <span className="block text-[11px] font-medium text-[#0E9490]">Оплата услуг и карт</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="w-12 h-12 rounded-2xl bg-[#7000FF]/10 border border-[#7000FF]/25 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden="true">
          <path
            d="M12 12V22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22V12"
            stroke="#7000FF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="20" cy="14" r="3" fill="#7000FF" />
        </svg>
      </span>
      <div>
        <span className="text-2xl font-bold tracking-tight text-stone-950">Uzum</span>
        <span className="block text-[11px] font-medium text-[#7000FF]">Uzum Bank • Финтех</span>
      </div>
    </div>
  );
}

export function PaymentRailsSection() {
  return (
    <section
      id="payments"
      aria-labelledby="payments-heading"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Поддерживаемые платёжные системы
          </div>
          <h2
            id="payments-heading"
            className="text-stone-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Работает с сервисами, которыми вы уже пользуетесь каждый день
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Не нужно открывать новый банк или менять привычки — Tiyin бесшовно интегрируется с ведущими платёжными системами Узбекистана.
          </p>
        </div>

        {/* Logos / Placeholders for Click, Payme, Uzum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {SUPPORTED_PAYMENT_RAILS.map((rail) => (
            <div
              key={rail.id}
              className="rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <RailLogoPlaceholder id={rail.id} />
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                    Интеграция
                  </span>
                </div>
                <p className="text-stone-600 text-base leading-relaxed mb-6">{rail.tagline}</p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
                <span>{rail.badge}</span>
                <span className="inline-flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Поддерживается</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* National Card Networks bar */}
        <div className="rounded-2xl bg-white border border-stone-200/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-600">
          <div className="flex items-center gap-2.5">
            <CreditCard className="w-5 h-5 text-[#FF6B00] shrink-0" />
            <span>Полная совместимость с национальными платёжными картами Узбекистана:</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 font-semibold text-stone-800 text-xs tracking-wide">
              UZCARD
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-stone-100 font-semibold text-stone-800 text-xs tracking-wide">
              HUMO
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 font-semibold text-orange-800 text-xs">
              P2P и оплата по QR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentRailsSection;
