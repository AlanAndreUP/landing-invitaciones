'use client';

import { motion } from 'framer-motion';
import {
  CalendarPlus,
  Cloud,
  MapPin,
  Music2,
  QrCode,
  Send,
  Wallet
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const integrationItems = [
  {
    title: 'Backend RSVP en Cloudflare Worker',
    description: 'POST validado con CORS, respuesta JSON y webhook-ready para automatizaciones.',
    icon: Cloud
  },
  {
    title: 'Correos transaccionales con Resend',
    description: 'Notificacion a novios + confirmacion al invitado con HTML a juego con la paleta.',
    icon: Send
  },
  {
    title: 'QR automatico en correo',
    description: 'URL personalizada + imagen QR usando API de qrserver en el envio final.',
    icon: QrCode
  },
  {
    title: 'Google Maps y Waze',
    description: 'Botones por seccion para ver ubicacion y navegar con coordenadas.',
    icon: MapPin
  },
  {
    title: 'Agregar al calendario',
    description: 'Google Calendar con action=TEMPLATE o descarga de archivo .ics.',
    icon: CalendarPlus
  },
  {
    title: 'Musica y Wallet opcional',
    description: 'Reproductor HTML5 de fondo y tarjeta digital para Wallet/Google Pay.',
    icon: Wallet
  }
];

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="section-shell py-12">
      <div className="paper-surface overflow-hidden p-8 md:p-10">
        <SectionHeading
          eyebrow="Integraciones incluidas"
          title="Todo conectado para vender sin friccion"
          description="La plantilla no es solo visual: ya integra backend, correos, QR y utilidades de asistencia para operar desde el dia uno."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-2xl border border-primary/20 bg-white/75 p-5"
              >
                <div className="inline-flex rounded-lg bg-accent/15 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
          <Music2 size={16} />
          Incluye control de audio (play/pause, volumen, mute) con atributos ARIA para accesibilidad.
        </div>
      </div>
    </section>
  );
}
