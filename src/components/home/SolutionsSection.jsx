import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileSearch, Wand2, SlidersHorizontal, CalendarClock, Link2, Bot, ArrowRight } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

const solutionIconMap = {
  parsing: FileSearch,
  automation: Wand2,
  optimization: SlidersHorizontal,
  scheduling: CalendarClock,
  integration: Link2,
  feedback: Bot,
}

const technologies = ['parsing', 'automation', 'optimization', 'scheduling', 'integration', 'feedback']

function SolutionsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{t('solutionsPage.techTitle')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('solutionsPage.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((key, index) => {
            const Icon = solutionIconMap[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/solutions/${key}`}
                  className="block bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group h-full"
                >
                  <div className="
                    flex items-center justify-center w-14 h-14 mb-6
                    bg-neutral-950 rounded-xl
                  ">
                    <Icon className="w-7 h-7 text-neutral-50" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950 mb-2">{t(`solutionsPage.${key}.name`)}</h3>
                  <p className="text-gray-600 mb-6">{t(`solutionsPage.${key}.tagline`)}</p>
                  <span className="inline-flex items-center gap-2 text-primary-500 font-semibold">
                    {t('solutionsPage.learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
