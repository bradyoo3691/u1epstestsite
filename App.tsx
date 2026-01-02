
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
            <section className="max-w-7xl mx-auto px-6 py-20">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.mainProducts}</h2>
                  <p className="text-gray-500">{t.mainProductsDesc}</p>
                </div>
                <button 
                  onClick={() => setView('products')} 
                  className="text-[#BECF47] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
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
            <h1 className="text-4xl font-bold mb-4 tracking-tight">{t.navProducts}</h1>
            <p className="text-gray-500 mb-12">{t.mainProductsDesc}</p>
            <ProductList products={products} lang={lang} setView={setView} />
          </section>
        );
      case 'product-detail':
        return <ProductDetail lang={lang} setView={setView} />;
      case 'blog':
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-12 tracking-tight">{t.navBlog}</h1>
            <div className="grid gap-12">
              {posts.map(post => (
                <div key={post.id} className="grid md:grid-cols-2 gap-8 items-center group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
                    <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                  </div>
                  <div>
                    <p className="text-[#BECF47] font-bold text-sm mb-2">{post.date}</p>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-[#BECF47] transition-colors leading-tight">
                      {lang === Language.KO ? post.title : post.titleEn}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6 whitespace-pre-line text-sm md:text-base">
                      {lang === Language.KO ? post.content : post.contentEn}
                    </p>
                    <button className="font-bold text-sm border-b-2 border-gray-100 group-hover:border-[#BECF47] transition-all pb-1">Read Article</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'delivery':
        return (
          <section className="max-w-4xl mx-auto px-6 py-32">
            <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">{t.deliveryTitle}</h1>
            
            <div className="space-y-8">
              <div className="bg-white border-2 border-[#BECF47] p-8 md:p-12 rounded-[2rem] shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight whitespace-pre-line">
                  {t.shippingGuideTitle}
                </h2>
                <p className="text-lg text-gray-500 mb-8 font-medium whitespace-pre-line">
                  {t.shippingGuideIntro}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-[#BECF47] font-bold text-xs uppercase tracking-wider mb-2">Standard Unit</p>
                    <p className="text-xl font-bold text-gray-900 whitespace-pre-line">{t.shippingDetail1}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-[#BECF47] font-bold text-xs uppercase tracking-wider mb-2">Cost Per Box</p>
                    <p className="text-xl font-bold text-gray-900 whitespace-pre-line">{t.shippingDetail2}</p>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 whitespace-pre-line">{t.shippingExampleTitle}</h3>
                  <ul className="space-y-3 text-gray-500 font-medium">
                    <li>• {t.shippingExample1}</li>
                    <li>• {t.shippingExample2}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#BECF47]/10 p-8 md:p-12 rounded-[2rem] border border-[#BECF47]/20">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 whitespace-pre-line leading-tight">
                  {t.bulkTipTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg whitespace-pre-line">
                  {t.bulkTipDesc}
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm inline-block border border-[#BECF47]/30">
                   <p className="text-lg md:text-xl font-bold text-[#BECF47] whitespace-pre-line">
                     {t.bulkContact}
                   </p>
                   <p className="text-xs text-gray-400 mt-1 font-medium pl-8">
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
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h1 className="text-4xl font-bold mb-6 tracking-tight">{t.contactTitle}</h1>
                <p className="text-lg text-gray-500 mb-12 font-medium leading-relaxed whitespace-pre-line">{t.contactDesc}</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.formName}</label>
                      <input 
                        type="text" 
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47] transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.formPhone}</label>
                      <input 
                        type="text" 
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47] transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.formMessage}</label>
                    <textarea 
                      rows={5} 
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#BECF47] transition-all" 
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'SENDING'}
                    className={`w-full text-white py-4 rounded-xl font-bold transition-all shadow-md ${
                      formStatus === 'SENDING' ? 'bg-gray-300' : 'bg-gray-900 hover:bg-black active:scale-[0.98]'
                    }`}
                  >
                    {formStatus === 'SENDING' ? (lang === Language.KO ? '보내는 중...' : 'Sending...') : t.formSubmit}
                  </button>

                  {formStatus === 'SUCCESS' && (
                    <div className="p-4 bg-lime-50 text-[#BECF47] rounded-xl text-center font-bold animate-bounce">
                      {lang === Language.KO ? '문의가 성공적으로 전송되었습니다!' : 'Message sent successfully!'}
                    </div>
                  )}
                </form>
              </div>
              <div className="space-y-8">
                 <div className="aspect-square md:h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner">
                   <img 
                     src="https://i.ibb.co/8L6zd3Kr/image.png" 
                     alt="유원EPS 약도" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <p className="text-xs font-bold text-[#BECF47] mb-2 uppercase tracking-widest">{t.office}</p>
                       <p className="text-lg font-bold mb-1">{lang === Language.KO ? '유원EPS' : 'U1 eps'}</p>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed">{t.address}</p>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-[#BECF47] mb-2 uppercase tracking-widest">Contact</p>
                       <p className="text-lg font-bold mb-1">031-123-4567</p>
                       <p className="text-sm text-gray-500 font-medium">support@u1eps.com</p>
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
      
      <main className="bg-white">
        {renderContent()}
      </main>

      <footer className="bg-gray-50 text-gray-900 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="text-2xl font-bold tracking-tighter mb-6">
                <span className="text-[#BECF47]">U1</span>
                <span>eps</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button className="hover:text-[#BECF47]" onClick={() => setView('home')}>{lang === Language.KO ? '브랜드 스토리' : 'Brand Story'}</button></li>
                <li>{lang === Language.KO ? '오시는 길' : 'Directions'}</li>
                <li>{lang === Language.KO ? '이용약관' : 'Terms'}</li>
                <li>{lang === Language.KO ? '개인정보처리방침' : 'Privacy Policy'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Support</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><button className="hover:text-[#BECF47]" onClick={() => setView('contact')}>{lang === Language.KO ? '1:1 문의' : 'Q&A'}</button></li>
                <li><button className="hover:text-[#BECF47]" onClick={() => setView('delivery')}>{lang === Language.KO ? '배송조회' : 'Track Order'}</button></li>
                <li>{lang === Language.KO ? 'A/S 안내' : 'Warranty'}</li>
                <li>{lang === Language.KO ? '대량구매 문의' : 'Bulk Purchase'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">{t.newsletter}</h4>
              <p className="text-sm text-gray-500 mb-6 font-medium">{t.newsletterDesc}</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex-1 text-sm outline-none focus:ring-2 focus:ring-[#BECF47]" />
                <button className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-bold">{t.subscribe}</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 border-t border-gray-100 pt-10 font-medium">
            <p>© 2026 유원EPS (U1 eps). All Rights Reserved.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-[#BECF47]">Instagram</a>
               <a href="#" className="hover:text-[#BECF47]">KakaoTalk</a>
               <a href="#" className="hover:text-[#BECF47]">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
