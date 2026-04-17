interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav bg-surface/80 flex justify-between items-center px-8 py-4 max-w-full mx-auto">
      <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
        Hitech Precision
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a
          className={`font-headline tracking-tight text-sm font-semibold transition-colors duration-200 ${
            currentPage === 'products'
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="/products"
        >
          Products
        </a>
        <a
          className={`font-headline tracking-tight text-sm font-semibold transition-colors duration-200 ${
            currentPage === 'solutions'
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="/solutions"
        >
          Solutions
        </a>
        <a
          className={`font-headline tracking-tight text-sm font-semibold transition-colors duration-200 ${
            currentPage === 'industries'
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="#"
        >
          Industries
        </a>
        <a
          className={`font-headline tracking-tight text-sm font-semibold transition-colors duration-200 ${
            currentPage === 'about'
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="/about"
        >
          About Us
        </a>
        <a
          className={`font-headline tracking-tight text-sm font-semibold transition-colors duration-200 ${
            currentPage === 'support'
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="/support"
        >
          Support
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center bg-surface-container px-3 py-1.5 rounded-lg">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-xs text-on-surface-variant placeholder-on-surface-variant/50 w-32 ml-2" placeholder="Search..." type="text"/>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-all p-2">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button className="machined-gradient text-on-primary px-5 py-2 rounded-lg text-sm font-semibold font-headline shadow-lg hover:opacity-90 transition-all scale-95 active:opacity-80">
          <a href="/login">Login</a>
        </button>
      </div>
    </nav>
  );
}