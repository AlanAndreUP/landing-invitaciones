'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SolutionSection() {
  return (
    <section className="section-shell py-12">
      <div className="paper-surface texture-panel overflow-hidden p-8 md:p-10">
        <SectionHeading
          eyebrow="La solucion"
          title="Tu invitacion web de boda en una experiencia elegante, moderna y memorable"
          description="Convierte el estres en tranquilidad con una invitacion que emociona a tus invitados y te ayuda a organizar cada detalle sin friccion."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-primary/20 bg-white/80 p-5"
          >
            <h3 className="font-display text-2xl text-ink">Impresiona desde el primer clic</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Tus invitados reciben una invitacion de boda elegante que refleja el estilo exclusivo de tu celebracion.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl border border-primary/20 bg-white/80 p-5"
          >
            <h3 className="font-display text-2xl text-ink">Confirma asistencia con claridad</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Deja de perseguir respuestas. Tendras una organizacion mas clara para enfocarte en lo que realmente importa: vivir tu gran dia.
            </p>
          </motion.article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#contacto"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Comprar invitacion digital
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://boda.psicodemy.com"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
          >
            Ver ejemplo real
            <Sparkles size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
