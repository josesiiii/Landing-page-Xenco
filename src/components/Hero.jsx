import { motion } from 'framer-motion';
import HillsBackground from './HillsBackground';
import InfiniteClientSlider from './InfiniteClientSlider';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16">
      <HillsBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs tracking-[0.2em] uppercase text-xenco-tealLight font-medium mb-6"
        >
          Software · ERP · SaaS a la medida
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-bold text-white leading-[1.05]"
        >
          Construimos el software que tu operación
          <span className="text-xenco-gold"> realmente necesita</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
        >
          En XENCO desarrollamos e implementamos soluciones empresariales a la medida,
          con un proceso continuo de innovación que optimiza tus procesos y fortalece
          tu competitividad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contacto" className="btn-glass-solid">
            Hablemos de tu proyecto
          </a>
          <a href="#servicios" className="btn-glass">
            Ver soluciones
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mt-20"
      >
        <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-4">
          Empresas que confían en XENCO
        </p>
        <InfiniteClientSlider />
      </motion.div>
    </section>
  );
}
