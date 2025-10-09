import dynamic from 'next/dynamic'
import { ServicesHero } from '@/components/ServicesHero'
import { getCompanyName } from '@/config/contact'

// Dynamic imports for heavy components with framer-motion
const DetailedServices = dynamic(() => import('@/components/DetailedServices').then(mod => ({ default: mod.DetailedServices })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const ProcessSection = dynamic(() => import('@/components/ProcessSection').then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

export const metadata = {
  title: `Our Services - Web Development, Mobile Apps & Cloud Solutions | ${getCompanyName('name')}`,
  description: 'Comprehensive IT services including web development, mobile app development, cloud solutions, and IT consulting. Expert team delivering scalable technology solutions.',
}

export default function Services() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <DetailedServices />
      <ProcessSection />
      <CTABanner />
    </div>
  )
}
