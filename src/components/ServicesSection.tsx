import React, { useState, useRef, useEffect } from 'react';
import { SectionId, ServiceItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Code2,
  Gamepad2,
  Smartphone,
  Palette,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Play,
  RotateCcw,
  CheckCircle2,
  Sliders,
  Flame,
  Terminal,
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'web-dev',
      title: t.services.items.web.title,
      description: t.services.items.web.desc,
      tags: t.services.items.web.tags,
      accent: 'crimson',
      icon: 'code',
      highlights: [
        'Zero bloated dependencies: clean, maintainable, modular codebase',
        'Fluid responsive scaling across mobile, tablet, and ultra-wide screens',
        'Sub-second first paint and optimized event loop executions',
      ],
    },
    {
      id: 'game-dev',
      title: t.services.items.game.title,
      description: t.services.items.game.desc,
      tags: t.services.items.game.tags,
      accent: 'gold',
      icon: 'gamepad',
      highlights: [
        'Custom 2D/3D physics solver with restitution, gravity, and particle dynamics',
        'Hardware-accelerated shader passes and neon glowing emissive materials',
        'Cross-platform touch, mouse, and keyboard input unification',
      ],
    },
    {
      id: 'android-solutions',
      title: t.services.items.android.title,
      description: t.services.items.android.desc,
      tags: t.services.items.android.tags,
      accent: 'crimson',
      icon: 'smartphone',
      highlights: [
        'Bypass vendor-specific sideloading verification blocks and architecture conflicts',
        'Rootless ADB permission grants and background service optimizations',
        'Step-by-step diagnostic workflows for legacy and modern Android versions',
      ],
    },
    {
      id: 'ui-ux-design',
      title: t.services.items.design.title,
      description: t.services.items.design.desc,
      tags: t.services.items.design.tags,
      accent: 'gold',
      icon: 'palette',
      highlights: [
        'High-contrast, accessible palettes engineered with strict WCAG AA standards',
        'Interactive holographic card tilt, glossy reflection, and glowing edges',
        'One-tap vCard / contact sharing and mobile web app responsiveness',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#060b18]"
    >
      {/* Ambient glowing radial spots */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            {t.services.title} <span className="text-gradient-crimson text-glow-crimson">{t.services.titleAccent}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const isGold = service.accent === 'gold';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`p-8 sm:p-9 rounded-3xl bg-[#091225] border transition-all duration-300 relative flex flex-col justify-between group ${
                  isGold
                    ? 'border-slate-800 hover:border-amber-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_28px_rgba(245,158,11,0.25)]'
                    : 'border-slate-800 hover:border-red-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_28px_rgba(220,38,38,0.25)]'
                }`}
              >
                {/* Glow accent top bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-300 ${
                    isGold
                      ? 'bg-gradient-to-r from-transparent via-amber-500/80 to-transparent group-hover:h-1.5'
                      : 'bg-gradient-to-r from-transparent via-red-500/80 to-transparent group-hover:h-1.5'
                  }`}
                />

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isGold
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.4)]'
                          : 'bg-red-600/10 border-red-500/30 text-red-500 group-hover:bg-red-600/20 group-hover:shadow-[0_0_18px_rgba(220,38,38,0.4)]'
                      }`}
                    >
                      {service.id === 'web-dev' && <Code2 className="w-7 h-7" />}
                      {service.id === 'game-dev' && <Gamepad2 className="w-7 h-7" />}
                      {service.id === 'android-solutions' && <Smartphone className="w-7 h-7" />}
                      {service.id === 'ui-ux-design' && <Palette className="w-7 h-7" />}
                    </div>

                    {/* Interactive Demo Trigger Button */}
                    <button
                      onClick={() => setActiveDemo(activeDemo === service.id ? null : service.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                        activeDemo === service.id
                          ? 'bg-white text-slate-900 font-bold'
                          : isGold
                          ? 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
                          : 'text-red-300 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{activeDemo === service.id ? 'Close Sandbox' : 'Live Demo'}</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#060b18]/70 border border-slate-800/80">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isGold ? 'text-amber-400' : 'text-red-400'
                          }`}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Embedded Preview Accordion */}
                  {activeDemo === service.id && (
                    <div className="mb-6 p-4 rounded-2xl bg-[#050914] border border-amber-500/40 shadow-inner animate-in fade-in duration-200">
                      {service.id === 'game-dev' && <InteractiveGameDemo />}
                      {service.id === 'ui-ux-design' && <InteractiveCardDemo />}
                      {service.id === 'android-solutions' && <InteractiveAndroidDemo />}
                      {service.id === 'web-dev' && <InteractiveWebDemo />}
                    </div>
                  )}
                </div>

                {/* Footer with Tags and Action */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/70 border border-slate-700/50 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      isGold
                        ? 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-red-600/15 hover:bg-red-600/25 text-red-300 border border-red-500/40 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                    }`}
                  >
                    <span>Request Quotation for this Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --- Interactive Demos inside the Service Cards --- */

// 1. Browser 3D Game / Physics Engine Demo
const InteractiveGameDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState(12);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    const height = (canvas.height = 180);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: string;
    }

    const colors = ['#ef4444', '#f59e0b', '#fbbf24', '#38bdf8', '#22c55e'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width - 40) + 20,
        y: Math.random() * (height - 40) + 20,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        radius: Math.random() * 6 + 4,
        color: colors[i % colors.length],
        glow: colors[i % colors.length],
      });
    }

    const gravity = 0.08;
    const bounce = 0.78;

    const render = () => {
      ctx.fillStyle = '#060b18';
      ctx.fillRect(0, 0, width, height);

      // Cyber floor grid lines
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;

        // Floor collision
        if (p.y + p.radius > height) {
          p.y = height - p.radius;
          p.vy = -p.vy * bounce;
          p.vx *= 0.98;
        }

        // Wall collisions
        if (p.x - p.radius < 0) {
          p.x = p.radius;
          p.vx = -p.vx * bounce;
        } else if (p.x + p.radius > width) {
          p.x = width - p.radius;
          p.vx = -p.vx * bounce;
        }

        // Draw glowing particle
        ctx.save();
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 12;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [particleCount]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setParticleCount((prev) => (prev > 24 ? 8 : prev + 4));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="font-mono text-amber-400 font-semibold flex items-center gap-1">
          <Gamepad2 className="w-3.5 h-3.5" /> 60FPS Physics Simulation Loop
        </span>
        <span className="text-[11px] text-slate-400">Tap canvas to spawn particles ({particleCount})</span>
      </div>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="w-full rounded-xl cursor-crosshair border border-amber-500/30 shadow-inner"
        style={{ height: '160px' }}
      />
    </div>
  );
};

