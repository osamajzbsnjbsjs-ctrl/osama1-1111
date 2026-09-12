import React, { useState } from 'react';
import { OsamaLogo } from './OsamaLogo';
import { SectionId } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X, Code2, Sparkles, ArrowRight, User } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenCodeModal: () => void;
  onOpenMediaModal: (type: 'photo' | 'logo') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCodeModal,
  onOpenMediaModal,
}) => {
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'opinion', label: t.nav.opinion },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#060b18]/90 border-b border-slate-800/80 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Prominent Logo top-left with Click to Open Media */}
        <div className="flex items-center gap-2">
          <OsamaLogo
            size="md"
            onClick={() => handleNavClick('home')}
          />
          <button
            onClick={() => onOpenMediaModal('logo')}
            className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            title="View Official Logo Emblem"
          >
            Official Logo
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0a1226]/80 p-1.5 rounded-full border border-slate-700/50 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-red-600/30 to-amber-500/20 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] text-glow-crimson'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-amber-400 rounded-full shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Selector + Media + Single-File Code + Contact */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <LanguageSelector />

          {/* View Osama Photo Button */}
          <button
            onClick={() => onOpenMediaModal('photo')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 transition-all"
            title="View Osama (Founder & Workstation)"
          >
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Osama Photo</span>
          </button>

          {/* Standalone Code View / Export Button */}
          <button
            id="view-standalone-code-btn"
            onClick={onOpenCodeModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 transition-all"
            title="Get copy-paste single-file HTML/CSS/JS code"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.nav.singleFileCode}</span>
          </button>

          {/* Contact Button */}
          <button
            id="nav-cta-contact-btn"
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/40 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_28px_rgba(239,68,68,0.6)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowRight className={`w-4 h-4 text-amber-300 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector compact={true} />

          <button
            onClick={() => onOpenMediaModal('photo')}
            className="p-2 rounded-lg text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 text-xs"
            aria-label="View Photo"
          >
            <User className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060b18]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-red-600/20 text-white border border-red-500/40 text-glow-crimson'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMediaModal('photo');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>View Osama Photo & Workstation</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMediaModal('logo');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Official Logo Emblem</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>{t.nav.singleFileCode}</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 border border-amber-500/40 shadow-lg text-center"
            >
              {t.nav.getInTouch}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
