import { Header, Footer } from '@/components/layout'
import { Hero, Features, HowItWorks, EmailCapture } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
