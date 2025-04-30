import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Professional Portfolio',
  description:
    'Learn about my background, skills, and experience in technical support, software engineering, and graphic design',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              Get to know my background, skills, and professional journey
            </p>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden mx-auto">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">John Doe</h2>
              <p className="text-gray-600 text-lg mb-6">
                I'm a versatile professional with over 8 years of experience
                spanning technical support, software engineering, and graphic
                design. I specialize in creating user-centered solutions that
                combine technical excellence with visual appeal.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                My journey began in technical support, where I developed strong
                problem-solving abilities and client communication skills. This
                foundation led me to expand into software development, where I
                enjoy building elegant solutions to complex problems. My
                background in graphic design allows me to approach projects with
                both technical precision and creative vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pages/contact"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300 text-center"
                >
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* Experience Item 1 */}
            <div className="mb-12 relative pl-8 border-l-2 border-indigo-600">
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2020 - Present
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600 mb-2">Tech Innovations Inc.</p>
              <p className="text-gray-600">
                Led development of multiple web applications using React,
                Next.js, and Node.js. Implemented CI/CD pipelines, reduced API
                response times by 40%, and mentored junior developers.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="mb-12 relative pl-8 border-l-2 border-indigo-600">
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2017 - 2020
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Technical Support Specialist
              </h3>
              <p className="text-gray-600 mb-2">Global Systems LLC</p>
              <p className="text-gray-600">
                Provided high-level technical support for enterprise clients.
                Resolved complex network and system issues, created technical
                documentation, and trained new team members.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-indigo-600">
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
              <div className="mb-2">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2016 - 2017
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Graphic Designer</h3>
              <p className="text-gray-600 mb-2">Creative Solutions Agency</p>
              <p className="text-gray-600">
                Designed brand identities, marketing materials, and digital
                assets for various clients. Collaborated with marketing teams to
                create cohesive visual strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Technical Support Skills */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Technical Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[95%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Troubleshooting
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    System Admin
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Networking
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Documentation
                  </span>
                </li>
              </ul>
            </div>

            {/* Software Engineering Skills */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Software Engineering
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    JavaScript
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    React/Next.js
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    TypeScript
                  </span>
                </li>
              </ul>
            </div>

            {/* Graphic Design Skills */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Graphic Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Adobe Suite
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    UI/UX Design
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Branding
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                  <span className="min-w-[100px] text-right ml-4">
                    Typography
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Education */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-indigo-600">
                Education
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-1">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600 mb-1">University of Technology</p>
                <p className="text-gray-500">2012 - 2016</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Associate's Degree in Graphic Design
                </h4>
                <p className="text-gray-600 mb-1">Design Institute</p>
                <p className="text-gray-500">2010 - 2012</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-indigo-600">
                Certifications
              </h3>

              <ul className="space-y-4">
                <li>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mt-1 mr-2"
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
                      <h4 className="font-semibold">
                        AWS Certified Solutions Architect
                      </h4>
                      <p className="text-gray-500">Amazon Web Services, 2021</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mt-1 mr-2"
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
                      <h4 className="font-semibold">
                        Certified ScrumMaster (CSM)
                      </h4>
                      <p className="text-gray-500">Scrum Alliance, 2019</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mt-1 mr-2"
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
                      <h4 className="font-semibold">CompTIA Network+</h4>
                      <p className="text-gray-500">CompTIA, 2018</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how I can contribute to your next project
          </p>
          <Link
            href="/pages/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
