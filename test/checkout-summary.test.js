import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatMoney, buildCheckoutSummary } from '../src/CheckoutSummary.js';

test('formatMoney formats two decimal places', () => {
  assert.equal(formatMoney(12.5, 'USD'), 'USD 12.50');
});

test('formatMoney treats invalid as zero', () => {
  assert.equal(formatMoney('nope', 'USD'), 'USD 0.00');
});

test('buildCheckoutSummary includes tax line', () => {
  const view = buildCheckoutSummary({ tax: '8.00', total: '108.00' });
  const tax = view.lines.find((l) => l.testId === 'tax-line');
  const total = view.lines.find((l) => l.testId === 'total-due');
  assert.equal(tax.value, 'USD 8.00');
  assert.equal(total.value, 'USD 108.00');
});
