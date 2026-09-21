export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  description: string;
  features: string[];
  url: string;
  accentColor: string;
  gradient: string;
  badgeBg: string;
  iconName: 'DeckStudy' | 'TypingPro' | 'WaterWeber';
}

export interface ContactFormData {
  name: string;
  email: string;
  targetApp: string;
  message: string;
}
