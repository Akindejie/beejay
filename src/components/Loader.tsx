'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

interface LoaderProps {
  fullScreen?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Loader = ({ fullScreen = true, size = 'medium' }: LoaderProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme-related code only runs after component is mounted
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Logo source based on theme
  const logoSrc =
    mounted && theme === 'dark'
      ? '/akindejie-icon-white.svg'
      : '/akindejie-icon.svg';

  // Size mapping
  const sizeMap = {
    small: { width: 30, height: 30 },
    medium: { width: 50, height: 50 },
    large: { width: 80, height: 80 },
  };

  const dimensions = sizeMap[size];

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="relative animate-pulse">
            <div
              className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
              style={{
                width: dimensions.width + 20,
                height: dimensions.height + 20,
                top: -10,
                left: -10,
              }}
            ></div>
            <div
              className="relative animate-spin-slow"
              style={{ width: dimensions.width, height: dimensions.height }}
            >
              <Image
                src={logoSrc}
                alt="Loading"
                width={dimensions.width}
                height={dimensions.height}
                className="drop-shadow-glow"
              />
            </div>
          </div>
          <p className="text-foreground animate-pulse font-medium">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative animate-pulse">
        <div
          className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
          style={{
            width: dimensions.width + 20,
            height: dimensions.height + 20,
            top: -10,
            left: -10,
          }}
        ></div>
        <div
          className="relative animate-spin-slow"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <Image
            src={logoSrc}
            alt="Loading"
            width={dimensions.width}
            height={dimensions.height}
            className="drop-shadow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
