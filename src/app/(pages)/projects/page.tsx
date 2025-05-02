'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

const projects = [
  {
    id: 'real-estate-management-system',
    title: 'Real Estate Management System',
    category: 'Software Engineering',
    description:
      'A full-stack real estate solution with advanced inventory management and integrated payment processing.',
    detailedDescription:
      'Bolibrorealty.com offers a complete solution for your real estate needs. Explore our meticulously managed property catalog with accurate inventory, create a secure user account to save your searches, and connect effortlessly with real estate professionals.',
    technologies: ['Nextjs', 'Node.js', 'Supabase', 'Express', 'Stripe API'],
    imageUrl: '/project-images/bolibrorealty.png',
    bgColor: 'from-blue-500 to-indigo-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    year: '2025',
    client: 'Bolibro Real Estate',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    category: 'Software Engineering',
    description:
      'A collaborative task management application with real-time updates and team communication features.',
    detailedDescription:
      'Built a task management application that allows team members to create, assign, and track tasks in real-time. Features include customizable project boards, comment threads, file attachments, deadline notifications, and progress reporting. The app integrates with calendar applications and provides analytics on team productivity.',
    technologies: [
      'Next.js',
      'Firebase',
      'TypeScript',
      'Tailwind CSS',
      'Auth0',
    ],
    imageUrl: '/project-task-app.jpg',
    bgColor: 'from-green-500 to-teal-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    year: '2021',
    client: 'Agile Solutions LLC',
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description:
      'A comprehensive brand identity project including logo design, color palette, and marketing materials.',
    detailedDescription:
      'Created a complete brand identity package for a technology startup. The project included logo design with variations for different applications, a comprehensive color palette with primary and secondary colors, typography guidelines, business card designs, letterhead templates, email signatures, social media assets, and a detailed brand guidelines document.',
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign',
      'Branding',
      'Typography',
    ],
    imageUrl: '/project-brand-identity.jpg',
    bgColor: 'from-purple-500 to-pink-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    year: '2020',
    client: 'TechStart Innovations',
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure Overhaul',
    category: 'Technical Support',
    description:
      'Complete redesign and implementation of network infrastructure for a medium-sized business.',
    detailedDescription:
      'Led a comprehensive network infrastructure upgrade project for a company with 120 employees across multiple departments. Designed the network topology, implemented VLANs for improved security, established redundant internet connections, configured firewalls and network monitoring tools, and documented the entire network architecture for future maintenance.',
    technologies: [
      'Network Architecture',
      'Cisco Equipment',
      'VLANs',
      'Cybersecurity',
      'Network Monitoring',
    ],
    imageUrl: '/project-network.jpg',
    bgColor: 'from-red-500 to-orange-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    year: '2019',
    client: 'Global Manufacturing Co.',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Software Engineering',
    description:
      'Interactive data visualization dashboard for tracking business metrics and making data-driven decisions.',
    detailedDescription:
      'Developed a customizable analytics dashboard that integrates with multiple data sources to provide comprehensive business intelligence. The dashboard features real-time data updates, interactive charts and graphs, filtering capabilities, data export options, and customizable reporting. The solution helps executives track KPIs and make informed business decisions.',
    technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    imageUrl: '/project-analytics.jpg',
    bgColor: 'from-cyan-500 to-blue-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    year: '2021',
    client: 'DataMetrics Corp.',
  },
  {
    id: 'mobile-app-ui',
    title: 'Mobile App UI/UX Design',
    category: 'Graphic Design',
    description:
      'Complete UI/UX design for a fitness tracking mobile application with an emphasis on user experience.',
    detailedDescription:
      'Designed the complete user interface and experience for a fitness tracking mobile application. Created wireframes, high-fidelity mockups, interactive prototypes, and a comprehensive design system. The design focused on intuitive navigation, clear data visualization, and engaging fitness tracking features that motivated users to maintain their exercise routines.',
    technologies: [
      'Figma',
      'UI/UX Design',
      'Prototyping',
      'User Research',
      'Design Systems',
    ],
    imageUrl: '/project-mobile-ui.jpg',
    bgColor: 'from-indigo-500 to-violet-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    year: '2022',
    client: 'FitTech Solutions',
  },
];

export default function Projects() {
  const categories = [
    'All',
    'Software Engineering',
    'Technical Support',
    'Graphic Design',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-gray-900 text-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-secondary-foreground">
              A showcase of my work across different domains and technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories - Note: Client-side filtering will be implemented separately */}
            <motion.div
              className="mb-12 flex flex-wrap justify-center gap-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {categories.map((category, index) => (
                <motion.span
                  key={category}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-secondary dark:bg-gray-800 text-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground transition duration-300"
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-card dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image/Icon Area */}
                  <div
                    className={`h-48 bg-gradient-to-r ${project.bgColor} flex items-center justify-center`}
                  >
                    {project.icon}
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-secondary-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary dark:bg-gray-700 text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-secondary dark:bg-gray-700 text-secondary-foreground rounded-full text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="bg-secondary/50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-secondary-foreground/70">
                          Year
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground/70">
                          Client
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-secondary-foreground mb-4 text-sm line-clamp-3">
                      {project.detailedDescription}
                    </p>

                    {/* View Project button would typically link to a detailed project page */}
                    <motion.button
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Project Details →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/about-me-background.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Have a project in mind?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Let&apos;s collaborate to bring your ideas to life with innovative
              solutions
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition duration-300"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
