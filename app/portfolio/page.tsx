import dynamic from 'next/dynamic'
import { PortfolioHero } from '@/components/PortfolioHero'
import { getCompanyName } from '@/config/contact'

// Dynamic imports for heavy components
const PortfolioGrid = dynamic(() => import('@/components/PortfolioGrid').then(mod => ({ default: mod.PortfolioGrid })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

export const metadata = {
  title: `Our Portfolio - Web & Mobile Development Projects | ${getCompanyName('name')}`,
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
