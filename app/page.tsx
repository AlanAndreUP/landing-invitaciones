import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { BlogSupportSection } from '@/components/landing/BlogSupportSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { LandingHero } from '@/components/landing/LandingHero';
import { PaperCut } from '@/components/landing/PaperCut';
import { PricingSection } from '@/components/landing/PricingSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { UrgencySection } from '@/components/landing/UrgencySection';

export const metadata: Metadata = {
  title: 'Invitaciones Digitales de Boda Elegantes | Reserva Hoy',
  description:
    'Invitaciones digitales de boda elegantes con confirmacion de asistencia. Sorprende a tus invitados y reserva hoy con precio especial.'
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <LandingHero />
      <PaperCut />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSupportSection />
      <UrgencySection />
      <ContactSection />
    </main>
  );
}
