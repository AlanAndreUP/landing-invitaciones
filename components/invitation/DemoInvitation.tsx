'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CalendarPlus,
  Camera,
  Car,
  Check,
  Clock3,
  Copy,
  Gift,
  Heart,
  Hotel,
  MailCheck,
  MapPin,
  Navigation,
  PartyPopper,
  Share2,
  Shirt,
  UtensilsCrossed,
  Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { WeddingData } from '@/types/wedding';
import { useGuestParams } from '@/hooks/useGuestParams';
import { buildGoogleCalendarUrl, createIcsContent } from '@/lib/calendar';
import { Countdown } from '@/components/invitation/Countdown';
import { MusicPlayer } from '@/components/invitation/MusicPlayer';
import { WelcomeModal } from '@/components/invitation/WelcomeModal';

interface DemoInvitationProps {
  data: WeddingData;
}

const timelineIcons = {
  ceremony: Heart,
  photos: Camera,
  reception: UtensilsCrossed,
  party: PartyPopper
} as const;

export function DemoInvitation({ data }: DemoInvitationProps) {
  const guest = useGuestParams();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBankData, setShowBankData] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: 'si',
    message: ''
  });

  useEffect(() => {
    if (!form.name) {
      setForm((prev) => ({ ...prev, name: guest.displayName }));
    }
  }, [form.name, guest.displayName]);

  const eventStart = useMemo(() => new Date(data.event.dateIso), [data.event.dateIso]);
  const eventEnd = useMemo(() => new Date(eventStart.getTime() + 4 * 60 * 60 * 1000), [eventStart]);

  const calendarUrl = useMemo(
    () =>
      buildGoogleCalendarUrl({
        title: `${data.event.title} | ${data.couple.firstName} y ${data.couple.partnerFirstName}`,
        start: eventStart,
        end: eventEnd,
        location: `${data.event.venue}, ${data.event.address}`,
        description: 'Acompananos en nuestra boda. Te esperamos con mucho carino.'
      }),
    [data.couple.firstName, data.couple.partnerFirstName, data.event.address, data.event.title, data.event.venue, eventEnd, eventStart]
  );

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 1400);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSubmitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    const fileContent = createIcsContent({
      title: `${data.event.title} | ${data.couple.firstName} y ${data.couple.partnerFirstName}`,
      start: eventStart,
      end: eventEnd,
      location: `${data.event.venue}, ${data.event.address}`,
      description: 'Acompananos en nuestra boda. Guarda esta fecha.'
    });

    const blob = new Blob([fileContent], { type: 'text/calendar;charset=utf-8' });
    const fileUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'boda.ics';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(fileUrl);
  };

  const handleShare = async () => {
    const targetUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${data.event.title} | ${data.couple.firstName} y ${data.couple.partnerFirstName}`,
          text: 'Te comparto mi invitacion digital de boda.',
          url: targetUrl
        });
        setShareFeedback('Invitacion compartida con exito.');
      } else {
        await navigator.clipboard.writeText(targetUrl);
        setShareFeedback('Enlace copiado al portapapeles.');
      }
    } catch {
      setShareFeedback('No fue posible compartir en este momento.');
    }

    setTimeout(() => setShareFeedback(''), 1700);
  };

  return (
    <>
      <WelcomeModal isOpen={showWelcome} guestName={guest.displayName} onClose={() => setShowWelcome(false)} />

      <main className="pb-28">
        <section className="section-shell pb-12 pt-14 md:pt-20">
          <div className="paper-surface texture-panel overflow-hidden p-8 md:p-12">
            <p className="chip">NOSOTROS</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ink md:text-6xl">
              {data.couple.firstName} {data.couple.lastName}
              <span className="mx-3 text-primary/55">&</span>
              {data.couple.partnerFirstName} {data.couple.partnerLastName}
            </h1>

            <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink/75 sm:text-base">
              {data.announcement.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-primary/20 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-primary/85">Ceremonia</p>
                <h2 className="mt-2 font-display text-2xl text-ink">{data.ceremony.time}</h2>
                <p className="mt-1 text-sm text-ink/75">{data.ceremony.place}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={data.ceremony.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent"
                  >
                    Ver ubicacion
                  </a>
                  <a
                    href={data.ceremony.wazeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    Waze
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-primary/20 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-primary/85">Recepcion</p>
                <h2 className="mt-2 font-display text-2xl text-ink">{data.reception.time}</h2>
                <p className="mt-1 text-sm text-ink/75">{data.reception.place}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={data.reception.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent"
                  >
                    Ver ubicacion
                  </a>
                  <a
                    href={data.reception.wazeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    Waze
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="paper-cut" aria-hidden="true" />

        <section className="section-shell py-12">
          <div className="paper-surface p-8 md:p-10">
            <h2 className="font-display text-3xl text-ink">Cuenta regresiva</h2>
            <p className="mt-2 text-sm text-ink/75">Faltan muy pocos momentos para celebrar juntos.</p>
            <div className="mt-6">
              <Countdown targetDate={data.event.dateIso} />
            </div>
          </div>
        </section>

        <section className="section-shell py-8">
          <h2 className="font-display text-3xl text-ink">Itinerario del dia</h2>
          <div className="mt-8 space-y-4">
            {data.timeline.map((item, index) => {
              const Icon = timelineIcons[item.icon as keyof typeof timelineIcons] ?? Clock3;
              return (
                <motion.article
                  key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="paper-surface grid gap-4 p-5 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-sm font-semibold text-primary">{item.time}</p>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="paper-surface p-7">
              <div className="flex items-center gap-2 text-primary">
                <Shirt size={18} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Dress Code {data.dressCode.style}</p>
              </div>
              <p className="mt-4 text-sm text-ink/80">Mujeres: {data.dressCode.women}</p>
              <p className="mt-2 text-sm text-ink/80">Hombres: {data.dressCode.men}</p>

              <div className="mt-5">
                <p className="text-sm font-semibold text-ink">Colores no admitidos</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {data.dressCode.restrictedColors.map((hex) => (
                    <span key={hex} className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs text-ink/70">
                      <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: hex }} aria-hidden="true" />
                      {hex}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm text-ink/70">{data.dressCode.closingMessage}</p>
            </article>

            <article className="paper-surface p-7">
              <div className="flex items-center gap-2 text-primary">
                <Gift size={18} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Mesa de regalo</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">{data.giftRegistry.message}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {data.giftRegistry.stores.map((store) => (
                  <a
                    key={store.name}
                    href={store.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                  >
                    {store.name}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowBankData((prev) => !prev)}
                className="focus-ring mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
              >
                {showBankData ? 'Ocultar datos bancarios' : 'Ver datos bancarios'}
              </button>

              {showBankData ? (
                <div className="mt-4 space-y-2 rounded-2xl border border-primary/20 bg-white/80 p-4 text-sm text-ink/80">
                  <p>
                    <strong>Banco:</strong> {data.giftRegistry.bank.bank}
                  </p>
                  <p>
                    <strong>Titular:</strong> {data.giftRegistry.bank.holder}
                  </p>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-primary/20 px-3 py-2">
                    <span>
                      <strong>CLABE:</strong> {data.giftRegistry.bank.clabe}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('clabe', data.giftRegistry.bank.clabe)}
                      className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
                      aria-label="Copiar CLABE"
                    >
                      {copiedField === 'clabe' ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-primary/20 px-3 py-2">
                    <span>
                      <strong>Tarjeta:</strong> {data.giftRegistry.bank.card}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('card', data.giftRegistry.bank.card)}
                      className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
                      aria-label="Copiar tarjeta"
                    >
                      {copiedField === 'card' ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              ) : null}
            </article>
          </div>
        </section>

        <section className="section-shell py-8">
          <div className="paper-surface p-7">
            <h2 className="font-display text-3xl text-ink">Ubicacion y transporte</h2>
            <p className="mt-3 text-sm text-ink/75">{data.event.venue}</p>
            <p className="text-sm text-ink/75">{data.event.address}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={data.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
              >
                <MapPin size={16} />
                Google Maps
              </a>
              <a
                href={data.location.wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary"
              >
                <Navigation size={16} />
                Waze
              </a>
            </div>
            <p className="mt-4 text-sm text-ink/75">
              <Car size={16} className="mr-1 inline-block text-primary" />
              {data.location.transport}
            </p>
            <p className="mt-2 text-sm text-ink/75">{data.location.parking}</p>
          </div>
        </section>

        <section className="section-shell py-8">
          <h2 className="font-display text-3xl text-ink">Galeria</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={`gallery-${index + 1}`}
                type="button"
                className="focus-ring relative h-40 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/20 via-secondary/25 to-accent/10 text-left"
                aria-label={`Vista previa de galeria ${index + 1}`}
              >
                <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2 py-1 text-xs font-medium text-primary">
                  Foto {index + 1}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section-shell py-8">
          <h2 className="font-display text-3xl text-ink">Hoteles sugeridos</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {data.hotels.map((hotel) => (
              <article key={hotel.name} className="paper-surface p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Hotel size={16} />
                  <h3 className="font-display text-2xl text-ink">{hotel.name}</h3>
                </div>
                <p className="mt-2 text-sm text-ink/75">{hotel.address}</p>
                <p className="mt-1 text-sm text-ink/75">{hotel.phone}</p>
                <p className="mt-1 text-sm text-ink/75">Distancia: {hotel.distance}</p>
                <p className="mt-1 text-sm text-ink/75">Tarifa: {hotel.price}</p>
                <p className="mt-1 text-sm text-ink/75">Amenidades: {hotel.amenities}</p>
                <a
                  href={hotel.web}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-4 inline-flex rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
                >
                  Visitar sitio
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="rsvp" className="section-shell py-10">
          <div className="paper-surface p-8 md:p-10">
            <div className="flex items-center gap-2 text-primary">
              <MailCheck size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">Confirmacion RSVP</p>
            </div>
            <h2 className="mt-4 font-display text-3xl text-ink">Hemos reservado {guest.seats}</h2>
            <p className="mt-2 text-sm text-ink/75">
              Fecha limite: {guest.rsvpDeadline ?? data.rsvp.deadline}. Confirma tu asistencia para enviarte el acceso final.
            </p>

            {!submitted ? (
              <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmitRsvp} aria-label="Formulario RSVP de demostracion">
                <div>
                  <label htmlFor="demo-name" className="text-sm font-medium text-ink/90">
                    Nombre
                  </label>
                  <input
                    id="demo-name"
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="demo-email" className="text-sm font-medium text-ink/90">
                    Email
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="demo-attending" className="text-sm font-medium text-ink/90">
                    Asistiraes
                  </label>
                  <select
                    id="demo-attending"
                    value={form.attending}
                    onChange={(event) => setForm((prev) => ({ ...prev, attending: event.target.value }))}
                    className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm"
                  >
                    <option value="si">Si, confirmo asistencia</option>
                    <option value="no">No podrao asistir</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="demo-message" className="text-sm font-medium text-ink/90">
                    Mensaje
                  </label>
                  <textarea
                    id="demo-message"
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    className="focus-ring mt-2 w-full rounded-xl border border-primary/25 bg-white/90 px-4 py-3 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="focus-ring md:col-span-2 inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
                >
                  Confirmar asistencia
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl border border-accent/35 bg-accent/10 p-5">
                <p className="text-sm font-semibold text-primary">{data.rsvp.successMessage}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
                  >
                    <CalendarPlus size={15} />
                    Agregar a Google Calendar
                  </a>
                  <button
                    type="button"
                    onClick={handleDownloadCalendar}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    <CalendarPlus size={15} />
                    Descargar .ics
                  </button>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    <Share2 size={15} />
                    Compartir invitacion
                  </button>
                </div>
                {shareFeedback ? <p className="mt-3 text-xs text-ink/70">{shareFeedback}</p> : null}
              </div>
            )}
          </div>
        </section>

        <footer className="section-shell pt-8">
          <div className="paper-surface p-6 text-center">
            <p className="font-display text-2xl text-ink">{data.event.dateLabel}</p>
            <p className="mt-1 text-sm text-ink/70">{data.footer.tagline}</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-primary">
              <span>{data.footer.copyright}</span>
              <span aria-hidden="true">|</span>
              <span>{data.couple.initials}</span>
            </div>

            {data.wallet.enabled ? (
              <a
                href={data.wallet.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
              >
                <Wallet size={15} />
                Llevar en Wallet
              </a>
            ) : null}

            <div className="mt-5">
              <Link href="/" className="text-xs font-semibold text-primary underline underline-offset-4">
                Volver a landing comercial
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <MusicPlayer trackUrl={data.music.trackUrl} title={data.music.trackTitle} artist={data.music.artist} />
    </>
  );
}
