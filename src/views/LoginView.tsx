'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Lock,
  Eye,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  Building2,
  LockKeyhole,
} from 'lucide-react';
import { motion } from 'framer-motion';

export function LoginView() {
  return (
    <main className="flex-grow flex items-center justify-center p-6 bg-[#f8f9fa] min-h-screen">
      <div className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-[0_32px_120px_-20px_rgba(0,0,0,0.15)] border border-black/5">
        {/* Left Side: Branding/Visual */}
        <div className="hidden lg:flex flex-col justify-between p-16 machined-gradient text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-20 text-xs font-extrabold uppercase tracking-widest group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Terminal
            </Link>

            <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
              Secure <span className="opacity-60 text-black">Nexus</span> Access.
            </h2>
            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-sm">
              Authenticate your enterprise identity to access the B2B procurement engine and
              technical repository.
            </p>
          </div>

          <div className="relative z-10 space-y-6 bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/60">
                  Encryption Standard
                </p>
                <p className="text-xs font-bold text-white">AES-256 Industrial Grade</p>
              </div>
            </div>
            <div className="h-[1px] bg-white/10 w-full"></div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <LockKeyhole className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/60">
                  Access Protocol
                </p>
                <p className="text-xs font-bold text-white">Multi-Factor Hardware Auth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group hover:scale-110 transition-transform duration-500">
              <Building2 className="w-8 h-8 transition-all" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Partner Login</h1>
            <p className="text-muted-foreground font-medium text-sm">
              Welcome back. Enter your corporate credentials.
            </p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-1">
                Enterprise Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="name@corporation.tech"
                  className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 pl-14 pr-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Master Key
                </label>
                <button
                  type="button"
                  className="text-[10px] font-extrabold uppercase tracking-widest text-primary hover:opacity-70"
                >
                  Reset Access
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-[#f4f5f7] border-none rounded-2xl py-5 pl-14 pr-14 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  type="button"
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-primary transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg border-2 border-[#f4f5f7] text-primary focus:ring-primary transition-all"
              />
              <span className="text-xs font-bold text-muted-foreground">
                Keep session active for 24 hours
              </span>
            </div>

            <button
              type="submit"
              className="w-full machined-gradient text-white py-6 rounded-2xl font-extrabold text-base shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
            >
              AUTHENTICATE
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-black/5 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">New industrial partner?</p>
            <button className="text-xs font-extrabold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
              REQUEST ENTERPRISE ACCESS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
