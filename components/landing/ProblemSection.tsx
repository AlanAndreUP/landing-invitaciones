'use client';

import { motion } from 'framer-motion';
import { CircleAlert, Clock3, Coins, HeartCrack } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const problems = [
  {
    title: 'Listas infinitas y mil mensajes',
    description: 'Cuando todos preguntan lo mismo, organizar invitados se vuelve agotador.',
    icon: CircleAlert
  },
  {
    title: 'Confirmaciones que nunca llegan',
    description: 'Sin respuestas claras, decidir lugares, mesa y tiempos se vuelve un dolor de cabeza.',
    icon: Clock3
  },
  {
    title: 'Gasto alto en invitaciones tradicionales',
    description: 'Pagar impresion, envios y cambios de ultimo minuto puede desbalancear tu presupuesto.',
    icon: Coins
  },
  {
    title: 'La presion de que todo salga perfecto',
    description: 'Tu boda merece sentirse especial desde el primer contacto con tus invitados.',
    icon: HeartCrack
  }
];

export function ProblemSection() {
  return (
    <section className="section-shell py-12">
      <SectionHeading
        eyebrow="Problemas reales"
        title="Organizar invitados para tu boda puede volverse agotador"
        description="Cuando no tienes un sistema claro de confirmacion de asistencia, todo se vuelve mas pesado justo cuando deberias estar disfrutando."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {problems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="paper-surface p-6"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
