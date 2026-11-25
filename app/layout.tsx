import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import rawData from '@/data/templates.json';
import { RepairingTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RepairIQ | Trusted Mobile Repair Solutions for Every Device',
  description: 'Fast, reliable, and expert mobile repair services to get your smartphone back to peak performance.',
  icons: { icon: '/main logo/header logo.webp' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = rawData as RepairingTemplateData;
  const sections = data.categories.Repairing.sections;
  const fontStyle = {
    '--font-site': 'var(--font-sans)',
  } as CSSProperties;

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <body style={fontStyle} className="font-sans">
        <Header data={sections.Header.variants.RepairingHeader2} />
        {children}
        <Footer data={data.common.Footer} />
      </body>
    </html>
  );
}
