import Navigation from "@/components/Navigation";

export default function Contact() {
  return (
    <>
      <Navigation currentPage="contact" />

      {/* Main Content */}
      <main className="pt-24 pb-32 px-4 space-y-8">
        {/* Header Section */}
        <header className="space-y-2">
          <p className="font-headline uppercase tracking-widest text-[10px] text-primary font-bold">Connect With Us</p>
          <h1 className="text-4xl font-extrabold tracking-tight font-headline text-on-surface">Technical Support & Sales</h1>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">Reach out to our expert engineers for custom industrial solutions and system diagnostics.</p>
        </header>

        {/* Click to Call Section */}
        <div className="grid grid-cols-2 gap-3">
          <a className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col gap-3 active:scale-95 transition-transform duration-200" href="tel:+1800HITECH">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">call</span>
            </div>
            <div>
              <p className="font-headline text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">24/7 Support</p>
              <p className="text-primary font-bold text-lg tracking-tight">Call Now</p>
            </div>
          </a>
          <a className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col gap-3 active:scale-95 transition-transform duration-200" href="mailto:support@hitech.com">
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">mail</span>
            </div>
            <div>
              <p className="font-headline text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Technical</p>
              <p className="text-secondary font-bold text-lg tracking-tight">Email Us</p>
            </div>
          </a>
        </div>

        {/* Contact Form Card */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <h2 className="font-headline text-xl font-bold mb-6 text-on-surface">Service Inquiry</h2>
          <form className="space-y-5">
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
              <input className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-container focus:border-secondary outline-none transition-colors text-on-surface font-medium placeholder:text-surface-dim" placeholder="John Doe" type="text"/>
            </div>
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Industry Sector</label>
              <select className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-container focus:border-secondary outline-none transition-colors text-on-surface font-medium appearance-none">
                <option>Manufacturing</option>
                <option>Architecture</option>
                <option>IT Security</option>
                <option>Logistics</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Requirements</label>
              <textarea className="w-full px-0 py-3 bg-transparent border-b-2 border-surface-container focus:border-secondary outline-none transition-colors text-on-surface font-medium placeholder:text-surface-dim" placeholder="Describe your technical needs..." rows={3}></textarea>
            </div>
            <button className="w-full mt-4 py-4 machined-gradient text-on-primary font-headline font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary/20">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* HQ Location Map Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-headline text-xl font-bold text-on-surface">Precision HQ</h2>
              <p className="text-on-surface-variant text-xs">Innovation Hub, Block 7, New York</p>
            </div>
            <div className="bg-tertiary/10 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px] text-tertiary">location_on</span>
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Map View</span>
            </div>
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner border border-outline-variant/10">
            <img alt="Simplified map view" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd1qRFURVnDnKSzUy1F--Zf53kjngJxqQWDyHsnoLOCOoNJH8ns-AT9DVKF58XPTf7ay1zM5K7Gh6qpIPFfNWh8YrPq7Nwlvy3PhSGWufs2RM1cM42j_CDs5EufTANFTjRozE-vQz0FHwcAj7Vn7G6XZlsFmmkp0t8ZUVofKWsfNpiEjMXKCEsP-uXkO5S2XmHeN0RvO_3R0lZN_F4sH_XYJHuZgCbd3ahm6OliKUcLdAZNPyBNhyXTT2D32HWrc7eZQ9CVzv7vZ_N"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent flex items-center justify-center">
              <div className="bg-white p-2 rounded-full shadow-xl">
                <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>push_pin</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center py-8 px-6 text-center mb-20 bg-surface-container-low w-full font-body text-xs tracking-tight text-on-surface-variant">
        <span className="text-sm font-bold text-on-surface mb-4">HITECH PRECISION</span>
        <div className="flex gap-4 mb-4">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
        </div>
        <p>© 2024 Hitech Precision Architecture. Technical Excellence Guaranteed.</p>
      </footer>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 border-t border-surface-variant bg-white/90 backdrop-blur-xl flex justify-around items-center h-20 pb-safe px-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-body text-[10px] font-semibold tracking-wide">Shop</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined">search</span>
          <span className="font-body text-[10px] font-semibold tracking-wide">Search</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-body text-[10px] font-semibold tracking-wide">Account</span>
        </a>
      </nav>
    </>
  );
}