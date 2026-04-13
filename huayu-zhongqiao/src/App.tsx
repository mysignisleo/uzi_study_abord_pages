import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChina from './components/WhyChina'
import Universities from './components/Universities'
import Programs from './components/Programs'
import Services from './components/Services'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-800 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <WhyChina />
        <Universities />
        <Programs />
        <Services />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
