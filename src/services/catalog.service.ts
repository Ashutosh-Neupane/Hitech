import { cache } from 'react';
import type { CatalogApiResponse, CatalogData, CatalogItem } from '@/types/catalog';
import { buildCatalogItems, buildCatalogGroups } from '@/data/catalog/transform-catalog';
import {
  catalogItems as fallbackItems,
  catalogGroups as fallbackGroups,
  catalogBrands as fallbackBrands,
} from '@/data/catalog';
import {
  CATALOG_BRAND_HINTS,
  CATALOG_REVALIDATE_SECONDS,
  catalogFetchUsesDataCache,
  getCatalogFetchUrl,
} from '@/config/catalog';

function parseCatalogPayload(data: unknown): CatalogApiResponse | null {
  if (!data || typeof data !== 'object') {
    return null;
  }
  const root = data as Record<string, unknown>;
  if (Array.isArray(root.Data) && root.Data.length > 0) {
    return root as CatalogApiResponse;
  }
  const message = root.message;
  if (message && typeof message === 'object') {
    const m = message as Record<string, unknown>;
    if (Array.isArray(m.Data) && m.Data.length > 0) {
      return m as CatalogApiResponse;
    }
  }
  return null;
}

function inferMissingBrands(items: CatalogItem[]): CatalogItem[] {
  const pool = new Set<string>([...CATALOG_BRAND_HINTS]);
  for (const item of items) {
    if (item.brand) {
      pool.add(item.brand);
    }
  }
  const poolArr = [...pool];
  return items.map(item => {
    if (item.brand) {
      return item;
    }
    const match = poolArr.find(b => item.item_name.toLowerCase().includes(b.toLowerCase()));
    return match ? { ...item, brand: match } : item;
  });
}

function normalizeCatalog(api: CatalogApiResponse): CatalogData {
  let items = inferMissingBrands(buildCatalogItems(api));
  let groups = buildCatalogGroups(items);
  let brands = Array.from(new Set(items.map(i => i.brand).filter(Boolean))) as string[];
  if (brands.length === 0) {
    brands = [...fallbackBrands];
  }
  if (groups.length <= 1) {
    groups = [...fallbackGroups];
  }
  if (items.length === 0) {
    items = [...fallbackItems];
  }
  return { items, groups, brands };
}

function getStaticFallback(): CatalogData {
  return {
    items: [...fallbackItems],
    groups: [...fallbackGroups],
    brands: [...fallbackBrands],
  };
}

async function loadCatalogFromNetwork(): Promise<CatalogData> {
  const url = getCatalogFetchUrl();
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (process.env.CATALOG_API_AUTHORIZATION) {
    headers.Authorization = process.env.CATALOG_API_AUTHORIZATION;
  }

  const useDataCache = catalogFetchUsesDataCache();

  try {
    const res = await fetch(url, {
      headers,
      ...(useDataCache
        ? { next: { revalidate: CATALOG_REVALIDATE_SECONDS } }
        : { cache: 'no-store' }),
    });

    if (!res.ok) {
      return getStaticFallback();
    }

    const data: unknown = await res.json();
    const parsed = parseCatalogPayload(data);
    if (parsed) {
      return normalizeCatalog(parsed);
    }
  } catch {
    // Network / parse errors — fall back below
  }

  return getStaticFallback();
}

/**
 * Per-request dedupe via `cache()`. Catalog refresh uses Next `fetch` + `revalidate` (ISR)
 * when `CATALOG_FETCH_NO_STORE` is not set — avoids `unstable_cache`'s 2MB serialized limit.
 * Always returns data so SSR never hard-fails.
 */
export const fetchCatalogData = cache(async (): Promise<CatalogData> => {
  try {
    return await loadCatalogFromNetwork();
  } catch {
    return getStaticFallback();
  }
});
