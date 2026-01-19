'use client'

import { motion } from 'framer-motion'

interface HandDrawnUnderlineProps {
  width?: number
  height?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  duration?: number
}

export function HandDrawnUnderline({
  width = 120,
  height = 12,
  className = '',
  color = '#FF6A00',
  strokeWidth = 2.5,
  delay = 0,
  duration = 0.8,
}: HandDrawnUnderlineProps) {
  // Hand-drawn wavy underline path
  const pathD = `M2 8 Q ${width * 0.15} 2, ${width * 0.3} 7 T ${width * 0.6} 6 T ${width - 2} 8`

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={pathD}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration, delay, ease: 'easeOut' },
          opacity: { duration: 0.2, delay },
        }}
      />
    </svg>
  )
}
