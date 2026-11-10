import { useState, useRef, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Send, Mail, Sparkles } from 'lucide-react';
import { validateWaitlistContact } from '../utils/tiyinData';

export function EarlyAccessSection() {
  const [channel, setChannel] = useState<'telegram' | 'email'>('telegram');
  const [contactValue, setContactValue] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isInvalid = Boolean(errorMessage);
  const describedByIds = isInvalid ? 'contact-hint contact-error' : 'contact-hint';

  const runValidation = (nextChannel: 'telegram' | 'email', nextValue: string) => {
    const result = validateWaitlistContact(nextChannel, nextValue);
    setErrorMessage(result.valid ? '' : result.message);
    return result.valid;
  };

  const handleChannelChange = (nextChannel: 'telegram' | 'email') => {
    setChannel(nextChannel);
    setErrorMessage('');
    setHasInteracted(false);
    setHasBlurred(false);
  };

  const handleInputChange = (value: string) => {
    setContactValue(value);
    setHasInteracted(true);
    // Per forms & validate-input-after-interaction: clear existing error on input once resolved
    if (errorMessage) {
      const check = validateWaitlistContact(channel, value);
      if (check.valid) {
        setErrorMessage('');
      }
    }
  };

  const handleInputBlur = () => {
    setHasBlurred(true);
    if (hasInteracted) {
      runValidation(channel, contactValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasInteracted(true);
    setHasBlurred(true);
    const valid = runValidation(channel, contactValue);
    if (!valid) {
      inputRef.current?.focus();
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="early-access"
      aria-labelledby="early-access-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200/70"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF3E6] border border-orange-500/25 p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-800 text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span>Ранний доступ • Закрытое бета-тестирование</span>
            </div>

            <h2
              id="early-access-heading"
              className="text-stone-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              Попробуйте Tiyin одним из первых в Узбекистане
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Оставьте ваш Telegram или электронную почту — мы пришлём приглашение на закрытый запуск в Google Play и подарим 3 месяца премиум-доступа бесплатно.
            </p>
          </div>

          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="max-w-xl mx-auto rounded-2xl bg-stone-950 text-white p-7 sm:p-8 text-center border border-orange-500/30 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Вы в списке раннего доступа!</h3>
              <p className="text-stone-300 text-base leading-relaxed mb-6">
                Мы сохранили ваш контакт{' '}
                <span className="text-amber-300 font-medium">{contactValue.trim()}</span> и напишем
                вам, как только откроется следующая волна приглашений Tiyin.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setContactValue('');
                  setHasInteracted(false);
                  setHasBlurred(false);
                  setErrorMessage('');
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium text-white transition-colors cursor-pointer"
              >
                Добавить ещё один контакт
              </button>
            </div>
          ) : (
            <form
              method="POST"
              action="#early-access"
              aria-labelledby="early-access-heading"
              onSubmit={handleSubmit}
              noValidate
              className="max-w-xl mx-auto space-y-6"
            >
              <fieldset className="border-0 p-0 m-0">
                <legend className="block text-sm font-medium text-stone-800 mb-2.5">
                  Куда отправить приглашение?
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    htmlFor="channel-telegram"
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-sm font-medium cursor-pointer transition-all min-h-[48px] ${
                      channel === 'telegram'
                        ? 'bg-orange-500/10 border-[#FF6B00] text-stone-950 shadow-sm'
                        : 'bg-white border-stone-300 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <input
                      type="radio"
                      id="channel-telegram"
                      name="contact_channel"
                      value="telegram"
                      checked={channel === 'telegram'}
                      onChange={() => handleChannelChange('telegram')}
                      className="w-4 h-4 accent-[#FF6B00]"
                    />
                    <Send className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Telegram (@ник или телефон)</span>
                  </label>

                  <label
                    htmlFor="channel-email"
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-sm font-medium cursor-pointer transition-all min-h-[48px] ${
                      channel === 'email'
                        ? 'bg-orange-500/10 border-[#FF6B00] text-stone-950 shadow-sm'
                        : 'bg-white border-stone-300 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <input
                      type="radio"
                      id="channel-email"
                      name="contact_channel"
                      value="email"
                      checked={channel === 'email'}
                      onChange={() => handleChannelChange('email')}
                      className="w-4 h-4 accent-[#FF6B00]"
                    />
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Электронная почта (Email)</span>
                  </label>
                </div>
              </fieldset>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="waitlist-contact"
                  className="text-sm font-medium text-stone-900 mb-1"
                >
                  {channel === 'telegram' ? 'Ваш Telegram или номер телефона' : 'Ваш адрес Email'}{' '}
                  <span aria-hidden="true" className="text-[#FF6B00]">
                    *
                  </span>
                </label>

                {/* Format hint placed ABOVE the input so autocomplete popovers do not cover it */}
                <span id="contact-hint" className="text-xs text-stone-600 mb-2">
                  {channel === 'telegram'
                    ? 'Формат: @username или +998 90 123-45-67'
                    : 'Формат: name@example.com'}
                </span>

                <input
                  ref={inputRef}
                  id="waitlist-contact"
                  name={channel === 'telegram' ? 'telegram_contact' : 'email'}
                  type={channel === 'email' ? 'email' : 'text'}
                  required
                  autoComplete={channel === 'email' ? 'email' : 'username'}
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  enterKeyHint="send"
                  value={contactValue}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onBlur={handleInputBlur}
                  aria-invalid={isInvalid ? 'true' : 'false'}
                  aria-describedby={describedByIds}
                  data-error="contact-error"
                  placeholder={channel === 'telegram' ? '@azamat_uz' : 'name@example.com'}
                  className={`tiyin-input w-full rounded-2xl bg-white border px-4 py-3.5 text-stone-950 placeholder:text-stone-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B00] ${
                    isInvalid && hasBlurred
                      ? 'user-invalid-fallback border-[#d93025] bg-[#fce8e6]/60'
                      : 'border-[#767676]'
                  }`}
                />

                <div
                  id="contact-error"
                  role="alert"
                  className={`mt-2 text-sm text-[#d93025] font-medium ${
                    isInvalid ? 'block' : 'hidden'
                  }`}
                >
                  <span role="img" aria-label="Ошибка">
                    ❌
                  </span>{' '}
                  {errorMessage}
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-base sm:text-lg font-medium px-8 py-4 min-h-[52px] rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:brightness-105 transition-all duration-200 cursor-pointer"
              >
                <span>Получить ранний доступ</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-stone-500">
                Никакого спама. Мы напишем только по поводу запуска приложения Tiyin в Узбекистане.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default EarlyAccessSection;
