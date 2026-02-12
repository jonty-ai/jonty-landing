'use client'

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { HandDrawnUnderline, HandDrawnStar } from '../illustrations'
import { QuestionMarkIcon, HandcraftsNoteIcon, BarChartIcon } from '../illustrations/ComingSoonIcons'

const comingSoonFeatures = [
  {
    title: 'Smart Bid Decisions',
    description:
      'Know which opportunities are worth pursuing. AI-powered win probability scoring, competition analysis, and ROI calculations help you focus on bids you can win.',
    keyPoints: ['Win probability', 'ROI analysis', 'Competition level'],
    Icon: QuestionMarkIcon,
  },
  {
    title: 'AI Bid Writing',
    description:
      "First drafts in minutes, polished proposals in days. I'll generate responses matched to tender requirements, using your past wins and case studies to strengthen every section.",
    keyPoints: ['Section-by-section', 'Compliance checking', 'Your voice'],
    Icon: HandcraftsNoteIcon,
  },
  {
    title: 'Market Intelligence',
    description:
      "Understand your market before you bid. Track government spend by department, see who's winning contracts, and identify the best routes to market.",
    keyPoints: ['Spend data', 'Competitor tracking', 'Framework intel'],
    Icon: BarChartIcon,
  },
]

export function ComingSoon() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden" id="coming-soon">
      {/* Decorative floating elements */}
      <div className="hidden md:block">
        <HandDrawnStar
          variant="sparkle"
          size={20}
          color="rgba(1, 1, 12, 0.2)"
          className="absolute top-20 left-[8%]"
          delay={0.3}
          floatDuration={4}
        />
        <HandDrawnStar
          variant="burst"
          size={16}
          color="rgba(1, 1, 12, 0.15)"
          className="absolute top-32 right-[10%]"
          delay={0.6}
          floatDuration={4.5}
        />
        <HandDrawnStar
          variant="burst"
          size={18}
          color="rgba(1, 1, 12, 0.15)"
          className="absolute bottom-32 left-[12%]"
          delay={1}
          floatDuration={3.5}
        />
        <HandDrawnStar
          variant="sparkle"
          size={16}
          color="rgba(1, 1, 12, 0.15)"
          className="absolute bottom-24 right-[8%]"
          delay={0.5}
          floatDuration={4.5}
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
            <h2 className="text-display-lg font-bold text-midnight">
              What&apos;s Next
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <HandDrawnUnderline
                width={160}
                height={10}
                color="rgba(1, 1, 12, 0.4)"
                delay={0.3}
              />
            </div>
          </div>
          <p className="mt-6 text-body text-slate-600">
            More ways I&apos;m learning to help you win
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {comingSoonFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl border border-midnight/10 bg-cream/50"
            >
              {/* Icon in circular container - matching Features section sizing */}
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full border border-midnight/10 bg-cream flex items-center justify-center">
                  <feature.Icon
                    size={22}
                    color={index % 2 === 0 ? '#FF6A00' : '#60A5FA'}
                    delay={0.2 + index * 0.1}
                  />
                </div>
              </div>

              {/* Title with underline accent - alternating colors */}
              <h3 className="font-semibold text-xl text-midnight">
                <span className="relative inline-block pb-1">
                  {feature.title}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-full h-0.5 rounded-full ${
                      index % 2 === 0 ? 'bg-accent-orange' : 'bg-accent-blue'
                    }`}
                  ></span>
                </span>
              </h3>

              {/* Description */}
              <p className="mt-4 text-slate-600 text-body leading-relaxed">
                {feature.description}
              </p>

              {/* Key Points - blue checkmarks */}
              <div className="mt-4 flex flex-wrap gap-2">
                {feature.keyPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center text-xs text-midnight/70"
                  >
                    <span className="mr-1.5 text-accent-blue">✓</span>
                    {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
