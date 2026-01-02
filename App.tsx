
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AdminDashboard from './components/AdminDashboard';
import ProductDetail from './components/ProductDetail';
import { ViewState, Language, Product, BlogPost, SiteConfig } from './types';
import { INITIAL_PRODUCTS, INITIAL_POSTS, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [lang, setLang] = useState<Language>(Language.KO);
  
  // Contact Form State
  const [contactData, setContactData] = useState({ name: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('u1_products');
    if (!saved) return INITIAL_PRODUCTS;
    
    // 로컬 스토리지 데이터가 있다면 불러오되, 
    // 기본 제품(ID: 1)의 이미지는 constants.tsx의 최신 URL로 강제 업데이트(동기화)
    const parsedProducts: Product[] = JSON.parse(saved);
    return parsedProducts.map(p => {
      const initial = INITIAL_PRODUCTS.find(i => i.id === p.id);
      if (initial && initial.id === '1') {
        return { ...p, image: initial.image }; // 최신 이미지 주소 강제 반영
      }
      return p;
    });
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('u1_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [config, setConfig] = useState<SiteConfig>({
    themeColor: '#BECF47',
    companyName: '유원EPS',
    heroTitle: '편안함은 기본, 단단함은 기준',
    heroTitleEn: 'Comfort is Essential, Durability is Standard',
    heroSubTitle: '앉는 순간 느껴지는 국내 생산의 차이',
    heroSubTitleEn: 'Experience the difference of Made in Korea'
  });

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    localStorage.setItem('u1_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('u1_posts', JSON.stringify(posts));
  }, [posts]);

  // 상단으로 스크롤 이동 (뷰 변경 시)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('SENDING');
    try {
      const response = await fetch('https://formspree.io/f/mlgdjbqz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      if (response.ok) {
        setFormStatus('SUCCESS');
        setContactData({ name: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('IDLE'), 5000);
      } else {
        setFormStatus('ERROR');
      }
    } catch (err) {
      setFormStatus('ERROR');
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero lang={lang} setView={setView} />
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.mainProducts}</h2>
                  <p className="text-gray-500">{t.mainProductsDesc}</p>
                </div>
                <button onClick={() => setView('products')} className="text-[#BECF47] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                  {t.viewAll} <span>→</span>
                </button>
              </div>
              <ProductList products={products.slice(0, 4)} lang={lang} setView={setView} />
            </section>
          </>
        );
      case 'products':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-4">{t.navProducts}</h1>
            <p className="text-gray-500 mb-12">{t.mainProductsDesc}</p>
            <ProductList products={products} lang={lang} setView={setView} />
          </section>
        );
      case 'product-detail':
        return <ProductDetail lang={lang} setView={setView} />;
      case 'blog':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-12">{t.navBlog}</h1>
            <div className="grid gap-12">
              {posts.map(post => (
                <div key={post.id} className="grid md:grid-cols-2 gap-8 items-center group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100">
                    <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                  </div>
                  <div>
                    <p className="text-[#BECF47] font-bold text-sm mb-2">{post.date}</p>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-[#BECF47] transition-colors">
                      {lang === Language.KO ? post.title : post.titleEn}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6 whitespace-pre-line">
                      {lang === Language.KO ? post.content : post.contentEn}
                    </p>
                    <button className="font-bold text-sm border-b-2 border-gray-200 group-hover:border-[#BECF47] transition-all pb-1">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'delivery':
        return (
          <section className="max-w-4xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-12 text-center">{t.deliveryTitle}</h1>
            
            <div className="space-y-8">
              <div className="bg-white border-2 border-[#BECF47] p-8 md:p-12 rounded-[2rem] shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight whitespace-pre-line">
                  {t.shippingGuideTitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-medium whitespace-pre-line">
                  {t.shippingGuideIntro}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-[#BECF47] font-bold text-sm uppercase tracking-wider mb-2">Standard Unit</p>
                    <p className="text-xl font-bold text-gray-800 whitespace-pre-line">{t.shippingDetail1}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-[#BECF47] font-bold text-sm uppercase tracking-wider mb-2">Cost Per Box</p>
                    <p className="text-xl font-bold text-gray-800 whitespace-pre-line">{t.shippingDetail2}</p>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 whitespace-pre-line">{t.shippingExampleTitle}</h3>
                  <ul className="space-y-3 text-gray-600 font-medium whitespace-pre-line">
                    <li>{t.shippingExample1}</li>
                    <li>{t.shippingExample2}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#fbfc8233] p-8 md:p-12 rounded-[2rem] border border-[#BECF47]/30">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 whitespace-pre-line">
                  {t.bulkTipTitle}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg whitespace-pre-line">
                  {t.bulkTipDesc}
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm inline-block border border-[#BECF47]/50">
                   <p className="text-xl md:text-2xl font-bold text-[#8ba634] whitespace-pre-line">
                     {t.bulkContact}
                   </p>
                   <p className="text-sm text-gray-500 mt-1 font-medium pl-8 whitespace-pre-line">
                     {t.bulkContactSub}
                   </p>
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
                <h1 className="text-4xl font-bold mb-4">{t.contactTitle}</h1>
                <p className="text-gray-500 mb-12 whitespace-pre-line">{t.contactDesc}</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">{t.formName}</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">{t.formPhone}</label>
                      <input 
                        type="text" 
                        name="phone"
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">{t.formMessage}</label>
                    <textarea 
                      rows={5} 
                      name="message"
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47]" 
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'SENDING'}
                    className={`w-full text-white py-4 rounded-xl font-bold transition-all shadow-lg ${
                      formStatus === 'SENDING' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-black active:scale-[0.98]'
                    }`}
                  >
                    {formStatus === 'SENDING' ? (lang === Language.KO ? '보내는 중...' : 'Sending...') : t.formSubmit}
                  </button>

                  {formStatus === 'SUCCESS' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold animate-bounce">
                      {lang === Language.KO ? '문의가 성공적으로 전송되었습니다!' : 'Your message has been sent successfully!'}
                    </div>
                  )}
                  {formStatus === 'ERROR' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold">
                      {lang === Language.KO ? '오류가 발생했습니다. 다시 시도해주세요.' : 'Something went wrong. Please try again.'}
                    </div>
                  )}
                </form>
              </div>
              <div className="space-y-8">
                 <div className="h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      Google Maps Placeholder
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <p className="text-xs font-bold text-[#BECF47] mb-2 uppercase">{t.office}</p>
                       <p className="font-bold">{lang === Language.KO ? '경기도 안산시' : 'Ansan-si, Gyeonggi-do'}</p>
                       <p className="text-sm text-gray-500 whitespace-pre-line">{t.address}</p>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-[#BECF47] mb-2 uppercase">Contact Us</p>
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
    <div className="min-h-screen selection:bg-[#BECF47] selection:text-white">
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
                <span className="text-[#BECF47]">U1</span>
                <span>eps</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button onClick={() => setView('home')}>{lang === Language.KO ? '브랜드 스토리' : 'Brand Story'}</button></li>
                <li>{lang === Language.KO ? '오시는 길' : 'Directions'}</li>
                <li>{lang === Language.KO ? '이용약관' : 'Terms'}</li>
                <li>{lang === Language.KO ? '개인정보처리방침' : 'Privacy Policy'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button onClick={() => setView('contact')}>{lang === Language.KO ? '1:1 문의' : 'Q&A'}</button></li>
                <li><button onClick={() => setView('delivery')}>{lang === Language.KO ? '배송조회' : 'Track Order'}</button></li>
                <li>{lang === Language.KO ? 'A/S 안내' : 'Warranty'}</li>
                <li>{lang === Language.KO ? '대량구매 문의' : 'Bulk Purchase'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">{t.newsletter}</h4>
              <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">{t.newsletterDesc}</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-white border-none rounded-lg px-4 py-2 flex-1 text-sm focus:ring-2 focus:ring-[#BECF47]" />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold">{t.subscribe}</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 border-t border-gray-200 pt-10">
            <p>© 2026 유원EPS (U1 eps). All Rights Reserved.</p>
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
