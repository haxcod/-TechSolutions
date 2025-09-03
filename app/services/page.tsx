import { ServicesHero } from '@/components/ServicesHero'
import { DetailedServices } from '@/components/DetailedServices'
import { ProcessSection } from '@/components/ProcessSection'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Our Services - Web Development, Mobile Apps & Cloud Solutions | TechSolutions',
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
