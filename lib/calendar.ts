interface CalendarPayload {
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
}

function toUtcCalendarDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

export function buildGoogleCalendarUrl(payload: CalendarPayload): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: payload.title,
    dates: `${toUtcCalendarDate(payload.start)}/${toUtcCalendarDate(payload.end)}`,
    location: payload.location,
    details: payload.description
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function createIcsContent(payload: CalendarPayload): string {
  const now = toUtcCalendarDate(new Date());
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Invitaciones Digitales//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${now}@invitacionesdigitales`,
    `DTSTAMP:${now}`,
    `DTSTART:${toUtcCalendarDate(payload.start)}`,
    `DTEND:${toUtcCalendarDate(payload.end)}`,
    `SUMMARY:${escapeIcsText(payload.title)}`,
    `DESCRIPTION:${escapeIcsText(payload.description)}`,
    `LOCATION:${escapeIcsText(payload.location)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}
