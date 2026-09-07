import { team } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export default function Team() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-xenco-teal font-medium">
            Nuestra gente
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-xenco-ink mt-3">Equipo</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name + i} delay={i * 0.08} className="text-center">
              <div className="aspect-square rounded-2xl bg-xenco-paper border border-xenco-teal/10 mb-4 flex items-center justify-center">
                <span className="font-display text-2xl text-xenco-teal/40">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <p className="font-display font-medium text-sm text-xenco-ink">{member.name}</p>
              <p className="text-xenco-ink/50 text-xs mt-0.5">{member.role}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
