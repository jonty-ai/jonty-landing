import { Header, Footer } from '@/components/layout'
import { Hero, Features, ComingSoon, HowItWorks, About, EmailCapture } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ComingSoon />
        <HowItWorks />
        <About />
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
