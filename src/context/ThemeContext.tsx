'use client';

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (clickPosition?: { x: number; y: number }) => void;
  isTransitioning: boolean;
  transitionOrigin: { x: number; y: number } | null;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light'); // Default to light
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Effect to read from local storage and set initial theme
  useEffect(() => {
    // Mark as mounted - this prevents hydration mismatch
    setMounted(true);

    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark'); // Set based on OS preference if no stored theme
    } else {
      setTheme('light');
    }
  }, []);

  // Effect to update local storage and body class when theme changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('theme', theme);
    // Add/remove .dark class on the html element for Tailwind
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  const toggleTheme = (clickPosition?: { x: number; y: number }) => {
    if (clickPosition) {
      setTransitionOrigin(clickPosition);
      setIsTransitioning(true);

      // Start theme transition after a brief delay
      setTimeout(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }, 50);

      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionOrigin(null);
      }, 1000);
    } else {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isTransitioning, transitionOrigin }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
