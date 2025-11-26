import React from 'react';
import { Award, History, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Laboratorio artigianale e tessuti" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gold-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-50 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-gold-200 rounded-full -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-gold-100 text-gold-700 text-xs font-bold tracking-wider uppercase mb-4">
              La Nostra Storia
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Artigiani del Dettaglio <br />
              <span className="text-gold-600">dal 1998</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              La Tappezzeria Pizzarelli nasce dalla passione di Cristian Pizzarelli per l'arte del restauro e della decorazione tessile. 
              In un mondo che corre veloce, abbiamo scelto di preservare la lentezza dei gesti accurati, dove ogni punto, taglio e piega racconta una storia di eccellenza.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Il nostro laboratorio non è solo un luogo di lavoro, ma un atelier creativo dove i desideri dei clienti prendono forma attraverso tessuti pregiati e tecniche che uniscono tradizione e innovazione.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-900 rounded-lg text-gold-400">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">25+ Anni</h4>
                  <p className="text-sm text-slate-500">Di esperienza nel settore.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-900 rounded-lg text-gold-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Eccellenza</h4>
                  <p className="text-sm text-slate-500">Solo tessuti di prima scelta.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-900 rounded-lg text-gold-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Passione</h4>
                  <p className="text-sm text-slate-500">Cura maniacale delle finiture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;