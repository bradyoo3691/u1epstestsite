
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
    // Fixed: Added missing descriptionEn and categoryEn to comply with the Product interface
    const newProduct: Product = {
      id: Date.now().toString(),
      name: '새 제품',
      nameEn: 'New Product',
      price: 0,
      image: 'https://picsum.photos/seed/' + Math.random() + '/800/800',
      colors: ['#FFFFFF'],
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
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('products')}
            className={`p-4 rounded-xl text-left font-bold transition-all ${activeTab === 'products' ? 'bg-[#BECF47] text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            📦 제품 관리
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`p-4 rounded-xl text-left font-bold transition-all ${activeTab === 'blog' ? 'bg-[#BECF47] text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            📝 블로그 관리
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`p-4 rounded-xl text-left font-bold transition-all ${activeTab === 'settings' ? 'bg-[#BECF47] text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            ⚙️ 사이트 설정
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">제품 리스트 ({products.length})</h2>
                <button 
                  onClick={handleAddProduct}
                  className="bg-[#BECF47] text-white px-4 py-2 rounded-lg text-sm font-bold"
                >
                  + 제품 추가
                </button>
              </div>
              <div className="space-y-4">
                {products.map(product => (
                  <div key={product.id} className="border rounded-xl p-4 flex gap-4 items-center">
                    <img src={product.image} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <input 
                        type="text" 
                        value={product.name}
                        onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, name: e.target.value} : p))}
                        className="font-bold border-none p-0 focus:ring-0 w-full"
                      />
                      <div className="flex gap-2 mt-1 items-center">
                        <input 
                          type="number" 
                          value={product.price}
                          onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, price: Number(e.target.value)} : p))}
                          className="text-sm text-gray-500 w-24 border rounded px-1"
                        />
                        <span className="text-xs text-gray-400">₩</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        disabled={loadingAI}
                        onClick={() => generateAIDesc(product.id, product.name)}
                        className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-100 hover:bg-purple-100"
                      >
                        {loadingAI ? '생성중...' : '✨ AI 설명'}
                      </button>
                      <button 
                        onClick={() => deleteProduct(product.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div>
              <h2 className="text-2xl font-bold mb-8">게시물 관리</h2>
              <div className="bg-gray-50 p-6 rounded-2xl text-center text-gray-500">
                블로그 CMS 기능이 활성화되었습니다. (데모 버전)
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-8">기본 설정</h2>
              <div>
                <label className="block text-sm font-bold mb-2">메인 테마 컬러</label>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#BECF47]" />
                  <span className="text-sm font-mono text-gray-500">#BECF47 (유원 라임)</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">메인 타이틀</label>
                <textarea 
                  value={config.heroTitle}
                  onChange={(e) => setConfig({...config, heroTitle: e.target.value})}
                  className="w-full border rounded-xl p-4 text-sm"
                  rows={3}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;