import { LogoIcon } from './LogoIcon';

interface NavbarProps {
  onOpenWallet: () => void;
  onNavigate?: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Problem', href: '#meet-usd-halo' },
  { label: 'Solution', href: '#meet-usd-halo' },
  { label: 'Features', href: '#meet-usd-halo' },
  { label: 'How It Works', href: '#use-modes' },
  { label: 'Privacy', href: '#use-modes' },
];

export function Navbar({ onOpenWallet, onNavigate }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-4 py-4 md:px-6 md:py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between gap-4 md:gap-8">
        <a
          href="#top"
          className="flex items-center gap-2 md:gap-2.5 text-black whitespace-nowrap shrink-0 focus:outline-none"
          aria-label="Tiyin Home"
        >
          <LogoIcon className="w-6 h-6 md:w-7 md:h-7 text-black" />
          <span className="text-xl md:text-2xl font-medium tracking-tight text-black">Tiyin</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(item.href.replace('#', ''));
                }
              }}
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenWallet}
          className="bg-black text-white text-sm md:text-base font-medium px-5 py-2 md:px-7 md:py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}
