import Navigation from "@/components/Navigation";

export default function Solutions() {
  return (
    <>
      <Navigation currentPage="solutions" />

      <main className="pt-24">
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-all p-2">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="machined-gradient text-on-primary px-5 py-2 rounded-lg text-sm font-semibold font-headline shadow-lg hover:opacity-90 transition-all scale-95 active:opacity-80">
            Login
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center px-8 lg:px-24 bg-surface-container-low">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-secondary font-semibold text-xs mb-4 block">Industrial Solutions</span>
              <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tighter text-on-surface leading-tight mb-6">
                Engineered for <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed font-light">
                Comprehensive B2B solutions that integrate precision hardware with advanced software systems for unparalleled industrial performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="machined-gradient text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm flex items-center gap-2 group transition-all">
                  Explore Solutions
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="bg-surface-container-low text-secondary px-8 py-4 rounded-lg font-headline font-bold text-sm hover:bg-surface-container transition-all">
                  Technical Specs
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl">
                <img className="rounded-xl w-full h-[400px] object-cover" alt="Industrial automation solutions" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"/>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 px-8 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Our Solutions</h2>
              <p className="text-on-surface-variant font-light max-w-2xl mx-auto">From motion control to industrial automation, discover solutions that drive your business forward.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Motion Control Systems</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">High-precision servo actuators and controllers for demanding industrial applications.</p>
                <a href="#" className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>

              {/* Solution 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">memory</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Industrial Automation</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Complete automation solutions with PLCs, HMIs, and edge computing capabilities.</p>
                <a href="#" className="text-secondary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>

              {/* Solution 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">analytics</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Data Analytics Platform</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Real-time monitoring and analytics for optimizing industrial processes.</p>
                <a href="#" className="text-tertiary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}