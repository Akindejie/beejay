'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

const CircularTransition = () => {
  const { isTransitioning, transitionOrigin, theme } = useTheme();
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
          {/* Subtle spreading circle with glow effect */}
          <motion.div
            className={`absolute rounded-full transition-colors duration-300 ${
              theme === 'light'
                ? 'bg-gray-900 shadow-2xl shadow-gray-900/50'
                : 'bg-white shadow-2xl shadow-white/50'
            }`}
            style={{
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              transformOrigin: 'center',
              filter: 'blur(0.5px)',
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              width: maxRadius * 2,
              height: maxRadius * 2,
              x: -maxRadius,
              y: -maxRadius,
              opacity: [0, 0.08, 0.15, 0.25, 0.15, 0.05, 0],
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: {
                times: [0, 0.15, 0.35, 0.5, 0.7, 0.9, 1],
                duration: 0.9,
              },
            }}
          />

          {/* Inner circle for smoother effect */}
          <motion.div
            className={`absolute rounded-full ${
              theme === 'light' ? 'bg-gray-800' : 'bg-gray-100'
            }`}
            style={{
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              transformOrigin: 'center',
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              width: maxRadius * 1.5,
              height: maxRadius * 1.5,
              x: -maxRadius * 0.75,
              y: -maxRadius * 0.75,
              opacity: [0, 0.05, 0.1, 0.08, 0.03, 0],
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: {
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                duration: 0.8,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CircularTransition;
