'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    text: 'Lo mejor fue la paz mental. Dejamos de perseguir mensajes y empezamos a disfrutar nuestra boda de verdad.',
    author: 'Valeria y Andres',
    place: 'Monterrey'
  },
  {
    text: 'Todos nos dijeron lo hermosa que estaba la invitacion. Fue la primera vez que sentimos que nuestra boda ya habia empezado.',
    author: 'Mariana y Luis',
    place: 'Guadalajara'
  },
  {
    text: 'Nos dio orden, elegancia y tranquilidad. Fue una decision que nos ahorro muchisimo estres.',
    author: 'Paula y Ricardo',
    place: 'CDMX'
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-shell py-12">
      <SectionHeading
        eyebrow="Prueba social"
        title="Parejas que ya reservaron su invitacion web de boda"
        description="Historias de novios que pasaron del caos a una organizacion clara y elegante."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={`${item.author}-${item.place}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="paper-surface p-6"
          >
            <Quote className="text-primary" size={20} />
            <p className="mt-4 text-sm leading-relaxed text-ink/80">"{item.text}"</p>
            <p className="mt-5 text-sm font-semibold text-ink">{item.author}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-primary/80">{item.place}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
