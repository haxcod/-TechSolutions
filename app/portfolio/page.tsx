import { PortfolioHero } from '@/components/PortfolioHero'
import { PortfolioGrid } from '@/components/PortfolioGrid'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Our Portfolio - Web & Mobile Development Projects | Haxcod Inc',
  description: 'Explore our portfolio of successful web development, mobile app development, and cloud solution projects. See how we\'ve helped businesses transform their digital presence.',
}

export default function Portfolio() {
  return (
    <div className="pt-20">
      <PortfolioHero />
      <PortfolioGrid />
      <CTABanner />
    </div>
  )
}
