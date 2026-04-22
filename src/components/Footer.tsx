import { motion } from 'framer-motion';
import { Globe, Smartphone, Mail, ArrowUp } from 'lucide-react';

const Instagram = ({ size = 24 }: { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-brand-400 text-brand-100 py-20 px-6 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        {/* Brand Side */}
        <div className="max-w-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-serif font-black mb-6"
          >
            Abi Estudio.
          </motion.div>
          <p className="text-brand-100/60 font-medium leading-relaxed">
            Transformamos marcas a través del diseño estratégico, el desarrollo de vanguardia y el marketing orientado a resultados.
          </p>
          
          <div className="flex items-center gap-4 mt-8">
            <a href="mailto:abi.est.mkt@gmail.com" className="w-12 h-12 rounded-full border border-brand-100/20 flex items-center justify-center hover:bg-brand-100 hover:text-brand-400 transition-all">
              <Mail size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-brand-100/20 flex items-center justify-center hover:bg-brand-100 hover:text-brand-400 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-brand-100/20 flex items-center justify-center hover:bg-brand-100 hover:text-brand-400 transition-all">
              <Smartphone size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-brand-100/20 flex items-center justify-center hover:bg-brand-100 hover:text-brand-400 transition-all">
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Links Side */}
        <div className="grid grid-cols-2 gap-16 md:gap-24">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Explorar</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#inicio" className="hover:text-brand-300 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-300 transition-colors">Servicios</a></li>
              <li><a href="#trabajos" className="hover:text-brand-300 transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-brand-300 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Legal</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-brand-300 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-300 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-brand-300 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-100/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-brand-100/40 font-medium">
            © {new Date().getFullYear()} Abi Estudio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-brand-300/50 font-bold uppercase tracking-widest">
            Esta web fue diseñada & desarrollada por nosotros.
          </p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-300 transition-all group"
        >
          Volver arriba
          <div className="w-10 h-10 rounded-full border border-brand-100/20 flex items-center justify-center group-hover:border-brand-300">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
    </footer>
  );
}
