import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Consulta inicial gratis",
    description: "Entendemos tu marca, tus objetivos y qué necesitás. Sin compromisos. En 30 minutos definimos si podemos ayudarte.",
    delay: 0.1,
  },
  {
    number: "02",
    title: "Plan detallado del proyecto",
    description: "Te entregamos un plan con cada paso, tiempos y costos. Sabés exactamente qué se va a hacer antes de pagar el primer peso.",
    delay: 0.2,
  },
  {
    number: "03",
    title: "Seguimiento día a día",
    description: "Durante todo el proyecto recibís un reporte diario de avances. Nada queda en el aire. Sabés qué hicimos hoy, qué hacemos mañana.",
    delay: 0.3,
  },
  {
    number: "04",
    title: "Entrega y mejora continua",
    description: "Revisiones hasta que estés 100% conforme. Y si necesitás cambios después, estamos. No desaparecemos tras la entrega.",
    delay: 0.4,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 w-full px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-brand-300 font-bold tracking-[0.2em] uppercase text-sm">Sin letra chica</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-brand-400 mt-4">
            Así trabajamos
          </h2>
          <p className="mt-6 text-xl text-brand-400/60 max-w-2xl mx-auto font-medium leading-relaxed">
            La mayoría de las agencias desaparecen después de la reunión inicial. <br className="hidden md:block" />
            Nosotros hacemos lo opuesto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line removed from here and placed between items */}

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: step.delay, duration: 0.6 }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Línea que conecta con el siguiente círculo (visible solo en desktop) */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-[46px] border-t-4 border-dashed border-brand-300/60 z-0" 
                  style={{ left: 'calc(50% + 3.5rem)', width: 'calc(100% - 5rem)' }} 
                />
              )}

              <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-md border-2 border-brand-300/40 flex items-center justify-center mb-8 shadow-lg shadow-brand-300/10 relative z-10">
                <span className="text-2xl font-serif font-black text-brand-300">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-400 mb-3">{step.title}</h3>
              <p className="text-brand-400/60 font-medium leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-400 text-brand-100 rounded-full font-bold hover:bg-brand-400/90 transition-all hover:-translate-y-1 shadow-xl shadow-brand-400/20 uppercase text-sm tracking-widest"
          >
            Empezá tu proyecto gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
