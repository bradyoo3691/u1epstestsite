
import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {product.category}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">{product.name}</h3>
            <div className="flex gap-1.5 mt-2 mb-3">
              {product.colors.map((color, idx) => (
                <div 
                  key={idx} 
                  className="w-4 h-4 rounded-full border border-gray-200" 
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-xl font-bold text-gray-900">
              ₩{product.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
