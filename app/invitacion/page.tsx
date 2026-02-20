import type { Metadata } from 'next';
import { Suspense } from 'react';
import { InvitationClient } from './InvitationClient';

export const metadata: Metadata = {
  title: 'Invitacion personalizada',
  description: 'Resumen de confirmacion y detalles del evento para invitado confirmado.'
};

export default function InvitationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando invitacion...</div>}>
      <InvitationClient />
    </Suspense>
  );
}
