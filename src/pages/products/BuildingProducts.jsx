import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, ArrowLeft, ArrowRight } from 'lucide-react'
import { SystemCard, SystemDetailModal } from '../../components/products'
import useTranslation from '../../hooks/useTranslation'

function BuildingProducts() {
  const { t, locale } = useTranslation()
  const [selectedSystem, setSelectedSystem] = useState(null)

  const category = t('products.categories.building')

  if (!category) return null

  const systemKeys = Object.keys(category.systems || {})

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('products.viewAll')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-alice-primary/20 flex items-center justify-center">
              <Building2 className="w-10 h-10 text-alice-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-xl text-gray-300">{category.description}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-400 max-w-3xl"
          >
            {category.longDescription}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            <div className="bg-white/10 rounded-lg px-6 py-3 flex justify-center items-center">
              <span className="text-2xl font-bold text-white">{category.systemCount}</span>
              <span className="text-gray-300 ml-2">{t('products.stats.systems')}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3 flex justify-center items-center">
              <span className="text-2xl font-bold text-alice-primary">90%+</span>
              <span className="text-gray-300 ml-2">{t('products.stats.automation')}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3 flex justify-center items-center">
              <span className="text-2xl font-bold text-green-400">40%</span>
              <span className="text-gray-300 ml-2">{t('products.stats.costSavings')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-alice-dark mb-8">
            {locale === 'ko' ? '건축 AI 시스템' : 'Building AI Systems'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemKeys.map((key, index) => {
              const system = category.systems[key]
              return (
                <SystemCard
                  key={key}
                  system={system}
                  index={index}
                  onClick={() => setSelectedSystem(system)}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === 'ko'
              ? '건축 프로젝트를 혁신할 준비가 되셨나요?'
              : 'Ready to transform your building projects?'
            }
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {locale === 'ko'
              ? 'AICONS 건축 AI 시스템으로 설계부터 시공까지 모든 과정을 자동화하세요.'
              : 'Automate every phase from design to construction with AICONS Building AI Systems.'
            }
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-alice-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('common.requestDemo')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* System Detail Modal */}
      <SystemDetailModal
        system={selectedSystem}
        isOpen={!!selectedSystem}
        onClose={() => setSelectedSystem(null)}
      />
    </div>
  )
}

export default BuildingProducts
