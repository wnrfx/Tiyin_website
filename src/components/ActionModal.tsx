import { useState } from 'react';
import { X, Mic, Fingerprint, CheckCircle2, ArrowRight } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { formatUzsAmount } from '../utils/tiyinData';

export type ModalMode = 'google-play' | null;

interface ActionModalProps {
  mode: ModalMode;
  onClose: () => void;
  onGoToWaitlist: () => void;
}

export function ActionModal({ mode, onClose, onGoToWaitlist }: ActionModalProps) {
  const [amountInput, setAmountInput] = useState('200000');
  const [recipient, setRecipient] = useState<'dad' | 'daycare' | 'internet'>('dad');
  const [confirmed, setConfirmed] = useState(false);

  if (!mode) return null;

  const numericAmount = Number(amountInput) || 200000;

  const recipientLabels: Record<'dad' | 'daycare' | 'internet', { name: string; card: string; rail: string }> = {
    dad: { name: 'Папа (Карим Ака)', card: 'Uzcard •• 8492', rail: 'Click Up' },
    daycare: { name: 'Детский сад №42', card: 'Лицевой счёт #10492', rail: 'Payme' },
    internet: { name: 'Домашний интернет Uztelecom', card: 'Абонент #782190', rail: 'Uzum Bank' },
  };

  const selectedRecipient = recipientLabels[recipient];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tiyin-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setConfirmed(false);
          onClose();
        }
      }}
    >
      <div className="bg-[#FAF8F5] text-stone-950 rounded-3xl max-w-lg w-full p-7 sm:p-8 relative shadow-2xl border border-orange-500/25">
        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            onClose();
          }}
          aria-label="Закрыть окно"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200/70 hover:bg-stone-300/80 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-stone-800" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <LogoIcon className="w-7 h-7" />
          <span className="text-lg font-semibold tracking-tight">Tiyin • Скоро в Google Play</span>
        </div>

        <h2
          id="tiyin-modal-title"
          className="text-2xl sm:text-3xl font-semibold text-stone-950 mb-2"
          style={{ letterSpacing: '-0.025em' }}
        >
          Интерактивное превью голосового платежа
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mb-6 leading-relaxed">
          Посмотрите, как Tiyin готовит перевод на вашем телефоне и запрашивает обязательное подтверждение перед списанием.
        </p>

        {confirmed ? (
          <div className="rounded-2xl bg-[#161311] text-white p-6 space-y-4 border border-orange-500/30">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <div>
                <div className="text-base font-semibold">Платёж успешно подтверждён!</div>
                <div className="text-xs text-stone-400">Выполнено через {selectedRecipient.rail}</div>
              </div>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Сумма <span className="text-amber-300 font-semibold">{formatUzsAmount(numericAmount)}</span>{' '}
              для получателя <span className="text-white font-medium">{selectedRecipient.name}</span>{' '}
              отправлена только после вашего биометрического подтверждения.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                  onGoToWaitlist();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-sm font-medium py-3 px-5 rounded-full cursor-pointer"
              >
                <span>Записаться на бета-тест</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/15 text-xs font-medium text-stone-300 cursor-pointer"
              >
                Попробовать ещё раз
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-medium text-stone-600 mb-2">
                1. Выберите получателя из семейного контекста:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dad' as const, label: 'Папе' },
                  { id: 'daycare' as const, label: 'Детский сад' },
                  { id: 'internet' as const, label: 'Интернет' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRecipient(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                      recipient === item.id
                        ? 'bg-orange-500/15 border-[#FF6B00] text-stone-950'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="demo-amount" className="block text-xs font-medium text-stone-600 mb-1.5">
                2. Сумма перевода (сум):
              </label>
              <input
                id="demo-amount"
                type="text"
                inputMode="numeric"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value.replace(/[^\d]/g, ''))}
                className="tiyin-input w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-base font-semibold text-stone-950 tabular-nums focus-visible:outline-2 focus-visible:outline-[#FF6B00]"
              />
            </div>

            <div className="rounded-2xl bg-[#161311] text-white p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-amber-300">
                <Mic className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Распознано локально на устройстве:</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-300">{selectedRecipient.name}</span>
                <span className="font-semibold text-amber-400 tabular-nums">
                  {formatUzsAmount(numericAmount)}
                </span>
              </div>
              <div className="text-xs text-stone-400">
                Реквизиты: {selectedRecipient.card} • Через {selectedRecipient.rail}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-base font-medium py-3.5 px-6 rounded-full shadow-md shadow-orange-500/20 hover:brightness-105 transition-all cursor-pointer"
            >
              <Fingerprint className="w-5 h-5" />
              <span>Подтвердить перевод ({formatUzsAmount(numericAmount)})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionModal;
