'use client'

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { EmailForm } from '../forms/EmailForm'

export function EmailCapture() {
  return (
    <section className="py-20 md:py-28 bg-[#14142B]" id="waitlist">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-display-md font-bold text-white">
            Get Early Access
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Be among the first to work with me. Join UK businesses who are getting ahead in government procurement.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <EmailForm
              buttonText="Join the Waitlist"
              placeholder="Enter your work email"
            />
            <p className="mt-4 text-sm text-slate-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-jonty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free during beta
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-jonty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Priority onboarding
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-jonty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Shape the roadmap
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
