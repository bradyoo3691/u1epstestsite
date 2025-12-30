
import React from 'react';
import { Product, BlogPost } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '프리미엄 에코 체어',
    nameEn: 'Premium Echo Chair',
    price: 45000,
    image: 'https://picsum.photos/seed/chair1/800/800',
    colors: ['#FFFFFF', '#000000', '#FF6B00', '#2D5A27'],
    description: '인체공학적 설계로 장시간 착석에도 편안함을 유지합니다.',
    category: '식탁의자'
  },
  {
    id: '2',
    name: '모던 플라스틱 스툴',
    nameEn: 'Modern Plastic Stool',
    price: 28000,
    image: 'https://picsum.photos/seed/chair2/800/800',
    colors: ['#F3F4F6', '#1F2937', '#FBBF24'],
    description: '심플한 디자인으로 어떤 공간에도 잘 어울립니다.',
    category: '스툴'
  },
  {
    id: '3',
    name: '유원 시그니처 암체어',
    nameEn: 'U1 Signature Armchair',
    price: 62000,
    image: 'https://picsum.photos/seed/chair3/800/800',
    colors: ['#FFFFFF', '#FF6B00'],
    description: '유원EPS만의 독자적인 사출 기술로 제작된 시그니처 모델입니다.',
    category: '암체어'
  },
  {
    id: '4',
    name: '베이직 오피스 체어',
    nameEn: 'Basic Office Chair',
    price: 39000,
    image: 'https://picsum.photos/seed/chair4/800/800',
    colors: ['#9CA3AF', '#374151', '#000000'],
    description: '실용성과 내구성을 모두 잡은 합리적인 선택.',
    category: '사무용'
  }
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2024 인테리어 트렌드와 의자의 역할',
    content: '올해의 인테리어 키워드는 미니멀리즘과 지속가능성입니다. 유원EPS는 이에 발맞춰...',
    date: '2024-05-10',
    image: 'https://picsum.photos/seed/blog1/1200/600'
  },
  {
    id: '2',
    title: '국내 생산의 자부심, 유원EPS 공장 견학기',
    content: '우리가 매일 앉는 의자가 어떻게 만들어지는지 궁금하신가요? 직접 공장을 방문했습니다.',
    date: '2024-04-25',
    image: 'https://picsum.photos/seed/blog2/1200/600'
  }
];
