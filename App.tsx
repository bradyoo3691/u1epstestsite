
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
    
    const parsedProducts: Product[] = JSON.parse(saved);
    return parsedProducts.map(p => {
      const initial = INITIAL_PRODUCTS.find(i => i.id === p.id);
      if (initial && initial.id === '1') {
        return { ...p, image: initial.image }; 
      }
      return p;
    });
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('u1_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [config, setConfig] = useState<SiteConfig>({
    themeColor: '#FF6B00',
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
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-4">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-black mb-2">{t.mainProducts}</h2>
                  <p className="text-gray-400 font-medium">{t.mainProductsDesc}</p>
                </div>
                <button 
                  onClick={() => setView('products')} 
                  className="text-[#FF6B00] font-black flex items-center gap-2 hover:translate-x-2 transition-transform text-sm md:text-base"
                >
                  {t.viewAll} <span className="text-xl">→</span>
                </button>
              </div>
              <ProductList products={products.slice(0, 4)} lang={lang} setView={setView} />
            </section>
          </>
        );
      case 'products':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
            <h1 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter">{t.navProducts}</h1>
            <p className="text-gray-400 font-medium mb-12 md:mb-20">{t.mainProductsDesc}</p>
            <ProductList products={products} lang={lang} setView={setView} />
          </section>
        );
      case 'product-detail':
        return <ProductDetail lang={lang} setView={setView} />;
      case 'blog':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
            <h1 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 tracking-tighter">{t.navBlog}</h1>
            <div className="grid gap-16 md:gap-24">
              {posts.map(post => (
                <div key={post.id} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gray-50 shadow-xl">
                    <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" />
                  </div>
                  <div>
                    <p className="text-[#FF6B00] font-black text-xs md:text-sm mb-3 uppercase tracking-widest">{post.date}</p>
                    <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 group-hover:text-[#FF6B00] transition-colors leading-tight">
                      {lang === Language.KO ? post.title : post.titleEn}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-8 md:mb-10 whitespace-pre-line font-medium text-sm md:text-lg">
                      {lang === Language.KO ? post.content : post.contentEn}
                    </p>
                    <button className="font-black text-sm md:text-base border-b-4 border-gray-100 group-hover:border-[#FF6B00] transition-all pb-2">Read Article</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'delivery':
        return (
          <section className="max-w-4xl mx-auto px-6 py-32 md:py-48">
            <h1 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 text-center tracking-tighter">{t.deliveryTitle}</h1>
            
            <div className="space-y-8 md:space-y-12">
              <div className="bg-white border-2 border-[#FF6B00] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-orange-50">
                <h2 className="text-2xl md:text-4xl font-black mb-8 text-gray-900 leading-[1.2] whitespace-pre-line">
                  {t.shippingGuideTitle}
                </h2>
                <p className="text-base md:text-xl text-gray-500 mb-10 md:mb-12 font-bold whitespace-pre-line">
                  {t.shippingGuideIntro}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
                  <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100">
                    <p className="text-[#FF6B00] font-black text-xs uppercase tracking-widest mb-3">Standard Unit</p>
                    <p className="text-xl md:text-2xl font-black text-gray-900 whitespace-pre-line">{t.shippingDetail1}</p>
                  </div>
                  <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100">
                    <p className="text-[#FF6B00] font-black text-xs uppercase tracking-widest mb-3">Cost Per Box</p>
                    <p className="text-xl md:text-2xl font-black text-gray-900 whitespace-pre-line">{t.shippingDetail2}</p>
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-gray-100 pt-10 md:pt-16">
                  <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-6 md:mb-8 whitespace-pre-line">{t.shippingExampleTitle}</h3>
                  <ul className="space-y-4 text-gray-500 font-black text-sm md:text-xl">
                    <li className="flex gap-3"><span className="text-[#FF6B00]">•</span> {t.shippingExample1}</li>
                    <li className="flex gap-3"><span className="text-[#FF6B00]">•</span> {t.shippingExample2}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FF6B00]/5 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-[#FF6B00]/20">
                <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-gray-900 whitespace-pre-line leading-tight">
                  {t.bulkTipTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-10 md:mb-12 text-base md:text-2xl font-medium whitespace-pre-line">
                  {t.bulkTipDesc}
                </p>
                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl inline-block border-2 border-[#FF6B00]/50">
                   <p className="text-lg md:text-3xl font-black text-[#FF6B00] whitespace-pre-line">
                     {t.bulkContact}
                   </p>
                   <p className="text-xs md:text-sm text-gray-400 mt-2 font-bold md:pl-10">
                     {t.bulkContactSub}
                   </p>
                </div>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
              <div>
                <h1 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">{t.contactTitle}</h1>
                <p className="text-base md:text-2xl text-gray-500 mb-12 md:mb-20 font-medium leading-relaxed whitespace-pre-line">{t.contactDesc}</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">{t.formName}</label>
                      <input 
                        type="text" 
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-4 md:p-6 text-base focus:border-[#FF6B00] focus:bg-white transition-all font-bold" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">{t.formPhone}</label>
                      <input 
                        type="text" 
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-4 md:p-6 text-base focus:border-[#FF6B00] focus:bg-white transition-all font-bold" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">{t.formMessage}</label>
                    <textarea 
                      rows={5} 
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-4 md:p-6 text-base focus:border-[#FF6B00] focus:bg-white transition-all font-bold" 
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'SENDING'}
                    className={`w-full text-white py-5 md:py-7 rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl transition-all shadow-2xl shadow-orange-100 ${
                      formStatus === 'SENDING' ? 'bg-gray-300' : 'bg-[#FF6B00] hover:bg-black active:scale-[0.98]'
                    }`}
                  >
                    {formStatus === 'SENDING' ? (lang === Language.KO ? '보내는 중...' : 'Sending...') : t.formSubmit}
                  </button>

                  {formStatus === 'SUCCESS' && (
                    <div className="p-5 md:p-8 bg-orange-50 text-[#FF6B00] rounded-2xl text-center font-black text-lg animate-bounce">
                      {lang === Language.KO ? '문의가 성공적으로 전송되었습니다!' : 'Message sent successfully!'}
                    </div>
                  )}
                </form>
              </div>
              <div className="space-y-10 md:space-y-16 pt-0 md:pt-16">
                 <div className="aspect-square md:h-[500px] bg-gray-50 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl ring-8 ring-white">
                   <img 
                     src="https://i.ibb.co/8L6zd3Kr/image.png" 
                     alt="유원EPS 약도" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-6 md:p-8 bg-gray-50 rounded-3xl">
                       <p className="text-[10px] md:text-xs font-black text-[#FF6B00] mb-3 uppercase tracking-widest">{t.office}</p>
                       <p className="text-xl md:text-2xl font-black mb-2">{lang === Language.KO ? '유원EPS' : 'U1 eps'}</p>
                       <p className="text-sm md:text-lg text-gray-500 font-bold leading-relaxed">{t.address}</p>
                    </div>
                    <div className="p-6 md:p-8 bg-gray-50 rounded-3xl">
                       <p className="text-[10px] md:text-xs font-black text-[#FF6B00] mb-3 uppercase tracking-widest">Contact Channel</p>
                       <p className="text-xl md:text-2xl font-black mb-2">031-123-4567</p>
                       <p className="text-sm md:text-lg text-gray-500 font-bold">support@u1eps.com</p>
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
      
      <main className="bg-white">
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white pt-24 md:pt-40 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 md:mb-32">
            <div className="col-span-1">
              <div className="text-3xl md:text-4xl font-black tracking-tighter mb-8">
                <span className="text-[#FF6B00]">U1</span>
                <span>eps</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest">Company</h4>
              <ul className="text-sm md:text-base text-gray-400 space-y-5 font-medium">
                <li><button className="hover:text-white transition-colors" onClick={() => setView('home')}>{lang === Language.KO ? '브랜드 스토리' : 'Brand Story'}</button></li>
                <li>{lang === Language.KO ? '오시는 길' : 'Directions'}</li>
                <li>{lang === Language.KO ? '이용약관' : 'Terms'}</li>
                <li>{lang === Language.KO ? '개인정보처리방침' : 'Privacy Policy'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest">Support</h4>
              <ul className="text-sm md:text-base text-gray-400 space-y-5 font-medium">
                <li><button className="hover:text-white transition-colors" onClick={() => setView('contact')}>{lang === Language.KO ? '1:1 문의' : 'Q&A'}</button></li>
                <li><button className="hover:text-white transition-colors" onClick={() => setView('delivery')}>{lang === Language.KO ? '배송조회' : 'Track Order'}</button></li>
                <li>{lang === Language.KO ? 'A/S 안내' : 'Warranty'}</li>
                <li>{lang === Language.KO ? '대량구매 문의' : 'Bulk Purchase'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest">{t.newsletter}</h4>
              <p className="text-sm md:text-base text-gray-400 mb-8 font-medium">{t.newsletterDesc}</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex-1 text-sm focus:bg-white/10 focus:ring-2 focus:ring-[#FF6B00] outline-none" />
                <button className="bg-[#FF6B00] text-white px-6 py-4 rounded-xl text-sm font-black">{t.subscribe}</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-sm text-gray-500 border-t border-white/10 pt-12 md:pt-20 font-bold uppercase tracking-widest">
            <p>© 2026 유원EPS (U1 eps). All Rights Reserved.</p>
            <div className="flex gap-10">
               <a href="#" className="hover:text-[#FF6B00] transition-colors">Instagram</a>
               <a href="#" className="hover:text-[#FF6B00] transition-colors">KakaoTalk</a>
               <a href="#" className="hover:text-[#FF6B00] transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
