import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variant } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  className?: string;
  threshold?: number;
  delay?: number;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimateOnScroll({
  children,
  variants = defaultVariants,
  className = '',
  threshold = 0.1,
  delay = 0.3,
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
