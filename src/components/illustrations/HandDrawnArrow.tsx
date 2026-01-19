'use client'

import { motion } from 'framer-motion'

type ArrowDirection = 'down' | 'right' | 'down-right' | 'up-right'

interface HandDrawnArrowProps {
  direction?: ArrowDirection
  width?: number
  height?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  duration?: number
  animate?: boolean
}

const arrowPaths: Record<ArrowDirection, { path: string; tip: string; viewBox: string }> = {
  down: {
    viewBox: '0 0 24 60',
    path: 'M12 2 Q14 15, 11 25 T13 45 T12 55',
    tip: 'M6 50 L12 58 L18 50',
  },
  right: {
    viewBox: '0 0 60 24',
    path: 'M2 12 Q15 10, 25 13 T45 11 T55 12',
    tip: 'M50 6 L58 12 L50 18',
  },
  'down-right': {
    viewBox: '0 0 50 50',
    path: 'M5 5 Q15 10, 20 20 T30 35 T42 45',
    tip: 'M36 40 L45 47 L38 38',
  },
  'up-right': {
    viewBox: '0 0 50 50',
    path: 'M5 45 Q15 40, 20 30 T30 15 T42 5',
    tip: 'M36 10 L45 3 L38 12',
  },
}

export function HandDrawnArrow({
  direction = 'down',
  width,
  height,
  className = '',
  color = '#FF6A00',
  strokeWidth = 2,
  delay = 0,
  duration = 0.6,
  animate = true,
}: HandDrawnArrowProps) {
  const { path, tip, viewBox } = arrowPaths[direction]
  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number)

  // Calculate dimensions based on viewBox aspect ratio if not provided
  const finalWidth = width || (height ? (height * vbWidth) / vbHeight : vbWidth)
  const finalHeight = height || (width ? (width * vbHeight) / vbWidth : vbHeight)

  const pathAnimation = animate
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true },
        transition: {
          pathLength: { duration, delay, ease: 'easeOut' },
          opacity: { duration: 0.2, delay },
        },
      }
    : {}

  const tipAnimation = animate
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true },
        transition: {
          pathLength: { duration: 0.3, delay: delay + duration * 0.7, ease: 'easeOut' },
          opacity: { duration: 0.2, delay: delay + duration * 0.7 },
        },
      }
    : {}

  return (
    <motion.svg
      width={finalWidth}
      height={finalHeight}
      viewBox={viewBox}
      fill="none"
      className={className}
      aria-hidden="true"
      animate={
        animate
          ? {
              y: [0, -2, 0],
            }
          : undefined
      }
      transition={
        animate
          ? {
              y: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }
          : undefined
      }
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...pathAnimation}
      />
      <motion.path
        d={tip}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...tipAnimation}
      />
    </motion.svg>
  )
}
