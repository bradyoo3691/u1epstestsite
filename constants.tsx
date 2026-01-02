
import { Product, BlogPost, Language } from './types';

export const TRANSLATIONS = {
  [Language.KO]: {
    navHome: '홈',
    navProducts: '제품',
    navDelivery: '배송안내',
    navBlog: '블로그',
    navContact: '문의하기',
    heroBadge: '가치를 준수합니다.',
    heroTitle: '편안함은 기본,\n단단함은 기준',
    heroDesc: '앉는 순간 느껴지는 국내 생산의 차이.\n의자는 매일 쓰니까, 제대로 만들었습니다.',
    btnBrowse: '제품 둘러보기',
    btnContact: '상담 문의',
    mainProducts: '주요 제품',
    mainProductsDesc: '가장 사랑받는 베스트셀러 모델입니다.',
    viewAll: '전체보기',
    footerDesc: '국내 최고 수준의 사출 기술로 가장 아름답고 견고한 의자를 만듭니다.',
    monthlyBest: '이달의 베스트셀러',
    deliveryTitle: '배송비 및 배송 방법 안내',
    shippingGuideTitle: '“배송비, 꼼꼼히 따져보고 주문하세요!”',
    shippingGuideIntro: '상품은 부피가 큰 가구 특성상\n박스 단위로 배송비가 부과 됩니다.',
    shippingDetail1: '1박스당 의자 수량 : 3개',
    shippingDetail2: '1박스당 배송 비용 : 15,000원\n(착불/선결제 선택 가능)',
    shippingExampleTitle: '[ 배송비 산정 예시 ]',
    shippingExample1: '• 2개 주문시 : 배송 비용 15,000원 (박스 1개)',
    shippingExample2: '• 8개 주문시 : 배송 비용 45,000원 (박스 3개)',
    bulkTipTitle: '💡 잠깐! 10개 이상 주문하시나요?\n(대량 구매 꿀팁)',
    bulkTipDesc: `택배보다 “화물배송(용달)”이 훨씬 저렴할 수 있습니다.
수량이 많다면 결제 전 꼭 전화주세요!

사장님의 상황에 맞춰 가장 알뜰한 배송 방법을 찾아드립니다.`,
    bulkContact: '📞 대량 구매 / 화물 문의 : 010-XXXX-XXXX',
    bulkContactSub: '(주말/공휴일 제외)',
    contactTitle: '문의하기',
    contactDesc: '도움이 필요하신가요?\n저희 팀이 빠르게 답변해 드립니다.',
    formName: '성함',
    formPhone: '연락처',
    formMessage: '문의내용',
    formSubmit: '메시지 보내기',
    office: '본사 위치',
    address: '경기도 안산시 상록구 광덕서로 82 유원빌딩 4층',
    newsletter: '뉴스레터',
    newsletterDesc: '새로운 제품 소식을 받아보세요.',
    subscribe: '구독'
  },
  [Language.EN]: {
    navHome: 'Home',
    navProducts: 'Products',
    navDelivery: 'Shipping',
    navBlog: 'Blog',
    navContact: 'Contact',
    heroBadge: 'Quality & Comfort',
    heroTitle: 'Comfort is Essential,\nDurability is Standard',
    heroDesc: 'Experience the difference of Made in Korea.\nChairs are used daily, so we made them right.',
    btnBrowse: 'Browse Products',
    btnContact: 'Inquiry',
    mainProducts: 'Main Products',
    mainProductsDesc: 'Our most loved best-selling models.',
    viewAll: 'View All',
    footerDesc: 'We create the most beautiful and durable chairs with top-tier injection technology.',
    monthlyBest: 'Monthly Best Seller',
    deliveryTitle: 'Shipping Fee & Method',
    shippingGuideTitle: '"Check shipping costs carefully before ordering!"',
    shippingGuideIntro: 'Due to the nature of bulky furniture,\nshipping is charged per box.',
    shippingDetail1: 'Max 3 chairs per box',
    shippingDetail2: 'Shipping fee per box: 15,000 KRW\n(Prepaid or COD)',
    shippingExampleTitle: '[ Shipping Cost Examples ]',
    shippingExample1: '• Order 2 items: 15,000 KRW (1 Box)',
    shippingExample2: '• Order 8 items: 45,000 KRW (3 Boxes)',
    bulkTipTitle: '💡 Wait! Ordering 10 or more?\n(Bulk Purchase Tip)',
    bulkTipDesc: `Cargo delivery (truck) might be much cheaper than standard courier.
Please call us before payment for bulk orders!

We will find the most cost-effective method for you.`,
    bulkContact: '📞 Bulk / Cargo Inquiry: 010-XXXX-XXXX',
    bulkContactSub: '(Excluding weekends/holidays)',
    contactTitle: 'Contact Us',
    contactDesc: 'Need help?\nOur team will get back to you quickly.',
    formName: 'Name',
    formPhone: 'Phone',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    office: 'Head Office',
    address: '4F, U1 Bldg, 82 Gwangdeokseo-ro, Ansan, Korea',
    newsletter: 'Newsletter',
    newsletterDesc: 'Get the latest news about our new products.',
    subscribe: 'Subscribe'
  }
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '클랑체어 1호',
    nameEn: 'Premium Echo Chair',
    price: 22000,
    image: 'https://i.ibb.co/wTdmJDc/5.png',
    colors: ['#BECF47', '#FFFFFF', '#000000', '#2D5A27'],
    description: '인체공학적 설계로 장시간 착석에도 편안함을 유지합니다.',
    descriptionEn: 'Ergonomic design ensures comfort even during long hours of sitting.',
    category: '식탁의자',
    categoryEn: 'Dining Chair'
  },
  {
    id: '2',
    name: '모던 플라스틱 스툴',
    nameEn: 'Modern Plastic Stool',
    price: 28000,
    image: 'https://picsum.photos/seed/chair2/800/800',
    colors: ['#F3F4F6', '#1F2937', '#FBBF24'],
    description: '심플한 디자인으로 어떤 공간에도 잘 어울립니다.',
    descriptionEn: 'A simple design that fits well in any space.',
    category: '스툴',
    categoryEn: 'Stool'
  },
  {
    id: '3',
    name: '유원 시그니처 암체어',
    nameEn: 'U1 Signature Armchair',
    price: 62000,
    image: 'https://picsum.photos/seed/chair3/800/800',
    colors: ['#FFFFFF', '#BECF47'],
    description: '유원EPS만의 독자적인 사출 기술로 제작된 시그니처 모델입니다.',
    descriptionEn: 'A signature model created with U1 eps unique injection technology.',
    category: '암체어',
    categoryEn: 'Armchair'
  },
  {
    id: '4',
    name: '베이직 오피스 체어',
    nameEn: 'Basic Office Chair',
    price: 39000,
    image: 'https://picsum.photos/seed/chair4/800/800',
    colors: ['#9CA3AF', '#374151', '#000000'],
    description: '실용성과 내구성을 모두 잡은 합리적인 선택.',
    descriptionEn: 'A reasonable choice that captures both practicality and durability.',
    category: '사무용',
    categoryEn: 'Office'
  }
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2024 인테리어 트렌드와 의자의 역할',
    titleEn: '2024 Interior Trends and the Role of Chairs',
    content: '올해의 인테리어 키워드는 미니멀리즘과 지속가능성입니다. 유원EPS는 이에 발맞춰...',
    contentEn: 'This year\'s interior keywords are minimalism and sustainability. U1 eps is keeping pace by...',
    date: '2024-05-10',
    image: 'https://picsum.photos/seed/blog1/1200/600'
  },
  {
    id: '2',
    title: '국내 생산의 자부심, 유원EPS 공장 견학기',
    titleEn: 'Pride of K-Production, U1 eps Factory Tour',
    content: '우리가 매일 앉는 의자가 어떻게 만들어지는지 궁금하신가요? 직접 공장을 방문했습니다.',
    contentEn: 'Ever wondered how the chairs we sit on every day are made? We visited the factory ourselves.',
    date: '2024-04-25',
    image: 'https://picsum.photos/seed/blog2/1200/600'
  }
];
