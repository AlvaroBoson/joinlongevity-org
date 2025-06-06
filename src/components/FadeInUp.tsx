import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  id?: string;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  triggerOnMount?: boolean;
}

export default function FadeInUp({
  children,
  id,
  delay = 0,
  duration = 0.6,
  className = '',
  viewportMargin = '0px',
  as = 'div',
  triggerOnMount = false
}: FadeInUpProps) {
  const MotionTag = motion[as];

  const motionProps = triggerOnMount
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: false, margin: viewportMargin } };

  return (
    <MotionTag
      {...motionProps}
      id={id}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
} 