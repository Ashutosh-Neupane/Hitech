import Link from 'next/link';

const footerLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Support', href: '/support' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-custom py-10">
        <div className="rounded-[32px] border border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3f1_100%)] px-6 py-8 shadow-[0_24px_70px_-42px_rgba(0,0,0,0.18)] md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
                Hitech Marketplace
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                Better product discovery, cleaner procurement, and real B2B structure.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Built for wholesale browsing with clearer product data, stronger category
                navigation, and trade-ready pricing visibility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-muted-foreground sm:grid-cols-3">
              {footerLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© 2026 Hitech. Technical excellence guaranteed.</p>
            <p>Wholesale catalog, partner-ready navigation, and cleaner product structure.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
