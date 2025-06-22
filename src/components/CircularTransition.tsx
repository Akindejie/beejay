'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

const CircularTransition = () => {
  const { isTransitioning, transitionOrigin, transitionDirection } = useTheme();
  const [maxRadius, setMaxRadius] = useState(0);

  useEffect(() => {
    if (isTransitioning && transitionOrigin) {
      // Calculate the maximum radius needed to cover the entire screen
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const maxDistanceX = Math.max(
        transitionOrigin.x,
        screenWidth - transitionOrigin.x
      );
      const maxDistanceY = Math.max(
        transitionOrigin.y,
        screenHeight - transitionOrigin.y
      );

      const calculatedRadius = Math.sqrt(
        Math.pow(maxDistanceX, 2) + Math.pow(maxDistanceY, 2)
      );

      setMaxRadius(calculatedRadius);
    }
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
