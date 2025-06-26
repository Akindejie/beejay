'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  // Dynamic classes based on scroll state
  const navClasses = `
    fixed z-50 transition-all duration-300 ease-in-out 
    ${
      isScrolled
        ? 'top-0 left-0 right-0 bg-card/90 backdrop-blur-sm shadow-lg rounded-none'
        : 'bottom-5 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-md shadow-xl rounded-full px-2 sm:px-6 py-3 max-w-fit'
    }
  `;

  const linkBaseClasses =
    'transition-colors duration-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap';
  const linkInactiveClasses =
    'text-secondary-foreground hover:text-foreground hover:bg-secondary/50';
  const linkActiveClasses = 'text-primary-foreground bg-primary font-semibold';

  const availableText = 'Available for work';
  const logoSrc = theme === 'dark' ? '/akindejie-white.svg' : '/akindejie.svg';

  return (
    <>
      <nav className={navClasses}>
        {/* Mobile view when scrolled */}
        {isScrolled ? (
          <div className="container mx-auto flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <MagneticButton intensity={0.2} className="inline-block">
              <Link
                href="/"
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <div className="relative w-[100px] sm:w-[120px] h-[30px] sm:h-[36px]">
                  <Image
                    src={logoSrc}
                    alt="Akindejie Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </MagneticButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <MagneticButton
                    key={link.href}
                    intensity={0.3}
                    className="inline-block"
                  >
                    <Link
                      href={link.href}
                      className={`${linkBaseClasses} ${
                        isActive ? linkActiveClasses : linkInactiveClasses
                      } block`}
                    >
                      {link.label}
                    </Link>
                  </MagneticButton>
                );
              })}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Available for Work Banner (Desktop only) */}
              <div className="hidden lg:flex items-center bg-primary/20 dark:bg-primary/30 rounded-full px-3 py-1 overflow-hidden relative h-7 w-48">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <div className="absolute left-0 top-0 bottom-0 flex items-center whitespace-nowrap animate-marquee">
                  <span className="text-foreground font-medium text-xs pl-7 pr-8">
                    {availableText}
                  </span>
                  <span className="text-foreground font-medium text-xs pl-7 pr-8">
                    {availableText}
                  </span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <span
                    className={`block w-full h-0.5 bg-foreground transition-transform duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-foreground transition-opacity duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-foreground transition-transform duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Bottom navigation when not scrolled */
          <div className="flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <MagneticButton
                  key={link.href}
                  intensity={0.3}
                  className="inline-block"
                >
                  <Link
                    href={link.href}
                    className={`${linkBaseClasses} ${
                      isActive ? linkActiveClasses : linkInactiveClasses
                    } block`}
                  >
                    {link.label}
                  </Link>
                </MagneticButton>
              );
            })}
            <div className="pl-1 sm:pl-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isScrolled && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="fixed top-16 left-4 right-4 bg-card/95 backdrop-blur-md rounded-lg shadow-xl p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${linkBaseClasses} ${
                      isActive ? linkActiveClasses : linkInactiveClasses
                    } block text-center py-3`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Available for Work in mobile menu */}
              <div className="flex items-center justify-center bg-primary/20 dark:bg-primary/30 rounded-full px-3 py-2 mt-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-foreground font-medium text-sm">
                  {availableText}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
