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
  const { t, language } = useTranslation()

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
                {isComingSoon ? (
                  <div className="
                    relative h-full block
                    bg-white rounded-2xl p-8 shadow-lg
                    overflow-hidden opacity-60 cursor-default
                  ">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        <Clock className="w-3 h-3" />
                        {t('products.comingSoon')}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-400 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          {category.systemCount} {language === 'ko' ? '개 시스템' : 'Systems'}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-400 font-semibold text-sm">
                          {t('common.learnMore')}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`/products/${categoryKey}`}
                    className="
                      relative block h-full p-8
                      bg-white rounded-2xl shadow-lg
                      hover:shadow-xl transition-all group overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-950 mb-2 group-hover:text-primary-500 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {category.systemCount} {language === 'ko' ? '개 시스템' : 'Systems'}
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary-500 font-semibold text-sm group-hover:gap-2 transition-all">
                          {t('common.learnMore')}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* View All Products Link */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all"
          >
            {t('products.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ProductsSection
