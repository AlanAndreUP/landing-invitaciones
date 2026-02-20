import { SectionHeading } from '@/components/ui/SectionHeading';

const articles = [
  {
    title: 'Invitacion digital vs invitacion impresa: cual conviene para tu boda',
    description: 'Compara costos, tiempos y resultados para tomar una decision inteligente.'
  },
  {
    title: 'Como organizar confirmaciones de asistencia sin estres',
    description: 'Guia practica para tener control de invitados sin perseguir mensajes.'
  },
  {
    title: 'Tendencias de invitaciones de boda elegantes para 2026',
    description: 'Ideas modernas para lograr una imagen sofisticada y memorable.'
  },
  {
    title: 'Cuanto cuesta una invitacion digital de boda y que incluye',
    description: 'Conoce precios reales y elige la opcion que mejor se adapta a tu boda.'
  },
  {
    title: 'Checklist de invitados: guia practica para novias organizadas',
    description: 'Paso a paso para ordenar tu lista y reducir errores de ultimo momento.'
  },
  {
    title: 'Como sorprender a tus invitados antes del gran dia',
    description: 'Acciones simples para crear expectativa y emocion desde la invitacion.'
  }
];

export function BlogSupportSection() {
  return (
    <section className="section-shell py-12">
      <div className="paper-surface p-8 md:p-10">
        <SectionHeading
          eyebrow="Guia para novias"
          title="Contenido que te ayuda a decidir mejor y mas rapido"
          description="Temas pensados para resolver dudas reales de parejas comprometidas que buscan una invitacion elegante y funcional."
        />

        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {articles.map((item) => (
            <li key={item.title} className="rounded-xl border border-primary/20 bg-white/75 px-4 py-3 text-sm text-ink/85">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
