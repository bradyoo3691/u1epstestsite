
import React from 'react';
import { Language, ViewState } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, setView }) => {
  const t = TRANSLATIONS[lang];
  return (
    <section className="relative pt-32 md:pt-44 pb-12 md:pb-24 px-6 overflow-hidden bg-white">
      {/* Decorative Background for Mobile Visibility */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF6B00]/5 -skew-x-12 hidden md:block" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 relative">
        {/* Banner Image Content - Visible first on Mobile */}
        <div 
          className="relative cursor-pointer group order-1 md:order-2"
          onClick={() => setView('product-detail')}
        >
          <div className="w-full aspect-square md:h-[550px] bg-gray-50 md:bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl md:shadow-none flex items-center justify-center p-6 md:p-8 transition-all duration-700 md:group-hover:scale-105">
            <img 
              src="https://i.ibb.co/n8YJMcTX/image.png" 
              alt="Klang Chair no.1"
              className="w-full h-full object-contain transform md:scale-110 drop-shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-125"
            />
          </div>
          
          {/* Floating Floating Info Card */}
          <div className="absolute bottom-4 left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl border border-gray-100 transform transition-transform group-hover:-translate-y-2 z-20">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <p className="text-[10px] md:text-sm text-[#FF6B00] font-black uppercase tracking-widest">{t.monthlyBest}</p>
            </div>
            <p className="text-sm md:text-2xl font-black text-gray-900 mb-1">클랑체어 1호</p>
            <p className="text-[#FF6B00] font-black text-xs md:text-xl">₩22,000</p>
          </div>

          {/* Background Highlight Sphere */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF6B00]/10 rounded-full blur-[100px]" />
        </div>

        {/* Text Content */}
        <div className="z-10 order-2 md:order-1 text-center md:text-left mt-8 md:mt-0">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] font-bold text-[10px] md:text-xs uppercase tracking-tighter mb-4">
            {t.heroBadge}
          </div>
          <h1 className="text-3xl md:text-8xl font-black leading-[1.1] md:leading-[1] mb-6 md:mb-10 text-gray-900 tracking-tighter">
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line.includes('단단함') || line.includes('Durability') ? (
                   <span className="text-[#FF6B00]">{line}</span>
                ) : line}
                {i < t.heroTitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center md:justify-start">
            <button 
              onClick={() => setView('product-detail')}
              className="bg-[#FF6B00] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-sm md:text-lg hover:bg-black transition-all active:scale-95 shadow-xl shadow-orange-200"
            >
              {t.btnBrowse}
            </button>
            <button 
              onClick={() => setView('contact')}
              className="bg-white border-2 border-gray-100 text-gray-900 px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-sm md:text-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all"
            >
              {t.btnContact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
