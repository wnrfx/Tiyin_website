import { ArrowRight } from 'lucide-react';
import { HERO_BRANDS, duplicateTrack } from '../utils/haloYield';

interface HeroSectionProps {
  onJoinUs: () => void;
}

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4';

export function HeroSection({ onJoinUs }: HeroSectionProps) {
  const marqueeBrands = duplicateTrack(HERO_BRANDS);

  return (
    <div className="flex-1 px-4 pt-16 pb-4 md:px-6 md:pt-20 md:pb-6 flex items-end">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
      `}</style>

      <div className="max-w-[88rem] mx-auto w-full">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-[#E5E3EC] min-h-[calc(100svh-80px)] md:h-[calc(100vh-96px)] flex flex-col"
        >
          <video
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-center absolute inset-0 w-full h-full"
          />

          <div className="relative z-10 flex flex-col items-start justify-start flex-1 h-full p-6 pt-12 sm:p-8 sm:pt-20 md:p-12 md:pt-36">
            <h1
              className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-3 md:mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              Meet Tiyin,
              <br />
              Your AI Assistant
            </h1>

            <p
              className="text-black/70 text-sm sm:text-base md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
            >
              Tiyin is a local, on-device AI financial assistant built for
              residents across Uzbekistan to manage everyday payments, recurring
              bills, and money transfers privately and effortlessly.
            </p>

            <button
              type="button"
              onClick={onJoinUs}
              className="inline-flex items-center gap-3 bg-black text-white text-sm sm:text-base md:text-lg font-medium pl-6 pr-1.5 py-1.5 md:pl-8 md:pr-2 md:py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Join Early Access</span>
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </span>
            </button>

            <div className="mt-12 md:mt-24 w-full max-w-full md:max-w-md overflow-hidden" aria-label="Supported Payment Rails">
              <div className="marquee-track items-center">
                {marqueeBrands.map((brand, idx) => (
                  <span
                    key={`${brand.name}-${idx}`}
                    className="mx-5 md:mx-7 shrink-0 text-black/60 whitespace-nowrap"
                    style={brand.style}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
