'use client';

import React from 'react';
import Image from 'next/image';
import {
  Zap,
  Settings,
  Cpu,
  Activity,
  ShieldCheck,
  Globe,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Database,
  Layers,
  Component,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const solutions = [
  {
    title: 'Precision Motion Systems',
    desc: 'Surgical-grade servo actuators and closed-loop positioning systems for sub-micron manufacturing.',
    icon: Settings,
    color: 'primary',
    features: ['Sub-micron tolerance', 'Real-time feedback', 'EtherCAT integrated'],
  },
  {
    title: 'Industrial Automation',
    desc: 'Complete PLC-driven architectures with advanced HMI integration and edge computing nodes.',
    icon: Cpu,
    color: 'primary',
    features: ['Edge processing', 'Zero-latency logic', 'Modular expansion'],
  },
  {
    title: 'Optical Process Control',
    desc: 'High-resolution vision systems and spectral analyzers for real-time quality assurance.',
    icon: Activity,
    color: 'primary',
    features: ['4K Spectral Analysis', 'AI anomaly detection', 'High-speed inspection'],
  },
  {
    title: 'Fluid Dynamics Control',
    desc: 'Micro-valve arrays and precision pump systems for chemical and biological processing.',
    icon: Layers,
    color: 'primary',
    features: ['Micro-fluidic precision', 'Corrosion resistant', 'Smart-flow algorithms'],
  },
  {
    title: 'Data Nexus Platform',
    desc: 'Unified industrial IoT stack for monitoring global facility performance with predictive analytics.',
    icon: Database,
    color: 'primary',
    features: ['Predictive Maintenance', 'Global synchronization', '256-bit security'],
  },
  {
    title: 'Custom Machining',
    desc: 'High-precision manufacturing of bespoke titanium and ceramic components to aerospace specs.',
    icon: Component,
    color: 'primary',
    features: ['Bespoke fabrication', 'Specialty materials', 'Rapid prototyping'],
  },
];

export function SolutionsView() {
  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-custom py-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Zap className="w-3 h-3" />
              Technical Architectures
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-balance leading-tight">
              High-Tech <span className="text-primary">Ecosystems</span> for Modern Industry.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
              We engineer comprehensive B2B solutions that seamlessly integrate precision hardware
              with advanced control logic. Redefining industrial performance through technical
              excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="machined-gradient text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Request Technical Case Study
              </button>
              <Link
                href="/contact"
                className="bg-white border border-black/5 px-8 py-4 rounded-2xl font-bold hover:bg-black/5 transition-all"
              >
                Consult an Engineer
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 aspect-[16/10]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={1656}
              height={1035}
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4">Core Competencies</h2>
            <p className="text-muted-foreground font-medium text-lg">
              Specialized engineering vertical for mission-critical industrial environments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5 flex flex-col hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <sol.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors">
                {sol.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed flex-grow">
                {sol.desc}
              </p>

              <div className="space-y-3 mb-8">
                {sol.features.map((feat, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary/40" />
                    {feat}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-xs font-extrabold text-primary hover:gap-3 transition-all uppercase tracking-widest">
                Full Specifications <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="container-custom mt-24">
        <div className="bg-secondary/30 rounded-[40px] p-12 md:p-20 border border-black/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5">
                  <Activity className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-extrabold text-sm mb-2">Edge Computing</h4>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Ultra-low latency processing for real-time control loops.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5">
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-extrabold text-sm mb-2">Hard-Coded Security</h4>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Silicon-level encryption for mission-critical infrastructure.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-extrabold text-sm mb-2">Global Sync</h4>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Synchronize facility parameters across global networks instantly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5">
                  <Layers className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-extrabold text-sm mb-2">Modular OS</h4>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Scale your industrial stack with ease via our proprietary API.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-8 leading-tight">
                Integrated <span className="text-primary">Intelligence</span> for the Industrial
                Nexus.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
                Our solutions go beyond hardware. We provide a unified operating environment that
                connects every sensor, actuator, and processor within your facility to a central
                intelligence hub.
              </p>
              <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-black/90 transition-all">
                Technical Whitepaper <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
