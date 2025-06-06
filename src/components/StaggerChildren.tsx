import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  viewportMargin?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export default function StaggerChildren({
  children,
  className = '',
  staggerDelay = 0.2,
  duration = 0.5,
  viewportMargin = '-100px',
  as = 'div'
}: StaggerChildrenProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: duration,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
} 