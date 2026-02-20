import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noviosfelices.online'),
  title: 'Invitaciones Digitales de Boda Elegantes | Reserva Hoy',
  description:
    'Invitaciones digitales de boda elegantes con confirmacion de asistencia. Sorprende a tus invitados y reserva hoy con precio especial.',
  keywords: [
    'invitaciones digitales de boda',
    'invitaciones web de boda',
    'invitacion digital boda elegante',
    'invitaciones de boda online',
    'comprar invitacion digital de boda',
    'invitaciones digitales boda precios',
    'confirmacion de asistencia boda',
    'invitaciones boda modernas',
    'invitacion digital para novios',
    'invitaciones boda mexico'
  ],
  openGraph: {
    title: 'Invitaciones Digitales de Boda Elegantes | Reserva Hoy',
    description: 'Invitaciones de boda online elegantes con confirmacion de asistencia y reserva inmediata.',
    type: 'website',
    locale: 'es_MX',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitaciones Digitales de Boda Elegantes',
    description: 'Reserva hoy tu invitacion web de boda y sorprende a tus invitados.',
    images: ['/og-cover.svg']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://api.qrserver.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="preload" as="image" href="/og-cover.svg" />
        <link rel="preload" as="audio" href="/audio/perfect.mp3" />
      </head>
      <body>{children}</body>
    </html>
  );
}
