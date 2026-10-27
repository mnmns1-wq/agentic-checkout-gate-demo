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
 * (No JSX / no framework — keeps CI dependency-free.)
 */
export function buildCheckoutSummary({
  currency = 'USD',
  subtotal = '100.00',
  total = '100.00',
  guestLabel = 'Guest',
} = {}) {
  return {
    title: 'Trip summary',
    guestLabel,
    currency,
    lines: [
      { label: 'Subtotal', testId: 'subtotal', value: formatMoney(subtotal, currency) },
      { label: 'Total due', testId: 'total-due', value: formatMoney(total, currency) },
    ],
    primaryAction: 'Continue to payment',
  };
}

export default buildCheckoutSummary;
