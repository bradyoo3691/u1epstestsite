
import React, { useState } from 'react';
import { Product, BlogPost, SiteConfig } from '../types';
import { geminiService } from '../services/geminiService';

interface AdminDashboardProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  config: SiteConfig;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ products, setProducts, posts, setPosts, config, setConfig }) => {
  const [activeTab, setActiveTab] = useState<'products' | 'blog' | 'settings'>('products');
  const [loadingAI, setLoadingAI] = useState(false);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: '새 제품',
      nameEn: 'New Product',
      price: 0,
      image: 'https://picsum.photos/seed/' + Math.random() + '/800/800',
      colors: ['#FF6B00'],
      description: '설명을 입력하세요.',
      descriptionEn: 'Please enter description.',
      category: '카테고리',
      categoryEn: 'Category'
    };
    setProducts([...products, newProduct]);
  };

  const generateAIDesc = async (id: string, name: string) => {
    setLoadingAI(true);
    const desc = await geminiService.generateProductDescription(name);
    setProducts(products.map(p => p.id === id ? { ...p, description: desc } : p));
    setLoadingAI(false);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 md:pt-48 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('products')}
            className={`p-5 rounded-2xl text-left font-black transition-all ${activeTab === 'products' ? 'bg-[#FF6B00] text-white shadow-xl shadow-orange-100' : 'bg-white hover:bg-gray-100 text-gray-500'}`}
          >
            📦 제품 관리
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`p-5 rounded-2xl text-left font-black transition-all ${activeTab === 'blog' ? 'bg-[#FF6B00] text-white shadow-xl shadow-orange-100' : 'bg-white hover:bg-gray-100 text-gray-500'}`}
          >
            📝 블로그 관리
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`p-5 rounded-2xl text-left font-black transition-all ${activeTab === 'settings' ? 'bg-[#FF6B00] text-white shadow-xl shadow-orange-100' : 'bg-white hover:bg-gray-100 text-gray-500'}`}
          >
            ⚙️ 사이트 설정
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">제품 리스트 ({products.length})</h2>
                <button 
                  onClick={handleAddProduct}
                  className="bg-[#FF6B00] text-white px-6 py-3 rounded-xl text-sm font-black shadow-lg"
                >
                  + 제품 추가
                </button>
              </div>
              <div className="space-y-6">
                {products.map(product => (
                  <div key={product.id} className="border-2 border-gray-50 rounded-2xl p-6 flex gap-6 items-center hover:border-orange-100 transition-colors">
                    <img src={product.image} className="w-24 h-24 rounded-2xl object-contain bg-gray-50" />
                    <div className="flex-1">
                      <input 
                        type="text" 
                        value={product.name}
                        onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, name: e.target.value} : p))}
                        className="font-black text-xl border-none p-0 focus:ring-0 w-full mb-1"
                      />
                      <div className="flex gap-3 items-center">
                        <span className="text-xs font-black text-[#FF6B00]">₩</span>
                        <input 
                          type="number" 
                          value={product.price}
                          onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, price: Number(e.target.value)} : p))}
                          className="text-sm font-bold text-gray-400 w-32 border-none p-0 focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <button 
                        disabled={loadingAI}
                        onClick={() => generateAIDesc(product.id, product.name)}
                        className="text-[10px] md:text-xs font-black bg-orange-50 text-[#FF6B00] px-4 py-2 rounded-full border border-orange-100 hover:bg-orange-100 transition-colors"
                      >
                        {loadingAI ? '생성중...' : '✨ AI 추천설명'}
                      </button>
                      <button 
                        onClick={() => deleteProduct(product.id)}
                        className="text-[10px] md:text-xs font-black text-red-400 hover:text-red-600 uppercase"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-black mb-4">게시물 관리 시스템</h2>
              <p className="text-gray-400 font-medium mb-10">블로그 게시물을 작성하고 관리할 수 있습니다.</p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black">새 글 작성하기</button>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">기본 설정</h2>
              <div className="p-8 bg-gray-50 rounded-3xl space-y-8">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Main Theme Color</label>
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#FF6B00] shadow-xl shadow-orange-100" />
                    <div>
                      <p className="font-black text-gray-900">#FF6B00 (U1 Orange)</p>
                      <p className="text-sm text-gray-400 font-medium italic">Brand primary color used for accents and buttons.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Hero Banner Title</label>
                  <textarea 
                    value={config.heroTitle}
                    onChange={(e) => setConfig({...config, heroTitle: e.target.value})}
                    className="w-full border-2 border-transparent rounded-2xl p-6 text-base font-black focus:border-[#FF6B00] transition-all"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#FF6B00] text-white px-10 py-4 rounded-2xl font-black shadow-xl">설정 저장하기</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
