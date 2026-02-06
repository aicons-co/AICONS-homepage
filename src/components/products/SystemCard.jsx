import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function SystemCard({ system, onClick, index = 0 }) {
  const { t } = useTranslation()
  const isComingSoon = system.status === 'coming_soon'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group ${
        isComingSoon ? 'opacity-80' : ''
      }`}
      onClick={onClick}
    >
      {isComingSoon && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            <Clock className="w-3 h-3" />
            {t('products.comingSoon')}
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold text-alice-dark group-hover:text-alice-primary transition-colors">
          {system.name}
        </h3>
        <p className="text-sm text-gray-500">{system.fullName}</p>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{system.description}</p>

      {system.mockData?.metrics && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {Object.entries(system.mockData.metrics).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-alice-primary">
                {typeof value === 'number' && value > 50 ? `${value}%` : value}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-alice-primary font-semibold text-sm group-hover:gap-3 transition-all">
          {t('common.learnMore')}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  )
}

export default SystemCard
