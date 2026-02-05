import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline' | 'midnight'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jonty-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-jonty-500 text-white hover:bg-jonty-700 shadow-sm hover:shadow-md': variant === 'default',
            'bg-slate-100 text-foreground hover:bg-slate-200': variant === 'secondary',
            'hover:bg-slate-100 text-foreground': variant === 'ghost',
            'border-2 border-[#14142B] bg-transparent hover:bg-[#14142B] hover:text-white text-[#14142B]': variant === 'outline',
            'bg-[#14142B] text-white hover:bg-[#1e1e3f]': variant === 'midnight',
          },
          {
            'h-10 px-6 text-sm': size === 'default',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-8 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
