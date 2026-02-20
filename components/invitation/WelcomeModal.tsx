'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeModalProps {
  isOpen: boolean;
  guestName: string;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, guestName, onClose }: WelcomeModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="paper-surface w-full max-w-lg p-8"
          >
            <p className="chip">Bienvenida</p>
            <h2 id="welcome-title" className="mt-4 font-display text-3xl text-ink">
              Hola, {guestName}
            </h2>
            <p id="welcome-description" className="mt-3 text-sm leading-relaxed text-ink/75">
              Nos encantaria contar contigo en este dia tan especial. Explora la invitacion y confirma tu asistencia al final.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="focus-ring mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Abrir invitacion
            </button>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
