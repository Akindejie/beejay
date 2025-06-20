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
  const pathname = usePathname(); // Get current path for active link styling
  const { theme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page loads already scrolled
    handleScroll();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Work' },
    { href: '/contact', label: 'Contact' },
    // Add other links like Services if needed
  ];

  // Dynamic classes based on scroll state
  const navClasses = `
    fixed z-50 transition-all duration-300 ease-in-out 
    ${
      isScrolled
        ? 'top-0 left-0 right-0 bg-card/90 backdrop-blur-sm shadow-lg rounded-none'
        : 'bottom-5 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-md shadow-xl rounded-full px-6 py-3'
    }
  `;

  const linkBaseClasses =
    'transition-colors duration-200 px-3 py-1 rounded-full text-sm md:text-base';
  const linkInactiveClasses =
    'text-secondary-foreground hover:text-foreground hover:bg-secondary/50';
  const linkActiveClasses = 'text-primary-foreground bg-primary font-semibold';

  const availableText = 'Available for work';

  // Logo source based on theme
  const logoSrc = theme === 'dark' ? '/akindejie-white.svg' : '/akindejie.svg';

  return (
    <nav className={navClasses}>
      {/* Desktop Navigation (always visible in this design) */}
      {/* Hide on very small screens if needed, but reference shows it always */}
      <div
        className={`${
          isScrolled
            ? 'container mx-auto flex justify-between items-center px-4 py-3'
            : 'flex items-center space-x-1 md:space-x-2'
        }`}
      >
        {isScrolled && (
          <MagneticButton intensity={0.2} className="inline-block">
            <Link
              href="/"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <div className="relative w-[120px] h-[36px]">
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
        )}
        <div
          className={`flex items-center ${
            isScrolled
              ? 'space-x-6'
              : 'flex-grow justify-center space-x-1 md:space-x-2'
          }`}
        >
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

        {/* Right side items (Toggle and Banner when scrolled) */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle (Always visible or only when scrolled?) */}
          {/* Let's make it always visible for now, adjust if needed */}
          <ThemeToggle />

          {/* Available for Work Banner (Only when scrolled) */}
          {isScrolled && (
            <div className="hidden md:flex items-center bg-primary/20 dark:bg-primary/30 rounded-full px-3 py-1 overflow-hidden relative h-7 w-48">
              {' '}
              {/* Adjust width as needed */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <div className="absolute left-0 top-0 bottom-0 flex items-center whitespace-nowrap animate-marquee">
                {/* Duplicate text for seamless loop */}
                <span className="text-foreground font-medium text-xs pl-7 pr-8">
                  {availableText}
                </span>
                <span className="text-foreground font-medium text-xs pl-7 pr-8">
                  {availableText}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation can be removed or adapted if this nav works on mobile */}
      {/* The reference site's nav seems to work on mobile too */}
      {/* Remove the old mobile menu logic if not needed */}
    </nav>
  );
};

export default Header;
