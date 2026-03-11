import { ArrowRight, Clock } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function SystemCard({ system, onClick, index = 0 }) {
  const { t } = useTranslation()
  const isComingSoon = system.status === 'coming_soon'

  return (
    <div
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
        <h3 className="text-xl font-bold text-neutral-950 group-hover:text-primary-500 transition-colors">
          {system.name}
        </h3>
        <p className="text-sm text-gray-500">{system.fullName}</p>
      </div>

      <p className="text-gray-600 mb-12 line-clamp-2">{system.description}</p>


      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all">
          {t('common.learnMore')}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  )
}

export default SystemCard
