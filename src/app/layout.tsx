import type { Metadata } from 'next'
import { Inter_Tight, PT_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { FaviconCycler } from '@/components/ui'
import { StructuredData } from '@/components/seo'

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://askjonty.ai'),
  title: 'Jonty - AI Procurement Assistant for Government Contracts',
  description:
    'Jonty is a GovTech AI startup helping SMEs win government contracts. Get AI-powered tender alerts, procurement guidance, event discovery, and partner matching for public sector opportunities.',
  keywords: [
    // GovTech & positioning
    'GovTech',
    'GovTech startup',
    'government technology',
    'public sector technology',
    // Core product
    'AI procurement assistant',
    'procurement automation',
    'tender management software',
    'bid management platform',
    // Use cases
    'government contracts',
    'public procurement',
    'tender alerts',
    'public sector',
    'SME government contracts',
    // Features
    'Find a Tender',
    'Meet the Buyer',
    'procurement guidance',
    'bid assistance',
    // Competitor alternatives
    'Stotles alternative',
    'Tussell alternative',
    'AutogenAI alternative',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Jonty',
    title: 'Jonty - AI Procurement Assistant for Government Contracts',
    description:
      'GovTech AI startup helping SMEs win government contracts with AI-powered tender alerts, procurement guidance, and event discovery.',
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
    title: 'Jonty - AI Procurement Assistant for Government Contracts',
    description:
      'GovTech AI startup helping SMEs win government contracts with AI-powered tender alerts, procurement guidance, and event discovery.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-dot.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${ptSerif.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <FaviconCycler />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
