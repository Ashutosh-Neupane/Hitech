export default function Login() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Brand Header Section */}
      <header className="pt-12 pb-8 px-6 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <span className="text-3xl font-black tracking-tighter text-primary font-headline">Hitech Precision</span>
          <p className="text-[10px] font-headline uppercase tracking-[0.2em] text-on-surface-variant mt-1">Technical Excellence Guaranteed</p>
        </div>
        <div className="w-full max-w-sm mt-8 aspect-video rounded-xl overflow-hidden shadow-sm">
          <img className="w-full h-full object-cover" alt="Modern high-tech industrial facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf6J9Qvukmg9CdqQtC02lifGd_AxrLOG8c4ATDnMJH5GFtkgVyFtnkkNTgpLkF9Ele0U7PpGikDraOI2kWe0YntEh9ErPaN_rzShKh-a_KQQ51eBDNxd9nbORh3UNdQl08O3CLIGbT1wiiErfWKiq6sJzH1a9U58dKZ6IfTM51PEPml9uqrdvZfYlJxR33NuBA4bk-7ZlG3b5RhHBAY-Y9FJFKFxGcdsJaPgWW-2vol164jS2sqTAfi4cynXK5WuevOr3jq0O-vJBu"/>
        </div>
      </header>

      {/* Dynamic Form Section */}
      <section className="flex-grow px-6 pb-12">
        <div className="max-w-sm mx-auto">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h1 className="font-headline text-2xl font-bold tracking-tight mb-2 text-on-surface">B2B Portal Access</h1>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Enter your credentials to access the industrial procurement engine.</p>
            <form className="space-y-6">
              {/* Input 1 */}
              <div className="space-y-1.5">
                <label className="block font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Business Email</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-lg">mail</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none text-sm font-medium" placeholder="corporate@firm.com" type="email"/>
                </div>
              </div>
              {/* Input 2 */}
              <div className="space-y-1.5">
                <label className="block font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Password</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-lg">lock</span>
                  <input className="w-full pl-10 pr-12 py-3 bg-surface-container-low border-b-2 border-transparent focus:border-secondary transition-all outline-none text-sm font-medium" placeholder="••••••••" type="password"/>
                  <button className="absolute right-3 text-on-surface-variant" type="button">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </div>
                <div className="flex justify-end pt-1">
                  <a className="text-xs text-secondary font-semibold hover:underline" href="#">Forgot security credentials?</a>
                </div>
              </div>
              {/* Primary CTA */}
              <button className="w-full machined-gradient text-on-primary py-4 rounded-lg font-headline font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all" type="submit">
                SECURE LOGIN
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-grow h-[1px] bg-surface-variant/40"></div>
              <span className="px-4 text-[10px] font-bold text-on-surface-variant tracking-widest">OR</span>
              <div className="flex-grow h-[1px] bg-surface-variant/40"></div>
            </div>
            {/* Secondary Action: Register */}
            <div className="space-y-4">
              <h2 className="font-headline text-sm font-bold text-on-surface">New Industrial Partner?</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">Apply for a trade account to access wholesale pricing, net-30 terms, and dedicated technical support.</p>
              <button className="w-full border-2 border-secondary/20 text-secondary py-3.5 rounded-lg font-headline font-bold text-sm tracking-wide hover:bg-secondary/5 transition-colors active:scale-95">
                APPLY FOR TRADE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bento-ish Layout */}
      <section className="bg-surface-container-low py-10 px-6">
        <div className="max-w-sm mx-auto grid grid-cols-2 gap-3">
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center text-center space-y-2">
            <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface">ISO Certified</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center text-center space-y-2">
            <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>encrypted</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface">256-Bit SSL</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col items-center text-center space-y-2 col-span-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">support_agent</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface">Priority B2B Support 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center py-8 px-6 text-center bg-slate-50">
        <div className="text-sm font-bold text-slate-300 mb-4 tracking-tighter">Hitech Precision Architecture</div>
        <p className="font-inter text-xs tracking-tight text-slate-400 mb-6">© 2024 Hitech Precision Architecture. Technical Excellence Guaranteed.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="font-inter text-xs tracking-tight text-slate-500 hover:text-red-600 transition-colors" href="#">Terms of Service</a>
          <a className="font-inter text-xs tracking-tight text-slate-500 hover:text-red-600 transition-colors" href="#">Privacy Policy</a>
          <a className="font-inter text-xs tracking-tight text-slate-500 hover:text-red-600 transition-colors" href="#">Contact Support</a>
        </div>
      </footer>
    </main>
  );
}