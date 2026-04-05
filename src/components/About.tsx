import { motion } from 'framer-motion';
import { Star, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-32 w-full px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-300 font-bold tracking-[0.2em] uppercase text-sm">Nuestra Historia</span>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-brand-400 mt-4 leading-tight">
              Impulsando el éxito digital con <span className="text-brand-300 italic">pasión</span> y estrategia.
            </h2>
            <p className="mt-8 text-xl text-brand-400/70 font-medium leading-relaxed">
              En Abi Estudio, no solo creamos sitios web; construimos experiencias digitales 
              permanentes que conectan marcas con sus audiencias de manera significativa.
            </p>
            <p className="mt-6 text-lg text-brand-400/60 leading-relaxed italic">
              "Nuestra misión es transformar la visión de nuestros clientes en una realidad digital 
              impactante, combinando creatividad sin límites con tecnología de punta."
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-200/30 flex items-center justify-center text-brand-400 mb-4">
                  <Star size={24} />
                </div>
                <h4 className="font-bold text-brand-400 uppercase tracking-widest text-xs mb-1">Excelencia</h4>
                <p className="text-sm text-brand-400/60">Calidad en cada detalle de ejecución.</p>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-200/30 flex items-center justify-center text-brand-400 mb-4">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-brand-400 uppercase tracking-widest text-xs mb-1">Estrategia</h4>
                <p className="text-sm text-brand-400/60">Diseño orientado a resultados reales.</p>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-brand-200/30 flex items-center justify-center text-brand-400 mb-4">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-brand-400 uppercase tracking-widest text-xs mb-1">Cercanía</h4>
                <p className="text-sm text-brand-400/60">Tu socio estratégico en el mundo digital.</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] bg-gradient-to-br from-brand-200/40 via-brand-300/20 to-brand-100 border border-brand-200/50 flex items-center justify-center p-12 overflow-hidden group">
               <div className="absolute inset-0 bg-brand-400/5 group-hover:bg-brand-400/0 transition-all duration-700"></div>
               <div className="relative z-10 text-center">
                  <span className="text-7xl md:text-9xl font-serif font-black text-brand-400/10 block mb-4">ABI</span>
                  <div className="w-32 h-1 bg-brand-300 mx-auto rounded-full mb-8"></div>
                  <p className="text-2xl font-serif italic text-brand-400">Transformación Digital con Propósito</p>
               </div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-12 right-12 w-20 h-20 rounded-full bg-brand-200/30 blur-xl"
               ></motion.div>
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 left-12 w-24 h-24 rounded-full bg-brand-300/20 blur-xl"
               ></motion.div>
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-white/70 backdrop-blur-xl border border-brand-200/50 p-8 rounded-[32px] shadow-2xl shadow-brand-400/10"
            >
              <div className="text-4xl font-serif font-black text-brand-400">100%</div>
              <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mt-1">Compromiso</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
