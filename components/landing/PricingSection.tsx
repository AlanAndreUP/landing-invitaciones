import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

const plans = [
  {
    name: 'Esencial',
    price: 'Desde $2,490 MXN',
    description: 'Landing elegante + RSVP con correo de confirmacion.',
    features: ['Secciones base', 'Maps/Waze', 'Countdown opcional', 'Soporte por WhatsApp']
  },
  {
    name: 'Premium',
    price: 'Desde $3,590 MXN',
    description: 'Incluye galeria, hoteles, QR por correo y ajustes visuales a marca.',
    features: ['Todo Esencial', 'Plantillas de correo', 'Integracion QR', 'Boton calendario .ics']
  },
  {
    name: 'Estudio',
    price: 'Cotizacion personalizada',
    description: 'Multiples eventos, copywriting, analytics y branding completo.',
    features: ['Diseno a medida', 'Integraciones adicionales', 'Acompanamiento completo', 'Entrega prioritaria']
  }
];

export function PricingSection() {
  return (
    <section id="precios" className="section-shell py-12">
      <SectionHeading
        eyebrow="Planes"
        title="Vende por paquetes sin rehacer el producto"
        description="Estructura comercial lista para ofrecer una opcion rapida o una version completamente personalizada."
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
              Elegir plan
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
