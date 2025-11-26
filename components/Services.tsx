import React from 'react';
import { Armchair, Scissors, Car, Ruler } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Restauro Imbottiti',
    description: 'Riportiamo a nuovo divani, poltrone e sedie antiche o moderne, utilizzando tecniche tradizionali e materiali di prima scelta per garantire comfort e durata.',
    iconName: 'Sofa'
  },
  {
    id: '2',
    title: 'Tendaggi su Misura',
    description: 'Progettazione e confezione di tende per interni ed esterni. Ampia scelta di tessuti tecnici e decorativi per valorizzare ogni ambiente della tua casa.',
    iconName: 'Scissors'
  },
  {
    id: '3',
    title: 'Tappezzeria Auto & Nautica',
    description: 'Rivestimento interni auto d\'epoca e moderne, selle moto e cuscineria nautica. Materiali resistenti alle intemperie e finiture di lusso.',
    iconName: 'Car'
  },
  {
    id: '4',
    title: 'Consulenza e Posa',
    description: 'Sopralluoghi gratuiti per rilievo misure. Vi guidiamo nella scelta dei materiali più adatti e ci occupiamo dell\'installazione completa.',
    iconName: 'Ruler'
  }
];

const IconMap = {
  Sofa: Armchair,
  Scissors: Scissors,
  Car: Car,
  Ruler: Ruler
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">I Nostri Servizi</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Uniamo la tradizione artigiana all'innovazione per offrire soluzioni personalizzate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;