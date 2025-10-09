const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  // Basic Configuration
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  output: 'standalone',
  reactStrictMode: true,

  // Image Optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
      { protocol: 'https', hostname: 'haxcod.com', pathname: '/**' },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },

  // Compiler Options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },

  // Server Configuration
  serverExternalPackages: ['nodemailer', 'sharp'],
  
  // Output File Tracing
  outputFileTracingRoot: __dirname,
  outputFileTracingIncludes: {
    '/api/contact': [
      'node_modules/nodemailer/**',
      'node_modules/@types/nodemailer/**',
    ],
    '/api/**': [
      'node_modules/sharp/**',
    ],
    '**': [
      'node_modules/next/dist/**',
      'node_modules/picocolors/**',
      'node_modules/styled-jsx/**',
    ],
  },
  outputFileTracingExcludes: {
    '*': [
      'node_modules/**',
      '.next/**',
      'public/**',
      '**/README*',
      '**/LICENSE*',
      '**/CHANGELOG*',
      '**/.DS_Store',
      '**/Thumbs.db',
      '**/__tests__/**',
      '**/*.test.*',
      '**/*.spec.*',
      '**/.vscode/**',
      '**/.idea/**',
      '**/.git/**',
      '**/.gitignore',
      'node_modules/@types/**',
      'node_modules/typescript/lib/tsc.js',
      'node_modules/typescript/lib/tsserver.js',
      'node_modules/eslint/**',
      'node_modules/prettier/**',
      'node_modules/webpack/**',
      'node_modules/@babel/**',
    ],
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion', 
      'swiper',
      'date-fns',
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
    optimizeCss: true,
    esmExternals: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    reactCompiler: true,
  },

  // Turbopack Configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Webpack Configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Bundle analyzer
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }

    // Optimization
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(favicon.ico|robots.txt|sitemap.xml)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services/web-development', destination: '/services', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
    ];
  },

  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: '/api/contact',
      },
    ];
  },
});

module.exports = nextConfig;
