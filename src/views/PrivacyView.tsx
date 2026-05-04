'use client';

import React from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  Cookie,
  CheckCircle2,
  FileText,
  Trash2,
  Database,
  Server,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function PrivacyView() {
  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Shield className="w-5 h-5" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
              Legal Architecture v4.2
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-balance leading-tight">
            Privacy Policy & <br />
            <span className="text-primary">Technical</span> Security.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            Last updated: June 14, 2024. This document defines our rigorous protocols for data
            integrity and corporate confidentiality within the Hitech ecosystem.
          </p>
        </header>

        <div className="space-y-12">
          {/* Section 1: Data Protection BENTO */}
          <div className="grid md:grid-cols-12 gap-8">
            <motion.section
              className="md:col-span-12 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-black/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Database className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Data Protection Protocols
                </h2>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground font-medium leading-relaxed space-y-4">
                <p>
                  At Hitech, we implement enterprise-grade encryption for all transmitted data. Our
                  infrastructure is designed to exceed industry standards for B2B security, ensuring
                  that every byte of information—from attendance logs to biometric data—is
                  obfuscated at rest.
                </p>
                <p>
                  We do not store plain-text passwords or unencrypted biometric templates. Our
                  "Precision Security" model utilizes asynchronous hashing to maintain the highest
                  level of integrity.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="md:col-span-7 bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-black/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">Corporate Confidentiality</h2>
              </div>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Your industrial blueprints, order histories, and procurement patterns are treated as
                "Eyes Only" data. We maintain strict non-disclosure protocols across our supply
                chain. No third-party data mining is permitted within our verified partner portal.
              </p>
            </motion.section>

            <motion.section
              className="md:col-span-5 bg-secondary/30 rounded-[40px] p-8 md:p-10 border border-black/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">Architectural Cookies</h2>
              </div>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-6">
                Essential session tokens used to maintain architectural stability during your
                procurement experience.
              </p>
              <ul className="space-y-3">
                {['Session Authentication', 'Load Balancing', 'Encrypted Storage'].map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-extrabold text-primary uppercase tracking-widest"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Server Image Callout */}
          <motion.div
            className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border border-black/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              width={2070}
              height={930}
              src="https://images.unsplash.com/photo-1558494949-ef0109121c0b?q=80&w=2070&auto=format&fit=crop"
              alt="Secure Servers"
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-primary" />
                <p className="text-white font-extrabold text-2xl tracking-tighter">
                  Hardened Industrial Nexus
                </p>
              </div>
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-[0.4em]">
                Tier-4 Data Center Architecture
              </p>
            </div>
          </motion.div>

          {/* Section 2: User Rights Rights */}
          <section className="p-12">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-12">
              Universal Data Rights
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary flex-shrink-0 border border-black/5">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight mb-2">Data Portability</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Request a full export of your transaction history and technical logs via the
                    Nexus partner portal at any time.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary flex-shrink-0 border border-black/5">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight mb-2">Nexus Termination</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Request full removal from our ecosystems. Note that legal financial records must
                    be retained per international trade law.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
