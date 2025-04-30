import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  location: string;
  designedBy: string;
  developedBy: string;
  className?: string;
}

export default function ProjectCard({
  title,
  location,
  designedBy,
  developedBy,
  className = '',
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group bg-card rounded-lg overflow-hidden shadow-lg border border-card-border dark:bg-opacity-50 dark:backdrop-blur-md ${className}`}
      whileHover={{
        y: -10,
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 bg-gradient-to-r from-primary to-accent overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/20"
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          transition={{ duration: 0.3 }}
        />
        {/* Project image placeholder */}
        <div className="w-full h-full bg-primary/30 flex items-center justify-center">
          <span className="text-4xl text-primary-foreground">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <motion.span
            className="text-primary"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
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
          </motion.span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <motion.span
            className="text-xs font-medium px-1.5 py-0.5 bg-primary/10 text-primary rounded-sm"
            whileHover={{ scale: 1.05 }}
          >
            {location}
          </motion.span>
        </div>
        <div className="flex flex-col text-secondary-foreground text-sm">
          <span>
            Designed by: <strong>{designedBy}</strong>
          </span>
          <span>
            Developed by: <strong>{developedBy}</strong>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
