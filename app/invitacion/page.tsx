import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarPlus, CheckCircle, CircleX, MapPin, Shirt } from 'lucide-react';
import weddingData from '@/data/wedding.json';
import type { WeddingData } from '@/types/wedding';
import { buildGoogleCalendarUrl } from '@/lib/calendar';

const data = weddingData as WeddingData;

interface InvitationPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

function readParam(value: string | string[] | undefined, fallback: string): string {
  if (Array.isArray(value)) {
    return value[0] ?? fallback;
  }
  return value ?? fallback;
}

export const metadata: Metadata = {
  title: 'Invitacion personalizada',
  description: 'Resumen de confirmacion y detalles del evento para invitado confirmado.'
};

export default function InvitationPage({ searchParams }: InvitationPageProps) {
  const name = readParam(searchParams.name, 'Invitado especial');
  const email = readParam(searchParams.email, 'No proporcionado');
  const phone = readParam(searchParams.phone, 'No proporcionado');
  const attending = readParam(searchParams.attending, 'si').toLowerCase();
  const message = readParam(searchParams.message, 'Sin mensaje adicional');

  const start = new Date(data.event.dateIso);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  const calendarUrl = buildGoogleCalendarUrl({
    title: `${data.event.title} | ${data.couple.firstName} y ${data.couple.partnerFirstName}`,
    start,
    end,
    location: `${data.event.venue}, ${data.event.address}`,
    description: 'Nos encantara celebrar contigo. Esta es tu invitacion personalizada.'
  });

  return (
    <main className="section-shell py-12">
      <div className="paper-surface mx-auto max-w-3xl p-8 md:p-10">
        <p className="chip">/invitacion</p>
        <h1 className="mt-6 font-display text-4xl text-ink">Hola {name}</h1>
        <p className="mt-2 text-sm text-ink/75">Este enlace es tu confirmacion personalizada del evento.</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-primary/20 bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-primary/80">Estado de asistencia</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink">
              {attending === 'si' ? (
                <>
                  <CheckCircle size={16} className="text-accent" />
                  Asistencia confirmada
                </>
              ) : (
                <>
                  <CircleX size={16} className="text-red-500" />
                  No podra asistir
                </>
              )}
            </p>
          </article>

          <article className="rounded-2xl border border-primary/20 bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-primary/80">Contacto enviado</p>
            <p className="mt-2 text-sm text-ink/80">{email}</p>
            <p className="mt-1 text-sm text-ink/80">{phone}</p>
          </article>
        </div>

        <article className="mt-4 rounded-2xl border border-primary/20 bg-white/80 p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-primary/80">Mensaje</p>
          <p className="mt-2 text-sm text-ink/80">{message}</p>
        </article>

        <article className="mt-4 rounded-2xl border border-primary/20 bg-white/80 p-5">
          <h2 className="font-display text-2xl text-ink">Detalles del evento</h2>
          <p className="mt-2 text-sm text-ink/80">
            {data.event.dateLabel} | {data.event.timeLabel}
          </p>
          <p className="mt-1 text-sm text-ink/80">{data.event.venue}</p>
          <p className="mt-1 text-sm text-ink/80">{data.event.address}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink/80">
            <MapPin size={16} className="text-primary" />
            {data.event.parking}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink/80">
            <Shirt size={16} className="text-primary" />
            Dress code: {data.dressCode.style}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={data.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
            >
              Ver mapa
            </a>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary"
            >
              <CalendarPlus size={14} />
              Agregar al calendario
            </a>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/demo" className="text-sm font-semibold text-primary underline underline-offset-4">
            Ver demo completa
          </Link>
        </div>
      </div>
    </main>
  );
}
