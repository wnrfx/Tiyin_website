import { useState } from 'react';
import { ArrowRight, Mic, ShieldCheck, CheckCircle2, Smartphone } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { HERO_VOICE_EXAMPLES } from '../utils/tiyinData';

interface HeroSectionProps {
  onJoinWaitlist: () => void;
  onOpenVoiceDemo: () => void;
}

const VOICE_SCENARIOS = [
  {
    command: HERO_VOICE_EXAMPLES[0],
    intent: 'Перевод близким • Click / Payme',
    recipient: 'Папа (Uzcard •• 8492)',
    amount: '200 000 сум',
    status: 'Ожидает вашего подтверждения по Face ID',
  },
  {
    command: HERO_VOICE_EXAMPLES[1],
    intent: 'Регулярные счета • 2 платежа',
    recipient: 'Детский сад №42 + Sarkor Telecom',
    amount: '1 680 000 сум',
    status: 'Реквизиты проверены локально • Готово к оплате',
  },
  {
    command: HERO_VOICE_EXAMPLES[2],
    intent: 'Аналитика расходов • Ноябрь',
    recipient: 'Категория «Супермаркеты и базар»',
    amount: '3 450 000 сум',
    status: 'На 12% меньше, чем в прошлом месяце',
  },
];

export function HeroSection({ onJoinWaitlist, onOpenVoiceDemo }: HeroSectionProps) {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const currentScenario = VOICE_SCENARIOS[activeScenarioIdx];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 px-4 sm:px-6 lg:px-8">
      {/* Warm ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 w-[56rem] h-[32rem] rounded-full bg-gradient-to-tr from-orange-500/15 via-amber-400/10 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-800 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Локальный ИИ на смартфоне • Создано для Узбекистана</span>
            </div>

            <h1
              className="text-stone-950 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Финансовый ИИ-ассистент, который{' '}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#D97706] bg-clip-text text-transparent">
                живёт в вашем телефоне
              </span>
            </h1>

            <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-2xl mb-9">
              Управляйте регулярными счетами, оплачивайте коммуналку и переводите деньги родным
              простыми голосовыми командами. Tiyin понимает вас с полуслова и обрабатывает всё
              прямо на устройстве — без облака и лишних касаний.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-base sm:text-lg font-medium pl-7 pr-3 py-3 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:brightness-105 transition-all duration-200 cursor-pointer"
              >
                <span>Записаться в лист ожидания</span>
                <span className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenVoiceDemo}
                className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white text-base font-medium px-6 py-3.5 rounded-full hover:bg-stone-800 transition-colors duration-200 border border-stone-800 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-amber-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400">
                    Android-приложение
                  </span>
                  <span className="text-sm font-medium text-white">Скоро в Google Play</span>
                </div>
              </button>
            </div>

            {/* Trust micro-indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 w-full">
              <div className="flex items-center gap-2.5 text-sm text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>ИИ работает без интернета и облака</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-600">
                <Mic className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Голосовые переводы за 2 секунды</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-600">
                <Smartphone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Click, Payme и Uzum в одном окне</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated 3D Coin / Concentric Eye Logo Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#1A1614] via-[#14110F] to-[#1F1813] text-white p-6 sm:p-8 shadow-2xl border border-orange-500/20 overflow-hidden">
              <style>{`
                @keyframes tiyin-coin-float {
                  0%, 100% { transform: translateY(0px) rotateY(-14deg) rotateX(8deg); }
                  50% { transform: translateY(-10px) rotateY(14deg) rotateX(-6deg); }
                }
                @keyframes tiyin-ring-pulse {
                  0%, 100% { transform: scale(1); opacity: 0.35; }
                  50% { transform: scale(1.12); opacity: 0.7; }
                }
                @keyframes tiyin-orbit-spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .tiyin-3d-coin {
                  animation: tiyin-coin-float 6s ease-in-out infinite;
                  transform-style: preserve-3d;
                }
                .tiyin-pulse-ring {
                  animation: tiyin-ring-pulse 3.6s ease-in-out infinite;
                }
                .tiyin-orbit {
                  animation: tiyin-orbit-spin 22s linear infinite;
                }
              `}</style>

              {/* Radial orange glow inside card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/25 blur-3xl"
              />

              {/* Top status bar / visual placeholder tag */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>3D Монета и логотип «Око Tiyin»</span>
                </span>
                <span className="text-xs text-stone-400 font-mono">ON-DEVICE NPU</span>
              </div>

              {/* Centerpiece 3D Coin / Eye Visual Placeholder */}
              <div
                className="relative z-10 h-64 sm:h-72 flex items-center justify-center my-2"
                role="img"
                aria-label="Анимированная 3D-визуализация монеты Tiyin с концентрическими оранжевыми кругами"
              >
                {/* Outer orbital dashed circle */}
                <div className="tiyin-orbit absolute w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-dashed border-orange-400/30" />

                {/* Concentric pulsing aura rings */}
                <div className="tiyin-pulse-ring absolute w-52 h-52 rounded-full border border-orange-500/35 bg-orange-500/5" />
                <div
                  className="tiyin-pulse-ring absolute w-44 h-44 rounded-full border border-amber-400/40 bg-amber-500/10"
                  style={{ animationDelay: '1.2s' }}
                />

                {/* 3D Metallic Gold/Orange Coin Body */}
                <div className="tiyin-3d-coin relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#FFB800] via-[#FF6B00] to-[#9A3412] p-1.5 shadow-[0_20px_50px_rgba(255,107,0,0.45)] border-2 border-amber-200/60 flex items-center justify-center">
                  {/* Inner recessed coin face */}
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#231915] to-[#120D0B] flex flex-col items-center justify-center p-4 border border-amber-400/40 shadow-inner relative">
                    <LogoIcon className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_16px_rgba(255,122,0,0.65)]" />
                    <span className="mt-1 text-[10px] tracking-[0.24em] uppercase font-semibold text-amber-300/90">
                      TIYIN • AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Voice Assistant Live Card */}
              <div className="relative z-10 bg-white/[0.07] backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                    <Mic className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Голосовая команда (нажмите для проверки):</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {VOICE_SCENARIOS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveScenarioIdx(idx)}
                        aria-label={`Пример команды ${idx + 1}`}
                        className={`w-6 h-6 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                          activeScenarioIdx === idx
                            ? 'bg-[#FF6B00] text-white'
                            : 'bg-white/10 text-stone-400 hover:bg-white/20'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-white text-base sm:text-lg font-medium mb-3">
                  {currentScenario.command}
                </p>

                <div className="rounded-xl bg-black/40 border border-white/10 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-stone-400">{currentScenario.intent}</div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      {currentScenario.recipient}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{currentScenario.status}</span>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="text-xs text-stone-400">Сумма</div>
                    <div className="text-lg font-semibold text-amber-400 tabular-nums">
                      {currentScenario.amount}
                    </div>
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

export default HeroSection;
