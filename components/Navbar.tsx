
import React from 'react';
import { ViewState, Language } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, lang, setLang }) => {
  const links = [
    { id: 'home', label: '홈' },
    { id: 'products', label: '제품' },
    { id: 'delivery', label: '포장/배송' },
    { id: 'blog', label: '블로그' },
    { id: 'contact', label: '문의하기' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setView('home')}
        >
          <span className="text-[#FF6B00]">U1</span>
          <span>eps</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id as ViewState)}
              className={`text-sm font-medium transition-colors hover:text-[#FF6B00] ${
                currentView === link.id ? 'text-[#FF6B00]' : 'text-gray-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === Language.KO ? Language.EN : Language.KO)}
            className="text-xs border border-gray-200 px-2 py-1 rounded hover:bg-gray-50"
          >
            {lang === Language.KO ? 'EN' : 'KO'}
          </button>
          <button 
            onClick={() => setView('admin')}
            className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
              currentView === 'admin' ? 'bg-[#FF6B00] text-white' : 'bg-gray-100 text-gray-600'
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
