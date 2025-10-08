import { Hero } from '@/components/Hero'
import { ServicesOverview } from '@/components/ServicesOverview'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { PortfolioHighlights } from '@/components/PortfolioHighlights'
import { Testimonials } from '@/components/Testimonials'
import { CTABanner } from '@/components/CTABanner'
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer'
import { StructuredData } from '@/components/StructuredData'

export default function Home() {
  return (
    <div className="pt-20">
      <PerformanceOptimizer />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioHighlights />
      <Testimonials />
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
