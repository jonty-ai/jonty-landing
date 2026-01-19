'use client'

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { HandDrawnUnderline, HandDrawnStar, HandDrawnIcon, HandDrawnTree } from '../illustrations'

const features = [
  {
    title: 'Smart Alerts',
    description:
      'I deliver opportunities straight to your email inbox. Matched to your business, so you only see what matters.',
    icon: 'bell' as const,
  },
  {
    title: 'Expert Guidance',
    description:
      'I\'ll teach you procurement from the ground up. From first tender to framework registration.',
    icon: 'lightbulb' as const,
  },
  {
    title: 'Event Discovery',
    description:
      'I make sure you never miss a networking opportunity. Meet the Buyer events, right when you need to know.',
    icon: 'calendar' as const,
  },
  {
    title: 'Partner Matching',
    description:
      'Contract too big to go alone? I\'ll match you with complementary businesses to form winning consortiums.',
    icon: 'handshake' as const,
  },
]

export function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-midnight overflow-hidden" id="features">
      {/* Decorative floating stars - hidden on mobile */}
      <div className="hidden md:block">
        <HandDrawnStar
          variant="sparkle"
          size={16}
          color="rgba(255, 255, 255, 0.25)"
          className="absolute top-24 left-[8%]"
          delay={0.3}
          floatDuration={4}
        />
        <HandDrawnStar
          variant="burst"
          size={14}
          color="rgba(255, 255, 255, 0.2)"
          className="absolute top-40 right-[12%]"
          delay={0.8}
          floatDuration={3.5}
        />
        <HandDrawnStar
          variant="sparkle"
          size={12}
          color="rgba(255, 255, 255, 0.15)"
          className="absolute bottom-32 left-[15%]"
          delay={1.2}
          floatDuration={4.5}
        />
        <HandDrawnStar
          variant="burst"
          size={18}
          color="rgba(255, 255, 255, 0.2)"
          className="absolute bottom-20 right-[10%]"
          delay={0.5}
          floatDuration={3}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-display-lg font-bold text-white">
              How I Help
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <HandDrawnUnderline
                width={130}
                height={10}
                color="rgba(255, 255, 255, 0.6)"
                delay={0.3}
              />
            </div>
          </div>
          <p className="mt-6 text-body text-white/70">
            Government contracts shouldn&apos;t require a PhD to understand. I cut through the jargon and find opportunities that match your business.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.03]"
            >
              {/* Icon in circular container */}
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  {feature.icon === 'handshake' ? (
                    <HandDrawnTree
                      size={22}
                      color={index % 2 === 0 ? '#FF6A00' : '#60A5FA'}
                      delay={0.2 + index * 0.1}
                    />
                  ) : (
                    <HandDrawnIcon
                      variant={feature.icon}
                      size={22}
                      color={index % 2 === 0 ? '#FF6A00' : '#60A5FA'}
                      strokeWidth={1.5}
                      delay={0.2 + index * 0.1}
                    />
                  )}
                </div>
              </div>

              {/* Title with underline accent - alternating colors */}
              <h3 className="font-semibold text-xl text-white">
                <span className="relative inline-block pb-1">
                  {feature.title}
                  <span className={`absolute -bottom-0.5 left-0 w-full h-0.5 rounded-full ${
                    index % 2 === 0
                      ? 'bg-accent-orange'
                      : 'bg-accent-blue'
                  }`}></span>
                </span>
              </h3>

              {/* Description */}
              <p className="mt-4 text-white/80 text-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
