'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, MailCheck, Palette, QrCode } from 'lucide-react';

const badges = [
  'Invitaciones digitales de boda elegantes',
  'Invitacion web de boda lista para compartir',
  'Confirmacion de asistencia clara y rapida',
  'Boda moderna, organizada y sin estres'
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
          <p className="chip">Invitaciones Digitales de Boda</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            Invitaciones digitales de boda elegantes con confirmacion de asistencia.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Haz que tu boda se sienta exclusiva desde el primer clic, sorprende a tus invitados y organiza confirmaciones sin caos para disfrutar esta etapa con tranquilidad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Reservar mi invitacion ahora
              <MailCheck size={16} />
            </a>
            <a
              href="https://boda.psicodemy.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Ver ejemplo real
              <ArrowRight size={16} />
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
                Invitacion de boda que enamora
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Una presentacion romantica y elegante que hace que tus invitados hablen de tu boda desde el primer momento.
              </p>
            </div>

            <div className="soft-border rounded-2xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Palette size={16} />
                Confirmaciones sin perseguir mensajes
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Sabe quien asistira y toma decisiones con calma para mesas, lugares y detalles de tu gran dia.
              </p>
            </div>

            <div className="soft-border rounded-2xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <QrCode size={16} />
                Experiencia premium para novios
              </div>
              <p className="mt-2 text-sm text-ink/80">
                Tu invitacion digital de boda combina estilo, orden y emocion en un solo lugar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
