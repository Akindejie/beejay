'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
  as?: 'button' | 'div';
}

const MagneticButton = ({
  children,
  className = '',
  intensity = 0.5,
  onClick,
  as: Component = 'div',
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = Component === 'button' ? buttonRef.current : divRef.current;
    if (!element) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.max(rect.width, rect.height);

      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = x * intensity * strength;
        const moveY = y * intensity * strength;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, Component]);

  const commonClasses = `magnetic-button transition-transform duration-300 ease-out ${className}`;

  return Component === 'button' ? (
    <button ref={buttonRef} className={commonClasses} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div ref={divRef} className={commonClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default MagneticButton;
