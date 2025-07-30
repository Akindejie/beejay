'use client';

import Link from 'next/link';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-reveal bg-card text-card-foreground overflow-hidden z-10">
      {/* Big background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
        <span
          className="text-[22vw] font-extrabold text-foreground/5 select-none whitespace-nowrap tracking-tighter animate-pulse"
          style={{
            animation: 'pulse 8s ease-in-out infinite',
            animationDelay: '0.5s',
          }}
        >
          LET&apos;S TALK
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Footer top with logo and contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              Wasiu Ibrahim
            </h2>
            <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:bolibro623@gmail.com" className="hover:underline">
                bolibro623@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span className="border-b-2 border-transparent group-hover:border-primary transition-all duration-300">
                Let&apos;s Talk
              </span>
              <span className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-card"
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
              </span>
            </Link>
          </div>
        </div>

        {/* Quick links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Portfolio
            </h3>
            <p className="text-foreground/70">
              Showcasing my expertise in technical support, software
              engineering, and graphic design.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Akindejie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors py-2 group"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="uppercase font-medium group-hover:translate-x-1 transition-transform duration-300">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/wasiuibrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors py-2 group"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="uppercase font-medium group-hover:translate-x-1 transition-transform duration-300">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-foreground/10 pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/50 text-sm hover:text-foreground/80 transition-colors duration-300 group cursor-default">
              © {currentYear}
              <span className="group-hover:text-primary transition-colors duration-300">
                {' '}
                Wasiu Ibrahim
              </span>
              . All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Back to top button */}
            <MagneticButton intensity={0.4}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group w-full"
              >
                <span>Back to Top</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
