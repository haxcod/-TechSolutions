import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from '@/components/Navbar'
import {Footer} from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { getCompanyName, contactConfig, getPhoneNumber } from '@/config/contact'
import dynamic from 'next/dynamic'

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  loading: () => null,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter' 
})

export const metadata: Metadata = {
  title: {
    default: `${getCompanyName('full')} - Leading IT Services & Software Development Company`,
    template: `%s | ${getCompanyName('full')} - IT Services & Software Development`
  },
  description: `${getCompanyName('full')} is a premier IT services company specializing in web development, mobile app development, cloud solutions, and digital transformation. 500+ successful projects, 98% client satisfaction. Get your free consultation today!`,
  keywords: [
    'IT services company',
    'web development services',
    'mobile app development',
    'cloud solutions',
    'software development',
    'digital transformation',
    'IT consulting',
    'custom software development',
    'e-commerce development',
    'react development',
    'next.js development',
    'node.js development',
    'aws cloud services',
    'azure cloud solutions',
    'devops services',
    'ui ux design',
    'tech solutions',
    'software company',
    'app development company',
    'web design company'
  ],
  authors: [{ name: `${getCompanyName('full')} Team`, url: contactConfig.company.website }],
  creator: getCompanyName('full'),
  publisher: getCompanyName('full'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(contactConfig.company.website),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: contactConfig.company.website,
    siteName: getCompanyName('full'),
    title: `${getCompanyName('full')} - Leading IT Services & Software Development Company`,
    description: 'Premier IT services company specializing in web development, mobile apps, cloud solutions, and digital transformation. 500+ successful projects, 98% client satisfaction.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${getCompanyName('full')} - IT Services & Software Development`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: contactConfig.social.twitter,
    creator: contactConfig.social.twitter,
    title: `${getCompanyName('full')} - Leading IT Services & Software Development Company`,
    description: 'Premier IT services company specializing in web development, mobile apps, cloud solutions, and digital transformation.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources (lighter than preconnect for non-critical resources) */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        
        {/* Preload critical resources */}
        {/* <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
         */}
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton 
          phoneNumber={getPhoneNumber('tel')}
          message="Hi! I'm interested in your IT services. Can we discuss my project requirements?"
        />
      </body>
    </html>
  )
}
