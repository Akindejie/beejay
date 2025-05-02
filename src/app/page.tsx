'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ExperienceOrbit from '@/components/ExperienceOrbit';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AnimatedButton from '@/components/AnimatedButton';
import ProjectCard from '@/components/ProjectCard';

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background dark:bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-bg dark:expertise-bg overflow-hidden">
        {/* top circle gradient */}
        <motion.div
          className="absolute -top-42 -left-32 w-140 h-140 bg-primary opacity-30 rounded-full blur-3xl z-0 dark:opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        {/* Star shaped gradient */}
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            bottom: '20px',
            right: '100px',
            width: '570px',
            height: '570px',
            background: `conic-gradient(from 45deg, var(--accent) 0%, var(--accent) 10%, transparent 10%, transparent 20%, #a855f7 20%, #a855f7 30%, transparent 30%, transparent 40%, #f3e8ff 40%, #f3e8ff 50%, transparent 50%)`,
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ duration: 1.5 }}
          data-dark-style="opacity:0.2; background: conic-gradient(from 45deg, #6366f1 0%, #6366f1 10%, transparent 10%, transparent 20%, #a5b4fc 20%, #a5b4fc 30%, transparent 30%, transparent 40%, #e0e7ff 40%, #e0e7ff 50%, transparent 50%);"
        />

        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
          {/* Left: Text Content */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col items-start justify-center text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-primary-foreground drop-shadow-lg"
              variants={fadeInLeft}
              transition={{ duration: 0.7 }}
            >
              Lasisi Fuadeen Akindeji
            </motion.h1>
            <motion.h2
              className="text-lg md:text-2xl font-semibold text-primary-foreground/80 mb-6 tracking-wide"
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Technical Solutions Engineer{' '}
              <span className="text-primary glow-animation">|</span> Full-Stack
              Developer
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl"
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I help businesses bridge the gap between technology and results.
              With a passion for problem-solving and a commitment to excellence,
              I deliver robust, scalable solutions and technical support that
              drive real impact.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <AnimatedButton href="/projects" variant="secondary">
                View Projects
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline">
                Contact Me
              </AnimatedButton>
            </motion.div>
            <motion.div
              className="flex gap-6 mt-2"
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </motion.div>
          {/* Right: Headshot Placeholder */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              id="profile-avatar"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-primary-foreground/30 shadow-2xl bg-primary-foreground/10 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Using background images for both light and dark mode */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Orbit Section */}
      <ExperienceOrbit />

      {/* Skills Section - with fixed background */}
      <section
        className="py-12 expertise-bg relative overflow-hidden dark:bg-black"
        style={{ backgroundColor: 'white' }}
      >
        {/* Dark Mode Gradient Blobs */}
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            top: '20px',
            left: '588px',
            width: '470px',
            height: '470px',
            background: `conic-gradient(from 45deg, var(--accent) 0%, var(--accent) 10%, transparent 10%, transparent 20%, #a855f7 20%, #a855f7 30%, transparent 30%, transparent 40%, #f3e8ff 40%, #f3e8ff 50%, transparent 50%)`,
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-dark-style="opacity:0.2; background: conic-gradient(from 45deg, #6366f1 0%, #6366f1 10%, transparent 10%, transparent 20%, #a5b4fc 20%, #a5b4fc 30%, transparent 30%, transparent 40%, #e0e7ff 40%, #e0e7ff 50%, transparent 50%);"
        />

        {/* Ensure content is above gradients */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
              My Expertise
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Support Card */}
            <AnimateOnScroll
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              delay={0.1}
            >
              <motion.div
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-opacity-50 dark:backdrop-blur-md"
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Technical Support
                </h3>
                <p className="text-secondary-foreground mb-4">
                  Expert troubleshooting, system administration, and customer
                  support with a focus on quick resolution and client
                  satisfaction.
                </p>
                <ul className="text-secondary-foreground space-y-2">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Troubleshooting & Diagnostics
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Network Troubleshooting
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Scripting & Automation
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Remote Support Tools
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ticketing Systems
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cloud Platforms
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    System Administration
                  </motion.li>
                </ul>
              </motion.div>
            </AnimateOnScroll>

            {/* Software Engineering Card */}
            <AnimateOnScroll
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              delay={0.3}
            >
              <motion.div
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-opacity-50 dark:backdrop-blur-md"
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Software Engineering
                </h3>
                <p className="text-secondary-foreground mb-4">
                  Developing robust, scalable applications with modern
                  technologies and best practices for optimal performance.
                </p>
                <ul className="text-secondary-foreground space-y-2">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full-Stack Development
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    API & System Design
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Containerization
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Version Control
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    CI/CD Pipelines
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cloud Deployment
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Performance Optimization
                  </motion.li>
                </ul>
              </motion.div>
            </AnimateOnScroll>

            {/* Graphic Design Card */}
            <AnimateOnScroll
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              delay={0.5}
            >
              <motion.div
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-opacity-50 dark:backdrop-blur-md"
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Graphic Design
                </h3>
                <p className="text-secondary-foreground mb-4">
                  Creating visually appealing designs that communicate
                  effectively and enhance brand identity.
                </p>
                <ul className="text-secondary-foreground space-y-2">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    UI/UX Design
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Animation Basics
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Design Software Mastery
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Visual Content Creation
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Layout & Composition
                  </motion.li>
                </ul>
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Recent Work Section - NEW APPROACH */}
      <section
        className="py-20 work-bg relative overflow-hidden dark:expertise-bg dark:bg-black"
        style={{ backgroundColor: 'white' }}
      >
        {/* Dark Mode Gradient Blobs - DIRECT STYLE */}
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            top: '-40px',
            right: '0',
            width: '470px',
            height: '470px',
            background: `conic-gradient(from 45deg, var(--accent) 0%, var(--accent) 10%, transparent 10%, transparent 20%, #a855f7 20%, #a855f7 30%, transparent 30%, transparent 40%, #f3e8ff 40%, #f3e8ff 50%, transparent 50%)`,
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0, rotate: 30 }}
          whileInView={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          data-dark-style="opacity:0.3; background: conic-gradient(from 45deg, #6366f1 0%, #6366f1 10%, transparent 10%, transparent 20%, #a5b4fc 20%, #a5b4fc 30%, transparent 30%, transparent 40%, #e0e7ff 40%, #e0e7ff 50%, transparent 50%);"
        />
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            bottom: '56px',
            left: '-128px',
            width: '460px',
            height: '460px',
            background: 'var(--accent)',
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-dark-style="opacity:0.1;background:#a855f7;"
        />

        {/* Ensure content is above gradients */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-wider font-medium mb-3">
                HAPPY CLIENTS &lt;3
              </p>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                Recent Work
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <AnimateOnScroll delay={0.1}>
              <ProjectCard
                title="LeoPhoenix Tech"
                location="🇺🇸 San Francisco - United States"
                developedBy="Akindeji"
                projectUrl="https://leophoenix.tech/"
                imageUrl="/project-images/leophoenix-tech.png"
              />
            </AnimateOnScroll>

            {/* Project 2 */}
            <AnimateOnScroll delay={0.3}>
              <ProjectCard
                title="ZenAdmin"
                location="🇩🇪 Germany"
                developedBy="Akindeji"
                projectUrl="https://www.zenadmin.ai/"
                imageUrl="/project-images/zenadmin.png"
              />
            </AnimateOnScroll>

            {/* Project 3 */}
            <AnimateOnScroll delay={0.5}>
              <ProjectCard
                title="Bolibro Realty"
                location="🇺🇸 Ohio - United States"
                developedBy="Akindeji"
                projectUrl="https://www.bolibrorealty.com/"
                imageUrl="/project-images/bolibro.png"
              />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.7}>
            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/projects"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition duration-300"
                >
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ready-background.png"
            alt="Background"
            fill
            className="object-cover opacity-90 dark:opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your ideas to life with innovative
            solutions
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
