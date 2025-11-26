import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Contattaci</h2>
            <p className="text-slate-600 mb-8">
              Siamo a vostra disposizione per preventivi gratuiti e consulenze personalizzate. 
              Venite a trovarci in laboratorio per scoprire la nostra collezione di tessuti.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full text-gold-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Laboratorio</h4>
                  <p className="text-slate-600">Via Artigiani 12<br />70100 Bari (BA)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full text-gold-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefono</h4>
                  <p className="text-slate-600">+39 080 123 4567</p>
                  <p className="text-slate-600">+39 347 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full text-gold-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@tappezzeriapizzarelli.it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full text-gold-700">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Orari</h4>
                  <p className="text-slate-600">Lun - Ven: 08:30 - 13:00 / 15:30 - 19:30</p>
                  <p className="text-slate-600">Sab: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Inviaci un messaggio</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome e Cognome</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-gold-500 focus:border-gold-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-gold-500 focus:border-gold-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-gold-500 focus:border-gold-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-gold-500 focus:border-gold-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white py-3 px-6 rounded-md font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;