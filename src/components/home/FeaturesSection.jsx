import { motion } from 'framer-motion'
import { Cpu, Shield, Zap, GitMerge } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Cpu,
      title: t('features.automateOptimization.title'),
      description: t('features.automateOptimization.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: t('features.identifyRisks.title'),
      description: t('features.identifyRisks.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: t('features.recoverAccelerate.title'),
      description: t('features.recoverAccelerate.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: GitMerge,
      title: t('features.integrateControls.title'),
      description: t('features.integrateControls.description'),
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            {t('features.title')} <span className="text-alice-primary">{t('features.titleHighlight')}</span>{t('features.titleEnd')}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-alice-primary/30 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-alice-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
