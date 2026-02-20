'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MessageCircleMore } from 'lucide-react';

const RECIPIENT_EMAIL = 'hola@invitaciones-elegantes.com';

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Solicitud de invitacion | ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nFecha del evento: ${form.eventDate || 'Por definir'}\n\nMensaje:\n${form.message}`
    );

    setSent(true);
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="section-shell py-14">
      <div className="paper-surface grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-10">
        <div>
          <p className="chip">Ultimo paso</p>
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">Reserva hoy y vive tu proceso de boda con calma</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Si ya imaginan como quieren que se vea su invitacion, este es el momento de apartar su fecha y comenzar.
          </p>

          <div className="mt-8 space-y-3">
            <Link
              href="/demo"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent sm:w-auto"
            >
              Ver ejemplo real
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/523312345678"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-white/80 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5 sm:w-auto"
            >
              Hablar por WhatsApp
              <MessageCircleMore size={16} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto para solicitar invitacion">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink/90">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm text-ink"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink/90">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm text-ink"
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="text-sm font-medium text-ink/90">
              Fecha estimada del evento
            </label>
            <div className="relative mt-2">
              <CalendarDays className="pointer-events-none absolute left-3 top-3.5 text-primary/70" size={16} />
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={(event) => setForm((prev) => ({ ...prev, eventDate: event.target.value }))}
                className="focus-ring w-full rounded-xl border border-primary/25 bg-white/90 py-3 pl-10 pr-4 text-sm text-ink"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink/90">
              Cuentanos como imaginan su boda
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm text-ink"
            />
          </div>

          <button
            type="submit"
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Reservar mi invitacion
            <ArrowRight size={16} />
          </button>

          {sent ? (
            <p className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-primary">
              Se abrio tu correo para completar la reserva. Si lo prefieres, escribe directo a {RECIPIENT_EMAIL}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
