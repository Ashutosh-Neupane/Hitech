'use client';

import React from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Globe,
  Clock,
  ShieldCheck,
  Building2,
  Map as MapIcon,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export function ContactView() {
  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
            <MessageSquare className="w-3 h-3" />
            Global Communications
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-balance leading-tight">
            Technical <span className="text-primary">Support</span> & Global Sales
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            Connect directly with our application engineers for custom industrial architectures,
            system diagnostics, and volume procurement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Connect Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+1800HITECH"
                className="bg-white rounded-[32px] p-8 shadow-xl border border-black/5 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest block mb-2">
                  24/7 Support
                </span>
                <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                  Call Priority
                </h3>
                <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                  +1 800 HITECH <ArrowRight className="w-3 h-3" />
                </p>
              </a>

              <a
                href="mailto:support@hitech.com"
                className="bg-white rounded-[32px] p-8 shadow-xl border border-black/5 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest block mb-2">
                  Technical
                </span>
                <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                  Email Nexus
                </h3>
                <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                  support@hitech.com <ArrowRight className="w-3 h-3" />
                </p>
              </a>
            </div>

            {/* Distribution Centers */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-black/5 space-y-8">
              <h2 className="text-xl font-extrabold tracking-tighter">Global Hubs</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-primary flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm mb-1">North America HQ</h4>
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3" /> Innovation Hub, Block 7, New York
                    </p>
                    <div className="flex items-center gap-2 text-[9px] font-extrabold text-green-600 uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> Open: 08:00 - 18:00 EST
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-primary flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm mb-1">EMEA Distribution</h4>
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3" /> Tech Corridor, Berlin, Germany
                    </p>
                    <div className="flex items-center gap-2 text-[9px] font-extrabold text-blue-600 uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> Open: 09:00 - 17:00 CET
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-4 p-6 bg-secondary/30 rounded-[32px] border border-black/5">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest">
                  Encrypted Communication
                </p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  All support data is processed via 256-bit AES industrial-grade encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Service Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-black/5 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-extrabold tracking-tighter mb-2">Service Inquiry</h2>
                <p className="text-sm text-muted-foreground font-medium mb-10">
                  Submit your technical requirements to be assigned to a specialized application
                  engineer.
                </p>

                <form className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. John Doe"
                      className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      placeholder="j.doe@company.tech"
                      className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      Industry Sector
                    </label>
                    <select className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                      <option>Aerospace & Defense</option>
                      <option>Semiconductor Manufacturing</option>
                      <option>Automotive R&D</option>
                      <option>Medical Systems</option>
                      <option>Renewable Energy</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                      Technical Requirements
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Describe the tolerance levels, environmental conditions, and integration specifications..."
                      className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 px-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="w-full machined-gradient text-white py-6 rounded-2xl font-extrabold text-base shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      SUBMIT ENCRYPTED INQUIRY
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24">
          <div className="flex justify-between items-end mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter mb-2">
                Hitech Precision Hub
              </h2>
              <p className="text-muted-foreground font-medium">
                Coordinate your visit to our innovation center.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest opacity-60">
                <MapIcon className="w-4 h-4" /> Global Coordinates: 40.7128° N, 74.0060° W
              </div>
              <button className="bg-white border border-black/5 rounded-xl px-4 py-2 text-xs font-bold hover:bg-black/5 transition-all">
                Get Directions
              </button>
            </div>
          </div>

          <div className="h-[400px] rounded-[40px] overflow-hidden border border-black/5 shadow-inner relative group">
            <Image
              width={2066}
              height={400}
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              alt="Map Placeholder"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl ring-8 ring-primary/10">
                <MapPin className="w-8 h-8 text-primary animate-bounce" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-xl max-w-xs">
              <h4 className="font-extrabold text-sm mb-2">Hitech Innovation Hub</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Innovation Center, Block 7, Sector 12, Manchester Science Park, UK
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
