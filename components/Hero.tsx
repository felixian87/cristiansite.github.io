import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/id/175/1920/1080" 
          alt="Tessuti background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 text-sm font-semibold tracking-wider mb-6">
          QUALITÀ ARTIGIANALE DAL 1998
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
          L'Arte della <span className="text-gold-400">Tappezzeria</span><br />
          e del <span className="text-gold-400">Design</span> su Misura
        </h2>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
          Trasformiamo i vostri spazi con tessuti pregiati e lavorazioni esclusive. 
          Dal restauro di pezzi antichi alla creazione di tendaggi moderni.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-gold-400 hover:bg-gold-500 transition-colors duration-300 shadow-lg shadow-gold-900/20"
          >
            Richiedi Preventivo
          </a>
          <a 
            href="#portfolio" 
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 transition-colors duration-300 group"
          >
            Vedi i Lavori
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;