'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  fullScreen?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Loader = ({ fullScreen = true, size = 'medium' }: LoaderProps) => {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Size mapping
  const sizeMap = {
    small: { width: 24, height: 24 },
    medium: { width: 40, height: 40 },
    large: { width: 64, height: 64 },
  };

  const dimensions = sizeMap[size];

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div
              className="animate-spin rounded-full border-4 border-primary/20 border-t-primary"
              style={{ width: dimensions.width, height: dimensions.height }}
            ></div>
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
      <div className="relative">
        <div
          className="animate-spin rounded-full border-4 border-primary/20 border-t-primary"
          style={{ width: dimensions.width, height: dimensions.height }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
