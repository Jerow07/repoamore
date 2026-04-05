import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { AlignRight, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Services from './components/Services';

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
      className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-300 drop-shadow-sm pb-2 pr-2"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen font-sans selection:bg-brand-300 selection:text-white relative">
      <BackgroundEffect />
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 backdrop-blur-md bg-brand-100/70 border-b border-brand-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-black text-brand-400 tracking-tight"
          >
            Abi Estudio.
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-400">
            <a href="#inicio" className="hover:text-brand-300 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-brand-300 transition-colors">Servicios</a>
            <a href="#trabajos" className="hover:text-brand-300 transition-colors">Portafolio</a>
            <a href="#contacto" className="hover:text-brand-300 transition-colors">Contacto</a>
            <button className="px-6 py-2.5 bg-brand-400 text-brand-100 rounded-full hover:bg-brand-400/90 hover:scale-105 transition-all shadow-lg shadow-brand-400/20">
              Agendar Asesoría
            </button>
          </div>

          <button className="md:hidden text-brand-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
        </div>
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
            Marketing Integral & E-Commerce
          </motion.p>

          <AnimatedTitle text="Abi Estudio" />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-brand-400/80 font-medium leading-relaxed"
          >
            Elevamos el potencial de tu marca a través de estrategias digitales orientadas a resultados. 
            Diseño, contenido y performance en un solo lugar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="flex items-center gap-2 px-8 py-4 bg-brand-400 text-brand-100 rounded-full font-bold hover:bg-brand-400/90 transition-all hover:-translate-y-1 shadow-xl shadow-brand-400/20 group">
              Nuestros Servicios
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#contacto" className="px-8 py-4 text-brand-400 font-bold border border-brand-200 rounded-full hover:bg-brand-200/20 transition-all">
              Hablemos
            </a>
          </motion.div>
        </div>
      </section>

      <Services />

      <section id="trabajos" className="min-h-screen w-full flex items-center justify-center">
        <h2 className="text-4xl font-serif text-brand-400 opacity-30">[Sección Trabajos en construcción]</h2>
      </section>
    </div>
  );
}

export default App;
