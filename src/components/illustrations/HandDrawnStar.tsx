'use client'

import { motion } from 'framer-motion'

type StarVariant = 'sparkle' | 'star' | 'burst'

interface HandDrawnStarProps {
  variant?: StarVariant
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  floatDuration?: number
  floatDistance?: number
}

const starPaths: Record<StarVariant, string> = {
  sparkle: 'M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12 M5 5 L7.5 7.5 M16.5 16.5 L19 19 M5 19 L7.5 16.5 M16.5 7.5 L19 5',
  star: 'M12 2 L14 9 L22 9 L16 14 L18 22 L12 17 L6 22 L8 14 L2 9 L10 9 Z',
  burst: 'M12 4 L12 8 M12 16 L12 20 M4 12 L8 12 M16 12 L20 12',
}

export function HandDrawnStar({
  variant = 'sparkle',
  size = 24,
  className = '',
  color = '#FF6A00',
  strokeWidth = 1.5,
  delay = 0,
  floatDuration = 3,
  floatDistance = 4,
}: HandDrawnStarProps) {
  const path = starPaths[variant]
  const isFilled = variant === 'star'

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [-floatDistance / 2, floatDistance / 2, -floatDistance / 2],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        y: {
          duration: floatDuration,
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
        scale: { duration: 0.4, delay: delay * 0.5 },
      }}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isFilled ? color : 'none'}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.6, delay: delay * 0.5, ease: 'easeOut' },
        }}
      />
    </motion.svg>
  )
}
