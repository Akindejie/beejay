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
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light'); // Default to light
  const [mounted, setMounted] = useState(false);

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
