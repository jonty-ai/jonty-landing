'use client'

import { useState, useRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lock,
  ArrowRight,
  Loader2,
  Phone,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils'

/* ─────────────────────────── Schemas ─────────────────────────── */

const passwordSchema = z.object({
  password: z.string().min(1, 'Password is required'),
})

const registrationSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(200),
    companyName: z.string().min(1, 'Company name is required').max(200),
    email: z.string().email('Please enter a valid email'),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .regex(
        /^(?:\+44|0)(?:\d\s?){9,10}$/,
        'Please enter a valid UK phone number'
      ),
    website: z
      .string()
      .url('Please enter a valid URL')
      .or(z.literal(''))
      .optional(),
    callPreference: z.enum(['call_me_now', 'schedule_a_call'], {
      message: 'Please choose a call preference',
    }),
    scheduledAt: z.string().optional(),
  })
  .refine(
    (data) =>
      data.callPreference !== 'schedule_a_call' || (data.scheduledAt && data.scheduledAt.length > 0),
    {
      message: 'Please select a date and time',
      path: ['scheduledAt'],
    }
  )

type PasswordForm = z.infer<typeof passwordSchema>
type RegistrationForm = z.infer<typeof registrationSchema>

/* ─────────────────────────── Constants ─────────────────────────── */

const STEPS = ['Access', 'Register', 'Verify', 'Done'] as const
type Step = (typeof STEPS)[number]

const slideVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

/* ─────────────────────────── Helpers ─────────────────────────── */

function normalisePhone(raw: string): string {
  const digits = raw.replace(/\s+/g, '')
  if (digits.startsWith('0')) return '+44' + digits.slice(1)
  return digits
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function PilotPage() {
  const [step, setStep] = useState<Step>('Access')
  const [phone, setPhone] = useState('')
  const stepIdx = STEPS.indexOf(step)

  return (
    <div className="relative min-h-screen bg-midnight overflow-hidden flex flex-col">
      {/* Warm radial glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,106,0,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <span className="font-logo text-3xl font-bold tracking-tight text-white">
            Jonty
          </span>
          <span className="ml-1.5 text-jonty-400 font-logo text-3xl">.</span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-8 flex items-center gap-2"
        >
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  i <= stepIdx
                    ? 'bg-jonty-500 w-8 sm:w-10'
                    : 'bg-white/10 w-5 sm:w-6'
                )}
              />
            </div>
          ))}
        </motion.div>

        {/* Step card */}
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {step === 'Access' && (
              <StepWrapper key="access">
                <PasswordStep onSuccess={() => setStep('Register')} />
              </StepWrapper>
            )}
            {step === 'Register' && (
              <StepWrapper key="register">
                <RegistrationStep
                  onSuccess={(phoneNumber) => {
                    setPhone(phoneNumber)
                    setStep('Verify')
                  }}
                />
              </StepWrapper>
            )}
            {step === 'Verify' && (
              <StepWrapper key="verify">
                <OtpStep phone={phone} onSuccess={() => setStep('Done')} />
              </StepWrapper>
            )}
            {step === 'Done' && (
              <StepWrapper key="done">
                <ConfirmationStep />
              </StepWrapper>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer accent line */}
      <div className="relative z-10 h-1 bg-jonty-gradient" />
    </div>
  )
}

/* ─────────────────────── Shared wrapper ──────────────────────── */

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────── Error banner ────────────────────────── */

function ErrorBanner({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </motion.div>
  )
}

/* ─────────────────────── Field label ─────────────────────────── */

function Label({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode
  htmlFor?: string
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-foreground/80 mb-1.5"
    >
      {children}
      {required && <span className="text-jonty-500 ml-0.5">*</span>}
    </label>
  )
}

/* ═══════════════════════ STEP 1 — PASSWORD ═══════════════════════ */

function PasswordStep({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>()

  const onSubmit = async (data: PasswordForm) => {
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: data.password }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || 'Invalid password')
        return
      }
      onSuccess()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white shadow-2xl shadow-black/20 p-8 sm:p-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-jonty-50 text-jonty-500">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Pilot Access</h1>
          <p className="text-sm text-muted-foreground">
            Enter your pilot password to continue
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && <ErrorBanner message={error} />}

        <div>
          <Label htmlFor="password" required>
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter pilot password"
            autoFocus
            error={!!errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="mr-2 h-4 w-4" />
          )}
          Continue
        </Button>
      </form>
    </div>
  )
}

/* ═══════════════════════ STEP 2 — REGISTRATION ═══════════════════ */

