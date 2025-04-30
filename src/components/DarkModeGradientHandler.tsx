'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

// This component handles applying dark mode styles to gradient elements
export default function DarkModeGradientHandler() {
  const { theme } = useTheme();

  useEffect(() => {
    const applyDarkStyles = () => {
      const isDark = theme === 'dark';

      // Find all elements with data-dark-style attribute
      const gradientElements = document.querySelectorAll('[data-dark-style]');

      gradientElements.forEach((el) => {
        const darkStyle = el.getAttribute('data-dark-style');
        if (!darkStyle) return;

        // Parse the style string (format: "opacity:0.3;background:#3b82f6;")
        const styles = darkStyle.split(';').filter(Boolean);

        if (isDark) {
          // Apply all dark mode styles
          styles.forEach((style) => {
            const [property, value] = style.split(':');
            if (!property || !value) return;
            (el as HTMLElement).style.setProperty(property, value);
          });
        } else {
          // In light mode, explicitly set opacity to 0 and reset other properties
          (el as HTMLElement).style.setProperty('opacity', '0');

          // Reset other properties if needed
          styles.forEach((style) => {
            const [property] = style.split(':');
            if (!property || property === 'opacity') return;

            const defaultStyle = (el as HTMLElement).style.getPropertyValue(
              `--default-${property}`
            );
            if (defaultStyle) {
              (el as HTMLElement).style.setProperty(property, defaultStyle);
            }
          });
        }
      });
    };

    // Save default styles and initialize
    const saveDefaultStyles = () => {
      const gradientElements = document.querySelectorAll('[data-dark-style]');

      gradientElements.forEach((el) => {
        const darkStyle = el.getAttribute('data-dark-style');
        if (!darkStyle) return;

        const styles = darkStyle.split(';').filter(Boolean);

        styles.forEach((style) => {
          const [property] = style.split(':');
          if (!property) return;

          // Save the original style as a CSS variable on the element
          const currentValue = getComputedStyle(el).getPropertyValue(property);
          (el as HTMLElement).style.setProperty(
            `--default-${property}`,
            currentValue
          );
        });
      });
    };

    // Initialize default styles
    saveDefaultStyles();

    // Apply dark styles or reset based on theme
    applyDarkStyles();

    // Cleanup not needed since we want the styles to persist
  }, [theme]); // Re-run when theme changes

  // This component doesn't render anything
  return null;
}
