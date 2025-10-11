import dynamic from 'next/dynamic'
import { ContactHero } from '@/components/ContactHero'
import { getCompanyName } from '@/config/contact'
import { contactIncentives } from '@/components/OffersSection'

// Dynamic imports for heavy components with framer-motion
const ContactForm = dynamic(() => import('@/components/ContactForm').then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const ContactInfo = dynamic(() => import('@/components/ContactInfo').then(mod => ({ default: mod.ContactInfo })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const MapSection = dynamic(() => import('@/components/MapSection').then(mod => ({ default: mod.MapSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const OffersSection = dynamic(() => import('@/components/OffersSection').then(mod => ({ default: mod.OffersSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

export const metadata = {
  title: `Contact Us - Get in Touch | ${getCompanyName('name')}`,
  description: `Contact ${getCompanyName('name')} for your web development, mobile app development, and cloud solution needs. Get a free consultation and quote today.`,
}

export default function Contact() {
  return (
    <div className="pt-16 sm:pt-20">
      <ContactHero />
      <OffersSection 
        title="Contact Incentives"
        subtitle="Take advantage of these special offers when you reach out to us today. Get started with exclusive benefits!"
        offers={contactIncentives}
        showTimer={true}
        timerDays={3}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <MapSection />
    </div>
  )
}
