import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Procedures from './components/Procedures';
import Results from './components/Results';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-warm-grey bg-off-white selection:bg-nude-pink selection:text-warm-grey">
      <Header />
      <main>
        <div id="hero"><Hero /></div>
        <Manifesto />
        <div id="procedures"><Procedures /></div>
        <div id="results"><Results /></div>
        <div id="about"><About /></div>
        <Process />
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;