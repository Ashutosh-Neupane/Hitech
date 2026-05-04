import type { CatalogApiItem } from './api.types';

/** Normalized price buckets used in the storefront UI. */
export type CatalogPriceSummary = {
  retail: number | null;
  wholesale: number | null;
  dealer: number | null;
};

export type CatalogSpec = {
  label: string;
  value: string;
};

/**
 * Enriched catalog row for the storefront. Omits `item_group_hierarchy` (large, repeated per row)
 * so RSC payloads and caches stay under Next.js limits.
 */
export type CatalogItem = Omit<CatalogApiItem, 'item_group_hierarchy'> & {
  slug: string;
  images: string[];
  shortDescription: string;
  featureList: string[];
  specificationsList: CatalogSpec[];
  priceSummary: CatalogPriceSummary;
};

/** Server + client shape passed from RSC into views and navigation. */
export type CatalogData = {
  items: CatalogItem[];
  groups: string[];
  brands: string[];
};
