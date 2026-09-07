import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ShieldCheck, LogIn } from 'lucide-react';
import { navLinks } from '../data/content';

// Mezcla de referencias 21st.dev:
// - forma/estilo de botones y animación de texto: @aghasisahakyan1/mini-navbar
// - reducción de tamaño al hacer scroll: @manuarora700/resizable-navbar
export default function Navbar({ onOpenPolicies, onOpenLogin }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [mobileOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? 8 : 20,
        paddingBottom: scrolled ? 8 : 20,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-40 flex justify-center px-4"
    >
      <motion.div
        initial={false}
        animate={{
          width: scrolled ? '92%' : '100%',
          maxWidth: scrolled ? 880 : 1120,
          borderRadius: 999,
          backgroundColor: scrolled ? 'rgba(16,28,27,0.85)' : 'rgba(16,28,27,0.55)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full flex items-center justify-between gap-4 px-5 py-2.5 backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-bold text-white">
            <span className="text-xenco-gold">X</span>enco
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
              {hovered === link.label && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onOpenPolicies}
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white px-3 py-2 transition-colors"
          >
            <ShieldCheck size={16} className="text-xenco-tealLight" />
            Políticas
          </button>
          <button onClick={onOpenLogin} className="btn-glass !py-2 !px-4 text-sm">
            <LogIn size={16} />
            Acceso empleados
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-2xl bg-xenco-ink/95 backdrop-blur-lg border border-white/10 p-4 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-white/85 hover:text-white text-sm"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenPolicies();
              }}
              className="px-3 py-2.5 text-left text-white/85 hover:text-white text-sm flex items-center gap-1.5"
            >
              <ShieldCheck size={16} className="text-xenco-tealLight" /> Políticas
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenLogin();
              }}
              className="btn-glass-solid mt-1 !py-2.5"
            >
              Acceso empleados
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
