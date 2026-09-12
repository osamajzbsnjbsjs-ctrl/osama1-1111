import React from 'react';

interface OsamaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
  useImage?: boolean;
}

export const OsamaLogo: React.FC<OsamaLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
  useImage = true,
}) => {
  const sizeMap = {
    sm: { emblem: 36, title: 'text-lg', sub: 'text-[9px]' },
    md: { emblem: 44, title: 'text-xl', sub: 'text-[10px]' },
    lg: { emblem: 60, title: 'text-2xl', sub: 'text-xs' },
    xl: { emblem: 84, title: 'text-4xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      id="osama-soft-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* High-Tech Circuit Emblem with Official Logo Image */}
      <div
        className="relative flex items-center justify-center rounded-xl bg-[#091225] border border-emerald-500/40 group-hover:border-emerald-400/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 overflow-hidden"
        style={{ width: currentSize.emblem, height: currentSize.emblem }}
      >
        {useImage ? (
          <img
            src="/osama_logo.jpg"
            alt="Osama Soft Logo"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to SVG if image not yet loaded
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}

        {/* Subtle radial emerald cyber ring */}
        <div className="absolute inset-0 rounded-xl bg-radial from-emerald-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className={`font-extrabold tracking-tight text-white flex items-center gap-1.5 ${currentSize.title}`}>
          <span>OSAMA</span>
          <span className="text-gradient-crimson drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
            SOFT
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-mono uppercase tracking-[0.2em] text-emerald-400/90 font-medium ${currentSize.sub}`}>
            SOFTWARE LABS
          </span>
        )}
      </div>
    </div>
  );
};
