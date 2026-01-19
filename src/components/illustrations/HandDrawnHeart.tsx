'use client'

import { motion } from 'framer-motion'

interface HandDrawnHeartProps {
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  floatDuration?: number
  floatDistance?: number
  filled?: boolean
}

export function HandDrawnHeart({
  size = 24,
  className = '',
  color = '#FF6A00',
  strokeWidth = 1.5,
  delay = 0,
  floatDuration = 3.5,
  floatDistance = 4,
  filled = false,
}: HandDrawnHeartProps) {
  // Hand-drawn wobbly heart path
  const heartPath = 'M12 21 C12 21 4 14 4 9 Q4 5 8 5 Q10 5 12 7 Q14 5 16 5 Q20 5 20 9 C20 14 12 21 12 21'

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [-floatDistance / 2, floatDistance / 2, -floatDistance / 2],
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        scale: {
          duration: floatDuration * 0.8,
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
        d={heartPath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? color : 'none'}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.6, delay, ease: 'easeOut' },
        }}
      />
    </motion.svg>
  )
}
