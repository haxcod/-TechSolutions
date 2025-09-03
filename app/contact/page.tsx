import { ContactHero } from '@/components/ContactHero'
import { ContactForm } from '@/components/ContactForm'
import { ContactInfo } from '@/components/ContactInfo'
import { MapSection } from '@/components/MapSection'

export const metadata = {
  title: 'Contact Us - Get in Touch | TechSolutions',
  description: 'Contact TechSolutions for your web development, mobile app development, and cloud solution needs. Get a free consultation and quote today.',
}

export default function Contact() {
  return (
    <div className="pt-16 sm:pt-20">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <MapSection />
    </div>
  )
}
