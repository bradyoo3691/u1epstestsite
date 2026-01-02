
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
    <div className="bg-white pt-32 md:pt-48 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-8">
        <button 
          onClick={() => setView('home')}
          className="text-gray-400 hover:text-[#FF6B00] font-black flex items-center gap-2 transition-colors uppercase tracking-widest text-xs md:text-sm"
        >
          <span className="text-xl">←</span> Go back
        </button>
      </div>

      {/* 0. Hero Section / Main Banner */}
      <section className="bg-gray-50 pt-8 md:pt-16 pb-16 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#FF6B00]/5 -skew-y-3 origin-top-left" />
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
           <h3 className="text-[#FF6B00] font-black tracking-[0.4em] text-[10px] md:text-sm mb-4 uppercase">KLANG CHAIR SERIES</h3>
           <h1 className="text-4xl md:text-8xl font-black mb-10 md:mb-20 tracking-tighter">클랑체어 1호</h1>
           <div className="w-full max-w-4xl overflow-hidden group">
              <img 
                src="https://i.ibb.co/n8YJMcTX/image.png" 
                alt="Klang Chair Hero" 
                className="w-full h-auto object-contain transform md:scale-110 drop-shadow-[0_35px_35px_rgba(255,107,0,0.15)] group-hover:scale-125 transition-transform duration-1000"
              />
           </div>
        </div>
      </section>

      {/* 1. Product Info Table */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-40">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="flex-1">
            <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 tracking-tighter">Technical<br className="hidden md:block"/>Details</h2>
            <p className="text-gray-400 font-medium text-base md:text-xl leading-relaxed">
              최고의 기술력이 응집된 클랑체어의 상세 스펙입니다. <br/>
              국내 최고 사출 기술로 만들어진 완벽한 마감을 경험하세요.
            </p>
          </div>
          <div className="flex-[1.5] grid grid-cols-1 gap-0">
             {[
               ['제품명', '클랑체어 1호'],
               ['구성', '분체도장 하부 프레임, PP사출 상부'],
               ['소재', '강화 플라스틱(PP), 고강도 철재'],
               ['사이즈', 'W480mm x D430mm x H810mm'],
               ['색상', '오렌지, 블루, 블랙, 그린'],
               ['원산지', '대한민국 (Made in Korea)'],
               ['판매원', '유원EPS (U1 eps)'],
               ['CS센터', '031-574-6431'],
             ].map(([label, value]) => (
               <div key={label} className="flex border-b border-gray-100 py-6 md:py-8 items-start group">
                  <span className="w-24 md:w-32 font-black text-gray-300 group-hover:text-[#FF6B00] transition-colors text-xs md:text-sm uppercase tracking-widest pt-1">{label}</span>
                  <span className="text-gray-900 font-black text-base md:text-2xl tracking-tight">{value}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. Visual Scenario */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-40">
         <div className="rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl shadow-orange-100 ring-8 md:ring-[20px] ring-gray-50">
           <img 
             src="https://i.ibb.co/27G5zdSf/3.png" 
             alt="Dining Scenario" 
             className="w-full h-auto"
           />
         </div>
      </section>

      {/* 3. Product Size & Standards */}
      <section className="bg-gray-900 py-24 md:py-48 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00] opacity-10 blur-[150px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter uppercase">Dimensions</h2>
           <p className="text-gray-400 font-bold mb-16 md:mb-24 text-base md:text-2xl">대한민국 표준 테이블에 맞춘 최적의 비율</p>
           
           <div className="mb-16 md:mb-24 flex justify-center">
              <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl inline-block max-w-3xl">
                <img 
                  src="https://i.ibb.co/1YMLLSTx/2025-12-15-6-19-52.png" 
                  alt="Size Diagram" 
                  className="w-full h-auto" 
                />
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10">
                <p className="text-[#FF6B00] font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Optimization</p>
                <p className="text-gray-300 text-sm md:text-xl font-medium leading-relaxed">
                  식당, 학원, 휴게소에서 가장 많이 쓰이는 720~740mm 표준 테이블 높이에 맞춰 무릎과 허리의 부담을 최소화했습니다.
                </p>
              </div>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#FF6B00] text-white">
                <p className="font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Target Height</p>
                <div className="flex flex-col">
                  <span className="text-sm md:text-lg font-bold">Standard Table</span>
                  <span className="text-3xl md:text-6xl font-black tracking-tighter">720 ~ 740mm</span>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Durability & Core Values */}
      <section className="py-24 md:py-48 px-6">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-16 md:mb-24">
              <span className="text-5xl md:text-9xl font-black text-[#FF6B00]/10 block mb-2 leading-none uppercase">Core Value</span>
              <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter">압도적인 내구성</h2>
              <p className="text-lg md:text-3xl text-gray-400 font-black italic tracking-tight">“시간이 지나도 변하지 않는 단단함”</p>
           </div>
           
           <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 border-2 border-gray-50 shadow-2xl mb-12 md:mb-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full -mr-16 -mt-16" />
              <p className="text-xl md:text-4xl text-center leading-[1.3] font-black text-gray-900 mb-16 md:mb-32 whitespace-pre-line tracking-tighter">
                100% 국내 제조생산 및 직영 포장 서비스.{"\n"}
                직접 용접한 <span className="text-[#FF6B00] border-b-8 border-orange-100">“통뼈 프레임”</span> 의 차이를 느껴보세요.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-32">
                 <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-50 aspect-[4/3] group">
                    <img src="https://i.ibb.co/kVtcrFH4/image.png" alt="Welding Detail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-50 aspect-[4/3] group">
                    <img src="https://i.ibb.co/QvmPZk9P/image.png" alt="Worker Assembly" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </div>

              <div className="space-y-12 md:space-y-20 max-w-4xl mx-auto">
                 <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <span className="bg-[#FF6B00] text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-black shrink-0 tracking-widest uppercase shadow-lg shadow-orange-200">Point 01</span>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-bold tracking-tight">
                       생산 라인에서 직접 용접을 진행합니다. 제품의 설계 의도를 가장 잘 파악하고 있는 숙련된 기술자가 한 땀 한 땀 일체형 의자를 완성합니다.
                    </p>
                 </div>
                 <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <span className="bg-[#FF6B00] text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-black shrink-0 tracking-widest uppercase shadow-lg shadow-orange-200">Point 02</span>
                    <div className="flex-1">
                       <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-bold mb-10 tracking-tight">
                          고순도 PP(폴리프로필렌) 소재는 외부 충격과 오염에 탁월한 방어력을 가집니다. 시간이 지나도 변형 없이 처음의 텐션을 그대로 유지합니다.
                       </p>
                       <div className="grid grid-cols-2 gap-4 md:gap-8">
                          <img src="https://i.ibb.co/mrMkTpys/pp.jpg" className="w-full h-40 md:h-64 object-cover rounded-[2rem] shadow-xl ring-1 ring-gray-100" alt="PP Pellets" />
                          <img src="https://i.ibb.co/6cT7yKCT/images.jpg" className="w-full h-40 md:h-64 object-cover rounded-[2rem] shadow-xl ring-1 ring-gray-100" alt="Material" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-[#FF6B00] py-24 md:py-48 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 skew-y-12 scale-150" />
        <div className="max-w-4xl mx-auto relative z-10">
           <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-tight">
              가장 단단하고,<br/>가장 편안한 선택
           </h2>
           <p className="text-lg md:text-2xl font-bold mb-12 md:mb-20 opacity-80">
              이미 수많은 식당과 교육 현장에서 검증되었습니다.
           </p>
           <button 
             onClick={() => setView('contact')}
             className="bg-white text-[#FF6B00] px-10 md:px-20 py-5 md:py-8 rounded-full font-black text-lg md:text-2xl shadow-2xl hover:bg-black hover:text-white transition-all transform hover:-translate-y-2 active:scale-95"
           >
              대량구매 및 상담 문의하기
           </button>
        </div>
      </section>

      {/* Fixed Bottom Quick CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%]">
         <button 
           onClick={() => setView('contact')}
           className="w-full bg-gray-900 text-white px-6 py-5 rounded-full font-black shadow-2xl flex items-center justify-center gap-3 text-sm active:scale-95 transition-transform"
         >
            대량구매 상담 📞
         </button>
      </div>
    </div>
  );
};

export default ProductDetail;
