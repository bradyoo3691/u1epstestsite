
import React from 'react';
import { ViewState, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, lang, setLang }) => {
  const t = TRANSLATIONS[lang];
  const links = [
    { id: 'home', label: t.navHome },
    { id: 'products', label: t.navProducts },
    { id: 'delivery', label: t.navDelivery },
    { id: 'blog', label: t.navBlog },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Announcement Banner */}
      <div className="bg-[#BECF47] text-white text-[10px] md:text-xs py-2 px-6 text-center font-bold tracking-tight">
        {lang === Language.KO 
          ? '🎉 유원EPS 공식몰 오픈! 신규 회원 배송비 할인 이벤트 진행 중' 
          : '🎉 Official Store Open! Shipping discount for new members.'}
      </div>

      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div 
            className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-1"
            onClick={() => setView('home')}
          >
            <span className="text-[#BECF47]">U1</span>
            <span>eps</span>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setView(link.id as ViewState)}
                className={`text-sm font-bold transition-colors hover:text-[#BECF47] ${
                  currentView === link.id ? 'text-[#BECF47]' : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setLang(lang === Language.KO ? Language.EN : Language.KO)}
              className="text-[10px] md:text-xs font-bold border border-gray-200 px-2 md:px-3 py-1 rounded-full hover:bg-gray-50 transition-colors"
            >
              {lang === Language.KO ? 'ENG' : 'KOR'}
            </button>
            <button 
              onClick={() => setView('admin')}
              className={`text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full font-bold transition-colors ${
                currentView === 'admin' ? 'bg-[#BECF47] text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Visible on mobile below the main header row */}
        <div className="md:hidden flex items-center justify-around py-3 border-t border-gray-50 bg-white/50 px-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id as ViewState)}
              className={`text-[11px] font-bold transition-colors whitespace-nowrap px-1 ${
                currentView === link.id ? 'text-[#BECF47]' : 'text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
