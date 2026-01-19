'use client'

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

const features = [
  {
    title: 'Smart Alerts',
    description:
      'I deliver opportunities straight to your email inbox. Matched to your business, so you only see what matters.',
  },
  {
    title: 'Expert Guidance',
    description:
      'I\'ll teach you procurement from the ground up. From first tender to framework registration.',
  },
  {
    title: 'Event Discovery',
    description:
      'I make sure you never miss a networking opportunity. Meet the Buyer events, right when you need to know.',
  },
  {
    title: 'Partner Matching',
    description:
      'Contract too big to go alone? I\'ll match you with complementary businesses to form winning consortiums.',
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-midnight" id="features">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-display-lg font-bold text-white">
            How I Help
          </h2>
          <p className="mt-4 text-body text-white/70">
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
              {/* Title with underline accent - alternating colors */}
              <h3 className="font-semibold text-xl text-white">
                <span className="relative inline-block pb-1">
                  {feature.title}
                  <span className={`absolute -bottom-0.5 left-0 w-full h-1.5 rounded-full opacity-90 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-r from-accent-orange to-jonty-400'
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
