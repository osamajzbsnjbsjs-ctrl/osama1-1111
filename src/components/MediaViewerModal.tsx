import React from 'react';
import { X, Download, ShieldCheck, Sparkles, ExternalLink, User, Monitor, Code } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface MediaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'photo' | 'logo';
}

export const MediaViewerModal: React.FC<MediaViewerModalProps> = ({
  isOpen,
  onClose,
  initialType = 'photo',
}) => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<'photo' | 'logo'>(initialType);

  React.useEffect(() => {
    setActiveTab(initialType);
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const handleDownload = (filename: string, src: string) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      id="media-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#091225] border border-emerald-500/40 shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(16,185,129,0.25)] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#060b18]">
          <div className="flex items-center gap-3">
            {/* Tab switch buttons */}
            <div className="flex items-center bg-[#0d1730] p-1 rounded-xl border border-slate-700/60">
              <button
                onClick={() => setActiveTab('photo')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'photo'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Osama (Founder & Engineer)</span>
              </button>
              <button
                onClick={() => setActiveTab('logo')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'logo'
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Logo Emblem</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                handleDownload(
                  activeTab === 'photo' ? 'osama_founder.jpg' : 'osama_soft_logo.jpg',
                  activeTab === 'photo' ? '/osama_photo.jpg' : '/osama_logo.jpg'
                )
              }
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Save Image</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-auto p-6 flex flex-col md:flex-row items-center gap-8 bg-[#040710]">
          {activeTab === 'photo' ? (
            <>
              {/* Photo Display */}
              <div className="relative w-full max-w-sm shrink-0 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.25)] bg-[#070e1e] group">
                <img
                  src="/osama_photo.jpg"
                  alt="Osama - Founder & Lead Software Engineer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE • WORKSTATION READY</span>
                </div>
              </div>

              {/* Photo Details */}
              <div className="flex-1 space-y-4 text-left">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {t.founder.badge}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-1 font-display">
                    {t.founder.name}
                  </h3>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                    {t.founder.role} • {t.founder.company}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{t.founder.bio}</p>

                <div className="p-4 rounded-xl bg-[#081023] border border-slate-800/80 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-sky-400" />
                    <span>{t.founder.workstationTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.founder.workstationDesc}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#070d1d] border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">{t.founder.specs.displays}</span>
                    <span className="font-semibold text-white mt-0.5 block">{t.founder.specs.displaysVal}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#070d1d] border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">{t.founder.specs.focus}</span>
                    <span className="font-semibold text-amber-400 mt-0.5 block">{t.founder.specs.focusVal}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="mailto:osamajzbsnjbsjs@gmail.com"
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/30 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                  >
                    <span>{t.founder.contactDirectBtn}</span>
                  </a>
                  <a
                    href="tel:05364573936"
                    className="px-4 py-2 rounded-lg text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
                  >
                    0536 457 39 36
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Logo Display */}
              <div className="relative w-full max-w-sm shrink-0 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.35)] bg-[#070e1e] p-4 flex items-center justify-center">
                <img
                  src="/osama_logo.jpg"
                  alt="Osama Soft Official Logo Emblem"
                  className="w-full h-auto object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Logo Details */}
              <div className="flex-1 space-y-4 text-left">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    OFFICIAL BRAND IDENTITY
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-1 font-display">
                    OSAMA <span className="text-gradient-crimson">SOFT</span>
                  </h3>
                  <div className="text-sm font-mono text-amber-400 mt-0.5">
                    Neon Circuit Bracket Emblem &bull; 2026 Identity
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  The official brand identity of <strong>Osama Soft</strong> features a glowing cybernetic circuit board motif framing the letter &ldquo;O&rdquo; flanked by code syntax brackets &ldquo;{'{'}&rdquo; and &ldquo;{'}'}&rdquo;. Symbolizing algorithmic precision, clean software architecture, and the intersection of hardware and digital software engineering.
                </p>

                <div className="p-4 rounded-xl bg-[#081023] border border-slate-800/80 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <span>Brand Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div>Primary: <strong className="text-emerald-400">Emerald Cyber Green</strong></div>
                    <div>Secondary: <strong className="text-red-500">Crimson Red</strong></div>
                    <div>Accent: <strong className="text-amber-400">Metallic Gold</strong></div>
                    <div>Canvas: <strong className="text-sky-300">Midnight Deep Blue</strong></div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleDownload('osama_soft_logo.jpg', '/osama_logo.jpg')}
                    className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 border border-emerald-400/40 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Download High-Res Logo</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-[#060b18] flex items-center justify-between text-xs text-slate-400">
          <div>
            Official Verified Media &bull; <strong>Osama Soft</strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
