import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Landmark, ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { SystemCard, SystemDetailModal } from '../../components/products'
import useTranslation from '../../hooks/useTranslation'

function CivilProducts() {
  const { t, locale } = useTranslation()
  const [selectedSystem, setSelectedSystem] = useState(null)

  const category = t('products.categories.civil')

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
              <Landmark className="w-10 h-10 text-alice-primary" />
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
              <span className="text-2xl font-bold text-alice-primary">92%</span>
              <span className="text-gray-300 ml-2">{locale === 'ko' ? '예측 정확도' : 'Prediction Accuracy'}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-green-400">35%</span>
              <span className="text-gray-300 ml-2">{locale === 'ko' ? '유지보수 비용 절감' : 'Maintenance Savings'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-alice-dark">
              {locale === 'ko' ? '토목 AI 시스템' : 'Civil AI Systems'}
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
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-alice-dark mb-4">
                {locale === 'ko'
                  ? '토목 인프라 관리의 미래'
                  : 'The Future of Civil Infrastructure Management'
                }
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'ko'
                  ? 'AICONS 토목 AI 시스템은 교량, 터널, 도로 등 사회기반시설의 상태를 실시간으로 모니터링하고, AI 기반 예측 분석으로 유지보수를 최적화합니다. 인프라 자산의 수명을 연장하고 관리 비용을 절감하세요.'
                  : 'AICONS Civil AI Systems monitor the condition of bridges, tunnels, roads, and other infrastructure in real-time, optimizing maintenance with AI-based predictive analytics. Extend the lifespan of your infrastructure assets and reduce management costs.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">AI-BMS</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '교량 관리' : 'Bridge Management'}</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">AI-TMS</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '터널 관리' : 'Tunnel Management'}</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-semibold text-alice-primary">AI-RMS</span>
                  <span className="text-gray-500 ml-2">{locale === 'ko' ? '도로 관리' : 'Road Management'}</span>
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
              ? '토목 AI 시스템에 관심이 있으신가요?'
              : 'Interested in Civil AI Systems?'
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

export default CivilProducts
