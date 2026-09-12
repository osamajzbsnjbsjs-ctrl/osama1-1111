import React, { useState, useEffect } from 'react';
import { PublicOpinionItem, OpinionCategory } from '../types';
import { initialPublicOpinions } from '../data/opinionsData';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Users,
  Star,
  ThumbsUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PlusCircle,
  X,
  MessageSquare,
  Globe,
  Gamepad2,
  Smartphone,
  Palette,
  Heart,
  Award,
} from 'lucide-react';

const STORAGE_KEY = 'osama_soft_public_opinions';
const LIKES_STORAGE_KEY = 'osama_soft_liked_opinions';

export const PublicOpinionSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [opinions, setOpinions] = useState<PublicOpinionItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<OpinionCategory>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  // Submission Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formCategory, setFormCategory] = useState<'web' | 'game' | 'android' | 'design'>('web');
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formContent, setFormContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load opinions and likes from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOpinions(parsed);
        } else {
          setOpinions(initialPublicOpinions);
        }
      } else {
        setOpinions(initialPublicOpinions);
      }

      const storedLikes = localStorage.getItem(LIKES_STORAGE_KEY);
      if (storedLikes) {
        setLikedIds(JSON.parse(storedLikes));
      }
    } catch {
      setOpinions(initialPublicOpinions);
    }
  }, []);

  // Save opinions when modified
  const persistOpinions = (newOpinions: PublicOpinionItem[]) => {
    setOpinions(newOpinions);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newOpinions));
    } catch {
      // Ignore storage quota errors
    }
  };

  // Handle Likes / Endorsements
  const handleLike = (id: string) => {
    if (likedIds[id]) {
      // Already liked, remove like
      const updatedLikes = { ...likedIds };
      delete updatedLikes[id];
      setLikedIds(updatedLikes);
      localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updatedLikes));

      const updated = opinions.map((item) =>
        item.id === id ? { ...item, likes: Math.max(0, item.likes - 1) } : item
      );
      persistOpinions(updated);
    } else {
      // Add like
      const updatedLikes = { ...likedIds, [id]: true };
      setLikedIds(updatedLikes);
      localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updatedLikes));

      const updated = opinions.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      );
      persistOpinions(updated);
    }
  };

  // Form Submission
  const handleSubmitOpinion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContent.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newOpinion: PublicOpinionItem = {
        id: `op-user-${Date.now()}`,
        author: formName.trim(),
        role: formRole.trim() || (language === 'ar' ? 'مشارك تقني' : language === 'tr' ? 'Topluluk Üyesi' : 'Community Member'),
        location: language === 'ar' ? 'الشرق الأوسط' : language === 'tr' ? 'Türkiye' : 'Global Client',
        category: formCategory,
        rating: formRating,
        date: new Date().toLocaleDateString(language === 'ar' ? 'ar-EG' : language === 'tr' ? 'tr-TR' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        content: formContent.trim(),
        likes: 1,
        verified: true,
        isUserSubmitted: true,
      };

      const updatedList = [newOpinion, ...opinions];
      persistOpinions(updatedList);

      // Auto-mark like for author
      const updatedLikes = { ...likedIds, [newOpinion.id]: true };
      setLikedIds(updatedLikes);
      localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updatedLikes));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setModalOpen(false);
        setFormName('');
        setFormRole('');
        setFormContent('');
        setFormRating(5);
      }, 1500);
    }, 700);
  };

  // Filtered opinions
  const filteredOpinions = opinions.filter((op) => {
    if (selectedCategory === 'all') return true;
    return op.category === selectedCategory;
  });

  const getCategoryIcon = (category: 'web' | 'game' | 'android' | 'design') => {
    switch (category) {
      case 'web':
        return <Globe className="w-3.5 h-3.5 text-red-400" />;
      case 'game':
        return <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />;
      case 'android':
        return <Smartphone className="w-3.5 h-3.5 text-emerald-400" />;
      case 'design':
        return <Palette className="w-3.5 h-3.5 text-purple-400" />;
    }
  };

  const getCategoryLabel = (category: 'web' | 'game' | 'android' | 'design') => {
    switch (category) {
      case 'web':
        return t.publicOpinion.filterWeb;
      case 'game':
        return t.publicOpinion.filterGame;
      case 'android':
        return t.publicOpinion.filterAndroid;
      case 'design':
        return t.publicOpinion.filterDesign;
    }
  };

  return (
    <section
      id="opinion"
      className="py-24 md:py-32 relative border-t border-slate-800/80 bg-[#050a18] overflow-hidden text-left"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
            <Users className="w-3.5 h-3.5" />
            <span>{t.publicOpinion.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            {t.publicOpinion.title}{' '}
            <span className="text-gradient-gold text-glow-gold">
              {t.publicOpinion.titleAccent}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.publicOpinion.subtitle}
          </p>
        </div>

        {/* Public Sentiment & Quality Metrics Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#070e22] via-[#09142e] to-[#070e22] border border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            {/* Metric 1: 4.9 Stars */}
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  />
                ))}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                4.9 <span className="text-sm font-normal text-slate-400">/ 5.0</span>
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                {t.publicOpinion.avgRatingLabel}
              </div>
            </div>

            {/* Metric 2: 99.4% Recommendation */}
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-red-400 mb-1">
                <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
                <span className="text-xs font-bold text-red-300">Verified Client Consensus</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                99.4%
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                {t.publicOpinion.recommendationRate}
              </div>
            </div>

            {/* Metric 3: 100% Milestone Delivery */}
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">On-Time Architecture</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                100%
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                {t.publicOpinion.satisfactionLabel}
              </div>
            </div>

            {/* Metric 4: Verified Reviews Count */}
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-1.5 text-amber-300 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Audited Feedback</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                140+
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                {t.publicOpinion.verifiedReviews}
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Category Filtering Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#091225] p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.publicOpinion.filterAll}
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'web'
                  ? 'bg-red-600/30 text-white border border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Globe className="w-3 h-3 text-red-400" />
              <span>{t.publicOpinion.filterWeb}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('game')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'game'
                  ? 'bg-amber-600/30 text-white border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Gamepad2 className="w-3 h-3 text-amber-400" />
              <span>{t.publicOpinion.filterGame}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('android')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'android'
                  ? 'bg-emerald-600/30 text-white border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span>{t.publicOpinion.filterAndroid}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('design')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'design'
                  ? 'bg-purple-600/30 text-white border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-3 h-3 text-purple-400" />
              <span>{t.publicOpinion.filterDesign}</span>
            </button>
          </div>

          {/* Trigger "Share Your Opinion" Button */}
          <button
            id="share-public-opinion-btn"
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 border border-amber-400/40 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-amber-300" />
            <span>{t.publicOpinion.shareOpinionBtn}</span>
          </button>
        </div>

        {/* Public Opinions Cards Grid */}
        {filteredOpinions.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#091225] border border-slate-800 text-slate-400 space-y-3">
            <MessageSquare className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm">{t.publicOpinion.emptyMessage}</p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30"
            >
              {t.publicOpinion.shareOpinionBtn}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpinions.map((item) => {
              const isLiked = !!likedIds[item.id];
              return (
                <article
                  key={item.id}
                  id={`opinion-card-${item.id}`}
                  className={`p-6 rounded-3xl bg-[#081024]/90 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative ${
                    item.isUserSubmitted
                      ? 'border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.15)] bg-gradient-to-b from-[#0c1836] to-[#081024]'
                      : 'border-slate-800/90 hover:border-slate-700 shadow-xl'
                  }`}
                >
                  {/* Top user submit indicator */}
                  {item.isUserSubmitted && (
                    <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(245,158,11,0.6)]">
                      <Sparkles className="w-3 h-3" />
                      <span>COMMUNITY REVIEW</span>
                    </div>
                  )}

                  <div>
                    {/* Header: Author Info + Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar initials with cyber gradient ring */}
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 via-amber-500 to-emerald-400 p-[1.5px] shrink-0">
                          <div className="w-full h-full rounded-[14px] bg-[#050b1a] flex items-center justify-center text-xs font-mono font-bold text-white uppercase tracking-wider">
                            {item.author
                              .split(' ')
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join('')}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                              {item.author}
                            </h4>
                            {item.verified && (
                              <span
                                title="Verified Public Opinion"
                                className="inline-flex text-emerald-400"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-400/20" />
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 leading-snug">
                            {item.role}
                            {item.company ? ` • ${item.company}` : ''}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500">
                            {item.location}
                          </div>
                        </div>
                      </div>

                      {/* Category Pill */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-slate-300 shrink-0">
                        {getCategoryIcon(item.category)}
                        <span>{getCategoryLabel(item.category)}</span>
                      </span>
                    </div>

                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < item.rating
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]'
                              : 'fill-slate-800 text-slate-700'
                          }`}
                        />
                      ))}
                      <span className="text-[11px] font-mono text-amber-400/90 font-semibold ml-1.5">
                        {item.rating}.0
                      </span>
                    </div>

                    {/* Review / Opinion Content */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-5">
                      "{item.content}"
                    </p>
                  </div>

                  {/* Card Footer: Date & Like/Endorse Button */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] font-mono">{item.date}</span>

                    <button
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        isLiked
                          ? 'bg-red-600/20 text-red-400 border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                          : 'bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50'
                      }`}
                      title={isLiked ? t.publicOpinion.votedHelpful : t.publicOpinion.helpful}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-400' : ''}`} />
                      <span>{item.likes}</span>
                      <span className="hidden sm:inline text-[10px]">
                        {isLiked ? t.publicOpinion.votedHelpful : t.publicOpinion.helpful}
                      </span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive "Submit Your Opinion" Modal Dialog */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="w-full max-w-xl rounded-3xl bg-[#091329] border border-slate-700 shadow-2xl p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>{t.publicOpinion.modalTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {t.publicOpinion.form.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.publicOpinion.modalSubtitle}
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3 animate-in zoom-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {t.publicOpinion.form.successMsg}
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSubmitOpinion} className="space-y-4">
                {/* Name & Role Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.publicOpinion.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={t.publicOpinion.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.publicOpinion.form.roleLabel}
                    </label>
                    <input
                      type="text"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder={t.publicOpinion.form.rolePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Category & Rating Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.publicOpinion.form.categoryLabel}
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) =>
                        setFormCategory(e.target.value as 'web' | 'game' | 'android' | 'design')
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050b18] border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="web">{t.publicOpinion.filterWeb}</option>
                      <option value="game">{t.publicOpinion.filterGame}</option>
                      <option value="android">{t.publicOpinion.filterAndroid}</option>
                      <option value="design">{t.publicOpinion.filterDesign}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.publicOpinion.form.ratingLabel} ({formRating} / 5)
                    </label>
                    <div className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#050b18] border border-slate-700">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          onMouseEnter={() => setFormHoverRating(star)}
                          onMouseLeave={() => setFormHoverRating(0)}
                          className="p-1 hover:scale-110 transition-transform"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= (formHoverRating || formRating)
                                ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Opinion / Feedback Text */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    {t.publicOpinion.form.opinionLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder={t.publicOpinion.form.opinionPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050b18] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-y"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    {t.publicOpinion.form.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 border border-amber-400/40 shadow-[0_0_18px_rgba(220,38,38,0.45)] transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.publicOpinion.form.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.publicOpinion.form.submitBtn}</span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
