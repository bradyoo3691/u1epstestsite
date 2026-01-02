
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
    <section className="relative pt-32 md:pt-48 pb-12 md:pb-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 relative">
        {/* Banner Image Content - Visible first on Mobile (order-1) */}
        <div 
          className="relative cursor-pointer group order-1 md:order-2"
          onClick={() => setView('product-detail')}
        >
          {/* Mobile uses aspect-square for visibility, Desktop uses fixed height */}
          <div className="w-full aspect-square md:h-[500px] bg-gray-50 rounded-3xl overflow-hidden shadow-2xl md:shadow-none flex items-center justify-center p-6 md:p-8 transition-all duration-500 group-hover:scale-105">
            <img 
              src="https://i.ibb.co/n8YJMcTX/image.png" 
              alt="Klang Chair no.1"
              className="w-full h-full object-contain transform md:scale-110 transition-transform duration-700 group-hover:rotate-2 group-hover:scale-115"
            />
          </div>
          
          {/* Floating Info Card */}
          <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-50 transform transition-transform group-hover:-translate-y-2 z-20">
            <p className="text-[10px] md:text-sm text-gray-500 font-medium mb-1">{t.monthlyBest}</p>
            <p className="text-base md:text-lg font-bold">클랑체어 1호</p>
            <p className="text-[#BECF47] font-bold text-sm md:text-base">₩22,000</p>
          </div>
        </div>

        {/* Text Content - order-2 on mobile */}
        <div className="z-10 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-[#BECF47] font-bold tracking-widest text-xs md:text-sm uppercase mb-4">{t.heroBadge}</h2>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 whitespace-pre-line text-gray-900">
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line.includes('단단함') || line.includes('Durability') ? (
                   <span className="text-[#BECF47]">{line}</span>
                ) : line}
                {i < t.heroTitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 whitespace-pre-line">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setView('product-detail')}
              className="bg-[#BECF47] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-transform active:scale-95 shadow-lg shadow-lime-100"
            >
              {t.btnBrowse}
            </button>
            <button 
              onClick={() => setView('contact')}
              className="border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
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
