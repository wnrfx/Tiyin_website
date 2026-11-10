import { ArrowRight } from 'lucide-react';

interface UseCasesSectionProps {
  onKnowMore: () => void;
}

const USE_CASES_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4';

const HOW_IT_WORKS_STEPS = [
  {
    title: '1. Sign Up',
    description:
      'Create your account quickly and verify your identity to initialize your private local financial workspace.',
  },
  {
    title: '2. Add Your Cards',
    description:
      'Connect your preferred local payment cards and accounts so the assistant can prepare transfers and recurring bill settlements.',
  },
  {
    title: '3. Voice Enrollment',
    description:
      'Complete a brief voice registration process so the on-device model recognizes your spoken requests accurately and securely.',
  },
  {
    title: '4. Assistant Is Ready',
    description:
      'Begin managing bills, initiating transfers, and tracking expenses with proactive assistance running privately on your phone.',
  },
];

export function UseCasesSection({ onKnowMore }: UseCasesSectionProps) {
  return (
    <section id="use-modes" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column: How It Works (4 steps) + Privacy & Security */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm mb-2">Simple Setup & Local Architecture</p>

          <h2
            className="text-black text-5xl md:text-6xl font-medium leading-none mb-8"
            style={{ letterSpacing: '-0.04em' }}
          >
            How it works
          </h2>

          <div className="space-y-5 mb-12 max-w-md">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.title}>
                <h3 className="text-black text-lg font-medium mb-1">
                  {step.title}
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-black/60 text-sm mb-2">Privacy & Security</p>

          <p className="text-black/60 text-base leading-relaxed max-w-md">
            Tiyin is engineered so the artificial intelligence model runs
            entirely on your device rather than in the cloud. Because your
            messages, voice inputs, contact details, and payment history are
            processed locally on your hardware and never uploaded to external
            servers, your sensitive financial data remains completely private
            and worthy of your trust.
          </p>
        </div>

        {/* Right column: Call-to-action / Early Access + Footer copy */}
        <div className="relative rounded-3xl overflow-hidden min-h-[720px] bg-[#E5E3EC] flex flex-col justify-between">
          <video
            src={USE_CASES_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover absolute inset-0 w-full h-full"
          />

          <div className="relative z-10 p-10 md:p-12">
            <h3
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Get Early Access
            </h3>

            <p className="text-black/70 text-base max-w-md mb-8 leading-relaxed">
              Be among the first in Uzbekistan to experience private, on-device
              AI financial management. Sign up today to reserve your spot for
              early access and simplify how you handle bills, transfers, and
              savings.
            </p>

            <a
              href="#early-access"
              onClick={(e) => {
                e.preventDefault();
                onKnowMore();
              }}
              className="group inline-flex items-center gap-3 text-black font-medium text-base cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              <span>Sign up for early access</span>
            </a>
          </div>

          <footer className="relative z-10 p-10 md:p-12 pt-0">
            <p className="text-black font-medium text-sm mb-1">
              Tiyin — Your private, on-device AI financial assistant for Uzbekistan.
            </p>
            <p className="text-black/60 text-sm">
              Contact · Telegram · Instagram · LinkedIn · Privacy Policy · Terms of Service
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
