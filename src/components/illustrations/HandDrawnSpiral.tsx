'use client'

import { motion } from 'framer-motion'

interface HandDrawnSpiralProps {
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  floatDuration?: number
  floatDistance?: number
}

export function HandDrawnSpiral({
  size = 24,
  className = '',
  color = '#FF6A00',
  strokeWidth = 1.5,
  delay = 0,
  floatDuration = 4,
  floatDistance = 4,
}: HandDrawnSpiralProps) {
  // Hand-drawn spiral/swirl path
  const spiralPath = 'M12 12 Q14 10 16 12 Q18 14 16 16 Q14 18 12 16 Q10 14 12 12 Q15 9 18 12 Q21 15 18 18 Q15 21 12 18 Q9 15 12 12'

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, rotate: -90 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [-floatDistance / 2, floatDistance / 2, -floatDistance / 2],
        rotate: [0, 10, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        rotate: {
          duration: floatDuration * 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        opacity: {
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
    >
      <motion.path
        d={spiralPath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.8, delay, ease: 'easeOut' },
        }}
      />
    </motion.svg>
  )
}
