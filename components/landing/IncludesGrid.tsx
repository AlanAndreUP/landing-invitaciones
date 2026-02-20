'use client';

import { motion } from 'framer-motion';
import {
  CalendarDays,
  Crown,
  Gift,
  Hotel,
  Images,
  ImageIcon,
  ListChecks,
  MailCheck,
  MapPin,
  Shirt,
  Timer
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const includeItems = [
  {
    title: 'ElegantHeader',
    description: 'Logo, foto principal, nombres en mayusculas y anuncio configurable.',
    icon: Crown
  },
  {
    title: 'Hero',
    description: 'Fecha destacada + tarjetas de ceremonia y recepcion con ubicacion.',
    icon: ImageIcon
  },
  {
    title: 'Timeline',
    description: 'Itinerario alternado con hora, icono y actividad por bloque.',
    icon: ListChecks
  },
  {
    title: 'DressCode',
    description: 'Vestimenta formal, reglas por genero y colores restringidos.',
    icon: Shirt
  },
  {
    title: 'GiftRegistry',
    description: 'Mesa de regalo, enlaces de tienda y datos bancarios con copiar.',
    icon: Gift
  },
  {
    title: 'RSVP',
    description: 'Formulario, fecha limite, correo de exito y calendario compartible.',
    icon: MailCheck
  },
  {
    title: 'Location (opcional)',
    description: 'Mapa, estacionamiento, transporte y navegacion directa.',
    icon: MapPin
  },
  {
    title: 'Countdown (opcional)',
    description: 'Cuenta regresiva en dias, horas, minutos y segundos.',
    icon: Timer
  },
  {
    title: 'Gallery (opcional)',
    description: 'Galeria de fotos con visualizacion ampliada tipo lightbox.',
    icon: Images
  },
  {
    title: 'Hoteles (opcional)',
    description: 'Tarjetas con distancia, precio, amenidades y contacto.',
    icon: Hotel
  },
  {
    title: 'Footer',
    description: 'Fecha, tagline, copyright e iniciales de la pareja.',
    icon: CalendarDays
  }
];

export function IncludesGrid() {
  return (
    <section id="incluye" className="section-shell pt-10">
      <SectionHeading
        eyebrow="Que incluye"
        title="Todas las secciones de una invitacion premium, listas para vender"
        description="Cada plantilla replica el flujo real del evento y puede activarse por modulos opcionales sin rehacer diseno."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {includeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="paper-surface p-5"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
