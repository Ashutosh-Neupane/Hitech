import type { Metadata } from 'next';
import { Manrope, Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils';
import Navigation from '@/components/Navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { fetchCatalogData } from '@/services/catalog.service';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Hitech - B2B Portal',
  description: 'Industrial B2B e-commerce portal for precision components',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data on the server for the navigation
  const catalogData = await fetchCatalogData();

  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        'light',
        manrope.variable,
        inter.variable,
        'font-sans',
        geist.variable
      )}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-surface font-body text-on-background">
        <div className="flex min-h-screen flex-col bg-background">
          <Navigation catalogData={catalogData} />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
