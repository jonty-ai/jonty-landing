'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../layout/Container'
import { UserPlus, Sparkles, Trophy } from 'lucide-react'
import { EmailAlertMockup } from '../ui/EmailAlertMockup'
import { CallTranscriptMockup } from '../ui/CallTranscriptMockup'
import { DashboardMockup } from '../ui/DashboardMockup'
import { cn } from '@/lib/utils'

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Tell me about your business',
    description:
      'Book a quick onboarding call—I\'ll learn about your capabilities, certifications, and what contracts you\'re looking for.',
  },
  {
    step: 2,
    icon: Sparkles,
    title: 'I find you opportunities',
    description:
      'I scan government portals and procurement sources daily, sending you relevant contracts and Meet the Buyer event alerts that match your profile.',
  },
  {
    step: 3,
    icon: Trophy,
    title: 'Win more contracts',
    description:
      'With my proactive alerts, expert guidance, and timely reminders, you\'ll be better prepared to submit winning bids and grow your public sector business.',
  },
]

const visuals = {
  1: <CallTranscriptMockup />,
  2: <EmailAlertMockup />,
  3: <DashboardMockup />,
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-20 md:py-28 bg-cream" id="how-it-works">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-display-lg font-bold text-midnight">
            How I Work
          </h2>
          <p className="mt-4 text-body text-slate-600">
            Get started with me in minutes. See results in days.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Accordion Steps */}
          <div className="space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.step
              const Icon = step.icon

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.step * 0.1 }}
                >
                  <button
                    onClick={() => setActiveStep(step.step)}
                    className={cn(
                      'w-full text-left p-5 rounded-xl transition-all duration-300',
                      isActive
                        ? 'bg-white shadow-lg shadow-midnight/5 border border-slate-200'
                        : 'bg-white/50 hover:bg-white/80'
                    )}
                  >
                    <div className="flex gap-4">
                      {/* Circular outlined icon */}
                      <div
                        className={cn(
                          'flex-shrink-0 h-12 w-12 rounded-full border-2 flex items-center justify-center transition-colors',
                          isActive
                            ? 'border-midnight bg-cream'
                            : 'border-slate-300 bg-white'
                        )}
                      >
                        <Icon
                          className={cn(
                            'h-5 w-5 transition-colors',
                            isActive ? 'text-midnight' : 'text-slate-400'
                          )}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={cn(
                            'text-lg font-semibold transition-colors',
                            isActive ? 'text-midnight' : 'text-slate-600'
                          )}
                        >
                          {step.step}. {step.title}
                        </h3>

                        {/* Description - only shows when active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 text-slate-600 leading-relaxed overflow-hidden"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chevron indicator */}
                      <div className="flex-shrink-0 self-start mt-1">
                        <svg
                          className={cn(
                            'h-5 w-5 transition-transform duration-300',
                            isActive ? 'rotate-180 text-midnight' : 'text-slate-400'
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Visual for active step */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-md mx-auto lg:max-w-none"
              >
                {visuals[activeStep as keyof typeof visuals]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
