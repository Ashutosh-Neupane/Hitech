import type { CatalogItem } from '@/types/catalog';
import { fallbackCatalogResponse } from './fallback-response';
import { buildCatalogGroups, buildCatalogItems } from './transform-catalog';

export const catalogItems: CatalogItem[] = buildCatalogItems(fallbackCatalogResponse);

export const catalogGroups = buildCatalogGroups(catalogItems);

export const catalogBrands = Array.from(
  new Set(catalogItems.map(item => item.brand).filter(Boolean))
) as string[];

export function findCatalogItemBySlug(slug: string): CatalogItem | undefined {
  return catalogItems.find(item => item.slug === slug);
}
