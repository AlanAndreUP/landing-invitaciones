'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CalendarDays, MessageCircleMore } from 'lucide-react';

const RECIPIENT_EMAIL = 'hola@invitaciones-elegantes.com';
const CONTACT_API_URL =  'https://round-paper-40da.alanenmexico12.workers.dev/';

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (CONTACT_API_URL) {
      setLoading(true);
      try {
        const res = await fetch(CONTACT_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            eventDate: form.eventDate || undefined,
            message: form.message.trim()
          })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setError(data.error || 'No se pudo enviar. Intenta de nuevo.');
          return;
        }
        setSent(true);
      } catch {
        setError('Error de conexión. Intenta de nuevo o escríbenos por WhatsApp.');
      } finally {
        setLoading(false);
      }
      return;
    }

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
          <p className="chip">Reserva ahora</p>
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">Compra hoy tu invitacion digital de boda</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Si buscas invitaciones de boda modernas, elegantes y faciles de compartir, aparta tu fecha hoy mismo.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="https://boda.psicodemy.com"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent sm:w-auto"
            >
              Ver invitacion de ejemplo
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/529614389077"
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
            disabled={loading}
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando…' : 'Quiero reservar mi invitacion'}
            <ArrowRight size={16} />
          </button>

          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
              {error}
            </p>
          ) : null}
          {sent && CONTACT_API_URL ? (
            <p className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-primary">
              Solicitud enviada. Revisa tu correo; te hemos enviado una confirmación.
            </p>
          ) : sent && !CONTACT_API_URL ? (
            <p className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-primary">
              Se abrio tu correo para completar la reserva. Si lo prefieres, escribe directo a {RECIPIENT_EMAIL}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
