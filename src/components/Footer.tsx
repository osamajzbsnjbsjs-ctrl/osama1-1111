import React from 'react';
import { SectionId } from '../types';
import { OsamaLogo } from './OsamaLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Mail, Phone, Code, ArrowUp, Sparkles, User } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onOpenCodeModal: () => void;
  onOpenMediaModal: (type: 'photo' | 'logo') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCodeModal,
  onOpenMediaModal,
}) => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#040814] text-slate-400 relative text-left">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <OsamaLogo size="lg" onClick={scrollToTop} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              {t.footer.desc}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={onOpenCodeModal}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
              >
                {t.footer.getStandaloneCode}
              </button>

              <button
                onClick={() => onOpenMediaModal('photo')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Osama Photo</span>
              </button>

              <button
                onClick={() => onOpenMediaModal('logo')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Logo Emblem</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('opinion')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.nav.opinion}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              {t.footer.officialContact}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 block">{t.contact.emailLabel}</span>
                  <a
                    href="mailto:osamajzbsnjbsjs@gmail.com"
                    className="text-slate-200 hover:text-red-400 transition-colors font-medium break-all"
                  >
                    osamajzbsnjbsjs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 block">{t.contact.phoneLabel}</span>
                  <a
                    href="tel:05364573936"
                    className="text-amber-300 hover:text-amber-200 transition-colors font-bold"
                  >
                    0536 457 39 36
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>Osama Soft</strong>. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Midnight Blue • Crimson • Metallic Gold • Cyber Emerald</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
