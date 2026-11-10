import { BACKER_BRANDS, duplicateTrack } from '../utils/haloYield';

export function BackedBySection() {
  const marqueeBackers = duplicateTrack(BACKER_BRANDS);

  return (
    <section id="backed-by" className="bg-[#F5F5F5] px-6">
      <style>{`
        @keyframes backers-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .backers-track {
          display: flex;
          width: max-content;
          animation: backers-marquee 30s linear infinite;
        }
      `}</style>

      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1">
          <p className="text-black/70 text-base leading-relaxed">
            Supported payment rails:
            <br />
            Click, Payme, Uzum
          </p>
        </div>

        <div className="md:col-span-3 overflow-hidden" aria-label="Supported payment rails">
          <div className="backers-track items-center">
            {marqueeBackers.map((brand, idx) => (
              <span
                key={`${brand.name}-${idx}`}
                className="mx-10 shrink-0 text-black/50 whitespace-nowrap"
                style={brand.style}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
