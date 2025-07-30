'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useTheme } from '@/context/ThemeContext';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Form interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to_email: 'bolibro623@gmail.com',
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      // Success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="bg-secondary dark:bg-gray-900 text-foreground py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/project-images/background-cover-up.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text visibility */}
        <div
          className={`absolute inset-0 z-0 ${
            theme === 'light' ? 'bg-black opacity-60' : 'bg-black opacity-50'
          }`}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Me
            </h1>
            <p className="text-xl text-white">
              Let&apos;s discuss how I can help with your next project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-20 relative ${
          theme === 'light' ? 'bg-gray-50' : 'bg-background'
        }`}
      >
        {/* Gradient effect - bottom right */}
        <motion.div
          className="absolute rounded-full z-0"
          style={{
            bottom: '80px',
            right: '80px',
            width: '400px',
            height: '400px',
            background: `conic-gradient(from 45deg, var(--accent) 0%, var(--accent) 10%, transparent 10%, transparent 20%, #a855f7 20%, #a855f7 30%, transparent 30%, transparent 40%, #f3e8ff 40%, #f3e8ff 50%, transparent 50%)`,
            filter: 'blur(40px)',
          }}
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ duration: 1.5 }}
          data-dark-style="opacity:0.2; background: conic-gradient(from 45deg, #6366f1 0%, #6366f1 10%, transparent 10%, transparent 20%, #a5b4fc 20%, #a5b4fc 30%, transparent 30%, transparent 40%, #e0e7ff 40%, #e0e7ff 50%);"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Send a Message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
                    <label
                      htmlFor="name"
                      className={`block mb-2 ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                        theme === 'light'
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          : 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                    <label
                      htmlFor="email"
                      className={`block mb-2 ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                        theme === 'light'
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          : 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      }`}
                      placeholder="Your email address"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                    <label
                      htmlFor="subject"
                      className={`block mb-2 ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                        theme === 'light'
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          : 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      }`}
                      placeholder="Message subject"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                    <label
                      htmlFor="message"
                      className={`block mb-2 ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors ${
                        theme === 'light'
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          : 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      }`}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </motion.div>

                  {submitError && (
                    <motion.div
                      className={`p-3 border rounded-lg ${
                        theme === 'light'
                          ? 'bg-red-50 border-red-200 text-red-700'
                          : 'bg-red-900/20 border-red-800 text-red-400'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {submitSuccess && (
                    <motion.div
                      className={`p-3 border rounded-lg ${
                        theme === 'light'
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-green-900/20 border-green-800 text-green-400'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Your message has been sent successfully!
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition duration-300 w-full md:w-auto ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        theme === 'light' ? 'bg-blue-50' : 'bg-primary/20'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        Email
                      </h3>
                      <p
                        className={`${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        bolibro623@gmail.com
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        I typically respond within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        theme === 'light' ? 'bg-blue-50' : 'bg-primary/20'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        Phone
                      </h3>
                      <p
                        className={`${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        +1 (216) 232-5339
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        Available Monday-Friday, 9am-5pm EST
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        theme === 'light' ? 'bg-blue-50' : 'bg-primary/20'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        Location
                      </h3>
                      <p
                        className={`${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        Cleveland, Ohio, USA
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          theme === 'light' ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        Available for remote work worldwide
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/Akindejie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                        theme === 'light'
                          ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/wasiuibrahim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card dark:bg-gray-800 text-foreground dark:text-white p-3 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="pt-24 pb-16 relative overflow-hidden bg-secondary dark:bg-gray-900"
        style={{
          backgroundImage: 'url(/project-images/background-cover-down.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to start a project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            I&apos;m excited to hear about your ideas and how we can collaborate
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              href="/projects"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition duration-300"
            >
              View My Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
