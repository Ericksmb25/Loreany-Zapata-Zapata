/**
 * Pure helper logic for the First Communion invitation application.
 * Decoupled from UI components for unit testing and reliability.
 */

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalMilliseconds: number;
}

export const COMMUNION_EVENT = {
  celebrant: 'Loreany Zapata Zapata',
  title: 'Mi Primera Comunión',
  dateString: '8 de diciembre de 2026',
  eucharistTime: '10:00 a. m.',
  eucharistLocation: 'Basílica – Cra 26 Nº 242, Santa Rosa de Osos',
  receptionTime: '1:30 p. m.',
  receptionLocation: 'Restaurante Tiempos, Santa Rosa de Osos',
  mapsUrl: 'https://maps.app.goo.gl/wNUr5r8tPXLYmGvz6',
  youtubeMusicUrl: 'https://www.youtube.com/watch?v=LRsgqFu5c1o',
  youtubeVideoId: 'LRsgqFu5c1o',
  songTitle: 'La Gloria de Dios',
  songArtists: 'Evaluna & Ricardo Montaner',
  envelopeGiftMessage:
    'Tu compañía en este día tan especial es el mejor regalo para mí, pero si quieres obsequiarme algo, puedes hacerlo mediante lluvia de sobres.',
  attendanceNotice: 'Por favor confirmar asistencia.',
  introMessage:
    'Hay momentos inolvidables que se guardan para siempre en el corazón, y quiero compartir contigo uno de los más especiales de mi vida.',
  musicInspireText:
    'Dale play a la música, deja que comience la magia y acompáñame a celebrar este día tan especial.',
  targetTimestampISO: '2026-12-08T10:00:00-05:00', // Colombia Time (UTC-5)
};

/**
 * Calculates remaining time until target date
 */
export function calculateCountdown(targetDate: Date, currentDate: Date = new Date()): CountdownResult {
  const diff = targetDate.getTime() - currentDate.getTime();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
      totalMilliseconds: 0,
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
    totalMilliseconds: diff,
  };
}

/**
 * Generates a Google Calendar event creation URL for the First Communion
 */
export function generateGoogleCalendarUrl(): string {
  const title = encodeURIComponent(`Primera Comunión - ${COMMUNION_EVENT.celebrant}`);
  const details = encodeURIComponent(
    `Eucaristía a las 10:00 a. m. en ${COMMUNION_EVENT.eucharistLocation}.\nRecepción a la 1:30 p. m. en ${COMMUNION_EVENT.receptionLocation}.\n\n${COMMUNION_EVENT.envelopeGiftMessage}`
  );
  const location = encodeURIComponent(`${COMMUNION_EVENT.eucharistLocation}`);
  // 2026-12-08 10:00 to 17:00 COT (UTC-5) -> in UTC: 15:00 to 22:00
  const dates = '20261208T150000Z/20261208T220000Z';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

/**
 * Formats a number with leading zero for elegant clock display
 */
export function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
