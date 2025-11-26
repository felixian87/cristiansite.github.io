import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Giulia Martelli',
    role: 'Interior Designer',
    content: 'Collaboro con Cristian da anni. La sua capacità di interpretare i miei progetti e trasformarli in realtà tessili è impareggiabile. Precisione e puntualità assolute.',
    stars: 5
  },
  {
    id: 2,
    name: 'Marco De Santis',
    role: 'Cliente Privato',
    content: 'Ho affidato alla tappezzeria il restauro di due poltrone anni \'50. Il risultato è andato oltre le mie aspettative: un lavoro magnifico che ha ridato vita ai mobili di famiglia.',
    stars: 5
  },
  {
    id: 3,
    name: 'Elena Vitale',
    role: 'Cliente Privato',
    content: 'Gentilezza, professionalità e tessuti meravigliosi. Mi hanno guidata nella scelta delle tende per tutta la casa con pazienza e competenza. Consigliatissimo!',
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gold-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-gold-600 font-bold tracking-wider uppercase text-xs mb-2 block">Dicono di Noi</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">La Voce dei Clienti</h2>
          </div>
          <div className="flex gap-1 text-gold-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-slate-600 font-medium">5.0 su Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col relative group">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gold-100 group-hover:text-gold-200 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 italic leading-relaxed flex-grow">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gold-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;