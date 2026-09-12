import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import {
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Users,
  Compass,
  Code,
  Flame,
  ArrowRight,
  Maximize2,
  Monitor,
  Sparkles,
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenMediaModal: (type: 'photo' | 'logo') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenMediaModal }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070c1a]"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            {t.about.title}{' '}
            <span className="text-gradient-gold text-glow-gold">{t.about.titleAccent}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.about.subtitle}
          </p>
        </div>

        {/* Meet the Founder & Workstation Feature Block */}
        <div className="mb-16 p-8 rounded-3xl bg-[#091225]/90 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Osama's Workstation Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={() => onOpenMediaModal('photo')}
                className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer group bg-[#040710]"
              >
                <img
                  src="/osama_photo.jpg"
                  alt="Osama - Founder & Lead Engineer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="font-bold text-base">{t.founder.name}</div>
                    <div className="text-xs text-emerald-400 font-mono">{t.founder.role}</div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-xs font-semibold hover:bg-white/30 transition-colors flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View HD</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Founder Bio & Command Station Specs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  {t.founder.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
                  {t.founder.name} • {t.founder.company}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {t.founder.bio}
                </p>
              </div>

              {/* Workstation Details */}
              <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  <Monitor className="w-4 h-4" />
                  <span>{t.founder.workstationTitle}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.founder.workstationDesc}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#070e20] border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">{t.founder.specs.displays}</div>
                  <div className="font-semibold text-white mt-0.5">{t.founder.specs.displaysVal}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#070e20] border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">{t.founder.specs.os}</div>
                  <div className="font-semibold text-emerald-400 mt-0.5">{t.founder.specs.osVal}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#070e20] border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">{t.founder.specs.focus}</div>
                  <div className="font-semibold text-amber-400 mt-0.5">{t.founder.specs.focusVal}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#070e20] border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">{t.founder.specs.status}</div>
                  <div className="font-semibold text-emerald-300 mt-0.5">{t.founder.specs.statusVal}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/30 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] flex items-center gap-2"
                >
                  <span>{t.founder.contactDirectBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={() => onOpenMediaModal('logo')}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Official Logo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 7 cols: Story & Mission */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-[#0a1226]/90 border border-slate-800/90 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/10 to-transparent pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2.5 font-display">
                <Flame className="w-6 h-6 text-red-500" />
                <span>{t.about.missionTitle}</span>
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                {t.about.missionP1}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                {t.about.missionP2}
              </p>

              {/* Pillars */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3.5">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.about.pillars.p1Title}</h4>
                    <p className="text-xs text-slate-400">{t.about.pillars.p1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.about.pillars.p2Title}</h4>
                    <p className="text-xs text-slate-400">{t.about.pillars.p2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.about.pillars.p3Title}</h4>
                    <p className="text-xs text-slate-400">{t.about.pillars.p3Desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-[#0c1630] border border-amber-500/30">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200">
                  {t.about.ctaBanner}
                </span>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>{t.about.ctaButton}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right 5 cols: Capability Matrix & Stats */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="p-6 rounded-3xl bg-[#091124] border border-slate-800 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>{t.about.statsTitle}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-amber-400 font-display">{t.about.stats.s1Val}</div>
                  <div className="text-xs font-semibold text-white mt-1">{t.about.stats.s1Label}</div>
                  <p className="text-[11px] text-slate-400 mt-1">{t.about.stats.s1Desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-red-500 font-display">{t.about.stats.s2Val}</div>
                  <div className="text-xs font-semibold text-white mt-1">{t.about.stats.s2Label}</div>
                  <p className="text-[11px] text-slate-400 mt-1">{t.about.stats.s2Desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-sky-400 font-display">{t.about.stats.s3Val}</div>
                  <div className="text-xs font-semibold text-white mt-1">{t.about.stats.s3Label}</div>
                  <p className="text-[11px] text-slate-400 mt-1">{t.about.stats.s3Desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-emerald-400 font-display">{t.about.stats.s4Val}</div>
                  <div className="text-xs font-semibold text-white mt-1">{t.about.stats.s4Label}</div>
                  <p className="text-[11px] text-slate-400 mt-1">{t.about.stats.s4Desc}</p>
                </div>
              </div>

              {/* Developer statement */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-amber-950/20 to-transparent border border-red-500/30">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold mb-1">
                  <Code className="w-4 h-4" />
                  <span>{t.about.archGuarantee}</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  {t.about.archQuote}
                </p>
              </div>
            </div>

            {/* Quick Contact Badge */}
            <div className="p-5 rounded-2xl bg-[#0b1429] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Direct Inquiries:</div>
                <div className="text-sm font-mono font-semibold text-amber-300">0536 457 39 36</div>
              </div>
              <a
                href="tel:05364573936"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
