import { HomeView } from '@/views/HomeView';
import { fetchCatalogData } from '@/services/catalog.service';

export default async function HomePage() {
  const catalogData = await fetchCatalogData();
  return <HomeView catalogData={catalogData} />;
}
