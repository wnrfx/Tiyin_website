import { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

export type ModalTab = 'wallet' | 'calculator' | 'commerce';

interface InteractiveModalProps {
  isOpen: boolean;
  initialTab: ModalTab;
  onClose: () => void;
}

export function InteractiveModal({
  isOpen,
  onClose,
}: InteractiveModalProps) {
  const [emailInput, setEmailInput] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = emailInput.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address to join early access.');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tiyin-modal-title"
    >
      <div className="bg-[#F5F5F5] text-black rounded-3xl max-w-xl w-full p-7 md:p-9 shadow-2xl border border-black/10 relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-6 h-6 text-black" />
            <h2
              id="tiyin-modal-title"
              className="text-2xl font-medium text-black"
              style={{ letterSpacing: '-0.03em' }}
            >
              Tiyin Early Access
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Tiyin Early Access"
            className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-[#2B2644] text-white rounded-2xl p-6">
            <p className="text-white/60 text-sm mb-1">On-Device AI Assistant for Uzbekistan</p>
            <p className="text-lg font-medium leading-relaxed">
              Reserve your invitation to experience automatic bill payments,
              voice-controlled money transfers, and local-first financial
              privacy across Click, Payme, and Uzum.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="early-access-email"
                className="block text-sm font-medium text-black/80 mb-1.5"
              >
                Email Address for Early Access
              </label>
              <div className="flex gap-3">
                <input
                  id="early-access-email"
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border border-black/15 rounded-xl px-4 py-2.5 text-base text-black focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-black text-white text-base font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            {submitted && (
              <div className="flex items-center gap-2 text-sm text-black/80 bg-white rounded-xl p-3 border border-black/10">
                <Check className="w-4 h-4 text-black shrink-0" />
                <span>You are registered for Tiyin early access.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
