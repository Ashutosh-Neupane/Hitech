'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import {
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Building2,
  Lock,
  Zap,
  Trash2,
  ChevronLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const cartItems = [
  {
    id: 'p1',
    name: 'Alpha-Series Laser Transducer',
    sku: 'HP-9022-TX',
    price: 2450.0,
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'Titanium Alloy Mounting Assembly',
    sku: 'HP-V4-Z',
    price: 580.0,
    quantity: 5,
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
];

export function CheckoutView() {
  const [step, setStep] = useState(1);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const shipping = 150.0;
  const total = subtotal + tax + shipping;

  return (
    <main className="grow pt-32 pb-24">
      <div className="container-custom">
        {/* Breadcrumbs / Steps */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/products"
            className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> CONTINUE PROCUREMENT
          </Link>
          <div className="flex items-center gap-4">
            {[
              { n: 1, label: 'Review' },
              { n: 2, label: 'Logistics' },
              { n: 3, label: 'Payment' },
            ].map(s => (
              <div key={s.n} className="flex items-center gap-2">
                <div
                  className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all',
                    step >= s.n ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'
                  )}
                >
                  {s.n}
                </div>
                <span
                  className={cn(
                    'text-[10px] font-extrabold uppercase tracking-widest',
                    step >= s.n ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {s.label}
                </span>
                {s.n < 3 && <div className="w-8 h-[1px] bg-muted-foreground/20"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Checkout Area */}
          <div className="lg:col-span-8 space-y-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h2 className="text-3xl font-extrabold tracking-tighter mb-8">
                    Procurement Review
                  </h2>
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div
                        key={item.id}
                        className="bg-white rounded-4xl p-6 border border-black/5 flex items-center gap-6 group hover:shadow-xl transition-all duration-500"
                      >
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink border border-black/5">
                          <Image
                            width={96}
                            height={96}
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-extrabold text-sm">{item.name}</h3>
                            <button className="text-muted-foreground hover:text-destructive transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                            {item.sku}
                          </p>
                          <div className="flex justify-between items-end">
                            <div className="flex items-center bg-secondary rounded-xl p-0.5">
                              <button className="w-8 h-8 flex items-center justify-center font-bold text-xs hover:bg-white rounded-lg transition-all">
                                -
                              </button>
                              <span className="w-8 text-center text-xs font-bold">
                                {item.quantity}
                              </span>
                              <button className="w-8 h-8 flex items-center justify-center font-bold text-xs hover:bg-white rounded-lg transition-all">
                                +
                              </button>
                            </div>
                            <p className="font-extrabold text-sm">
                              ₹${(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-extrabold tracking-tighter">Logistics Interface</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                        Certified Facility Name
                      </label>
                      <input
                        type="text"
                        placeholder="Stratos Distributed Lab 4"
                        className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                        Delivery Priority
                      </label>
                      <select className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                        <option>Global Express (3-5 Days)</option>
                        <option>Standard Freight (7-14 Days)</option>
                        <option>Critical Same-Day (Regional only)</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                        Coordinates / Hub Address
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Full industrial delivery address, including loading dock specifications..."
                        className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-extrabold tracking-tighter">Financial Settlement</h2>
                  <div className="bg-black text-white rounded-[32px] p-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex justify-between items-start mb-12">
                      <CreditCard className="w-10 h-10 text-primary" />
                      <Building2 className="w-8 h-8 opacity-40" />
                    </div>
                    <div className="relative z-10 space-y-6">
                      <div className="space-y-1">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] opacity-40">
                          Encrypted Enterprise Card
                        </p>
                        <p className="text-2xl font-bold tracking-[0.2em]">•••• •••• •••• 4902</p>
                      </div>
                      <div className="flex gap-12">
                        <div className="space-y-1">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] opacity-40">
                            Validator
                          </p>
                          <p className="text-sm font-bold">ALEX STRATOS</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] opacity-40">
                            Expiration
                          </p>
                          <p className="text-sm font-bold">06/28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="text-[10px] font-extrabold text-primary uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-all">
                    <Zap className="w-4 h-4 fill-current" /> ADD ALTERNATIVE SETTLEMENT METHOD
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-12 border-t border-black/5 flex justify-between gap-6">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-5 rounded-2xl font-extrabold text-sm border border-black/10 hover:bg-black/5 transition-all"
                >
                  BACK
                </button>
              )}
              <button
                onClick={() => (step < 3 ? setStep(step + 1) : null)}
                className="flex-grow machined-gradient text-white py-5 rounded-2xl font-extrabold text-base shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
              >
                {step === 3 ? 'AUTHORIZE PROCUREMENT' : 'CONTINUE TO NEXT PHASE'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl border border-black/5 space-y-8 sticky top-32">
              <h3 className="text-xl font-extrabold tracking-tight">Order Architecture</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground">Procurement subtotal</span>
                  <span className="font-extrabold">₹${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground">Certified industrial tax (12%)</span>
                  <span className="font-extrabold">₹${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground">Global express logistics</span>
                  <span className="font-extrabold">₹${shipping.toLocaleString()}</span>
                </div>
                <div className="h-[1px] bg-black/5 w-full"></div>
                <div className="flex justify-between items-center text-xl font-extrabold">
                  <span className="tracking-tight">Total Settlement</span>
                  <span className="text-primary">₹${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-6 bg-secondary/30 rounded-3xl space-y-4">
                <div className="flex gap-4">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                    Encrypted via 256-bit AES industrial architecture. Your financial data is never
                    stored locally.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Lock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                    Transaction authorized under global industrial trade protocols.
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-6 opacity-30 grayscale saturate-0">
                <Image
                  width={40}
                  height={16}
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  className="h-4"
                  alt="Visa"
                />
                <Image
                  width={40}
                  height={24}
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  className="h-6"
                  alt="Mastercard"
                />
                <div className="h-6 w-[1px] bg-black/20"></div>
                <div className="text-[10px] font-extrabold uppercase tracking-tighter">
                  SECURE NEXUS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
