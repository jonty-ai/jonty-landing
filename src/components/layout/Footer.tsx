import Link from 'next/link'
import { Container } from './Container'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How I Work', href: '#how-it-works' },
  ],
  company: [
    { name: 'About', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200" id="contact">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                Jonty
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your AI procurement assistant. Discover and win UK government contracts with ease.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:jonty@askjonty.ai"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  jonty@askjonty.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Jonty. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-jonty-500" />
              Built for UK Public Sector
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
