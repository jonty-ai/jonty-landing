'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { cn } from '@/lib/utils'
import { Loader2, CheckCircle2 } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

interface EmailFormProps {
  className?: string
  buttonText?: string
  placeholder?: string
  layout?: 'inline' | 'stacked'
}

export function EmailForm({
  className,
  buttonText = 'Get Early Access',
  placeholder = 'Enter your work email',
  layout = 'inline',
}: EmailFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (!formspreeId) {
        throw new Error('Formspree ID not configured')
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('flex items-center gap-2 text-jonty-500', className)}>
        <CheckCircle2 className="h-5 w-5" />
        <span className="font-medium">Thanks! We&apos;ll be in touch soon.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        layout === 'inline'
          ? 'flex flex-col gap-3 sm:flex-row sm:items-start'
          : 'flex flex-col gap-3',
        className
      )}
    >
      <div className="flex-1">
        <Input
          type="email"
          placeholder={placeholder}
          error={!!errors.email}
          {...register('email')}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
        {status === 'error' && (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className={layout === 'inline' ? 'w-full sm:w-auto' : 'w-full'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          buttonText
        )}
      </Button>
    </form>
  )
}
