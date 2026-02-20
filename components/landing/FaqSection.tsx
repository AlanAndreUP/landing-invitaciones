'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const faqs = [
  {
    question: 'Que es una invitacion digital de boda?',
    answer:
      'Es una invitacion elegante que tus invitados abren desde su celular, con los detalles del evento y confirmacion de asistencia en un solo lugar.'
  },
  {
    question: 'Como confirman su asistencia los invitados?',
    answer:
      'Tus invitados confirman en segundos desde la invitacion y asi puedes organizar mejor lugares, mesas y tiempos de tu boda.'
  },
  {
    question: 'Es mas economica que la invitacion impresa?',
    answer:
      'Si. Ahorras en impresion, reimpresiones y envios sin perder elegancia ni impacto visual.'
  },
  {
    question: 'Puedo personalizar la invitacion a mi estilo de boda?',
    answer:
      'Claro. Se adapta al estilo de la pareja para mantener una imagen coherente, romantica y sofisticada.'
  },
  {
    question: 'Cuanto tarda en estar lista?',
    answer:
      'Depende del nivel de personalizacion, pero en poco tiempo puedes tenerla lista para compartir con tus invitados.'
  },
  {
    question: 'Se puede enviar por WhatsApp?',
    answer:
      'Si. Es ideal para compartir por WhatsApp y lograr que tus invitados la reciban y abran facilmente.'
  }
];

export function FaqSection() {
  return (
    <section className="section-shell py-12">
      <SectionHeading
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre invitaciones digitales de boda"
        description="Resuelve tus dudas principales y toma una decision de compra con total confianza."
      />

      <div className="mt-10 space-y-3">
        {faqs.map((faq, index) => (
          <motion.article
            key={faq.question}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="paper-surface p-5"
          >
            <h3 className="font-display text-2xl text-ink">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{faq.answer}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
