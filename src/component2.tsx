// app/page.tsx
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Services from '@/components/services'
import Work from '@/components/work'
import Testimonials from '@/components/testimonials'
import CtaBanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  )
}