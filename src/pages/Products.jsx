import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, BarChart3, Box, ArrowRight, Check } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function ProductPage({ productKey }) {
  const { t } = useTranslation()

  const productPages = {
    plan: {
      name: 'AICONS Plan',
      icon: Calendar,
      tagline: t('productsPage.plan.tagline'),
      description: t('productsPage.plan.description'),
      features: t('productsPage.plan.features'),
      benefits: [
        { title: t('productsPage.plan.benefits.betterCommunication.title'), description: t('productsPage.plan.benefits.betterCommunication.description') },
        { title: t('productsPage.plan.benefits.fasterDecisions.title'), description: t('productsPage.plan.benefits.fasterDecisions.description') },
        { title: t('productsPage.plan.benefits.improvedCoordination.title'), description: t('productsPage.plan.benefits.improvedCoordination.description') },
      ],
    },
    optimize: {
      name: 'AICONS Optimize',
      icon: BarChart3,
      tagline: t('productsPage.optimize.tagline'),
      description: t('productsPage.optimize.description'),
      features: t('productsPage.optimize.features'),
      benefits: [
        { title: t('productsPage.optimize.benefits.durationReduction.title'), description: t('productsPage.optimize.benefits.durationReduction.description') },
        { title: t('productsPage.optimize.benefits.laborSavings.title'), description: t('productsPage.optimize.benefits.laborSavings.description') },
        { title: t('productsPage.optimize.benefits.riskManagement.title'), description: t('productsPage.optimize.benefits.riskManagement.description') },
      ],
    },
    model: {
      name: 'AICONS Model',
      icon: Box,
      tagline: t('productsPage.model.tagline'),
      description: t('productsPage.model.description'),
      features: t('productsPage.model.features'),
      benefits: [
        { title: t('productsPage.model.benefits.fasterPlanning.title'), description: t('productsPage.model.benefits.fasterPlanning.description') },
        { title: t('productsPage.model.benefits.modelBasedAccuracy.title'), description: t('productsPage.model.benefits.modelBasedAccuracy.description') },
        { title: t('productsPage.model.benefits.multipleOptions.title'), description: t('productsPage.model.benefits.multipleOptions.description') },
      ],
    },
  }

  const product = productPages[productKey]

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">{t('productsPage.productNotFound')}</h1>
        <Link to="/products/plan" className="text-alice-primary hover:underline">
          {t('productsPage.viewPlan')}
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
                {t('productsPage.requestDemo')}
              </Link>
              <button className="btn-secondary">
                {t('productsPage.downloadBrochure')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t('productsPage.keyFeatures')}</h2>
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
          <h2 className="section-title text-center mb-12">{t('productsPage.benefits')}</h2>
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
            {t('productsPage.readyToStart', { name: product.name })}
          </h2>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-alice-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('productsPage.scheduleDemo')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function ProductsIndex() {
  const { t } = useTranslation()

  const productPages = {
    plan: {
      name: 'AICONS Plan',
      icon: Calendar,
      tagline: t('productsPage.plan.tagline'),
      description: t('productsPage.plan.description'),
    },
    optimize: {
      name: 'AICONS Optimize',
      icon: BarChart3,
      tagline: t('productsPage.optimize.tagline'),
      description: t('productsPage.optimize.description'),
    },
    model: {
      name: 'AICONS Model',
      icon: Box,
      tagline: t('productsPage.model.tagline'),
      description: t('productsPage.model.description'),
    },
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('productsPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('productsPage.subtitle')}
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
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4" />
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
