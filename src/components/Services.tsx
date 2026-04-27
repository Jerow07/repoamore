import { motion } from 'framer-motion';
import { Megaphone, ShoppingBag, PenTool, Smartphone, Globe, Layout, Zap, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Marketing Integral",
    description: "Estrategias de posicionamiento y planes de acción 360° para que tu marca alcance a la audiencia correcta.",
    icon: <Megaphone size={32} strokeWidth={1.5} />,
    delay: 0.1,
  },
  {
    title: "E-Commerce",
    description: "Gestión, optimización y escalabilidad de tiendas online orientadas exclusivamente a la conversión.",
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    delay: 0.2,
  },
  {
    title: "Branding & Diseño",
    description: "Identidad visual premium que refleja el verdadero valor y la calidad de tus servicios o productos.",
    icon: <PenTool size={32} strokeWidth={1.5} />,
    delay: 0.3,
  },
  {
    title: "Social Media",
    description: "Creación de contenido original, planificación y gestión de comunidades vibrantes.",
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    delay: 0.4,
  },
  {
    title: "Desarrollo Web Custom",
    description: "React con animaciones avanzadas (Framer Motion, Three.js). Optimización de imágenes (lazy loading), diseño UI/UX en Figma y Backends escalables (Firebase, Strapi).",
    icon: <Globe size={32} strokeWidth={1.5} />,
    delay: 0.5,
  },
  {
    title: "Diseño UX / UI",
    description: "Interfaces intuitivas y centradas en el usuario, creadas estratégicamente para disparar conversiones.",
    icon: <Layout size={32} strokeWidth={1.5} />,
    delay: 0.6,
  },
  {
    title: "Landing Pages",
    description: "Páginas de destino hiper-optimizadas, diseñadas para transformar clics en clientes reales.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    delay: 0.7,
  },
  {
    title: "Mantenimiento Web",
    description: "Soporte técnico, updates de rendimiento y mejoras continuas para que tu plataforma opere al máximo.",
    icon: <Settings size={32} strokeWidth={1.5} />,
    delay: 0.8,
    featured: false
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[32px] bg-white/40 backdrop-blur-md border border-brand-200/50 hover:bg-white/60 hover:shadow-2xl hover:shadow-brand-300/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-200/30 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-300/30 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-400 mb-4">{service.title}</h3>
              <p className="text-brand-400/70 font-medium leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-brand-400/50 font-medium mb-4">¿Te interesa alguno de nuestros servicios?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-brand-300 font-bold uppercase tracking-widest text-sm group hover:gap-4 transition-all duration-300"
          >
            Hablemos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
