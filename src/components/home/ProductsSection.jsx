import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Landmark, Factory, ArrowRight, Clock } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

const iconMap = {
  Building2,
  Landmark,
  Factory
}

function ProductsSection() {
  const { t, locale } = useTranslation()

  const categories = t('products.categories')
  const categoryOrder = ['building', 'civil', 'plant']

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

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categoryOrder.map((categoryKey, index) => {
            const category = categories[categoryKey]
            if (!category) return null

            const Icon = iconMap[category.icon] || Building2
            const isComingSoon = category.status === 'coming_soon'

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${categoryKey}`}
                  className={`block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group h-full relative overflow-hidden ${
                    isComingSoon ? 'opacity-90' : ''
                  }`}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aicons-primary/5 to-aicons-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        <Clock className="w-3 h-3" />
                        {t('products.comingSoon')}
                      </span>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-aicons-primary/10 flex items-center justify-center mb-6 group-hover:bg-aicons-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-aicons-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-aicons-dark mb-2 group-hover:text-aicons-primary transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>

                    {/* System Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.systemCount} {locale === 'ko' ? '개 시스템' : 'Systems'}
                      </span>
                      <span className="inline-flex items-center gap-1 text-aicons-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        {t('common.learnMore')}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Products Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-aicons-primary font-semibold hover:gap-3 transition-all"
          >
            {t('products.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
