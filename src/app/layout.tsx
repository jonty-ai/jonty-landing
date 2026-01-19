import type { Metadata } from 'next'
import { Inter_Tight, PT_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { FaviconCycler } from '@/components/ui'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://askjonty.com'),
  title: 'Jonty - Win More Government Contracts',
  description:
    'Your AI procurement assistant. Discover and win UK government contracts with AI-powered tender alerts, expert guidance, and event discovery.',
  keywords: [
    'government contracts',
    'UK procurement',
    'tender alerts',
    'public sector',
    'bid assistance',
    'Find a Tender',
    'Meet the Buyer',
    'procurement guidance',
    'AI procurement assistant',
  ],
  authors: [{ name: 'Jonty' }],
  creator: 'Jonty',
  publisher: 'Jonty',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Jonty',
    title: 'Jonty - Win More Government Contracts',
    description:
      'Your AI procurement assistant. Discover and win UK government contracts with AI-powered tender alerts and expert guidance.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jonty - Your AI Procurement Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonty - Win More Government Contracts',
    description:
      'Your AI procurement assistant. Discover and win UK government contracts with AI-powered tender alerts and expert guidance.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-j.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${ptSerif.variable}`}>
      <body className="min-h-screen bg-background antialiased font-sans">
        <FaviconCycler />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
