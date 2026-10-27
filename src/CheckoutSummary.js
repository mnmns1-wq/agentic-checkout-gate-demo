/**
 * Fictional checkout summary helpers for PR / Actions UI capture.
 * Invented data only — no merchant identifiers.
 */

export function formatMoney(amount, currency = 'USD') {
  const n = Number(amount);
  if (Number.isNaN(n)) return `${currency} 0.00`;
  return `${currency} ${n.toFixed(2)}`;
}

/**
 * Returns a plain view-model for a checkout summary card.
 * Tax line added on this branch for the fictional agent PR.
 */
export function buildCheckoutSummary({
  currency = 'USD',
  subtotal = '100.00',
  tax = '8.00',
  total = '108.00',
  guestLabel = 'Guest',
} = {}) {
  return {
    title: 'Trip summary',
    guestLabel,
    currency,
    lines: [
      { label: 'Subtotal', testId: 'subtotal', value: formatMoney(subtotal, currency) },
      { label: 'Tax', testId: 'tax-line', value: formatMoney(tax, currency) },
      { label: 'Total due', testId: 'total-due', value: formatMoney(total, currency) },
    ],
    primaryAction: 'Continue to payment',
  };
}

export default buildCheckoutSummary;
