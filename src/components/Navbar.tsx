import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { NAV_LINKS } from '../utils/tiyinData';

interface NavbarProps {
  onWaitlistClick: () => void;
}

export function Navbar({ onWaitlistClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-black/[0.06]">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4"
        aria-label="Основная навигация"
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-stone-950 whitespace-nowrap shrink-0 group"
          aria-label="Tiyin — На главную"
        >
          <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/5 border border-orange-500/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <LogoIcon className="w-7 h-7 shrink-0" />
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-stone-950">Tiyin</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-orange-500/10 text-orange-700 border border-orange-500/20">
              AI • UZ
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#early-access"
            onClick={(e) => {
              e.preventDefault();
              onWaitlistClick();
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:brightness-105 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Лист ожидания</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="tiyin-mobile-menu"
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-stone-200 bg-white text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="tiyin-mobile-menu"
          className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#early-access"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onWaitlistClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-base font-medium px-5 py-3 rounded-full shadow-md shadow-orange-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Записаться в лист ожидания</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
