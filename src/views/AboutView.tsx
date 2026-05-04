'use client';
import Image from 'next/image';
import {
  History,
  Target,
  Users,
  Award,
  ShieldCheck,
  Activity,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Precision Patents', value: '240+', icon: Target },
  { label: 'Global Facilities', value: '18', icon: Globe },
  { label: 'Application Engineers', value: '500+', icon: Users },
  { label: 'Years of Excellence', value: '35', icon: History },
];

export function AboutView() {
  return (
    <main className="grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-custom mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Award className="w-3 h-3" />
              Heritage of Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-balance leading-tight">
              Engineering the <span className="text-primary">Impossible</span> Since 1989.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
              Hitech was founded on a single principle: that industrial automation should be as
              precise as it is powerful. Today, we are the primary architects of high-stakes motion
              systems for aerospace, medical, and semiconductor manufacturing globally.
            </p>
            <div className="flex flex-wrap gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold tracking-tighter mb-1">{stat.value}</p>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 aspect-square"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Our Facility"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/30 py-24 border-y border-black/5">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 text-balance">
              The Hitech <span className="text-primary">Standard</span>.
            </h2>
            <p className="text-muted-foreground font-medium text-lg">
              Our methodology is built on four pillars of industrial excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Technical Integrity',
                desc: 'No compromises on tolerance. Every component meets aerospace-grade specifications.',
                icon: ShieldCheck,
              },
              {
                title: 'Velocity of Delivery',
                desc: 'Optimized global supply lines ensure mission-critical parts arrive in record time.',
                icon: Zap,
              },
              {
                title: 'Expert Support',
                desc: 'Our support leads are application engineers, not just customer service reps.',
                icon: Activity,
              },
              {
                title: 'Global Scale',
                desc: 'Local presence in 18 countries ensures regional expertise and fast response.',
                icon: Globe,
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-4xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-[#f4f5f7] rounded-[40px] p-8 md:p-12 relative z-10">
              <h3 className="text-2xl font-extrabold tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8">
                Our Mission
              </h3>
              <p className="text-muted-foreground font-medium leading-[1.8] mb-6 italic">
                &#34;We don&apos;t just sell parts; we provide the architectural foundation for the
                next century of industrial automation. Our goal is to make precision accessible to
                every engineering firm, regardless of their scale.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  MN
                </div>
                <div>
                  <p className="text-sm font-extrabold">Marcus Nielsen</p>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    Founder & Chief Architect
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-8 text-balance leading-tight">
              Forging the <span className="text-primary">Future</span> of Automated Intelligence.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Pioneering linear motion solutions for orbital satellites and deep-space hardware.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Developing the world&lsquo;s most responsive surgical-grade haptic feedback
                  actuators.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Redefining edge computing integration for zero-latency industrial control loops.
                </p>
              </div>
            </div>
            <button className="mt-10 flex items-center gap-2 group text-primary font-bold text-sm tracking-widest uppercase">
              Explore our technical papers{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
