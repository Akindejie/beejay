'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
// Import react-icons
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
} from 'react-icons/si';
import { FaDatabase, FaNetworkWired, FaPalette, FaRobot } from 'react-icons/fa'; // Fallback icons
import { VscCode } from 'react-icons/vsc'; // VS Code icon

// Example Skill Badge Component (can be customized)
const SkillBadge = ({
  text,
  icon,
  positionClasses,
  animationClass,
}: {
  text: string;
  icon?: React.ReactNode; // Optional icon
  positionClasses: string; // Tailwind classes for absolute positioning
  animationClass: string; // orbit-item-cw or orbit-item-ccw
}) => (
  <div
    className={`absolute ${positionClasses} transform -translate-x-1/2 -translate-y-1/2 ${animationClass}`}
  >
    {/* Slightly larger icon size */}
    <div className="flex items-center bg-card/70 backdrop-blur-sm dark:bg-card/80 dark:backdrop-blur-md text-foreground px-4 py-2 rounded-full shadow-lg border border-card-border/50 dark:border-white/20 whitespace-nowrap">
      {icon && <span className="mr-2 opacity-80 text-lg">{icon}</span>}{' '}
      {/* Added text-lg */}
      <span className="text-sm font-medium">{text}</span>
    </div>
  </div>
);

// Main Orbiting Component
const ExperienceOrbit = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Force the background color based on theme
    const section = document.querySelector('.experience-orbit-section');
    if (section) {
      if (theme === 'dark') {
        (section as HTMLElement).style.backgroundColor = 'black';
      } else {
        (section as HTMLElement).style.backgroundColor = 'white';
      }
    }
  }, [theme]);

  // Define skills with React Icons
  const skillsOrbit1 = [
    {
      text: 'Next.js',
      icon: <SiNextdotjs />,
      position: 'top-[5%] left-[50%]',
    },
    {
      text: 'React',
      icon: <SiReact />,
      position: 'top-[30%] left-[90%]',
    },
    {
      text: 'TypeScript',
      icon: <SiTypescript />,
      position: 'top-[70%] left-[90%]',
    },
    {
      text: 'Node.js',
      icon: <SiNodedotjs />,
      position: 'top-[95%] left-[50%]',
    },
    {
      text: 'JavaScript',
      icon: <SiJavascript />,
      position: 'top-[70%] left-[10%]',
    },
    {
      text: 'IDE',
      icon: <VscCode />,
      position: 'top-[30%] left-[10%]',
    },
  ];

  const skillsOrbit2 = [
    {
      text: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      position: 'top-[10%] left-[50%]',
    },
    {
      text: 'Databases',
      icon: <FaDatabase />,
      position: 'top-[35%] left-[85%]',
    },
    {
      text: 'API Design',
      icon: <FaNetworkWired />,
      position: 'top-[90%] left-[50%]',
    },
    {
      text: 'System Design',
      icon: <FaPalette />,
      position: 'top-[65%] left-[15%]',
    },
    {
      text: 'DevOps',
      icon: <SiDocker />,
      position: 'top-[35%] left-[15%]',
    },
    {
      text: 'LLM Integration',
      icon: <FaRobot />,
      position: 'top-[65%] left-[85%]',
    },
  ];

  return (
    // Ensure white background in light mode and dark background in dark mode
    <section
      className="relative experience-orbit-section py-20 dark:bg-black z-20 overflow-hidden bg-white"
      style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}
    >
      {/* Simplified Background Gradients for Dark Mode */}
      {/* Gradient 1 Middle */}
      <div
        className="absolute rounded-full z-0"
        style={{
          bottom: '200px',
          left: '500px',
          width: '570px',
          height: '570px',
          background: `conic-gradient(from 45deg, var(--accent) 0%, var(--accent) 10%, transparent 10%, transparent 20%, #a855f7 20%, #a855f7 30%, transparent 30%, transparent 40%, #f3e8ff 40%, #f3e8ff 50%, transparent 50%)`,
          opacity: 0,
          filter: 'blur(40px)',
        }}
        data-dark-style="opacity:0.2; background: conic-gradient(from 45deg, #6366f1 0%, #6366f1 10%, transparent 10%, transparent 20%, #a5b4fc 20%, #a5b4fc 30%, transparent 30%, transparent 40%, #e0e7ff 40%, #e0e7ff 50%, transparent 50%);"
      />
      {/* Gradient 2 (Bottom Right) */}
      <div
        className="absolute rounded-full z-0"
        style={{
          bottom: '-15px',
          right: '-15px',
          width: '470px',
          height: '470px',
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 20%),
                 radial-gradient(circle at center, #a855f7 15%, transparent 35%),
                 radial-gradient(circle at center, #f3e8ff 30%, transparent 50%)`,
          opacity: 0,
          filter: 'blur(40px)',
        }}
        data-dark-style="opacity:0.1; background: radial-gradient(circle at center, #6366f1 0%, transparent 20%), radial-gradient(circle at center, #a5b4fc 15%, transparent 35%), radial-gradient(circle at center, #e0e7ff 30%, transparent 50%);"
      />

      {/* Center radial glow (Subtler) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[700px] h-[700px] bg-gradient-radial from-blue-700/30 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-0 dark:opacity-30" />
      </div>

      {/* Orbit Container - Should be above gradients (z-index handled by .experience-orbit-section in globals.css) */}
      <div className="relative flex justify-center items-center">
        <div className="relative w-[450px] h-[450px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
          {/* Orbit Paths - Using much darker borders for light mode */}
          <div
            className="absolute inset-0 border-[3px] border-dashed border-gray-900 dark:border-white/30 rounded-full animate-orbit-cw z-20"
            style={{ borderColor: '#333' }}
          />
          <div
            className="absolute inset-[12%] border-[2px] border-dashed border-gray-800 dark:border-white/20 rounded-full animate-orbit-ccw z-20"
            style={{ borderColor: '#444' }}
          />

          {/* Skills on Orbits (z-index set via orbit-item classes in globals.css) */}
          <div className="absolute inset-0 animate-orbit-cw">
            {skillsOrbit1.map((skill) => (
              <SkillBadge
                key={skill.text}
                text={skill.text}
                icon={skill.icon}
                positionClasses={skill.position}
                animationClass="orbit-item-cw"
              />
            ))}
          </div>
          <div className="absolute inset-[12%] animate-orbit-ccw">
            {skillsOrbit2.map((skill) => (
              <SkillBadge
                key={skill.text}
                text={skill.text}
                icon={skill.icon}
                positionClasses={skill.position}
                animationClass="orbit-item-ccw"
              />
            ))}
          </div>

          {/* Central Text (Ensure it's above orbits/gradients) */}
          <div className="absolute inset-0 flex items-center justify-center z-40">
            {' '}
            {/* Increased z-index just in case */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                EXPERIENCE IN <br />
                TECHNICAL SOLUTIONS <br />
                & WEB DEVELOPMENT
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOrbit;
