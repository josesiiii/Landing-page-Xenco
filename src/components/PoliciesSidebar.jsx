import { AnimatePresence, motion } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import { policyLinks } from '../data/content';

// Referencia: 21st.dev @hardikkashiyani123456788/sterling-gate-kinetic-navigation
// adaptada a orientación VERTICAL, como panel deslizante de políticas.
export default function PoliciesSidebar({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-xenco-ink/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-xenco-ink text-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h3 className="font-display text-lg">Políticas &amp; Sistema de Gestión</h3>
              <button onClick={onClose} aria-label="Cerrar" className="p-2 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              {policyLinks.map((item, i) => (
                <motion.a
                  key={item.label + i}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: 'easeOut' }}
                  className="group flex items-center gap-3 px-6 py-4 border-b border-white/5 hover:bg-white/5 hover:pl-8 transition-all duration-300"
                >
                  <FileText size={16} className="text-xenco-tealLight shrink-0" />
                  <span className="text-sm text-white/85 group-hover:text-white">{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
