/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PrivacySection } from './components/PrivacySection';
import { PaymentRailsSection } from './components/PaymentRailsSection';
import { EarlyAccessSection } from './components/EarlyAccessSection';
import { Footer } from './components/Footer';
import { ActionModal, type ModalMode } from './components/ActionModal';

export default function App() {
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  const scrollToWaitlist = () => {
    const el = document.getElementById('early-access');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = document.getElementById('waitlist-contact');
      if (input instanceof HTMLElement) {
        setTimeout(() => input.focus(), 450);
      }
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-950">
      <Navbar onWaitlistClick={scrollToWaitlist} />

      <main className="flex-1">
        {/* 1. Hero section */}
        <HeroSection
          onJoinWaitlist={scrollToWaitlist}
          onOpenVoiceDemo={() => setModalMode('google-play')}
        />

        {/* 2. Problem section */}
        <ProblemSection />

        {/* 3. Solution section */}
        <SolutionSection />

        {/* 4. Features grid (6 cards with icons) */}
        <FeaturesSection />

        {/* 5. How it works (4-step horizontal process) */}
        <HowItWorksSection />

        {/* 6. Privacy & security section */}
        <PrivacySection />

        {/* 7. Supported payment rails */}
        <PaymentRailsSection />

        {/* 8. Call-to-action / early access signup */}
        <EarlyAccessSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      <ActionModal
        mode={modalMode}
        onClose={() => setModalMode(null)}
        onGoToWaitlist={scrollToWaitlist}
      />
    </div>
  );
}
