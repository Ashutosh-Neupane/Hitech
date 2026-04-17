import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <>
      <Navigation currentPage="about" />

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
        <section className="relative min-h-[500px] flex items-center px-8 lg:px-24 bg-surface-container-low">
          <div className="w-full max-w-7xl mx-auto text-center">
            <span className="font-label uppercase tracking-[0.2em] text-secondary font-semibold text-xs mb-4 block">Our Story</span>
            <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tighter text-on-surface leading-tight mb-6">
              Precision <span className="text-primary">Engineering</span> Since 1995
            </h1>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              For over two decades, Hitech Precision has been at the forefront of industrial innovation, delivering cutting-edge solutions that power the world's most demanding manufacturing operations.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-8 lg:px-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold font-headline text-primary mb-2">25+</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold font-headline text-primary mb-2">12k+</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Industrial Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold font-headline text-primary mb-2">500+</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold font-headline text-primary mb-2">24/7</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-8 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-6">Our Mission</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  To empower industrial excellence through precision-engineered solutions that combine cutting-edge technology with unparalleled reliability. We believe that every component we manufacture contributes to building a more efficient and sustainable industrial future.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                    <span className="text-on-surface font-medium">ISO 9001 Certified Quality</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>engineering</span>
                    </div>
                    <span className="text-on-surface font-medium">Expert Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-tertiary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>handshake</span>
                    </div>
                    <span className="text-on-surface font-medium">Trusted Global Partnerships</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl">
                  <img className="rounded-xl w-full h-[400px] object-cover" alt="Manufacturing facility" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-8 lg:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Leadership Team</h2>
            <p className="text-on-surface-variant font-light mb-16 max-w-2xl mx-auto">Meet the experts driving innovation at Hitech Precision.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                <div className="w-20 h-20 bg-surface-dim rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface text-3xl">person</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">Dr. Sarah Chen</h3>
                <p className="text-secondary text-sm font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-on-surface-variant text-sm">Leading R&D with 20+ years in precision engineering and automation systems.</p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                <div className="w-20 h-20 bg-surface-dim rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface text-3xl">person</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">Michael Rodriguez</h3>
                <p className="text-secondary text-sm font-semibold mb-4">VP of Operations</p>
                <p className="text-on-surface-variant text-sm">Overseeing global manufacturing operations and quality assurance programs.</p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                <div className="w-20 h-20 bg-surface-dim rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface text-3xl">person</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">Jennifer Park</h3>
                <p className="text-secondary text-sm font-semibold mb-4">Director of Sales</p>
                <p className="text-on-surface-variant text-sm">Building strategic partnerships and driving business development worldwide.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}