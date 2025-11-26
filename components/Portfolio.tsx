import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  { id: '1', title: 'Poltrona Luigi XV Restaurata', category: 'Restauro', imageUrl: 'https://picsum.photos/id/103/800/600' },
  { id: '2', title: 'Tendaggi Salone Moderno', category: 'Tendaggi', imageUrl: 'https://picsum.photos/id/20/800/600' },
  { id: '3', title: 'Divano Chesterfield in Pelle', category: 'Restauro', imageUrl: 'https://picsum.photos/id/1070/800/600' },
  { id: '4', title: 'Interni Auto d\'Epoca', category: 'Auto', imageUrl: 'https://picsum.photos/id/111/800/600' },
  { id: '5', title: 'Cuscini Decorativi Velluto', category: 'Moderno', imageUrl: 'https://picsum.photos/id/36/800/600' },
  { id: '6', title: 'Tende a Pacchetto Lino', category: 'Tendaggi', imageUrl: 'https://picsum.photos/id/250/800/600' },
];

const categories = ['Tutti', 'Restauro', 'Tendaggi', 'Moderno', 'Auto'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tutti');

  const filteredItems = filter === 'Tutti' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Portfolio Lavori</h2>
          <p className="text-slate-600">Esplora alcune delle nostre realizzazioni recenti.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-gold-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;