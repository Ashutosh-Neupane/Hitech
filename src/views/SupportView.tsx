'use client';

import React from 'react';
import { cn } from '@/utils';
import { MessageSquare, Phone, BookOpen, Zap, HelpCircle, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const supportOptions = [
  {
    title: 'Live Engineering Chat',
    desc: 'Connect instantly with our application engineers for real-time system diagnostics.',
    icon: MessageSquare,
    action: 'Launch Session',
    primary: true,
  },
  {
    title: 'Priority Phone Support',
    desc: 'Speak directly with our technical team for complex hardware integration issues.',
    icon: Phone,
    action: 'View Numbers',
    primary: false,
  },
  {
    title: 'Technical Repository',
    desc: 'Access comprehensive manuals, API guides, and industrial CAD specifications.',
    icon: BookOpen,
    action: 'Browse Docs',
    primary: false,
  },
];

const faqs = [
  {
    q: 'How do I request a custom industrial quote?',
    a: "Contact our sales team through the B2B portal or call our dedicated priority line. We'll assign a specialized application engineer to review your specifications and provide a detailed quote within 24 business hours.",
  },
  {
    q: 'What is the standard warranty for precision components?',
    a: 'All Hitech Precision core components come with an industry-leading 24-month warranty. Extended coverage for high-cycle industrial environments is available via our Platinum Partnership program.',
  },
  {
    q: 'Are CAD files available for all listed hardware?',
    a: 'Yes, we provide .STEP, .DWG, and .STL files for all precision-graded components. These can be downloaded directly from the product specification tabs or our centralized technical repository.',
  },
];

export function SupportView() {
  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-custom py-12 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
            <LifeBuoy className="w-3 h-3" />
            Technical Assistance Nexus
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-balance leading-tight">
            24/7 Expert <span className="text-primary">Nexus</span> Support.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            Our global engineering task force is on standby to ensure your industrial infrastructure
            maintains peak performance. Access documentation, diagnostic tools, and live expertise.
          </p>
        </motion.div>
      </section>

      {/* Support Options Grid */}
      <section className="container-custom mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((opt, i) => (
            <motion.div
              key={i}
              className={cn(
                'rounded-[32px] p-10 border transition-all duration-500 flex flex-col items-center text-center group',
                opt.primary
                  ? 'bg-white border-primary/20 shadow-2xl shadow-primary/10'
                  : 'bg-white border-black/5 shadow-sm hover:shadow-xl'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500',
                  opt.primary ? 'bg-primary text-white' : 'bg-secondary text-primary'
                )}
              >
                <opt.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight mb-4">{opt.title}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">
                {opt.desc}
              </p>
              <button
                className={cn(
                  'w-full py-4 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all',
                  opt.primary
                    ? 'machined-gradient text-white shadow-xl shadow-primary/20'
                    : 'bg-secondary text-primary hover:bg-black/5'
                )}
              >
                {opt.action}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-24 mb-24 border-y border-black/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-4">
                Common Determinations
              </h2>
              <p className="text-muted-foreground font-medium">
                Quick resolution pathways for industrial partners.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm"
                >
                  <h3 className="text-lg font-extrabold tracking-tight mb-3 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Inquiry Form */}
      <section className="container-custom">
        <div className="bg-white rounded-[40px] p-8 md:p-20 shadow-2xl border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold tracking-tighter mb-4">
                Diagnostic Request Form
              </h2>
              <p className="text-muted-foreground font-medium">
                Submit a detailed support ticket to our engineering Nexus.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    Partner Identity
                  </label>
                  <input
                    type="text"
                    placeholder="Authorized Contact Name"
                    className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    Certified Email
                  </label>
                  <input
                    type="email"
                    placeholder="corporate@firm.com"
                    className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                  Priority Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. System Calibration Variance HP-9022"
                  className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                  Technical Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Provide details on system status, error codes, and environmental parameters..."
                  className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full machined-gradient text-white py-6 rounded-2xl font-extrabold text-base shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5" />
                  DISPATCH SUPPORT TICKET
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
