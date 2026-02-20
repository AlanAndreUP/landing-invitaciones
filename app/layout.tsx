import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://invitaciones-elegantes.example.com'),
  title: 'Invitaciones de Boda Elegantes | Reserva Tu Fecha',
  description:
    'Una invitacion elegante para organizar tu boda con calma, sorprender a tus invitados y vivir este momento sin estres.',
  keywords: [
    'invitacion digital boda',
    'invitaciones elegantes',
    'organizacion de boda',
    'invitacion para novios',
    'boda moderna'
  ],
  openGraph: {
    title: 'Invitaciones de Boda Elegantes',
    description: 'Sorprende a tus invitados y organiza tu boda con una invitacion que enamora desde el primer clic.',
    type: 'website',
    locale: 'es_MX',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitaciones de Boda Elegantes',
    description: 'La forma mas bella de invitar, organizar y emocionar.',
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
