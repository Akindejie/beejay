import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Professional Portfolio',
  description:
    'Explore my portfolio of projects in technical support, software engineering, and graphic design',
};

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Software Engineering',
    description:
      'A full-stack e-commerce solution with advanced inventory management and integrated payment processing.',
    detailedDescription:
      'Developed a comprehensive e-commerce platform that includes product catalog management, inventory tracking, user authentication, shopping cart functionality, secure payment processing, and order management. The platform features a responsive design optimized for all devices and integration with popular payment gateways.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    imageUrl: '/project-ecommerce.jpg',
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
    year: '2022',
    client: 'RetailTech Inc.',
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

// Filter function for filtering projects by category
const filterProjects = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};

export default function Projects() {
  const categories = [
    'All',
    'Software Engineering',
    'Technical Support',
    'Graphic Design',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-300">
              A showcase of my work across different domains and technologies
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories - Note: Client-side filtering will be implemented separately */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 cursor-pointer hover:bg-indigo-600 hover:text-white transition duration-300"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Project Image/Icon Area */}
                  <div
                    className={`h-48 bg-gradient-to-r ${project.bgColor} flex items-center justify-center`}
                  >
                    {project.icon}
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-500">Year</span>
                        <span className="text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Client</span>
                        <span className="text-sm font-medium">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {project.detailedDescription}
                    </p>

                    {/* View Project button would typically link to a detailed project page */}
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Project Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with innovative
            solutions
          </p>
          <Link
            href="/pages/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
