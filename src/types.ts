export type SectionId = 'home' | 'about' | 'services' | 'opinion' | 'contact';

export type Language = 'en' | 'ar' | 'tr';

export type OpinionCategory = 'all' | 'web' | 'game' | 'android' | 'design';

export interface PublicOpinionItem {
  id: string;
  author: string;
  role: string;
  company?: string;
  location: string;
  category: 'web' | 'game' | 'android' | 'design';
  rating: number;
  date: string;
  content: string;
  likes: number;
  verified: boolean;
  avatarSeed?: string;
  isUserSubmitted?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accent: 'crimson' | 'gold';
  icon: string;
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  details: string;
}
