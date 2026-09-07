import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogOut, FileText, ClipboardList, ShieldCheck, Bell } from 'lucide-react';

const cards = [
  { icon: ClipboardList, title: 'Mis solicitudes', value: '3 activas' },
  { icon: FileText, title: 'Documentos del SIG', value: '12 disponibles' },
  { icon: ShieldCheck, title: 'Capacitaciones SGSST', value: '2 pendientes' },
  { icon: Bell, title: 'Notificaciones', value: '5 nuevas' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-xenco-paper">
      <header className="bg-xenco-ink text-white px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold">
          <span className="text-xenco-gold">X</span>enco <span className="text-white/50 font-normal text-sm">· Intranet (demo)</span>
        </span>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <LogOut size={16} /> Cerrar sesión
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-2xl font-bold text-xenco-ink mb-1"
        >
          Bienvenido(a) 👋
        </motion.h1>
        <p className="text-xenco-ink/60 mb-10 text-sm">
          Este es un dashboard simulado para la demo — sin datos ni lógica reales.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-xenco-teal/10 p-6"
            >
              <c.icon className="text-xenco-teal mb-4" size={22} />
              <p className="text-xenco-ink/50 text-xs mb-1">{c.title}</p>
              <p className="font-display font-semibold text-xenco-ink">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
