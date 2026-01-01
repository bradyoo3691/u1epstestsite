
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
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
            <button className="bg-[#BECF47] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-transform active:scale-95 shadow-lg shadow-lime-100">
              {t.btnBrowse}
            </button>
            <button className="border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
              {t.btnContact}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 transition-transform hover:scale-[1.02] duration-500">
            <img 
              src="https://i.ibb.co/6RfKKtkD/5-removebg-preview.png" 
              alt="Klang Chair no.1"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50">
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
