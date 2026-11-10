import { ArrowRight } from 'lucide-react';

interface InfoSectionProps {
  onDiscoverIt: () => void;
}

const CARD_1_BG_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85';

export function InfoSection({ onDiscoverIt }: InfoSectionProps) {
  return (
    <section id="meet-usd-halo" className="bg-[#F5F5F5] px-4 py-14 md:px-6 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1: Problem & Solution in the 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-start">
          <div>
            <h2
              className="text-black text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4 md:mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Everyday Finance, Reimagined.
            </h2>

            <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Managing daily finances often means forgetting to pay recurring
              bills on time and dealing with avoidable service interruptions.
              Sending money is equally frustrating when traditional payment apps
              fail to recognize recipients referred to in informal or personal
              terms rather than official account details. At the same time, many
              people understandably distrust cloud-based financial applications
              that collect and analyze sensitive personal transaction data on
              external servers. Everyday users need a simpler way to handle
              routine payments without surrendering control over their private
              financial information.
            </p>

            <button
              type="button"
              onClick={onDiscoverIt}
              className="inline-flex items-center gap-3 bg-black text-white text-sm sm:text-base font-medium pl-6 pr-1.5 py-1.5 md:pl-8 md:pr-2 md:py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request Early Access</span>
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </span>
            </button>
          </div>

          <div>
            <p className="text-black/70 text-xl sm:text-2xl md:text-3xl leading-snug md:leading-relaxed">
              Tiyin is the answer: an intelligent financial assistant that runs
              locally on your device, understands personal context, and
              proactively suggests timely payments while keeping all sensitive
              financial activity strictly under your control.
            </p>
          </div>
        </div>

        {/* Row 2: Features section (6 items using the template card grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Feature 1 (spans 2 cols on lg) */}
          <div
            className="sm:col-span-2 lg:col-span-2 rounded-2xl p-6 md:p-7 min-h-72 md:min-h-80 flex flex-col justify-between bg-[#E3E0EE]"
            style={{
              backgroundImage: `url("${CARD_1_BG_URL}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-black text-xl md:text-2xl font-medium leading-snug max-w-[14rem] sm:max-w-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              Automatic Bill Payments
            </h3>

            <p className="text-black/70 text-sm md:text-base max-w-[13.5rem] sm:max-w-xs">
              Stay ahead of regular household and personal obligations with
              intelligent tracking for recurring expenses. The assistant
              monitors routine billing cycles and prepares timely payments so
              you never miss a due date.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#2B2644] rounded-2xl p-6 md:p-7 min-h-60 sm:min-h-72 md:min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Voice-Controlled
              <br />
              Money Transfers
            </h3>

            <p className="text-white/60 text-sm md:text-base">
              Initiate peer-to-peer transfers naturally using spoken
              instructions that match how you personally organize your contacts.
              The assistant interprets your intent locally and prepares the
              transfer details for review.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#2B2644] rounded-2xl p-6 md:p-7 min-h-60 sm:min-h-72 md:min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Bill Detection from
              <br />
              Messages and Screenshots
            </h3>

            <p className="text-white/60 text-sm md:text-base">
              Automatically extract payment details and due amounts from
              incoming notifications, text messages, and saved screenshots.
              Unstructured billing information is converted into ready-to-pay
              prompts without manual entry.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#2B2644] rounded-2xl p-6 md:p-7 min-h-60 sm:min-h-72 md:min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              On-Device AI
              <br />
              for Privacy
            </h3>

            <p className="text-white/60 text-sm md:text-base">
              All language understanding, optical recognition, and financial
              analysis execute directly on your smartphone hardware. Your
              personal messages, contact relationships, and transaction history
              never leave your device.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#2B2644] rounded-2xl p-6 md:p-7 min-h-60 sm:min-h-72 md:min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Mandatory Confirmation
              <br />
              Before Every Payment
            </h3>

            <p className="text-white/60 text-sm md:text-base">
              You remain in complete control of your funds at all times with
              strict verification before execution. Every suggested transfer or
              bill payment requires your explicit approval before any money
              moves.
            </p>
          </div>

          {/* Feature 6 (spans 2 cols on lg) */}
          <div
            className="sm:col-span-2 lg:col-span-2 rounded-2xl p-6 md:p-7 min-h-72 md:min-h-80 flex flex-col justify-between bg-[#E3E0EE]"
            style={{
              backgroundImage: `url("${CARD_1_BG_URL}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-black text-xl md:text-2xl font-medium leading-snug max-w-[14rem] sm:max-w-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              Expense Tracking and Savings Goals
            </h3>

            <p className="text-black/70 text-sm md:text-base max-w-[13.5rem] sm:max-w-xs">
              Gain clear visibility into your spending patterns and track steady
              progress toward personal financial targets. Automated local
              insights help you set aside funds and maintain healthier financial
              habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
