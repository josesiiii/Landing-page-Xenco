import { Target, Eye, Gem, Compass } from 'lucide-react';
import { mission, vision, values, pillars } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-xenco-teal font-medium">
            Nuestro propósito
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-xenco-ink mt-3">
            Sobre XENCO
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <ScrollReveal className="rounded-2xl bg-xenco-paper p-8 border border-xenco-teal/10">
            <Target className="text-xenco-teal mb-4" size={28} />
            <h3 className="font-display text-xl font-semibold mb-3">Misión</h3>
            <p className="text-xenco-ink/70 leading-relaxed">{mission}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="rounded-2xl bg-xenco-paper p-8 border border-xenco-teal/10">
            <Eye className="text-xenco-teal mb-4" size={28} />
            <h3 className="font-display text-xl font-semibold mb-3">Visión</h3>
            <p className="text-xenco-ink/70 leading-relaxed">{vision}</p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.15} className="rounded-2xl p-8 bg-xenco-ink text-white">
            <Gem className="text-xenco-gold mb-4" size={26} />
            <h3 className="font-display text-lg font-semibold mb-4">Valores corporativos</h3>
            <ul className="space-y-2.5">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2.5 text-white/80 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-xenco-gold shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="rounded-2xl p-8 bg-xenco-teal text-white">
            <Compass className="text-white mb-4" size={26} />
            <h3 className="font-display text-lg font-semibold mb-4">Pilares corporativos</h3>
            <ul className="space-y-2.5">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
