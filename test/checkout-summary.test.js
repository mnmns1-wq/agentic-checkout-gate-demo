import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatMoney, buildCheckoutSummary } from '../src/CheckoutSummary.js';

test('formatMoney formats two decimal places', () => {
  assert.equal(formatMoney(12.5, 'USD'), 'USD 12.50');
});

test('formatMoney treats invalid as zero', () => {
  assert.equal(formatMoney('nope', 'USD'), 'USD 0.00');
});

test('buildCheckoutSummary exposes total due line', () => {
  const view = buildCheckoutSummary({ total: '100.00' });
  const total = view.lines.find((l) => l.testId === 'total-due');
  assert.equal(total.value, 'USD 100.00');
  assert.equal(view.lines.some((l) => l.testId === 'tax-line'), false);
});
