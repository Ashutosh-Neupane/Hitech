import Navigation from "@/components/Navigation";

export default function Privacy() {
  return (
    <>
      <Navigation currentPage="privacy" />

      <main className="pt-24 pb-20 px-6 max-w-2xl mx-auto min-h-screen" style={{backgroundColor: '#f8f9fa', backgroundImage: 'radial-gradient(at 0% 0%, rgba(175, 16, 26, 0.03) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 95, 175, 0.03) 0px, transparent 50%)'}}>
        {/* Editorial Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="font-label uppercase tracking-widest text-[10px] text-primary font-bold">Legal Architecture</span>
          </div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">Privacy Policy & <br/>Technical Security</h2>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Last updated: June 14, 2024. This document outlines our rigorous protocols for data integrity and corporate confidentiality within the Hitech ecosystem.
          </p>
        </header>

        {/* Bento Style Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Data Protection */}
          <section className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">shield</span>
              <h3 className="font-headline text-xl font-bold tracking-tight">Data Protection</h3>
            </div>
            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
              <p>At Hitech Precision, we implement enterprise-grade encryption for all transmitted data. Our infrastructure is designed to exceed industry standards for B2B security, ensuring that every byte of information—from attendance logs to biometric data—is obfuscated at rest.</p>
              <p>We do not store plain-text passwords or unencrypted biometric templates. Our "Precision Security" model utilizes asynchronous hashing to maintain the highest level of integrity.</p>
            </div>
          </section>

          {/* Section 2: Asymmetric Layout Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Business Confidentiality */}
            <section className="p-8 rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary">lock</span>
                <h3 className="font-headline text-xl font-bold tracking-tight">Business Confidentiality</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Your industrial blueprints, order histories, and procurement patterns are treated as "Eyes Only" data. We maintain strict non-disclosure protocols across our supply chain. No third-party data mining is permitted within our verified partner portal.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary">cookie</span>
                <h3 className="font-headline text-xl font-bold tracking-tight">Cookies</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                We utilize essential session tokens to maintain architectural stability during your browsing experience. Analytical cookies are used strictly to optimize the precision of our search algorithms and load times.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-xs text-on-surface font-medium">
                  <span className="material-symbols-outlined text-[16px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Session Authentication
                </li>
                <li className="flex items-start gap-3 text-xs text-on-surface font-medium">
                  <span className="material-symbols-outlined text-[16px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Load Balancing Optimization
                </li>
                <li className="flex items-start gap-3 text-xs text-on-surface font-medium">
                  <span className="material-symbols-outlined text-[16px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Encrypted Preference Storage
                </li>
              </ul>
            </section>
          </div>

          {/* Image Callout: Editorial Style */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden group">
            <img alt="Server room lighting" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnCHEfc-7mz9_ds8ta_yMfFYOP9478nOhh4a4JxnJORdZMjZWapwk2PCJrhXbJ83fw-PCk0hKTD3ivI3AQqEZSevfSj_Oa97TRaMvOvMC9L1veO5biOTXYxPYWIhuLH8_GLARQkU46kY4i_vOL84uUBDr_MiWDP8XpoT6-BZ-7GLbSIEH6xeb-FWTWoXAEi6Q0UAYoVEgzrXmVWlvnopRB5ETwqsFhm_I2a9urWhqbiRMq2RYXIv-gl7VUZ_Wj7bGUpl9FYPqdjB0v"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-white font-headline font-bold text-lg leading-tight mb-1">State-of-the-Art Servers</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-label">Hardware-level protection</p>
            </div>
          </div>

          {/* Section 3: User Rights */}
          <section className="p-8">
            <h3 className="font-headline text-xl font-bold tracking-tight mb-6">Your Data Rights</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">export_notes</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm mb-1">Data Portability</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed">Request a full export of your transaction history and biometric logs at any time via the partner portal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">delete_forever</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm mb-1">The Right to be Forgotten</h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed">Request full account deletion. Please note that legal financial records must be retained per international trade laws.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}