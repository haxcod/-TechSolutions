'use client'

import dynamic from 'next/dynamic'
import { PortfolioHero } from '@/components/PortfolioHero'
import { useState } from 'react'

// Dynamic imports for heavy components
const PortfolioGrid = dynamic(() => import('@/components/PortfolioGrid').then(mod => ({ default: mod.PortfolioGrid })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const CTABanner = dynamic(() => import('@/components/CTABanner').then(mod => ({ default: mod.CTABanner })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />
})

// Note: Metadata moved to layout.tsx since this is now a client component

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="pt-20">
      <PortfolioHero 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <PortfolioGrid 
        selectedCategory={selectedCategory}
        viewMode={viewMode}
        onCategoryChange={setSelectedCategory}
        onViewModeChange={setViewMode}
      />
      <CTABanner />
    </div>
  )
}
