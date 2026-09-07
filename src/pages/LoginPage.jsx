import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';

// Referencias 21st.dev:
// - fondo animado: @shivendra9795kumar/neural-access-login (recoloreado con la paleta XENCO)
// - botones glass + fuente: @easemize/sign-up
export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Demo: simula autenticación y navega al dashboard mock.
    setTimeout(() => {
      navigate('/dashboard');
    }, 900);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <NeuralBackground />

      <Link
        to="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-white/70 hover:text-white text-sm"
      >
        <ArrowLeft size={16} /> Volver al sitio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <span className="font-display text-2xl font-bold text-white">
            <span className="text-xenco-gold">X</span>enco
          </span>
          <p className="text-white/60 text-sm mt-2">Acceso exclusivo para empleados</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              required
              type="email"
              placeholder="correo@xenco.com.co"
              className="w-full rounded-full bg-white/10 border border-white/15 pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-xenco-tealLight/60 focus:bg-white/15 transition-colors"
            />
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              className="w-full rounded-full bg-white/10 border border-white/15 pl-11 pr-11 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-xenco-tealLight/60 focus:bg-white/15 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button type="submit" disabled={loading} className="btn-glass w-full !py-3 mt-2">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Verificando...
                </motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Iniciar sesión
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </form>

        <p className="text-center text-white/35 text-xs mt-6">
          Demo: cualquier correo/contraseña te llevará al dashboard simulado.
        </p>
      </motion.div>
    </div>
  );
}
