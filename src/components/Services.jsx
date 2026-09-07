import { Layers, Boxes, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { services } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

const icons = [Layers, Boxes, ShieldCheck, ClipboardCheck];

export default function Services() {
  return (
    <section id="conocimiento" className="py-28 px-6 bg-xenco-paper">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-xenco-teal font-medium">
            Lo que hacemos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-xenco-ink mt-3">
            Servicios &amp; soluciones
          </h2>
        </ScrollReveal>

        <div id="servicios" className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ScrollReveal
                key={s.title}
                delay={i * 0.08}
                className="group rounded-2xl bg-white p-8 border border-xenco-teal/10 hover:border-xenco-teal/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-xenco-teal/10 flex items-center justify-center mb-5 group-hover:bg-xenco-teal group-hover:text-white text-xenco-teal transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-xenco-ink/65 text-sm leading-relaxed">{s.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
