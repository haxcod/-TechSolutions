# IT Services Website

A modern, responsive IT Services website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue and purple color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Built with Next.js SEO best practices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Interactive portfolio with filtering capabilities
- **Service Pages**: Detailed service descriptions and pricing
- **Team Section**: Meet the team with social links
- **Testimonials**: Client testimonials with carousel functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **TypeScript**: Full TypeScript support

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ...               # Other components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd it-services-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home** (`/`) - Hero section, services overview, testimonials
- **About** (`/about`) - Company story, team, values
- **Services** (`/services`) - Detailed service descriptions
- **Portfolio** (`/portfolio`) - Project showcase with filters
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Colors
The website uses a blue and purple color scheme. You can customize colors in:
- `tailwind.config.js` - Tailwind color configuration
- `app/globals.css` - CSS custom properties

### Content
Update content in the respective component files:
- Company information: `components/AboutHero.tsx`
- Services: `components/DetailedServices.tsx`
- Portfolio: `components/PortfolioGrid.tsx`
- Contact info: `components/ContactInfo.tsx`

### Images
Replace placeholder images with your own:
- Hero images: Update image URLs in components
- Portfolio images: Update in `components/PortfolioGrid.tsx`
- Team photos: Update in `components/TeamSection.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### SEO Optimization
- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data ready

### Performance
- Image optimization with Next.js Image component
- Code splitting
- Lazy loading
- Optimized animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@itservices.com or call +1 (555) 123-4567.

---

Built with ❤️ by TechSolutions
