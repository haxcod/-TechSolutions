import dynamic from 'next/dynamic'
import { AboutHero } from '@/components/AboutHero'
import { OurStory } from '@/components/OurStory'

// Dynamic imports for heavy components with framer-motion
const TeamSection = dynamic(() => import('@/components/TeamSection').then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />,
  ssr: false
})

const ValuesSection = dynamic(() => import('@/components/ValuesSection').then(mod => ({ default: mod.ValuesSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />,
  ssr: false
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />,
  ssr: false
})

export const metadata = {
  title: 'About Us - IT Services Company | Haxcod Inc',
  description: 'Learn about Haxcod Inc, a leading IT services company specializing in web development, mobile apps, and cloud solutions. Meet our expert team and discover our mission.',
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
