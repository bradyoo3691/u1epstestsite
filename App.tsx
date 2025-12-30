
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AdminDashboard from './components/AdminDashboard';
import { ViewState, Language, Product, BlogPost, SiteConfig } from './types';
import { INITIAL_PRODUCTS, INITIAL_POSTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [lang, setLang] = useState<Language>(Language.KO);
  
  // Persistence with localStorage
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('u1_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('u1_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [config, setConfig] = useState<SiteConfig>({
    themeColor: '#FF6B00',
    companyName: '유원EPS',
    heroTitle: '편안함은 기본, 단단함은 기준',
    heroSubTitle: '앉는 순간 느껴지는 국내 생산의 차이'
  });

  useEffect(() => {
    localStorage.setItem('u1_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('u1_posts', JSON.stringify(posts));
  }, [posts]);

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">주요 제품</h2>
                  <p className="text-gray-500">가장 사랑받는 베스트셀러 모델입니다.</p>
                </div>
                <button onClick={() => setView('products')} className="text-[#FF6B00] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                  전체보기 <span>→</span>
                </button>
              </div>
              <ProductList products={products.slice(0, 4)} />
            </section>
          </>
        );
      case 'products':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-4">전체 제품</h1>
            <p className="text-gray-500 mb-12">유원EPS의 모든 디자인 체어를 한 눈에 확인하세요.</p>
            <ProductList products={products} />
          </section>
        );
      case 'blog':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-12">블로그 / 소식</h1>
            <div className="grid gap-12">
              {posts.map(post => (
                <div key={post.id} className="grid md:grid-cols-2 gap-8 items-center group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100">
                    <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                  </div>
                  <div>
                    <p className="text-[#FF6B00] font-bold text-sm mb-2">{post.date}</p>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-[#FF6B00] transition-colors">{post.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{post.content}</p>
                    <button className="font-bold text-sm border-b-2 border-gray-200 group-hover:border-[#FF6B00] transition-all pb-1">더 읽어보기</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'delivery':
        return (
          <section className="max-w-4xl mx-auto px-6 py-32 text-center">
            <h1 className="text-4xl font-bold mb-8">포장 및 배송 안내</h1>
            <div className="aspect-[21/9] bg-gray-50 rounded-3xl flex items-center justify-center mb-12 text-gray-400">
              <span className="text-6xl">📦</span>
            </div>
            <div className="text-left space-y-12">
              <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <span className="bg-[#FF6B00] w-2 h-6 inline-block rounded-full"></span>
                   안전한 이중 포장
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  유원EPS의 모든 제품은 배송 중 발생할 수 있는 스크래치를 방지하기 위해 특수 제작된 보호 필름과 강화 골판지 박스를 사용하여 꼼꼼하게 패킹됩니다.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-6 border border-gray-100 rounded-2xl">
                    <p className="font-bold mb-2">배송 지역</p>
                    <p className="text-sm text-gray-500">전국 (제주/도서산간 별도)</p>
                 </div>
                 <div className="p-6 border border-gray-100 rounded-2xl">
                    <p className="font-bold mb-2">평균 배송일</p>
                    <p className="text-sm text-gray-500">영업일 기준 2-4일 이내</p>
                 </div>
                 <div className="p-6 border border-gray-100 rounded-2xl">
                    <p className="font-bold mb-2">배송비</p>
                    <p className="text-sm text-gray-500">기본 무료 (일부 품목 제외)</p>
                 </div>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h1 className="text-4xl font-bold mb-4">문의하기</h1>
                <p className="text-gray-500 mb-12">도움이 필요하신가요? 저희 팀이 빠르게 답변해 드립니다.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">성함</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF6B00]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">연락처</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF6B00]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">문의내용</label>
                    <textarea rows={5} className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#FF6B00]" />
                  </div>
                  <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors">메시지 보내기</button>
                </form>

                <div className="mt-12 flex gap-6">
                   <a href="#" className="flex items-center gap-2 font-bold text-gray-600 hover:text-[#FF6B00] transition-colors">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-6 h-6" />
                      Instagram
                   </a>
                   <a href="#" className="flex items-center gap-2 font-bold text-gray-600 hover:text-[#FF6B00] transition-colors">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111466.png" className="w-6 h-6" />
                      KakaoTalk
                   </a>
                </div>
              </div>
              <div className="space-y-8">
                 <div className="h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      Google Maps Placeholder
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <p className="text-xs font-bold text-[#FF6B00] mb-2 uppercase">Head Office</p>
                       <p className="font-bold">경기도 안산시 상록구</p>
                       <p className="text-sm text-gray-500">광덕서로 82 유원빌딩 4층</p>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-[#FF6B00] mb-2 uppercase">Contact Us</p>
                       <p className="font-bold">031-123-4567</p>
                       <p className="text-sm text-gray-500">support@u1eps.com</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        );
      case 'admin':
        return (
          <AdminDashboard 
            products={products} setProducts={setProducts} 
            posts={posts} setPosts={setPosts}
            config={config} setConfig={setConfig}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#FF6B00] selection:text-white">
      <Navbar 
        currentView={view} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold tracking-tighter mb-6">
                <span className="text-[#FF6B00]">U1</span>
                <span>eps</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                국내 최고 수준의 사출 기술로<br />
                가장 아름답고 견고한 의자를 만듭니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button onClick={() => setView('home')}>브랜드 스토리</button></li>
                <li>오시는 길</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button onClick={() => setView('contact')}>1:1 문의</button></li>
                <li><button onClick={() => setView('delivery')}>배송조회</button></li>
                <li>A/S 안내</li>
                <li>대량구매 문의</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">새로운 제품 소식을 받아보세요.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="이메일 주소" className="bg-white border-none rounded-lg px-4 py-2 flex-1 text-sm focus:ring-2 focus:ring-[#FF6B00]" />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold">구독</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 border-t border-gray-200 pt-10">
            <p>© 2024 유원EPS (U1 eps). All Rights Reserved.</p>
            <div className="flex gap-6">
               <a href="#">Instagram</a>
               <a href="#">KakaoTalk</a>
               <a href="#">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
