/** Shared INR display for catalog surfaces. */
export function formatCatalogPrice(value: number | null): string {
  if (value === null) {
    return 'On request';
  }

  return `₹${value.toFixed(2)}`;
}
