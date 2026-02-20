import type { Metadata } from 'next';
import { Suspense } from 'react';
import weddingData from '@/data/wedding.json';
import { DemoInvitation } from '@/components/invitation/DemoInvitation';
import type { WeddingData } from '@/types/wedding';

export const metadata: Metadata = {
  title: 'Demo de Invitacion Digital de Boda',
  description: 'Version de demostracion de la invitacion digital elegante con RSVP y funcionalidades interactivas.'
};

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando invitación...</div>}>
      <DemoInvitation data={weddingData as WeddingData} />
    </Suspense>
  );
}
