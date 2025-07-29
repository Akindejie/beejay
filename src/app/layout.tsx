import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import DarkModeGradientHandler from '@/components/DarkModeGradientHandler';
import CircularTransition from '@/components/CircularTransition';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bolibro Portfolio',
  description:
    'Portfolio website featuring expertise in technical support, software engineering, and graphic design',
  icons: {
    icon: '/akindejie-icon.svg',
    apple: '/akindejie-icon.svg',
    shortcut: '/akindejie-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <DarkModeGradientHandler />
          <CircularTransition />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
