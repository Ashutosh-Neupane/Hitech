export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-nav bg-surface/80 flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          Hitech Precision
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tight text-sm font-semibold text-primary border-b-2 border-primary pb-1 transition-colors duration-200" href="#">Products</a>
          <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Solutions</a>
          <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Industries</a>
          <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">About Us</a>
          <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Support</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-xs text-on-surface-variant placeholder-on-surface-variant/50 w-32 ml-2" placeholder="Search components..." type="text"/>
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
        <section className="relative min-h-[870px] flex items-center px-8 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-surface-container-low" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)'}}></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl mx-auto">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-secondary font-semibold text-xs mb-4 block">Precision Engineering Ecosystem</span>
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight mb-6">
                The Architecture of <span className="text-primary">Industrial</span> Excellence.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed font-light">
                Procure high-performance hardware and automated solutions through our curated B2B atelier. Precision-graded components for the world's most demanding sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="machined-gradient text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm flex items-center gap-2 group transition-all">
                  Explore Catalog
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="bg-transparent border border-secondary/20 text-secondary px-8 py-4 rounded-lg font-headline font-bold text-sm hover:bg-secondary/5 transition-all">
                  Technical Specs
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Industrial engineer portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm3jSDQ5LMUO2hPaisgcMZM230h9zZTW4noJUheLPFQvQKe4xhxu-l31mDAFNq33diNsjAZAAmBm2WcQZCQye7sIcgWtDBHwxr_DckBg6tg5XicL-V-xIiqWM0QsN2PRYpEV1QS2pKkOgulF2I9wllKYyJdWJ4sSBmusLJmnt7LTi75aGeV32e3-wj0TOB7NpvB0N3Wq1iDEVZq5HIYpuUXO7nInvbLl9pWTdaTDmHtGLfr3B-Ylx--slqJeGcZpub2BiQ7sQZZpwU"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Technical manager portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwTxwlEAvZG7_Wm41LFqjxCYaGnWSlZxd2mfshS-lgUlWIEtMD66hcFHEn5PunBdB6HOe2HI1FjUoltF_Q-iXDSKiky4vetPM2cFDs0UwyhLbzP3Qk7nE1834v-tQVShINf6q0H-syD_1t1K603U-7zg7snpCWJPEIybmln3wYFci7l0RKO5A3YS4k-C-dIcvn1jJUkO48yz2gtJLDXZJ0FpVm8qExEgyI8Pp0pDx5qFeh6KZwtGx2g7NAqmr8j5PeCIymAUdzSq2N"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                    +12k
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">Trusted by 12,000+ Industrial Partners</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-tertiary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl relative border border-outline-variant/10">
                <img className="rounded-xl w-full h-[500px] object-cover" alt="High-tech robotic arm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMZtUSibXwkF9XpIP7ZWNh9ZbSvBwrV0QppCNMD9M3ls88FOX-CZ5eDCgfLUQ7HAWFS0k78aoz-4PiGh05IQJxcDqS6FvidGKMvD8T7AU1qfTq97xnTj58sGmkAdjbvQWkzJJN1omiUXIhJauvihEug2-mF0bUDEjGS9VmfbpsVzMNBE0F8HUfZtzIKowhNE4uC30kfUVYXCy8VYmdDCUsGq4Wx6_noo6oP06eBvuQYJjAOfuVVm-RtYJ5ZOqgS3InAUWIN6u-YhBx"/>
                <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    <span className="font-headline font-bold text-sm">ISO 9001 Certified</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed">All precision components undergo 48-hour stress testing before dispatch.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-24 px-8 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Featured Categories</h2>
                <p className="text-on-surface-variant font-light">Engineered for performance, crafted for durability.</p>
              </div>
              <a className="text-secondary font-headline text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                View All Categories <span className="material-symbols-outlined text-sm">chevron_right</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Precision motion components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfD-00Emo5ZUM4Ns7FdwykrjrDhB20jTGXZbBFHXqaJEt3xFQBj-BWRaaEym65u_U6DGB6QKvfAjZFFRJpJFNY8_Ovs2zreiXhGnyBuMsyUEGbEvchtOKLStKzv5K0O-q_anOMPTadJfsOQ4Lbw61yvMAyjEmj8tIGKrnnQ9HBPHhyuxv_XZfWCJhK5Zx124-pWcql8wNz-KCxqee918GG2RJahJcUgZz07viJW5d3g5Sh1I0Nil7-rWfgxdGoZfWhSvpePgjgkSm4"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="font-headline text-2xl font-bold mb-2">Precision Motion</h3>
                  <p className="text-xs text-white/70 mb-4 max-w-xs">Linear actuators, ball screws, and high-speed rotary tables for automation.</p>
                  <span className="text-xs font-bold tracking-widest uppercase py-2 px-4 border border-white/20 w-max rounded-full">Explore 1.2k Items</span>
                </div>
              </div>
              <div className="md:col-span-2 relative overflow-hidden rounded-xl group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Control systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChq9_AsAAUQVPNcMeeomg_hELJua3-iM6D3xDZSeCX9nU7Thjttp1VGyyCD9xzIJC8Esh_pJFcXp5iu0sZgfGjTsWG8timKXU95nP-1Vp2sp7e1LXJWhSJ7aoUdkVZrcz0WbqNuJ8Df5002sMd5sMTV9VSY7nJDhylEQ35Xo-DIn2G6R1z6QEZsaK42fFW_DPULliRSfgoWr8nNzhCF1ulw4ZkGmhFu_FGtQhV95q_dvM9d2nhhHYKsV3mS7Ho9dR84JLj-nphYn-N"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="font-headline text-xl font-bold mb-1">Control Systems</h3>
                  <p className="text-xs text-white/70">PLCs, HMIs, and edge computing nodes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
