import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Elara Luxury Fashion",
    category: "E-Commerce Premium",
    image: "/Users/jeronimoparra/.gemini/antigravity/brain/4b1f175b-ced7-4dcc-afce-b6a560131e52/project_ecommerce_1775412089835.png",
    colSpan: "md:col-span-2 md:row-span-2",
    delay: 0.1
  },
  {
    title: "Synergy Analytics",
    category: "SaaS Dashboard",
    image: "/Users/jeronimoparra/.gemini/antigravity/brain/4b1f175b-ced7-4dcc-afce-b6a560131e52/project_saas_1775412111135.png",
    colSpan: "md:col-span-1 md:row-span-1",
    delay: 0.2
  },
  {
    title: "Soul & Solace",
    category: "App de Bienestar",
    image: "/Users/jeronimoparra/.gemini/antigravity/brain/4b1f175b-ced7-4dcc-afce-b6a560131e52/project_mobile_1775412164830.png",
    colSpan: "md:col-span-1 md:row-span-2",
    delay: 0.3
  },
  {
    title: "Aura Architects",
    category: "Landing Page Editorial",
    image: "/Users/jeronimoparra/.gemini/antigravity/brain/4b1f175b-ced7-4dcc-afce-b6a560131e52/project_landing_1775412137464.png",
    colSpan: "md:col-span-1 md:row-span-1",
    delay: 0.4
  }
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="py-32 w-full px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <span className="text-brand-300 font-bold tracking-[0.2em] uppercase text-sm">Nuestro Portafolio</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-brand-400 mt-4 leading-tight">
            Proyectos que <br /> <span className="text-brand-300 italic">transforman</span> negocios.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: project.delay, duration: 0.7 }}
              className={`group relative overflow-hidden rounded-[40px] bg-brand-200/20 border border-brand-200/50 shadow-xl ${project.colSpan}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-400/90 via-brand-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                 <div className="translate-y-5 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-brand-200 text-sm font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">{project.title}</h3>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-6 py-2 bg-white text-brand-400 rounded-full text-sm font-bold hover:bg-brand-100 transition-colors">
                        Ver Proyecto <ArrowUpRight size={16} />
                      </button>
                    </div>
                 </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-20px] group-hover:translate-y-0">
                <ExternalLink size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-12 py-5 border-2 border-brand-400 text-brand-400 rounded-full font-bold hover:bg-brand-400 hover:text-white transition-all text-lg tracking-wide uppercase">
            Ver Todos los Proyectos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
