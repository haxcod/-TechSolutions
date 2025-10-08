'use client'

import Head from 'next/head'
import { StructuredData } from './StructuredData'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
  structuredData?: any
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  noindex = false,
  structuredData,
  breadcrumbs,
  faqs
}: SEOProps) {
  const fullTitle = title ? `${title} | Haxcod Inc` : 'Haxcod Inc - IT Services & Software Development'
  const fullDescription = description || 'Premier IT services company specializing in web development, mobile app development, cloud solutions, and digital transformation. 500+ successful projects, 98% client satisfaction.'

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Robots */}
        <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Haxcod Inc" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Haxcod Inc Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
      </Head>

      {/* Structured Data */}
      {breadcrumbs && <StructuredData type="breadcrumb" data={{ breadcrumbs }} />}
      {faqs && <StructuredData type="faq" data={{ faqs }} />}
      {structuredData && <StructuredData type="service" data={structuredData} />}
    </>
  )
}
