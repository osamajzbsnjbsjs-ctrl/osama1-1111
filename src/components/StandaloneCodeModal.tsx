import React, { useState } from 'react';
import { STANDALONE_HTML_CODE } from '../data/standaloneHtml';
import { X, Copy, Check, Download, FileCode2, Sparkles } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneCodeModal: React.FC<StandaloneCodeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'osama_soft_standalone.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="standalone-code-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#091225] border border-amber-500/40 shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.2)] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#060b18]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Single Unified Block HTML/CSS/JS Code</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready to Copy & Run
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Self-contained Single Page Application file. Paste into any file named <code className="text-amber-300">index.html</code> and run instantly in any browser.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-[#080e1d] border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs font-mono text-slate-400">
            Includes semantic HTML5, embedded high-tech CSS, and pure Vanilla JavaScript SPA routing.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download .html File</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/40 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-300" />
                  <span>Copy Complete Block</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content Box */}
        <div className="flex-1 overflow-auto p-6 bg-[#04070f] font-mono text-xs text-slate-300 leading-relaxed select-all">
          <pre className="whitespace-pre overflow-x-auto text-[11px] sm:text-xs text-slate-300">
            <code>{STANDALONE_HTML_CODE}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-[#060b18] flex items-center justify-between text-xs text-slate-400">
          <div>
            Built for <strong>Osama Soft</strong> • Contact: <span className="text-white">osamajzbsnjbsjs@gmail.com</span> | <span className="text-amber-400">0536 457 39 36</span>
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
