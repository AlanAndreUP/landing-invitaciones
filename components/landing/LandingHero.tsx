'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, MailCheck, Palette, QrCode } from 'lucide-react';

const badges = [
  'Diseno elegante que enamora al instante',
  'Confirmaciones claras sin perseguir mensajes',
  'Invitados emocionados desde el primer clic',
  'Una boda moderna, organizada y memorable'
];

export function LandingHero() {
  return (
    <section className="section-shell pb-12 pt-14 md:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="chip">Invitaciones de Boda</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Haz que tus invitados se enamoren de tu boda antes del gran dia.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Una invitacion elegante que hace tu boda mas especial, mantiene todo ordenado y te regala la tranquilidad de disfrutar esta etapa sin estres.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Ver ejemplo real
              <ArrowRight size={16} />
            </Link>
            <a
              href="#contacto"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Reservar ahora
              <MailCheck size={16} />
            </a>
          </div>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {badges.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-2xl border border-primary/15 bg-white/70 px-3 py-2 text-sm text-ink/80">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          className="paper-surface texture-panel relative overflow-hidden p-6 sm:p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Vista previa del producto</p>
          <h3 className="mt-3 font-display text-2xl text-ink">SOFIA & DIEGO</h3>
          <p className="mt-1 text-sm text-ink/70">14 de noviembre 2026 | Guadalajara</p>

          <div className="mt-6 grid gap-4">
            <div className="soft-border rounded-2xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <CalendarCheck size={16} />
                Elegancia desde el inicio
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Una presentacion romantica y cuidada que transmite el estilo de su gran dia.
              </p>
            </div>

            <div className="soft-border rounded-2xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Palette size={16} />
                Orden sin complicaciones
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Menos dudas, menos mensajes y mas tiempo para disfrutar su compromiso.
              </p>
            </div>

            <div className="soft-border rounded-2xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <QrCode size={16} />
                Una experiencia que sorprende
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Sus invitados sentiran que estan frente a una boda exclusiva desde el primer momento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
