'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

interface GuestParams {
  guestNames: string;
  displayName: string;
  seats: string;
  rsvpDeadline?: string;
}

const NAME_KEYS = ['name', 'names', 'invitado', 'invitados'];

function getFirstValue(value: string | null): string {
  return value?.trim() ?? '';
}

function normalizeName(rawName: string): string {
  if (!rawName) return '';
  const cleaned = rawName.replace(/\+/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join(' ');
}

export function useGuestParams(): GuestParams {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const rawGuestNames = NAME_KEYS.map((key) => searchParams.get(key)).find(Boolean) ?? '';
    const guestNames = getFirstValue(rawGuestNames);
    const displayName = normalizeName(guestNames) || 'Invitado especial';

    return {
      guestNames,
      displayName,
      seats: searchParams.get('Cinvitado') ?? '2 lugares',
      rsvpDeadline: searchParams.get('fecha') ?? undefined
    };
  }, [searchParams]);
}
