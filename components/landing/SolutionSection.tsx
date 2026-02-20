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
          title="Una invitacion que no solo anuncia tu boda: la convierte en una experiencia inolvidable"
          description="Desde el primer clic, tus invitados sienten la elegancia de tu historia, confirman su asistencia con facilidad y se preparan para vivir un evento unico."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-primary/20 bg-white/80 p-5"
          >
            <h3 className="font-display text-2xl text-ink">Impulsa el factor "wow"</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Tus invitados reciben una presentacion elegante, moderna y cuidada al detalle que refleja el nivel de la boda que estan por vivir.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl border border-primary/20 bg-white/80 p-5"
          >
            <h3 className="font-display text-2xl text-ink">Disfruta una organizacion ligera</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Olvidate de perseguir respuestas. Todo se vuelve mas claro, ordenado y facil para que tu solo te enfoques en disfrutar esta etapa.
            </p>
          </motion.article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#contacto"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Quiero mi invitacion ahora
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/demo"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
          >
            Ver ejemplo real
            <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
