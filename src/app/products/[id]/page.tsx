import Navigation from "@/components/Navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you'd fetch product data based on params.id
  const product = {
    id: params.id,
    name: `HP-${params.id} Series Component`,
    description: "A high-performance industrial component designed for precision applications.",
    price: 1249.00,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBswxp1hIIjmqQG_81JEJ7RqWMF7QOKA1LqM3zCI1aEULbWN6vYnUzcO51B4NJP1YhxArLDwY-1hOSCizkQqAlrP00W0dwaXbL4pJxavX40BYgupi66bW_4fsoD1_kZqSnvngjSJS6CPJyMFkZAK5oZapGy6jonQ0RncxDRnK6o3wsAtUWBhwzl2Gxpyhu6Dt_JbsOl025aLkTMDe_gylnozsjD6umGSk90LYvsRIB5BjULdf9MSujgjyo4ot_PeOWxMc1X5yhoJ262"
    ]
  };

  return (
    <>
      <Navigation currentPage="products" />
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 glass-nav">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-xl font-bold tracking-tighter text-on-surface font-headline">Hitech Precision</span>
            <div className="hidden md:flex gap-8 items-center">
              <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="/">Products</a>
              <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="/solutions">Solutions</a>
              <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Industries</a>
              <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="/about">About Us</a>
              <a className="font-headline tracking-tight text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200" href="/support">Support</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-lg gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-on-surface-variant/50" placeholder="Search components..." type="text"/>
            </div>
            <button className="font-manrope text-sm font-semibold text-on-surface-variant hover:text-primary transition-all">Cart</button>
            <button className="machined-gradient text-on-primary px-6 py-2 rounded-lg font-manrope text-sm font-semibold scale-95 active:opacity-80 transition-all">
              <a href="/login">Login</a>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-8 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant/60 mb-12">
          <a className="hover:text-primary" href="/">Products</a>
          <span>/</span>
          <a className="hover:text-primary" href="/products">Motion Control</a>
          <span>/</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Left: Product Image & Gallery */}
          <div className="lg:col-span-7 relative group">
            <div className="bg-surface-container-low rounded-xl overflow-hidden aspect-square flex items-center justify-center p-12">
              <img alt={product.name} className="w-full h-full object-contain mix-blend-multiply" src={product.images[0]}/>
            </div>
            {/* Mini Gallery */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="bg-surface-container-lowest border-b-2 border-primary p-2 rounded-lg">
                <img className="w-full h-16 object-cover rounded" alt="technical schematic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtIqD64d8iCAtnBT4S-0DKjreSsmsYlOdHVXkqz3mZG3pRUHovtOpsZn3Oh24aloWdkWyTFgSZsNvDbPijahy0GjEaxLNXNmsdOkKk34N-X_YbSF9V8ZoPo2SmgRJzGXM2qZWtOFW5wM4HEukt8uPoRx9JxxEj29CK1h-ntYQ5fk61hxe65uFiJgDpx4EPAsJ8OTkaaczUiGl-58pq8-QAyuNGTFvbBWWFBKNWvqTgDNXzvbTmRi8l-7uFHK-mt5aqQUIYr0fPCavG"/>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                <img className="w-full h-16 object-cover rounded" alt="macro detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACEMUxxpntrCh8g65O46UAvrelEDweL4IlR5LQynRPKUbMs1js5lxMzmhXX73M2hOPBs6IknMZDoSdmiLxOxU-tc3veHGt3HK168IrtWMlzgELuGiTXie-NHPMrd7uyUzNVgHYgRSRsh15QbFEJR13MRfGIzjdnfpWpg64E_Euw37E4zXZeCkZ6rav_lRxqvmKPCIPvjuZ-TZoOHp7Yfvkuxx4uEbt9ixCm_qunSgcxyKHpEG91RppulSA2KgZ2ahfouyM6rUbNnUi"/>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                <img className="w-full h-16 object-cover rounded" alt="industrial setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAezf_wEtRq7Cp1PZSo5jCKBXpvXAdZcNsPNRLmIPjflEuoU0h6BVukGU8mkjYWowCiA7dfvWVkGgfjFyLb9w5OT30JWwokLMuuIIiw9ZdZfF8_8q_M16uyqrO3XiYsKGgjcwbD-juu50d1xQIA-qqYxEHdlo6d_0_si6OU6Nz_na5ZpXivCPKZ1iX68WRBR_F1Lnqw8NmaQkMtFtD8_G8bF8YwsJ5EJPB7QdgCftVowV68RxQv30mM1a_u-gw-UF-Ukox1Ieo1qh"/>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                <img className="w-full h-16 object-cover rounded" alt="3D wireframe render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsWJfps5GqDMotH6XpYGNxzTsqtNPdYttN3u6RP_jgCzJvQt-pQWa6rc98k_ZJTOq0Z_7V6DITN2jl2P8DurCO4ZkS1n2adZBIpLqDPRPX7sCEA0pBz-PFlK-tY-aACOe4lJTcHZy3G_utCfz1NvzSInJUsS_XmzsweUOI3munKcpN_8HDkOkTL6iiOwtfLPAuLBbfZuKV9_CS87fEQD2HW0qQNgdaOP_slrCzy1xX7XSspZeDN0IuTZF7HPM0JMsU4x-nF56lA5F"/>
              </div>
            </div>
          </div>

          {/* Right: Product Details & Purchase Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full">New Arrival</span>
            </div>
            <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-4 leading-none">{product.name}</h1>
            <p className="text-lg text-on-surface-variant font-body mb-8 leading-relaxed max-w-lg">
              {product.description}
            </p>

            {/* Pricing Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold font-headline text-on-surface">${product.price.toFixed(2)}</span>
                <span className="text-on-surface-variant/60 font-label text-sm uppercase tracking-wide">/ Unit (MSRP)</span>
              </div>

              {/* B2B Pricing Tiers */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-sm font-label text-on-surface">1 - 5 Units</span>
                  <span className="text-sm font-bold text-on-surface">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10 text-secondary">
                  <span className="text-sm font-label">6 - 20 Units</span>
                  <span className="text-sm font-bold">${(product.price * 0.88).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-primary font-bold">
                  <span className="text-sm font-label">21+ Units</span>
                  <span className="text-sm">Request Custom Quote</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="machined-gradient text-on-primary py-4 rounded-lg font-headline font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                  <a href="/checkout">Add to Quote</a>
                </button>
                <button className="bg-surface-container-low text-on-surface py-4 rounded-lg font-headline font-bold text-sm tracking-wide hover:bg-surface-container transition-all">Download CAD</button>
              </div>

              <p className="text-center mt-6 text-[11px] text-on-surface-variant font-label uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm mr-1">lock</span> Secure B2B Portal Access
              </p>
            </div>
          </div>
        </div>

        {/* Technical Content Tabs */}
        <div className="mb-20">
          <div className="flex gap-12 border-b border-outline-variant/20 mb-12 overflow-x-auto pb-4">
            <button className="text-primary font-headline font-bold text-lg border-b-2 border-primary whitespace-nowrap">Specifications</button>
            <button className="text-on-surface-variant/40 font-headline font-bold text-lg hover:text-on-surface whitespace-nowrap">Performance Data</button>
          </div>
        </div>
      </main>
    </>
  );
}