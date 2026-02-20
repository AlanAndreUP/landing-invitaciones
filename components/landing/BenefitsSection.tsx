'use client';

import { motion } from 'framer-motion';
import { Heart, Image, SmilePlus, Sparkles, Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const benefits = [
  {
    title: 'Impacto visual que enamora',
    description: 'Una primera impresion que transmite romance, buen gusto y exclusividad.',
    icon: Image
  },
  {
    title: 'Invitados sorprendidos desde el primer clic',
    description: 'Tu boda se siente especial desde el instante en que reciben la invitacion.',
    icon: Sparkles
  },
  {
    title: 'Organizacion sin estres',
    description: 'Todo fluye con claridad para que vivas tu etapa de boda con mas calma.',
    icon: SmilePlus
  },
  {
    title: 'Imagen sofisticada para tu gran dia',
    description: 'Cada detalle comunica una celebracion moderna, elegante y memorable.',
    icon: Star
  },
  {
    title: 'Recuerdos digitales que quedan para siempre',
    description: 'Tu invitacion se transforma en una pieza que podras guardar y revivir.',
    icon: Heart
  }
];

export function BenefitsSection() {
  return (
    <section className="section-shell py-12">
      <SectionHeading
        eyebrow="Beneficios"
        title="Todo lo que ganas cuando eliges una invitacion que si representa tu historia"
        description="No es solo una invitacion, es la forma en que presentas el evento mas importante de tu vida."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="paper-surface p-5"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
