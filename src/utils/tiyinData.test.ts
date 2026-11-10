import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NAV_LINKS,
  PAIN_POINTS,
  FEATURES_LIST,
  HOW_IT_WORKS_STEPS,
  SUPPORTED_PAYMENT_RAILS,
  formatUzsAmount,
  validateWaitlistContact,
} from './tiyinData.ts';

test('PAIN_POINTS covers the 3 core user pain points in Russian', () => {
  assert.equal(PAIN_POINTS.length, 3);
  assert.deepEqual(
    PAIN_POINTS.map((p) => p.id),
    ['recurring-bills', 'family-transfers', 'cloud-privacy']
  );
});

test('FEATURES_LIST contains all 6 required feature cards', () => {
  assert.equal(FEATURES_LIST.length, 6);
  assert.deepEqual(
    FEATURES_LIST.map((f) => f.id),
    [
      'auto-bills',
      'voice-transfers',
      'bill-detection',
      'on-device-ai',
      'mandatory-confirmation',
      'expense-tracking',
    ]
  );
});

test('HOW_IT_WORKS_STEPS defines the 4-step horizontal process in order', () => {
  assert.equal(HOW_IT_WORKS_STEPS.length, 4);
  assert.deepEqual(
    HOW_IT_WORKS_STEPS.map((s) => s.title),
    ['Регистрация', 'Привязка карт', 'Настройка голоса', 'Ассистент готов']
  );
});

test('SUPPORTED_PAYMENT_RAILS includes Click, Payme, and Uzum', () => {
  assert.equal(SUPPORTED_PAYMENT_RAILS.length, 3);
  assert.deepEqual(
    SUPPORTED_PAYMENT_RAILS.map((r) => r.name),
    ['Click', 'Payme', 'Uzum']
  );
});

test('NAV_LINKS contains all 6 Russian section links', () => {
  assert.equal(NAV_LINKS.length, 6);
});

test('formatUzsAmount formats UZS currency in Russian format', () => {
  assert.equal(formatUzsAmount(200000), '200 000 сум');
  assert.equal(formatUzsAmount(-50), '0 сум');
});

test('validateWaitlistContact validates Telegram handles, UZ phone numbers, and emails', () => {
  assert.equal(validateWaitlistContact('telegram', '@azamat_uz').valid, true);
  assert.equal(validateWaitlistContact('telegram', '+998 90 123-45-67').valid, true);
  assert.equal(validateWaitlistContact('telegram', '!bad!').valid, false);
  assert.equal(validateWaitlistContact('email', 'user@tiyin.uz').valid, true);
  assert.equal(validateWaitlistContact('email', 'invalid-email').valid, false);
});
