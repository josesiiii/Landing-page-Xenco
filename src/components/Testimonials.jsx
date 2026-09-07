import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-xenco-ink">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-xenco-tealLight font-medium">
            Clientes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">
            Lo que dicen de nosotros
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.author}
              delay={i * 0.1}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-7 flex flex-col"
            >
              <Quote className="text-xenco-gold mb-4" size={24} />
              <p className="text-white/80 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white text-sm font-medium">{t.author}</p>
                <p className="text-white/50 text-xs">{t.company}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
