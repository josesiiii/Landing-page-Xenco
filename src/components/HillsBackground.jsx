import { motion } from 'framer-motion';

// Referencia: 21st.dev @designali-in/glsl-hills
// Aproximación con capas de "colinas" SVG animadas + malla de gradientes en la
// paleta de XENCO (teal + dorado), en lugar de un shader GLSL real.
// Si quieres el shader real, la geometría se puede portar a three.js/ogl
// reutilizando estas mismas curvas como puntos de control.
export default function HillsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-xenco-ink">
      <div className="absolute inset-0 bg-xenco-mesh" />

      <motion.svg
        className="absolute bottom-0 left-0 w-[140%] -left-[20%]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        animate={{ x: ['0%', '-4%', '0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M0,300 C240,220 480,340 720,280 C960,220 1200,320 1440,260 L1440,400 L0,400 Z"
          fill="#0B6E5C"
          opacity="0.55"
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-0 left-0 w-[140%] -left-[15%]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        animate={{ x: ['0%', '3%', '0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M0,340 C260,260 520,360 760,300 C1000,250 1220,340 1440,300 L1440,400 L0,400 Z"
          fill="#12967F"
          opacity="0.7"
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-0 left-0 w-[140%] -left-[10%]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        animate={{ x: ['0%', '-2%', '0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M0,370 C300,330 540,390 800,350 C1040,315 1260,370 1440,345 L1440,400 L0,400 Z"
          fill="#E9B949"
          opacity="0.18"
        />
      </motion.svg>

      <div className="absolute inset-0 bg-gradient-to-t from-xenco-ink via-transparent to-xenco-ink/40" />
    </div>
  );
}
