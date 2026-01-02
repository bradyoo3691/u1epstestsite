
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
  descriptionEn: string;
  category: string;
  categoryEn: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  date: string;
  image: string;
}

export interface SiteConfig {
  themeColor: string;
  companyName: string;
  heroTitle: string;
  heroTitleEn: string;
  heroSubTitle: string;
  heroSubTitleEn: string;
}

export type ViewState = 'home' | 'products' | 'delivery' | 'contact' | 'blog' | 'admin' | 'product-detail';
