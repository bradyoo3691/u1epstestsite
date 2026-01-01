
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
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setView('home')}
        >
          <span className="text-[#BECF47]">U1</span>
          <span>eps</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id as ViewState)}
              className={`text-sm font-medium transition-colors hover:text-[#BECF47] ${
                currentView === link.id ? 'text-[#BECF47]' : 'text-gray-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === Language.KO ? Language.EN : Language.KO)}
            className="text-xs font-bold border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors"
          >
            {lang === Language.KO ? 'ENG' : 'KOR'}
          </button>
          <button 
            onClick={() => setView('admin')}
            className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
              currentView === 'admin' ? 'bg-[#BECF47] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;