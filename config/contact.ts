/**
 * Centralized Contact Information Configuration
 * This file contains all contact details, addresses, and business information
 * used throughout the Haxcod Inc website.
 */

export const contactConfig = {
  // Company Information
  company: {
    name: 'Haxcod Inc',
    alternateName: 'Haxcod IT Services',
    legalName: 'Haxcod Inc',
    description: 'Leading IT Services & Software Development Company',
    tagline: 'Premier IT services company specializing in web development, mobile app development, cloud solutions, and digital transformation',
    founded: '2024',
    website: 'https://haxcod.com',
    logo: 'https://haxcod.com/logo.png'
  },

  // Contact Information
  contact: {
    // Phone Numbers
    phone: {
      primary: '+1 (555) 123-4567',
      formatted: '+1 (555) 123-4567',
      tel: '+15551234567', // For tel: links
      display: {
        full: '+1 (555) 123-4567',
        mobile: '+1 (555) 123-4567'
      }
    },

    // Email Addresses
    email: {
      primary: 'info@haxcod.com',
      support: 'info@haxcod.com',
      privacy: 'privacy@haxcod.com',
      legal: 'legal@haxcod.com',
      business: 'info@haxcod.com'
    },

    // Physical Address
    address: {
      street: '123 Tech Street',
      district: 'Innovation District',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'United States',
      formatted: {
        short: '123 Tech Street, SF',
        full: '123 Tech Street, Innovation District, San Francisco, CA 94105',
        multiline: '123 Tech Street, Innovation District<br />San Francisco, CA 94105'
      }
    }
  },

  // Social Media Links
  social: {
    linkedin: 'https://www.linkedin.com/company/haxcod',
    twitter: 'https://twitter.com/haxcod',
    github: 'https://github.com/haxcod'
  },

  // Business Hours
  businessHours: {
    timezone: 'PST',
    weekdays: '9:00 AM - 6:00 PM',
    weekend: 'Closed',
    support: '24/7 Emergency Support Available'
  },

  // SEO and Metadata
  seo: {
    author: 'Haxcod Inc Team',
    creator: 'Haxcod Inc',
    publisher: 'Haxcod Inc',
    twitterHandle: '@haxcod',
    siteName: 'Haxcod Inc'
  },

  // Structured Data
  structuredData: {
    '@type': 'Organization',
    name: 'Haxcod Inc',
    alternateName: 'Haxcod IT Services',
    url: 'https://haxcod.com',
    logo: 'https://haxcod.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street, Innovation District',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.linkedin.com/company/haxcod',
      'https://twitter.com/haxcod',
      'https://github.com/haxcod'
    ]
  },

  // Statistics and Achievements
  stats: {
    projectsCompleted: '500+',
    clientSatisfaction: '98%',
    yearsExperience: '10+',
    teamSize: '50+'
  },

  // Contact Form Configuration
  forms: {
    placeholders: {
      phone: '+1 (555) 123-4567',
      email: 'your.email@example.com'
    },
    validation: {
      phonePattern: /^[\+]?[1-9][\d]{0,15}$/,
      emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  },

  // Emergency and Support
  support: {
    responseTime: '24 hours',
    emergencyAvailable: true,
    supportEmail: 'info@haxcod.com',
    supportPhone: '+1 (555) 123-4567'
  }
} as const;

// Type definitions for better TypeScript support
export type ContactConfig = typeof contactConfig;
export type CompanyInfo = typeof contactConfig.company;
export type ContactInfo = typeof contactConfig.contact;
export type SocialLinks = typeof contactConfig.social;

// Helper functions for common use cases
export const getFormattedAddress = (format: 'short' | 'full' | 'multiline' = 'full') => {
  return contactConfig.contact.address.formatted[format];
};

export const getContactEmail = (type: keyof typeof contactConfig.contact.email = 'primary') => {
  return contactConfig.contact.email[type];
};

export const getPhoneNumber = (format: 'primary' | 'tel' | 'display' | 'raw' = 'primary') => {
  if (format === 'tel') return contactConfig.contact.phone.tel;
  if (format === 'display') return contactConfig.contact.phone.display.full;
  if (format === 'raw') return contactConfig.contact.phone.tel; // 'raw' maps to 'tel'
  return contactConfig.contact.phone[format];
};

export const getCompanyName = (variant: 'name' | 'alternateName' | 'legalName' | 'full' = 'name') => {
  if (variant === 'full') return contactConfig.company.name; // 'full' maps to 'name'
  return contactConfig.company[variant];
};

// Export default for easy importing
export default contactConfig;