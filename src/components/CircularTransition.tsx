'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

const CircularTransition = () => {
  const { isTransitioning, transitionOrigin, transitionDirection } = useTheme();
  const [maxRadius, setMaxRadius] = useState(0);

  const calculateRadius = (origin: { x: number; y: number }) => {
    // Get more reliable viewport dimensions for mobile
    const screenWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const screenHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
      window.screen?.height || 0
    );

    // Calculate distance to all four corners to ensure full coverage
    const distances = [
      // Top-left corner
      Math.sqrt(Math.pow(origin.x, 2) + Math.pow(origin.y, 2)),
      // Top-right corner
      Math.sqrt(Math.pow(screenWidth - origin.x, 2) + Math.pow(origin.y, 2)),
      // Bottom-left corner
      Math.sqrt(Math.pow(origin.x, 2) + Math.pow(screenHeight - origin.y, 2)),
      // Bottom-right corner
      Math.sqrt(
        Math.pow(screenWidth - origin.x, 2) +
          Math.pow(screenHeight - origin.y, 2)
      ),
    ];

    // Use the maximum distance to ensure the circle covers the entire screen
    const calculatedRadius = Math.max(...distances);

    // Add a small buffer for mobile safety (10% extra)
    return calculatedRadius * 1.1;
  };

  useEffect(() => {
    if (isTransitioning && transitionOrigin) {
      setMaxRadius(calculateRadius(transitionOrigin));
    }
  }, [isTransitioning, transitionOrigin]);

  // Handle viewport changes (important for mobile)
  useEffect(() => {
    const handleResize = () => {
      if (isTransitioning && transitionOrigin) {
        setMaxRadius(calculateRadius(transitionOrigin));
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isTransitioning, transitionOrigin]);

  if (!isTransitioning || !transitionOrigin) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key="circular-transition"
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Single semi-transparent dark circle */}
          <motion.div
            className="absolute rounded-full bg-gray-900"
            style={{
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              transformOrigin: 'center',
            }}
            initial={
              transitionDirection === 'expand'
                ? {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                    opacity: 0.7,
                  }
                : {
                    width: maxRadius * 2,
                    height: maxRadius * 2,
                    x: -maxRadius,
                    y: -maxRadius,
                    opacity: 0.7,
                  }
            }
            animate={
              transitionDirection === 'expand'
                ? {
                    width: maxRadius * 2,
                    height: maxRadius * 2,
                    x: -maxRadius,
                    y: -maxRadius,
                    opacity: 0.7,
                  }
                : {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                    opacity: 0.7,
                  }
            }
            transition={
              transitionDirection === 'expand'
                ? {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94], // Smooth expansion
                  }
                : {
                    duration: 0.8,
                    ease: [0.55, 0.06, 0.68, 0.19], // Smooth shrinking
                  }
            }
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CircularTransition;
