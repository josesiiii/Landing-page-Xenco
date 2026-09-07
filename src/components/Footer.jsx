import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { policyLinks, navLinks, contact } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-xenco-ink text-white/60 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
        <div>
          <span className="font-display text-xl font-bold text-white">
            <span className="text-xenco-gold">X</span>enco
          </span>
          <p className="mt-3 text-sm max-w-xs">
            Software, ERP y SaaS a la medida para hacer crecer tu operación.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-3">Navegación</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-3">Políticas</p>
          <ul className="space-y-2 text-sm">
            {policyLinks.slice(0, 4).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
        <span>© {new Date().getFullYear()} XENCO S.A. Todos los derechos reservados.</span>
        <span>{contact.email}</span>
      </div>
    </footer>
  );
}
