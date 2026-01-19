'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '../layout/Container'
import { AudioPlayer } from '../ui/AudioPlayer'
import { Button } from '../ui/Button'

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen pt-24 pb-12 md:pt-28 md:pb-16 flex items-center overflow-hidden bg-cream"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Intro */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-display-hero font-bold text-midnight font-logo"
          >
            Hi, I&apos;m Jonty<span className="text-accent-orange">.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-3 text-body-lg text-midnight/90"
          >
            I make public sector procurement simple.
          </motion.p>

          {/* Audio Player Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 flex justify-center"
          >
            <AudioPlayer />
          </motion.div>

          {/* Audio Prompt */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-3 text-midnight/70 text-sm italic"
          >
            Let me tell you how I work.
          </motion.p>

          {/* Who is Jonty Description */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <p className="text-midnight text-body leading-relaxed">
              I work proactively. Finding opportunities, sending alerts, and guiding you
              through procurement. Chat, email, or just pick up the phone.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10"
          >
            <Button asChild size="lg">
              <Link href="#waitlist">Get Early Access</Link>
            </Button>

            {/* Channel icons */}
            <div className="mt-6 inline-flex items-center justify-center gap-5 text-midnight/60 bg-midnight/5 rounded-xl px-6 py-3">
              <span className="text-sm">Available via</span>
              {/* Chat */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {/* Email */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {/* Phone */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
