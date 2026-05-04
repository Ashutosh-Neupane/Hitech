import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fetchCatalogData } from '@/services/catalog.service';
import { ProductDetailView } from '@/views/ProductDetailView';

import type { ProductDetailPageProps } from './types';

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const { items } = await fetchCatalogData();
  const item = items.find(i => i.slug === id);

  if (!item) {
    return {
      title: 'Product Not Found | Hitech',
    };
  }

  return {
    title: `${item.item_name} | Hitech`,
    description: item.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const { items } = await fetchCatalogData();
  const item = items.find(i => i.slug === id);

  if (!item) {
    notFound();
  }

  return <ProductDetailView item={item} />;
}
