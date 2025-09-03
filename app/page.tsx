import { Hero } from '@/components/Hero'
import { ServicesOverview } from '@/components/ServicesOverview'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { PortfolioHighlights } from '@/components/PortfolioHighlights'
import { Testimonials } from '@/components/Testimonials'
import { CTABanner } from '@/components/CTABanner'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioHighlights />
      <Testimonials />
      <CTABanner />
    </div>
  )
}
