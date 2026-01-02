
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
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="z-10">
          <h2 className="text-[#BECF47] font-bold tracking-widest text-sm uppercase mb-4">{t.heroBadge}</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 whitespace-pre-line">
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line.includes('단단함') || line.includes('Durability') ? (
                   <span className="text-[#BECF47]">{line}</span>
                ) : line}
                {i < t.heroTitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg whitespace-pre-line">
            {t.heroDesc}
          </p>
          <div className="flex gap-4">
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
        <div 
          className="relative cursor-pointer group"
          onClick={() => setView('product-detail')}
        >
          <div className="w-full h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-[#BECF47]/20 group-hover:scale-[1.02]">
            <img 
              src="https://i.ibb.co/rStk21v/2025-12-30-4-39-12.png" 
              alt="Klang Chair no.1"
              className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:rotate-2"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 transform transition-transform group-hover:-translate-y-2">
            <p className="text-sm text-gray-500 font-medium">{t.monthlyBest}</p>
            <p className="text-lg font-bold">클랑체어 1호</p>
            <p className="text-[#BECF47] font-bold">₩22,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
