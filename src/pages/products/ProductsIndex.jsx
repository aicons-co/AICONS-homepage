import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Landmark, Factory, ArrowRight, Clock } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

const iconMap = {
  Building2,
  Landmark,
  Factory
}

function ProductsIndex() {
  const { t, locale } = useTranslation()

  const categories = t('products.categories')

  const categoryOrder = ['building', 'civil', 'plant']

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-aicons-dark to-aicons-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'ko' ? 'AI 정보 관리 시스템' : 'AI Information Management Systems'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {locale === 'ko'
                ? '건축, 토목, 플랜트 분야의 AI 기반 정보 관리 솔루션을 만나보세요.'
                : 'Discover AI-powered information management solutions for Building, Civil, and Plant sectors.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
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
                  transition={{ delay: index * 0.15 }}
                >
                  {isComingSoon ? (
                    <div className="block bg-white rounded-2xl p-8 shadow-lg h-full relative overflow-hidden opacity-60 cursor-default">
                      {/* Coming Soon Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                          <Clock className="w-3 h-3" />
                          {t('products.comingSoon')}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-400 mb-2">
                          {category.name}
                        </h2>
                        <p className="text-gray-400 mb-4">{category.description}</p>
                        <p className="text-sm text-gray-400 mb-6">{category.longDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            {category.systemCount} {locale === 'ko' ? '개 시스템' : 'Systems'}
                          </span>
                          <span className="inline-flex items-center gap-2 text-gray-400 font-semibold">
                            {t('common.learnMore')}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={`/products/${categoryKey}`}
                      className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group h-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-aicons-primary/5 to-aicons-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-aicons-primary/10 flex items-center justify-center mb-6 group-hover:bg-aicons-primary/20 transition-colors">
                          <Icon className="w-8 h-8 text-aicons-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-aicons-dark mb-2 group-hover:text-aicons-primary transition-colors">
                          {category.name}
                        </h2>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <p className="text-sm text-gray-500 mb-6">{category.longDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {category.systemCount} {locale === 'ko' ? '개 시스템' : 'Systems'}
                          </span>
                          <span className="inline-flex items-center gap-2 text-aicons-primary font-semibold group-hover:gap-3 transition-all">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-aicons-primary mb-2">14+</div>
              <div className="text-gray-600">
                {locale === 'ko' ? 'AI 시스템' : 'AI Systems'}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-aicons-primary mb-2">90%+</div>
              <div className="text-gray-600">
                {locale === 'ko' ? '업무 자동화율' : 'Automation Rate'}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-aicons-primary mb-2">40%</div>
              <div className="text-gray-600">
                {locale === 'ko' ? '비용 절감' : 'Cost Reduction'}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-aicons-primary mb-2">3</div>
              <div className="text-gray-600">
                {locale === 'ko' ? '산업 분야' : 'Industries'}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsIndex
