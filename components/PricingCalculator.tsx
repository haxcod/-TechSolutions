'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { 
  Calculator, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  DollarSign
} from 'lucide-react'

interface ServiceOption {
  id: string
  name: string
  icon: React.ReactNode
  basePrice: number
  description: string
  features: string[]
}

interface ProjectComplexity {
  id: string
  name: string
  multiplier: number
  description: string
}

interface Timeline {
  id: string
  name: string
  multiplier: number
  description: string
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: <Globe className="w-5 h-5" />,
    basePrice: 2500,
    description: 'Custom website development',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Optimization']
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    icon: <Smartphone className="w-5 h-5" />,
    basePrice: 5000,
    description: 'iOS and Android applications',
    features: ['Cross-platform', 'Native Performance', 'App Store Deployment', 'Push Notifications']
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    icon: <Code className="w-5 h-5" />,
    basePrice: 8000,
    description: 'Tailored software solutions',
    features: ['Custom Architecture', 'Scalable Design', 'API Integration', 'Database Design']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Platform',
    icon: <DollarSign className="w-5 h-5" />,
    basePrice: 4000,
    description: 'Online store development',
    features: ['Payment Gateway', 'Inventory Management', 'Order Processing', 'Analytics Dashboard']
  },
  {
    id: 'database',
    name: 'Database Solutions',
    icon: <Database className="w-5 h-5" />,
    basePrice: 3000,
    description: 'Database design and optimization',
    features: ['Data Migration', 'Performance Tuning', 'Backup Solutions', 'Security Implementation']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    basePrice: 6000,
    description: 'Security assessment and implementation',
    features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring Setup']
  }
]

const complexityLevels: ProjectComplexity[] = [
  {
    id: 'basic',
    name: 'Basic',
    multiplier: 1,
    description: 'Simple project with standard features'
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    multiplier: 1.5,
    description: 'Moderate complexity with custom features'
  },
  {
    id: 'advanced',
    name: 'Advanced',
    multiplier: 2.2,
    description: 'Complex project with advanced integrations'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    multiplier: 3,
    description: 'Large-scale enterprise solution'
  }
]

const timelines: Timeline[] = [
  {
    id: 'standard',
    name: 'Standard (3-6 months)',
    multiplier: 1,
    description: 'Normal development timeline'
  },
  {
    id: 'fast',
    name: 'Fast Track (1-3 months)',
    multiplier: 1.3,
    description: 'Expedited delivery with dedicated team'
  },
  {
    id: 'rush',
    name: 'Rush (< 1 month)',
    multiplier: 1.8,
    description: 'Emergency timeline with premium resources'
  }
]

export function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [complexity, setComplexity] = useState<string>('basic')
  const [timeline, setTimeline] = useState<string>('standard')
  const [teamSize, setTeamSize] = useState([3])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  useEffect(() => {
    const calculatePrice = () => {
      const selectedServiceObjects = serviceOptions.filter(service => 
        selectedServices.includes(service.id)
      )
      
      const basePrice = selectedServiceObjects.reduce((sum, service) => sum + service.basePrice, 0)
      const complexityMultiplier = complexityLevels.find(c => c.id === complexity)?.multiplier || 1
      const timelineMultiplier = timelines.find(t => t.id === timeline)?.multiplier || 1
      const teamMultiplier = 1 + (teamSize[0] - 3) * 0.2 // Base team of 3, +20% per additional member
      
      return Math.round(basePrice * complexityMultiplier * timelineMultiplier * teamMultiplier)
    }
    
    setTotalPrice(calculatePrice())
  }, [selectedServices, complexity, timeline, teamSize])

  const getBreakdown = () => {
    const selectedServiceObjects = serviceOptions.filter(service => 
      selectedServices.includes(service.id)
    )
    
    const basePrice = selectedServiceObjects.reduce((sum, service) => sum + service.basePrice, 0)
    const complexityMultiplier = complexityLevels.find(c => c.id === complexity)?.multiplier || 1
    const timelineMultiplier = timelines.find(t => t.id === timeline)?.multiplier || 1
    const teamMultiplier = 1 + (teamSize[0] - 3) * 0.2

    return {
      basePrice,
      complexityMultiplier,
      timelineMultiplier,
      teamMultiplier,
      selectedServiceObjects
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Project Pricing Calculator
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get an instant estimate for your project. Select the services you need, 
          project complexity, and timeline to see pricing.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Services Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Select Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all ${
                        selectedServices.includes(service.id)
                          ? 'ring-2 ring-blue-500 bg-blue-50'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            selectedServices.includes(service.id)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {service.description}
                            </p>
                            <div className="text-lg font-bold text-blue-600">
                              ${service.basePrice.toLocaleString()}
                            </div>
                          </div>
                          {selectedServices.includes(service.id) && (
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Complexity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600" />
                Project Complexity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {complexityLevels.map((level) => (
                  <Card
                    key={level.id}
                    className={`cursor-pointer transition-all ${
                      complexity === level.id
                        ? 'ring-2 ring-purple-500 bg-purple-50'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setComplexity(level.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {level.name}
                        </h3>
                        <Badge variant={complexity === level.id ? 'default' : 'secondary'}>
                          {level.multiplier}x
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {level.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline & Team Size */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timelines.map((timelineOption) => (
                    <Card
                      key={timelineOption.id}
                      className={`cursor-pointer transition-all ${
                        timeline === timelineOption.id
                          ? 'ring-2 ring-green-500 bg-green-50'
                          : 'hover:shadow-sm'
                      }`}
                      onClick={() => setTimeline(timelineOption.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">
                            {timelineOption.name}
                          </h4>
                          <Badge variant={timeline === timelineOption.id ? 'default' : 'secondary'}>
                            {timelineOption.multiplier}x
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">
                          {timelineOption.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Team Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Developers: {teamSize[0]}
                    </span>
                    <Badge variant="outline">
                      {teamSize[0] > 3 ? `+${((teamSize[0] - 3) * 20)}%` : 'Base'}
                    </Badge>
                  </div>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1 Dev</span>
                    <span>10 Devs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-center">
                Project Estimate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <motion.div
                  key={totalPrice}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  ${totalPrice.toLocaleString()}
                </motion.div>
                <p className="text-sm text-gray-600">
                  Estimated project cost
                </p>
              </div>

              {selectedServices.length > 0 && (
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="w-full"
                  >
                    {showBreakdown ? 'Hide' : 'Show'} Price Breakdown
                  </Button>

                  <AnimatePresence>
                    {showBreakdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 text-sm"
                      >
                        {getBreakdown().selectedServiceObjects.map((service) => (
                          <div key={service.id} className="flex justify-between">
                            <span className="text-gray-600">{service.name}</span>
                            <span className="font-medium">${service.basePrice.toLocaleString()}</span>
                          </div>
                        ))}
                        <hr />
                        <div className="flex justify-between">
                          <span className="text-gray-600">Complexity ({complexity})</span>
                          <span className="font-medium">{getBreakdown().complexityMultiplier}x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Timeline</span>
                          <span className="font-medium">{getBreakdown().timelineMultiplier}x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Team Size</span>
                          <span className="font-medium">{getBreakdown().teamMultiplier.toFixed(1)}x</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Detailed Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                </div>
              )}

              {selectedServices.length === 0 && (
                <div className="text-center text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">
                    Select services above to see pricing estimate
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator