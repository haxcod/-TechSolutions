import { AboutHero } from '@/components/AboutHero'
import { OurStory } from '@/components/OurStory'
import { TeamSection } from '@/components/TeamSection'
import { ValuesSection } from '@/components/ValuesSection'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'About Us - IT Services Company | TechSolutions',
  description: 'Learn about TechSolutions, a leading IT services company specializing in web development, mobile apps, and cloud solutions. Meet our expert team and discover our mission.',
}

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <TeamSection />
      <CTABanner />
    </div>
  )
}
