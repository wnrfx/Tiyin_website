import { BACKER_BRANDS, duplicateTrack } from '../utils/haloYield';

function ClickBlackLogo() {
  return (
    <img
      src="/assets/aistudio/click-text-black.png"
      alt="Click"
      referrerPolicy="no-referrer"
      className="h-5 w-auto object-contain inline-block align-middle"
    />
  );
}

function PaymeBlackLogo() {
  return (
    <img
      src="/assets/aistudio/payme-text-black.png"
      alt="Payme"
      referrerPolicy="no-referrer"
      className="h-6 w-auto object-contain inline-block align-middle"
    />
  );
}

function UzumBlackLogo() {
  return (
    <img
      src="/assets/aistudio/uzum-text-black.png"
      alt="Uzum"
      referrerPolicy="no-referrer"
      className="h-4 w-auto object-contain inline-block align-middle"
    />
  );
}

function MonixBlackLogo() {
  return (
    <svg
      width="84"
      height="17"
      viewBox="0 0 99 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monix"
      className="inline-block align-middle"
    >
      <path
        d="M6.93759 9.61626L9.93027 16.1057H15.7168L18.6624 9.65638L20.1431 19.1498H25.6L22.5812 0.749756H17.8044L12.834 11.6323L7.86364 0.749756H3.05547L0 19.1498H5.42555L6.93759 9.61626Z"
        fill="#000000"
      />
      <path
        d="M42.3259 1.21607C40.7419 0.407097 39.0225 0 37.1676 0C35.3127 0 33.6245 0.407097 32.0405 1.21607C30.4566 2.02505 29.18 3.19415 28.2213 4.71816C27.2626 6.24217 26.7832 8.00626 26.7832 10.0157C26.7832 12.0251 27.2626 13.7578 28.2213 15.2818C29.18 16.8058 30.4513 17.9697 32.0405 18.7839C33.6245 19.5929 35.3335 20 37.1676 20C39.0016 20 40.7419 19.5929 42.3259 18.7839C43.9099 17.9749 45.1812 16.8058 46.1451 15.2818C47.1039 13.7578 47.5832 12.0042 47.5832 10.0157C47.5832 8.02714 47.1039 6.24217 46.1451 4.71816C45.1864 3.19415 43.9151 2.03027 42.3259 1.21607ZM41.3515 12.5887C40.9295 13.3351 40.3564 13.9196 39.6373 14.3372C38.9131 14.7599 38.0898 14.9687 37.1624 14.9687C36.2349 14.9687 35.4429 14.7599 34.7187 14.3372C33.9944 13.9144 33.4265 13.3351 33.0044 12.5887C32.5824 11.8424 32.374 10.9864 32.374 10.0104C32.374 9.03444 32.5824 8.19937 33.0044 7.43215C33.4265 6.66493 33.9944 6.07515 34.7187 5.66806C35.4429 5.25574 36.2557 5.05219 37.1624 5.05219C38.069 5.05219 38.9131 5.25574 39.6373 5.66806C40.3616 6.08037 40.9295 6.67015 41.3515 7.43215C41.7736 8.19937 41.982 9.06054 41.982 10.0104C41.982 10.9603 41.7736 11.8424 41.3515 12.5887Z"
        fill="#000000"
      />
      <path
        d="M68.7782 0.749756H63.4729V11.0856L53.5124 0.749756H49.6016V19.1765H54.8754V8.86577L64.836 19.1765H68.7782V0.749756Z"
        fill="#000000"
      />
      <path
        d="M76.4145 0.749756H70.8145V19.1498H76.4145V0.749756Z"
        fill="#000000"
      />
      <path
        d="M84.6634 19.1498L88.4084 12.9161L92.1479 19.1498H98.4219L92.1911 9.67644L98.4556 0.749756H92.3492L88.4246 6.39664L84.5932 0.749756H78.4219L84.6526 9.67644L78.4219 19.1498H84.6634Z"
        fill="#000000"
      />
    </svg>
  );
}

function TezBlackLogo() {
  return (
    <svg
      width="42"
      height="20"
      viewBox="24 22 42 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tez"
      className="inline-block align-middle"
    >
      <path
        d="M29.2155 25.8619H24V22.0537H38.5151V25.8619H33.2444V41.6464H29.2155V25.8619Z"
        fill="#000000"
      />
      <path
        d="M44.7685 41.9499C43.7382 41.9499 42.7724 41.7843 41.871 41.4532C40.9879 41.1036 40.2152 40.6161 39.553 39.9906C38.9091 39.3651 38.3939 38.6109 38.0076 37.7278C37.6397 36.8264 37.4557 35.8329 37.4557 34.7475C37.4557 33.7357 37.6305 32.7883 37.98 31.9052C38.348 31.0222 38.8539 30.2587 39.4978 29.6148C40.16 28.9709 40.9327 28.465 41.8158 28.0971C42.6988 27.7291 43.6646 27.5452 44.7133 27.5452C45.6147 27.5452 46.4702 27.6923 47.2796 27.9867C48.1075 28.2626 48.8342 28.6858 49.4597 29.2561C50.0851 29.8264 50.5819 30.5347 50.9498 31.3809C51.3177 32.2272 51.5017 33.2114 51.5017 34.3336C51.5017 34.4992 51.5017 34.6831 51.5017 34.8855C51.5017 35.0879 51.4833 35.3362 51.4465 35.6306H41.1259C41.1811 36.0905 41.319 36.5044 41.5398 36.8724C41.7606 37.2219 42.0365 37.5163 42.3677 37.7554C42.6988 37.9946 43.0667 38.1785 43.4715 38.3073C43.8946 38.4361 44.3361 38.5005 44.7961 38.5005C45.6607 38.5005 46.3874 38.3349 46.9761 38.0038C47.5832 37.6542 48.0431 37.2403 48.3558 36.762L51.1706 38.8592C50.5267 39.7975 49.662 40.5517 48.5766 41.122C47.4912 41.6739 46.2218 41.9499 44.7685 41.9499ZM47.7211 33.0642C47.5556 32.2364 47.1692 31.6293 46.5621 31.2429C45.9551 30.8566 45.302 30.6634 44.6029 30.6634C44.2533 30.6634 43.8946 30.7094 43.5267 30.8014C43.1771 30.8934 42.846 31.0406 42.5332 31.2429C42.2389 31.4269 41.9721 31.6753 41.733 31.988C41.5122 32.2824 41.3558 32.6411 41.2639 33.0642H47.7211Z"
        fill="#000000"
      />
      <path
        d="M53.6024 38.6937L60.0597 31.2705H53.6852V27.8487H64.944V30.829L58.4868 38.2245H65.1648V41.6464H53.6024V38.6937Z"
        fill="#000000"
      />
    </svg>
  );
}

export function BackedBySection() {
  const marqueeBackers = duplicateTrack(BACKER_BRANDS);

  return (
    <section id="backed-by" className="bg-[#F5F5F5] px-4 py-4 md:px-6 md:py-0">
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

      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 items-center">
        <div className="md:col-span-1">
          <p className="text-black/70 text-sm sm:text-base leading-relaxed">
            Supported payment rails:
            <br />
            Click, Payme, Uzum, Monix, Tez
          </p>
        </div>

        <div className="md:col-span-3 overflow-hidden" aria-label="Supported payment rails">
          <div className="backers-track items-center">
            {marqueeBackers.map((brand, idx) => (
              <span
                key={`${brand.name}-${idx}`}
                className="mx-6 md:mx-10 shrink-0 whitespace-nowrap inline-flex items-center text-black"
                style={brand.style}
              >
                {brand.name === 'Click' ? (
                  <ClickBlackLogo />
                ) : brand.name === 'Payme' ? (
                  <PaymeBlackLogo />
                ) : brand.name === 'Uzum' ? (
                  <UzumBlackLogo />
                ) : brand.name === 'Monix' ? (
                  <MonixBlackLogo />
                ) : brand.name === 'Tez' ? (
                  <TezBlackLogo />
                ) : (
                  brand.name
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
