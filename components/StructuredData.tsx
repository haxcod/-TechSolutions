'use client'

import Script from 'next/script'
import { contactConfig, getPhoneNumber, getContactEmail, getCompanyName } from '@/config/contact'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'breadcrumb' | 'faq' | 'review'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": getCompanyName('full'),
          "alternateName": getCompanyName('name'),
          "url": contactConfig.company.website,
          "logo": contactConfig.company.logo,
          "description": contactConfig.company.tagline,
          "foundingDate": "2019",
          "numberOfEmployees": "50+",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": contactConfig.contact.address.street + ", " + contactConfig.contact.address.district,
            "addressLocality": contactConfig.contact.address.city,
            "addressRegion": contactConfig.contact.address.state,
            "postalCode": contactConfig.contact.address.zipCode,
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": getPhoneNumber('raw'),
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            contactConfig.social.linkedin,
            contactConfig.social.twitter,
            contactConfig.social.github
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "geoRadius": "1000000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom websites and web applications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Native and cross-platform mobile applications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions",
                  "description": "Cloud infrastructure and migration services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "IT Consulting",
                  "description": "Strategic technology consulting and planning"
                }
              }
            ]
          }
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": getCompanyName('full'),
          "url": contactConfig.company.website,
          "description": contactConfig.company.tagline,
          "publisher": {
            "@type": "Organization",
            "name": getCompanyName('full')
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": contactConfig.company.website + "/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "IT Services",
          "description": data?.description || "Comprehensive IT services including web development, mobile apps, and cloud solutions",
          "provider": {
            "@type": "Organization",
            "name": getCompanyName('full')
          },
          "areaServed": "Worldwide",
          "serviceType": "IT Services",
          "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD"
          }
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        }

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": getCompanyName('name')
          },
          "author": {
            "@type": "Person",
            "name": data?.author || "Client"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data?.rating || "5",
            "bestRating": "5"
          },
          "reviewBody": data?.review || "Excellent service and support"
        }

      default:
        return {}
    }
  }

  const structuredData = getStructuredData()

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
