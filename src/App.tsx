/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { BackedBySection } from './components/BackedBySection';
import { UseCasesSection } from './components/UseCasesSection';
import { InteractiveModal, type ModalTab } from './components/InteractiveModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<ModalTab>('wallet');

  const openModalWithTab = (tab: ModalTab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col bg-[#F5F5F5]">
      <div className="relative h-screen flex flex-col overflow-hidden">
        <Navbar
          onOpenWallet={() => openModalWithTab('wallet')}
          onNavigate={handleNavigate}
        />
        <HeroSection onJoinUs={() => openModalWithTab('wallet')} />
      </div>

      <InfoSection onDiscoverIt={() => openModalWithTab('calculator')} />

      <BackedBySection />

      <UseCasesSection onKnowMore={() => openModalWithTab('commerce')} />

      <InteractiveModal
        key={modalTab}
        isOpen={modalOpen}
        initialTab={modalTab}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
