import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  location: string;
  designedBy?: string;
  developedBy: string;
  projectUrl?: string;
  imageUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  location,
  designedBy,
  developedBy,
  projectUrl,
  imageUrl,
  className = '',
}: ProjectCardProps) {
  const handleCardClick = () => {
    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -15,
      boxShadow: '0 30px 35px -10px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      color: 'var(--accent)',
      transition: {
        repeat: Infinity,
        repeatType: 'reverse' as const,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: {
      color: 'var(--primary)',
      transition: { duration: 0.2 },
    },
  };

  const developerVariants = {
    initial: { opacity: 0, x: -5 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    hover: {
      x: 3,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`group bg-card/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg dark:bg-card/20 dark:backdrop-blur-md ${className}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <motion.div className="w-full h-full">
            <motion.div className="w-full h-full" variants={imageVariants}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
        <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
          </motion.div>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <span className="text-4xl text-primary-foreground">{title}</span>
        </div>
        )}
      </div>
      <motion.div
        className="p-6 bg-transparent backdrop-blur-sm dark:bg-transparent dark:backdrop-blur-md"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-between items-start mb-3">
          <motion.h3
            className="text-2xl font-bold text-foreground"
            variants={titleVariants}
            whileHover="hover"
          >
            {title}
          </motion.h3>
          <motion.div
            className={`text-primary ${projectUrl ? 'cursor-pointer' : ''}`}
            variants={arrowVariants}
            whileHover="hover"
            onClick={projectUrl ? handleCardClick : undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center gap-2 mb-4"
          variants={itemVariants}
        >
          <motion.span
            className="text-xs font-medium px-1.5 py-0.5 bg-primary/10 text-primary rounded-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(var(--primary), 0.2)',
            }}
          >
            {location}
          </motion.span>
        </motion.div>
        <motion.div
          className="flex flex-col text-secondary-foreground text-sm"
          variants={itemVariants}
        >
          {designedBy && (
            <motion.span variants={developerVariants} whileHover="hover">
              Designed by:{' '}
              <strong className="inline-block">{designedBy}</strong>
            </motion.span>
          )}
          <motion.span variants={developerVariants} whileHover="hover">
            Developed by:{' '}
            <strong className="inline-block">{developedBy}</strong>
          </motion.span>
          <motion.div
            className="mt-4 text-xs bg-gray-100/70 dark:bg-gray-800/60 text-black dark:text-white rounded px-2 py-1 inline-block w-max opacity-0 group-hover:opacity-100"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Click arrow to visit website
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
