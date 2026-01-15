import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardIconProps {
  children: React.ReactNode
  className?: string
}

export function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jonty-100 text-jonty-600',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('mt-2 text-sm text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  )
}
