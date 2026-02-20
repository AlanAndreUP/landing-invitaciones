import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { LandingHero } from '@/components/landing/LandingHero';
import { PaperCut } from '@/components/landing/PaperCut';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { UrgencySection } from '@/components/landing/UrgencySection';

export const metadata: Metadata = {
  title: 'Invitaciones de Boda Elegantes para Enamorar a Tus Invitados',
  description: 'Haz que tu boda se sienta especial desde el primer clic con una invitacion elegante, organizada y memorable.'
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <LandingHero />
      <PaperCut />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <UrgencySection />
      <ContactSection />
    </main>
  );
}
