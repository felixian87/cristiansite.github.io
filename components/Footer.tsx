import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-serif text-lg font-bold">Cristian Pizzarelli</h3>
          <p className="text-sm">Tappezzeria & Tendaggi</p>
          <p className="text-xs mt-2 text-slate-500">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400 transition-colors"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="hover:text-gold-400 transition-colors"><Instagram className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;