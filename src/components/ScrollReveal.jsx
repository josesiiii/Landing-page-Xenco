import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Referencia: 21st.dev @manuarora700/container-scroll-animation
// Envuelve cualquier sección y la revela con perspectiva/escala al entrar en viewport.
export function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Versión con "profundidad" 3D para elementos hero-como-contenedor (ej. mockup de producto).
export function ScrollScaleCard({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div style={{ scale, rotateX, opacity }}>{children}</motion.div>
    </div>
  );
}
