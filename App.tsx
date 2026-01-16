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

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-warm-grey bg-off-white selection:bg-nude-pink selection:text-warm-grey">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Procedures />
        <Results />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;