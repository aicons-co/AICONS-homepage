import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, BarChart3, Box, ArrowRight, Check } from 'lucide-react'

const productPages = {
  plan: {
    name: 'AICONS Plan',
    icon: Calendar,
    tagline: 'Schedule Visualization & Planning',
    description: 'Transform your project timeline with intelligent scheduling visualization. AICONS Plan provides powerful 4D visualization tools that bring your construction schedule to life.',
    features: [
      'Interactive 4D schedule visualization',
      'Real-time schedule updates',
      'Resource conflict detection',
      'Progress tracking and reporting',
      'Integration with P6 and MSP',
      'Collaborative planning tools',
    ],
    benefits: [
      { title: 'Better Communication', description: 'Visual schedules everyone can understand' },
      { title: 'Faster Decisions', description: 'Identify issues before they become problems' },
      { title: 'Improved Coordination', description: 'Keep all stakeholders aligned' },
    ],
  },
  optimize: {
    name: 'AICONS Optimize',
    icon: BarChart3,
    tagline: 'AI-Powered Schedule Optimization',
    description: 'Leverage artificial intelligence to automatically optimize your construction schedules. Simulate millions of scenarios to find the best path forward.',
    features: [
      'AI-powered schedule optimization',
      'Millions of simulation scenarios',
      'Resource leveling automation',
      'What-if scenario analysis',
      'Cost optimization algorithms',
      'Risk-adjusted scheduling',
    ],
    benefits: [
      { title: '17% Duration Reduction', description: 'Average project timeline improvement' },
      { title: '14% Labor Savings', description: 'Optimized resource allocation' },
      { title: 'Better Risk Management', description: 'Identify risks before they occur' },
    ],
  },
  model: {
    name: 'AICONS Model',
    icon: Box,
    tagline: 'BIM-Based Schedule Generation',
    description: 'Generate optimized schedules directly from your BIM models. AICONS Model extracts work packages and creates intelligent construction sequences automatically.',
    features: [
      'Automatic BIM model analysis',
      'Work package extraction',
      'Sequence generation',
      'Constraint detection',
      'Multiple model formats (Revit, IFC)',
      'Direct P6/MSP export',
    ],
    benefits: [
      { title: 'Faster Planning', description: 'Generate schedules in hours, not weeks' },
      { title: 'Model-Based Accuracy', description: 'Schedules based on actual quantities' },
      { title: 'Multiple Options', description: 'Explore different construction strategies' },
    ],
  },
}

function ProductPage({ productKey }) {
  const product = productPages[productKey]

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products/plan" className="text-alice-primary hover:underline">
          View AICONS Plan
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-alice-primary/20 flex items-center justify-center">
                <product.icon className="w-8 h-8 text-alice-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{product.name}</h1>
                <p className="text-alice-primary text-lg">{product.tagline}</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8">{product.description}</p>
            <div className="flex gap-4">
              <Link to="/demo" className="btn-primary">
                Request Demo
              </Link>
              <button className="btn-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl"
              >
                <Check className="w-6 h-6 text-alice-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <h3 className="text-2xl font-bold text-alice-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started with {product.name}?
          </h2>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-alice-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function ProductsIndex() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the right AICONS solution for your construction project needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(productPages).map(([key, product], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${key}`}
                  className="block bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-alice-primary/10 flex items-center justify-center mb-6 group-hover:bg-alice-primary/20 transition-colors">
                    <product.icon className="w-7 h-7 text-alice-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-alice-dark mb-2">{product.name}</h3>
                  <p className="text-alice-primary mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                  <span className="inline-flex items-center gap-2 text-alice-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Products() {
  return (
    <Routes>
      <Route index element={<ProductsIndex />} />
      <Route path="plan" element={<ProductPage productKey="plan" />} />
      <Route path="optimize" element={<ProductPage productKey="optimize" />} />
      <Route path="model" element={<ProductPage productKey="model" />} />
    </Routes>
  )
}

export default Products
