import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

const plans = [
  {
    name: 'Esencial',
    price: 'Desde $2,490 MXN',
    description: 'Ideal para novios que quieren una invitacion digital de boda elegante y lista para compartir.',
    features: ['Diseno romantico', 'Confirmacion de asistencia', 'Envio rapido', 'Soporte por WhatsApp']
  },
  {
    name: 'Premium',
    price: 'Desde $3,590 MXN',
    description: 'La opcion favorita para parejas que buscan una experiencia mas completa y exclusiva.',
    features: ['Todo Esencial', 'Secciones adicionales', 'Ajustes de estilo', 'Prioridad de entrega']
  },
  {
    name: 'Signature',
    price: 'Cotizacion personalizada',
    description: 'Para bodas con alto nivel de personalizacion y una presentacion totalmente a medida.',
    features: ['Diseno exclusivo', 'Asesoria personalizada', 'Acompanamiento cercano', 'Entrega premium']
  }
];

export function PricingSection() {
  return (
    <section id="precios" className="section-shell py-12">
      <SectionHeading
        eyebrow="Precios"
        title="Invitaciones digitales de boda: opciones para reservar hoy"
        description="Elige la opcion que mejor encaja con tu estilo, presupuesto y fecha de boda."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`paper-surface flex h-full flex-col p-6 ${
              index === 1 ? 'ring-2 ring-accent/50' : ''
            }`}
          >
            <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
            <p className="mt-2 text-sm text-primary">{plan.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{plan.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              {plan.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-primary/15 bg-white/70 px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#contacto"
              className="focus-ring mt-6 inline-flex justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Reservar esta opcion
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
