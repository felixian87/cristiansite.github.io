import React from 'react';
import { MessageSquare, PenTool, Hammer, Home } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '1. Ascolto & Idee',
    description: 'Iniziamo con una consulenza gratuita per capire i tuoi gusti e le esigenze del tuo ambiente.'
  },
  {
    icon: PenTool,
    title: '2. Progettazione',
    description: 'Selezioniamo insieme i tessuti e definiamo i dettagli tecnici e stilistici del progetto.'
  },
  {
    icon: Hammer,
    title: '3. Creazione',
    description: 'I nostri artigiani realizzano il lavoro a mano nel nostro laboratorio, con la massima cura.'
  },
  {
    icon: Home,
    title: '4. Installazione',
    description: 'Consegniamo e montiamo il prodotto finito a casa tua, garantendo un risultato perfetto.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold-400 font-bold tracking-widest text-xs uppercase mb-2 block">Il Metodo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Come Lavoriamo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Seguiamo ogni cliente passo dopo passo, trasformando un'idea in un elemento d'arredo unico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-slate-700 to-slate-800"></div>
              )}
              
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-xl group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 transform group-hover:-translate-y-2">
                <step.icon className="w-8 h-8 text-gold-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;