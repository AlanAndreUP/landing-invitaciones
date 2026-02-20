import { SectionHeading } from '@/components/ui/SectionHeading';

const stack = [
  'Next.js 14 (App Router)',
  'React 18 + TypeScript',
  'Tailwind CSS + Framer Motion',
  'Lucide React',
  'wedding.json como fuente unica de verdad',
  'Cloudflare Worker + Resend + QR API'
];

export function TechSection() {
  return (
    <section className="section-shell py-12">
      <div className="paper-surface p-8 md:p-10">
        <SectionHeading
          eyebrow="Arquitectura"
          title="Lista para operar y escalar"
          description="La misma base taocnica del producto final: componentes modulares, datos centralizados y endpoints desacoplados."
        />

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {stack.map((item) => (
            <li key={item} className="rounded-xl border border-primary/20 bg-white/70 px-4 py-3 text-sm font-medium text-ink/85">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
