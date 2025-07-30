'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      staggerChildren: 0.2,
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

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative bg-secondary dark:bg-gray-900 text-foreground py-20"
        style={{
          backgroundImage: 'url(/project-images/background-cover-up.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Me
            </h1>
            <p className="text-xl text-white">
              Get to know my background, skills, and professional journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                damping: 15,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden mx-auto shadow-xl">
                <Image
                  src="/project-images/about-me-photo.png"
                  alt="Wasiu Ibrahim"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-2/3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-3xl font-bold mb-6 text-foreground"
                variants={fadeInUp}
              >
                Wasiu Ibrahim
              </motion.h2>

              <motion.p
                className="text-secondary-foreground text-lg mb-6"
                variants={fadeInUp}
              >
                I&apos;m a versatile professional with over 8 years of
                experience spanning technical support, software engineering, and
                graphic design. I specialize in creating user-centered solutions
                that combine technical excellence with visual appeal.
              </motion.p>

              <motion.p
                className="text-secondary-foreground text-lg mb-6"
                variants={fadeInUp}
              >
                My journey began in technical support, where I developed strong
                problem-solving abilities and client communication skills. This
                foundation led me to expand into software development, where I
                enjoy building elegant solutions to complex problems. My
                background in graphic design allows me to approach projects with
                both technical precision and creative vision.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn btn-primary">
                    Contact Me
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/files/resume.pdf"
                    download
                    className="btn btn-outline"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary dark:expertise-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Professional Experience
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {/* Experience Item 1 */}
            <motion.div
              className="mb-12 relative pl-8 border-l-2 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2021 - Present
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Senior Software Engineer
              </h3>
              <p className="text-secondary-foreground mb-2">LeoPhoenix Tech.</p>
              <p className="text-secondary-foreground">
                Led development of multiple web applications using React,
                Next.js, and Node.js. Implemented CI/CD pipelines, reduced API
                response times by 40%, and mentored junior developers.
              </p>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              className="mb-12 relative pl-8 border-l-2 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2020 - 2021
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Full Stack Solutions Engineer
              </h3>
              <p className="text-secondary-foreground mb-2">ZenAdmin</p>
              <p className="text-secondary-foreground">
                Developed and maintained software applications using JavaScript,
                C#, .NET, ASP.NET MVC and Debugged software defects and
                implemented effective solutions
              </p>
            </motion.div>

            {/* Experience Item 3 */}
            <motion.div
              className="mb-12 relative pl-8 border-l-2 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2019 - 2020
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Information Technology Consultant
              </h3>
              <p className="text-secondary-foreground mb-2">Farmers Barn</p>
              <p className="text-secondary-foreground">
                Designed brand identities, marketing materials, and digital
                assets for various clients. Collaborated with marketing teams to
                create cohesive visual strategies.
              </p>
            </motion.div>

            {/* Experience Item 4 */}
            <motion.div
              className="mb-12 relative pl-8 border-l-2 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2017 - 2019
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Technical Support & Graphic Designer
              </h3>
              <p className="text-secondary-foreground mb-2">Waily Press</p>
              <p className="text-secondary-foreground">
                Designed brand identities, marketing materials, and digital
                assets for various clients. Collaborated with marketing teams to
                create cohesive visual strategies.
              </p>
            </motion.div>

            {/* Experience Item 5 */}
            <motion.div
              className="relative pl-8 border-l-2 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2016 - 2018
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Software Engineer
              </h3>
              <p className="text-secondary-foreground mb-2">Data-Pro-Poix</p>
              <p className="text-secondary-foreground">
                Developed and maintained software applications using JavaScript,
                C#, .NET, ASP.NET MVC, Utilized version control systems to
                manage code repositories and facilitate team collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Technical Support Skills */}
            <motion.div
              className="bg-transparent p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                Technical Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[95%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Troubleshooting
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Sys Admin
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Networking
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Documentation
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Software Engineering Skills */}
            <motion.div
              className="bg-transparent p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                Software Engineering
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[95%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    JavaScript
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[99%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    React/Next.js
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Node.js
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    TypeScript
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Graphic Design Skills */}
            <motion.div
              className="bg-transparent p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                Graphic Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Adobe Suite
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    UI/UX Design
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Branding
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-secondary dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full w-[95%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4 text-secondary-foreground">
                    Typography
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-secondary dark:expertise-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Education & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Education */}
            <motion.div
              className="bg-transparent p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">Education</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-1 text-foreground">
                  Kent State University, Ohio — B.Sc
                </h4>
                <p className="text-secondary-foreground mb-1">
                  GRADUATION - 2019
                </p>
                <p className="text-secondary-foreground/70">
                  Computer Science - B.S
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1 text-foreground">
                  Lakeland Community College, Ohio — AAB
                </h4>
                <p className="text-secondary-foreground mb-1">
                  GRADUATION - 2017
                </p>
                <p className="text-secondary-foreground/70">
                  Comp Science/Software Eng (9259), AAB
                </p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="bg-transparent p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                Certifications
              </h3>

              <ul className="space-y-4">
                <li>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        AWS Certified Solutions Architect
                      </h4>
                      <p className="text-secondary-foreground/70">
                        Amazon Web Services, 2021
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        CompTIA Network+
                      </h4>
                      <p className="text-secondary-foreground/70">
                        CompTIA, 2018
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/project-images/ready-background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
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
              Interested in working together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Let&apos;s discuss how I can contribute to your next project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
