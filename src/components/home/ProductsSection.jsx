import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, BarChart3, Box } from 'lucide-react'

const products = [
  {
    id: 'plan',
    name: 'AISIMS Plan',
    icon: Calendar,
    tagline: 'Schedule Visualization & Planning',
    description: 'Transform your project timeline with intelligent scheduling visualization.',
    steps: [
      { title: 'Import', description: 'Import your existing schedules from P6 or MSP' },
      { title: 'Visualize', description: 'See your schedule in an interactive 4D view' },
      { title: 'Analyze', description: 'Identify bottlenecks and optimization opportunities' },
      { title: 'Export', description: 'Export optimized schedules back to your tools' },
    ],
  },
  {
    id: 'optimize',
    name: 'AISIMS Optimize',
    icon: BarChart3,
    tagline: 'P6/MSP-based Optimization',
    description: 'Leverage AI to optimize your construction schedules automatically.',
    steps: [
      { title: 'Connect', description: 'Connect to your P6 or Microsoft Project files' },
      { title: 'Simulate', description: 'Run millions of schedule simulations' },
      { title: 'Optimize', description: 'AI finds the optimal resource allocation' },
      { title: 'Compare', description: 'Compare scenarios side-by-side' },
    ],
  },
  {
    id: 'model',
    name: 'AISIMS Model',
    icon: Box,
    tagline: 'BIM-based Modeling',
    description: 'Generate optimized schedules directly from your BIM models.',
    steps: [
      { title: 'Upload', description: 'Upload your BIM model (Revit, IFC, etc.)' },
      { title: 'Extract', description: 'Automatically extract work packages' },
      { title: 'Generate', description: 'AI generates multiple schedule options' },
      { title: 'Refine', description: 'Fine-tune with construction constraints' },
    ],
  },
]

function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState('plan')

  const currentProduct = products.find((p) => p.id === activeProduct)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Our Products</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Choose the right solution for your project needs
          </p>
        </motion.div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <motion.button
              key={product.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveProduct(product.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeProduct === product.id
                  ? 'bg-alice-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <product.icon className="w-5 h-5" />
              <span className="font-semibold">{product.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Product Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-alice-primary/10 flex items-center justify-center">
                    <currentProduct.icon className="w-8 h-8 text-alice-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-alice-dark">
                      {currentProduct.name}
                    </h3>
                    <p className="text-alice-primary">{currentProduct.tagline}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {currentProduct.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {currentProduct.steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-alice-primary/10 flex items-center justify-center">
                      <span className="text-alice-primary font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-alice-dark mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProductsSection
