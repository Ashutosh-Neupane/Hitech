import { ProductsView } from '@/views/ProductsView';
import { fetchCatalogData } from '@/services/catalog.service';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const catalogData = await fetchCatalogData();
  const brand = typeof searchParams.brand === 'string' ? searchParams.brand : undefined;
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined;

  return <ProductsView catalogData={catalogData} initialBrand={brand} initialSearch={search} />;
}
