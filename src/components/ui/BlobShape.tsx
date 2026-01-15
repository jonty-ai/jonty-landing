'use client'

import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface BlobShapeProps {
  className?: string
  variant?: 1 | 2 | 3
  style?: CSSProperties
}

export function BlobShape({ className, variant = 1, style }: BlobShapeProps) {
  const paths = {
    1: 'M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,339Q40,271,46.5,197.5Q53,124,115,69Q177,14,248,30.5Q319,47,383.5,93Q448,139,460,209.5Q472,280,440.5,320.5Z',
    2: 'M411.39826,320.69314Q386.69657,391.38629,310.34829,411.39826Q234,431.41023,170.30509,394.52158Q106.61017,357.63293,60.69314,285.81647Q14.77611,214,64.27611,146.21696Q113.77611,78.43391,186.88806,60.71696Q260,43,315.76567,86.21696Q371.53134,129.43391,405.20567,189.71696Q438.88,250,411.39826,320.69314Z',
    3: 'M453.5,316.5Q421,383,356.5,412.5Q292,442,219.5,441Q147,440,101.5,377.5Q56,315,46,240.5Q36,166,97,117Q158,68,233,57Q308,46,365,99Q422,152,453,201Q484,250,453.5,316.5Z',
  }

  return (
    <div className={cn('absolute', className)} style={style}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d={paths[variant]}
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
