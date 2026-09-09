import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

// Carga diferida (Code Splitting)
const RotatingEarth = lazy(() => import("./PresenceSection/RotatingEarth"));

export default function PresenceSection() {
  return (
    <section id="presencia" className="w-full bg-[#F8FAFC] py-0 overflow-hidden">
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* COLUMNA IZQUIERDA CON SUSPENSE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-full bg-[#F2F8F6] flex items-center justify-center p-6 min-h-[500px] lg:min-h-screen"
        >
          <Suspense
            fallback={
              <div className="w-[520px] h-[520px] rounded-full bg-[#12967F]/10 animate-pulse flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#12967F]/20 border-t-[#12967F] rounded-full animate-spin" />
              </div>
            }
          >
            <RotatingEarth size={520} />
          </Suspense>
        </motion.div>

        {/* COLUMNA DERECHA */}
        <div className="w-full h-full bg-white flex flex-col justify-center p-8 sm:p-16 lg:p-24 space-y-8 min-h-[500px] lg:min-h-screen">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#12967F] uppercase">
              <MapPin size={16} />
              Nuestra Presencia
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Tecnología que conecta <br />
              <span className="text-[#12967F]">Colombia</span>
            </h2>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Desde nuestras sedes en Medellín y Pereira, desarrollamos soluciones
            de software empresarial que ayudan a nuestros clientes a optimizar sus
            procesos y crecer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-2xl">
              <span className="block text-xs font-medium text-slate-400">Oficina principal</span>
              <span className="text-lg font-bold text-slate-800 mt-1 block">Medellín</span>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-2xl">
              <span className="block text-xs font-medium text-slate-400">Oficina</span>
              <span className="text-lg font-bold text-slate-800 mt-1 block">Pereira</span>
            </div>
          </div>

          <div>
            <a
              href="#contacto"
              className="inline-flex items-center text-[#12967F] font-semibold hover:underline group text-base"
            >
              Conoce más sobre XENCO <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}