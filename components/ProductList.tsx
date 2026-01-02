
import React from 'react';
import { Product, Language, ViewState } from '../types';

interface ProductListProps {
  products: Product[];
  lang: Language;
  setView: (view: ViewState) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, lang, setView }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => {
        const isSignature = index === 0;
        
        return (
          <div 
            key={product.id} 
            className={`group cursor-pointer transition-all duration-300 ${!isSignature ? 'opacity-80 hover:opacity-100' : ''}`}
            onClick={() => isSignature ? setView('product-detail') : null}
          >
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-5 relative shadow-sm group-hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={lang === Language.KO ? product.name : product.nameEn}
                className={`w-full h-full object-cover transition-transform duration-700 ${isSignature ? 'group-hover:scale-110' : 'grayscale-[0.5] opacity-60'}`}
              />
              
              {/* Coming Soon Overlay */}
              {!isSignature && (
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full shadow-xl transform -rotate-3 border border-gray-100">
                    <span className="text-gray-900 font-bold tracking-tighter text-sm uppercase">Coming Soon</span>
                  </div>
                </div>
              )}

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500 z-10">
                {lang === Language.KO ? product.category : product.categoryEn}
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className={`text-lg font-bold transition-colors ${isSignature ? 'group-hover:text-[#BECF47] text-gray-900' : 'text-gray-400'}`}>
                {lang === Language.KO ? product.name : product.nameEn}
              </h3>
              <div className="flex gap-1.5 mt-2 mb-3">
                {product.colors.map((color, idx) => (
                  <div 
                    key={idx} 
                    className="w-4 h-4 rounded-full border border-gray-100 shadow-sm" 
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className={`text-xl font-bold ${isSignature ? 'text-gray-900' : 'text-gray-300'}`}>
                {isSignature ? `₩${product.price.toLocaleString()}` : 'Preparing'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
