import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PublicOpinionSection } from './components/PublicOpinionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StandaloneCodeModal } from './components/StandaloneCodeModal';
import { MediaViewerModal } from './components/MediaViewerModal';

function MainLayout() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaModalType, setMediaModalType] = useState<'photo' | 'logo'>('photo');

  const { isRTL } = useLanguage();

  const handleOpenMedia = (type: 'photo' | 'logo') => {
    setMediaModalType(type);
    setMediaModalOpen(true);
  };

  // Smooth navigation handler
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  // ScrollSpy to update active navigation tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['home', 'about', 'services', 'opinion', 'contact'];
      const scrollPosition = window.pageYOffset + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#050914] text-slate-100 selection:bg-red-600 selection:text-white flex flex-col font-sans relative ${
        isRTL ? 'text-right' : 'text-left'
      }`}
    >
      {/* Top Fixed Responsive Navbar with Language Switcher */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCodeModal={() => setCodeModalOpen(true)}
        onOpenMediaModal={handleOpenMedia}
      />

      {/* Main Single Page Application Content */}
      <main className="flex-grow">
        {/* 1. Home / Hero Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenCodeModal={() => setCodeModalOpen(true)}
          onOpenMediaModal={handleOpenMedia}
        />

        {/* 2. About Us Section with Founder & Workstation Spotlight */}
        <AboutSection
          onNavigate={handleNavigate}
          onOpenMediaModal={handleOpenMedia}
        />

        {/* 3. Services Section */}
        <ServicesSection onNavigate={handleNavigate} />

        {/* 4. Public Opinion & Client Endorsements Section */}
        <PublicOpinionSection />

        {/* 5. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCodeModal={() => setCodeModalOpen(true)}
        onOpenMediaModal={handleOpenMedia}
      />

      {/* Single-File Code Viewer / Export Modal */}
      <StandaloneCodeModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />

      {/* Official Photo & Logo Media Viewer Modal */}
      <MediaViewerModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        initialType={mediaModalType}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
