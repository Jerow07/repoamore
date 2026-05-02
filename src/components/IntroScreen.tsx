import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    
    // Play the welcome sound
    try {
      const audio = new Audio('/sounds/Haunting-Whisper.mp3');
      // Set volume low for a subtle entrance
      audio.volume = 0.5;
      audio.play().catch(err => console.log('Audio play failed:', err));
    } catch (e) {
      console.log('Audio not supported', e);
    }

    // Delay the actual unmount to allow the sound to start and animation to finish
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ y: isEntering ? '-100vh' : 0, opacity: isEntering ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-100 selection:bg-brand-300 selection:text-white"
    >
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-brand-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 text-4xl md:text-5xl font-serif font-black text-brand-400 tracking-tight mb-12"
        >
          <img src="/favicon.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm rounded-full border-2 border-brand-300/20 p-1" />
          <span>Abi Estudio.</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={handleEnter}
          disabled={isEntering}
          className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-brand-400/20 text-brand-400 rounded-full font-bold hover:bg-brand-400 hover:text-brand-100 transition-all duration-300 uppercase text-sm tracking-[0.2em] shadow-xl shadow-brand-400/5 hover:shadow-brand-400/20"
        >
          {isEntering ? (
            <span className="tracking-[0.3em] opacity-80">Ingresando...</span>
          ) : (
            <>
              Ingresar a la experiencia
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
