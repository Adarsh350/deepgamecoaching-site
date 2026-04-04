'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
  as?: 'section' | 'div' | 'article';
  variant?: Variant;
}

const variantMap: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.7,
  style,
  variant = 'fadeUp',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const shouldReduceMotion = useReducedMotion();

  const v = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : v.hidden}
      animate={isInView ? v.visible : (shouldReduceMotion ? v.visible : v.hidden)}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
