'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import type { CatalogData } from '@/types/catalog';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type NavigationProps = {
  catalogData: CatalogData;
};

export default function Navigation({ catalogData }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { items, brands } = catalogData;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchFocused(false);
    }
  };

  const searchResults = items
    .filter(
      item =>
        item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item_code.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3);

  const navItems = [
    ...brands.map(brand => ({
      label: brand,
      href: `/products?brand=${encodeURIComponent(brand)}`,
      hasMegaMenu: true,
      isBrand: true,
    })),
    { label: 'About Us', href: '/about', hasMegaMenu: false, isBrand: false },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm">
        <div className="container-custom py-3">
          <div className="flex flex-col gap-3">
            {/* TOP ROW */}
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="flex shrink-0 items-center">
                <div className="relative h-9 w-[120px] sm:h-10 sm:w-[130px]">
                  <Image
                    src="/logo.jpg"
                    alt="Hitech logo"
                    fill
                    priority
                    sizes="130px"
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* SEARCH — desktop */}
              <div className="relative hidden max-w-2xl flex-1 md:block">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search products..."
                    className="w-full pl-5 pr-12 py-3 text-sm rounded-full border border-black/10 bg-secondary/40 outline-none focus:ring-4 focus:ring-primary/10"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full">
                    <Search className="w-4 h-4" />
                  </button>
                </form>

                {/* SEARCH DROPDOWN */}
                {isSearchFocused && searchQuery.length > 1 && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border">
                    {searchResults.length ? (
                      searchResults.map(item => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          className="flex gap-3 p-3 hover:bg-gray-50"
                        >
                          <div className="relative h-10 w-10 shrink-0">
                            <Image
                              src={item.images[0] ?? '/logo.jpg'}
                              alt={item.item_name}
                              fill
                              sizes="40px"
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.item_name}</p>
                            <p className="text-xs text-gray-500">{item.item_group}</p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="p-4 text-sm text-gray-500">No results found</div>
                    )}
                  </div>
                )}
              </div>

              {/* MOBILE MENU */}
              <button
                type="button"
                className="shrink-0 rounded-full p-2 text-foreground lg:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* SEARCH — mobile */}
            <div className="relative w-full md:hidden">
              <form onSubmit={handleSearch} className="relative">
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search products…"
                  className="w-full rounded-full border border-black/10 bg-secondary/40 py-2.5 pl-4 pr-11 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-white"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
              {isSearchFocused && searchQuery.length > 1 && (
                <div className="absolute z-40 mt-2 max-h-[70vh] w-full overflow-auto rounded-xl border bg-white shadow-lg">
                  {searchResults.length ? (
                    searchResults.map(item => (
                      <Link
                        key={item.slug}
                        href={`/products/${item.slug}`}
                        className="flex gap-3 p-3 hover:bg-gray-50"
                      >
                        <div className="relative h-10 w-10 shrink-0">
                          <Image
                            src={item.images[0] ?? '/logo.jpg'}
                            alt={item.item_name}
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">{item.item_name}</p>
                          <p className="truncate text-xs text-gray-500">{item.item_group}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>

            {/* NAVBAR */}
            <nav className="relative hidden gap-2 lg:flex">
              {navItems.map(item => {
                const brandProducts = items.filter(p => p.brand === item.label).slice(0, 12);

                return (
                  <div key={item.label} className="group">
                    {/* NAV LINK */}
                    <Link
                      href={item.href}
                      className={cn(
                        'px-4 py-2 text-sm font-semibold flex items-center gap-1 rounded-full transition',
                        pathname === item.href ||
                          (item.isBrand && pathname.includes(encodeURIComponent(item.label)))
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-black/5 hover:text-foreground'
                      )}
                    >
                      {item.label}
                      {item.hasMegaMenu && (
                        <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>

                    {/* ✅ MEGA MENU (FIXED) */}
                    {item.hasMegaMenu && (
                      <div className="absolute left-0 top-full w-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div className="w-full bg-white border-t border-black/5 shadow-xl">
                          <div className="max-w-7xl mx-auto px-6 py-8">
                            <h3 className="text-lg font-semibold flex items-center gap-2 mb-5">
                              <Zap className="w-5 h-5 text-primary" />
                              {item.label} Products
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                              {brandProducts.map(prod => (
                                <Link key={prod.slug} href={`/products/${prod.slug}`}>
                                  <div className="p-3 border rounded-xl hover:shadow-md transition">
                                    <div className="relative mb-2 aspect-square">
                                      <Image
                                        src={prod.images[0] ?? '/logo.jpg'}
                                        alt={prod.item_name}
                                        fill
                                        sizes="(max-width: 768px) 25vw, 120px"
                                        className="object-contain"
                                      />
                                    </div>

                                    <p className="text-[10px] text-primary">{prod.item_group}</p>

                                    <p className="text-xs font-medium line-clamp-2">
                                      {prod.item_name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-6 text-center">
                              <Link
                                href={item.href}
                                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm"
                              >
                                View All
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute right-0 flex h-full w-[min(100vw-2rem,20rem)] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <span className="text-sm font-bold">Menu</span>
              <button
                type="button"
                className="rounded-full p-2"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-2">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
