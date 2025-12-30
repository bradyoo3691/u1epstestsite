
export enum Language {
  KO = 'KO',
  EN = 'EN'
}

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  colors: string[]; // hex codes
  description: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

export interface SiteConfig {
  themeColor: string;
  companyName: string;
  heroTitle: string;
  heroSubTitle: string;
}

export type ViewState = 'home' | 'products' | 'delivery' | 'contact' | 'blog' | 'admin';
