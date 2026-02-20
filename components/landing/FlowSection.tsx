'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  'El invitado recibe enlace o QR de la invitacion digital.',
  'Abre la invitacion y ve el modal de bienvenida con nombre (query params).',
  'Confirma asistencia en RSVP con sus datos en segundos.',
  'El Worker procesa y envia correo de confirmacion + QR por Resend.',
  'El invitado abre /invitacion personalizada con su estado y detalles del evento.'
];

export function FlowSection() {
  return (
    <section id="flujo" className="section-shell py-12">
      <SectionHeading
        eyebrow="Como funciona"
        title="Un flujo claro para novios e invitados"
        description="Pensado para reducir preguntas, centralizar confirmaciones y entregar una experiencia impecable en movil."
      />

      <ol className="mt-10 space-y-4">
        {steps.map((step, index) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="paper-surface flex items-start gap-4 p-5"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink/90">Paso {index + 1}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">{step}</p>
            </div>
            <CheckCircle className="ml-auto hidden text-accent sm:block" size={18} />
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
