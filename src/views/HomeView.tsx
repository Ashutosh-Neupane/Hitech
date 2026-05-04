'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils';
import type { CatalogData } from '@/types/catalog';
import { PRODUCT_PLACEHOLDER_SRC } from '@/constants/images';
import { formatCatalogPrice } from '@/utils/format-price';

type HomeViewProps = {
  catalogData: CatalogData;
};

export function HomeView({ catalogData }: HomeViewProps) {
  const { items, groups } = catalogData;
  const featuredItems = items.slice(0, 8);
  const carouselItems = items.slice(0, 5); // Top 5 items for the hero carousel

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (carouselItems.length === 0) {
      return undefined;
    }
    const n = carouselItems.length;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % n);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <main className="grow pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20 md:pt-[132px] lg:pt-[140px]">
      {/* Product-Centric Hero Carousel */}
      <section className="relative mb-10 w-full md:mb-16">
        <div className="relative min-h-[min(90dvh,640px)] w-full overflow-hidden border-b border-black/5 bg-secondary md:h-[550px] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 mx-auto flex flex-col md:flex-row md:items-stretch container-custom"
            >
              <div className="relative z-10 order-1 flex w-full flex-shrink-0 flex-col justify-center px-4 pb-2 pt-6 md:order-none md:w-1/2 md:py-10 md:pr-4 lg:pr-8">
                <span className="mb-3 inline-block w-max rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                  {carouselItems[currentSlide]?.item_group}
                </span>
                <h1 className="mb-4 line-clamp-4 text-balance text-[clamp(1.35rem,4.5vw,3.75rem)] font-extrabold leading-[1.12] tracking-tight md:line-clamp-3">
                  {carouselItems[currentSlide]?.item_name}
                </h1>
                <div className="mb-6 flex flex-wrap items-center gap-4 sm:mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Wholesale
                    </p>
                    <p className="text-xl font-extrabold text-primary sm:text-2xl">
                      {formatCatalogPrice(carouselItems[currentSlide]?.priceSummary.wholesale ?? 0)}
                    </p>
                  </div>
                  <div className="h-10 w-px bg-black/10" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Retail
                    </p>
                    <p className="text-lg font-bold text-foreground sm:text-xl">
                      {formatCatalogPrice(carouselItems[currentSlide]?.priceSummary.retail ?? 0)}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/products/${carouselItems[currentSlide]?.slug}`}
                  className="flex w-max items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] sm:px-8 sm:py-4"
                >
                  <ShoppingCart className="h-5 w-5 shrink-0" /> Shop now
                </Link>
              </div>
              <div className="relative order-2 mt-2 h-52 w-full shrink-0 sm:h-64 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[58%] lg:w-2/3">
                <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-l from-transparent via-transparent to-white md:block" />
                <Image
                  src={carouselItems[currentSlide]?.images[0] ?? PRODUCT_PLACEHOLDER_SRC}
                  alt={carouselItems[currentSlide]?.item_name || 'Product image'}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-bottom p-4 sm:p-6 md:object-right md:p-10"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  currentSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-black/20 hover:bg-black/40'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentSlide(prev => (prev === 0 ? carouselItems.length - 1 : prev - 1))
            }
            className="absolute left-2 top-[42%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-primary hover:text-white sm:left-3 md:left-4 md:h-12 md:w-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide(prev => (prev + 1) % carouselItems.length)}
            className="absolute right-2 top-[42%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-primary hover:text-white sm:right-3 md:right-4 md:h-12 md:w-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                High-performance network gear and accessories.
              </p>
            </div>
            <Link
              href="/products"
              className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square bg-[linear-gradient(180deg,#f9f5f2_0%,#f0f2f7_100%)] p-6">
                  <Image
                    fill
                    src={item.images[0] ?? PRODUCT_PLACEHOLDER_SRC}
                    alt={item.item_name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
                    {item.item_group}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {item.item_code}
                    </p>
                    <Link href={`/products/${item.slug}`}>
                      <h3 className="font-bold tracking-tight text-foreground line-clamp-2 hover:text-primary transition-colors">
                        {item.item_name}
                      </h3>
                    </Link>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 mb-4">
                    {item.shortDescription}
                  </p>

                  <div className="mt-auto pt-4 border-t border-black/5">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-secondary/30 rounded-xl p-2 text-center">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                          Wholesale
                        </p>
                        <p className="font-extrabold text-sm">
                          {formatCatalogPrice(item.priceSummary.wholesale)}
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-xl p-2 text-center">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                          Retail
                        </p>
                        <p className="font-extrabold text-sm">
                          {formatCatalogPrice(item.priceSummary.retail)}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/products/${item.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-black/5 hover:bg-primary hover:text-white text-foreground py-2.5 rounded-xl text-sm font-bold transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" /> View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container-custom">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Shop by category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you need by browsing through our structured product groups.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {groups
              .filter(g => g !== 'All Products')
              .map(group => {
                const count = items.filter(item => item.item_group === group).length;
                return (
                  <Link
                    key={group}
                    href={`/products?search=${encodeURIComponent(group)}`}
                    className="group flex min-w-[min(100%,200px)] max-w-full flex-[1_1_140px] flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:min-w-[200px] sm:p-6"
                  >
                    <h3 className="font-bold text-center mb-2 group-hover:text-primary transition-colors">
                      {group}
                    </h3>
                    <span className="bg-secondary text-muted-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {count} {count === 1 ? 'Item' : 'Items'}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
