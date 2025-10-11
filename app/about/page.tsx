import dynamic from 'next/dynamic'
import { AboutHero } from '@/components/AboutHero'
import { getCompanyName } from '@/config/contact'
import { consultationOffers } from '@/components/OffersSection'

// Dynamic imports for heavy components with framer-motion
const OurStory = dynamic(() => import('@/components/OurStory').then(mod => ({ default: mod.OurStory })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const ValuesSection = dynamic(() => import('@/components/ValuesSection').then(mod => ({ default: mod.ValuesSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const TeamSection = dynamic(() => import('@/components/TeamSection').then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const OffersSection = dynamic(() => import('@/components/OffersSection').then(mod => ({ default: mod.OffersSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

export const metadata = {
  title: `About Us - IT Services Company | ${getCompanyName('name')}`,
  description: `Learn about ${getCompanyName('name')}, a leading IT services company specializing in web development, mobile apps, and cloud solutions. Meet our expert team and discover our mission.`,
}

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <TeamSection />
      <OffersSection 
        title="Expert Consultations"
        subtitle="Get professional guidance from our experienced team. Book a consultation to discuss your project needs and technology strategy."
        offers={consultationOffers}
        showTimer={true}
        timerDays={5}
      />
      <CTABanner />
    </div>
  )
}
