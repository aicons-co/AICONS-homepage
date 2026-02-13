import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Target, ChevronRight,
  FileSearch, Bot, CalendarClock, Link2,
  FileText, Database, Box, BarChart3, Settings, Workflow,
  Scissors, TrendingDown, Ruler, Calculator, RefreshCw, Layers,
  ClipboardCheck
} from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

// Icon mapping for dynamic icon rendering
const iconMap = {
  FileText, Database, Box, BarChart3, Settings, Workflow,
  Scissors, TrendingDown, Ruler, Calculator, RefreshCw, Layers,
  FileSearch, Bot, Target, CalendarClock, Link2, Check, ClipboardCheck
}

// Solution icons for index page
const solutionIconMap = {
  parsing: FileSearch,
  automation: Bot,
  optimization: Target,
  scheduling: CalendarClock,
  integration: Link2,
  feedback: ClipboardCheck
}

function SolutionPage({ solutionKey }) {
  const { t, locale } = useTranslation()

  const solutionPages = {
    parsing: {
      name: t('solutionsPage.parsing.name'),
      icon: FileSearch,
      tagline: t('solutionsPage.parsing.tagline'),
      description: t('solutionsPage.parsing.description'),
      features: t('solutionsPage.parsing.features'),
      metrics: t('solutionsPage.parsing.metrics'),
      useCases: t('solutionsPage.parsing.useCases'),
      workflow: t('solutionsPage.parsing.workflow'),
      recommendedProducts: t('solutionsPage.parsing.recommendedProducts'),
    },
    automation: {
      name: t('solutionsPage.automation.name'),
      icon: Bot,
      tagline: t('solutionsPage.automation.tagline'),
      description: t('solutionsPage.automation.description'),
      features: t('solutionsPage.automation.features'),
      metrics: t('solutionsPage.automation.metrics'),
      useCases: t('solutionsPage.automation.useCases'),
      workflow: t('solutionsPage.automation.workflow'),
      recommendedProducts: t('solutionsPage.automation.recommendedProducts'),
    },
    optimization: {
      name: t('solutionsPage.optimization.name'),
      icon: Target,
      tagline: t('solutionsPage.optimization.tagline'),
      description: t('solutionsPage.optimization.description'),
      features: t('solutionsPage.optimization.features'),
      metrics: t('solutionsPage.optimization.metrics'),
      useCases: t('solutionsPage.optimization.useCases'),
      workflow: t('solutionsPage.optimization.workflow'),
      recommendedProducts: t('solutionsPage.optimization.recommendedProducts'),
    },
    scheduling: {
      name: t('solutionsPage.scheduling.name'),
      icon: CalendarClock,
      tagline: t('solutionsPage.scheduling.tagline'),
      description: t('solutionsPage.scheduling.description'),
      features: t('solutionsPage.scheduling.features'),
      metrics: t('solutionsPage.scheduling.metrics'),
      useCases: t('solutionsPage.scheduling.useCases'),
      workflow: t('solutionsPage.scheduling.workflow'),
      recommendedProducts: t('solutionsPage.scheduling.recommendedProducts'),
    },
    integration: {
      name: t('solutionsPage.integration.name'),
      icon: Link2,
      tagline: t('solutionsPage.integration.tagline'),
      description: t('solutionsPage.integration.description'),
      features: t('solutionsPage.integration.features'),
      metrics: t('solutionsPage.integration.metrics'),
      useCases: t('solutionsPage.integration.useCases'),
      workflow: t('solutionsPage.integration.workflow'),
      recommendedProducts: t('solutionsPage.integration.recommendedProducts'),
    },
    feedback: {
      name: t('solutionsPage.feedback.name'),
      icon: ClipboardCheck,
      tagline: t('solutionsPage.feedback.tagline'),
      description: t('solutionsPage.feedback.description'),
      features: t('solutionsPage.feedback.features'),
      metrics: t('solutionsPage.feedback.metrics'),
      useCases: t('solutionsPage.feedback.useCases'),
      workflow: t('solutionsPage.feedback.workflow'),
      recommendedProducts: t('solutionsPage.feedback.recommendedProducts'),
    },
  }

  const productNames = {
    building: t('products.categories.building.name'),
    civil: t('products.categories.civil.name'),
    plant: t('products.categories.plant.name'),
  }

  const solution = solutionPages[solutionKey]

  if (!solution) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">{t('solutionsPage.solutionNotFound')}</h1>
        <Link to="/solutions/parsing" className="text-aicons-primary hover:underline">
          {t('solutionsPage.viewParsing')}
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-aicons-dark to-aicons-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-aicons-primary/20 flex items-center justify-center">
                <solution.icon className="w-8 h-8 text-aicons-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{solution.name}</h1>
                <p className="text-aicons-primary text-lg">{solution.tagline}</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8">{solution.description}</p>
            <div className="flex gap-4">
              <Link to="/demo" className="btn-primary">
                {t('solutionsPage.requestDemo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      {solution.metrics && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-aicons-dark text-center mb-10">{t('solutionsPage.keyMetrics')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(solution.metrics).map(([key, metric], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-aicons-primary mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {solution.features && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{t('solutionsPage.keyCapabilities')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solution.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Check
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-aicons-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-aicons-primary" />
                    </div>
                    <h3 className="font-semibold text-aicons-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {solution.useCases && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-aicons-dark text-center mb-4">{t('solutionsPage.useCases')}</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {locale === 'ko' ? `${solution.name} 기술의 실제 적용 사례를 확인하세요` : `Explore real-world applications of ${solution.name} technology`}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {solution.useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-aicons-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-aicons-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-aicons-dark mb-3">{useCase.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">{locale === 'ko' ? '시나리오:' : 'Scenario:'}</span>
                      <p className="text-gray-600 mt-1">{useCase.scenario}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">{locale === 'ko' ? '솔루션:' : 'Solution:'}</span>
                      <p className="text-gray-600 mt-1">{useCase.solution}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <span className="font-semibold text-green-700">{locale === 'ko' ? '결과:' : 'Result:'}</span>
                      <p className="text-green-600 mt-1">{useCase.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Workflow Section */}
      {solution.workflow && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-aicons-dark text-center mb-12">{t('solutionsPage.workflow')}</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-aicons-primary/20 hidden md:block" />

                <div className="space-y-6">
                  {solution.workflow.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-aicons-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10">
                        {step.step}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-5 -mt-1">
                        <h3 className="font-semibold text-aicons-dark mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recommended Products */}
      {solution.recommendedProducts && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-aicons-dark text-center mb-8">{t('solutionsPage.recommendedProducts')}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {solution.recommendedProducts.map((productKey) => (
                <Link
                  key={productKey}
                  to={`/products/${productKey}`}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <span className="font-semibold text-aicons-dark">{productNames[productKey]}</span>
                  <ChevronRight className="w-4 h-4 text-aicons-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-aicons-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('solutionsPage.readyToTransform')}
          </h2>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-aicons-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('solutionsPage.scheduleDemo')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function SolutionsIndex() {
  const { t } = useTranslation()
  const technologies = ['parsing', 'automation', 'optimization', 'scheduling', 'integration', 'feedback']

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-aicons-dark to-aicons-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('solutionsPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('solutionsPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-aicons-dark mb-8 text-center">{t('solutionsPage.techTitle')}</h2>
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
                    <div className="w-14 h-14 rounded-xl bg-aicons-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-aicons-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-aicons-dark mb-2">{t(`solutionsPage.${key}.name`)}</h3>
                    <p className="text-gray-600 mb-6">{t(`solutionsPage.${key}.tagline`)}</p>
                    <span className="inline-flex items-center gap-2 text-aicons-primary font-semibold">
                      {t('solutionsPage.learnMore')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

function Solutions() {
  return (
    <Routes>
      <Route index element={<SolutionsIndex />} />
      <Route path="parsing" element={<SolutionPage solutionKey="parsing" />} />
      <Route path="automation" element={<SolutionPage solutionKey="automation" />} />
      <Route path="optimization" element={<SolutionPage solutionKey="optimization" />} />
      <Route path="scheduling" element={<SolutionPage solutionKey="scheduling" />} />
      <Route path="integration" element={<SolutionPage solutionKey="integration" />} />
      <Route path="feedback" element={<SolutionPage solutionKey="feedback" />} />
    </Routes>
  )
}

export default Solutions
