import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, LogIn, ChevronDown, ShieldCheck, Info, Newspaper, AlertCircle, Layers, Server, Stethoscope, Building, Landmark, GraduationCap, BookOpen, GraduationCap as ELearningIcon } from 'lucide-react';

export default function Navbar({ onOpenPolicies, onOpenLogin }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

const navigationLinks = [
    { label: 'Inicio', href: '#inicio' },
      
    {
      label: 'Sectores',
      href: '#sectores',
      subItems: [
        { name: 'Salud Privada IPS', href: '#salud-privada', icon: Stethoscope },
        { name: 'Salud Pública E.S.E', href: '#salud-publica', icon: Building },
        { name: 'Entidades Públicas', href: '#entidades-publicas', icon: Landmark },
        { name: 'Universidades', href: '#universidades', icon: GraduationCap },
      ],
    },
    {
      label: 'Nosotros',
      href: '#nosotros',
      subItems: [
        { name: 'Quiénes somos', href: '#C../pages/AboutPage.jsx/quienes-somos', icon: Info }, // Apunta al id exacto dentro de AboutPage
        { name: 'Novedades', href: '#novedades', icon: Newspaper },
        { name: 'Políticas', action: 'policies', icon: ShieldCheck },
        { name: 'Canal de denuncias', href: '#canal-denuncias', icon: AlertCircle },
      ],
    }, 
    {
      label: 'Productos',
      href: '#conocimiento',
      subItems: [
        { name: 'Safix', desc: 'Sistema de gestión modular', href: '#safix', icon: Layers },
        { name: 'SX advance', desc: 'Plataforma avanzada de salud', href: '#sx-advance', icon: Server },
      ],
    },
  
    {
      label: 'Recursos',
      href: '#presencia',
      subItems: [
        { name: 'Blog', href: '#blog', icon: BookOpen },
        { name: 'E-Learning', href: '#elearning', icon: ELearningIcon },
      ],
    },
    { label: 'Contacto', href: '#contacto' },
  ];

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [mobileOpen]);

  const handleSubItemClick = (sub) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (sub.action === 'policies') {
      onOpenPolicies();
    }
  };

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
          maxWidth: scrolled ? 980 : 1180,
          borderRadius: 999,
          backgroundColor: scrolled ? 'rgba(21, 126, 126, 0.46)' : 'rgba(21, 126, 126, 0.46)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full flex items-center justify-between gap-4 px-5 py-2.5 backdrop-blur-lg border border-white/10 shadow-lg"
      >
        {/* LOGO DE LA EMPRESA */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img 
            src="src\assets\logos\logo_xenco.png" 
            alt="Xenco Logo" 
            className="h-8 w-auto object-contain transition-all" 
          />
        </a>

        {/* Menú Escritorio */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => {
            const hasDropdown = link.subItems && link.subItems.length > 0;

            return (
              <div
                key={link.label}
                className="relative py-1"
                onMouseEnter={() => {
                  setHovered(link.label);
                  if (hasDropdown) setActiveDropdown(link.label);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setActiveDropdown(null);
                }}
              >
                <a
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-xenco-tealLight' : ''
                      }`}
                    />
                  )}
                  {hovered === link.label && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </a>

                {/* Submenú Flotante */}
                <AnimatePresence>
                  {hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 w-60 pt-2 z-50"
                    >
                      <div className="bg-xenco-ink/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl overflow-hidden">
                        {link.subItems.map((sub, idx) => {
                          const Icon = sub.icon;
                          
                          if (sub.action === 'policies') {
                            return (
                              <button
                                key={idx}
                                onClick={() => handleSubItemClick(sub)}
                                className="w-full text-left group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                              >
                                {Icon && (
                                  <div className="p-1.5 rounded-lg bg-white/5 text-xenco-tealLight group-hover:bg-xenco-tealLight group-hover:text-black transition-colors shrink-0">
                                    <Icon size={15} />
                                  </div>
                                )}
                                <span className="text-xs font-medium text-white group-hover:text-xenco-tealLight transition-colors">
                                  {sub.name}
                                </span>
                              </button>
                            );
                          }

                          return (
                            <a
                              key={idx}
                              href={sub.href}
                              onClick={() => handleSubItemClick(sub)}
                              className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                            >
                              {Icon && (
                                <div className="p-1.5 rounded-lg bg-white/5 text-xenco-tealLight group-hover:bg-xenco-tealLight group-hover:text-black transition-colors shrink-0">
                                  <Icon size={15} />
                                </div>
                              )}
                              <div>
                                <p className="text-xs font-medium text-white group-hover:text-xenco-tealLight transition-colors">
                                  {sub.name}
                                </p>
                                {sub.desc && (
                                  <p className="text-[10px] text-white/50 line-clamp-1">{sub.desc}</p>
                                )}
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Acceso Empleados */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={onOpenLogin} className="btn-glass !py-2 !px-4 text-sm">
            <LogIn size={16} />
            Acceso empleados
          </button>
        </div>

        {/* Botón Móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-2xl bg-xenco-ink/95 backdrop-blur-lg border border-white/10 p-4 flex flex-col gap-1 md:hidden max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            {navigationLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-white/90 hover:text-white text-sm font-semibold block"
                >
                  {link.label}
                </a>
                {link.subItems && (
                  <div className="ml-4 pl-2 border-l border-white/10 flex flex-col gap-1 my-1">
                    {link.subItems.map((sub, sIdx) => {
                      if (sub.action === 'policies') {
                        return (
                          <button
                            key={sIdx}
                            onClick={() => handleSubItemClick(sub)}
                            className="px-3 py-1.5 text-xs text-white/70 hover:text-white text-left block"
                          >
                            {sub.name}
                          </button>
                        );
                      }
                      return (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-1.5 text-xs text-white/70 hover:text-white block"
                        >
                          {sub.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenLogin();
              }}
              className="btn-glass-solid mt-2 !py-2.5"
            >
              Acceso empleados
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}