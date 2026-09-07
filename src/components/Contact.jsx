import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Demo: no hay backend real, solo se simula el envío.
    setSent(true);
  }

  return (
    <section id="contacto" className="py-28 px-6 bg-xenco-paper">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-xenco-teal font-medium">
            Hablemos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-xenco-ink mt-3 mb-6">
            Cuéntanos tu proyecto
          </h2>
          <p className="text-xenco-ink/65 mb-8">
            Escríbenos y un especialista de XENCO se pondrá en contacto contigo para
            entender tus necesidades y proponer una solución a la medida.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-xenco-ink/75">
              <Mail size={18} className="text-xenco-teal" /> {contact.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-xenco-ink/75">
              <Phone size={18} className="text-xenco-teal" /> {contact.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-xenco-ink/75">
              <MapPin size={18} className="text-xenco-teal" /> {contact.address}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-xenco-teal/10 p-7 space-y-4"
          >
            <div>
              <label className="text-xs text-xenco-ink/60 mb-1 block">Nombre</label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-xenco-teal/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-xenco-teal/40"
              />
            </div>
            <div>
              <label className="text-xs text-xenco-ink/60 mb-1 block">Correo</label>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-xenco-teal/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-xenco-teal/40"
              />
            </div>
            <div>
              <label className="text-xs text-xenco-ink/60 mb-1 block">Mensaje</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-lg border border-xenco-teal/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-xenco-teal/40"
              />
            </div>
            <button type="submit" className="btn-glass-solid w-full">
              {sent ? 'Mensaje enviado ✓' : 'Enviar mensaje'}
            </button>
            {sent && (
              <p className="text-xs text-xenco-teal text-center">
                (Demo: este formulario aún no está conectado a un backend)
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
