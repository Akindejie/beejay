'use client';

import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Using Heroicons for icons
import { MouseEvent } from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    // Get the click position relative to the viewport
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    toggleTheme(clickPosition);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full text-secondary-foreground hover:text-foreground hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-primary transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
