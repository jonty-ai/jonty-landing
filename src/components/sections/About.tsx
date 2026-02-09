'use client'

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { HandDrawnUnderline, HandDrawnStar } from '../illustrations'

export function About() {
  return (
    <section className="relative py-20 md:py-28 bg-cream overflow-hidden" id="about">
      {/* Decorative floating elements */}
      <div className="hidden md:block">
        <HandDrawnStar
          variant="sparkle"
          size={18}
          color="rgba(1, 1, 12, 0.15)"
          className="absolute top-24 right-[10%]"
          delay={0.4}
          floatDuration={4}
        />
        <HandDrawnStar
          variant="burst"
          size={14}
          color="rgba(1, 1, 12, 0.12)"
          className="absolute bottom-28 left-[8%]"
          delay={0.8}
          floatDuration={4.5}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative">
              <h2 className="text-display-lg font-bold text-midnight">
                About Jonty
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
          </div>

          <div className="space-y-6 text-body text-slate-700 leading-relaxed">
            <p>
              Jonty is an AI-powered procurement platform built to help UK businesses discover and win
              government contracts. The public sector spends over{' '}
              <span className="font-semibold text-midnight">&pound;300 billion</span> a year on
              goods and services, but navigating procurement has always been complex, time-consuming,
              and stacked against smaller businesses. We&apos;re changing that.
            </p>
            <p>
              Our AI agent proactively finds relevant tender opportunities, sends timely alerts,
              helps you write winning bids, and guides you through the entire procurement process.
              Whether you prefer the dashboard, chat, email, or phone, Jonty works the way you do.
              No more trawling through portals or missing deadlines.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl border border-midnight/10 bg-white"
            >
              <a href="https://www.linkedin.com/in/chris-m-990251264/" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-midnight hover:text-accent-orange transition-colors">
                <h3 className="inline">Christopher Maitland</h3>
              </a>
              <p className="text-sm text-accent-orange font-medium mt-1">Co-founder &amp; CEO</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl border border-midnight/10 bg-white"
            >
              <a href="https://www.linkedin.com/in/kuldeep-daftary-612690a/" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-midnight hover:text-accent-orange transition-colors">
                <h3 className="inline">Kuldeep Daftary</h3>
              </a>
              <p className="text-sm text-accent-orange font-medium mt-1">Co-founder &amp; CTO</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-slate-500">
              Jonty AI Inc. (Delaware) · Based in London, UK
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
