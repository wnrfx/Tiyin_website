import { ShieldCheck, Lock, CloudOff, Fingerprint, CheckCircle2 } from 'lucide-react';
import { SECURITY_PILLARS } from '../utils/tiyinData';

export function PrivacySection() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#181412] via-[#12100E] to-[#1E1712] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-orange-500/20 overflow-hidden relative">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Lock / Shield Visual Motif */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="relative w-full max-w-sm aspect-square rounded-3xl bg-white/[0.04] border border-white/10 p-8 flex flex-col items-center justify-center"
                role="img"
                aria-label="Защитный щит и замок: локальная обработка данных на смартфоне без облачных серверов"
              >
                {/* Concentric shield rings */}
                <div className="absolute w-64 h-64 rounded-full border border-orange-500/20" />
                <div className="absolute w-48 h-48 rounded-full border border-amber-400/30 bg-orange-500/5" />

                {/* Central Shield + Lock Motif */}
                <div className="relative z-10 w-32 h-36 flex items-center justify-center">
                  <svg
                    viewBox="0 0 140 160"
                    className="w-full h-full drop-shadow-[0_12px_32px_rgba(255,107,0,0.45)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="shield-grad" x1="15" y1="10" x2="125" y2="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFB800" />
                        <stop offset="50%" stopColor="#FF6B00" />
                        <stop offset="100%" stopColor="#9A3412" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M70 8L18 30V74C18 111.5 40.2 143.6 70 154C99.8 143.6 122 111.5 122 74V30L70 8Z"
                      fill="#1B1512"
                      stroke="url(#shield-grad)"
                      strokeWidth="6"
                    />
                    <path
                      d="M70 22L30 39V73C30 103.5 47.1 129.8 70 139C92.9 129.8 110 103.5 110 73V39L70 22Z"
                      stroke="#FF9E1B"
                      strokeOpacity="0.35"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF8A00] to-[#FF5500] flex items-center justify-center shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating Security Status Pills */}
                <div className="relative z-10 mt-6 w-full space-y-2.5">
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs">
                    <span className="inline-flex items-center gap-2 text-stone-300">
                      <CloudOff className="w-4 h-4 text-amber-400" />
                      <span>Передача в облако</span>
                    </span>
                    <span className="font-semibold text-emerald-400">Отключена (0 байт)</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs">
                    <span className="inline-flex items-center gap-2 text-stone-300">
                      <Fingerprint className="w-4 h-4 text-amber-400" />
                      <span>Подтверждение списания</span>
                    </span>
                    <span className="font-semibold text-amber-300">Только владелец</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Pillars */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-amber-300 text-xs sm:text-sm font-medium mb-5">
                <ShieldCheck className="w-4 h-4 text-[#FF8A00]" />
                <span>Приватность и безопасность</span>
              </div>

              <h2
                id="privacy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-5"
                style={{ letterSpacing: '-0.025em' }}
              >
                Ваши финансы остаются только в вашем телефоне — а не на чужих серверах
              </h2>

              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                Мы понимаем, как важно доверять приложению, когда речь идёт о деньгах семьи.
                Именно поэтому ИИ-ядро Tiyin работает полностью локально на вашем смартфоне: никто,
                включая разработчиков Tiyin, не видит ваши сообщения, балансы и голосовые команды.
              </p>

              <div className="space-y-5">
                {SECURITY_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-5 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{pillar.title}</h3>
                      <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
