import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Factory, ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { SystemCard, SystemDetailModal } from '../../components/products'
import useTranslation from '../../hooks/useTranslation'

function PlantProducts() {
  const { t, locale } = useTranslation()
  const [selectedSystem, setSelectedSystem] = useState(null)

  const category = t('products.categories.plant')

  if (!category) return null

  const systemKeys = Object.keys(category.systems || {})
  const isComingSoon = category.status === 'coming_soon'

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alice-dark to-alice-navy relative">
        {isComingSoon && (
          <div className="absolute top-6 right-6 md:top-10 md:right-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-amber-900 text-sm font-medium rounded-full">
              <Clock className="w-4 h-4" />
              {t('products.comingSoon')}
            </span>
          </div>
        )}

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
              <Factory className="w-10 h-10 text-alice-primary" />
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
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">{category.systemCount}</span>
              <span className="text-gray-300 ml-2">{locale === 'ko' ? '개 시스템' : 'Systems'}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-alice-primary">95%</span>
              <span className="text-gray-300 ml-2">{locale === 'ko' ? '설비 가동률' : 'Uptime Rate'}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-green-400">30%</span>
              <span className="text-gray-300 ml-2">{locale === 'ko' ? '다운타임 감소' : 'Downtime Reduction'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-alice-dark">
              {locale === 'ko' ? '플랜트 AI 시스템' : 'Plant AI Systems'}
            </h2>
            {isComingSoon && (
              <span className="text-sm text-amber-600 font-medium">
                {locale === 'ko' ? '향후 진행 예정' : 'Coming Soon'}
              </span>
            )}
          </div>

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

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-alice-dark mb-4">
                {locale === 'ko'
                  ? '스마트 플랜트 운영의 시작'
                  : 'The Beginning of Smart Plant Operations'
                }
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'ko'
                  ? 'AICONS 플랜트 AI 시스템은 정유, 화학, 산업 플랜트의 운영을 혁신합니다. 공정 최적화, 예측 정비, 안전 관리를 AI로 자동화하여 생산성을 높이고 리스크를 줄이세요.'
                  : 'AICONS Plant AI Systems revolutionize operations for oil & gas, chemical, and industrial plants. Boost productivity and reduce risks by automating process optimization, predictive maintenance, and safety management with AI.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">Oil & Gas</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '정유/가스' : 'Refinery/Gas'}</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">Chemical</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '석유화학' : 'Petrochemical'}</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">Industrial</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '산업' : 'Industrial'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === 'ko'
              ? '플랜트 AI 시스템에 관심이 있으신가요?'
              : 'Interested in Plant AI Systems?'
            }
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {locale === 'ko'
              ? '출시 소식을 가장 먼저 받아보시고, 사전 데모를 신청하세요.'
              : 'Be the first to hear about our launch and request an early demo.'
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

export default PlantProducts
