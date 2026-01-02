
import React from 'react';
import { Language, ViewState } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductDetailProps {
  lang: Language;
  setView: (view: ViewState) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ lang, setView }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button 
          onClick={() => setView('home')}
          className="text-gray-400 hover:text-[#BECF47] font-bold flex items-center gap-2 transition-colors text-xs md:text-sm uppercase tracking-widest"
        >
          ← Go back
        </button>
      </div>

      {/* 0. Hero Section */}
      <section className="bg-gray-50 pt-12 pb-16 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
           <h3 className="text-[#BECF47] font-bold tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">KLANG CHAIR</h3>
           <h1 className="text-3xl md:text-5xl font-bold mb-12">클랑체어 1호</h1>
           <div className="w-full max-w-4xl overflow-hidden group">
              <img 
                src="https://i.ibb.co/n8YJMcTX/image.png" 
                alt="Klang Chair Hero" 
                className="w-full h-auto object-contain transform md:scale-110 transition-transform duration-700"
              />
           </div>
        </div>
      </section>

      {/* 1. Product Info Table */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">제품정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
           {[
             ['제품명', '클랑체어 1호'],
             ['구성', '분체도장 하부 프레임, PP사출 상부'],
             ['소재', '강화 플라스틱, 철재, 고무'],
             ['사이즈', 'W480mm x D430mm x H810mm'],
             ['색상', '오렌지, 블루, 블랙, 그린'],
             ['원산지', '대한민국'],
             ['판매원', '유원EPS'],
             ['고객센터', '031-574-6431'],
           ].map(([label, value]) => (
             <div key={label} className="flex border-b border-gray-100 py-5 items-start">
                <span className="w-24 md:w-28 font-bold text-gray-400 shrink-0 text-sm md:text-base">{label}</span>
                <span className="text-gray-800 font-medium text-sm md:text-base">{value}</span>
             </div>
           ))}
        </div>
      </section>

      {/* 2. visual */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
         <img 
           src="https://i.ibb.co/27G5zdSf/3.png" 
           alt="Dining Scenario" 
           className="w-full h-auto rounded-3xl shadow-lg"
         />
      </section>

      {/* 3. Product Size */}
      <section className="bg-[#f9fafb] py-16 md:py-24 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight uppercase">Dimensions</h2>
        <div className="max-w-4xl mx-auto">
           <div className="mb-12 flex justify-center">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm inline-block">
                <img 
                  src="https://i.ibb.co/1YMLLSTx/2025-12-15-6-19-52.png" 
                  alt="Size Diagram" 
                  className="w-full h-auto" 
                />
              </div>
           </div>
           <div className="max-w-2xl mx-auto text-left space-y-4 p-8 bg-white rounded-3xl border border-gray-100">
              <p className="text-gray-500 text-sm">* 식당, 학원, 휴게소에서 가장 많이 쓰이는 표준 테이블 높이(720~740mm)에 최적화</p>
           </div>
        </div>
      </section>

      {/* 4. Durability */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">압도적인 내구성</h2>
              <p className="text-lg md:text-xl text-[#BECF47] font-bold italic">“시간이 지나도 변하지 않는 단단함”</p>
           </div>
           
           <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-xl mb-12">
              <p className="text-lg md:text-2xl text-center leading-relaxed font-bold text-gray-800 mb-12">
                100% 국내 제조생산 및 직영 포장.{"\n"}
                직접 용접한 <span className="text-[#BECF47] underline underline-offset-8">“통뼈 프레임”</span> 의 차이.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <img src="https://i.ibb.co/kVtcrFH4/image.png" alt="Welding" className="rounded-2xl shadow-md w-full h-64 object-cover" />
                 <img src="https://i.ibb.co/QvmPZk9P/image.png" alt="Assembly" className="rounded-2xl shadow-md w-full h-64 object-cover" />
              </div>

              <div className="space-y-10 max-w-3xl mx-auto">
                 <div className="flex gap-6 items-start">
                    <span className="bg-[#BECF47] text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold shrink-0">Point 01</span>
                    <p className="text-base md:text-lg text-gray-600 font-medium">
                       생산라인에서 직접 용접을 진행하여 일체형으로 견고하게 결합된 프레임을 완성합니다.
                    </p>
                 </div>
                 <div className="flex gap-6 items-start">
                    <span className="bg-[#BECF47] text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold shrink-0">Point 02</span>
                    <div className="flex-1">
                       <p className="text-base md:text-lg text-gray-600 font-medium mb-6">
                          강화 폴리프로필렌(PP) 소재를 사용하여 외부 충격과 오염에 강하며 오랫동안 처음의 탄성을 유지합니다.
                       </p>
                       <div className="grid grid-cols-2 gap-4">
                          <img src="https://i.ibb.co/mrMkTpys/pp.jpg" className="w-full h-32 md:h-48 object-cover rounded-xl shadow-sm" alt="PP" />
                          <img src="https://i.ibb.co/6cT7yKCT/images.jpg" className="w-full h-32 md:h-48 object-cover rounded-xl shadow-sm" alt="Material" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-gray-900 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              가장 단단하고,<br/>가장 편안한 선택
           </h2>
           <button 
             onClick={() => setView('contact')}
             className="bg-[#BECF47] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:opacity-90 transition-all active:scale-95"
           >
              상담 및 대량구매 문의
           </button>
        </div>
      </section>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
         <button 
           onClick={() => setView('contact')}
           className="w-full bg-[#BECF47] text-white px-6 py-4 rounded-full font-bold shadow-2xl active:scale-95 transition-transform"
         >
            상담 및 문의 📞
         </button>
      </div>
    </div>
  );
};

export default ProductDetail;
