import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Clock,
  Shield,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Custom Web Application Development',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'osamajzbsnjbsjs@gmail.com';
  const phoneNumber = '0536 457 39 36';
  const phoneTel = '05364573936';

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic asynchronous dispatch simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'Custom Web Application Development',
        details: '',
      });
      setTimeout(() => setSubmitted(false), 8000);
    }, 850);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#070c1a]"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            {t.contact.title} <span className="text-gradient-gold text-glow-gold">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-[#0a1226]/90 border border-slate-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                {t.contact.directTitle}
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                {t.contact.directDesc}
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#060b18] border border-slate-800/90 hover:border-red-500/40 transition-all duration-300 group mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                        {t.contact.emailLabel}
                      </div>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-red-400 transition-colors break-all flex items-center gap-1 mt-0.5"
                      >
                        <span>{emailAddress}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(emailAddress, 'email')}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#060b18] border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 group mb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                        {t.contact.phoneLabel}
                      </div>
                      <a
                        href={`tel:${phoneTel}`}
                        className="text-base sm:text-lg font-bold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 mt-0.5"
                      >
                        <span>{phoneNumber}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phoneNumber, 'phone')}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Availability & SLA Badge */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.contact.responseTime}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.contact.availability}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Dialing Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#0a1226] to-amber-950/30 border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 font-semibold uppercase">Direct Engineering Line</div>
                <div className="text-sm font-bold text-white mt-0.5">{phoneNumber}</div>
              </div>
              <a
                href={`tel:${phoneTel}`}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all"
              >
                {t.contact.callNow}
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#091225] border border-slate-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                {t.contact.subtitle}
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{t.contact.successMsg}</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>Osama Soft</strong>. Our team will contact you shortly via{' '}
                    <span className="text-amber-400">{emailAddress}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono"
                      >
                        {t.contact.nameLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#060b18] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-inner transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono"
                      >
                        {t.contact.emailInputLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#060b18] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-inner transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Domain Dropdown */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono"
                    >
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#060b18] border border-slate-700/80 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-inner transition-all text-sm"
                    >
                      <option value="Custom Web Application Development">
                        {t.contact.serviceOptions.web}
                      </option>
                      <option value="Browser-Based 3D Game Development">
                        {t.contact.serviceOptions.game}
                      </option>
                      <option value="Mobile & Android Solutions">
                        {t.contact.serviceOptions.android}
                      </option>
                      <option value="Premium UI/UX Design">
                        {t.contact.serviceOptions.design}
                      </option>
                      <option value="Full Software Architecture Consultation">
                        {t.contact.serviceOptions.other}
                      </option>
                    </select>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label
                      htmlFor="form-details"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono"
                    >
                      {t.contact.detailsLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="form-details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder={t.contact.detailsPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#060b18] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 shadow-inner transition-all text-sm resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-amber-500/40 shadow-[0_0_25px_rgba(220,38,38,0.45)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.contact.submitting}</span>
                      </span>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <Send className={`w-4 h-4 text-amber-300 ${isRTL ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
