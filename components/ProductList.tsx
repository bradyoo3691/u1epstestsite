
import React from 'react';
import { Product, Language, ViewState } from '../types';

interface ProductListProps {
  products: Product[];
  lang: Language;
  setView: (view: ViewState) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, lang, setView }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
      {products.map((product, index) => {
        const isSignature = index === 0;
        
        return (
          <div 
            key={product.id} 
            className={`group cursor-pointer transition-all duration-300 ${!isSignature ? 'opacity-80 hover:opacity-100' : ''}`}
            onClick={() => isSignature ? setView('product-detail') : null}
          >
            <div className="aspect-square bg-gray-50 rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 relative shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                src={product.image} 
                alt={lang === Language.KO ? product.name : product.nameEn}
                className={`w-full h-full object-contain p-4 md:p-8 transition-transform duration-700 ${isSignature ? 'group-hover:scale-110' : 'grayscale-[0.5] opacity-40'}`}
              />
              
              {/* Coming Soon Overlay */}
              {!isSignature && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-white/90 px-3 md:px-5 py-1.5 md:py-2 rounded-full shadow-lg transform -rotate-2 border border-gray-100">
                    <span className="text-gray-900 font-black tracking-tight text-[10px] md:text-sm uppercase">Coming Soon</span>
                  </div>
                </div>
              )}

              {isSignature && (
                <div className="absolute top-3 right-3 md:top-6 md:right-6 bg-[#FF6B00] text-white px-3 py-1 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest z-10 shadow-lg shadow-orange-200">
                  {lang === Language.KO ? product.category : product.categoryEn}
                </div>
              )}
            </div>
            
            <div className="flex flex-col px-1 md:px-2">
              <h3 className={`text-sm md:text-xl font-black transition-colors ${isSignature ? 'group-hover:text-[#FF6B00] text-gray-900' : 'text-gray-400'}`}>
                {lang === Language.KO ? product.name : product.nameEn}
              </h3>
              <div className="flex gap-1 md:gap-2 mt-1 md:mt-2 mb-2 md:mb-3">
                {product.colors.map((color, idx) => (
                  <div 
                    key={idx} 
                    className="w-3 h-3 md:w-5 md:h-5 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100" 
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className={`text-base md:text-2xl font-black ${isSignature ? 'text-gray-900' : 'text-gray-200'}`}>
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
