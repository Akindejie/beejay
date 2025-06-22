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
  const getButtonClasses = (variant: ButtonVariant) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25';
      case 'secondary':
        return 'bg-white text-gray-900 hover:bg-gray-900 hover:text-white border-2 border-gray-900 shadow-lg hover:shadow-xl dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary';
      default:
        return '';
    }
  };

  return (
    <Link href={href} passHref>
      <motion.div
        className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${getButtonClasses(
          variant
        )} ${className}`}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
