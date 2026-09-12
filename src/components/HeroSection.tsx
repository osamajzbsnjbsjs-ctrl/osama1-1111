import React from 'react';
import { SectionId } from '../types';
import { OsamaLogo } from './OsamaLogo';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Terminal,
  User,
  Monitor,
  Maximize2,
  Star,
  Users,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenCodeModal: () => void;
  onOpenMediaModal: (type: 'photo' | 'logo') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenCodeModal,
  onOpenMediaModal,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-cyber"
    >
      {/* Subtle background ambient lights (Crimson, Gold, and Emerald glows) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-amber-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge & Public Opinion Rating Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            <button
              onClick={() => onNavigate('opinion')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold">4.9/5</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200">{t.nav.opinion}</span>
            </button>
          </div>

          {/* Bold Headline with Crimson, Gold, and Emerald accents */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-display">
            {t.hero.titlePart1}{' '}
            <span className="text-gradient-crimson text-glow-crimson">{t.hero.titleAccent1}</span>{' '}
            {t.hero.titlePart2}{' '}
            <span className="text-gradient-gold text-glow-gold">{t.hero.titleAccent2}</span>
          </h1>

          {/* Professional Tagline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            {t.hero.tagline}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              id="hero-cta-services-btn"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/40 shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer hover:-translate-y-0.5"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className={`w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>

            <button
              id="hero-cta-contact-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#0d162d]/90 hover:bg-[#121f3f] border border-amber-500/30 hover:border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <span>{t.hero.startProjectBtn}</span>
            </button>

            <button
              onClick={() => onOpenMediaModal('photo')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <User className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.meetFounderBtn}</span>
            </button>
          </div>

          {/* Dual Brand Showcase: Official Green Neon Logo & Osama Founder Photo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto">
            {/* Left Box: Official Logo Showcase */}
            <div className="md:col-span-7 relative p-6 sm:p-7 rounded-3xl bg-[#0a1226]/85 border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(16,185,129,0.15)] backdrop-blur-xl flex flex-col justify-between text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {t.hero.brandBadge}
                </span>
                <button
                  onClick={() => onOpenMediaModal('logo')}
                  className="text-xs text-slate-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Logo</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div
                  onClick={() => onOpenMediaModal('logo')}
                  className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer shrink-0 hover:scale-105 transition-transform"
                >
                  <img
                    src="/osama_logo.jpg"
                    alt="Osama Soft Official Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">
                    {t.hero.brandTitle}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {t.hero.brandDesc}
                  </p>
                </div>
              </div>

              {/* Micro verification pills */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{t.hero.pills.prodReady}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{t.hero.pills.directContact}</span>
                </div>
              </div>
            </div>

            {/* Right Box: Osama Photo Showcase */}
            <div
              onClick={() => onOpenMediaModal('photo')}
              className="md:col-span-5 relative p-6 rounded-3xl bg-[#091124]/90 border border-slate-800 hover:border-emerald-500/50 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between text-left group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {t.founder.badge}
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
                  <img
                    src="/osama_photo.jpg"
                    alt="Osama"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {t.founder.name}
                  </h4>
                  <div className="text-xs text-slate-400">{t.founder.role}</div>
                  <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                    Dual 144Hz Rig • Istanbul
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>View Full Setup & Specs</span>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
