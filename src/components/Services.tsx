import { motion } from 'framer-motion';
import { Megaphone, ShoppingBag, PenTool, Smartphone } from 'lucide-react';

const services = [
  {
    title: "Marketing Integral",
    description: "Estrategias de posicionamiento y planes de acción 360° para que tu marca alcance a la audiencia correcta.",
    icon: <Megaphone size={32} strokeWidth={1.5} />,
    colSpan: "md:col-span-2",
    delay: 0.1
  },
  {
    title: "E-Commerce",
    description: "Gestión, optimización y escalabilidad de tiendas online orientadas exclusivamente a la conversión.",
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    colSpan: "md:col-span-1",
    delay: 0.2
  },
  {
    title: "Branding & Diseño",
    description: "Identidad visual premium que refleja el verdadero valor y la calidad de tus servicios o productos.",
    icon: <PenTool size={32} strokeWidth={1.5} />,
    colSpan: "md:col-span-1",
    delay: 0.3
  },
  {
    title: "Social Media",
    description: "Creación de contenido original, planificación y gestión de comunidades vibrantes.",
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    colSpan: "md:col-span-2",
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 w-full px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <span className="text-brand-300 font-bold tracking-[0.2em] uppercase text-sm">Lo que hacemos</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-brand-400 mt-4">Nuestros Servicios</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`group p-10 rounded-[32px] bg-white/40 backdrop-blur-md border border-brand-200/50 hover:bg-white/60 hover:shadow-2xl hover:shadow-brand-300/20 transition-all duration-300 ${service.colSpan}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-200/30 flex items-center justify-center text-brand-400 mb-8 group-hover:scale-110 group-hover:bg-brand-300/30 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-400 mb-4">{service.title}</h3>
              <p className="text-brand-400/70 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
