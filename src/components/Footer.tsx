import { MapPin, Mail, Send, Phone } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { NAV_LINKS } from '../utils/tiyinData';

export function Footer() {
  return (
    <footer className="bg-[#14110F] text-stone-300 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3 text-white">
              <span className="w-10 h-10 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                <LogoIcon className="w-7 h-7" />
              </span>
              <span className="text-2xl font-semibold tracking-tight">Tiyin</span>
            </a>
            <p className="text-stone-400 text-sm sm:text-base max-w-md leading-relaxed">
              Локальный финансовый ИИ-ассистент для жителей Узбекистана. Оплачивайте счета и
              переводите деньги близким голосом — быстро, безопасно и без облачных серверов.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-amber-300/90 bg-white/[0.05] border border-white/10 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>100% On-Device AI • Данные хранятся только на вашем телефоне</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Навигация
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#early-access"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  Ранний доступ →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Контакты и соцсети
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>г. Ташкент, Узбекистан • IT Park</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <a
                  href="mailto:salom@tiyin.uz"
                  className="hover:text-white transition-colors"
                >
                  salom@tiyin.uz
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <a
                  href="https://t.me/tiyin_uz"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Telegram: @tiyin_uz
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>+998 (71) 200-00-00</span>
              </li>
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              {[
                { label: 'Telegram', href: 'https://t.me/tiyin_uz' },
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'YouTube', href: 'https://youtube.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/40 text-xs font-medium text-stone-300 hover:text-white transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Tiyin AI. Все права защищены. Создано для пользователей в Узбекистане.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#early-access" className="hover:text-stone-300 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
