'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from './Container'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How I Work', href: '#how-it-works' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <Container>
          <nav className="flex items-center justify-between py-4" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Jonty</span>
                <span className="text-2xl font-bold text-foreground tracking-tight">
                  Jonty
                </span>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-semibold text-[#14142B] transition-colors hover:text-[#FF6B35]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Button asChild variant="midnight">
                <Link href="#waitlist">Get Early Access</Link>
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl">
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Jonty</span>
                  <span className="text-2xl font-bold text-foreground tracking-tight">
                    Jonty
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-slate-700 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-6">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-lg font-semibold text-slate-900 hover:bg-slate-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Orange divider + Email */}
                <div className="mt-6 pt-6 border-t border-[#FF6B35]">
                  <a
                    href="mailto:hi@askjonty.ai"
                    className="block px-4 py-2 text-base text-slate-600 hover:text-[#FF6B35] transition-colors"
                  >
                    hi@askjonty.ai
                  </a>
                </div>
              </nav>

              <div className="px-6 py-6">
                <Button asChild variant="midnight" className="w-full" size="lg">
                  <Link href="#waitlist" onClick={() => setMobileMenuOpen(false)}>
                    Get Early Access
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
