import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Services - Web & Mobile Development Solutions',
  description: 'Professional IT services including web development, mobile app development, cloud solutions, and IT consulting. We build scalable solutions for your business.',
  keywords: 'web development, mobile app development, IT consulting, cloud solutions, software development',
  authors: [{ name: 'IT Services Team' }],
  openGraph: {
    title: 'IT Services - Web & Mobile Development Solutions',
    description: 'Professional IT services including web development, mobile app development, cloud solutions, and IT consulting.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services - Web & Mobile Development Solutions',
    description: 'Professional IT services including web development, mobile app development, cloud solutions, and IT consulting.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