// 2. UI/UX Digital Business Card Generator Demo
const InteractiveCardDemo: React.FC = () => {
  const [accent, setAccent] = useState<'gold' | 'crimson'>('gold');

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-amber-400 font-semibold">Live Digital Card Preview</span>
        <div className="flex gap-2">
          <button
            onClick={() => setAccent('gold')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono ${
              accent === 'gold' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Gold Theme
          </button>
          <button
            onClick={() => setAccent('crimson')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono ${
              accent === 'crimson' ? 'bg-red-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Crimson Theme
          </button>
        </div>
      </div>

      <div
        className={`p-4 rounded-xl border transition-all duration-300 ${
          accent === 'gold'
            ? 'bg-gradient-to-br from-[#0c1630] via-[#091124] to-[#14234b] border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
            : 'bg-gradient-to-br from-[#180d15] via-[#0f0913] to-[#2b0e1b] border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.25)]'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                accent === 'gold'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-red-600/20 text-red-300 border border-red-500/40'
              }`}
            >
              OS
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">Osama Soft Card</div>
              <div className="text-[10px] text-slate-400 font-mono">Verified Digital Profile</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-200">
            NFC / vCard
          </span>
        </div>

        <div className="text-xs text-slate-300 space-y-1 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-400">Email:</span>
            <span className="text-white">osamajzbsnjbsjs@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Tel:</span>
            <span className={accent === 'gold' ? 'text-amber-300' : 'text-red-300'}>
              0536 457 39 36
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Android Solutions Diagnostics Workflow Demo
const InteractiveAndroidDemo: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-mono text-sky-400">
        <span>Android Deployment & Sideloading Diagnostic Flow</span>
        <button
          onClick={() => setStep((s) => (s >= 3 ? 1 : s + 1))}
          className="text-xs text-amber-400 hover:underline flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Step {step}/3 (Next)
        </button>
      </div>

      <div className="p-3.5 rounded-xl bg-[#060b18] border border-slate-800 text-xs font-mono space-y-2">
        {step === 1 && (
          <div>
            <span className="text-emerald-400 font-bold">$ adb devices</span>
            <div className="text-slate-400 mt-1">List of devices attached:</div>
            <div className="text-white">device-808197396210	device (Android 14 API 34)</div>
            <div className="text-slate-400 mt-1">Package architecture: arm64-v8a compatible.</div>
          </div>
        )}
        {step === 2 && (
          <div>
            <span className="text-amber-400 font-bold">$ adb install -r osama_soft_v1.apk</span>
            <div className="text-slate-400 mt-1">Performing Streamed Install...</div>
            <div className="text-emerald-400">Success! APK signed and sideloaded successfully.</div>
          </div>
        )}
        {step === 3 && (
          <div>
            <span className="text-red-400 font-bold">$ adb shell pm grant com.osamasoft.app</span>
            <div className="text-slate-300 mt-1">
              ✓ Background execution whitelist granted.<br />
              ✓ Full OS storage permissions synchronized.<br />
              ✓ Ready for production deployment.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. Custom Web App Dynamic State Demo
const InteractiveWebDemo: React.FC = () => {
  const [counter, setCounter] = useState(100);
  const [theme, setTheme] = useState('Midnight');

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-mono text-red-400">
        <span>Instant SPA State Engine (Reactive DOM)</span>
        <span className="text-slate-400">Zero page reloads</span>
      </div>

      <div className="p-3.5 rounded-xl bg-[#060b18] border border-slate-800 flex items-center justify-between text-xs">
        <div>
          <div className="text-slate-300 font-semibold">Reactive Counter Metric:</div>
          <div className="text-xl font-bold font-mono text-amber-400">{counter} req/sec</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCounter((c) => c + 25)}
            className="px-2.5 py-1 rounded bg-red-600/20 text-red-300 border border-red-500/40 hover:bg-red-600/30"
          >
            + Scale Load
          </button>
          <button
            onClick={() => setCounter(100)}
            className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
