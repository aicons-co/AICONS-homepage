import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Clock, TrendingUp, PieChart, BarChart3 } from 'lucide-react'
import { EfficiencyChart, CostSavingsChart } from '../charts'
import useTranslation from '../../hooks/useTranslation'

function SystemDetailModal({ system, isOpen, onClose }) {
  const { t, locale } = useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!system) return null

  const isComingSoon = system.status === 'coming_soon'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-alice-dark to-alice-navy">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">{system.name}</h2>
                  {isComingSoon && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-medium rounded-full">
                      <Clock className="w-3 h-3" />
                      {t('products.comingSoon')}
                    </span>
                  )}
                </div>
                <p className="text-gray-300">{system.fullName}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-6xl mx-auto space-y-8">
                {/* Description */}
                <div>
                  <p className="text-lg text-gray-600">{system.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-alice-dark mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-alice-primary" />
                    {locale === 'ko' ? '주요 기능' : 'Key Features'}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {system.features?.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <Check className="w-4 h-4 text-alice-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Charts */}
                {system.mockData && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Efficiency Chart */}
                    {system.mockData.efficiency && (
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-alice-dark mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-alice-primary" />
                          {locale === 'ko' ? '업무 효율 향상' : 'Efficiency Improvement'}
                        </h3>
                        <EfficiencyChart data={system.mockData.efficiency} />
                      </div>
                    )}

                    {/* Cost Savings Chart */}
                    {system.mockData.costSavings && (
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-alice-dark mb-4 flex items-center gap-2">
                          <PieChart className="w-5 h-5 text-alice-primary" />
                          {locale === 'ko' ? '비용 절감 효과' : 'Cost Savings Breakdown'}
                        </h3>
                        <CostSavingsChart data={system.mockData.costSavings} />
                      </div>
                    )}
                  </div>
                )}

                {/* Metrics Summary */}
                {system.mockData?.metrics && (
                  <div className="bg-gradient-to-r from-alice-primary to-alice-secondary rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      {locale === 'ko' ? '예상 성과' : 'Expected Results'}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Object.entries(system.mockData.metrics).map(([key, value]) => (
                        <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-white">
                            {typeof value === 'number'
                              ? (key.includes('Rate') || key.includes('Reduction') || key.includes('Savings') || key.includes('Efficiency') || key.includes('Gain') || key.includes('Speed') || key.includes('Improvement') || key.includes('Prevention')
                                ? `${value}%`
                                : value > 50
                                  ? `${value}%`
                                  : value)
                              : value
                            }
                          </div>
                          <div className="text-sm text-white/80 mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {locale === 'ko' ? '닫기' : 'Close'}
                </button>
                <button className="btn-primary">
                  {t('common.requestDemo')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SystemDetailModal
