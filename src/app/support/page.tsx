import Navigation from "@/components/Navigation";

export default function Support() {
  return (
    <>
      <Navigation currentPage="support" />

      <main className="pt-24">
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-all p-2">
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>
      <button className="machined-gradient text-on-primary px-5 py-2 rounded-lg text-sm font-semibold font-headline shadow-lg hover:opacity-90 transition-all scale-95 active:opacity-80">
        Login
      </button>
    </div >
      </nav >


    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center px-8 lg:px-24 bg-surface-container-low">
        <div className="w-full max-w-7xl mx-auto text-center">
          <span className="font-label uppercase tracking-[0.2em] text-secondary font-semibold text-xs mb-4 block">Technical Support</span>
          <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tighter text-on-surface leading-tight mb-6">
            24/7 <span className="text-primary">Expert</span> Assistance
          </h1>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Get the help you need with our comprehensive support system. From technical documentation to live engineering support.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">chat</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Connect instantly with our technical experts for real-time assistance.</p>
              <button className="machined-gradient text-on-primary px-6 py-3 rounded-lg font-headline font-bold text-sm w-full">
                Start Chat
              </button>
            </div>

            {/* Phone Support */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Phone Support</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Speak directly with our engineering team for complex technical issues.</p>
              <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-headline font-bold text-sm w-full">
                Call Now
              </button>
            </div>

            {/* Documentation */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">library_books</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Documentation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Access comprehensive manuals, guides, and technical specifications.</p>
              <button className="bg-tertiary text-on-tertiary px-6 py-3 rounded-lg font-headline font-bold text-sm w-full">
                Browse Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 lg:px-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-light">Find quick answers to common questions about our products and services.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold mb-3">How do I request a quote for custom components?</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Contact our sales team through the portal or call our dedicated line. We'll work with you to understand your specifications and provide a detailed quote within 24 hours.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold mb-3">What is the warranty period for your products?</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">All Hitech Precision products come with a standard 2-year warranty. Extended warranty options are available for critical applications.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold mb-3">Do you offer on-site installation and training?</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Yes, we provide comprehensive installation services and operator training for all major systems. Our certified technicians ensure proper setup and handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-8 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Contact Support</h2>
            <p className="text-on-surface-variant font-light">Can't find what you're looking for? Send us a message and we'll get back to you.</p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Name</label>
                  <input className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-variant focus:border-secondary outline-none transition-colors text-on-surface font-medium" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email</label>
                  <input className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-variant focus:border-secondary outline-none transition-colors text-on-surface font-medium" type="email" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Subject</label>
                <input className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-variant focus:border-secondary outline-none transition-colors text-on-surface font-medium" type="text" />
              </div>
              <div className="space-y-1">
                <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
                <textarea className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-variant focus:border-secondary outline-none transition-colors text-on-surface font-medium resize-none" rows={4}></textarea>
              </div>
              <button className="w-full machined-gradient text-on-primary py-4 rounded-lg font-headline font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}