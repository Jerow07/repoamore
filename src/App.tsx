import { motion, useScroll, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { AlignRight, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AnimatedTitle = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-5xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-[0.9]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-300 drop-shadow-sm pb-2 pr-0.5"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const sections = ['inicio', 'nosotros', 'servicios', 'trabajos', 'contacto'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <div className="w-full min-h-screen font-sans selection:bg-brand-300 selection:text-white relative">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-brand-300 z-[100] origin-left" />
      <BackgroundEffect />
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 backdrop-blur-md bg-brand-100/70 border-b border-brand-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-2xl font-serif font-black text-brand-400 tracking-tight"
          >
            <img src="/favicon.png" alt="Logo" className="w-8 h-8 object-contain drop-shadow-sm rounded-full border-2 border-brand-300/20 p-0.5" />
            <span>Abi Estudio.</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-400 uppercase tracking-widest">
            {[
              { href: '#inicio', label: 'Inicio', id: 'inicio' },
              { href: '#nosotros', label: 'Nosotros', id: 'nosotros' },
              { href: '#servicios', label: 'Servicios', id: 'servicios' },
              { href: '#trabajos', label: 'Portafolio', id: 'trabajos' },
              { href: '#contacto', label: 'Contacto', id: 'contacto' },
            ].map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`relative pb-1 transition-colors ${activeSection === id ? 'text-brand-300' : 'hover:text-brand-300'}`}
              >
                {label}
                {activeSection === id && (
                  <motion.span layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-300 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <button className="md:hidden text-brand-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-100 border-b border-brand-200/50 p-8 flex flex-col gap-6 text-brand-400 font-bold uppercase tracking-widest md:hidden shadow-2xl"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#trabajos" onClick={() => setIsMenuOpen(false)}>Portafolio</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Decoraciones de Fondo */}
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-brand-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-brand-300 mb-6"
          >
            Agencia de Marketing & Desarrollo Web · Argentina y Latam
          </motion.p>

          <AnimatedTitle text="Abi Estudio" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-brand-400/80 font-medium leading-relaxed"
          >
            Sabés exactamente qué hacemos con tu marca, cuándo y por qué — cada día del proyecto.
            Sin desaparecer. Sin sorpresas. Solo resultados reales.
          </motion.p>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#contacto" className="flex items-center gap-2 px-8 py-4 bg-brand-400 text-brand-100 rounded-full font-bold hover:bg-brand-400/90 transition-all hover:-translate-y-1 shadow-xl shadow-brand-400/20 group uppercase text-sm tracking-widest">
              Empezá tu proyecto gratis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="px-8 py-4 text-brand-400 font-bold border border-brand-200 rounded-full hover:bg-brand-200/20 transition-all uppercase text-sm tracking-widest">
              Ver servicios
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-400/40 z-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      <About />
      <HowItWorks />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
