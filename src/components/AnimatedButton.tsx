import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function AnimatedButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-white text-primary',
    outline:
      'border-2 border-primary text-foreground dark:text-primary-foreground',
  };

  const hoverVariants = {
    primary: { scale: 1.05, backgroundColor: 'var(--primary-dark)' },
    secondary: { scale: 1.05, backgroundColor: 'var(--primary-foreground-90)' },
    outline: { scale: 1.05, backgroundColor: 'var(--primary-foreground-10)' },
  };

  return (
    <Link href={href} passHref>
      <motion.div
        className={`inline-block px-8 py-3 rounded-full font-semibold shadow ${baseClasses[variant]} ${className}`}
        whileHover={hoverVariants[variant]}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
