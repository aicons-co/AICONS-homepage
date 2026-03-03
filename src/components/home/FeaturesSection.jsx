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
    },
    {
      icon: Shield,
      title: t('features.identifyRisks.title'),
      description: t('features.identifyRisks.description'),
    },
    {
      icon: Zap,
      title: t('features.recoverAccelerate.title'),
      description: t('features.recoverAccelerate.description'),
    },
    {
      icon: GitMerge,
      title: t('features.integrateControls.title'),
      description: t('features.integrateControls.description'),
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
            {/* {t('features.title')} <span className="text-primary-500">{t('features.titleHighlight')}</span>{t('features.titleEnd')} */}
            {/* {t('features.title')}  */}
            <span>{t('features.titleHighlight')}</span> {t('features.titleEnd')}
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
              {/* <div className="
                bg-white rounded-2xl p-8 h-full border
                border-gray-100 hover:border-primary-500/30
                hover:shadow-xl transition-all duration-300
              "> */}
              <div className="
                bg-white rounded-2xl p-8 h-full border
                border-neutral-400
                hover:border-primary-300
                transition-all duration-300
              ">
                {/* ✅ 아이콘 ${feature.color} */}
                <div className={`
                  flex items-center justify-center w-14 h-14 mb-6
                  rounded-xl bg-neutral-900
                  `}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-950 mb-3">
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
