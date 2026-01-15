'use client'

import { useEffect, useRef } from 'react'

const LETTERS = ['j', 'o', 'n', 't', 'y'] as const
const CYCLE_INTERVAL_MS = 700
const FAVICON_PATH = '/favicons/favicon-'

export function FaviconCycler() {
  const indexRef = useRef(0)
  const linkRef = useRef<HTMLLinkElement | null>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      return // Don't animate if user prefers reduced motion
    }

    // Preload all favicon images
    LETTERS.forEach((letter) => {
      const img = new Image()
      img.src = `${FAVICON_PATH}${letter}.svg`
    })

    // Find or create the favicon link element
    let link = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"][type="image/svg+xml"]'
    )

    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }

    linkRef.current = link

    // Set initial favicon
    link.href = `${FAVICON_PATH}${LETTERS[0]}.svg`

    // Start cycling
    const intervalId = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % LETTERS.length
      if (linkRef.current) {
        linkRef.current.href = `${FAVICON_PATH}${LETTERS[indexRef.current]}.svg`
      }
    }, CYCLE_INTERVAL_MS)

    // Cleanup
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  // This component renders nothing visible
  return null
}
