/** How often the catalog is re-fetched in the background (ISR). */
export const CATALOG_REVALIDATE_SECONDS = 30;

const DEFAULT_ORIGIN = 'https://hitech.dndts.net';

export function getCatalogApiOrigin(): string {
  return process.env.CATALOG_API_ORIGIN?.replace(/\/$/, '') || DEFAULT_ORIGIN;
}

/** Path under the catalog API origin (Frappe `/api/method/...`). */
export function getCatalogApiPath(): string {
  return process.env.CATALOG_API_PATH || '/api/method/item_list1';
}

export function getCatalogFetchUrl(): string {
  return `${getCatalogApiOrigin()}${getCatalogApiPath()}`;
}

/**
 * When true, catalog `fetch` skips the Next data cache (use if the upstream JSON is huge).
 * ISR still follows `CATALOG_REVALIDATE_SECONDS` only when caching is enabled.
 */
export function catalogFetchUsesDataCache(): boolean {
  return process.env.CATALOG_FETCH_NO_STORE !== '1';
}

/** Optional brands used only to infer `brand` when the API leaves it null. */
export const CATALOG_BRAND_HINTS = [
  'Huawei',
  'LB Link',
  'Nokia',
  'ZTE',
  'Dell',
  'Samsung',
  'Cisco',
  'Redragon',
  'Logitech',
  'Toshiba',
] as const;
