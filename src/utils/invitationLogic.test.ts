import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCountdown,
  generateGoogleCalendarUrl,
  padZero,
  COMMUNION_EVENT,
} from './invitationLogic';

test('COMMUNION_EVENT constants match user specifications', () => {
  assert.equal(COMMUNION_EVENT.celebrant, 'Loreany Zapata Zapata');
  assert.equal(COMMUNION_EVENT.dateString, '8 de diciembre de 2026');
  assert.equal(COMMUNION_EVENT.eucharistTime, '10:00 a. m.');
  assert.equal(COMMUNION_EVENT.eucharistLocation, 'Basílica – Cra 26 Nº 242, Santa Rosa de Osos');
  assert.equal(COMMUNION_EVENT.receptionTime, '1:30 p. m.');
  assert.equal(COMMUNION_EVENT.receptionLocation, 'Restaurante Tiempos, Santa Rosa de Osos');
  assert.equal(COMMUNION_EVENT.mapsUrl, 'https://maps.app.goo.gl/wNUr5r8tPXLYmGvz6');
  assert.equal(COMMUNION_EVENT.youtubeVideoId, 'LRsgqFu5c1o');
  assert.equal(
    COMMUNION_EVENT.envelopeGiftMessage,
    'Tu compañía en este día tan especial es el mejor regalo para mí, pero si quieres obsequiarme algo, puedes hacerlo mediante lluvia de sobres.'
  );
  assert.equal(COMMUNION_EVENT.attendanceNotice, 'Por favor confirmar asistencia.');
});

test('calculateCountdown accurately measures future time difference', () => {
  const current = new Date('2026-10-20T20:30:00Z');
  const target = new Date('2026-10-22T22:35:10Z');

  const res = calculateCountdown(target, current);
  assert.equal(res.days, 2);
  assert.equal(res.hours, 2);
  assert.equal(res.minutes, 5);
  assert.equal(res.seconds, 10);
  assert.equal(res.isPast, false);
});

test('calculateCountdown handles past dates gracefully', () => {
  const current = new Date('2027-01-01T00:00:00Z');
  const target = new Date('2026-12-08T15:00:00Z');

  const res = calculateCountdown(target, current);
  assert.equal(res.isPast, true);
  assert.equal(res.days, 0);
  assert.equal(res.hours, 0);
  assert.equal(res.minutes, 0);
  assert.equal(res.seconds, 0);
});

test('generateGoogleCalendarUrl formats correct Google Calendar link', () => {
  const url = generateGoogleCalendarUrl();
  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?action=TEMPLATE'));
  assert.ok(url.includes('Loreany'));
  assert.ok(url.includes('20261208T150000Z'));
});

test('padZero formats single-digit and double-digit integers', () => {
  assert.equal(padZero(5), '05');
  assert.equal(padZero(0), '00');
  assert.equal(padZero(12), '12');
});
