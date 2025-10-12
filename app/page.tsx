import dynamic from 'next/dynamic'
import { Hero } from '@/components/Hero'
import { ServicesOverview } from '@/components/ServicesOverview'
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer'
import { StructuredData } from '@/components/StructuredData'
import { StatsSection } from '@/components/StatsSection'
import { serviceOffers } from '@/components/OffersSection'

// Dynamic imports for heavy components with framer-motion and swiper
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs').then(mod => ({ default: mod.WhyChooseUs })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const TechnologiesSection = dynamic(() => import('@/components/TechnologiesSection').then(mod => ({ default: mod.TechnologiesSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const PortfolioHighlights = dynamic(() => import('@/components/PortfolioHighlights').then(mod => ({ default: mod.PortfolioHighlights })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const TeamPreview = dynamic(() => import('@/components/TeamPreview').then(mod => ({ default: mod.TeamPreview })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const BlogPreview = dynamic(() => import('@/components/BlogPreview').then(mod => ({ default: mod.BlogPreview })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

const NewsletterSignup = dynamic(() => import('@/components/NewsletterSignup').then(mod => ({ default: mod.NewsletterSignup })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

const OffersSection = dynamic(() => import('@/components/OffersSection').then(mod => ({ default: mod.OffersSection })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

export default function Home() {
  return (
    <div className="pt-20">
      <PerformanceOptimizer />
      <Hero />
      <ServicesOverview />
      <OffersSection 
        title="Special Launch Offers"
        subtitle="Get started with our premium development services at unbeatable prices. Limited time offers for new clients!"
        offers={serviceOffers}
        timerDays={7}
      />
      <StatsSection />
      <WhyChooseUs />
      <TechnologiesSection />
      <PortfolioHighlights />
      <TeamPreview />
      <Testimonials />
      <BlogPreview />
      <NewsletterSignup 
        variant="hero"
        title="Stay Ahead with Tech Insights"
        subtitle="Join 5,000+ professionals getting weekly updates on the latest technology trends, project insights, and exclusive offers."
      />
      <CTABanner />
      
      {/* FAQ Structured Data */}
      <StructuredData 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What IT services do you offer?",
              answer: "We offer comprehensive IT services including web development, mobile app development, cloud solutions, IT consulting, and digital transformation services."
            },
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, we offer 24/7 technical support, maintenance, and updates for all our projects. Support packages are tailored to your specific needs."
            },
            {
              question: "What technologies do you use?",
              answer: "We use modern technologies including React, Next.js, Node.js, Python, AWS, Azure, React Native, Flutter, and other cutting-edge tools."
            }
          ]
        }}
      />
    </div>
  )
}
