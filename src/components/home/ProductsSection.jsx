import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, BarChart3, Box } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function ProductsSection() {
  const { t } = useTranslation()
  const [activeProduct, setActiveProduct] = useState('plan')

  const products = [
    {
      id: 'plan',
      name: 'AISIMS Plan',
      icon: Calendar,
      tagline: t('productsSection.plan.tagline'),
      description: t('productsSection.plan.description'),
      steps: [
        { title: t('productsSection.plan.steps.import.title'), description: t('productsSection.plan.steps.import.description') },
        { title: t('productsSection.plan.steps.visualize.title'), description: t('productsSection.plan.steps.visualize.description') },
        { title: t('productsSection.plan.steps.analyze.title'), description: t('productsSection.plan.steps.analyze.description') },
        { title: t('productsSection.plan.steps.export.title'), description: t('productsSection.plan.steps.export.description') },
      ],
    },
    {
      id: 'optimize',
      name: 'AISIMS Optimize',
      icon: BarChart3,
      tagline: t('productsSection.optimize.tagline'),
      description: t('productsSection.optimize.description'),
      steps: [
        { title: t('productsSection.optimize.steps.connect.title'), description: t('productsSection.optimize.steps.connect.description') },
        { title: t('productsSection.optimize.steps.simulate.title'), description: t('productsSection.optimize.steps.simulate.description') },
        { title: t('productsSection.optimize.steps.optimize.title'), description: t('productsSection.optimize.steps.optimize.description') },
        { title: t('productsSection.optimize.steps.compare.title'), description: t('productsSection.optimize.steps.compare.description') },
      ],
    },
    {
      id: 'model',
      name: 'AISIMS Model',
      icon: Box,
      tagline: t('productsSection.model.tagline'),
      description: t('productsSection.model.description'),
      steps: [
        { title: t('productsSection.model.steps.upload.title'), description: t('productsSection.model.steps.upload.description') },
        { title: t('productsSection.model.steps.extract.title'), description: t('productsSection.model.steps.extract.description') },
        { title: t('productsSection.model.steps.generate.title'), description: t('productsSection.model.steps.generate.description') },
        { title: t('productsSection.model.steps.refine.title'), description: t('productsSection.model.steps.refine.description') },
      ],
    },
  ]

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
          <h2 className="section-title mb-4">{t('productsSection.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('productsSection.subtitle')}
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
                  {t('productsSection.learnMore')}
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
