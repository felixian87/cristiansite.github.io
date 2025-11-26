import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import DesignAssistant from './components/DesignAssistant';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <DesignAssistant />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;