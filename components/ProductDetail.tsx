
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
    <div className="bg-white pt-20 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button 
          onClick={() => setView('home')}
          className="text-gray-400 hover:text-[#BECF47] font-bold flex items-center gap-2 transition-colors"
        >
          ← 뒤로 가기
        </button>
      </div>

      {/* 0. Hero Section */}
      <section className="bg-[#f2f2f2] pt-12 pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
           <h3 className="text-gray-400 font-medium tracking-[0.3em] mb-2 uppercase">KLANG CHAIR</h3>
           <h1 className="text-4xl md:text-5xl font-bold mb-12">클랑체어 1호</h1>
           <div className="w-full max-w-4xl mb-12 overflow-hidden">
              <img 
                src="https://i.ibb.co/n8YJMcTX/image.png" 
                alt="Klang Chair Hero" 
                className="w-full h-auto object-contain scale-110 transform"
              />
           </div>
        </div>
      </section>

      {/* 1. Product Info Table */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">제품정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
           {[
             ['제품명', '클랑체어 1호'],
             ['구성', '분체도장 하부 프레임, PP사출 상부, 고무패킹 부착'],
             ['소재', '플라스틱, 철재, 고무'],
             ['사이즈', 'W480mm x D430mm x H810mm'],
             ['색상', '오렌지, 블루, 블랙, 그린'],
             ['원산지', '대한민국'],
             ['제조/판매', '유원EPS'],
             ['고객센터', '031-574-6431'],
           ].map(([label, value]) => (
             <div key={label} className="flex border-b border-gray-100 py-5 items-start">
                <span className="w-28 font-bold text-gray-400 shrink-0">{label}</span>
                <span className="text-gray-800 font-medium">{value}</span>
             </div>
           ))}
        </div>
      </section>

      {/* 2. Scenario Image 1 */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
         <img 
           src="https://i.ibb.co/27G5zdSf/3.png" 
           alt="Dining Scenario" 
           className="w-full h-auto rounded-3xl shadow-lg"
         />
      </section>

      {/* 3. Product Size Section */}
      <section className="bg-[#f9fafb] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider">Product Size</h2>
           <p className="text-gray-500 mb-12 font-medium">대한민국 표준 테이블에 맞췄습니다.</p>
           
           <div className="mb-16">
              <img 
                src="https://i.ibb.co/1YMLLSTx/2025-12-15-6-19-52.png" 
                alt="Size Diagram" 
                className="mx-auto max-w-full h-auto" 
              />
           </div>

           <div className="max-w-2xl mx-auto text-left space-y-4 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-gray-600 text-sm">* 식당, 학원, 휴게소에서 가장 많이 쓰이는 표준 테이블 높이를 기준으로 설계</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="font-bold text-gray-800">표준 테이블 높이</span>
                <span className="text-2xl font-black text-[#BECF47]">720 ~ 740mm</span>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Scenario Gallery Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">+ 좀 더 세련된 실사례 사진</h2>
         </div>
         <img 
           src="https://i.ibb.co/KxZRznQY/2025-12-15-6-28-05.png" 
           alt="Scenario Gallery" 
           className="w-full h-auto rounded-3xl shadow-md"
         />
      </section>

      {/* 5. Feature 01 - Durability */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-20">
              <span className="text-6xl font-black text-[#BECF47] opacity-20 block mb-2 leading-none">01</span>
              <h2 className="text-4xl font-black mb-6">내구성</h2>
              <p className="text-2xl text-gray-500 font-bold italic">“왜 10년 써도 멀쩡할까?”</p>
           </div>
           
           <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl mb-16">
              <p className="text-xl md:text-2xl text-center leading-relaxed font-bold text-gray-800 mb-16 whitespace-pre-line">
                100% 국내 제조생산 및 포장까지 책임지고 있으며,{"\n"}
                직접 용접한 <span className="text-[#BECF47] underline underline-offset-8">“통뼈 프레임”</span> 을 자랑합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                 <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-50 aspect-[4/3]">
                    <img src="https://i.ibb.co/kVtcrFH4/image.png" alt="Welding Detail" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-50 aspect-[4/3]">
                    <img src="https://i.ibb.co/QvmPZk9P/image.png" alt="Worker Assembly" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="space-y-12 max-w-3xl mx-auto">
                 <div className="flex gap-6 items-start">
                    <span className="bg-[#BECF47] text-white px-4 py-1 rounded-full text-xs font-black shrink-0 mt-1 uppercase">Point 1</span>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                       사출 생산라인에서 직접 용접까지 진행하며, 제품에 대해 가장 잘 이해하고 있는 기술자가 일체형 의자를 생산합니다.
                    </p>
                 </div>
                 <div className="flex gap-6 items-start">
                    <span className="bg-[#BECF47] text-white px-4 py-1 rounded-full text-xs font-black shrink-0 mt-1 uppercase">Point 2</span>
                    <div className="flex-1">
                       <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                          PP(폴리프로필렌) 재료는 유연하여 변형이 적고, 물과 오염 및 열에도 강해 기본적으로 내구성이 강한 소재입니다.
                       </p>
                       <div className="grid grid-cols-2 gap-4">
                          <img src="https://i.ibb.co/mrMkTpys/pp.jpg" className="w-full h-48 object-cover rounded-2xl shadow-inner border border-gray-50" alt="PP Pellets" />
                          <img src="https://i.ibb.co/6cT7yKCT/images.jpg" className="w-full h-48 object-cover rounded-2xl shadow-inner border border-gray-50" alt="Material Close up" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Feature 02 - Maintenance */}
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
           <span className="text-6xl font-black text-[#BECF47] opacity-20 block mb-2 leading-none">02</span>
           <h2 className="text-4xl font-black mb-12">관리용이성</h2>
           
           <div className="w-full bg-white rounded-[3rem] p-12 border border-gray-100 shadow-xl overflow-hidden relative">
              <div className="relative z-10 text-center mb-16">
                 <p className="text-2xl font-bold text-gray-800 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                    오염과 물기가 스며들지 않아{"\n"}
                    윤기있는 표면을 오랫동안 유지하고,{"\n"}
                    처음과 같은 텐션의 유연함을 제공합니다.
                 </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                 <img src="https://i.ibb.co/NRk4Lr2/image.png" alt="Surface Close up" className="w-full h-auto" />
              </div>
           </div>
        </div>
      </section>

      {/* 7. Feature 03 - Design Detail */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1">
              <span className="text-6xl font-black text-[#BECF47] opacity-20 block mb-2 leading-none">03</span>
              <h2 className="text-4xl font-black mb-8">디자인 디테일</h2>
              <p className="text-2xl font-bold text-gray-700 leading-relaxed whitespace-pre-line">
                 의자 다리 끝 <span className="text-[#BECF47] underline decoration-4 underline-offset-8">고무마개 패킹</span>으로 {"\n"}
                 바닥의 잔기스 및 의자 끄는 소음을 막았습니다.
              </p>
           </div>
           <div className="flex-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 transition-transform hover:scale-[1.02] duration-500">
                 <img src="https://i.ibb.co/sp7xGWpP/4.png" alt="Rubber Packing Detail" className="w-full h-auto" />
              </div>
           </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-32 border-t border-gray-100">
        <h2 className="text-4xl font-black mb-20 text-center tracking-tight text-gray-900 italic">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-12">
           {[
             {
               q: '오늘 주문하면 언제 도착하나요?',
               a: '오후 1시 이전 결제건은 당일 발송해드립니다! \n*보통 발송 다음날 도착하지만, 택배사 사정에 따라 1~2일 더 소요될 수 있습니다.'
             },
             {
               q: '조립해야 하나요?',
               a: '아니요! 박스만 뜯으면 바로 쓸 수 있는 100% 완제품입니다. \n*조립하느라 땀 흘리지 마세요! 😅'
             },
             {
               q: '식당/학원인데 의자 높이가 맞을까요?',
               a: '네, 걱정마세요. 대한민국 표준테이블 높이에 최적화된 사이즈로 제작되었습니다. \n*표준 테이블 높이 : 720~740mm (최적의 의자 높이 : 425mm)'
             },
             {
               q: '바닥이 긁히지 않을까요?',
               a: '의자 다리 끝에 도톰한 고무패킹이 끼워져 있어 소음과 바닥 긁힘을 방지해 줍니다.'
             }
           ].map((faq, idx) => (
             <div key={idx} className="group">
                <div className="flex gap-4 items-start mb-4">
                   <span className="text-2xl font-black text-gray-200 group-hover:text-[#BECF47] transition-colors leading-none">Q.</span>
                   <p className="text-xl font-bold text-gray-900">{faq.q}</p>
                </div>
                <div className="flex gap-4 items-start pl-8">
                   <p className="text-gray-500 font-medium leading-relaxed whitespace-pre-line text-lg">
                      <span className="text-[#BECF47] font-black mr-2">A.</span> {faq.a}
                   </p>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-32 text-center py-20 bg-gray-50 rounded-[4rem] border border-gray-100">
           <p className="text-2xl md:text-3xl font-black text-gray-300 italic leading-snug">
              “설치시간을 아끼고, 신뢰감 있고 튼튼함을 자랑하는<br/>
              <span className="text-gray-800">클랑체어</span>”
           </p>
           <p className="mt-8 text-xs font-bold text-gray-400 tracking-widest uppercase">* 본 제품은 클랑체어 1호 입니다.</p>
        </div>
      </section>

      {/* Bottom Floating CTA Placeholder (Optional UX) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
         <button 
           onClick={() => setView('contact')}
           className="bg-gray-900 text-white px-10 py-5 rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
         >
            상담 및 대량구매 문의 <span>📞</span>
         </button>
      </div>
    </div>
  );
};

export default ProductDetail;
