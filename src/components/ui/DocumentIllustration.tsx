'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DocumentIllustrationProps {
  className?: string
}

export function DocumentIllustration({ className }: DocumentIllustrationProps) {
  return (
    <div className={cn('relative w-full h-full', className)}>
      {/* Main Document */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <svg
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
        >
          {/* Document Background */}
          <rect x="20" y="20" width="260" height="340" rx="8" fill="white" />
          <rect x="20" y="20" width="260" height="340" rx="8" stroke="#E5E7EB" strokeWidth="1" />

          {/* Document Lines */}
          <rect x="50" y="60" width="180" height="8" rx="4" fill="#1F2937" />
          <rect x="50" y="85" width="140" height="8" rx="4" fill="#1F2937" />
          <rect x="50" y="120" width="200" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="135" width="180" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="150" width="190" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="165" width="160" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="195" width="200" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="210" width="170" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="225" width="185" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="255" width="200" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="270" width="150" height="4" rx="2" fill="#D1D5DB" />
          <rect x="50" y="285" width="180" height="4" rx="2" fill="#D1D5DB" />

          {/* Checkbox area */}
          <rect x="50" y="320" width="16" height="16" rx="2" stroke="#D1D5DB" strokeWidth="2" fill="white" />
          <rect x="80" y="323" width="100" height="4" rx="2" fill="#D1D5DB" />
        </svg>
      </motion.div>

      {/* Second Document (behind) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 -left-4 z-0"
      >
        <svg
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90%] h-auto"
        >
          <rect x="20" y="20" width="260" height="340" rx="8" fill="white" />
          <rect x="20" y="20" width="260" height="340" rx="8" stroke="#E5E7EB" strokeWidth="1" />
          <rect x="50" y="60" width="180" height="8" rx="4" fill="#374151" />
          <rect x="50" y="85" width="140" height="8" rx="4" fill="#374151" />
          <rect x="50" y="120" width="200" height="4" rx="2" fill="#E5E7EB" />
          <rect x="50" y="135" width="180" height="4" rx="2" fill="#E5E7EB" />
          <rect x="50" y="150" width="190" height="4" rx="2" fill="#E5E7EB" />
        </svg>
      </motion.div>

      {/* Floating Coins */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 z-20"
      >
        <Coin className="w-14 h-14" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-20 -right-6 z-20"
      >
        <Coin className="w-10 h-10" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-4 z-20"
      >
        <Coin className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute bottom-20 -right-4 z-20"
      >
        <Coin className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-40 right-8 z-20"
      >
        <Coin className="w-8 h-8" />
      </motion.div>
    </div>
  )
}

function Coin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('drop-shadow-lg', className)}
    >
      {/* Coin base */}
      <circle cx="30" cy="30" r="28" fill="url(#coinGradient)" />
      <circle cx="30" cy="30" r="24" stroke="#D97706" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="30" cy="30" r="20" stroke="#FBBF24" strokeWidth="1" strokeOpacity="0.8" />

      {/* Pound symbol */}
      <text
        x="30"
        y="38"
        textAnchor="middle"
        fill="#92400E"
        fontSize="24"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        £
      </text>

      <defs>
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