function RegistrationStep({
  onSuccess,
}: {
  onSuccess: (phone: string) => void
}) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>({
    defaultValues: { callPreference: 'call_me_now' },
  })

  const callPref = watch('callPreference')

  const onSubmit = async (data: RegistrationForm) => {
    // Client-side zod validation
    const parsed = registrationSchema.safeParse(data)
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      setError(firstError?.message || 'Please check your inputs')
      return
    }

    setError('')
    setLoading(true)

    const normalisedPhone = normalisePhone(data.phone)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name.trim(),
          companyName: data.companyName.trim(),
          email: data.email.trim().toLowerCase(),
          phone: normalisedPhone,
          website: data.website?.trim() || undefined,
          callPreference: data.callPreference,
          scheduledAt: data.scheduledAt || undefined,
        }),
      })
      const json = await res.json()

      if (!res.ok || !json.success) {
        const msg =
          json.error ||
          json.data?.message ||
          'Registration failed. Please try again.'
        setError(msg)
        return
      }

      onSuccess(normalisedPhone)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white shadow-2xl shadow-black/20 p-8 sm:p-10">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-foreground">
          Join the Jonty pilot
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about yourself and we&apos;ll get you set up with a personal
          onboarding call.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && <ErrorBanner message={error} />}

        {/* Name */}
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <Input
            id="name"
            placeholder="Jane Smith"
            autoFocus
            error={!!errors.name}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="companyName" required>
            Company name
          </Label>
          <Input
            id="companyName"
            placeholder="Acme Ltd"
            error={!!errors.companyName}
            {...register('companyName', { required: 'Company name is required' })}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@acme.co.uk"
            error={!!errors.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" required>
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 7700 900000"
            error={!!errors.phone}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^(?:\+44|0)(?:\d\s?){9,10}$/,
                message: 'Please enter a valid UK phone number',
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Website */}
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://acme.co.uk"
            error={!!errors.website}
            {...register('website')}
          />
          {errors.website && (
            <p className="mt-1 text-xs text-red-500">
              {errors.website.message}
            </p>
          )}
        </div>

        {/* Call preference */}
        <fieldset className="space-y-2.5">
          <Label required>How would you like your onboarding call?</Label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={cn(
                'flex cursor-pointer items-center gap-2.5 rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all',
                callPref === 'call_me_now'
                  ? 'border-jonty-500 bg-jonty-50 text-jonty-700'
                  : 'border-slate-200 bg-white text-foreground hover:border-slate-300'
              )}
            >
              <input
                type="radio"
                value="call_me_now"
                className="sr-only"
                {...register('callPreference', {
                  required: 'Please choose a preference',
                })}
              />
              <Phone className="h-4 w-4 shrink-0" />
              <span>Call me now</span>
            </label>

            <label
              className={cn(
                'flex cursor-pointer items-center gap-2.5 rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all',
                callPref === 'schedule_a_call'
                  ? 'border-jonty-500 bg-jonty-50 text-jonty-700'
                  : 'border-slate-200 bg-white text-foreground hover:border-slate-300'
              )}
            >
              <input
                type="radio"
                value="schedule_a_call"
                className="sr-only"
                {...register('callPreference')}
              />
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Schedule</span>
            </label>
          </div>
          {errors.callPreference && (
            <p className="text-xs text-red-500">
              {errors.callPreference.message}
            </p>
          )}
        </fieldset>

        {/* Schedule datetime */}
        <AnimatePresence>
          {callPref === 'schedule_a_call' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Label htmlFor="scheduledAt" required>
                Preferred date &amp; time
              </Label>
              <Input
                id="scheduledAt"
                type="datetime-local"
                className="rounded-xl"
                error={!!errors.scheduledAt}
                min={new Date().toISOString().slice(0, 16)}
                {...register('scheduledAt')}
              />
              {errors.scheduledAt && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.scheduledAt.message}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="mr-2 h-4 w-4" />
          )}
          Send verification code
        </Button>
      </form>
    </div>
  )
}

/* ═══════════════════════ STEP 3 — OTP ════════════════════════════ */

function OtpStep({
  phone,
  onSuccess,
}: {
  phone: string
  onSuccess: () => void
}) {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''))
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d?$/.test(value)) return

      const next = [...digits]
      next[index] = value
      setDigits(next)
      setError('')

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    },
    [digits]
  )

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    },
    [digits]
  )

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    const next = Array(6).fill('')
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i]
    setDigits(next)
    const focusIdx = Math.min(pasted.length, 5)
    inputRefs.current[focusIdx]?.focus()
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const code = digits.join('')
    if (code.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/register/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || json.data?.message || 'Invalid code. Please try again.')
        return
      }
      onSuccess()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const masked = phone.slice(0, -4).replace(/./g, '\u2022') + phone.slice(-4)

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white shadow-2xl shadow-black/20 p-8 sm:p-10">
      <div className="mb-6 text-center">
        <h1 className="text-lg font-semibold text-foreground">
          Verify your phone
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          We sent a 6-digit code to{' '}
          <span className="font-medium text-foreground">{masked}</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        {error && <ErrorBanner message={error} />}

        <div className="flex justify-center gap-2.5" onPaste={handlePaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={d}
              autoFocus={i === 0}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={cn(
                'h-13 w-11 rounded-xl border-2 bg-white text-center text-xl font-semibold transition-all',
                'focus:border-jonty-500 focus:outline-none focus:ring-2 focus:ring-jonty-500/20',
                d ? 'border-jonty-400 text-foreground' : 'border-slate-200 text-muted-foreground'
              )}
            />
          ))}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="mr-2 h-4 w-4" />
          )}
          Verify
        </Button>
      </form>
    </div>
  )
}

/* ═══════════════════════ STEP 4 — CONFIRMATION ═══════════════════ */

function ConfirmationStep() {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white shadow-2xl shadow-black/20 p-8 sm:p-10 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-jonty-50"
      >
        <CheckCircle2 className="h-8 w-8 text-jonty-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h1 className="text-xl font-semibold text-foreground">
          You&apos;re all set!
        </h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
          Your phone has been verified and your onboarding call is being
          arranged. We&apos;ll be in touch shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-6"
      >
        <a
          href="/"
          className="text-sm font-medium text-jonty-500 hover:text-jonty-700 transition-colors"
        >
          Back to askjonty.ai
        </a>
      </motion.div>
    </div>
  )
}
