import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const DesignAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Ciao! Sono l\'assistente virtuale della Tappezzeria Pizzarelli. Hai bisogno di un consiglio su un abbinamento di colori o sulla scelta del tessuto per il tuo divano?',
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const advice = await getDesignAdvice(inputText);

    const modelMessage: ChatMessage = {
      role: 'model',
      text: advice,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-advisor" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-gold-400 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold tracking-wide uppercase text-sm">Design AI</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">L'Esperto Risponde</h2>
            <p className="text-slate-300">
              Non sai che tessuto scegliere? Descrivi il tuo ambiente e chiedi un consiglio rapido alla nostra intelligenza artificiale addestrata sul design d'interni.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col h-[500px]">
          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gold-500 text-white rounded-br-none'
                      : 'bg-white text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-slate-300 rounded-2xl rounded-bl-none px-4 py-2 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">Sto pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-850 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Es: Ho un salotto grigio e luminoso, che tende mi consigli?"
                className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 placeholder-slate-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="bg-gold-500 hover:bg-gold-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-900 font-bold rounded-lg px-4 py-2 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              *Il consiglio è generato da AI e non sostituisce una consulenza professionale in laboratorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAssistant;