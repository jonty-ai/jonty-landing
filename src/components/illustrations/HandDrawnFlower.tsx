'use client'

import { motion } from 'framer-motion'

interface HandDrawnFlowerProps {
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  floatDuration?: number
  floatDistance?: number
}

export function HandDrawnFlower({
  size = 32,
  className = '',
  color = '#FF6A00',
  strokeWidth = 1.5,
  delay = 0,
  floatDuration = 4,
  floatDistance = 5,
}: HandDrawnFlowerProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [-floatDistance / 2, floatDistance / 2, -floatDistance / 2],
        rotate: [-3, 3, -3],
        opacity: [0.75, 1, 0.75],
      }}
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        rotate: {
          duration: floatDuration * 1.2,
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
        scale: { duration: 0.5, delay: delay * 0.5 },
      }}
    >
      {/* Petals - hand-drawn wobbly style */}
      <motion.path
        d="M16 6 Q18 4 20 6 Q22 8 20 10 Q18 12 16 10 Q14 12 12 10 Q10 8 12 6 Q14 4 16 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.4, delay, ease: 'easeOut' } }}
      />
      {/* Top petal */}
      <motion.path
        d="M16 4 Q17.5 2 16 1 Q14.5 2 16 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.1, ease: 'easeOut' } }}
      />
      {/* Right petal */}
      <motion.path
        d="M20 8 Q23 7 24 9 Q23 11 20 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.15, ease: 'easeOut' } }}
      />
      {/* Left petal */}
      <motion.path
        d="M12 8 Q9 7 8 9 Q9 11 12 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.2, ease: 'easeOut' } }}
      />
      {/* Bottom-right petal */}
      <motion.path
        d="M18 11 Q21 13 20 15 Q18 14 17 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.25, ease: 'easeOut' } }}
      />
      {/* Bottom-left petal */}
      <motion.path
        d="M14 11 Q11 13 12 15 Q14 14 15 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.3, ease: 'easeOut' } }}
      />
      {/* Center dot */}
      <motion.circle
        cx="16"
        cy="8"
        r="2"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ scale: { duration: 0.3, delay: delay + 0.35, ease: 'easeOut' } }}
      />
      {/* Stem */}
      <motion.path
        d="M16 12 Q15 18 16 24 Q17 27 16 30"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.4, delay: delay + 0.4, ease: 'easeOut' } }}
      />
      {/* Leaf right */}
      <motion.path
        d="M16 20 Q20 18 22 20 Q20 22 16 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.5, ease: 'easeOut' } }}
      />
      {/* Leaf left */}
      <motion.path
        d="M16 24 Q12 22 10 24 Q12 26 16 25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 0.3, delay: delay + 0.55, ease: 'easeOut' } }}
      />
    </motion.svg>
  )
}
