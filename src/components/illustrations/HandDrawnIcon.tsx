'use client'

import { motion } from 'framer-motion'

type IconVariant = 'person' | 'search' | 'trophy' | 'bell' | 'lightbulb' | 'calendar' | 'handshake'

interface HandDrawnIconProps {
  variant: IconVariant
  size?: number
  className?: string
  color?: string
  strokeWidth?: number
  delay?: number
  animated?: boolean
}

// Hand-drawn style SVG paths for each icon
const iconPaths: Record<IconVariant, { paths: string[]; filled?: string[] }> = {
  person: {
    // Hand-drawn person with speech bubble
    paths: [
      // Head (slightly wobbly circle)
      'M12 3 Q14.5 3 15 5 Q15.5 7 14 8.5 Q12 10 10 8.5 Q8.5 7 9 5 Q9.5 3 12 3',
      // Body
      'M8 11 Q9 10 12 10 Q15 10 16 11 Q17 12 17 15 L17 18 Q17 19 16 19 L8 19 Q7 19 7 18 L7 15 Q7 12 8 11',
      // Speech bubble
      'M19 4 Q22 4 22 6 L22 9 Q22 11 19 11 L17 11 L15 13 L15.5 11 Q14 11 14 9 L14 6 Q14 4 17 4 L19 4',
      // Dots in speech bubble
      'M16.5 7.5 L16.8 7.5 M18.5 7.5 L18.8 7.5 M20.5 7.5 L20.8 7.5',
    ],
  },
  search: {
    // Hand-drawn magnifying glass with sparkles
    paths: [
      // Magnifying glass circle (wobbly)
      'M10.5 4 Q14 3.5 16 6 Q18 8.5 17.5 11 Q17 14 14 16 Q11 17.5 8 16 Q5 14 4.5 11 Q4 8 6 6 Q8 4 10.5 4',
      // Handle
      'M15 15 Q16 16 18 18 Q19 19 20 20 Q20.5 20.5 20 21 Q19.5 21.5 19 21 L16 18',
      // Sparkle top right
      'M18 3 L18 5 M17 4 L19 4',
      // Sparkle bottom left
      'M3 16 L3 18 M2 17 L4 17',
    ],
  },
  trophy: {
    // Hand-drawn trophy with celebration marks
    paths: [
      // Cup body (wobbly)
      'M7 4 Q6.5 4 6.5 5 L6 9 Q6 12 9 13 L9 15 L8 17 Q7.5 17.5 8 18 L16 18 Q16.5 17.5 16 17 L15 15 L15 13 Q18 12 18 9 L17.5 5 Q17.5 4 17 4 L7 4',
      // Left handle
      'M6 6 Q4 6 4 8 Q4 10 6 10',
      // Right handle
      'M18 6 Q20 6 20 8 Q20 10 18 10',
      // Base
      'M9 18 L9 20 Q9 21 10 21 L14 21 Q15 21 15 20 L15 18',
      // Celebration marks left
      'M2 4 L2.5 5 M3 3 L4 4',
      // Celebration marks right
      'M22 4 L21.5 5 M21 3 L20 4',
      // Star on trophy
      'M12 8 L12.5 9.5 L14 10 L12.5 10.5 L12 12 L11.5 10.5 L10 10 L11.5 9.5 Z',
    ],
    filled: [
      // Fill the star
      'M12 8 L12.5 9.5 L14 10 L12.5 10.5 L12 12 L11.5 10.5 L10 10 L11.5 9.5 Z',
    ],
  },
  bell: {
    // Hand-drawn notification bell
    paths: [
      // Bell body (wobbly dome shape)
      'M12 3 Q12.5 3 13 3.5 L13 5 Q16 6 17 9 Q18 12 18 15 L6 15 Q6 12 7 9 Q8 6 11 5 L11 3.5 Q11.5 3 12 3',
      // Bell rim (slight curve)
      'M5 15 Q5 16 6 16.5 L18 16.5 Q19 16 19 15',
      // Clapper
      'M11 17 Q10 18 10.5 19 Q11 20 12 20 Q13 20 13.5 19 Q14 18 13 17',
      // Ring at top
      'M11 3 Q11 2 12 2 Q13 2 13 3',
      // Sound waves left
      'M4 10 Q3 11 3 12 M2 9 Q1 11 2 13',
      // Sound waves right
      'M20 10 Q21 11 21 12 M22 9 Q23 11 22 13',
    ],
  },
  lightbulb: {
    // Hand-drawn lightbulb with rays
    paths: [
      // Bulb shape (wobbly)
      'M12 4 Q16 4 17 8 Q18 11 16 14 Q15 16 15 17 L9 17 Q9 16 8 14 Q6 11 7 8 Q8 4 12 4',
      // Filament
      'M10 10 Q11 12 12 10 Q13 12 14 10',
      // Base ridges
      'M9 17 L15 17 M9.5 18.5 L14.5 18.5 M10 20 L14 20',
      // Bottom cap
      'M10 20 Q10 21 11 21.5 L13 21.5 Q14 21 14 20',
      // Rays top
      'M12 1 L12 2.5',
      // Rays top-left
      'M7 3 L8.5 4.5',
      // Rays top-right
      'M17 3 L15.5 4.5',
      // Rays left
      'M4 9 L5.5 9',
      // Rays right
      'M20 9 L18.5 9',
    ],
  },
  calendar: {
    // Hand-drawn calendar with event marker
    paths: [
      // Calendar body (rounded rectangle)
      'M5 6 Q5 5 6 5 L18 5 Q19 5 19 6 L19 19 Q19 20 18 20 L6 20 Q5 20 5 19 L5 6',
      // Top bar
      'M5 9 L19 9',
      // Hanging rings left
      'M8 3 L8 7',
      // Hanging rings right
      'M16 3 L16 7',
      // Grid lines vertical
      'M9.5 9 L9.5 20 M14.5 9 L14.5 20',
      // Grid lines horizontal
      'M5 13 L19 13 M5 16.5 L19 16.5',
      // Event marker (star/dot)
      'M12 14.5 L12.3 15.3 L13.2 15.3 L12.5 15.8 L12.7 16.7 L12 16.2 L11.3 16.7 L11.5 15.8 L10.8 15.3 L11.7 15.3 Z',
    ],
    filled: [
      'M12 14.5 L12.3 15.3 L13.2 15.3 L12.5 15.8 L12.7 16.7 L12 16.2 L11.3 16.7 L11.5 15.8 L10.8 15.3 L11.7 15.3 Z',
    ],
  },
  handshake: {
    // Hand-drawn tree for partnership/growth
    paths: [
      // Ground line
      'M5 21 Q12 21.5 19 21',
      // Trunk
      'M12 21 Q11.5 18 12 15',
      // Left root
      'M12 21 Q10 22 8 21.5',
      // Right root
      'M12 21 Q14 22 16 21.5',
      // Main foliage left
      'M12 15 Q8 14 6 11 Q5 8 7 6 Q9 4 12 5',
      // Main foliage right
      'M12 15 Q16 14 18 11 Q19 8 17 6 Q15 4 12 5',
      // Inner branch left
      'M12 12 Q10 11 9 9 Q8.5 7 10 7',
      // Inner branch right
      'M12 12 Q14 11 15 9 Q15.5 7 14 7',
      // Small branch left
      'M10 14 Q8 13 7 12',
      // Small branch right
      'M14 14 Q16 13 17 12',
    ],
  },
}

export function HandDrawnIcon({
  variant,
  size = 24,
  className = '',
  color = 'currentColor',
  strokeWidth = 1.5,
  delay = 0,
  animated = true,
}: HandDrawnIconProps) {
  const { paths, filled } = iconPaths[variant]

  const pathElements = paths.map((d, i) => {
    const isFilled = filled?.includes(d)

    if (animated) {
      return (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={isFilled ? color : 'none'}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { duration: 0.4, delay: delay + i * 0.1, ease: 'easeOut' },
            opacity: { duration: 0.2, delay: delay + i * 0.1 },
          }}
        />
      )
    }

    return (
      <path
        key={i}
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isFilled ? color : 'none'}
      />
    )
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {pathElements}
    </svg>
  )
}
