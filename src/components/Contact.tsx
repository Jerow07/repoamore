import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-32 w-full px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Info Side */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex flex-col justify-center"
        >
          <span className="text-brand-300 font-bold tracking-[0.2em] uppercase text-sm">Hablemos</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-brand-400 mt-4 leading-tight">
            ¿Listo para <br /> <span className="text-brand-300 italic">escalar</span> tu marca?
          </h2>
          <p className="mt-8 text-xl text-brand-400/70 font-medium leading-relaxed max-w-lg">
            Estamos aquí para convertir tus ideas en realidades digitales de alto impacto. 
            Escríbenos y agendemos una asesoría.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-200/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-400 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-300 uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold text-brand-400">abi.est.mkt@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-200/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-400 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-300 uppercase tracking-widest">Teléfono</p>
                <p className="text-xl font-bold text-brand-400">+54 9 11 1234-5678</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-200/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-400 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-300 uppercase tracking-widest">Ubicación</p>
                <p className="text-xl font-bold text-brand-400">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-white/50 backdrop-blur-xl border border-brand-200/50 p-10 md:p-16 rounded-[48px] shadow-2xl shadow-brand-400/5"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-400/60 uppercase tracking-widest ml-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full bg-brand-100/50 border border-brand-200/50 rounded-2xl p-5 text-brand-400 placeholder:text-brand-300/50 focus:outline-none focus:ring-2 focus:ring-brand-300/50 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-400/60 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="w-full bg-brand-100/50 border border-brand-200/50 rounded-2xl p-5 text-brand-400 placeholder:text-brand-300/50 focus:outline-none focus:ring-2 focus:ring-brand-300/50 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-400/60 uppercase tracking-widest ml-1">Servicio de interés</label>
              <select className="w-full bg-brand-100/50 border border-brand-200/50 rounded-2xl p-5 text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300/50 transition-all font-medium appearance-none">
                <option value="" disabled selected>Selecciona un servicio...</option>
                <option>Marketing Integral</option>
                <option>E-Commerce</option>
                <option>Branding & Diseño</option>
                <option>Social Media</option>
                <option>Desarrollo Web Custom</option>
                <option>Diseño UX / UI</option>
                <option>Landing Pages</option>
                <option>Mantenimiento Web</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-400/60 uppercase tracking-widest ml-1">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full bg-brand-100/50 border border-brand-200/50 rounded-2xl p-5 text-brand-400 placeholder:text-brand-300/50 focus:outline-none focus:ring-2 focus:ring-brand-300/50 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-6 bg-brand-400 text-white rounded-3xl font-bold text-lg hover:bg-brand-400/90 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-400/20 group">
              Enviar Mensaje
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
