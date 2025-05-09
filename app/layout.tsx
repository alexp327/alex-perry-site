import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import SiteHeader from '@/components/site-header';
import Providers from '@/components/providers';
import { siteConfig } from '@/config/site';
import SiteFooter from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Developer`,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-pt-[3.5rem]' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Providers>
          <div className='relative flex min-g-dvh flex-col bg-background'>
            <SiteHeader />
            <main className='w-full flex-1 max-w-5xl mx-auto'>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}

