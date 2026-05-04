'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Filter, Grid2X2, List, Search } from 'lucide-react';
import { formatCatalogPrice } from '@/utils/format-price';
import { cn } from '@/utils';
import type { CatalogData } from '@/types/catalog';

const ITEMS_PER_PAGE = 9;

type ViewMode = 'grid' | 'list';

type ProductsViewProps = {
  catalogData: CatalogData;
  initialBrand?: string;
  initialSearch?: string;
};

export function ProductsView({ catalogData, initialBrand, initialSearch }: ProductsViewProps) {
  const { items, groups, brands } = catalogData;
  const [selectedGroup, setSelectedGroup] = useState('All Products');
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'All Brands');
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (initialBrand !== undefined) {
      setSelectedBrand(initialBrand || 'All Brands');
      setSelectedGroup('All Products');
      setCurrentPage(1);
    }
    if (initialSearch !== undefined) {
      setSearchQuery(initialSearch || '');
      setCurrentPage(1);
    }
  }, [initialBrand, initialSearch]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredItems = items.filter(item => {
    const matchesGroup = selectedGroup === 'All Products' || item.item_group === selectedGroup;
    const matchesBrand = selectedBrand === 'All Brands' || item.brand === selectedBrand;
    const matchesSearch =
      !normalizedQuery ||
      item.item_name.toLowerCase().includes(normalizedQuery) ||
      item.item_code.toLowerCase().includes(normalizedQuery) ||
      item.item_group.toLowerCase().includes(normalizedQuery);

    return matchesGroup && matchesBrand && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedItems = filteredItems.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  const setGroupAndReset = (group: string) => {
    setSelectedGroup(group);
    setSelectedBrand('All Brands'); // Reset brand when selecting group
    setCurrentPage(1);
  };

  const setBrandAndReset = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedGroup('All Products'); // Reset group when selecting brand
    setCurrentPage(1);
  };

  const setSearchAndReset = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <main className="grow pt-28 pb-20">
      <section className="container-custom">
        <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(175,16,26,0.12),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f6f2ef_100%)] px-4 py-6 shadow-[0_28px_80px_-45px_rgba(0,0,0,0.25)] md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                <span className="h-0.5 w-8 bg-primary" />
                Product Catalog
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                A sharper B2B catalog built around real item data.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Search by model, filter by item group, and browse products in a cleaner wholesale
                layout instead of loading everything as one long list.
              </p>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-black/5 bg-white/90 p-4 backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-secondary/50 p-4">
                  <p className="text-2xl font-extrabold">{items.length}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Items
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/50 p-4">
                  <p className="text-2xl font-extrabold">{groups.length - 1}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Groups
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/50 p-4">
                  <p className="text-2xl font-extrabold">{filteredItems.length}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Results
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-background px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={event => setSearchAndReset(event.target.value)}
                  placeholder="Search by item name, code, or group"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[28px] border border-black/5 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
              <Filter className="h-4 w-4" />
              Categories
            </div>
            <div className="space-y-2">
              {groups.map(group => {
                const count =
                  group === 'All Products'
                    ? items.length
                    : items.filter(item => item.item_group === group).length;

                return (
                  <button
                    key={group}
                    onClick={() => setGroupAndReset(group)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all',
                      selectedGroup === group
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-secondary/40 text-foreground hover:bg-secondary'
                    )}
                  >
                    <span>{group}</span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-[11px]',
                        selectedGroup === group
                          ? 'bg-white/15 text-white'
                          : 'bg-white text-muted-foreground'
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
              <Filter className="h-4 w-4" />
              Brands
            </div>
            <div className="space-y-2">
              {['All Brands', ...brands].map(brand => {
                const count =
                  brand === 'All Brands'
                    ? items.length
                    : items.filter(item => item.brand === brand).length;

                return (
                  <button
                    key={brand}
                    onClick={() => setBrandAndReset(brand)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all',
                      selectedBrand === brand
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-secondary/40 text-foreground hover:bg-secondary'
                    )}
                  >
                    <span>{brand}</span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-[11px]',
                        selectedBrand === brand
                          ? 'bg-white/15 text-white'
                          : 'bg-white text-muted-foreground'
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[linear-gradient(180deg,#101010_0%,#1c1c1c_100%)] p-4 text-white shadow-xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/60">
              Trade Buying
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight">
              Pricing tiers and MOQ are visible where they matter.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Each card now surfaces dealer, wholesale, retail, and minimum order quantity so buyers
              can compare faster.
            </p>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[28px] border border-black/5 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Showing {paginatedItems.length} of {filteredItems.length}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {selectedGroup} {selectedBrand !== 'All Brands' && ` • ${selectedBrand}`}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex rounded-2xl border border-black/5 bg-secondary/30 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'rounded-xl p-2 transition-all',
                    viewMode === 'grid'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted-foreground hover:bg-white/60'
                  )}
                  aria-label="Grid view"
                >
                  <Grid2X2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'rounded-xl p-2 transition-all',
                    viewMode === 'list'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted-foreground hover:bg-white/60'
                  )}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              <div className="hidden items-center gap-2 rounded-2xl border border-black/5 bg-secondary/30 px-4 py-3 text-sm font-semibold text-muted-foreground md:flex">
                Newest in catalog
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedGroup}-${normalizedQuery}-${viewMode}-${safeCurrentPage}`}
              className={cn(
                viewMode === 'grid' ? 'grid gap-3 md:grid-cols-2 xl:grid-cols-3' : 'space-y-5'
              )}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {paginatedItems.map(item => (
                <article
                  key={item.slug}
                  className={cn(
                    'group overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_18px_50px_-32px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(0,0,0,0.35)]',
                    viewMode === 'list' && 'grid gap-0 md:grid-cols-[280px_1fr]'
                  )}
                >
                  <div
                    className={cn(
                      'relative bg-[linear-gradient(180deg,#f9f5f2_0%,#f0f2f7_100%)]',
                      viewMode === 'grid' ? 'aspect-square p-2' : 'h-full min-h-[240px] p-2'
                    )}
                  >
                    <Image
                      fill
                      src={
                        item.images[0] ?? 'https://placehold.co/600x600/f6f2ef/af101a?text=Hitech'
                      }
                      alt={item.item_name}
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary shadow-sm">
                      {item.item_group}
                    </div>
                  </div>

                  <div className="flex flex-col p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          {item.item_code}
                        </p>
                        <Link href={`/products/${item.slug}`} className="mt-2 block">
                          <h2 className="text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {item.item_name}
                          </h2>
                        </Link>
                      </div>
                    </div>

                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {item.shortDescription}
                    </p>

                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="rounded-2xl bg-secondary/30 p-2 text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Dealer
                        </p>
                        <p className="mt-1 font-extrabold text-sm">
                          {formatCatalogPrice(item.priceSummary.dealer)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-secondary/30 p-2 text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Wholesale
                        </p>
                        <p className="mt-1 font-extrabold text-sm">
                          {formatCatalogPrice(item.priceSummary.wholesale)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-secondary/40 p-2 text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Retail
                        </p>
                        <p className="mt-1 font-extrabold text-sm">
                          {formatCatalogPrice(item.priceSummary.retail)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-5">
                      <Link
                        href={`/products/${item.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary/90"
                      >
                        View item
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-black/10 bg-white px-6 py-16 text-center">
              <p className="text-lg font-extrabold tracking-tight">
                No products matched this search.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a broader keyword or switch back to all product groups.
              </p>
            </div>
          ) : null}

          {filteredItems.length > ITEMS_PER_PAGE ? (
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={safeCurrentPage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-foreground transition-all hover:bg-secondary/40 disabled:opacity-50 disabled:hover:bg-white"
                >
                  &larr;
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => {
                  // Only show current page, first, last, and immediate neighbors
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= safeCurrentPage - 1 && page <= safeCurrentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          'flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-bold transition-all',
                          safeCurrentPage === page
                            ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 scale-110'
                            : 'border-black/5 bg-white text-foreground hover:bg-secondary/40'
                        )}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === safeCurrentPage - 2 || page === safeCurrentPage + 2) {
                    return (
                      <span key={page} className="px-1 text-muted-foreground">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-foreground transition-all hover:bg-secondary/40 disabled:opacity-50 disabled:hover:bg-white"
                >
                  &rarr;
                </button>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Page {safeCurrentPage} of {totalPages}
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
