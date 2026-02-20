'use client';

import { useEffect, useMemo, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ended: boolean;
}

function calculateCountdown(targetDate: string): CountdownState {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, ended: false };
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(() => calculateCountdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const values = useMemo(
    () => [
      { label: 'Dias', value: timeLeft.days },
      { label: 'Horas', value: timeLeft.hours },
      { label: 'Min', value: timeLeft.minutes },
      { label: 'Seg', value: timeLeft.seconds }
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  if (timeLeft.ended) {
    return (
      <p className="rounded-2xl border border-accent/25 bg-accent/10 px-4 py-3 text-sm font-medium text-primary">
        Hoy es el gran dia. Nos vemos en la boda.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" aria-label="Cuenta regresiva al evento">
      {values.map((item) => (
        <div key={item.label} className="rounded-2xl border border-primary/20 bg-white/80 px-2 py-4 text-center sm:px-4">
          <p className="font-display text-2xl text-primary sm:text-3xl">{item.value}</p>
          <p className="text-xs uppercase tracking-[0.14em] text-ink/65">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
