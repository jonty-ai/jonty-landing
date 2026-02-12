const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://askjonty.ai'

const organizationSchema = {
  '@type': 'Organization',
  name: 'Jonty AI Inc.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/og-image.png`,
  description:
    'AI-powered procurement platform helping businesses discover and win government contracts.',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Christopher Maitland',
    },
    {
      '@type': 'Person',
      name: 'Kuldeep Daftary',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/jonty/',
    'https://twitter.com/askjonty',
    'https://www.instagram.com/askjonty',
    'https://www.tiktok.com/@askjonty',
  ],
}

const softwareApplicationSchema = {
  '@type': 'SoftwareApplication',
  name: 'Jonty',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered procurement assistant for government contracts. Helps SMEs discover tenders, get guidance, and win public sector opportunities.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free to get started',
  },
  featureList: [
    'AI-powered tender alerts',
    'Procurement guidance',
    'Meet the Buyer event discovery',
    'Partner matching for consortiums',
  ],
}

const services = [
  {
    '@type': 'Service',
    name: 'Smart Alerts',
    description:
      'AI-powered tender alerts that match your business capabilities with relevant government contract opportunities.',
    provider: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@type': 'Service',
    name: 'Expert Guidance',
    description:
      'Procurement training and guidance to help SMEs navigate the public sector bidding process successfully.',
    provider: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@type': 'Service',
    name: 'Event Discovery',
    description:
      'Find and attend Meet the Buyer events to connect directly with public sector buyers.',
    provider: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@type': 'Service',
    name: 'Partner Matching',
    description:
      'Build winning consortiums by finding complementary businesses to bid on larger government contracts together.',
    provider: { '@id': `${SITE_URL}/#organization` },
  },
]

const serviceListSchema = {
  '@type': 'ItemList',
  name: 'Jonty Services',
  description: 'AI-powered procurement services for government contracts',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: service,
  })),
}

const webPageSchema = {
  '@type': 'WebPage',
  name: 'Jonty - AI Procurement Assistant for Government Contracts',
  description:
    'GovTech AI startup helping SMEs win government contracts with AI-powered tender alerts, procurement guidance, and event discovery.',
  url: SITE_URL,
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Jonty',
    url: SITE_URL,
  },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: { '@id': `${SITE_URL}/#organization` },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { ...organizationSchema, '@id': `${SITE_URL}/#organization` },
    softwareApplicationSchema,
    serviceListSchema,
    webPageSchema,
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
