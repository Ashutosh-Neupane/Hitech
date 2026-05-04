import type {
  CatalogApiItem,
  CatalogApiResponse,
  CatalogItem,
  CatalogPriceSummary,
  CatalogSpec,
} from '@/types/catalog';

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getPriceSummary(prices: CatalogApiItem['prices']): CatalogPriceSummary {
  const getRate = (name: string) =>
    prices.find(price => price.price_list === name)?.price_list_rate ?? null;

  return {
    retail: getRate('Retail Rate'),
    wholesale: getRate('Wholesale Rate'),
    dealer: getRate('Dealer Rate'),
  };
}

function getImages(item: CatalogApiItem): string[] {
  return [
    item.custom_image_1_link,
    item.custom_image_2_link,
    item.custom_image_3_link,
    item.custom_image_4_link,
    item.custom_image_5_link,
  ].filter((image): image is string => Boolean(image));
}

function getShortDescription(item: CatalogApiItem): string {
  const source =
    item.custom_app_description ?? item.custom_key_features ?? 'Product information coming soon.';
  const lines = source
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  return lines.find(line => !line.endsWith(':')) ?? source;
}

function getFeatureList(value: string | null): string[] {
  if (!value) {
    return [];
  }

  return value
    .split('\n')
    .map(line => line.trim())
    .filter(line => Boolean(line) && !line.endsWith(':'));
}

function getSpecifications(value: string | null): CatalogSpec[] {
  if (!value) {
    return [];
  }

  const specs: CatalogSpec[] = [];
  let lastSpec: CatalogSpec | null = null;

  for (const rawLine of value.split('\n')) {
    const line = rawLine.trim();

    if (!line) {
      continue;
    }

    const separatorIndex = line.indexOf(':');
    if (separatorIndex > 0) {
      const label = line.slice(0, separatorIndex).trim();
      const specValue = line.slice(separatorIndex + 1).trim();
      lastSpec = { label, value: specValue || 'Available on request' };
      specs.push(lastSpec);
      continue;
    }

    if (lastSpec) {
      lastSpec.value = `${lastSpec.value} ${line}`.trim();
    }
  }

  return specs;
}

function mapApiItemToCatalogItem(item: CatalogApiItem): CatalogItem {
  const { item_group_hierarchy: _removedFromPayload, ...rest } = item;
  void _removedFromPayload;
  return {
    ...rest,
    slug: slugify(item.item_code),
    images: getImages(item),
    shortDescription: getShortDescription(item),
    featureList: getFeatureList(item.custom_key_features),
    specificationsList: getSpecifications(item.custom_specifications),
    priceSummary: getPriceSummary(item.prices),
  };
}

export function buildCatalogItems(response: CatalogApiResponse): CatalogItem[] {
  return response.Data.map(mapApiItemToCatalogItem).sort((left, right) =>
    left.item_name.localeCompare(right.item_name)
  );
}

export function buildCatalogGroups(items: CatalogItem[]): string[] {
  return ['All Products', ...new Set(items.map(item => item.item_group))];
}
