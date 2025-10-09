import React from 'react'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react'
import Link from 'next/link'
import { formatBlogDate } from '@/lib/utils'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications. From artificial intelligence integration to advanced progressive web apps, developers need to stay ahead of the curve to deliver exceptional user experiences.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial Intelligence is revolutionizing web development in unprecedented ways. AI-powered tools are now capable of generating code, optimizing performance, and even designing user interfaces. GitHub Copilot, ChatGPT, and other AI assistants have become indispensable tools for developers, significantly speeding up the development process.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain traction as they bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs offer businesses a cost-effective way to reach users across all platforms.</p>
      
      <h2>WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications to run in the browser at near-native speeds. This technology is particularly valuable for computationally intensive applications like games, image processing, and scientific simulations.</p>
      
      <h2>Serverless Architecture</h2>
      <p>Serverless computing continues to simplify deployment and scaling. With platforms like Vercel, Netlify, and AWS Lambda, developers can focus on writing code without worrying about server management.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning new technologies, developers can create more efficient, powerful, and user-friendly web applications.</p>
    `,
    author: "John Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "/api/placeholder/800/400",
    tags: ["React", "Next.js", "AI", "PWA"],
    slug: "future-of-web-development-2024"
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices Architecture",
    excerpt: "Learn how microservices can help you build more maintainable and scalable applications for your business.",
    content: `
      <h2>What are Microservices?</h2>
      <p>Microservices architecture is a design approach where applications are built as a collection of small, independent services that communicate over well-defined APIs. Each service is responsible for a specific business function and can be developed, deployed, and scaled independently.</p>
      
      <h2>Benefits of Microservices</h2>
      <p>The microservices approach offers several advantages:</p>
      <ul>
        <li><strong>Scalability:</strong> Individual services can be scaled based on demand</li>
        <li><strong>Technology Diversity:</strong> Different services can use different technologies</li>
        <li><strong>Fault Isolation:</strong> Failure in one service doesn't bring down the entire system</li>
        <li><strong>Team Independence:</strong> Different teams can work on different services</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>When implementing microservices, consider these key strategies:</p>
      <p><strong>API Gateway:</strong> Use an API gateway to manage requests and route them to appropriate services.</p>
      <p><strong>Service Discovery:</strong> Implement service discovery mechanisms to help services find and communicate with each other.</p>
      <p><strong>Data Management:</strong> Each service should have its own database to maintain independence.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While microservices offer many benefits, they also introduce complexity. Network latency, data consistency, and service coordination are common challenges that require careful planning and robust solutions.</p>
      
      <h2>Conclusion</h2>
      <p>Microservices architecture is not a silver bullet, but when implemented correctly, it can provide significant benefits for large, complex applications. Consider your team's expertise and project requirements before making the transition.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Architecture",
    image: "/api/placeholder/800/400",
    tags: ["Microservices", "Docker", "Kubernetes", "Scalability"],
    slug: "building-scalable-microservices"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Essential security measures every business should implement to protect their digital assets and customer data.",
    content: `
      <h2>The Importance of Cybersecurity</h2>
      <p>In today's digital landscape, cybersecurity is not just an IT concern—it's a business imperative. With cyber threats becoming more sophisticated and frequent, businesses of all sizes must implement robust security measures to protect their assets and maintain customer trust.</p>
      
      <h2>Essential Security Measures</h2>
      <p><strong>Multi-Factor Authentication (MFA):</strong> Implement MFA across all systems to add an extra layer of security beyond passwords.</p>
      <p><strong>Regular Security Updates:</strong> Keep all software, operating systems, and applications up to date with the latest security patches.</p>
      <p><strong>Employee Training:</strong> Educate employees about phishing attacks, social engineering, and safe computing practices.</p>
      
      <h2>Data Protection Strategies</h2>
      <p>Protecting sensitive data should be a top priority:</p>
      <ul>
        <li>Encrypt data both at rest and in transit</li>
        <li>Implement access controls and principle of least privilege</li>
        <li>Regular data backups and disaster recovery planning</li>
        <li>Data classification and handling procedures</li>
      </ul>
      
      <h2>Network Security</h2>
      <p>Secure your network infrastructure with firewalls, intrusion detection systems, and network segmentation. Monitor network traffic for unusual activities and implement zero-trust architecture where possible.</p>
      
      <h2>Incident Response Planning</h2>
      <p>Develop and regularly test an incident response plan. This should include procedures for detecting, containing, and recovering from security incidents, as well as communication protocols for stakeholders.</p>
      
      <h2>Conclusion</h2>
      <p>Cybersecurity is an ongoing process that requires continuous attention and investment. By implementing these best practices and staying informed about emerging threats, businesses can significantly reduce their risk of cyber attacks.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Security",
    image: "/api/placeholder/800/400",
    tags: ["Cybersecurity", "Data Protection", "Network Security", "Business"],
    slug: "cybersecurity-best-practices"
  }
]

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  const retunFormattedDate =(date:any)=>{
   return formatBlogDate(date)
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {retunFormattedDate(post.date)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Article</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-xl bg-white/80 backdrop-blur-xs border-0">
              {/* Featured Image Placeholder */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{post.category.charAt(0)}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                    <p className="text-gray-600">Help others discover this content</p>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
            <Card key={relatedPost.id} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-xs overflow-hidden">
                    <div className="relative h-32 bg-gradient-to-br from-blue-100 to-purple-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{relatedPost.category.charAt(0)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}