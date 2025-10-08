const path = require('path');

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  output: 'standalone',

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error'] }
        : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  experimental: {
    // ✅ Combined experimental config
    optimizePackageImports: ['lucide-react', 'framer-motion', 'swiper','date-fns'],
    optimizeCss: true,
    esmExternals: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    serverComponentsExternalPackages: ['nodemailer'],

    // Output file tracing configuration for monorepo
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '*': [
        // Platform-specific binaries (not needed for your target platform)
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@swc/core-darwin-x64',
        'node_modules/@swc/core-darwin-arm64',
        'node_modules/@esbuild/linux-x64',
        'node_modules/@esbuild/darwin-x64',
        'node_modules/@esbuild/darwin-arm64',
        'node_modules/@next/swc-linux-x64-gnu',
        'node_modules/@next/swc-linux-x64-musl',
        'node_modules/@next/swc-darwin-x64',
        'node_modules/@next/swc-darwin-arm64',
        
        // Version control and cache directories
        '.git/**/*',
        '.next/cache/**/*',
        'node_modules/.cache/**/*',
        '**/node_modules/.cache/**/*',
        
        // Documentation and metadata files
        '**/*.md',
        '**/*.txt',
        '**/README*',
        '**/LICENSE*',
        '**/CHANGELOG*',
        '**/HISTORY*',
        '**/.DS_Store',
        '**/Thumbs.db',
        '**/*.log',
        
        // Development and testing files
        '**/coverage/**/*',
        '**/test/**/*',
        '**/tests/**/*',
        '**/__tests__/**/*',
        '**/*.test.*',
        '**/*.spec.*',
        '**/jest.config.*',
        '**/vitest.config.*',
        '**/cypress/**/*',
        '**/playwright/**/*',
        
        // Documentation and examples
        '**/docs/**/*',
        '**/examples/**/*',
        '**/demo/**/*',
        '**/benchmark/**/*',
        '**/fixtures/**/*',
        '**/storybook-static/**/*',
        
        // IDE and editor files
        '**/.vscode/**/*',
        '**/.idea/**/*',
        '**/.sublime-*',
        '**/*.swp',
        '**/*.swo',
        
        // TypeScript source files (only compiled JS needed)
        '**/node_modules/**/*.ts',
        '**/node_modules/**/*.tsx',
        '!**/node_modules/**/*.d.ts', // Keep type definitions
        
        // Source maps in production
        '**/node_modules/**/*.map',
        
        // Nested node_modules (potential duplicates)
        '**/node_modules/**/node_modules/**/*',
        
        // Large unnecessary files from specific packages
        'node_modules/sharp/vendor/**/*', // Sharp binaries for other platforms
        'node_modules/@types/**/*.md',
        'node_modules/typescript/lib/tsc.js', // TypeScript compiler not needed at runtime
        'node_modules/typescript/lib/tsserver.js',
        'node_modules/typescript/lib/typescript.js',
        
        // Framer Motion unnecessary files
        'node_modules/framer-motion/dist/es/**/*', // Keep only the main dist
        'node_modules/framer-motion/**/*.md',
        
        // Swiper unnecessary files
        'node_modules/swiper/modules/**/*.scss',
        'node_modules/swiper/**/*.less',
        
        // Development dependencies that might be included
        'node_modules/@next/bundle-analyzer/**/*',
        'node_modules/eslint/**/*',
        'node_modules/autoprefixer/**/*',
        'node_modules/postcss/**/*',
        'node_modules/tailwindcss/**/*',
      ],
    },
    
    // Include specific files that are essential for runtime
    outputFileTracingIncludes: {
      '/api/contact': [
        // Ensure nodemailer and its dependencies are included
        'node_modules/nodemailer/**/*',
        '!node_modules/nodemailer/**/*.md',
        '!node_modules/nodemailer/**/test/**/*',
        '!node_modules/nodemailer/**/tests/**/*',
      ],
    },

  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      {
        source: '/services/web-development',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);