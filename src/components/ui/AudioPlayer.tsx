'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AudioPlayerProps {
  className?: string
}

export function AudioPlayer({ className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)

    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Generate waveform bars with varying heights
  const waveformBars = [
    0.3, 0.5, 0.7, 0.4, 0.8, 0.6, 0.9, 0.5, 0.7, 0.4,
    0.6, 0.8, 0.5, 0.7, 0.9, 0.6, 0.4, 0.7, 0.5, 0.8,
    0.6, 0.4, 0.7, 0.5, 0.3, 0.6, 0.8, 0.4, 0.5, 0.7,
  ]

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/sounds/jonty-sample.mp3" preload="auto" />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#14142B] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#14142B] focus:ring-offset-2 shadow-lg"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 stroke-white" strokeWidth={2.5} />
        ) : (
          <Play className="h-6 w-6 ml-1 stroke-white" strokeWidth={2.5} />
        )}
      </button>

      {/* Waveform Visualization */}
      <div className="flex items-center gap-[3px] h-10">
        {waveformBars.map((height, index) => (
          <div
            key={index}
            className={cn(
              'w-[3px] rounded-full transition-all duration-150',
              isPlaying
                ? 'bg-accent-orange/70'
                : 'bg-accent-orange'
            )}
            style={{
              height: `${height * 100}%`,
              animation: isPlaying ? `pulse 0.5s ease-in-out ${index * 0.05}s infinite alternate` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}
