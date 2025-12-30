
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="z-10">
          <h2 className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-4">Quality & Comfort</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            편안함은 기본,<br />
            <span className="text-[#FF6B00]">단단함</span>은 기준
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            앉는 순간 느껴지는 국내 생산의 차이.<br />
            의자는 매일 쓰니까, 제대로 만들었습니다.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e66000] transition-transform active:scale-95">
              제품 둘러보기
            </button>
            <button className="border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
              상담 문의
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[500px] bg-gray-50 rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
            <img 
              src="https://picsum.photos/seed/hero-chair/1000/1000" 
              alt="Premium Chair"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
            <p className="text-sm text-gray-500 font-medium">Monthly Top Seller</p>
            <p className="text-lg font-bold">Echo Pro V3</p>
            <p className="text-[#FF6B00] font-bold">₩58,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
