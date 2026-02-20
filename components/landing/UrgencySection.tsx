import Link from 'next/link';
import { AlertTriangle, ArrowRight, Clock3 } from 'lucide-react';

export function UrgencySection() {
  return (
    <section className="section-shell py-12">
      <div className="paper-surface texture-panel p-8 md:p-10">
        <p className="chip">Urgencia</p>
        <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">No te quedes sin fecha para tu invitacion digital de boda</h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          Estamos en temporada alta y los cupos se ocupan rapido. Si quieres asegurar tu lugar, reserva hoy y evita quedarte fuera.
        </p>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-primary/20 bg-white/80 p-4 text-sm text-ink/80">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <AlertTriangle size={16} />
              Cupos limitados
            </div>
            <p className="mt-2">Trabajamos con un numero reducido de parejas por mes para cuidar cada detalle.</p>
          </article>

          <article className="rounded-2xl border border-primary/20 bg-white/80 p-4 text-sm text-ink/80">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <Clock3 size={16} />
              Temporada alta 2026
            </div>
            <p className="mt-2">Las fechas para bodas entre marzo y noviembre de 2026 son las primeras en agotarse.</p>
          </article>

          <article className="rounded-2xl border border-primary/20 bg-white/80 p-4 text-sm text-ink/80">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <Clock3 size={16} />
              Descuento vigente
            </div>
            <p className="mt-2">Reserva antes del 30 de abril de 2026 y recibe 20% de descuento en tu invitacion.</p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#contacto"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Reservar ahora
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/demo"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
          >
            Quiero verla primero
          </Link>
        </div>
      </div>
    </section>
  );
}
