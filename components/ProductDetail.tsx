
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
    <div className="bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={() => setView('home')}
          className="text-gray-400 hover:text-[#BECF47] font-bold flex items-center gap-2 transition-colors"
        >
          ← 뒤로 가기
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-[#f9fafb] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
           <h3 className="text-[#BECF47] font-bold tracking-widest mb-4">KLANG CHAIR</h3>
           <h1 className="text-5xl md:text-6xl font-bold mb-12">클랑체어 1호</h1>
           <div className="w-full max-w-2xl aspect-square bg-white rounded-full shadow-inner flex items-center justify-center p-12 mb-12">
              <img src="https://i.ibb.co/6RfKKtkD/5-removebg-preview.png" className="max-w-full object-contain" />
           </div>
        </div>
      </section>

      {/* Product Info Table */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-8 text-center border-b pb-4">제품정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
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
             <div key={label} className="flex border-b border-gray-50 py-4 items-start">
                <span className="w-24 font-bold text-gray-400 shrink-0">{label}</span>
                <span className="text-gray-800">{value}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Product Size Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-4">제품사이즈</h2>
           <p className="text-gray-500 mb-12">대한민국 표준 테이블에 맞췄습니다.</p>
           <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <img src="https://i.ibb.co/v6yXyT1k/size-diagram-placeholder.png" alt="Size Diagram" className="max-w-full mb-8 opacity-50" />
              <div className="text-left space-y-2 text-sm text-gray-500">
                <p>* 식당, 학원, 휴게소에서 가장 많이 쓰이는 표준 테이블 높이를 기준으로 설계</p>
                <p className="font-bold text-[#BECF47]">표준 테이블 높이 : 720~740mm</p>
              </div>
           </div>
        </div>
      </section>

      {/* Features - 01 Durability */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-5xl font-bold text-[#BECF47] block mb-4">01</span>
              <h2 className="text-4xl font-bold mb-6">내구성</h2>
              <p className="text-xl text-gray-500 font-medium italic mb-8">“왜 10년 써도 멀쩡할까?”</p>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                100% 국내 제조생산 및 포장까지 책임지고 있으며,
                직접 용접한 <span className="text-[#BECF47] font-bold">“통뼈 프레임”</span> 을 자랑합니다.
                사출 생산라인에서 직접 용접까지 진행하며,
                제품에 대해 가장 잘 이해하고 있는 기술자가 일체형 의자를 생산합니다.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-2xl"></div>
              <div className="aspect-square bg-gray-100 rounded-2xl"></div>
           </div>
        </div>
      </section>

      {/* Features - 02 Maintenance */}
      <section className="bg-gray-900 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <span className="text-5xl font-bold text-[#BECF47] block mb-4">02</span>
           <h2 className="text-4xl font-bold mb-8">관리용이성</h2>
           <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              오염과 물기가 스며들지 않아 윤기있는 표면을 오랫동안 유지하고, 
              처음과 같은 텐션의 유연함을 제공합니다.
           </p>
           <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 h-64 rounded-3xl flex items-center justify-center text-gray-500">
              실제 제품의 튼튼한 부분 클로즈업 사진
           </div>
        </div>
      </section>

      {/* Features - 03 Details */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1">
              <span className="text-5xl font-bold text-[#BECF47] block mb-4">03</span>
              <h2 className="text-4xl font-bold mb-8">디자인 디테일</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                의자 다리 끝 <span className="text-[#BECF47] font-bold">고무마개 패킹</span>으로 
                바닥의 잔기스 및 의자 끄는 소음을 막았습니다.
              </p>
           </div>
           <div className="flex-1 bg-gray-50 rounded-3xl p-12">
              <div className="w-20 h-20 bg-gray-900 rounded-full mb-6 mx-auto"></div>
              <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs">Rubber Packing Detail</p>
           </div>
        </div>
      </section>

      {/* Shipping Section (Reusing previously built logic) */}
      <section className="bg-[#fbfc8233] py-24 px-6 border-y border-[#BECF47]/20">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
               <span className="text-2xl">🚚</span> {t.deliveryTitle}
            </h2>
            <div className="bg-white p-10 rounded-[2rem] border-2 border-[#BECF47] shadow-sm mb-8">
               <h3 className="text-2xl font-bold mb-6">{t.shippingGuideTitle}</h3>
               <p className="whitespace-pre-line text-gray-600 mb-8">{t.shippingGuideIntro}</p>
               <div className="grid md:grid-cols-2 gap-4 text-sm font-bold">
                  <div className="bg-gray-50 p-4 rounded-xl">{t.shippingDetail1}</div>
                  <div className="bg-gray-50 p-4 rounded-xl">{t.shippingDetail2}</div>
               </div>
            </div>
            <div className="text-center">
               <p className="font-bold text-lg mb-2">{t.bulkTipTitle}</p>
               <p className="text-gray-500 mb-6">{t.bulkContact}</p>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-16 text-center">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-6">
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
             <div key={idx} className="border-b border-gray-100 pb-8">
                <p className="text-[#BECF47] font-bold text-lg mb-3">Q. {faq.q}</p>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">A. {faq.a}</p>
             </div>
           ))}
        </div>
        <div className="mt-20 text-center">
           <p className="text-2xl font-bold text-gray-400 italic">
              “설치시간을 아끼고, 신뢰감 있고 튼튼함을 자랑하는 클랑체어”
           </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
