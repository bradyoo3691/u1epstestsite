
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
      colors: ['#BECF47'],
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
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('products')}
            className={`p-5 rounded-2xl text-left font-bold transition-all ${activeTab === 'products' ? 'bg-[#BECF47] text-white' : 'bg-white text-gray-500'}`}
          >
            📦 제품 관리
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`p-5 rounded-2xl text-left font-bold transition-all ${activeTab === 'blog' ? 'bg-[#BECF47] text-white' : 'bg-white text-gray-500'}`}
          >
            📝 블로그 관리
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`p-5 rounded-2xl text-left font-bold transition-all ${activeTab === 'settings' ? 'bg-[#BECF47] text-white' : 'bg-white text-gray-500'}`}
          >
            ⚙️ 사이트 설정
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">제품 리스트</h2>
                <button 
                  onClick={handleAddProduct}
                  className="bg-[#BECF47] text-white px-6 py-2 rounded-xl text-sm font-bold"
                >
                  + 추가
                </button>
              </div>
              <div className="space-y-4">
                {products.map(product => (
                  <div key={product.id} className="border border-gray-100 rounded-2xl p-4 flex gap-6 items-center">
                    <img src={product.image} className="w-20 h-20 rounded-xl object-contain bg-gray-50" />
                    <div className="flex-1">
                      <input 
                        type="text" 
                        value={product.name}
                        onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, name: e.target.value} : p))}
                        className="font-bold text-lg border-none p-0 focus:ring-0 w-full"
                      />
                      <div className="flex gap-2 items-center text-sm text-gray-400">
                        <span>₩</span>
                        <input 
                          type="number" 
                          value={product.price}
                          onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, price: Number(e.target.value)} : p))}
                          className="w-24 border-none p-0 focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        disabled={loadingAI}
                        onClick={() => generateAIDesc(product.id, product.name)}
                        className="text-xs font-bold bg-lime-50 text-[#BECF47] px-4 py-2 rounded-lg"
                      >
                        {loadingAI ? '생성중...' : '✨ AI 설명'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">기본 설정</h2>
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-400 uppercase">Main Theme Color</label>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#BECF47]" />
                  <p className="font-bold text-gray-900">#BECF47 (Lime Green)</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
