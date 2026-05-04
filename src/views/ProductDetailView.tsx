'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  Layers3,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Tag,
} from 'lucide-react';
import type { CatalogItem } from '@/types/catalog';
import { PRODUCT_PLACEHOLDER_SRC } from '@/constants/images';
import { formatCatalogPrice } from '@/utils/format-price';

type ProductDetailViewProps = {
  item: CatalogItem;
};

export function ProductDetailView({ item }: ProductDetailViewProps) {
  const [activeImage, setActiveImage] = useState(0);
  const minQuantity = item.custom_minimum_order_quantity ?? 1;
  const quantityStep = item.custom_increment_on_quantity ?? 1;
  const [quantity, setQuantity] = useState(minQuantity);

  const specifications = item.specificationsList.slice(0, 12);
  const featureList = item.featureList.slice(0, 8);

  return (
    <main className="flex-grow pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20">
      <div className="container-custom">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to catalog
          </Link>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>{item.item_group}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <section className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-black/5 bg-[linear-gradient(180deg,#f9f5f2_0%,#eef2f8_100%)] shadow-[0_30px_90px_-48px_rgba(0,0,0,0.35)] sm:rounded-[36px]">
              <Image
                src={item.images[activeImage] ?? PRODUCT_PLACEHOLDER_SRC}
                alt={item.item_name}
                width={900}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-square w-full object-contain p-6 sm:p-10"
              />
            </div>

            {item.images.length > 1 ? (
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-4">
                {item.images.map((image, index) => (
                  <button
                    key={`${item.slug}-${index}`}
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-[22px] border bg-white p-3 transition-all ${
                      activeImage === index
                        ? 'border-primary shadow-lg shadow-primary/15'
                        : 'border-black/5 hover:border-primary/30'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${item.item_name} ${index + 1}`}
                      width={100}
                      height={100}
                      className="aspect-square w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </section>

          <section className="flex flex-col">
            <div className="inline-flex w-max items-center rounded-full bg-primary/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
              {item.item_group}
            </div>

            <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
              {item.item_name}
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {item.item_code}
            </p>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              {item.custom_app_description ?? item.shortDescription}
            </p>

            <div className="mt-8 grid gap-4 rounded-[30px] border border-black/5 bg-white p-6 shadow-sm md:grid-cols-3">
              <div className="rounded-2xl bg-secondary/40 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Dealer
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  {formatCatalogPrice(item.priceSummary.dealer)}
                </p>
              </div>
              <div className="rounded-2xl bg-secondary/40 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Wholesale
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  {formatCatalogPrice(item.priceSummary.wholesale)}
                </p>
              </div>
              <div className="rounded-2xl bg-secondary/40 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Retail
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  {formatCatalogPrice(item.priceSummary.retail)}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Minimum Order
                </p>
                <p className="mt-2 text-lg font-extrabold">
                  {item.custom_minimum_order_quantity ?? 'N/A'} {item.stock_uom}
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Quantity Step
                </p>
                <p className="mt-2 text-lg font-extrabold">
                  {item.custom_increment_on_quantity ?? 'N/A'} {item.stock_uom}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-2">
                <Package className="h-3.5 w-3.5" />
                Unit: {item.stock_uom}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-2">
                <Tag className="h-3.5 w-3.5" />
                {item.brand ?? 'Generic / OEM'}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-2">
                <Globe className="h-3.5 w-3.5" />
                {item.country_of_origin ?? 'Origin on request'}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[30px] border border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#f5f0ed_100%)] p-6 shadow-sm md:flex-row md:items-center">
              <div className="flex items-center rounded-2xl border border-black/5 bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(minQuantity, quantity - quantityStep))}
                  disabled={quantity <= minQuantity}
                  className="rounded-xl p-3 hover:bg-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-16 px-4 text-center text-lg font-extrabold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + quantityStep)}
                  className="rounded-xl p-3 hover:bg-secondary/50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                disabled={quantity < minQuantity}
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-extrabold text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to procurement list
              </button>
            </div>
          </section>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
          <section className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Specifications
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight">Technical details</h2>
              </div>
            </div>

            {specifications.length > 0 ? (
              <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                {specifications.map(spec => (
                  <div key={`${item.slug}-${spec.label}`} className="border-b border-black/5 pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Detailed specifications will be added to this product soon.
              </p>
            )}
          </section>

          <aside className="space-y-6">
            <div className="rounded-[32px] bg-[linear-gradient(180deg,#111111_0%,#1d1d1d_100%)] p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-extrabold tracking-tight">Key highlights</h2>
              </div>
              <div className="mt-5 space-y-3">
                {(featureList.length > 0
                  ? featureList
                  : [
                      'Trade-ready pricing tiers',
                      'MOQ and step quantity available',
                      'Structured item-level product data',
                    ]
                ).map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-white/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                Category
              </p>
              <div className="mt-4 rounded-2xl bg-secondary/30 px-4 py-3">
                <p className="font-semibold text-foreground">{item.item_group}</p>
                <Link
                  href={`/products?search=${encodeURIComponent(item.item_group)}`}
                  className="mt-2 inline-block text-xs font-semibold text-primary hover:underline"
                >
                  Browse similar items
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
