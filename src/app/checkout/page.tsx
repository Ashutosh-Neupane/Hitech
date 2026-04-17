import Navigation from "@/components/Navigation";

export default function Checkout() {
  return (
    <>
      <Navigation currentPage="checkout" />


      <main className="grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Secure Checkout Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-secondary mb-2">
            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
            <span className="font-label text-xs uppercase tracking-widest font-semibold">Secure B2B Portal</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Review Order & Checkout</h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl">Finalize your procurement request. Prices reflect your contracted corporate discount of 15%.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Cart & Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Line Items */}
            <section className="bg-surface-container-low rounded-xl overflow-hidden p-1">
              <div className="bg-surface-container-lowest rounded-lg p-6">
                <h2 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                  Order Components
                </h2>
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b border-surface-variant/20">
                    <div className="w-24 h-24 bg-surface-container-low rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img alt="Precision Sensor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfzwzUot9kI1fBERzGCyefviK6ODox-HB5hCL9j5Pq77wf3Nrf80ADHNL__TKNzgZS7ZH6KreyC963l8-A3e2Pgv6jMc0BUccYk1_EBA9bougAqUgFsduXmYfYrKc3dXNj6T2sSAw8jVhQQO2JYytYzFeUM4DYxma1xc49ULNXyer7dGo3auj2In1RKtBL9OycSFCe2mjIXfvkrFzKn5NJ8WC4-Olhj-tnKAGSuMBHl4_TCHfzWg5dp5v3n6f0TnUhJwqDp6M_BkDH"/>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-label text-[10px] uppercase tracking-tighter text-secondary font-bold mb-1">SKU: HP-9022-TX</p>
                          <h3 className="font-headline font-bold text-on-surface">Alpha-Series Laser Transducer</h3>
                          <p className="text-sm text-on-surface-variant mt-1">High-frequency industrial calibration unit, 0.001mm tolerance.</p>
                        </div>
                        <p className="font-headline font-bold text-on-surface">$2,450.00</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-1 px-3">
                          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">remove</span></button>
                          <span className="font-bold text-sm min-w-[20px] text-center">04</span>
                          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">add</span></button>
                        </div>
                        <button className="text-on-surface-variant/60 hover:text-error text-xs flex items-center gap-1 transition-colors">
                          <span className="material-symbols-outlined text-base">delete</span> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b border-surface-variant/20">
                    <div className="w-24 h-24 bg-surface-container-low rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img alt="Mounting Bracket" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCF6-AKiDtzhTPxrJptEDdTGJkC8zXKBxSF5nNmzy7w76IqZP36zvNSidZBhz9xYI0kHRROeqavvwGuJB5NQeIx0Bz6FZ7EJMkzwhAnj-scYsQ5tIES_G0W4leY-OkPXKmqtUb11S6iFngZosPwREuGwe6zKVSLeE8zW53FNv3kSStaxkFKPJHtG19wSwaCxqeiqVp_JwfKZTSFaajmUd5n-yDiWSNb7j4yDFqXr6yDiVYHf-s9UsbXPtxgJMc9q8EPD7tunLvCSUX"/>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-label text-[10px] uppercase tracking-tighter text-secondary font-bold mb-1">SKU: MB-V4-Z</p>
                          <h3 className="font-headline font-bold text-on-surface">Titanium Alloy Mounting Assembly</h3>
                          <p className="text-sm text-on-surface-variant mt-1">Reinforced vibration-dampening bracket for heavy machinery.</p>
                        </div>
                        <p className="font-headline font-bold text-on-surface">$580.00</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-1 px-3">
                          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">remove</span></button>
                          <span className="font-bold text-sm min-w-[20px] text-center">12</span>
                          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">add</span></button>
                        </div>
                        <button className="text-on-surface-variant/60 hover:text-error text-xs flex items-center gap-1 transition-colors">
                          <span className="material-symbols-outlined text-base">delete</span> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Logistics Asymmetric Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Info */}
              <section className="bg-surface-container-low rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-headline text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                    Shipping
                  </h2>
                  <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Edit</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Business Name</label>
                    <p className="font-medium text-on-surface">Global Dynamics Corp - HQ</p>
                  </div>
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Facility Address</label>
                    <p className="text-on-surface">882 Tech Valley Parkway, Ste 400<br/>San Francisco, CA 94105, USA</p>
                  </div>
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Attention To</label>
                    <p className="text-on-surface">Dr. Sarah Jenkins (Operations Director)</p>
                  </div>
                </div>
              </section>

              {/* Billing/Tax */}
              <section className="bg-surface-container-low rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-headline text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">receipt_long</span>
                    Billing
                  </h2>
                  <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Edit</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Payment Method</label>
                    <div className="flex items-center gap-3 text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary">account_balance</span>
                      Corporate Net-30 Terms
                    </div>
                  </div>
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Tax Exemption</label>
                    <div className="flex items-center gap-2 bg-tertiary/10 text-tertiary px-2 py-1 rounded w-fit">
                      <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                      <span className="text-[10px] font-bold uppercase">Active Certificate Applied</span>
                    </div>
                  </div>
                  <div>
                    <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">VAT/EIN</label>
                    <p className="text-on-surface">EIN: **-***5542</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Custom Fields */}
            <section className="bg-surface-container-low rounded-xl p-6">
              <h2 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">edit_note</span>
                Order Notes & PO Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Purchase Order Number</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 px-0 py-2 transition-all" placeholder="e.g. PO-2024-001" type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Project Reference</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 px-0 py-2 transition-all" placeholder="Project Quantum Shield" type="text"/>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">Internal Instructions</label>
                <textarea className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-variant focus:border-secondary focus:ring-0 px-0 py-2 transition-all resize-none" placeholder="Fragile handling required. Deliver to Loading Dock 4." rows={2}></textarea>
              </div>
            </section>
          </div>

          {/* Right Column: Summary Sticky */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container-highest/30">
              <div className="p-8 space-y-6">
                <h2 className="font-headline text-xl font-bold border-b border-surface-container pb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Subtotal (16 items)</span>
                    <span className="font-semibold">$16,760.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Corporate Discount (15%)</span>
                    <span className="font-semibold text-primary">-$2,514.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Shipping & Handling</span>
                    <span className="font-semibold">$145.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Estimated Tax</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-surface-container">
                  <div className="flex justify-between items-baseline mb-8">
                    <span className="font-headline font-bold text-lg">Order Total</span>
                    <div className="text-right">
                      <span className="block font-headline text-3xl font-extrabold tracking-tight">$14,391.00</span>
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-medium">Currency: USD</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full machined-gradient text-on-primary py-4 rounded-md font-headline font-bold tracking-tight flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                      Place Order
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="w-full bg-surface-container-low text-secondary py-4 rounded-md font-headline font-bold tracking-tight border border-secondary/20 hover:bg-secondary/5 transition-all">
                      Generate Official Quote (PDF)
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-surface-container-low/50 p-4 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                  <p className="text-[11px] leading-relaxed text-on-surface-variant">
                    Orders are processed under the Master Service Agreement (MSA) dated 01/20/2024. Your designated account manager will review this order within 2 business hours.
                  </p>
                </div>
              </div>
            </div>
            {/* Assistance Card */}
            <div className="mt-6 p-6 bg-secondary/5 rounded-xl border border-secondary/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">support_agent</span>
              </div>
              <div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Need Help?</p>
                <p className="text-sm font-semibold">Contact your Procurement Rep</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto border-t-0 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full">
          <div className="md:col-span-1">
            <span className="text-lg font-bold text-on-surface">Hitech Precision</span>
            <p className="mt-4 text-xs font-inter text-on-surface-variant/60 leading-loose">
              Defining the future of high-frequency precision manufacturing through surgical-grade technical excellence.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-xs tracking-wide uppercase font-bold mb-2">Platform</h4>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Company Info</a>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Business Inquiry</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-xs tracking-wide uppercase font-bold mb-2">Support</h4>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Technical Support</a>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Order Tracking</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-xs tracking-wide uppercase font-bold mb-2">Legal</h4>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Terms of Service</a>
            <a className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all" href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="px-12 py-6 border-t border-on-surface-variant/5">
          <p className="font-inter text-xs tracking-wide uppercase text-on-surface-variant/40">© 2024 Hitech Precision Architecture. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}